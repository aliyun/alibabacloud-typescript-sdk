// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DesensitizeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The input data to be masked.
   * 
   * This parameter is required.
   * 
   * @example
   * 15365291784
   */
  data?: string;
  /**
   * @remarks
   * The masking scene code. You can view this on the Data Masking Management page of DataWorks Data Protection Umbrella in the DataWorks console.
   * 
   * You can obtain this value from Data[].SceneCode in the response of DsgSceneQuerySceneListByName.
   * 
   * This parameter is required.
   * 
   * @example
   * _default_scene_code
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

