// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIpHostnameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The internal IP addresses and hostnames of the underlying ECS instances for the ApsaraDB RDS for SQL Server instance, including the primary and secondary instances. Format: `ip1,hostname1;ip2,hostname2`.
   * 
   * @example
   * 172.16.xx.xx,sd****B;172.16.xx.xx,sd****A
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

