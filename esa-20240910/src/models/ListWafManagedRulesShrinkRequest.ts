// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The attack type to filter the results by. Valid values:
   * 
   * - SQL injection
   * 
   * - cross-site scripting
   * 
   * - code execution
   * 
   * - CRLF
   * 
   * - local file inclusion
   * 
   * - remote file inclusion
   * 
   * - webshell
   * 
   * - cross-site request forgery
   * 
   * - Other
   * 
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
  instanceId?: string;
  /**
   * @remarks
   * The response language. Valid values:
   * 
   * - **en**: English.
   * 
   * - **zh**: Chinese.
   * 
   * @example
   * zh
   */
  language?: string;
  managedRulesetShrink?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  protectionLevel?: number;
  /**
   * @remarks
   * The query conditions.
   */
  queryArgsShrink?: string;
  /**
   * @remarks
   * The ID of the site. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain this ID.
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

