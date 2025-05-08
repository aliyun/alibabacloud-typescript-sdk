// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpRequestHeaderModificationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID, which can be obtained by calling the [ListHttpRequestHeaderModificationRules](https://help.aliyun.com/document_detail/2867483.html) API.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Possible values:
   * - global: Query global configuration;
   * - rule: Query rule configuration;
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * Page number, defaulting to 1 if not provided.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page, with a maximum of 500. Defaults to 500 if not provided.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the effective version of the configuration, defaulting to version 0.
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

