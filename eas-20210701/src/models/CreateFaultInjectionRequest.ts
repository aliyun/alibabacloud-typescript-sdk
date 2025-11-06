// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaultInjectionRequest extends $dara.Model {
  /**
   * @example
   * {
   *   "FaultType": "DiskFillTask",
   *   "FaultArgs": {
   *     "FaultAction": "fill",
   *     "Percent": 80
   *   }
   * }
   */
  faultArgs?: any;
  /**
   * @example
   * CpuFullloadTask
   */
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultArgs: 'FaultArgs',
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultArgs: 'any',
      faultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

