// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel } from "./DescribeResourceDetailsResponseBodyRdsEcsSecurityGroupRel";


export class DescribeResourceDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The storage that is occupied by data backup files, excluding archived backup files, on the instance. Unit: bytes.
   * 
   * @example
   * 8139046912
   */
  backupDataSize?: number;
  /**
   * @remarks
   * The size of the backup log. Unit: bytes.
   * 
   * @example
   * 21183797
   */
  backupLogSize?: number;
  /**
   * @remarks
   * The size of the backup data. Unit: MB.
   * 
   * @example
   * 53002759
   */
  backupSize?: number;
  /**
   * @remarks
   * The disk capacity of the instance.
   * 
   * @example
   * 200
   */
  dbInstanceStorage?: number;
  /**
   * @remarks
   * The name of the proxy instance.
   * 
   * @example
   * mr-n1m1wjrylfolvrt67s
   */
  dbProxyInstanceName?: string;
  /**
   * @remarks
   * The total storage used. The value is the sum of the DataSize and LogSize values. Unit: bytes. The value -1 indicates that no data files or log files are stored.
   * 
   * @example
   * 4871684096
   */
  diskUsed?: number;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * cloud_essd
   */
  instanceStorageType?: string;
  /**
   * @remarks
   * The rule for the IP address whitelist of the instance.
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
   * The request ID.
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
   * The IP address whitelist of the instance. For more information, see [Configure IP address whitelists](https://help.aliyun.com/document_detail/43185.html). If the returned IP address whitelist contains more than one entry, these entries are separated with commas (,). Each entry is unique and up to 1,000 entries are returned. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 10.10.XX.XX.
   * *   CIDR blocks, such as 10.10.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * If this parameter is not specified, the default IP address whitelist is used.
   * 
   * @example
   * 172.16.1.14,172.16.1.13,172.16.1.44,172.16.1.43,172.16.1.74,172.16.1.73
   */
  securityIPList?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * >  The vSwitch must belong to the same zone as the instance.
   * 
   * @example
   * vsw-2zelwi1jd271p670lzl8h
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
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

