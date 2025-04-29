// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCancelResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  cancelSuccess?: boolean;
  code?: string;
  desc?: string;
  /**
   * @example
   * 100
   */
  forfeitFee?: number;
  static names(): { [key: string]: string } {
    return {
      cancelSuccess: 'cancel_success',
      code: 'code',
      desc: 'desc',
      forfeitFee: 'forfeit_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelSuccess: 'boolean',
      code: 'string',
      desc: 'string',
      forfeitFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

