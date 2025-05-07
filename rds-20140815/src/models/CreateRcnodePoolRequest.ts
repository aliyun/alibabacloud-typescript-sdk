// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRCNodePoolRequestDataDisk } from "./CreateRcnodePoolRequestDataDisk";
import { CreateRCNodePoolRequestSystemDisk } from "./CreateRcnodePoolRequestSystemDisk";
import { CreateRCNodePoolRequestTag } from "./CreateRcnodePoolRequestTag";


export class CreateRCNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The number of RDS Custom instances that you want to create. The parameter is available if you want to create multiple RDS Custom instances at a time.
   * 
   * Valid values: **1** to **5**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables the feature. Make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  Default value: true. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. If you specify the subscription billing method for the instance, you must specify this parameter. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > 
   * 
   * *   Monthly subscription: The auto-renewal period is one month.
   * 
   * *   Annually: The auto-renewal period is one year.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the ACK cluster to which the RDS Custom instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to add the instance to the ACK cluster. If this parameter is set to **1**, the created instances can be added to the ACK cluster. This allows you to efficiently manage container applications. Valid values:
   * 
   * *   **1**: adds the instance to the ACK cluster.
   * *   **0** (default): does not add the instance to the ACK cluster.
   * 
   * @example
   * 1
   */
  createMode?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: CreateRCNodePoolRequestDataDisk[];
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default value: false. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance hostname.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image used by the instance.
   * 
   * @example
   * image-dsvjzw2ii8n4fvr6de
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Prepaid**: subscription.
   * *   **Postpaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. For more information about the instance types that are supported by RDS Custom instances, see [Instance types for RDS Custom instances](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the AccessKey pair. You can specify only one name.
   * 
   * @example
   * dell5502
   */
  keyPairName?: string;
  /**
   * @remarks
   * The name of the node pool.
   * 
   * @example
   * testNodePool
   */
  nodePoolName?: string;
  /**
   * @remarks
   * The password for the root account of the instance.
   * 
   * @example
   * testPassword
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Default value: **1**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month** (default)
   * 
   * @example
   * Year
   */
  periodUnit?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group. You can enter an existing security group ID. If no security groups exist, a security group is automatically created.
   * 
   * @example
   * sg-m5e9abdu1rtxa12b****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The supported scenario. If you set the **createMode** parameter to **1**, you must also specify the SupportCase parameter. Valid value: **edge**.
   * 
   * @example
   * edge
   */
  supportCase?: string;
  /**
   * @remarks
   * The specification of the system disk.
   */
  systemDisk?: CreateRCNodePoolRequestSystemDisk;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateRCNodePoolRequestTag[];
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  userData?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  The vSwitch must belong to the same zone as the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * >  If you specify the VSwitchId parameter, the zone specified by the ZoneId parameter must be the same as the zone in which the specified vSwitch resides. You can leave the ZoneId parameter empty. In this case, the system uses the zone in which the specified vSwitch resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      createMode: 'CreateMode',
      dataDisk: 'DataDisk',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      dryRun: 'DryRun',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      nodePoolName: 'NodePoolName',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      supportCase: 'SupportCase',
      systemDisk: 'SystemDisk',
      tag: 'Tag',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      clientToken: 'string',
      clusterId: 'string',
      createMode: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateRCNodePoolRequestDataDisk },
      deploymentSetId: 'string',
      description: 'string',
      dryRun: 'boolean',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      nodePoolName: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      supportCase: 'string',
      systemDisk: CreateRCNodePoolRequestSystemDisk,
      tag: { 'type': 'array', 'itemType': CreateRCNodePoolRequestTag },
      userData: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

