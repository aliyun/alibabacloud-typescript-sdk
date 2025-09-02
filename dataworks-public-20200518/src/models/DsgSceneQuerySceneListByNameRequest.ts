// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgSceneQuerySceneListByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data masking scenario. A fuzzy match is performed in the platform based on a keyword to search for the data masking scenario.
   * 
   * @example
   * dev_
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

