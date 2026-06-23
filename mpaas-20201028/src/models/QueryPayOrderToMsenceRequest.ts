// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPayOrderToMsenceRequest extends $dara.Model {
  appId?: string;
  customId?: string;
  miniProgramId?: string;
  platformId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customId: 'CustomId',
      miniProgramId: 'MiniProgramId',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customId: 'string',
      miniProgramId: 'string',
      platformId: 'string',
      tenantId: 'string',
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

