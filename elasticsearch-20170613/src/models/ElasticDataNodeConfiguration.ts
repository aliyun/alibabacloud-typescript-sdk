// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElasticDataNodeConfiguration extends $dara.Model {
  /**
   * @example
   * 3
   */
  amount?: number;
  /**
   * @example
   * 20
   */
  disk?: number;
  /**
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      performanceLevel: 'performanceLevel',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      performanceLevel: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

