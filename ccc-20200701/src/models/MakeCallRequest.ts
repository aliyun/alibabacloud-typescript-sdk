// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1318888****
   */
  callee?: string;
  /**
   * @example
   * 010989****
   */
  caller?: string;
  /**
   * @example
   * device
   */
  deviceId?: string;
  flashSmsVariables?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 131****8888
   */
  maskedCallee?: string;
  mediaType?: string;
  /**
   * @example
   * tags
   */
  tags?: string;
  /**
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      deviceId: 'DeviceId',
      flashSmsVariables: 'FlashSmsVariables',
      instanceId: 'InstanceId',
      maskedCallee: 'MaskedCallee',
      mediaType: 'MediaType',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      deviceId: 'string',
      flashSmsVariables: 'string',
      instanceId: 'string',
      maskedCallee: 'string',
      mediaType: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

