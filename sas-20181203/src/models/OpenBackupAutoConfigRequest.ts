// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenBackupAutoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The number of servers included in a single batch when the anti-ransomware managed service automatically generates policies.
   * 
   * > The maximum value is 50. If you specify a value greater than 50, the value is set to 50.
   * 
   * @example
   * 20
   */
  maxBatchSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxBatchSize: 'MaxBatchSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBatchSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

