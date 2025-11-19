// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  autoPay?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicProductParamsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operationType?: string;
  orderFrom?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      autoPay: 'AutoPay',
      dynamicProductParamsShrink: 'DynamicProductParams',
      operationType: 'OperationType',
      orderFrom: 'OrderFrom',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      autoPay: 'boolean',
      dynamicProductParamsShrink: 'string',
      operationType: 'string',
      orderFrom: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

