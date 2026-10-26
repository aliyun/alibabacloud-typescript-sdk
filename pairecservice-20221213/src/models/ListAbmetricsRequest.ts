// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain the ID by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name filter.
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to filter metrics by real-time type.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The scene ID. You can obtain the ID by calling the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The ID of the data table. You can obtain the ID by calling ListTableMetas.
   * 
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The metric type filter. Valid values:
   * 
   * - Single: Single metric.
   * 
   * - Derived: Derived metric.
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

