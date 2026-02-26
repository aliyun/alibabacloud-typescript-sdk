// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Division } from "./Division";


export class DivisionPageResult extends $dara.Model {
  divisionList?: Division[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionList: 'divisionList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionList: { 'type': 'array', 'itemType': Division },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.divisionList)) {
      $dara.Model.validateArray(this.divisionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

