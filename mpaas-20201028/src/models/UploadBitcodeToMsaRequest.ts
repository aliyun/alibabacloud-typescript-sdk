// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadBitcodeToMsaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  bitcode?: string;
  codeVersion?: string;
  license?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bitcode: 'Bitcode',
      codeVersion: 'CodeVersion',
      license: 'License',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bitcode: 'string',
      codeVersion: 'string',
      license: 'string',
      tenantId: 'string',
      type: 'string',
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

