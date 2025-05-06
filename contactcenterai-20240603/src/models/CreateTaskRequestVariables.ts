// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequestVariables extends $dara.Model {
  variableCode?: string;
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      variableCode: 'variableCode',
      variableValue: 'variableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variableCode: 'string',
      variableValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

