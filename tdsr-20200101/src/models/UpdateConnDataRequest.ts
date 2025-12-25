// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  connData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      connData: 'ConnData',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connData: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

