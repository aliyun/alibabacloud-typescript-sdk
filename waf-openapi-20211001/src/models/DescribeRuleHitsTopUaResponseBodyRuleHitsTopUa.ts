// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa extends $dara.Model {
  /**
   * @remarks
   * The number of attacks that are initiated from the IP address.
   * 
   * @example
   * 531
   */
  count?: number;
  /**
   * @remarks
   * The user agent.
   * 
   * @example
   * android
   */
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

