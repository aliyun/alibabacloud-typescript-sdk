// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImagesImageFeatures extends $dara.Model {
  /**
   * @example
   * supported
   */
  cpuOnlineDowngrade?: string;
  /**
   * @example
   * supported
   */
  cpuOnlineUpgrade?: string;
  /**
   * @remarks
   * The image metadata access mode. Valid values:
   * 
   * *   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
   * *   v2: You can set the image metadata access mode to security hardening when you create instances from the image.
   * 
   * [Overview of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @example
   * unsupported
   */
  memoryOnlineDowngrade?: string;
  /**
   * @example
   * unsupported
   */
  memoryOnlineUpgrade?: string;
  /**
   * @remarks
   * Indicates whether the image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:
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
      cpuOnlineDowngrade: 'CpuOnlineDowngrade',
      cpuOnlineUpgrade: 'CpuOnlineUpgrade',
      imdsSupport: 'ImdsSupport',
      memoryOnlineDowngrade: 'MemoryOnlineDowngrade',
      memoryOnlineUpgrade: 'MemoryOnlineUpgrade',
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuOnlineDowngrade: 'string',
      cpuOnlineUpgrade: 'string',
      imdsSupport: 'string',
      memoryOnlineDowngrade: 'string',
      memoryOnlineUpgrade: 'string',
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

