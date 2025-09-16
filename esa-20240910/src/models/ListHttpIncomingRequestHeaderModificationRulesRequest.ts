// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpIncomingRequestHeaderModificationRulesRequest extends $dara.Model {
  /**
   * @example
   * 424371770570752
   */
  configId?: number;
  /**
   * @example
   * rule
   */
  configType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 608665779308176
   */
  siteId?: number;
  /**
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

