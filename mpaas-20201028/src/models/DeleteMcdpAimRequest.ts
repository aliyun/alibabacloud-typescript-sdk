// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcdpAimRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpaasMappcenterMcdpAimDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpAimDeleteJsonStr: 'MpaasMappcenterMcdpAimDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpAimDeleteJsonStr: 'string',
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

