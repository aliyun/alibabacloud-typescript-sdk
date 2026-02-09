// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://mcube-prod.oss-cn-hangzhou.aliyuncs.com/cubecard/tempFileForOnex/ONEXE99ED22171502/preProd/TPHWQYXG/8a6177ce-d7c3-434e-8c62-676a54db9667/main.zip
   */
  fileUrl?: string;
  fixDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  onexFlag?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iOS,Android
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  productVersion?: string;
  /**
   * @example
   * ZXCXMAHQ
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
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

