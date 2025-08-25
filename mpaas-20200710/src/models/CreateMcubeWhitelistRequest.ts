// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeWhitelistRequest extends $dara.Model {
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
  whiteListName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  whitelistType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      whiteListName: 'WhiteListName',
      whitelistType: 'WhitelistType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      whiteListName: 'string',
      whitelistType: 'string',
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

