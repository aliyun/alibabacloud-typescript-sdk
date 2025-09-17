// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePushMeteringDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pushData123456
   */
  pushOrderBizId?: string;
  static names(): { [key: string]: string } {
    return {
      pushOrderBizId: 'PushOrderBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushOrderBizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

