// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class UpdateApiKeyInput extends $dara.Model {
  /**
   * @remarks
   * The new name of the API key. The name can be up to 128 characters in length and can contain letters, digits, spaces, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * ci-pipeline-key-v2
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The expiration time of the API key, in UTC, in RFC 3339 format. Leave this parameter empty to indicate that the API key never expires.
   * 
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The IP blacklist. If specified, the existing blacklist is entirely overwritten. This parameter is mutually exclusive with ipWhitelist.
   */
  ipBlacklist?: IPConfig[];
  /**
   * @remarks
   * The IP whitelist. If specified, the existing whitelist is entirely overwritten. This parameter is mutually exclusive with ipBlacklist.
   */
  ipWhitelist?: IPConfig[];
  /**
   * @remarks
   * The new status of the API key. Valid values:
   * - active: Enabled.
   * - inactive: Disabled.
   * 
   * @example
   * inactive
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

