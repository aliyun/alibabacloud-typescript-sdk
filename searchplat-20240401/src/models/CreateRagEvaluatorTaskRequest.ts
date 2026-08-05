// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRagEvaluatorTaskRequestData extends $dara.Model {
  /**
   * @remarks
   * model_answer
   * 
   * @example
   * 空
   */
  modelAnswer?: string;
  /**
   * @remarks
   * question
   * 
   * @example
   * 空
   */
  question?: string;
  /**
   * @remarks
   * recall_docs
   */
  recallDocs?: string[];
  /**
   * @remarks
   * standard_answer
   * 
   * @example
   * 空
   */
  standardAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      modelAnswer: 'model_answer',
      question: 'question',
      recallDocs: 'recall_docs',
      standardAnswer: 'standard_answer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelAnswer: 'string',
      question: 'string',
      recallDocs: { 'type': 'array', 'itemType': 'string' },
      standardAnswer: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recallDocs)) {
      $dara.Model.validateArray(this.recallDocs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRagEvaluatorTaskRequestEvaluateConfig extends $dara.Model {
  /**
   * @remarks
   * The model to use.
   * 
   * @example
   * qwen-72b
   */
  model?: string;
  /**
   * @remarks
   * prompt
   * 
   * @example
   * 空
   */
  prompt?: string;
  /**
   * @remarks
   * run_all_step
   * 
   * @example
   * false
   */
  runAllStep?: boolean;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      prompt: 'prompt',
      runAllStep: 'run_all_step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      prompt: 'string',
      runAllStep: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRagEvaluatorTaskRequest extends $dara.Model {
  /**
   * @remarks
   * app_name
   * 
   * @example
   * 空
   */
  appName?: string;
  /**
   * @remarks
   * The list of evaluation data.
   */
  data?: CreateRagEvaluatorTaskRequestData[];
  /**
   * @remarks
   * The datasource config.
   * 
   * @example
   * {
   * "data_source_type": "oss",
   * "file_path": "oss://xxx.",
   * "file_name": "04837719-default-zz.xlsx"
   * }
   */
  dataSourceConfig?: any;
  /**
   * @remarks
   * emails
   */
  emails?: string[];
  /**
   * @remarks
   * The evaluation configuration.
   */
  evaluateConfig?: CreateRagEvaluatorTaskRequestEvaluateConfig;
  /**
   * @remarks
   * has_data_source
   * 
   * @example
   * 空
   */
  hasDataSource?: boolean;
  /**
   * @remarks
   * The metric values. Valid values:
   * - context_recall
   * - context_precision
   * - faithfulness
   * - satisfaction
   * - comprehensive_score.
   */
  metrics?: any[];
  /**
   * @remarks
   * The evaluation task name.
   * 
   * @example
   * taskName
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'app_name',
      data: 'data',
      dataSourceConfig: 'data_source_config',
      emails: 'emails',
      evaluateConfig: 'evaluate_config',
      hasDataSource: 'has_data_source',
      metrics: 'metrics',
      taskName: 'task_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      data: { 'type': 'array', 'itemType': CreateRagEvaluatorTaskRequestData },
      dataSourceConfig: 'any',
      emails: { 'type': 'array', 'itemType': 'string' },
      evaluateConfig: CreateRagEvaluatorTaskRequestEvaluateConfig,
      hasDataSource: 'boolean',
      metrics: { 'type': 'array', 'itemType': 'any' },
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.emails)) {
      $dara.Model.validateArray(this.emails);
    }
    if(this.evaluateConfig && typeof (this.evaluateConfig as any).validate === 'function') {
      (this.evaluateConfig as any).validate();
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

