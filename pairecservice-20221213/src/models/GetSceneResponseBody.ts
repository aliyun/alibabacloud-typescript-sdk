// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSceneResponseBodyFlows extends $dara.Model {
  /**
   * @remarks
   * The code of the flow.
   * 
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * Flow 1
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

export class GetSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the scenario.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The list of flows.
   */
  flows?: GetSceneResponseBodyFlows[];
  /**
   * @remarks
   * The name of the scenario.
   * 
   * @example
   * scene1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8987BF7-6028-5B17-80E0-251B7BD67BBA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': GetSceneResponseBodyFlows },
      name: 'string',
      requestId: 'string',
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

