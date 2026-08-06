// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyInput extends $dara.Model {
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * dev
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-07-24T16:00:00.000Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - active
   * - inactive
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      expireTime: 'expireTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

