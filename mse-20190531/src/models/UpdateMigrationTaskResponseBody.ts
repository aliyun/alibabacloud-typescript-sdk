// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMigrationTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   Nacos-Ans
   * *   ZooKeeper
   * *   Eureka
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The address of the source instance node.
   * 
   * @example
   * 192.168.100.2:2181
   */
  originInstanceAddress?: string;
  /**
   * @remarks
   * The name of the source instance.
   * 
   * @example
   * src
   */
  originInstanceName?: string;
  /**
   * @remarks
   * The list of namespaces. This parameter is optional if applications are migrated from a Nacos instance.
   * 
   * @example
   * fsdfsdfdsf
   */
  originInstanceNamespace?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 1232345
   */
  projectDesc?: string;
  syncType?: string;
  /**
   * @remarks
   * The name of the destination instance.
   * 
   * @example
   * multiple-nacos
   */
  targetClusterName?: string;
  /**
   * @remarks
   * The URL of the destination instance.
   * 
   * @example
   * mse-0b*****-nacos-ans.mse.aliyuncs.com:8848
   */
  targetClusterUrl?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * mse-cn-zvp2u*****
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
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
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
      gmtCreate: 'string',
      gmtModified: 'string',
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

export class UpdateMigrationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  data?: UpdateMigrationTaskResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AF21683A-29C7-4853-AC0F-B5ADEE4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateMigrationTaskResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
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

