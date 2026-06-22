// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeAttributes extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable encryption for the data disk. For more information, see <props="china">[Encrypt a data disk](https://help.aliyun.com/zh/ecs/user-guide/encrypt-a-data-disk)<props="intl">[Encrypt a data disk](https://www.alibabacloud.com/help/en/ecs/user-guide/encryption-overview). Valid values:
   * 
   * - true: Enables encryption.
   * 
   * - false (default): Disables encryption.
   * 
   * @example
   * false
   */
  dataDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key for the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  dataDiskKMSKeyId?: string;
  /**
   * @remarks
   * The SSH key pair for logging on to the ECS instances.
   * 
   * @example
   * emr_login
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password of the root user for the master node. This parameter is left empty in the response of an API call.
   * 
   * @example
   * EAQ#86****
   */
  masterRootPassword?: string;
  /**
   * @remarks
   * The RAM role that is attached to the ECS instances to access other cloud resources.
   * Default value: AliyunECSInstanceForEMRRole.
   * 
   * @example
   * AliyunECSInstanceForEMRRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the security group. EMR supports only basic security groups and does not support enterprise security groups.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-hp3abbae8lb6lmb1****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption for the system disk. Valid values:
   * 
   * - true: Enables encryption.
   * 
   * - false (default): Disables encryption.
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKMSKeyId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1tgey2p0ytxmdo5****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      keyPairName: 'KeyPairName',
      masterRootPassword: 'MasterRootPassword',
      ramRole: 'RamRole',
      securityGroupId: 'SecurityGroupId',
      systemDiskEncrypted: 'SystemDiskEncrypted',
      systemDiskKMSKeyId: 'SystemDiskKMSKeyId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      keyPairName: 'string',
      masterRootPassword: 'string',
      ramRole: 'string',
      securityGroupId: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKMSKeyId: 'string',
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

