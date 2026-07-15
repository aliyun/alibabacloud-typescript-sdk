// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing mode.
   * 
   * @example
   * container_95
   */
  billingMode?: string;
  /**
   * @remarks
   * The plan instance ID.
   * 
   * @example
   * esa-cn-jea67jfbs0x
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BEB8659-9CDE-5F2C-83E9-50F55277E844
   */
  requestId?: string;
  /**
   * @remarks
   * The plan instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      billingMode: 'BillingMode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMode: 'string',
      instanceId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

