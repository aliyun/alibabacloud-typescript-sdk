// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpireLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The logon username.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  endUserId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v185fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d****
   */
  loginToken?: string;
  /**
   * @remarks
   * The ID of the workspace. This parameter is required if you log on using a workspace ID. You can leave this parameter empty if you log on using an organization ID.
   * 
   * @example
   * cn-beijing+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the logon session.
   * 
   * This parameter is required.
   * 
   * @example
   * a863f4c3-2f1d-4971-8cf7-e2b92ae9****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
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

