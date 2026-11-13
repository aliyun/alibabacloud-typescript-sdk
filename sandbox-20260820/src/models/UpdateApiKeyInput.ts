// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IPConfig } from "./Ipconfig";


export class UpdateApiKeyInput extends $dara.Model {
  /**
   * @remarks
   * The new name of the API key. The name can be up to 128 characters in length and can contain only letters, digits, spaces, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * ci-pipeline-key-v2
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The expiration time of the API key in UTC. The time must be in RFC 3339 format. An empty value indicates that the API key never expires.
   * 
   * @example
   * 2099-12-31T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The IP address blacklist. If you specify this parameter, the existing blacklist is completely overwritten. This parameter is mutually exclusive with ipWhitelist.
   * 
   * @example
   * [{"ipAddress":"192.0.2.1","description":"example client"}]
   */
  ipBlacklist?: IPConfig[];
  /**
   * @remarks
   * The IP address whitelist. If you specify this parameter, the existing whitelist is completely overwritten. This parameter is mutually exclusive with ipBlacklist.
   * 
   * @example
   * [{"ipAddress":"192.0.2.1","description":"example client"}]
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
  /**
   * @remarks
   * The set of allowed source VPC IDs. This set is updated independently of the IP blacklists and whitelists. If you omit this parameter or set it to null, the original set is retained. A non-empty array completely replaces the original set. An explicit empty array [] purges the VPC restrictions. Updating only this parameter does not affect the IP address lists, and updating the IP address lists does not affect the VPC restrictions. An empty request body {} purges all IP address and VPC source restrictions. You can update this parameter along with other parameters such as the name.
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
      status: 'status',
      vpcBindings: 'vpcBindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      status: 'string',
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

