// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Evaluator extends $dara.Model {
  config?: { [key: string]: any };
  evaluatorRef?: string;
  filters?: { [key: string]: any };
  name?: string;
  resultName?: string;
  resultType?: string;
  type?: string;
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

