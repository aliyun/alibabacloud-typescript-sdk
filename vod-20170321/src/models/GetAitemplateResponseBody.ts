// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITemplateResponseBodyTemplateInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the AI template was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-08T06:50:45Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the template is the default AI template. Valid values:
   * 
   * *   **Default**
   * *   **NotDefault**
   * 
   * @example
   * NotDefault
   */
  isDefault?: string;
  /**
   * @remarks
   * The time when the AI template was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-08T06:58:45Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The source of the AI template. Valid values:
   * 
   * *   **System**
   * *   **Custom**
   * 
   * @example
   * Custom
   */
  source?: string;
  /**
   * @remarks
   * The detailed configurations of the AI template. The value is a JSON string. For more information, see [AITemplateConfig](~~89863#title-vd3-499-o36~~).
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
   * The type of the AI template. Valid values:
   * 
   * *   **AIMediaAudit**: automated review
   * *   **AIImage**: smart thumbnail
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

export class GetAITemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 080DA371-8AC0-4CD4-4476-33E64282****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the AI template.
   */
  templateInfo?: GetAITemplateResponseBodyTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateInfo: GetAITemplateResponseBodyTemplateInfo,
    };
  }

  validate() {
    if(this.templateInfo && typeof (this.templateInfo as any).validate === 'function') {
      (this.templateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

