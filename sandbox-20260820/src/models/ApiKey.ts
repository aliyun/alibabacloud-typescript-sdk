// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class ApiKey extends $dara.Model {
  apiKeyID?: string;
  apiKeyMask?: string;
  apiKeyName?: string;
  apiKeyValue?: string;
  createdTime?: string;
  expireTime?: string;
  ipBlacklist?: IPConfig[];
  ipWhitelist?: IPConfig[];
  lastUsedTime?: string;
  resourceGroupID?: string;
  source?: string;
  status?: string;
  teamID?: string;
  teamName?: string;
  teamPlan?: string;
  userID?: string;
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

