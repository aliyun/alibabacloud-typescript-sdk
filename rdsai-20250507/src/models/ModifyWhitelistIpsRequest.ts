// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWhitelistIpsRequest extends $dara.Model {
  /**
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @example
   * 127.0.0.1,192.168.1.0/24
   */
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipWhitelist: 'IpWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipWhitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

