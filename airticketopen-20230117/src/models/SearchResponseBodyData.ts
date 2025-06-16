// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchResponseBodyDataSolutionList } from "./SearchResponseBodyDataSolutionList";


export class SearchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * solution list
   */
  solutionList?: SearchResponseBodyDataSolutionList[];
  static names(): { [key: string]: string } {
    return {
      solutionList: 'solution_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionList },
    };
  }

  validate() {
    if(Array.isArray(this.solutionList)) {
      $dara.Model.validateArray(this.solutionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

