// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual cluster ID.
   * 
   * > - For `ACK` type clusters, this is the ACK cluster ID.
   * > - For `CUSTOM` type clusters, this serves as a unique identifier with no additional meaning.
   * 
   * @example
   * c666d4774f0e2440b979bf917bf100e40
   */
  clusterId?: string;
  /**
   * @remarks
   * - `Running`: The cluster is managed normally.
   * - `Installing`: An installation task is in progress for the cluster.
   * - `Uninstalling`: An uninstallation task is in progress for the cluster.
   * - `Upgrading`: An update task is in progress for the cluster.
   * - `Offline`: The cluster is offline and management is abnormal.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * - `ACK`: ACK cluster.
   * - `CUSTOM`: Custom cluster (default clusters belong to custom clusters).
   * 
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 5389fba5-92a1-4ff4-9b26-773b97828144
   */
  id?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * auto-name-sbvCT
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-12-25T15:08:19
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      createdAt: 'created_at',
      id: 'id',
      name: 'name',
      region: 'region',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      region: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListClustersResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListClustersResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

