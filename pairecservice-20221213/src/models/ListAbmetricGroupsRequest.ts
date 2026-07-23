// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC: ascending.
   * 
   * - DESC: descending.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return only real-time A/B metric groups.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The scene ID. You can call the [ListScenes](\\(~~2402581~~\\)) operation to obtain this ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The field to sort the results by. Valid values:
   * 
   * - GmtCreateTime: creation time.
   * 
   * - GmtModifiedTime: modification time.
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
      realtime: 'Realtime',
      sceneId: 'SceneId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtime: 'boolean',
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

