// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileSummaryInfoShrinkRequest extends $dara.Model {
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
  statusListShrink?: string;
  typeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      name: 'Name',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusListShrink: 'StatusList',
      typeListShrink: 'TypeList',
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
      statusListShrink: 'string',
      typeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

