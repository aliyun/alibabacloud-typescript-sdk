// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadUserAppToMsaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  fileName?: string;
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  useYShield?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      tenantId: 'TenantId',
      useYShield: 'UseYShield',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileName: 'string',
      fileUrl: 'string',
      tenantId: 'string',
      useYShield: 'boolean',
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

