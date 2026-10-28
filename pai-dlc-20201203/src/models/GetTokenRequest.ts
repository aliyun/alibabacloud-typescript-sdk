// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TokenSettings } from "./TokenSettings";


export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the sharing link. Default value: 604800 seconds. Minimum value: 0.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the job to be shared.
   * 
   * @example
   * dlc*******
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the shared job. Valid values: job and tensorboard.
   * 
   * @example
   * job
   */
  targetType?: string;
  /**
   * @remarks
   * The permission settings of the sharing token, which controls log download and cross-account access.
   */
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

