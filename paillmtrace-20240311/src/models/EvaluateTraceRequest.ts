// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluationConfig } from "./EvaluationConfig";
import { ModelConfig } from "./ModelConfig";


export class EvaluateTraceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the trace belongs.
   * 
   * @example
   * my-llm-app
   */
  appName?: string;
  /**
   * @remarks
   * If the value retrieved at the JSON path is itself a JSON string, further JSON path definitions within this JSON are necessary to get the actual value.
   * 
   * This parameter is required.
   */
  evaluationConfig?: EvaluationConfig;
  /**
   * @remarks
   * The ID of the evaluation task. If not specified, the system randomly generates and returns an ID. You can use this ID to quickly search for evaluation results.
   * 
   * @example
   * 44aea0ee00000000be5be24b2abb8f98
   */
  evaluationId?: string;
  /**
   * @remarks
   * The end time of the search time range, in UTC format.
   * 
   * @example
   * 2025-04-05 13:24:25
   * 2025-04-05
   */
  maxTime?: string;
  /**
   * @remarks
   * The start time of the search time range, in UTC format.
   * 
   * @example
   * 2025-04-05 13:24:25
   * 2025-04-05
   */
  minTime?: string;
  /**
   * @remarks
   * The configuration structure to access the model used internally by the evaluation trace.
   */
  modelConfig?: ModelConfig;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      evaluationConfig: 'EvaluationConfig',
      evaluationId: 'EvaluationId',
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      modelConfig: 'ModelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      evaluationConfig: EvaluationConfig,
      evaluationId: 'string',
      maxTime: 'string',
      minTime: 'string',
      modelConfig: ModelConfig,
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

