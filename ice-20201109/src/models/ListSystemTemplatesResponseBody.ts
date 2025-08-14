// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemTemplatesResponseBodySystemTemplateList extends $dara.Model {
  /**
   * @remarks
   * The template state.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The subtype ID of the template.
   * 
   * @example
   * 1
   */
  subtype?: number;
  /**
   * @remarks
   * The subtype name of the template.
   * 
   * @example
   * Remux
   */
  subtypeName?: string;
  /**
   * @remarks
   * The template parameters.
   * 
   * @example
   * {"Container":{"Format":"flv"},"Video":{},"Audio":{}}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000001-000000
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * FLV-COPY
   */
  templateName?: string;
  /**
   * @remarks
   * The type ID of the template.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The type name of the template.
   * 
   * @example
   * TranscodeTemplate
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subtype: 'Subtype',
      subtypeName: 'SubtypeName',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subtype: 'number',
      subtypeName: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried templates.
   */
  systemTemplateList?: ListSystemTemplatesResponseBodySystemTemplateList[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemTemplateList: 'SystemTemplateList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemTemplateList: { 'type': 'array', 'itemType': ListSystemTemplatesResponseBodySystemTemplateList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.systemTemplateList)) {
      $dara.Model.validateArray(this.systemTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

