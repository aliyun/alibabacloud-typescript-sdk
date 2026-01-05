// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProvisionedProductPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * plan-bp1jvmdk2k****
   */
  planId?: string;
  /**
   * @remarks
   * The product instance ID.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      provisionedProductId: 'ProvisionedProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      provisionedProductId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

