// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupabaseProjectRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the initial account.
   * 
   * Password rules:
   * 
   * - The password must be 8 to 32 characters in length.
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Supported special characters include !@#$%^&*()_+-=.
   * 
   * This parameter is required.
   * 
   * @example
   * TestPassword123!
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto start/stop. If this parameter is not specified, the default value is false.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The idempotency token. Ensures that repeated requests do not execute the same operation more than once.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk. If this parameter is not specified, the default value PL0 is used.
   * 
   * Valid values:
   * 
   * - PL0
   * - PL1
   * - PL2
   * - PL3
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The DPI engine version. If this parameter is not specified, the default value PG15 is used. PG17 and later versions support the data sandbox (branch) feature.
   * 
   * Valid values:
   * 
   * - PG15: PostgreSQL 15.
   * - PG17: PostgreSQL 17, which supports the data sandbox feature.
   * 
   * @example
   * PG15
   */
  engineVersion?: string;
  lightweight?: boolean;
  /**
   * @remarks
   * The billing method. If this parameter is not specified, the default value Free is used.
   * 
   * Valid values:
   * 
   * - Free: Free tier.
   * - Postpaid: Pay-as-you-go.
   * - Prepaid: Subscription.
   * 
   * @example
   * Free
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter takes effect only when PayType is set to PrePay. If this parameter is not specified, the default value Month is used.
   * 
   * Valid values:
   * 
   * - Month: month.
   * - Year: year.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The name of the Supabase project.
   * 
   * Naming rules:
   * 
   * - The name must be 1 to 128 characters in length.
   * - The name can contain letters, digits, hyphens (-), and underscores (_).
   * - The name must start with a letter or an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * supabase_demo
   */
  projectName?: string;
  /**
   * @remarks
   * The specifications of the Supabase project. The Free billing type uses free-tier specifications. For paid billing types, the specifications must match those available in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 2C4G
   */
  projectSpec?: string;
  /**
   * @remarks
   * The region ID. Specifies the region in which to create the project.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address whitelist. Separate multiple IP addresses or CIDR blocks with commas (,). If this parameter is not specified, the default value 0.0.0.0/0 is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  securityIPList?: string;
  /**
   * @remarks
   * The storage size. Unit: GB. If this parameter is not specified for non-Free billing types, the default value is 1 GB.
   * 
   * @example
   * 50
   */
  storageSize?: number;
  tags?: CreateSupabaseProjectRequestTags[];
  /**
   * @remarks
   * The subscription duration. This parameter takes effect only when PayType is set to PrePay. If this parameter is not specified, the default value is 1.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required. The zone of the vSwitch must be the same as the value of ZoneId.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1234567890
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1234567890
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. The zone of the vSwitch specified by VSwitchId must be the same as this parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      autoScale: 'AutoScale',
      clientToken: 'ClientToken',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engineVersion: 'EngineVersion',
      lightweight: 'Lightweight',
      payType: 'PayType',
      period: 'Period',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      storageSize: 'StorageSize',
      tags: 'Tags',
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
      lightweight: 'boolean',
      payType: 'string',
      period: 'string',
      projectName: 'string',
      projectSpec: 'string',
      regionId: 'string',
      securityIPList: 'string',
      storageSize: 'number',
      tags: { 'type': 'array', 'itemType': CreateSupabaseProjectRequestTags },
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

