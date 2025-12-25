// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  id?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  viewPoint?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      viewPoint: 'ViewPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      viewPoint: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoint)) {
      $dara.Model.validateArray(this.viewPoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

