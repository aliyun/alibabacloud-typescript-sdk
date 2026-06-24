// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSpec extends $dara.Model {
  /**
   * @remarks
   * Storage space size of data nodes, in GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * Whether to enable cloud disk encryption for data nodes:
   * 
   * - true: Enabled
   * - false: Disabled
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * Storage preference.
   */
  diskPreference?: string;
  /**
   * @remarks
   * Storage type of data nodes. Supported values:
   * 
   * - cloud_ssd: SSD cloud disk
   * - cloud_essd: ESSD cloud disk
   * - cloud_efficiency: Ultra cloud disk
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * Performance level of ESSD cloud disks. Required when the disk type of data nodes is ESSD cloud disk. Supported values: PL1, PL2, PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Data node specification. Specification details can be viewed in [Product Specifications](https://help.aliyun.com/document_detail/271718.html).
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

