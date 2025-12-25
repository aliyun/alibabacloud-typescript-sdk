// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLayoutDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  layoutData?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutData: 'LayoutData',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutData: 'string',
      subSceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

