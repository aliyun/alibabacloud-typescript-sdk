// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartBack2BackCallRequest extends $dara.Model {
  /**
   * @example
   * 0102156****
   */
  additionalBroker?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0102157****
   */
  broker?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1372168****
   */
  callee?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1391814****
   */
  caller?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  tags?: string;
  /**
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

