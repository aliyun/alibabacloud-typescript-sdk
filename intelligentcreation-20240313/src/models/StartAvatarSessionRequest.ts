// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAvatarSessionRequest extends $dara.Model {
  channelToken?: string;
  customPushUrl?: string;
  customUserId?: string;
  /**
   * @example
   * 13534711288320
   */
  projectId?: string;
  /**
   * @example
   * 15ED6083-B0B8-5B2A-BEDB-94A5C687C812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      customPushUrl: 'customPushUrl',
      customUserId: 'customUserId',
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      customPushUrl: 'string',
      customUserId: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

