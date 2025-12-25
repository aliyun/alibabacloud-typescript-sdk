// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMosaicsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"x": 504,"y": 450,"w": 256,"h": 153}]
   */
  markPosition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skjjskjk****
   */
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      markPosition: 'MarkPosition',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markPosition: 'string',
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

