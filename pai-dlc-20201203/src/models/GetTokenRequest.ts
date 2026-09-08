// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TokenSettings } from "./TokenSettings";


export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the sharing link in seconds. Default value: 604800. Minimum value: 0.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the task to share.
   * 
   * @example
   * dlc*******
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task to share. Valid values: job and tensorboard.
   * 
   * @example
   * job
   */
  targetType?: string;
  tokenSettings?: TokenSettings;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      targetId: 'TargetId',
      targetType: 'TargetType',
      tokenSettings: 'TokenSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      targetId: 'string',
      targetType: 'string',
      tokenSettings: TokenSettings,
    };
  }

  validate() {
    if(this.tokenSettings && typeof (this.tokenSettings as any).validate === 'function') {
      (this.tokenSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

