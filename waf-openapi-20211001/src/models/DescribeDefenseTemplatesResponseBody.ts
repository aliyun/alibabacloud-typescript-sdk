// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. Valid values:
   * 
   * - **waf_group**: Basic Protection.
   * 
   * - **antiscan**: Scan Protection.
   * 
   * - **ip_blacklist**: IP Blocklist.
   * 
   * - **custom_acl**: Custom Rule.
   * 
   * - **whitelist**: Allowlist.
   * 
   * - **region_block**: Geographic Blocking.
   * 
   * - **custom_response**: Custom Response.
   * 
   * - **cc**: HTTP Flood Protection.
   * 
   * - **tamperproof**: Webpage Tamper Protection.
   * 
   * - **dlp**: Data Loss Prevention.
   * 
   * - **bot_manager**: Bot Management.
   * 
   * @example
   * whitelist
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario for the Bot Management template. This parameter is returned only when `DefenseScene` is set to `bot_manager`. Valid values:
   * 
   * - **web**: web protection
   * 
   * - **app**: app protection
   * 
   * - **basic**: basic protection
   * 
   * - **bot_custom_acl**: The protection template for advanced Custom Rules in Bot Management.
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
   * The last modification time of the protection template. This value is a UNIX timestamp in milliseconds.
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
   * The origin of the protection template to be created. The value is custom, which indicates a user-defined template.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection template. Valid values:
   * 
   * - **user_default**: The user\\"s default protection template.
   * 
   * - **user_custom**: A custom protection template defined by the user.
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
   * The ID of the request.
   * 
   * @example
   * 4F26D2F1-E288-5104-8518-05E240E337A4
   */
  requestId?: string;
  /**
   * @remarks
   * An array of protection templates.
   */
  templates?: DescribeDefenseTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of protection templates returned.
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

