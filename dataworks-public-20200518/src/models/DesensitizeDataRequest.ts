// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DesensitizeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The data that you want to mask.
   * 
   * This parameter is required.
   * 
   * @example
   * 15365291784
   */
  data?: string;
  /**
   * @remarks
   * The code of the data masking scenario. You can view the code on the Data Masking Management page in Data Security Guard of the DataWorks console.
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

