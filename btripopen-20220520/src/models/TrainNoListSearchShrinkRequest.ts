// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoListSearchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrLocation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-16
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
  optionShrink?: string;
  /**
   * @example
   * null
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      arrLocation: 'arr_location',
      depDate: 'dep_date',
      depLocation: 'dep_location',
      optionShrink: 'option',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrLocation: 'string',
      depDate: 'string',
      depLocation: 'string',
      optionShrink: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

