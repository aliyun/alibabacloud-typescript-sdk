// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileUrl?: string;
  fixDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  onexFlag?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productVersion?: string;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileUrl: 'FileUrl',
      fixDesc: 'FixDesc',
      onexFlag: 'OnexFlag',
      platform: 'Platform',
      productVersion: 'ProductVersion',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileUrl: 'string',
      fixDesc: 'string',
      onexFlag: 'boolean',
      platform: 'string',
      productVersion: 'string',
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

