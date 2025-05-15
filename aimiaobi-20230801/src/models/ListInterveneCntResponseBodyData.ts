// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneCntResponseBodyData extends $dara.Model {
  cntList?: any[];
  code?: number;
  /**
   * @example
   * 10
   */
  pageCnt?: number;
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
  static names(): { [key: string]: string } {
    return {
      cntList: 'CntList',
      code: 'Code',
      pageCnt: 'PageCnt',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cntList: { 'type': 'array', 'itemType': 'any' },
      code: 'number',
      pageCnt: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cntList)) {
      $dara.Model.validateArray(this.cntList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

