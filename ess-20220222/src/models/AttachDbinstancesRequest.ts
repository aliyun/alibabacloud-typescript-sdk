// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The association mode between the scaling group and the database. Valid values:
   * 
   * - SecurityIp: The SecurityIp mode. In this mode, the IP addresses of scaled-out instances are automatically added to the IP address whitelist of the database. Currently, only ApsaraDB RDS databases support this mode.
   * - SecurityGroup: The security group mode. In this mode, the security group of the scaling configuration is added to the security group whitelist of the database for association and registration.
   * 
   * Default value: SecurityIp.
   * 
   * @example
   * SecurityIp
   */
  attachMode?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the parameter value is unique across different requests.
   * 
   * The value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of the RDS instances.
   * 
   * This parameter is required.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * Specifies whether to add the private IP addresses of all instances in the current scaling group to the IP address whitelist of the RDS instances when the RDS instances are attached to the scaling group. Valid values:
   * 
   * - true: Adds the private IP addresses.
   * 
   * - false: Does not add the private IP addresses.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceAttach?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1avr6ensitts3w****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - RDS
   * - Redis
   * - MongoDB
   * 
   * Default value: RDS.
   * 
   * @example
   * RDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachMode: 'AttachMode',
      clientToken: 'ClientToken',
      DBInstances: 'DBInstances',
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachMode: 'string',
      clientToken: 'string',
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

