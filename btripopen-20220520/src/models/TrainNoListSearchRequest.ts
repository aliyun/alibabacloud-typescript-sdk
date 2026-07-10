// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoListSearchRequestOption extends $dara.Model {
  needTransfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      needTransfer: 'need_transfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needTransfer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainNoListSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrLocation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depLocation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  option?: TrainNoListSearchRequestOption;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      arrLocation: 'arr_location',
      depDate: 'dep_date',
      depLocation: 'dep_location',
      option: 'option',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrLocation: 'string',
      depDate: 'string',
      depLocation: 'string',
      option: TrainNoListSearchRequestOption,
      orderId: 'string',
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

