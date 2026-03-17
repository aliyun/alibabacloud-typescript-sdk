// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AACF5140-783D-48F0-9E4F-E59D716F7D08
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the QoS policy belongs.
   * 
   * @example
   * qos-oek3r2cmvk7m8q****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

