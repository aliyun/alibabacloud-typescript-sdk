// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationTaskResponseBodyData extends $dara.Model {
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
   * The update time.
   * 
   * @example
   * 2021-12-30T06:41:52.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 1
   */
  id?: number;
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
   * test
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
   * test
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
   * mse-f1******-nacos-ans.mse.aliyuncs.com:8848
   */
  targetClusterUrl?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * mse-cn-zv*****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 2
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
      id: 'number',
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

export class ListMigrationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array structure.
   */
  data?: ListMigrationTaskResponseBodyData[];
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
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 451EBE59-5F33-5B15-83C1-78593B9*****
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
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMigrationTaskResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

