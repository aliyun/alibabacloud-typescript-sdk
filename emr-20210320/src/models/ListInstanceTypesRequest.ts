// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * This parameter is required.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies the deployment mode.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance type is for an instance type change. A value of true indicates an instance type change.
   * 
   * @example
   * false
   */
  isModification?: boolean;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * G-F06C4B47966A****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node group type.
   * 
   * This parameter is required.
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The EMR release version.
   * 
   * @example
   * Released version EMR-5.8.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The zone ID.
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

