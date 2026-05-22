// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF ruleset, which can be obtained by calling the ListWafRulesets interface.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The WAF operation phase, specifying the phase of the ruleset to query.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

