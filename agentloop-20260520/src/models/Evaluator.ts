// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Evaluator extends $dara.Model {
  /**
   * @remarks
   * The evaluator runtime configuration. For inline LLM evaluators, this must include configurations such as prompt. When referencing an existing evaluator, this parameter is typically not required and is only specified when runtime parameters such as version need to be set.
   * 
   * @example
   * {"version":"1.0.0"}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The reference name of a registered evaluator. When specified, the evaluator definition is loaded by this reference with higher priority. Both built-in evaluators and custom evaluators are supported.
   * 
   * @example
   * Builtin.agent_task_completion
   */
  evaluatorRef?: string;
  /**
   * @remarks
   * The evaluator-level data filter conditions. These take effect together with the task-level dataFilter.query.
   * 
   * @example
   * {"query":"serviceName=\\"checkout-service\\""}
   */
  filters?: { [key: string]: any };
  /**
   * @remarks
   * The evaluator name. Required for inline evaluators when evaluatorRef is not specified. The evaluatorRef or name must be unique within the same task.
   * 
   * @example
   * agent_task_completion
   */
  name?: string;
  /**
   * @remarks
   * The field name for the evaluation result. Required for inline evaluators. When referencing an existing evaluator, the metricName defined in the evaluator definition is used if this parameter is not specified.
   * 
   * @example
   * agent_task_completion
   */
  resultName?: string;
  /**
   * @remarks
   * The evaluation result type. Required for inline evaluators. Defaults to score when referencing an existing evaluator and this parameter is not specified.
   * 
   * @example
   * score
   */
  resultType?: string;
  /**
   * @remarks
   * The evaluator type. Defaults to LLM if not specified. Inline CODE evaluators are currently not supported. For CODE type evaluators, reference a previously created evaluator by using evaluatorRef.
   * 
   * @example
   * AGENT
   */
  type?: string;
  /**
   * @remarks
   * The variable mapping that maps evaluator variables to evaluation data fields. Required for LLM/AGENT inline evaluators. When referencing an existing evaluator, the variable names must exist in the evaluator definition.
   * 
   * @example
   * {"input":"trace.input","output":"trace.output","agent_trajectory":"trace.agent_trajectory"}
   */
  variableMapping?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      evaluatorRef: 'evaluatorRef',
      filters: 'filters',
      name: 'name',
      resultName: 'resultName',
      resultType: 'resultType',
      type: 'type',
      variableMapping: 'variableMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluatorRef: 'string',
      filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      resultName: 'string',
      resultType: 'string',
      type: 'string',
      variableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.filters) {
      $dara.Model.validateMap(this.filters);
    }
    if(this.variableMapping) {
      $dara.Model.validateMap(this.variableMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

