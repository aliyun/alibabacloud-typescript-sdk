// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileSummaryInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS20250801152639000005
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  name?: string;
  /**
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusList?: string[];
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      name: 'Name',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
      name: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

