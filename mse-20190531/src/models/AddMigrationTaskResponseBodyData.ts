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

