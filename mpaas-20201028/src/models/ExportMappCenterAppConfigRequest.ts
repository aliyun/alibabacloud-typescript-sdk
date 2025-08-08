// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportMappCenterAppConfigRequest extends $dara.Model {
  apkFileUrl?: string;
  appId?: string;
  certRsaBase64?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identifier?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  onexFlag?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  systemType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apkFileUrl: 'ApkFileUrl',
      appId: 'AppId',
      certRsaBase64: 'CertRsaBase64',
      identifier: 'Identifier',
      onexFlag: 'OnexFlag',
      systemType: 'SystemType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkFileUrl: 'string',
      appId: 'string',
      certRsaBase64: 'string',
      identifier: 'string',
      onexFlag: 'boolean',
      systemType: 'string',
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

