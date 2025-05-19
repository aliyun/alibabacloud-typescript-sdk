// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunRCInstancesShrinkRequestTag } from "./RunRcinstancesShrinkRequestTag";


export class RunRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of RDS Custom instances that you want to create. The parameter is available if you want to create multiple RDS Custom instances at a time.
   * 
   * Valid values: **1** to **10**. Default value: **1**.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature. Valid values:
   * 
   * *   **true** (default): enables the feature. Make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  If your account balance is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  createAckEdgeParamShrink?: string;
  createExtraParam?: string;
  createMode?: string;
  /**
   * @remarks
   * The information about the data disks.
   */
  dataDiskShrink?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-uf6670sipmph5j5b6ke4
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The billing method of the instance. Set the value to **Prepaid**, which indicates the subscription billing method.
   * 
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * ceshi
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
   * null
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
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
   * The password of the account that is used to log on to the instance.
   * 
   * @example
   * 2F9e9@a69c!e18b569c8
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
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which you want to add the new instance. Instances in the same security group can communicate with each other. The maximum number of instances allowed in a security group varies based on the type of the security group. For more information, see the "Security group limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * >  The network type of the instance is determined by the security group specified by the SecurityGroupId parameter. For example, if the network type of the specified security group is VPC, the instance is a VPC-type instance. In this case, you must specify the VSwitchId parameter.
   * 
   * @example
   * sg-uf6av412xaxixuezol6w
   */
  securityGroupId?: string;
  spotStrategy?: string;
  supportCase?: string;
  /**
   * @remarks
   * The specification of the system disk.
   */
  systemDiskShrink?: string;
  tag?: RunRCInstancesShrinkRequestTag[];
  userData?: string;
  userDataInBase64?: boolean;
  /**
   * @remarks
   * The vSwitch ID of the instance. You must specify this parameter when you create an instance of the virtual private cloud (VPC) type. The specified vSwitch and security group must belong to the same VPC.
   * 
   * >  If you specify the VSwitchId parameter, the zone specified by the ZoneId parameter must be the same as the zone in which the specified vSwitch resides. You can leave the ZoneId parameter empty. In this case, the system uses the zone in which the specified vSwitch resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2vcd61ngm890sk****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the DescribeZones operation to query the zone IDs.
   * 
   * >  If you specify the VSwitchId parameter, the zone specified by the ZoneId parameter must be the same as the zone in which the specified vSwitch resides. You can leave the ZoneId parameter empty. In this case, the system uses the zone in which the specified vSwitch resides.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      createAckEdgeParamShrink: 'CreateAckEdgeParam',
      createExtraParam: 'CreateExtraParam',
      createMode: 'CreateMode',
      dataDiskShrink: 'DataDisk',
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
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      supportCase: 'SupportCase',
      systemDiskShrink: 'SystemDisk',
      tag: 'Tag',
      userData: 'UserData',
      userDataInBase64: 'UserDataInBase64',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      createAckEdgeParamShrink: 'string',
      createExtraParam: 'string',
      createMode: 'string',
      dataDiskShrink: 'string',
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
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      supportCase: 'string',
      systemDiskShrink: 'string',
      tag: { 'type': 'array', 'itemType': RunRCInstancesShrinkRequestTag },
      userData: 'string',
      userDataInBase64: 'boolean',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

