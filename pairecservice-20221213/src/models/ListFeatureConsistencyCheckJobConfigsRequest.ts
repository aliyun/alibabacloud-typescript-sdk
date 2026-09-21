// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. For information about how to obtain an instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
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
   * The scene ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The field used to sort the results. Valid values:
   * - GmtCreateTime: sorts by creation time.
   * - GmtModifiedTime: sorts by update time.
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
      sceneId: 'SceneId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sceneId: 'string',
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

