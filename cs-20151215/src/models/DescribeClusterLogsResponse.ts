// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 日志ID。
   * 
   * @example
   * 73117232145******
   */
  ID?: number;
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c23421cfa74454bc8b37163fd19af***
   */
  clusterId?: string;
  /**
   * @remarks
   * 日志内容。
   * 
   * @example
   * start to update cluster status to CREATE_COMPLETE
   */
  clusterLog?: string;
  /**
   * @remarks
   * 日志产生时间。
   * 
   * @example
   * 2025-04-10T17:54:26+08:00
   */
  created?: string;
  /**
   * @remarks
   * 日志更新时间。
   * 
   * @example
   * 2025-04-10T17:54:26+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      clusterId: 'cluster_id',
      clusterLog: 'cluster_log',
      created: 'created',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'number',
      clusterId: 'string',
      clusterLog: 'string',
      created: 'string',
      updated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterLogsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeClusterLogsResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

