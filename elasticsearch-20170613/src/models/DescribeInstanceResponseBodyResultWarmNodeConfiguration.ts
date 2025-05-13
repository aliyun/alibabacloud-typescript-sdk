// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyResultWarmNodeConfiguration extends $dara.Model {
  /**
   * @example
   * 6
   */
  amount?: number;
  /**
   * @example
   * 500
   */
  disk?: number;
  /**
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

