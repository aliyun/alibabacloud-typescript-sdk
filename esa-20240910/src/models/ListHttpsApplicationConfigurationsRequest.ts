// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpsApplicationConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule-based configurations. Possible values:
   * - global: Query global configuration.
   * - rule: Query rule-based configuration.
   * 
   * This parameter is optional. If not provided, it will not distinguish between global and rule-based configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Page number, default is 1 if not provided.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page, maximum is 500, default is 500 if not provided.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Rule name, which can be used to find the rule with the specified name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Site version number. For sites with version management enabled, this parameter can specify the site version for which the configuration is effective, default is version 0.
   * 
   * @example
   * 1
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

