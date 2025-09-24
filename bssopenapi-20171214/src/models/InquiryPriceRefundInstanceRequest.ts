// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InquiryPriceRefundInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required for scenarios that need idempotence. The UUID that is used to ensure the idempotence of the request.
   * 
   * @example
   * 793F021C-B589-1225-82A9-99232AEBE494
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required for unsubscription scenarios.
   * 
   * @example
   * i-bp1etb69sqxgl4*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The code of the service. This parameter is required for unsubscription scenarios.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service. This parameter is required for unsubscription scenarios. Unless otherwise specified, set this parameter to an empty string.
   * 
   * @example
   * ”“
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

