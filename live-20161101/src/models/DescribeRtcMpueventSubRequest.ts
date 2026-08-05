// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcMPUEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the subscribed application. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > ApsaraVideo Real-time Communication > Application Management**.
   * 
   * > 
   * > - The application ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
   * > - You must first call CreateRtcMPUEventSub to create a stream mixing and forwarding event subscription for this application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

