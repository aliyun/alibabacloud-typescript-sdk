// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMigrationTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
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
   * The ID of the task.
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * The address of the source instance node.
   * 
   * @example
   * 192.168.1.1:8848
   */
  originInstanceAddress?: string;
  /**
   * @remarks
   * The name of the source instance.
   * 
   * @example
   * Source cluster
   */
  originInstanceName?: string;
  /**
   * @remarks
   * The list of namespaces. This parameter is optional when the source cluster is Nacos.
   * 
   * @example
   * namesapceId1,namesapceId2
   */
  originInstanceNamespace?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * testsdfsdfsd
   */
  projectDesc?: string;
  /**
   * @remarks
   * The synchronization type.
   * 
   * @example
   * Service
   */
  syncType?: string;
  /**
   * @remarks
   * The name of the target instance.
   * 
   * @example
   * Target cluster
   */
  targetClusterName?: string;
  /**
   * @remarks
   * The URL of the target instance.
   * 
   * @example
   * mse-94d****-nacos-ans.mse.aliyuncs.com:8848
   */
  targetClusterUrl?: string;
  /**
   * @remarks
   * The instance ID of the target instance.
   * 
   * @example
   * mse-cn-7pp2w*****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * The data structure.
   */
  data?: AddMigrationTaskResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * The request is processed successfully.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7466566F-F30F-4A29-965D-3E0AF21D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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

