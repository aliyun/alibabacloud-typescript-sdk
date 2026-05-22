// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The target status to change for the ruleset.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

