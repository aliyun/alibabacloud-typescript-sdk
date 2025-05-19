// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSceneRequestFlows } from "./CreateSceneRequestFlows";


export class CreateSceneRequest extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  flows?: CreateSceneRequestFlows[];
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * scene1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': CreateSceneRequestFlows },
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

