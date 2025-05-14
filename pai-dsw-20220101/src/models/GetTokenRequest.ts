// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period. Unit: seconds.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

