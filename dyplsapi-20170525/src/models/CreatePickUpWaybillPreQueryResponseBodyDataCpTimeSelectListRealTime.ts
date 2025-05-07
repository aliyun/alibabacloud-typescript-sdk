// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime extends $dara.Model {
  /**
   * @remarks
   * The name of the real-time order type.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  /**
   * @remarks
   * The tip displayed when the real-time order cannot be placed.
   * 
   * @example
   * Exceeding the real-time ordering time range.
   */
  selectDisableTip?: string;
  /**
   * @remarks
   * Indicates whether the real-time order can be placed after the deadline for placing a real-time order is reached.
   * 
   * @example
   * false
   */
  selectable?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

