// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF rule group. You can query the ID by calling the [DescribeDcdnWafGroups](~~DescribeDcdnWafGroups~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1012
   */
  id?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **en**: English.
   * *   **zh**: Chinese.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query conditions. The value is a JSON string in the following format:
   * 
   * `QueryArgs={"PolicyIds":"The range of protection policy IDs","RuleIds":"The range of protection rule IDs","RuleNameLike":"The name of the protection rule","DomainNames":"The protected domain names","DefenseScenes":"waf_group","RuleStatus":"on","OrderBy":"GmtModified","Desc":"false"}`
   * 
   * >  If you do not specify this parameter, all protection rules are queried.
   * 
   * @example
   * {\\"RiskLevel\\":\\"\\",\\"ProtectionType\\":\\"\\",\\"ApplicationType\\":\\"\\",\\"RuleIdLike\\":\\"\\"}
   */
  queryArgs?: string;
  /**
   * @remarks
   * The range of the rule group to be queried.
   * 
   * *   **in**: Rules in the rule group are returned.
   * *   **out**: Rules that are in the full rule set but are not in the rule group are returned.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

