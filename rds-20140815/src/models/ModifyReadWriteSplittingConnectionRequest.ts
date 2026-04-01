// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReadWriteSplittingConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the read/write splitting endpoint. The prefix must be unique. It can be up to 30 characters in length and can contain lowercase letters and hyphens (-). It must start with a lowercase letter.
   * 
   * > The default prefix consists of the name of the primary instance followed by the letters rw.
   * 
   * @example
   * rm-m5xxxxxxxxrw.mysql.rds.aliyuncs.com
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the primary instance. You can call the DescribeDBInstances operation to query the instance ID.
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
   * > You must specify at least one of **MaxDelayTime** and **DistributionType**.
   * 
   * @example
   * Standard
   */
  distributionType?: string;
  /**
   * @remarks
   * The latency threshold that is allowed by the read/write splitting link. Unit: seconds. If the latency on a read-only instance exceeds the specified threshold, the system no longer routes read requests to the read-only instance. If you do not specify this parameter, the default value of this parameter is retained.
   * 
   * > *   If the primary instance runs SQL Server 2017 on RDS Cluster Edition, the **MaxDelayTime** parameter is not supported.
   * > *   You must specify at least one of **MaxDelayTime** and **DistributionType**.
   * 
   * @example
   * 12
   */
  maxDelayTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port that is associated with the read/write splitting endpoint.
   * 
   * @example
   * 3306
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The read weights of the primary instance and its read-only instances. A read weight must be a multiple of 100 and cannot exceed 10,000.
   * 
   * *   For ApsaraDB RDS instances, the value of this parameter is in the following format: `{"<ID of the read-only instance >":<Weight>,"master":<Weight>,"slave":<Weight>}`.
   * *   For ApsaraDB MyBase instances, the value of this parameter is in the following format: `[{"instanceName":"<ID of the primary instance>","weight":<Weight>,"role":"master"},{"instanceName":"<ID of the primary instance>","weight":<Weight>,"role":"slave"},{"instanceName":"<ID of the read-only instance>","weight":<Weight>,"role":"master"}]`
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

