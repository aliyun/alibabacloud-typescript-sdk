// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafRulesetRequest extends $dara.Model {
  /**
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
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

