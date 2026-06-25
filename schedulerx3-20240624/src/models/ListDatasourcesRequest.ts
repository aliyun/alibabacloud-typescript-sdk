// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Maximum data volume to read in this request. Default value is 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Job Name.
   * 
   * @example
   * 修正券统计数据
   */
  name?: string;
  /**
   * @remarks
   * Indicates the current read position returned by the call. An empty value means all data has been read. This parameter is not required for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Grafana dashboard type, including: dash-db: Dashboard; dash-folder: Folder (which can contain dashboards).
   * 
   * @example
   * REDIS
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

