// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgSceneQuerySceneListByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for a fuzzy search of data masking scenario names.
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

