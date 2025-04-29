// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the image supports the NVMe protocol. Valid values:
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
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

