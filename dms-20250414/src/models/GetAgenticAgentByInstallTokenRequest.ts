// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticAgentByInstallTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The one-time install token issued by IssueAgenticInstallToken. The token starts with dit_ followed by 40 URL-safe Base64 characters, making a total length of 44 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * dit_0123456789abcdefghijklmnopqrstuvwxyzABCD
   */
  installToken?: string;
  static names(): { [key: string]: string } {
    return {
      installToken: 'InstallToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

