// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel extends $dara.Model {
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * test_switch
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The storage space occupied by data backups, excluding archived backups. Unit: bytes.
   * 
   * @example
   * 8139046912
   */
  backupDataSize?: number;
  /**
   * @remarks
   * The size of backup logs. Unit: bytes.
   * 
   * @example
   * 21183797
   */
  backupLogSize?: number;
  /**
   * @remarks
   * The backup size. Unit: MB.
   * 
   * @example
   * 53002759
   */
  backupSize?: number;
  /**
   * @remarks
   * The disk capacity.
   * 
   * @example
   * 200
   */
  dbInstanceStorage?: number;
  /**
   * @remarks
   * The name of the database proxy instance.
   * 
   * @example
   * mr-n1m1wjrylfolvrt67s
   */
  dbProxyInstanceName?: string;
  /**
   * @remarks
   * The used storage space, which consists of the space occupied by data files and log files. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 4871684096
   */
  diskUsed?: number;
  /**
   * @remarks
   * The instance storage type.
   * 
   * @example
   * cloud_essd
   */
  instanceStorageType?: string;
  /**
   * @remarks
   * The RDS whitelist group specifications.
   */
  rdsEcsSecurityGroupRel?: DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EA815761-F7AC-5CFE-A1AC-709D6A00B58A
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmv3h25bj7yhq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The [IP whitelist](https://help.aliyun.com/document_detail/43185.html) of the instance. Separate multiple entries with commas (,). Each entry must be unique. A maximum of 1,000 entries are supported. The following two formats are supported:
   * * IP address format, such as 10.10.XX.XX.
   * * CIDR format, such as 10.10.XX.XX/24, where 24 indicates the length of the prefix in the IP address. The prefix length ranges from 1 to 32.
   * 
   * If this parameter is not specified, the whitelist information of the default group of the original instance is used.
   * 
   * @example
   * 172.16.1.14,172.16.1.13,172.16.1.44,172.16.1.43,172.16.1.74,172.16.1.73
   */
  securityIPList?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > The vSwitch must belong to the same zone as the ApsaraDB RDS instance.
   * 
   * @example
   * vsw-2zelwi1jd271p670lzl8h
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-wz9rbibex7v0lxbeyo6at
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDataSize: 'BackupDataSize',
      backupLogSize: 'BackupLogSize',
      backupSize: 'BackupSize',
      dbInstanceStorage: 'DbInstanceStorage',
      dbProxyInstanceName: 'DbProxyInstanceName',
      diskUsed: 'DiskUsed',
      instanceStorageType: 'InstanceStorageType',
      rdsEcsSecurityGroupRel: 'RdsEcsSecurityGroupRel',
      region: 'Region',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDataSize: 'number',
      backupLogSize: 'number',
      backupSize: 'number',
      dbInstanceStorage: 'number',
      dbProxyInstanceName: 'string',
      diskUsed: 'number',
      instanceStorageType: 'string',
      rdsEcsSecurityGroupRel: { 'type': 'array', 'itemType': DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel },
      region: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rdsEcsSecurityGroupRel)) {
      $dara.Model.validateArray(this.rdsEcsSecurityGroupRel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

