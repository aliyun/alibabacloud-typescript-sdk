// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. Call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name to use for filtering metrics.
   * 
   * @example
   * home
   */
  name?: string;
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
   * The number of entries to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to filter for real-time metrics.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The scene ID. Call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain the ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The data table ID. Call the ListTableMetas operation to obtain the ID.
   * 
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The metric type. You can use this parameter to filter the results. Valid values:
   * 
   * - `Single`: A single metric.
   * 
   * - `Derived`: A derived metric.
   * 
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realtime: 'Realtime',
      sceneId: 'SceneId',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtime: 'boolean',
      sceneId: 'string',
      tableMetaId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

