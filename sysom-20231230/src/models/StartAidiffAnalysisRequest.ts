// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisRequestTask1 extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  pids?: string[];
  /**
   * @example
   * 4660551334179.955
   */
  stepEnd?: number;
  /**
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

export class StartAIDiffAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  task1?: StartAIDiffAnalysisRequestTask1;
  /**
   * @remarks
   * This parameter is required.
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

