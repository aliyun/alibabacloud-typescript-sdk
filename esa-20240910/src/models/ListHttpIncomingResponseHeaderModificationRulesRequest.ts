// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpIncomingResponseHeaderModificationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the ListHttpIncomingResponseHeaderModificationRules operation to query the ID.
   * 
   * @example
   * 432915173664768
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type to query. Valid values:
   * 
   * *   global: global configurations.
   * *   rule: rule configurations.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500. Default value: 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 624516866852544
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the website configurations. You can use this parameter to specify a version of your website to apply the feature settings. By default, version 0 is used.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

