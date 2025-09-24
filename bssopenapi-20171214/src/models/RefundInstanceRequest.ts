// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundInstanceRequest extends $dara.Model {
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
   * This parameter is required for unsubscription scenarios. Valid values: 1 and 0. A value of 1 specifies that the instance is immediately released. A value of 0 specifies that the instance is shut down based on the shutdown policy. This parameter is supported only for specified services. Default value: 1.
   * 
   * @example
   * 1
   */
  immediatelyRelease?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required for unsubscription scenarios. Do not specify a custom name for this parameter.
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
      immediatelyRelease: 'ImmediatelyRelease',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      immediatelyRelease: 'string',
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

