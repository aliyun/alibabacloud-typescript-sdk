// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class CreateApiKeyInput extends $dara.Model {
  /**
   * @remarks
   * The name of the API key. The name can be up to 128 characters in length and can contain only letters, digits, spaces, hyphens (-), underscores (_), and half-width periods (.).
   * 
   * @example
   * ci-pipeline-key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The expiration time of the API key. The time must be in UTC and follow the RFC 3339 format. If this parameter is left empty, the API key never expires.
   * 
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The IP address blacklist. After you configure this parameter, the IP addresses in the list cannot use the API key. This parameter is mutually exclusive with ipWhitelist.
   */
  ipBlacklist?: IPConfig[];
  /**
   * @remarks
   * The IP address whitelist. After you configure this parameter, only the IP addresses in the list can use the API key. This parameter is mutually exclusive with ipBlacklist.
   */
  ipWhitelist?: IPConfig[];
  /**
   * @remarks
   * The ID of the team to which the API key belongs. The ID must be in the UUID format. If this parameter is not specified, the default team of the current account is used.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @remarks
   * The list of source VPC IDs that are allowed to use this API key to initiate management and control requests. The list is matched as a set. If this parameter is omitted, set to null, or set to an empty array, no restrictions are imposed on the source VPCs. If this parameter is not empty, only requests from trusted source VPCs that match the list are allowed. Requests from the Internet or from unverified source VPCs are rejected. This parameter can be configured together with the IP address whitelist or blacklist. Requests must meet both restrictions. This field is independent of the vpcBindings field of the template.
   * 
   * @example
   * ["vpc-examplea","vpc-exampleb"]
   */
  vpcBindings?: string[];
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      expireTime: 'expireTime',
      ipBlacklist: 'ipBlacklist',
      ipWhitelist: 'ipWhitelist',
      teamID: 'teamID',
      vpcBindings: 'vpcBindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      teamID: 'string',
      vpcBindings: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipBlacklist)) {
      $dara.Model.validateArray(this.ipBlacklist);
    }
    if(Array.isArray(this.ipWhitelist)) {
      $dara.Model.validateArray(this.ipWhitelist);
    }
    if(Array.isArray(this.vpcBindings)) {
      $dara.Model.validateArray(this.vpcBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

