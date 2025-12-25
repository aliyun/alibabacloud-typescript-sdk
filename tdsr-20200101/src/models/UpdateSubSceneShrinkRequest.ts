// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubSceneShrinkRequest extends $dara.Model {
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
  viewPointShrink?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      viewPointShrink: 'ViewPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      viewPointShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

