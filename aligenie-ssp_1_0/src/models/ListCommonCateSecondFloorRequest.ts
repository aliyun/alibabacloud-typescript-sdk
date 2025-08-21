// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonCateSecondFloorRequest extends $dara.Model {
  /**
   * @example
   * 80010
   */
  parentCateId?: number;
  static names(): { [key: string]: string } {
    return {
      parentCateId: 'ParentCateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

