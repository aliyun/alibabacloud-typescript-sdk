// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafUsageOfRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the WAF operation phase.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

