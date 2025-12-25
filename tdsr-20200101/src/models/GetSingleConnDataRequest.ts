// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSingleConnDataRequest extends $dara.Model {
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
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

