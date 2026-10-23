// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSpec extends $dara.Model {
  /**
   * @remarks
   * The disk size of the data node, in GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption for the data node. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage preference.
   * 
   * @example
   * high_availability
   */
  diskPreference?: string;
  /**
   * @remarks
   * The storage type of the data node. Valid values:
   * 
   * - cloud_ssd: standard SSD
   * - cloud_essd: ESSD
   * - cloud_efficiency: ultra disk
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD. This parameter is required when the disk type of the data node is ESSD. Valid values: PL1, PL2, and PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The specifications of the data node. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
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

