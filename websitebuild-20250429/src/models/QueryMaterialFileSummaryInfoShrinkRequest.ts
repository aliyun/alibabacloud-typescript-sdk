// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileSummaryInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * WS20250801152639000005
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * File name
   */
  name?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values: ASC, DESC.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The file statuses.
   */
  statusListShrink?: string;
  /**
   * @remarks
   * The file types.
   */
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

