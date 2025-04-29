// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageAttributeRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The image metadata access mode. Valid values:
   * 
   * *   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
   * 
   * *   v2: You can set the image metadata access mode to security hardening when you create instances from the image.
   * 
   *     **
   * 
   *     **Note** You cannot change the value of ImdsSupport from v2 to v1 for an image. To change the value of ImdsSupport from v2 to v1 for an image, use the snapshots associated with the image to create an image and set ImdsSupport to v1 for the new image.
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
   * 
   * **if can be null:**
   * true
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

