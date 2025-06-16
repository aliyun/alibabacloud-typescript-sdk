// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-2giu0a6vd5x0mv4700
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC668356-BCB4-42FD-9BC3-FA2B2E04B634
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
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

