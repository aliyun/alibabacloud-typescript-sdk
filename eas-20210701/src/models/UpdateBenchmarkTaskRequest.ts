// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters of the stress testing task. For more information, see **Table 1. base description table**. The target stress testing task must be in the Running state. You can call the DescribeBenchmarkTask operation to query the task status. If the task is in the Stopped state, you must first call the StartBenchmarkTask operation and wait until the task enters the Running state.
   * 
   * @example
   * {
   *     "base":  {
   *          "qps": 200
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

