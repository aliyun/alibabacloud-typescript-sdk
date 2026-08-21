// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisRequestTask1 extends $dara.Model {
  /**
   * @remarks
   * The AI analysis ID.
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @remarks
   * The process IDs (PIDs) of AI job processes. Batch input is supported with comma-separated values.
   */
  pids?: string[];
  /**
   * @remarks
   * The step end time, calculated based on the selected step number.
   * 
   * @example
   * 4660551334179.955
   */
  stepEnd?: number;
  /**
   * @remarks
   * The step start time, calculated based on the selected step number.
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
   * The AI analysis ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @remarks
   * The process IDs (PIDs) of AI job processes. Batch input is supported with comma-separated values.
   * 
   * This parameter is required.
   * 
   * @example
   * 452651:python3 ./test.py
   */
  pids?: string[];
  /**
   * @remarks
   * The step end time, calculated based on the selected step number.
   * 
   * This parameter is required.
   * 
   * @example
   * 4660551334179.955
   */
  stepEnd?: number;
  /**
   * @remarks
   * The step start time, calculated based on the selected step number.
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
  xDebugId?: string;
  /**
   * @remarks
   * The task1 parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * task1 parameters
   */
  task1?: StartAIDiffAnalysisRequestTask1;
  /**
   * @remarks
   * The task2 parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * task2 parameters. Currently, only comparison with the same analysisId and pid is supported
   */
  task2?: StartAIDiffAnalysisRequestTask2;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      task1: 'task1',
      task2: 'task2',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      task1: StartAIDiffAnalysisRequestTask1,
      task2: StartAIDiffAnalysisRequestTask2,
      xSysomInvokeSource: 'string',
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

