// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenesResponseBodyScenesFlows extends $dara.Model {
  /**
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
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
   * @example
   * This is a test.
   */
  description?: string;
  flows?: ListScenesResponseBodyScenesFlows[];
  /**
   * @example
   * scene1
   */
  name?: string;
  /**
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
   * Id of the request
   * 
   * @example
   * B8987BF7-6028-5B17-80E0-251B7BD67BBA
   */
  requestId?: string;
  scenes?: ListScenesResponseBodyScenes[];
  /**
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

