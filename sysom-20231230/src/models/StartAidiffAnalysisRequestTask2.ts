// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisRequestTask2 extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 452651:python3 ./test.py
   */
  pids?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4660551334179.955
   */
  stepEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4660550379415.497
   */
  stepStart?: number;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      pids: 'pids',
      stepEnd: 'step_end',
      stepStart: 'step_start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
      pids: { 'type': 'array', 'itemType': 'string' },
      stepEnd: 'number',
      stepStart: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pids)) {
      $dara.Model.validateArray(this.pids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

