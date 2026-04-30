// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterRequestTimeSlices extends $dara.Model {
  /**
   * @example
   * 1758729600
   */
  beginTime?: number;
  /**
   * @example
   * 1758733200
   */
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIDBClusterRequest extends $dara.Model {
  /**
   * @example
   * yes
   */
  ackAdmin?: string;
  /**
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polar.pg.g4.6xlarge.gu4
   */
  DBNodeClass?: string;
  /**
   * @example
   * maas
   */
  extension?: string;
  /**
   * @example
   * sglang
   */
  inferenceEngine?: string;
  /**
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxx
   */
  kubeClusterId?: string;
  /**
   * @example
   * xxx
   */
  kubeConfig?: string;
  /**
   * @example
   * self_k8s
   */
  kubeManagement?: string;
  /**
   * @remarks
   * aideploy
   * 
   * @example
   * aideploy
   */
  kubeType?: string;
  /**
   * @example
   * xxx
   */
  kubernetesConfig?: string;
  /**
   * @example
   * ack
   */
  managementMode?: string;
  /**
   * @example
   * Qwen3-30B-A3B
   */
  modeName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 5
   */
  period?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @example
   * 1024
   */
  storageSpace?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * essdpl0
   */
  storageType?: string;
  timeSlices?: CreateAIDBClusterRequestTimeSlices[];
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ackAdmin: 'AckAdmin',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBNodeClass: 'DBNodeClass',
      extension: 'Extension',
      inferenceEngine: 'InferenceEngine',
      kubeClusterId: 'KubeClusterId',
      kubeConfig: 'KubeConfig',
      kubeManagement: 'KubeManagement',
      kubeType: 'KubeType',
      kubernetesConfig: 'KubernetesConfig',
      managementMode: 'ManagementMode',
      modeName: 'ModeName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      timeSlices: 'TimeSlices',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackAdmin: 'string',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBNodeClass: 'string',
      extension: 'string',
      inferenceEngine: 'string',
      kubeClusterId: 'string',
      kubeConfig: 'string',
      kubeManagement: 'string',
      kubeType: 'string',
      kubernetesConfig: 'string',
      managementMode: 'string',
      modeName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      storageSpace: 'number',
      storageType: 'string',
      timeSlices: { 'type': 'array', 'itemType': CreateAIDBClusterRequestTimeSlices },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timeSlices)) {
      $dara.Model.validateArray(this.timeSlices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

