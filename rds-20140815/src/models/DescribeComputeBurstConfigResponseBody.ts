// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComputeBurstConfigResponseBody extends $dara.Model {
  /**
   * @example
   * {
   *     "cpuEnlargeThreshold": "60",
   *     "memoryEnlargeThreshold": "60",
   *     "scaleMaxMemory": "4",
   *     "memoryShrinkThreshold": "50",
   *     "scaleMaxCpus": "2",
   *     "cpuShrinkThreshold": "30"
   *   }
   */
  computeBurstConfig?: { [key: string]: any };
  /**
   * @example
   * true
   */
  computeBurstEnabled?: boolean;
  /**
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      computeBurstConfig: 'ComputeBurstConfig',
      computeBurstEnabled: 'ComputeBurstEnabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeBurstConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      computeBurstEnabled: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.computeBurstConfig) {
      $dara.Model.validateMap(this.computeBurstConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

