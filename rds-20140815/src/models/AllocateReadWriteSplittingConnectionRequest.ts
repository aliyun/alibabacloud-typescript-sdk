// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateReadWriteSplittingConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the read-only endpoint. The prefix must be unique, can contain lowercase letters and hyphens (-), must start with a letter, and cannot exceed 30 characters in length.
   * 
   * > By default, the prefix is in the format of "instance name + rw".
   * 
   * @example
   * rr-m5e****-rw.mysql.rds.aliyuncs.com
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the primary instance. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The mode of read weight distribution. Valid values:
   * 
   * - **Standard**: Read weights are automatically assigned based on instance specifications.
   * - **Custom**: Read weights are manually assigned.
   * 
   * @example
   * Standard
   */
  distributionType?: string;
  /**
   * @remarks
   * The latency threshold. Valid values: 0 to 7200. Unit: seconds. Default value: 30.
   * 
   * > When the latency of a read-only instance exceeds this threshold, read traffic is not routed to the instance.
   * 
   * @example
   * 30
   */
  maxDelayTime?: string;
  /**
   * @remarks
   * The network type of the read-only endpoint. Valid values:
   * 
   * - **Internet**: public endpoint.
   * - **Intranet**: internal endpoint.
   * 
   * > The default value is Intranet, and the network type of the internal endpoint is the same as that of the primary instance.
   * 
   * @example
   * Intranet
   */
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port of the read-only endpoint. Valid values: 1000 to 5999. Default value: 1433.
   * 
   * @example
   * 1433
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The read weight distribution, which specifies the ratio of read requests that are routed to the primary instance and read-only instances. The value is incremented in steps of 100. Maximum value: 10000.
   * 
   * * Format for ApsaraDB RDS instances: `{"<Read-only instance ID>":<Weight>,"master":<Weight>,"slave":<Weight>}`
   * * Format for MyBASE instances: `[{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"master"},{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"slave"},{"instanceName":"<Read-only instance ID>","weight":<Weight>,"role":"master"}]`
   * 
   * > - This parameter is required when **DistributionType** is set to **Custom**.
   * > - This parameter is invalid when **DistributionType** is set to **Standard**.
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
      netType: 'NetType',
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
      netType: 'string',
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

