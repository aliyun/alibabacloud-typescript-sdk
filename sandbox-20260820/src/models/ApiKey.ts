// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class ApiKey extends $dara.Model {
  /**
   * @example
   * a1f8c3d6-****
   */
  apiKeyID?: string;
  /**
   * @example
   * e2b_3f9a****b915
   */
  apiKeyMask?: string;
  /**
   * @example
   * ci-pipeline-key
   */
  apiKeyName?: string;
  /**
   * @example
   * e2b_****
   */
  apiKeyValue?: string;
  /**
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdTime?: string;
  /**
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  ipBlacklist?: IPConfig[];
  ipWhitelist?: IPConfig[];
  /**
   * @example
   * 2026-09-10T14:22:07Z
   */
  lastUsedTime?: string;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * generated
   */
  source?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @example
   * sandbox-dev
   */
  teamName?: string;
  /**
   * @example
   * std
   */
  teamPlan?: string;
  /**
   * @example
   * 9c1d4e72-****
   */
  userID?: string;
  /**
   * @example
   * sandbox-admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyID: 'apiKeyID',
      apiKeyMask: 'apiKeyMask',
      apiKeyName: 'apiKeyName',
      apiKeyValue: 'apiKeyValue',
      createdTime: 'createdTime',
      expireTime: 'expireTime',
      ipBlacklist: 'ipBlacklist',
      ipWhitelist: 'ipWhitelist',
      lastUsedTime: 'lastUsedTime',
      resourceGroupID: 'resourceGroupID',
      source: 'source',
      status: 'status',
      teamID: 'teamID',
      teamName: 'teamName',
      teamPlan: 'teamPlan',
      userID: 'userID',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyID: 'string',
      apiKeyMask: 'string',
      apiKeyName: 'string',
      apiKeyValue: 'string',
      createdTime: 'string',
      expireTime: 'string',
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      lastUsedTime: 'string',
      resourceGroupID: 'string',
      source: 'string',
      status: 'string',
      teamID: 'string',
      teamName: 'string',
      teamPlan: 'string',
      userID: 'string',
      username: 'string',
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

