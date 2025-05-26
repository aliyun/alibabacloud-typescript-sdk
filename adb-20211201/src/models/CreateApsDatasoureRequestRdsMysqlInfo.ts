// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureRequestRdsMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * The URL used to connect to the read-only instance.
   * 
   * @example
   * ******
   */
  connectUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The password of the database account of the instance.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The name of the database account of the instance.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
      securityGroup: 'SecurityGroup',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      instanceId: 'string',
      password: 'string',
      regionId: 'string',
      securityGroup: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

