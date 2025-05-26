// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureRequestPolarDBMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the data source is a cross-account resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * The name of the cross-account role.
   * 
   * @example
   * test-role
   */
  acrossRole?: string;
  /**
   * @remarks
   * The cross-account UID.
   * 
   * @example
   * 123456789*
   */
  acrossUid?: string;
  /**
   * @remarks
   * The URL used to connect to the custom ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * ****
   */
  connectUrl?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-bp*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ***
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
   * The username used to access the instance.
   * 
   * @example
   * test-user-name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
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
      across: 'boolean',
      acrossRole: 'string',
      acrossUid: 'string',
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

