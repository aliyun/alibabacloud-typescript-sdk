// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskInstanceResponseBodyTaskInstanceInputsVariables } from "./GetTaskInstanceResponseBodyTaskInstanceInputsVariables";


export class GetTaskInstanceResponseBodyTaskInstanceInputs extends $dara.Model {
  /**
   * @remarks
   * The variables.
   */
  variables?: GetTaskInstanceResponseBodyTaskInstanceInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': GetTaskInstanceResponseBodyTaskInstanceInputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

