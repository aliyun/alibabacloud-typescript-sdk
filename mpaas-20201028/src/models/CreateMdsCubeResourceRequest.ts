// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMdsCubeResourceRequest extends $dara.Model {
  androidMaxVersion?: string;
  androidMinVersion?: string;
  appId?: string;
  extendInfo?: string;
  fileUrl?: string;
  iosMaxVersion?: string;
  iosMinVersion?: string;
  mockDataUrl?: string;
  onexFlag?: boolean;
  platform?: string;
  previewPictureUrl?: string;
  templateId?: string;
  templateResourceDesc?: string;
  templateResourceVersion?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      androidMaxVersion: 'AndroidMaxVersion',
      androidMinVersion: 'AndroidMinVersion',
      appId: 'AppId',
      extendInfo: 'ExtendInfo',
      fileUrl: 'FileUrl',
      iosMaxVersion: 'IosMaxVersion',
      iosMinVersion: 'IosMinVersion',
      mockDataUrl: 'MockDataUrl',
      onexFlag: 'OnexFlag',
      platform: 'Platform',
      previewPictureUrl: 'PreviewPictureUrl',
      templateId: 'TemplateId',
      templateResourceDesc: 'TemplateResourceDesc',
      templateResourceVersion: 'TemplateResourceVersion',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidMaxVersion: 'string',
      androidMinVersion: 'string',
      appId: 'string',
      extendInfo: 'string',
      fileUrl: 'string',
      iosMaxVersion: 'string',
      iosMinVersion: 'string',
      mockDataUrl: 'string',
      onexFlag: 'boolean',
      platform: 'string',
      previewPictureUrl: 'string',
      templateId: 'string',
      templateResourceDesc: 'string',
      templateResourceVersion: 'string',
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

