// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScenesResponseBodyScenesFlows } from "./ListScenesResponseBodyScenesFlows";


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

