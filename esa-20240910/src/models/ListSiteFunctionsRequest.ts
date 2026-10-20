// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteFunctionsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can use this parameter to query global configurations or rule configurations. Valid values:
   * - global: Queries global configurations.
   * - rule: Queries rule configurations.
   * 
   * This parameter is optional. If you do not specify this parameter, global and rule configurations are not distinguished. This parameter takes effect only when the FunctionName parameter is specified.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The name of the feature function.
   * 
   * @example
   * CacheRules
   */
  functionName?: string;
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
   * The rule name. You can use this parameter to query the rule whose name matches the specified value. This parameter takes effect only when the FunctionName parameter is specified.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 340035003106221
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site. For a site with version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      functionName: 'FunctionName',
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
      functionName: 'string',
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

