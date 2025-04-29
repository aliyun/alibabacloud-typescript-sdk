// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImagePipelineRequestImageOptionsImageFeatures extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the image created based on the image template supports the NVMe protocol. Valid values:
   * 
   * *   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
   * *   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
   * *   auto: The system automatically detects whether the image supports the NVMe protocol. The system automatically detects whether the NVMe driver is installed on your image before the new image is built. If you install or uninstall the NVMe driver during the image building process, the detection result may be incorrect. We recommend that you set the value to supported or unsupported based on the image building content.
   * 
   * @example
   * auto
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

