// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyModifyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 118526587
   */
  applyId?: number;
  /**
   * @example
   * thirdpart12132
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 20220702001
   */
  thirdpartBusinessId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

