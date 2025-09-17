// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @example
   * Alibaba****
   */
  loginIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1046341d8d4e2f05c4aa168196009613594aaf451499bfc75e54699efa7230bc968e1debb1fa4063b01e5d327b467****
   */
  loginToken?: string;
  /**
   * @example
   * cn-shenzhen+dir-436909****
   */
  officeSiteId?: string;
  profileRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6442b2fd-ed3e-423a-8e6e-352d26a4****
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      endUserId: 'EndUserId',
      loginIdentifier: 'LoginIdentifier',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      profileRegion: 'ProfileRegion',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      endUserId: 'string',
      loginIdentifier: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      profileRegion: 'string',
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

