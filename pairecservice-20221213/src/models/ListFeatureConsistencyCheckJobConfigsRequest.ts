// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. To obtain an instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * - `ASC`: Ascending order.
   * 
   * - `DESC`: Descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value starts at 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The field to sort by.
   * 
   * - `GmtCreateTime`: Creation time.
   * 
   * - `GmtModifiedTime`: Modified time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

