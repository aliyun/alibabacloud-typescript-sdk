// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakePilotCallRequest extends $dara.Model {
  /**
   * @remarks
   * The variables passed to the phone call link. The value is a JSON object string, and variable values are processed as strings. Specific variable names are agreed upon by the call link and business scenario. This parameter is not semicolon-separated Tags. The example uses an empty object when no custom variables are defined.
   * 
   * @example
   * {}
   */
  callVariables?: string;
  /**
   * @remarks
   * The ID of the client device that initiates the web voice or receives data channel events. The same client must use the same DeviceId when obtaining data channel credentials and initiating a call. The example is only a business device ID and not a real credential assigned by the platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  deviceId?: string;
  /**
   * @remarks
   * Specifies whether to use the draft version. Valid values:
   * - true: Uses the draft version.
   * - false: Uses the published version.
   * This parameter does not publish the scenario. Ensure that the selected scenario version exists before you call this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The instance identity of the product. You must use an instance that the invoker has access to and that actually exists. The instance must be consistent with the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definition.
   * 
   * This parameter is required.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The called phone number for the current real-number outbound call test. The number must be the same as the one used to obtain the SMS verification code. Specify a number that is actually supported by the business and authorized. The current request object only requires this parameter to be non-empty. This document does not fabricate number formats or international number support scopes.
   * 
   * This parameter is required.
   * 
   * @example
   * 13800000000
   */
  number?: string;
  /**
   * @remarks
   * The dialog scenario ID of the instance. Specify an existing scenario. Subsequent dialog and end requests for the same text session must use the scenario specified when the session is started.
   * 
   * This parameter is required.
   * 
   * @example
   * script-example-001
   */
  scriptId?: string;
  /**
   * @remarks
   * The attached data string passed to the call link. Use the key=value format. Separate multiple key-value pairs with semicolons. Do not use JSON. For example, the Callee key can be used by the web call service to read the called party information. The example number is a placeholder value. Specify the actual value based on the access conventions of your business. Do not overwrite internal tags that do not belong to the business custom scope.
   * 
   * @example
   * Callee=057100000000
   */
  tags?: string;
  /**
   * @remarks
   * The SMS verification code sent to the number specified by Number for the verification of the OutboundCallTest scenario. The request must use a valid verification code actually received by the number. The example only demonstrates a string parameter and cannot be used to pass the verification. It also does not declare undefined length rules for the code.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      callVariables: 'CallVariables',
      deviceId: 'DeviceId',
      draftVersion: 'DraftVersion',
      instanceId: 'InstanceId',
      number: 'Number',
      scriptId: 'ScriptId',
      tags: 'Tags',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callVariables: 'string',
      deviceId: 'string',
      draftVersion: 'boolean',
      instanceId: 'string',
      number: 'string',
      scriptId: 'string',
      tags: 'string',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

