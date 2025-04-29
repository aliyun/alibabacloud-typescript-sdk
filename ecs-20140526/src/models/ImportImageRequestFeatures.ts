// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The metadata access mode version of the image. Valid values:
   * 
   * *   v1: You cannot set the metadata access mode to security hardening when you create instances from the image.
   * *   v2: You can set the metadata access mode to security hardening when you create instances from the image.
   * 
   * Default value: v1.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @remarks
   * Specifies whether the image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:
   * 
   * *   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
   * *   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
   * 
   * @example
   * supported
   */
  nvmeSupport?: string;
  static names(): { [key: string]: string } {
    return {
      imdsSupport: 'ImdsSupport',
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imdsSupport: 'string',
      nvmeSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

