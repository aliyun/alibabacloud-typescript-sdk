// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenesResponseBodyScenesFlows extends $dara.Model {
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

export class ListScenesResponseBodyScenes extends $dara.Model {
  /**
   * @remarks
   * The description of the scene.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The list of flows associated with the scene.
   */
  flows?: ListScenesResponseBodyScenesFlows[];
  /**
   * @remarks
   * The name of the scene.
   * 
   * @example
   * scene1
   */
  name?: string;
  /**
   * @remarks
   * The unique ID of the scene.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': ListScenesResponseBodyScenesFlows },
      name: 'string',
      sceneId: 'string',
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

export class ListScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * B8987BF7-6028-5B17-80E0-251B7BD67BBA
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scenes.
   */
  scenes?: ListScenesResponseBodyScenes[];
  /**
   * @remarks
   * The total number of scenes.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scenes: 'Scenes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scenes: { 'type': 'array', 'itemType': ListScenesResponseBodyScenes },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

