// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopAttackListResponseBodyAttackList extends $dara.Model {
  /**
   * @remarks
   * The attack QPS. Unit: QPS
   * 
   * @example
   * 0
   */
  attack?: number;
  /**
   * @remarks
   * The number of all QPS, which includes normal and attack QPS. Unit: QPS.
   * 
   * @example
   * 294
   */
  count?: number;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      count: 'Count',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      count: 'number',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

