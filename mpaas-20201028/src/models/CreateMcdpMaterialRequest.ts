// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcdpMaterialRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpaasMappcenterMcdpMaterialCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpMaterialCreateJsonStr: 'MpaasMappcenterMcdpMaterialCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpMaterialCreateJsonStr: 'string',
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

