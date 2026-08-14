// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAutoCcBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  blacklist?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
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

