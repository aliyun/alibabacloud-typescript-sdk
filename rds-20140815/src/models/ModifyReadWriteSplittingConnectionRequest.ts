// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReadWriteSplittingConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the read/write splitting endpoint. The prefix must be unique and can contain only lowercase letters and hyphens. It must start with a letter and be up to 30 characters in length.
   * > By default, the prefix consists of the instance name and the "rw" string.
   * 
   * @example
   * rm-m5****rw.mysql.rds.aliyuncs.com
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * Instance ID of the primary instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The read weight distribution mode. Valid values:
   * * **Standard**: automatically distributes weights based on instance specifications.
   * * **Custom**: uses custom weights.
   * 
   * > You must specify at least one of the **MaxDelayTime** and **DistributionType** parameters.
   * 
   * @example
   * Standard
   */
  distributionType?: string;
  /**
   * @remarks
   * The latency threshold, in seconds. If the latency of a read-only instance exceeds this threshold, read traffic is not routed to the instance. If you do not specify this parameter, the original value is retained.
   * 
   * > * The **MaxDelayTime** parameter does not apply to SQL Server 2017 Cluster Edition instances.
   * > * You must specify at least one of the **MaxDelayTime** and **DistributionType** parameters.
   * 
   * @example
   * 12
   */
  maxDelayTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port number of the read/write splitting endpoint.
   * 
   * @example
   * 3306
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The read weights of the primary and read-only instances. The weight value must be a multiple of 100 and can be up to 10000.
   * * Format for ApsaraDB RDS instances: `{"<Read-only instance ID>":<Weight>,"master":<Weight>,"slave":<Weight>}`
   * * Format for MyBase instances: `[{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"master"},{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"slave"},{"instanceName":"<Read-only instance ID>","weight":<Weight>,"role":"master"}]`
   * 
   * > * This parameter is required when **DistributionType** is set to **Custom**.
   * > * This parameter does not take effect when **DistributionType** is set to **Standard**.
   * 
   * @example
   * {
   *       "rm-bp1****": 800,
   *       "master": 400,
   *       "slave": 400
   * }
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      distributionType: 'DistributionType',
      maxDelayTime: 'MaxDelayTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      distributionType: 'string',
      maxDelayTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

