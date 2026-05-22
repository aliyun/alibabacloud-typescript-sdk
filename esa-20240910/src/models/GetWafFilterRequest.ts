// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafFilterRequest extends $dara.Model {
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
  /**
   * @example
   * characteristics
   */
  target?: string;
  /**
   * @example
   * http_custom_cc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      siteId: 'SiteId',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      siteId: 'number',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

