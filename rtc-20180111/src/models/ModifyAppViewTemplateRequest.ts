// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppViewTemplateRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * List of layout IDs. Maximum of 16 IDs.
   * 
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * Encoding option.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * Template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模板
   */
  name?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppViewTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. Create and view it in the console. Only one ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * The template.
   * 
   * This parameter is required.
   */
  template?: ModifyAppViewTemplateRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      template: ModifyAppViewTemplateRequestTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

