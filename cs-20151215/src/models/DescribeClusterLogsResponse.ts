// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the log entry.
   * 
   * @example
   * 590749245
   */
  ID?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c23421cfa74454bc8b37163fd19af***
   */
  clusterId?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * start to update cluster status to CREATE_COMPLETE
   */
  clusterLog?: string;
  /**
   * @remarks
   * The time when the log entry was generated.
   * 
   * @example
   * 2020-09-11T10:11:51+08:00
   */
  created?: string;
  /**
   * @remarks
   * The time when the log entry was updated.
   * 
   * @example
   * 2020-09-11T10:11:51+08:00
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

