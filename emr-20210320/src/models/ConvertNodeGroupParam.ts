// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertNodeGroupParam extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paymentDuration?: number;
  paymentDurationUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

