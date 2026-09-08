// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeCallRequest extends $dara.Model {
  /**
   * @remarks
   * Callee number. For internal calls, specify the target agent\\"s extension number in this field. For outbound calls, specify the customer\\"s phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1318888****
   */
  callee?: string;
  /**
   * @remarks
   * Caller number. This parameter is invalid for internal calls. For outbound calls, specify an outbound number available to the current agent. Ensure that the number supports outbound calling and that the agent has permission to use it. Permission can be granted in two ways: either by attaching the number to the skill group the agent signed into, or by setting the number as the agent\\"s personal outbound number.
   * 
   * @example
   * 010989****
   */
  caller?: string;
  /**
   * @remarks
   * Device ID. This field is meaningless and can be filled with any value.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * Flash SMS configuration
   * 
   * @example
   * {\\"applicationId\\":\\"6bd18325-ea7f-4881-8902-4d06283d3b3b\\",\\"templateId\\":\\"1722217249064\\"}
   */
  flashSmsVariables?: string;
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
   * The desensitized callee number. If this field is not empty, it indicates that the callee number must be desensitized. The desensitization rule is defined by the customer. You only need to enter the desensitized callee number here. Using a desensitized callee number means that in certain scenarios, you will see the desensitized callee number and cannot view the real callee number.
   * 
   * @example
   * 131****8888
   */
  maskedCallee?: string;
  /**
   * @remarks
   * Media type. The default value is AUDIO. Other valid values include VIDEO.
   * 
   * @example
   * AUDIO
   */
  mediaType?: string;
  /**
   * @remarks
   * Ingest endpoint data. The customer does not need to concern themselves with this.
   * 
   * @example
   * tags
   */
  tags?: string;
  /**
   * @remarks
   * Timeout. If the call is not answered within the time specified by this parameter, the system automatically hangs up. Valid values range from 30 to 300 seconds.
   * 
   * @example
   * 30
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * Agent ID initiating the outbound call. This field is optional. If not specified, the system uses the agent mapped to the current RAM user by default.
   * 
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

