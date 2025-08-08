// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveMgsApirestRequest extends $dara.Model {
  appId?: string;
  mpaasMappcenterMgsApirestSaveJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMgsApirestSaveJsonStr: 'MpaasMappcenterMgsApirestSaveJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMgsApirestSaveJsonStr: 'string',
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

