// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the initial account.
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - The following special characters are supported: `!@#$%^&*()_+-=`
   * - The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  autoScale?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88888888****
   */
  clientToken?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. Default value: PL0. Valid values:
   * - PL0
   * - PL1
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  engineVersion?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * > - If you do not specify this parameter, an instance of the Free type is created by default.
   * > - If you select the subscription billing method, you can receive discounts when you purchase a one-year or longer subscription. We recommend that you select a billing method based on your business requirements.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * - **Month**: month.
   * - **Year**: year.
   * 
   * > This parameter is required when you create a subscription instance.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The project name. The naming rules are as follows:
   * 
   * - The name must be 1 to 128 characters in length.
   * 
   * - The name can contain only letters, digits, hyphens (-), and underscores (_).
   * 
   * - The name must start with a letter or an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * saas_iot_x86_modbustcp_lqt01
   */
  projectName?: string;
  /**
   * @remarks
   * The Supabase instance specification. The default specification for the Free type is 1C1G. The specifications for paid types are consistent with those available on the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1C1G
   */
  projectSpec?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) to view the available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * The value 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. After the instance is created, you can call [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) to modify the IP address whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The storage size. Unit: GB. Default value: 1.
   * 
   * @example
   * 2
   */
  storageSize?: number;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * - If **Period** is set to **Month**, the valid values are 1 to 11.
   * - If **Period** is set to **Year**, the valid values are 1 to 3.
   * 
   * > This parameter is required when you create a subscription instance.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > - The **vSwitchId** parameter is required.
   * > - The zone of the **vSwitch** must be the same as the value of **ZoneId**.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * >  - You can call [DescribeRdsVpcs](https://help.aliyun.com/document_detail/208327.html) to view the available VPC IDs.
   * > - This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) to view the available zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      autoScale: 'AutoScale',
      clientToken: 'ClientToken',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      period: 'Period',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      storageSize: 'StorageSize',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      autoScale: 'boolean',
      clientToken: 'string',
      diskPerformanceLevel: 'string',
      engineVersion: 'string',
      payType: 'string',
      period: 'string',
      projectName: 'string',
      projectSpec: 'string',
      regionId: 'string',
      securityIPList: 'string',
      storageSize: 'number',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

