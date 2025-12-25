// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LabelBuildRequest extends $dara.Model {
  mode?: string;
  /**
   * @example
   * PATCH
   */
  modelStyle?: string;
  /**
   * @example
   * OFF
   */
  optimizeWallWidth?: string;
  /**
   * @example
   * DEFAULT
   */
  planStyle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  sceneId?: string;
  /**
   * @example
   * 0
   */
  wallHeight?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      modelStyle: 'ModelStyle',
      optimizeWallWidth: 'OptimizeWallWidth',
      planStyle: 'PlanStyle',
      sceneId: 'SceneId',
      wallHeight: 'WallHeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      modelStyle: 'string',
      optimizeWallWidth: 'string',
      planStyle: 'string',
      sceneId: 'string',
      wallHeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

