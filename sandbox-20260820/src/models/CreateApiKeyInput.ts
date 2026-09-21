// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class CreateApiKeyInput extends $dara.Model {
  /**
   * @remarks
   * The name of the API key. The name can be up to 128 characters in length and can contain letters, digits, spaces, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * ci-pipeline-key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The expiration time of the API key. The time is in UTC and in the RFC 3339 format. If you leave this parameter empty, the API key never expires.
   * 
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The IP blacklist. After you configure this parameter, IP addresses in the list cannot use the API key. This parameter is mutually exclusive with ipWhitelist.
   */
  ipBlacklist?: IPConfig[];
  /**
   * @remarks
   * The IP address whitelist. After you configure this parameter, only IP addresses in the list can use the API key. This parameter is mutually exclusive with ipBlacklist.
   */
  ipWhitelist?: IPConfig[];
  /**
   * @remarks
   * The ID of the team to which the API key belongs. The value is in UUID format. If you do not specify this parameter, the default team of the current account is used.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      expireTime: 'expireTime',
      ipBlacklist: 'ipBlacklist',
      ipWhitelist: 'ipWhitelist',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      teamID: 'string',
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

