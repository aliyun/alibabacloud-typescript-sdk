// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterRequestTimeSlices extends $dara.Model {
  /**
   * @remarks
   * The start time of the billing interval. The time is in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 1758729600
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the billing interval, which must be later than the start time. The time is in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
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
   * - **true**: Auto-renewal is enabled.
   * 
   * - **false**: Auto-renewal is disabled.
   * 
   * Default value: **false**.
   * 
   * > This parameter takes effect only when **PayType** is set to **Prepaid**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the cluster. You can use the description to perform a fuzzy search.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster that the application depends on.
   * 
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node specification.
   * 
   * This parameter is required.
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
   * The Container Service for Kubernetes (ACK) cluster ID.
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
   * The type of the Kubernetes deployment.
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
   * @example
   * Qwen3-30B-A3B
   */
  modelName?: string;
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
   * 
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
   * The unit of the subscription duration. This parameter is required if **PayType** is set to **Prepaid**. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * @example
   * 5
   */
  period?: string;
  /**
   * @remarks
   * The coupon code. If you do not specify this parameter, the default coupon is used.
   * 
   * - true (default): Use a coupon.
   * 
   * - false: Do not use a coupon.
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
   * The security group ID.
   * 
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The storage space. Unit: GB.
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
   * The billing intervals for the pay-as-you-go cluster.
   */
  timeSlices?: CreateAIDBClusterRequestTimeSlices[];
  /**
   * @remarks
   * The subscription duration. This parameter is required if **PayType** is set to **Prepaid**.
   * 
   * - If **Period** is set to **Month**, the value of **UsedTime** must be an integer from `[1-9]`.
   * 
   * - If **Period** is set to **Year**, the value of **UsedTime** must be an integer from `[1-3]`.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The availability zone ID.
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
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

