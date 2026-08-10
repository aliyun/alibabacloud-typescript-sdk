// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


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
  ipBlacklist?: IPConfig[];
  ipWhitelist?: IPConfig[];
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
      ipBlacklist: 'ipBlacklist',
      ipWhitelist: 'ipWhitelist',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipBlacklist)) {
      $dara.Model.validateArray(this.ipBlacklist);
    }
    if(Array.isArray(this.ipWhitelist)) {
      $dara.Model.validateArray(this.ipWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

