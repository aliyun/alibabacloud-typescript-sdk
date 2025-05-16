// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantSceneDetailsResponseBodyDataSceneTaskList extends $dara.Model {
  /**
   * @example
   * Say that this is your dad\\"s brother.
   */
  sceneTask?: string;
  sceneTaskTranslate?: string;
  static names(): { [key: string]: string } {
    return {
      sceneTask: 'sceneTask',
      sceneTaskTranslate: 'sceneTaskTranslate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneTask: 'string',
      sceneTaskTranslate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

