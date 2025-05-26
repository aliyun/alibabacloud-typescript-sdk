// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourceResponseBodyApsDatasourcePolarDBMysqlInfo extends $dara.Model {
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  across?: boolean;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  acrossRole?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  acrossUid?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  connectUrl?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  regionId?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  securityGroup?: string;
  /**
   * @remarks
   * The parameter is no longer supported.
   * 
   * @example
   * -
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      connectUrl: 'ConnectUrl',
      instanceId: 'InstanceId',
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

