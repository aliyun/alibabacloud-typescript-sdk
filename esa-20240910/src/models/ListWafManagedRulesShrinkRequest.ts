// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The attack type of the vulnerability prevention event. Valid values:
   * - SQL injection
   * - cross-site scripting (XSS)
   * - code execute
   * - CRLF
   * - local file inclusion (LFI)
   * - remote file inclusion (RFI)
   * - webshell
   * - cross-site request forgery
   * - Others
   * - SEMA
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  attackType?: number;
  /**
   * @remarks
   * The ID of the WAF rule.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * @example
   * esa-site-awmmx25y2igw
   */
  instanceId?: string;
  /**
   * @remarks
   * The language type. The response is returned in the specified language. Valid values:
   * 
   * - **en**: English.
   * - **zh**: Chinese.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The managed ruleset configuration in JSON string format.
   * 
   * Contains the AttackType, ProtectionLevel, Action, and ManagedRules subfields. When ProtectionLevel is set to -1 (custom mode), specify the status and action for each rule through the ManagedRules array.
   */
  managedRulesetShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The currently saved protection level, which represents the existing configuration state in the database.
   * 
   * Valid values: -1 (custom mode), 1 (loose), 2 (medium), 3 (strict), 4 (super strict).
   * 
   * Difference from ManagedRuleset.ProtectionLevel: this parameter indicates the currently effective configuration, while ManagedRuleset.ProtectionLevel indicates the target value being passed in.
   * 
   * @example
   * 1
   */
  protectionLevel?: number;
  /**
   * @remarks
   * The query conditions.
   * 
   * @example
   * {\\"Status\\":\\"\\",\\"ProtectionLevels\\":[2,1],\\"Action\\":\\"\\",\\"IdNameLike\\":\\"\\"}
   */
  queryArgsShrink?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      id: 'Id',
      instanceId: 'InstanceId',
      language: 'Language',
      managedRulesetShrink: 'ManagedRuleset',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protectionLevel: 'ProtectionLevel',
      queryArgsShrink: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'number',
      id: 'number',
      instanceId: 'string',
      language: 'string',
      managedRulesetShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protectionLevel: 'number',
      queryArgsShrink: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

