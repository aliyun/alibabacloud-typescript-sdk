// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule-based configurations. Possible values:
   * - global: Query global configuration.
   * - rule: Query rule-based configuration.
   * 
   * This parameter is optional; if not provided, it will not distinguish between global and rule-based configurations.
   * 
   * @example
   * global
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
   * test
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
   * Site version number. For sites with version management enabled, this parameter can specify the site version for which the configuration takes effect, defaulting to version 0.
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

