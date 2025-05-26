// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureRequestRdsMysqlInfo extends $dara.Model {
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
  password?: string;
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
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      password: 'Password',
      regionId: 'RegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      password: 'string',
      regionId: 'string',
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

