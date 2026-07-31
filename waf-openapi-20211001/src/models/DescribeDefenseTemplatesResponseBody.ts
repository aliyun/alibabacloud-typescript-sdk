// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The WAF protection scenario. Valid values:
   * 
   * - **waf_group**: basic protection.
   * 
   * - **antiscan**: scan protection.
   * 
   * - **ip_blacklist**: IP blacklist.
   * 
   * - **custom_acl**: custom rule.
   * 
   * - **whitelist**: whitelist.
   * 
   * - **region_block**: Location Blacklist.
   * 
   * - **custom_response**: custom response.
   * 
   * - **cc**: HTTP flood protection.
   * 
   * - **tamperproof**: web tamper proofing.
   * 
   * - **dlp**: data leak prevention.
   * 
   * - **bot_manager**: new BOT management.
   * 
   * @example
   * whitelist
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario of the protection template. Valid values:
   * - **web**: BOT management web protection scenario template.
   * - **app**: BOT management app protection scenario template.
   * - **basic**: BOT management basic protection template.
   * - **bot_custom_acl**: BOT management advanced custom rule protection template.
   * 
   * @example
   * basic
   */
  defenseSubScene?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * testTemplate
   */
  description?: string;
  /**
   * @remarks
   * The creation time of the protection template. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1683776070000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 56477
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection template.
   * 
   * @example
   * template-blockarea1
   */
  templateName?: string;
  /**
   * @remarks
   * The source of the protection template. The value is custom, which indicates user-defined.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template. Valid values:
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The templatetype of the protection template. Valid values:
   * - **user_default**: user default protection.
   * - **user_custom**: user custom protection.
   * 
   * @example
   * user_custom
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

export class DescribeDefenseTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F26D2F1-E288-5104-8518-05E240E337A4
   */
  requestId?: string;
  /**
   * @remarks
   * The list of protection templates.
   */
  templates?: DescribeDefenseTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeDefenseTemplatesResponseBodyTemplates },
      totalCount: 'number',
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

