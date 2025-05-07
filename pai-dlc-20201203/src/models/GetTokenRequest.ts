// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the share link expires. Default value: 604800. Minimum value: 0. Unit: seconds.
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
   * The type of the job that you want to share. Valid values: job and tensorboard.
   * 
   * @example
   * job
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

