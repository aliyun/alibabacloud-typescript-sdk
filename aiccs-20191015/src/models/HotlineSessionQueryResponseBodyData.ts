// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotlineSessionQueryResponseBodyDataCallDetailRecord } from "./HotlineSessionQueryResponseBodyDataCallDetailRecord";


export class HotlineSessionQueryResponseBodyData extends $dara.Model {
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 26
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': HotlineSessionQueryResponseBodyDataCallDetailRecord },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callDetailRecord)) {
      $dara.Model.validateArray(this.callDetailRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

