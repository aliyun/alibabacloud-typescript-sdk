// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageTransformsRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID. Can be obtained by calling the [ListImageTransforms](https://help.aliyun.com/document_detail/2869056.html) interface.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Possible values:
   * - global: Query global configuration;
   * - rule: Query rule configuration;
   * 
   * This parameter is optional. If not provided, it will not distinguish between global and rule configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Page number. The default value is 1 if not provided.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page. The maximum value is 500, and the default value is 500 if not provided.
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
   * test1
   */
  ruleName?: string;
  /**
   * @remarks
   * Site ID. Can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Site version number. For sites with version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. The default value is version 0.
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

