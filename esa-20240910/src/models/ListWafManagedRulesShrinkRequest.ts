// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafManagedRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Attack type of the vulnerability protection event. Values:
   * - SQL injection
   * - Cross-site scripting
   * - Code execution
   * - CRLF
   * - Local file inclusion
   * - Remote file inclusion
   * - Webshell
   * - Cross-site request forgery
   * - Other
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
   * ID of the WAF rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Language type, which will be used to return the response. Value range:
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
   * Query page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Query page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  protectionLevel?: number;
  /**
   * @remarks
   * Query conditions.
   */
  queryArgsShrink?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      id: 'Id',
      language: 'Language',
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
      language: 'string',
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

