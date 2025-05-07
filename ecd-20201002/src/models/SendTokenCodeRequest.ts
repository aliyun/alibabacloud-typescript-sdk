// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTokenCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system on which the client runs.
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client version. If you use an Alibaba Cloud Workspace client, you can view the client version in the "About" dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v28101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-2925105532
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * If two-factor authentication is enabled for clients in the Elastic Desktop Service (EDS) Enterprise console, the system will send a verification code to the user\\"s email address if it detects that the current logged-on user is at risk. This parameter is required if you set `CurrentStage` to `TokenVerify`.
   * 
   * @example
   * 63****
   */
  tokenCode?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      sessionId: 'SessionId',
      tokenCode: 'TokenCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      sessionId: 'string',
      tokenCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

