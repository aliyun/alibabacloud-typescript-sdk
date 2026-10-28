// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewNotifyTemplateRequestTemplates extends $dara.Model {
  /**
   * @remarks
   * The template identifier. This identifier is defined by the frontend and returned as-is. Use semantic names such as title or content.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The template content string in Go template syntax.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudMonitor alert: {{.incident.title}}
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
   * @remarks
   * The rendering context data in key-value pair format. This data source is used to populate Go template placeholders in the templates, such as {{.incident.title}}.
   * 
   * @example
   * {"incident":{"title":"High CPU utilization","severity":"P1"}}
   */
  data?: any;
  /**
   * @remarks
   * The list of templates to be rendered. Each item includes a template identifier and the template content.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"key":"title","template":"CloudMonitor alert: {{.incident.title}}"},{"key":"content","template":">- Severity: {{.incident.severity}}"}]
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

