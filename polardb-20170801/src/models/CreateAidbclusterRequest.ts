// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterRequestTimeSlices extends $dara.Model {
  /**
   * @remarks
   * The start time of the task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 1758729600
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
   * 
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
   * @remarks
   * Specifies whether the cluster is managed by an ACK cluster.
   * 
   * @example
   * yes
   */
  ackAdmin?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * - **false**: disables auto-renewal.
   * 
   * Default value: **false**.
   * 
   * > This parameter takes effect only when the **PayType** parameter is set to **Prepaid**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): uses coupons.
   * * false: does not use coupons.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The initial model capacity of the instance. The value must be a positive integer. A capacity unit of 1000 is equivalent to one L20N equivalent card.
   * 
   * @example
   * 4000
   */
  capacity?: number;
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to create a public endpoint.
   * 
   * @example
   * ON
   */
  createPublicEndpoint?: string;
  /**
   * @remarks
   * The description of the cluster. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The PolarDB instance ID on which the application depends.
   * 
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * polar.pg.g4.6xlarge.gu4
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The extension.
   * 
   * @example
   * maas
   */
  extension?: string;
  /**
   * @remarks
   * The inference engine.
   * 
   * @example
   * sglang
   */
  inferenceEngine?: string;
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxx
   */
  kubeClusterId?: string;
  /**
   * @remarks
   * The Kubernetes configuration.
   * 
   * @example
   * xxx
   */
  kubeConfig?: string;
  /**
   * @remarks
   * The management mode of the Kubernetes cluster.
   * 
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
   * @remarks
   * The Kubernetes configuration.
   * 
   * @example
   * xxx
   */
  kubernetesConfig?: string;
  /**
   * @remarks
   * The management mode.
   * 
   * @example
   * ack
   */
  managementMode?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * Qwen3-30B-A3B
   */
  modelName?: string;
  /**
   * @remarks
   * The model operator space.
   * 
   * @example
   * pms-xxx
   */
  modelSpace?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * The billing method. Valid values: 
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * If the billing method is **Prepaid**, you must pass parameter. Specifies the upfront cluster as yearly or monthly. Valid values: 
   * 
   * - **Year**: yearly. The unit is year.
   * - **Month**: monthly. The unit is month.
   * 
   * @example
   * 5
   */
  period?: string;
  /**
   * @remarks
   * The coupon code. If you do not specify this parameter, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
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
   * The ID of the security group.
   * 
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The storage space.
   * 
   * @example
   * 1024
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * essdpl0
   */
  storageType?: string;
  /**
   * @remarks
   * The pay-as-you-go time ranges.
   */
  timeSlices?: CreateAIDBClusterRequestTimeSlices[];
  /**
   * @remarks
   * The subscription duration. This parameter is required when the billing method is set to **Prepaid**.
   * - If **Period** is set to **Month**, the value of **UsedTime** is an integer ranging from `1` to `9`.
   * - If **Period** is set to **Year**, the value of **UsedTime** is an integer ranging from `1` to `3`.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ackAdmin: 'AckAdmin',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      createPublicEndpoint: 'CreatePublicEndpoint',
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
      modelName: 'ModelName',
      modelSpace: 'ModelSpace',
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
      capacity: 'number',
      clientToken: 'string',
      createPublicEndpoint: 'string',
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
      modelName: 'string',
      modelSpace: 'string',
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

