// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervenesResponseBodyDataInterveneList } from "./ListIntervenesResponseBodyDataInterveneList";


export class ListIntervenesResponseBodyData extends $dara.Model {
  code?: number;
  interveneList?: ListIntervenesResponseBodyDataInterveneList[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      interveneList: 'InterveneList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      interveneList: { 'type': 'array', 'itemType': ListIntervenesResponseBodyDataInterveneList },
      pageIndex: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.interveneList)) {
      $dara.Model.validateArray(this.interveneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

