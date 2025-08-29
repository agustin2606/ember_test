import Component from '@glimmer/component';

export default class Filter extends Component {
  get iconSelector() {
    return this.args.query.s.startsWith('-') ? 'angle-down' : 'angle-up';
  }

  get textSelector(){
    return this.args.query.s.includes("title") ? "Title" : "Rating";
  }

  get testSelector(){
   let text = this.textSelector.toLowerCase();
   console.log(this.args.query.s.startsWith('-') ? `sort-by-${text}-desc` : `sort-by-${text}-asc`);
   return this.args.query.s.startsWith('-') ? `sort-by-${text}-desc` : `sort-by-${text}-asc`;
  }

}
