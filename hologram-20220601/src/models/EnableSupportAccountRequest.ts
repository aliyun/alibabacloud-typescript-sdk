// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSupportAccountRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 2023-03-24 11:19:05
   */
  expireTime?: string;
  /**
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

