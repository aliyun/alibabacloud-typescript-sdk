// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportGatewayApisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiIdsShrink: 'ApiIds',
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIdsShrink: 'string',
      appId: 'string',
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

