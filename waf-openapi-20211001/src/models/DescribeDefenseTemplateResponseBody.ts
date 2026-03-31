// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The scenario in which the template is used. For more information, see the description of the **DefenseScene** parameter in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario in which the template is used. Valid values:
   * 
   * *   **web**: The template is a bot management template that is used for website protection.
   * *   **app**: The template is a bot management template that is used for app protection.
   * *   **basic**: The template is a bot management template that is used for basic protection.
   * 
   * @example
   * app
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection rule template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The most recent time when the protection rule template was modified.
   * 
   * @example
   * 1665283642000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection rule template.
   * 
   * @example
   * 10097
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection rule template.
   * 
   * @example
   * test0621
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection rule template. If the value of this parameter is custom, the protection rule template is created by the user.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection rule template. Valid values:
   * 
   * *   **0:** disabled.
   * *   **1:** enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection rule template. Valid values:
   * 
   * *   **user_default:** default template.
   * *   **user_custom:** custom template.
   * 
   * @example
   * user_default
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      defenseSubScene: 'DefenseSubScene',
      description: 'Description',
      gmtModified: 'GmtModified',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateOrigin: 'TemplateOrigin',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      defenseSubScene: 'string',
      description: 'string',
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
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

export class DescribeDefenseTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the template.
   */
  template?: DescribeDefenseTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: DescribeDefenseTemplateResponseBodyTemplate,
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

