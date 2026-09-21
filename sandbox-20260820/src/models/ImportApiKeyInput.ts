// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportApiKeyInput extends $dara.Model {
  /**
   * @example
   * migrated-key
   */
  apiKeyName?: string;
  /**
   * @example
   * e2b_****
   */
  apiKeyValue?: string;
  /**
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  /**
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

