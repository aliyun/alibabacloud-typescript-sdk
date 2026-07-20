// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  thirdPartApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartApplyId: 'third_part_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

