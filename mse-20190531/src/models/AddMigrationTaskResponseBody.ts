// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMigrationTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Cluster type.
   * 
   * - Nacos-Ans
   * - ZooKeeper
   * - Eureka
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * Source instance node address.
   * 
   * @example
   * 192.168.1.1:8848
   */
  originInstanceAddress?: string;
  /**
   * @remarks
   * Source instance name.
   * 
   * @example
   * Source instance
   */
  originInstanceName?: string;
  /**
   * @remarks
   * Namespace list, required when the source cluster is Nacos.
   * 
   * @example
   * namesapceId1,namesapceId2
   */
  originInstanceNamespace?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * testsdfsdfsd
   */
  projectDesc?: string;
  /**
   * @remarks
   * SyncType
   * 
   * @example
   * Service
   */
  syncType?: string;
  /**
   * @remarks
   * Target instance name.
   * 
   * @example
   * Destination instance
   */
  targetClusterName?: string;
  /**
   * @remarks
   * Target instance URL.
   * 
   * @example
   * mse-94d****-nacos-ans.mse.aliyuncs.com:8848
   */
  targetClusterUrl?: string;
  /**
   * @remarks
   * Target instance ID.
   * 
   * @example
   * mse-cn-7pp2w*****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 183876217*****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      id: 'Id',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      syncType: 'SyncType',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      id: 'string',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      syncType: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMigrationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data structure.
   */
  data?: AddMigrationTaskResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7466566F-F30F-4A29-965D-3E0AF21D****
   */
  requestId?: string;
  /**
   * @remarks
   * 请求结果，取值如下：
   * - `true`：请求成功。
   * - `false`：请求失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddMigrationTaskResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

