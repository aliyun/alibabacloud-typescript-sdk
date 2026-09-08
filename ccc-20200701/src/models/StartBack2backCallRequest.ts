// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartBack2BackCallRequest extends $dara.Model {
  /**
   * @remarks
   * Additional intermediate number. If this parameter is provided, the intermediate number specified by the Broker parameter is used to call the caller, and the number specified by this parameter is used to call the callee. This parameter is optional and defaults to empty.
   * 
   * @example
   * 0102156****
   */
  additionalBroker?: string;
  /**
   * @remarks
   * The intermediate number, which must be an active outbound number under the instance. This number is used to sequentially call the caller and the callee in a double-call scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * 0102157****
   */
  broker?: string;
  /**
   * @remarks
   * The callee number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1372168****
   */
  callee?: string;
  /**
   * @remarks
   * Caller number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1391814****
   */
  caller?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Ingest endpoint data. It must not exceed 128 bytes and is primarily used for extension purposes. Ordinary customers do not need to concern themselves with it.
   * 
   * @example
   * 无
   */
  tags?: string;
  /**
   * @remarks
   * The timeout for the dual-call, in seconds. If the call is not answered within the specified time, it will be automatically disconnected. This parameter is optional and defaults to 30 seconds.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      additionalBroker: 'AdditionalBroker',
      broker: 'Broker',
      callee: 'Callee',
      caller: 'Caller',
      instanceId: 'InstanceId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalBroker: 'string',
      broker: 'string',
      callee: 'string',
      caller: 'string',
      instanceId: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

