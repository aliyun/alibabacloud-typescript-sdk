// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiMcpServerUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable public network access for all API MCP Servers in your account, including the system MCP Server. By default, public network access is enabled. If you disable it, you can only access the servers through their VPC domain names.
   * 
   * @example
   * true
   */
  enablePublicAccess?: boolean;
  /**
   * @remarks
   * The VPC whitelist. After disabling public network access, use this parameter to specify allowed source VPCs. If you do not set this parameter or leave it empty, all source VPCs are allowed.
   */
  vpcWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      enablePublicAccess: 'enablePublicAccess',
      vpcWhitelists: 'vpcWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePublicAccess: 'boolean',
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

