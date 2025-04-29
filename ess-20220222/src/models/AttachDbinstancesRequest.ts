// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The mode in which you want to attach the database to the scaling group. Valid values:
   * 
   * *   SecurityIp: adds the private IP addresses of scaled out ECS instances to the IP address whitelist of the database. Take note that you can choose this mode only when the database that you want to attach is an ApsaraDB RDS instance.
   * *   SecurityGroup: adds the security group of the scaling configuration based on which ECS instances are created in the scaling group to the security group whitelist of the database for registration.
   * 
   * Default value: SecurityIp.
   * 
   * @example
   * SecurityIp
   */
  attachMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests.
   * 
   * The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence of a request](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances that you want to attach to the scaling group.
   * 
   * This parameter is required.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * Specifies whether to add the private IP addresses of all ECS instances in the scaling group to the IP address whitelist of the ApsaraDB RDS instance that you want to attach to the scaling group. Valid values:
   * 
   * *   true
   * *   false
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
   * The type of the database that you want to attach to the scaling group. Valid values:
   * 
   * *   RDS
   * *   Redis
   * *   MongoDB
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

