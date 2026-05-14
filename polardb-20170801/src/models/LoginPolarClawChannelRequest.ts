// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginPolarClawChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * openclaw-weixin
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

