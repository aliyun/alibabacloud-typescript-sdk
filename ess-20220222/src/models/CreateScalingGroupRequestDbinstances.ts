// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestDBInstances extends $dara.Model {
  /**
   * @remarks
   * The mode in which you want to attach the database to the scaling group. Valid values:
   * 
   * *   SecurityIp: the mode in which Auto Scaling automatically adds the private IP addresses of ECS instances to the IP address whitelist of the database during scale-out events. You can set the value to SecurityIp only if you set Type to RDS.
   * *   SecurityGroup: the mode in which Auto Scaling adds the security group of the applied scaling configuration to the security group whitelist of the database. This setting allows ECS instances created from the scaling configuration to access the database.
   * 
   * @example
   * SecurityIp
   */
  attachMode?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * rm-m5eqju85s45mu0***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database type. Valid values:
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
      DBInstanceId: 'DBInstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachMode: 'string',
      DBInstanceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

