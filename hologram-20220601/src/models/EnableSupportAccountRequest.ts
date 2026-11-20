// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSupportAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * **[Deprecated]** The deprecated parameter.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The expiration time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-03-24 11:19:05
   */
  expireTime?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * xxxx
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      enabled: 'enabled',
      expireTime: 'expireTime',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      enabled: 'boolean',
      expireTime: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

