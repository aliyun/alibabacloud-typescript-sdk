// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
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
   * 192.168.1.1:8848
   */
  originInstanceAddress?: string;
  /**
   * @remarks
   * The name of the source instance.
   * 
   * @example
   * Source instance
   */
  originInstanceName?: string;
  /**
   * @remarks
   * The list of namespaces. This parameter is optional if you want to migrate applications from a Nacos instance.
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
   * This is a description.
   */
  projectDesc?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  syncType?: string;
  /**
   * @remarks
   * The name of the destination instance.
   * 
   * @example
   * Destination instance
   */
  targetClusterName?: string;
  /**
   * @remarks
   * The URL of the destination instance.
   * 
   * @example
   * mse-66*****-nacos-ans.mse.aliyuncs.com:8848
   */
  targetClusterUrl?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * mse-cn-ud82*****
   */
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
      id: 'Id',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      requestPars: 'RequestPars',
      syncType: 'SyncType',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      id: 'string',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      requestPars: 'string',
      syncType: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

