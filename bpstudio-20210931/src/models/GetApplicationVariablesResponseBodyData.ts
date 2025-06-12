// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationVariablesResponseBodyDataVariableList } from "./GetApplicationVariablesResponseBodyDataVariableList";


export class GetApplicationVariablesResponseBodyData extends $dara.Model {
  /**
   * @example
   * ob5epf79uv****
   */
  instanceId?: string;
  variableList?: GetApplicationVariablesResponseBodyDataVariableList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      variableList: 'VariableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      variableList: { 'type': 'array', 'itemType': GetApplicationVariablesResponseBodyDataVariableList },
    };
  }

  validate() {
    if(Array.isArray(this.variableList)) {
      $dara.Model.validateArray(this.variableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

