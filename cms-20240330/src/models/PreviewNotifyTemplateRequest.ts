// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewNotifyTemplateRequestTemplates extends $dara.Model {
  /**
   * @remarks
   * 模板标识，前端自定义，原样返回。建议使用 title / content 等语义名称
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * Go template 语法的模板内容字符串
   * 
   * This parameter is required.
   * 
   * @example
   * 云监控报警: {{.incident.title}}
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewNotifyTemplateRequest extends $dara.Model {
  /**
   * @example
   * {"incident":{"title":"CPU使用率过高","severity":"P1"}}
   */
  data?: any;
  /**
   * @remarks
   * 待渲染的模板列表，每项包含模板标识和模板内容
   * 
   * This parameter is required.
   * 
   * @example
   * [{"key":"title","template":"云监控报警: {{.incident.title}}"},{"key":"content","template":">- 级别: {{.incident.severity}}"}]
   */
  templates?: PreviewNotifyTemplateRequestTemplates[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      templates: { 'type': 'array', 'itemType': PreviewNotifyTemplateRequestTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

