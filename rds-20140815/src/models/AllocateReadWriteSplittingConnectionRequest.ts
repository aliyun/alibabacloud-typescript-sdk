// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateReadWriteSplittingConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the read-only routing endpoint. The prefix must be unique. It can be up to 30 characters in length and can contain lowercase letters and hyphens (-). It must start with a lowercase letter.
   * 
   * >  The default prefix consists of the name of the primary instance followed by the letters rw.
   * 
   * @example
   * rr-m5exxxxx-rw.mysql.rds.aliyuncs.com
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The primary instance ID. You can call the DescribeDBInstances operation to query the primary instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method that is used to assign read weights. Valid values:
   * 
   * *   **Standard**: The system automatically assigns read weights to the primary and read-only instances based on the specifications of these instances.
   * *   **Custom**: You must manually assign a read weight to each instance.
   * 
   * @example
   * Standard
   */
  distributionType?: string;
  /**
   * @remarks
   * The threshold of the latency that is allowed on the read-only instances. Valid values: 0 to 7200. Default value: 30. Unit: seconds.
   * 
   * >  If the latency on a read-only instance exceeds the specified threshold, ApsaraDB RDS does not forward read requests to the read-only instance.
   * 
   * @example
   * 30
   */
  maxDelayTime?: string;
  /**
   * @remarks
   * The network type of the read-only routing endpoint. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * >  The default value is Intranet. Make sure that the network type of the read-only routing endpoint is the same as that of the primary instance.
   * 
   * @example
   * Intranet
   */
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port that is associated with the read-only routing endpoint. Valid values: 1000 to 5999. Default value: 1433.
   * 
   * @example
   * 1433
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The read weights of the primary instance and its read-only instances. The read weight is increased in increments of 100. The maximum value is 10000.
   * 
   * *   For ApsaraDB RDS instances, the value of this parameter is in the following format: `{"<ID of the read-only instance >":<Weight>,"master":<Weight>,"slave":<Weight>}`.
   * *   For ApsaraDB MyBase instances, the value of this parameter is in the following format: `[{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"master"},{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"slave"},{"instanceName":"<Read-only instance ID>","weight":<Weight>,"role":"master"}]`
   * 
   * > 
   * 
   * *   This parameter must be specified when **DistributionType** is set to **Custom**.
   * 
   * *   If **DistributionType** is set to **Standard**, this parameter is invalid.
   * 
   * @example
   * {"rm-bp1**********":800,"master":400,"slave":400}
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

