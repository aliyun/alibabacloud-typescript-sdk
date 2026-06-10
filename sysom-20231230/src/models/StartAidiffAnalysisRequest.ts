// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisRequestTask1 extends $dara.Model {
  /**
   * @remarks
   * AI analysis ID
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @remarks
   * PIDs of AI job processes; batch input is supported, separated by commas
   */
  pids?: string[];
  /**
   * @remarks
   * Step end time, computed based on the selected step number
   * 
   * @example
   * 4660551334179.955
   */
  stepEnd?: number;
  /**
   * @remarks
   * Step start time, computed based on the selected step number
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

export class StartAIDiffAnalysisRequestTask2 extends $dara.Model {
  /**
   * @remarks
   * AI analysis ID
   * 
   * This parameter is required.
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @remarks
   * Process IDs (PIDs) of AI jobs. Batch input is supported, with PIDs separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 452651:python3 ./test.py
   */
  pids?: string[];
  /**
   * @remarks
   * Step end time, computed based on the selected step number.
   * 
   * This parameter is required.
   * 
   * @example
   * 4660551334179.955
   */
  stepEnd?: number;
  /**
   * @remarks
   * Step start time, computed based on the selected step number.
   * 
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

export class StartAIDiffAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * task1 parameters
   * 
   * This parameter is required.
   * 
   * @example
   * task1参数
   */
  task1?: StartAIDiffAnalysisRequestTask1;
  /**
   * @remarks
   * task2 parameters
   * 
   * This parameter is required.
   * 
   * @example
   * task2参数，目前只支持相同analysisId和pid的对比
   */
  task2?: StartAIDiffAnalysisRequestTask2;
  static names(): { [key: string]: string } {
    return {
      task1: 'task1',
      task2: 'task2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task1: StartAIDiffAnalysisRequestTask1,
      task2: StartAIDiffAnalysisRequestTask2,
    };
  }

  validate() {
    if(this.task1 && typeof (this.task1 as any).validate === 'function') {
      (this.task1 as any).validate();
    }
    if(this.task2 && typeof (this.task2 as any).validate === 'function') {
      (this.task2 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

