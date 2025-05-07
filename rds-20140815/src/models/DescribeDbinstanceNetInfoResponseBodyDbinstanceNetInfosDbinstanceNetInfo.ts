// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfosDbinstanceNetInfoDbinstanceWeights";
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfosDbinstanceNetInfoSecurityIpgroups";


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $dara.Model {
  /**
   * @remarks
   * The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.
   * 
   * >  This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * 1433
   */
  babelfishPort?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * rm-uf6w*****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Normal**: a regular endpoint
   * *   **ReadWriteSplitting**: a read/write splitting endpoint
   * 
   * @example
   * Normal
   */
  connectionStringType?: string;
  /**
   * @remarks
   * The information about the instance weight.
   * 
   * >  This parameter is returned only when the read/write splitting feature is enabled for the instance.
   */
  DBInstanceWeights?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
  /**
   * @remarks
   * The policy that is used to assign read weights. This parameter is returned only for a read/write splitting endpoint. Valid values:
   * 
   * *   **Standard**: The system automatically allocates read weights to the instance and its read-only instances based on the specifications of the instances.
   * *   **Custom**: You must manually allocate read weights to the instance and its read-only instances.
   * 
   * @example
   * Standard
   */
  distributionType?: string;
  /**
   * @remarks
   * The remaining validity period of the instance in the classic network in hybrid access mode. Unit: seconds.
   * 
   * @example
   * 1209534
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type.
   * 
   * *   Valid values when the instance resides in the classic network:
   * 
   *     *   **Inner**
   *     *   **Public**
   * 
   * *   Valid values when the instance resides in a virtual private cloud (VPC):
   * 
   *     *   **Private**
   *     *   **Public**
   * 
   * @example
   * Public
   */
  IPType?: string;
  /**
   * @remarks
   * The latency threshold. This parameter is returned only for a read/write splitting endpoint. Unit: seconds.
   * 
   * >  If the latency on a read-only instance exceeds the specified threshold, ApsaraDB RDS no longer forwards read requests to the read-only instance.
   * 
   * @example
   * 12
   */
  maxDelayTime?: string;
  /**
   * @remarks
   * The PgBouncer port.
   * 
   * >  This parameter is returned only when PgBouncer is enabled for the instance that runs PostgreSQL.
   * 
   * @example
   * 6432
   */
  PGBouncerPort?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist for the instance.
   */
  securityIPGroups?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
  /**
   * @remarks
   * Indicates whether the IP version can be updated. Valid values:
   * 
   * *   **Enable**
   * *   **Disabled**
   * 
   * >  The IP version can be updated from IPv4 to IPv6.
   * 
   * @example
   * Disabled
   */
  upgradeable?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-uf6f7l4fg90*****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6adz52c2p*****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      babelfishPort: 'BabelfishPort',
      connectionString: 'ConnectionString',
      connectionStringType: 'ConnectionStringType',
      DBInstanceWeights: 'DBInstanceWeights',
      distributionType: 'DistributionType',
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      IPType: 'IPType',
      maxDelayTime: 'MaxDelayTime',
      PGBouncerPort: 'PGBouncerPort',
      port: 'Port',
      securityIPGroups: 'SecurityIPGroups',
      upgradeable: 'Upgradeable',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishPort: 'string',
      connectionString: 'string',
      connectionStringType: 'string',
      DBInstanceWeights: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights,
      distributionType: 'string',
      expiredTime: 'string',
      IPAddress: 'string',
      IPType: 'string',
      maxDelayTime: 'string',
      PGBouncerPort: 'string',
      port: 'string',
      securityIPGroups: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups,
      upgradeable: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.DBInstanceWeights && typeof (this.DBInstanceWeights as any).validate === 'function') {
      (this.DBInstanceWeights as any).validate();
    }
    if(this.securityIPGroups && typeof (this.securityIPGroups as any).validate === 'function') {
      (this.securityIPGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

