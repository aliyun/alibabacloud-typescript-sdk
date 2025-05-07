// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GPUDetail extends $dara.Model {
  GPU?: string;
  /**
   * @example
   * Tesla-V100-32G
   */
  GPUType?: string;
  /**
   * @example
   * nvidia.com/gpu-tesla-v100-sxm2-16gb
   */
  GPUTypeFullName?: string;
  static names(): { [key: string]: string } {
    return {
      GPU: 'GPU',
      GPUType: 'GPUType',
      GPUTypeFullName: 'GPUTypeFullName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPU: 'string',
      GPUType: 'string',
      GPUTypeFullName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

