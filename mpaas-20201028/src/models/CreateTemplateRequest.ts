// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  content?: string;
  descInfo?: string;
  /**
   * @example
   * /
   */
  iconUrls?: string;
  /**
   * @example
   * /
   */
  imageUrls?: string;
  /**
   * @example
   * 1
   */
  jumpAction?: number;
  /**
   * @example
   * 0
   */
  pushStyle?: number;
  /**
   * @example
   * 0
   */
  showStyle?: number;
  templateName?: string;
  /**
   * @example
   * GKDDZPFH
   */
  tenantId?: string;
  title?: string;
  /**
   * @example
   * /
   */
  uri?: string;
  /**
   * @example
   * title,content
   */
  variables?: string;
  /**
   * @example
   * default
   */
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

