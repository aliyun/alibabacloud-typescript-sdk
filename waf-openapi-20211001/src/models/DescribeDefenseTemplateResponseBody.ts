// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. For more information, see the **DefenseScene** parameter in [CreateDefenseRule](~~CreateDefenseRule~~).
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The protection template sub-scenario. Valid values:
   * - **web**: bot management web protection scenario template.
   * - **app**: bot management app protection scenario template.
   * - **basic**: bot management basic protection template.
   * - **bot_custom_acl**: bot management advanced custom rule protection template.
   * 
   * @example
   * app
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the protection template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The detailed template information. For more information, see the Detail parameter in [CreateDefenseTemplate](https://help.aliyun.com/document_detail/461613.html).
   * 
   * @example
   * {"trafficFeature":"{\\"global\\":0,\\"excludeStatus\\":1,\\"conditions\\":[{\\"key\\":\\"URL\\",\\"opValue\\":\\"not-contain\\",\\"values\\":\\"test\\"}]}"}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The time when the protection template was last modified.
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
   * The template name.
   * 
   * @example
   * test0621
   */
  templateName?: string;
  /**
   * @remarks
   * The source of the protection template. The value custom indicates that the template is user-defined.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The protection templatetype. Valid values:
   * - **user_default**: user default protection.
   * - **user_custom**: user custom protection.
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
      detail: 'Detail',
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
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtModified: 'number',
      templateId: 'number',
      templateName: 'string',
      templateOrigin: 'string',
      templateStatus: 'number',
      templateType: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The template information.
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

