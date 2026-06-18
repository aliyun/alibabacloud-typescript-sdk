// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageTransformsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. Obtain this ID when you create an image transform or from a previous call to this operation.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can use this parameter to query for a global configuration or rule configurations. Valid values:
   * 
   * - `global`: Retrieves the global configuration.
   * 
   * - `rule`: Retrieves rule configurations.
   * 
   * This parameter is optional. If not specified, both global and rule configurations are returned.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The page number to return. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Maximum: 500. Default: 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule name. This parameter is not required for a global configuration.
   * 
   * @example
   * test1
   */
  ruleName?: string;
  /**
   * @remarks
   * The site ID. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The site version. If version management is enabled for the site, use this parameter to specify the version to which the configuration applies. Default: 0.
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

