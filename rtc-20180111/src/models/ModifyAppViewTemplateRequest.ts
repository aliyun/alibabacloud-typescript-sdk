// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppViewTemplateRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
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

