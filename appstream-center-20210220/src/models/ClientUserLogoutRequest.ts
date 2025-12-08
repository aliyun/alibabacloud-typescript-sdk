// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientUserLogoutRequest extends $dara.Model {
  /**
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b****
   */
  clientId?: string;
  /**
   * @example
   * v22369636c721ba6b3ddb1683341016775c3f63e4d0e78f120f9a0544ed826b7af7daf747c402f0d0730b52f451b70****
   */
  loginToken?: string;
  /**
   * @example
   * cn-hongkong+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn_hangzhou
   */
  profileRegion?: string;
  /**
   * @example
   * 597e869d-ea14-4b83-9490-714f68****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      profileRegion: 'ProfileRegion',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      profileRegion: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

