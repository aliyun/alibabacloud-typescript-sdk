// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListAntCloudAuthScenesRequest extends $dara.Model {
  /**
   * @remarks
   * Scenario ID.
   * 
   * @example
   * 100000xxxx
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

