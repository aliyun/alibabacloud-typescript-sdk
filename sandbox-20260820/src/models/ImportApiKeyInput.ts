// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportApiKeyInput extends $dara.Model {
  /**
   * @remarks
   * The API key name. The name can be up to 128 characters in length and can contain letters, digits, spaces, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * migrated-key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The plaintext value of the API key to import. After the import, the source of the key is set to custom.
   * 
   * @example
   * e2b_****
   */
  apiKeyValue?: string;
  /**
   * @remarks
   * The expiration time of the API key in UTC. The time is in RFC 3339 format. If this parameter is left empty, the API key never expires.
   * 
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the team to which the API key belongs, in UUID format. If this parameter is not specified, the default team of the current account is used.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      apiKeyValue: 'apiKeyValue',
      expireTime: 'expireTime',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
      expireTime: 'string',
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

