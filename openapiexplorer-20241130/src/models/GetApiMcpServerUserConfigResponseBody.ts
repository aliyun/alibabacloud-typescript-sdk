// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiMcpServerUserConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 162302724684579*
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access for all API MCP Servers, including system MCP Servers, under your account. By default, this feature is enabled. If you disable it, you can access the servers only through VPC domain names.
   * 
   * @example
   * true
   */
  enablePublicAccess?: boolean;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2025-11-10T06:58:39Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * 2025-11-10T06:58:39Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A707AFA8-1A4C-5B2A-A165-8436C1EA38DB
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelist of source VPCs that are allowed to send requests after public network access is disabled. If you do not set this parameter or leave it empty, requests from all sources are allowed.
   */
  vpcWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      enablePublicAccess: 'enablePublicAccess',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      requestId: 'requestId',
      vpcWhitelists: 'vpcWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enablePublicAccess: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      requestId: 'string',
      vpcWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcWhitelists)) {
      $dara.Model.validateArray(this.vpcWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

