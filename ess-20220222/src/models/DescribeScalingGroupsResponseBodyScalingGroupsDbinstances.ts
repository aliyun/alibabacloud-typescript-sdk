// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupsResponseBodyScalingGroupsDBInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * rm-m5eqju85s45mu0***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The IDs of the security groups that are added to the security group whitelist of the attached database.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   RDS.
   * *   Redis.
   * *   MongoDB.
   * 
   * @example
   * RDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

