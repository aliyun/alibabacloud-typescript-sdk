// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class CreateApiKeyInput extends $dara.Model {
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
   * The unique identifier of the team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
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

