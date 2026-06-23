// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  appId?: string;
  content?: string;
  descInfo?: string;
  iconUrls?: string;
  imageUrls?: string;
  jumpAction?: number;
  pushStyle?: number;
  showStyle?: number;
  templateName?: string;
  tenantId?: string;
  title?: string;
  uri?: string;
  variables?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      content: 'Content',
      descInfo: 'DescInfo',
      iconUrls: 'IconUrls',
      imageUrls: 'ImageUrls',
      jumpAction: 'JumpAction',
      pushStyle: 'PushStyle',
      showStyle: 'ShowStyle',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      title: 'Title',
      uri: 'Uri',
      variables: 'Variables',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      descInfo: 'string',
      iconUrls: 'string',
      imageUrls: 'string',
      jumpAction: 'number',
      pushStyle: 'number',
      showStyle: 'number',
      templateName: 'string',
      tenantId: 'string',
      title: 'string',
      uri: 'string',
      variables: 'string',
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

