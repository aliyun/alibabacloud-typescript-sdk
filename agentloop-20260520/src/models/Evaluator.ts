// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluatorVariableExtractorMappingValue } from "./EvaluatorVariableExtractorMappingValue";


export class Evaluator extends $dara.Model {
  /**
   * @remarks
   * The runtime configuration of the evaluator. For inline LLM evaluators, this must include configurations such as prompt. When referencing an existing evaluator, this parameter is typically not required and should only be specified when runtime parameters such as version need to be set.
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
   * The evaluation result type. Required for inline evaluators. When referencing an existing evaluator, defaults to score if not specified.
   * 
   * @example
   * score
   */
  resultType?: string;
  /**
   * @remarks
   * The evaluator type. Defaults to LLM if not specified. Inline CODE evaluators are not currently supported. For the CODE type, reference a previously created evaluator by using evaluatorRef.
   * 
   * @example
   * AGENT
   */
  type?: string;
  /**
   * @remarks
   * The variable extraction rule mapping that maps evaluator variables to a portion of the content within an evaluation data field. This is applicable when the variable value is not the entire field but a subset of the field content. This parameter shares the same variable name key space as variableMapping. Each variable can use only one of the two. Duplicate configurations cause an error. When referencing an existing evaluator, the variable names must exist in the evaluator definition. Call ListTraceFieldExtractionsPreview to perform a trial run for validation before saving.
   */
  variableExtractorMapping?: { [key: string]: EvaluatorVariableExtractorMappingValue };
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
      variableExtractorMapping: 'variableExtractorMapping',
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
      variableExtractorMapping: { 'type': 'map', 'keyType': 'string', 'valueType': EvaluatorVariableExtractorMappingValue },
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
    if(this.variableExtractorMapping) {
      $dara.Model.validateMap(this.variableExtractorMapping);
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

