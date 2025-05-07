// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d40776f-e9cb-4e2b-a8da-308d10e8****
   */
  clientId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * cn-beijing+dir-131196****
   */
  directoryId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v1b16dcff3ab21a6c5ec01652238375511cff5a1db59fd4dc49afb37e2ea7a626af6f38109fd0498b6abd9de1af7743****
   */
  loginToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-beijing+dir-131196****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The password that you want to encrypt.
   * 
   * This parameter is required.
   * 
   * @example
   * Ab123456
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c78e2e52-23d9-4401-a648-e67ac6ff****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      password: 'string',
      regionId: 'string',
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

