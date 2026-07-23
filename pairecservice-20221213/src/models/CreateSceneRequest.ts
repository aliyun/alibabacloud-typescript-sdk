// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSceneRequestFlows extends $dara.Model {
  /**
   * @remarks
   * The flow code.
   * 
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * 流量1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The scene description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The flows.
   */
  flows?: CreateSceneRequestFlows[];
  /**
   * @remarks
   * The instance ID. You can call the ListInstances operation to obtain the instance ID.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The scene name.
   * 
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

