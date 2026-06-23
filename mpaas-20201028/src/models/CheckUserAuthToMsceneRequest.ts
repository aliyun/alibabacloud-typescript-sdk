// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserAuthToMsceneRequest extends $dara.Model {
  appId?: string;
  authToken?: string;
  miniProgramId?: string;
  openUid?: string;
  platformId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      authToken: 'AuthToken',
      miniProgramId: 'MiniProgramId',
      openUid: 'OpenUid',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authToken: 'string',
      miniProgramId: 'string',
      openUid: 'string',
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

