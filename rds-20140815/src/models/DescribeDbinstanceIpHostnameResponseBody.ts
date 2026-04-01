// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIpHostnameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The internal IP addresses and hostnames of the ECS instance on which a primary ApsaraDB RDS for SQL Server instance and its secondary RDS instance reside. Format: `IP address 1, Hostname 1; IP address 2, Hostname 2`.
   * 
   * @example
   * 172.16.xx.xx,sdxxxxxxxxB;172.16.xx.xx,sdxxxxxxxxA
   */
  ipHostnameInfos?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67CD4719-51E3-4A76-A38C-02F45FAE7E36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ipHostnameInfos: 'IpHostnameInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ipHostnameInfos: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

