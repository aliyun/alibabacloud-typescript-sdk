// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantSceneDetailsRequest extends $dara.Model {
  /**
   * @example
   * tc_e6dc70c890866f4028ca685b6fa29874
   */
  authToken?: string;
  sceneIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      sceneIdList: 'sceneIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      sceneIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sceneIdList)) {
      $dara.Model.validateArray(this.sceneIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

