// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Evaluator extends $dara.Model {
  /**
   * @remarks
   * The evaluator configuration parameters.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The evaluation filter conditions.
   */
  filters?: { [key: string]: string };
  /**
   * @remarks
   * The evaluator name.
   * 
   * @example
   * agent_task_completion
   */
  name?: string;
  /**
   * @remarks
   * The evaluation result name.
   * 
   * @example
   * agent_task_completion
   */
  resultName?: string;
  /**
   * @remarks
   * The evaluation result type.
   * 
   * @example
   * score
   */
  resultType?: string;
  /**
   * @remarks
   * The evaluation variable mapping.
   */
  variableMapping?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      filters: 'filters',
      name: 'name',
      resultName: 'resultName',
      resultType: 'resultType',
      variableMapping: 'variableMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resultName: 'string',
      resultType: 'string',
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

