// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnrichResponseBodyDataSolutionList } from "./EnrichResponseBodyDataSolutionList";


export class EnrichResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * solution list
   */
  solutionList?: EnrichResponseBodyDataSolutionList[];
  static names(): { [key: string]: string } {
    return {
      solutionList: 'solution_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionList },
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

