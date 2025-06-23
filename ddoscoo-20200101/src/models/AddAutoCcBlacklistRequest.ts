// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAutoCcBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses that you want to manage. This parameter is a JSON string. The string contains the following field:
   * 
   * *   **src**: the IP address. This field is required and must be of the STRING type.
   * 
   * >  You can manually add up to 2,000 IP addresses to the IP address blacklist. Separate multiple IP addresses with spaces or line breaks.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"src":"198.51.XX.XX"},{"src":"198.52.XX.XX"}]
   */
  blacklist?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      blacklist: 'Blacklist',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blacklist: 'string',
      expireTime: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

