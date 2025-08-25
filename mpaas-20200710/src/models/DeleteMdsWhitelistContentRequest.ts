// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMdsWhitelistContentRequest extends $dara.Model {
  appId?: string;
  tenantId?: string;
  whitelistId?: string;
  whitelistValue?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      whitelistId: 'WhitelistId',
      whitelistValue: 'WhitelistValue',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      whitelistId: 'string',
      whitelistValue: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

