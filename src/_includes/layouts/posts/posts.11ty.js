exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {

  return `
  <main>
    <div class="container">
      <h1 class="ctr topOfMain">Posts</h1>
      <div class="post-line"></div>
      <div class="container-narrower">
        ${data.content}
        ${this.postslist(data, data.pagination.items)}
        }
      </div>
      <div>
        ${this.paginationNav(data)}
      </div>
    </div>
  </main>  
  `
}
