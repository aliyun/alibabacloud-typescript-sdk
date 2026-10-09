// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupabaseProjectRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Limits:
   * 
   * - It cannot be an empty string.
   * - It can be up to 128 characters in length.
   * - It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be an empty string. It can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * test-value
   */
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
   * The initial account password.
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
   * Specifies whether to enable auto-start and auto-stop. If you do not specify this parameter, the default value is false.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The backup set ID.
   * 
   * > You can call [ListSupabaseDataBackups](https://help.aliyun.com/document_detail/3064623.html) to view the IDs of all backup sets under the target Supabase project.
   * 
   * @example
   * 2176307784
   */
  backupId?: string;
  /**
   * @remarks
   * The client token. It is used to ensure idempotence and prevent duplicate requests from executing the same operation.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The optional creation parameters. The default value is empty.
   * 
   * @example
   * {}
   */
  createOptions?: string;
  /**
   * @remarks
   * The performance level of the cloud disk. If you do not specify this parameter, the default value is PL0.
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
   * The DPI engine version. If you do not specify this parameter, the default value is PG15. PostgreSQL 17 and later versions support the data sandbox (branch) feature.
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
  /**
   * @remarks
   * Specifies whether the project is the lightweight edition.
   * 
   * @example
   * false
   */
  lightweight?: boolean;
  /**
   * @remarks
   * The billing method. If you do not specify this parameter, the default value is Free.
   * 
   * Valid values:
   * 
   * - Free: the free billing method.
   * - Postpaid: pay-as-you-go.
   * - Prepaid: subscription.
   * 
   * @example
   * Free
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter takes effect only when PayType is set to Prepaid. If you do not specify this parameter, the default value is Month.
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
   * - The name can contain only letters, digits, hyphens (-), and underscores (_).
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
   * The specifications of the Supabase project. The free billing method uses the free specifications. For paid billing methods, the specifications must be consistent with those available in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 2C4G
   */
  projectSpec?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address whitelist. Separate multiple IP addresses or CIDR blocks with commas (,). If you do not specify this parameter, the default value 0.0.0.0/0 is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  securityIPList?: string;
  /**
   * @remarks
   * The ID of the Supabase project to which the backup set belongs.
   * 
   * @example
   * spb-xxxxxxxx
   */
  srcProjectId?: string;
  /**
   * @remarks
   * The storage capacity. Unit: GB. If you do not specify this parameter for a non-free billing method, the default value is 1.
   * 
   * @example
   * 50
   */
  storageSize?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateSupabaseProjectRequestTags[];
  /**
   * @remarks
   * The subscription duration of the resource. This parameter takes effect only when PayType is set to Prepaid. If you do not specify this parameter, the default value is 1.
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
   * The zone ID. The zone of the vSwitch specified by VSwitchId must be the same as the value of this parameter.
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
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      createOptions: 'CreateOptions',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      engineVersion: 'EngineVersion',
      lightweight: 'Lightweight',
      payType: 'PayType',
      period: 'Period',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      srcProjectId: 'SrcProjectId',
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
      backupId: 'string',
      clientToken: 'string',
      createOptions: 'string',
      diskPerformanceLevel: 'string',
      engineVersion: 'string',
      lightweight: 'boolean',
      payType: 'string',
      period: 'string',
      projectName: 'string',
      projectSpec: 'string',
      regionId: 'string',
      securityIPList: 'string',
      srcProjectId: 'string',
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

