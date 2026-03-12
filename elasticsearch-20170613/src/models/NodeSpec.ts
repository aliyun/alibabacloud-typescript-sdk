// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSpec extends $dara.Model {
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
  diskPreference?: string;
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
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskPreference: 'diskPreference',
      diskType: 'diskType',
      performanceLevel: 'performanceLevel',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskPreference: 'string',
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

