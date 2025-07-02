// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeAttributes extends $dara.Model {
  /**
   * @remarks
   * 是否启用云盘加密。取值范围：
   * - true：启用加密。
   * - false：不加密。
   * 
   * 默认值：false，不加密
   * 
   * @example
   * false
   */
  dataDiskEncrypted?: boolean;
  /**
   * @remarks
   * KMS加密秘钥ID。
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  dataDiskKMSKeyId?: string;
  /**
   * @remarks
   * ECS ssh登录秘钥。
   * 
   * @example
   * emr_login
   */
  keyPairName?: string;
  /**
   * @remarks
   * MASTER节点root密码。
   * 
   * @example
   * Adxefswfd****
   */
  masterRootPassword?: string;
  /**
   * @remarks
   * ECS访问资源绑定的角色。
   * 
   * @example
   * AliyunECSInstanceForEMRRole
   */
  ramRole?: string;
  /**
   * @remarks
   * 安全组ID。EMR只支持普通安全组，不支持企业安全组。
   * 
   * This parameter is required.
   * 
   * @example
   * sg-hp3abbae8lb6lmb1****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 是否启用云盘加密。取值范围：
   * - true：启用加密。
   * - false：不加密。
   * 
   * 默认值：false，不加密
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * KMS加密秘钥ID。
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKMSKeyId?: string;
  /**
   * @remarks
   * 专有网络ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1tgey2p0ytxmdo5****
   */
  vpcId?: string;
  /**
   * @remarks
   * 可用区ID。
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

