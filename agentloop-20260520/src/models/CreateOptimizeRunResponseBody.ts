// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOptimizeRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the created run. You can call the GetOptimizeRun operation to query the subsequent status.
   * 
   * @example
   * {"optimizeRunId":"opr-20261014","status":"Pending"}
   */
  optimizeRun?: { [key: string]: any };
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * opr-20261014
   */
  optimizeRunId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      optimizeRun: 'optimizeRun',
      optimizeRunId: 'optimizeRunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optimizeRun: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      optimizeRunId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.optimizeRun) {
      $dara.Model.validateMap(this.optimizeRun);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

