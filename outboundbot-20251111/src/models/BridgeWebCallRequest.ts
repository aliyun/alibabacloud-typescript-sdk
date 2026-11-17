// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeWebCallRequest extends $dara.Model {
  /**
   * @remarks
   * The caller information used to display and associate with the web call. This is not equivalent to the actual outbound caller phone number. If not provided or left empty, the current web call implementation uses the caller identifier as the caller display information.
   * 
   * @example
   * web-user-001
   */
  caller?: string;
  /**
   * @remarks
   * Identifies the client device that initiates the web voice call or receives data channel events. The same client must use the same DeviceId when obtaining data channel credentials and initiating a call. The example is only a business device identifier, not a real credential assigned by the platform.
   * 
   * @example
   * 10001
   */
  deviceId?: string;
  /**
   * @remarks
   * Specifies the scenario version. A value of true indicates that the draft version is used. A value of false indicates that the published version is used. This is not a scenario publishing operation. Ensure that the selected scenario version exists before calling the operation.
   * 
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The instance identity of the associated product. You must use an existing instance that the invoker has permission to access. The instance must be consistent with the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definition.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The audio sample rate for the web voice, in Hz. The backend default is 8000. The sample rate must match the client audio and gateway capabilities. The current API code does not define a complete list of allowed values, and other sample rates are not documented as guaranteed supported enumerations.
   * 
   * @example
   * 8000
   */
  sampleRate?: number;
  /**
   * @remarks
   * The dialogue scenario ID under the instance. Specify an existing scenario. Subsequent dialogue and end requests for the same text session must use the scenario specified when the session is started.
   * 
   * @example
   * script-example-001
   */
  scriptId?: string;
  /**
   * @remarks
   * The attached data string passed to the call link in key=value format. Separate multiple key-value pairs with semicolons instead of using JSON. For example, the web call service can read the Callee key to obtain the called party information. The example number is a placeholder value. Specify actual values based on your integration agreements. Do not overwrite internal tags that do not belong to the business custom scope.
   * 
   * @example
   * Callee=057100000000
   */
  tags?: string;
  /**
   * @remarks
   * The timeout for waiting for the call to be answered, in seconds. If the call is not answered within this period, it is actively hung up. The default value on the backend is 60 seconds. This does not represent the maximum duration of an answered call. The current request object does not declare additional upper and lower limits, and unverified value ranges are not added to the documentation.
   * 
   * @example
   * 60
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      deviceId: 'DeviceId',
      draftVersion: 'DraftVersion',
      instanceId: 'InstanceId',
      sampleRate: 'SampleRate',
      scriptId: 'ScriptId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      deviceId: 'string',
      draftVersion: 'boolean',
      instanceId: 'string',
      sampleRate: 'number',
      scriptId: 'string',
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

