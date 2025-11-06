// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMdsCubeResourceRequest extends $dara.Model {
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
   * url
   */
  mockDataUrl?: string;
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
   * 1
   */
  templateResourceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZXCXMAHQ-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dev
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mockDataUrl: 'MockDataUrl',
      onexFlag: 'OnexFlag',
      templateResourceId: 'TemplateResourceId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mockDataUrl: 'string',
      onexFlag: 'boolean',
      templateResourceId: 'number',
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

