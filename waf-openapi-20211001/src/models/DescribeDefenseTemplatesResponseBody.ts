// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The scenario in which the protection template is used.
   * 
   * *   **waf_group**: basic protection.
   * *   **antiscan**: scan protection.
   * *   **ip_blacklist**: IP address blacklist.
   * *   **custom_acl**: custom rule.
   * *   **whitelist**: whitelist.
   * *   **region_block**: region blacklist.
   * *   **custom_response**: custom response.
   * *   **cc**: HTTP flood protection.
   * *   **tamperproof**: website tamper-proofing.
   * *   **dlp**: data leakage prevention.
   * 
   * @example
   * whitelist
   */
  defenseScene?: string;
  /**
   * @remarks
   * The sub-scenario in which the protection template is used. Valid values:
   * 
   * *   **web**: bot management for website protection.
   * *   **app**: bot management for app protection.
   * *   **basic**: bot management for basic protection.
   * 
   * @example
   * basic
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
   * The time when the protection template was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * 12345
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the protection template.
   * 
   * @example
   * testTemplateName
   */
  templateName?: string;
  /**
   * @remarks
   * The origin of the protection template. The value custom indicates that the protection template is a custom template created by the user.
   * 
   * @example
   * custom
   */
  templateOrigin?: string;
  /**
   * @remarks
   * The status of the protection template. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the protection template. Valid values:
   * 
   * *   **user_default**: default template.
   * *   **user_custom**: custom template.
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
   * 4F26D2F1-E288-5104-8518-05E240E3****
   */
  requestId?: string;
  /**
   * @remarks
   * The protection templates.
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

