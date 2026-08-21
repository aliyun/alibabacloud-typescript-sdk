// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAITemplateResponseBodyTemplateInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the AI template was created. The time is displayed in UTC in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z.
   * 
   * @example
   * 2020-07-08T06:50:45Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the AI template is the default template. Valid values:
   * - **Default**: The template is the default template.
   * - **NotDefault**: The template is not the default template.
   * 
   * @example
   * NoDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * The time when the AI template was last modified. The time is displayed in UTC in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z.
   * 
   * @example
   * 2020-07-08T06:58:45Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The source of the AI template. Valid values:
   * - **System**: system.
   * - **Custom**: custom.
   * 
   * @example
   * Custom
   */
  source?: string;
  /**
   * @remarks
   * The detailed configuration of the AI template. The value is a JSON string. For more information, see [AITemplateConfig](~~89863#title-vd3-499-o36~~).
   * 
   * @example
   * {"AuditRange":["text-title","video"],"AuditContent":["screen"],"AuditItem":["terrorism","porn"],"AuditAutoBlock":"yes"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the AI template.
   * 
   * @example
   * 1706a0063dd733f6a823ef32e0a5****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the AI template.
   * 
   * @example
   * DemoAITemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype of the AI template. Valid values:
   * - **AIMediaAudit**: automated review.
   * - **AIImage**: smart thumbnail.
   * 
   * @example
   * AIMediaAudit
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      modifyTime: 'ModifyTime',
      source: 'Source',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'string',
      modifyTime: 'string',
      source: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAITemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75B7BC67-FB8C-4653-4788-F4B01ED2****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of AI template information.
   */
  templateInfoList?: ListAITemplateResponseBodyTemplateInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateInfoList: 'TemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateInfoList: { 'type': 'array', 'itemType': ListAITemplateResponseBodyTemplateInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.templateInfoList)) {
      $dara.Model.validateArray(this.templateInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

