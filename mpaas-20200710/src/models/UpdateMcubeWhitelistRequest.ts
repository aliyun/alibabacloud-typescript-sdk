// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcubeWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  keyIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  onexFlag?: boolean;
  ossUrl?: string;
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
      appId: 'AppId',
      id: 'Id',
      keyIds: 'KeyIds',
      onexFlag: 'OnexFlag',
      ossUrl: 'OssUrl',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      keyIds: 'string',
      onexFlag: 'boolean',
      ossUrl: 'string',
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

