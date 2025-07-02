// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster type.
   * 
   * This parameter is required.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * Deployment mode.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * Instance Type
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Whether to change the configuration.
   * 
   * @example
   * false
   */
  isModification?: boolean;
  /**
   * @remarks
   * Node group ID.
   * 
   * @example
   * G-F06C4B47966A****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Node group type.
   * 
   * This parameter is required.
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * Payment type.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the region in which you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * EMR distribution.
   * 
   * @example
   * EMR-5.8.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * Availability Zone ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      deployMode: 'DeployMode',
      instanceType: 'InstanceType',
      isModification: 'IsModification',
      nodeGroupId: 'NodeGroupId',
      nodeGroupType: 'NodeGroupType',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      deployMode: 'string',
      instanceType: 'string',
      isModification: 'boolean',
      nodeGroupId: 'string',
      nodeGroupType: 'string',
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

