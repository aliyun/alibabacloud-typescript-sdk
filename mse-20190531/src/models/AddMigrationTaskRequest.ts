// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Language type of the returned information:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
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
   * This is a description.
   */
  projectDesc?: string;
  /**
   * @remarks
   * Extended request parameters, in JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
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
   * mse-66*****-nacos-ans.mse.aliyuncs.com:8848
   */
  targetClusterUrl?: string;
  /**
   * @remarks
   * Target instance ID.
   * 
   * @example
   * mse-cn-ud82*****
   */
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
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

