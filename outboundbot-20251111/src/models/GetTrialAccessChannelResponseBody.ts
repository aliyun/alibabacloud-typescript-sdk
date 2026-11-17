// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrialAccessChannelResponseBodyDataChannelScripts extends $dara.Model {
  /**
   * @remarks
   * The JSON string of the label configuration exported from the scenario version. The specific fields are determined by the scenario version. The empty JSON array in the example only indicates that there are no configuration items and must not be confused with the call parameter Tags.
   * 
   * @example
   * []
   */
  labelConfigs?: string;
  /**
   * @remarks
   * The ID of the dialog scenario under the instance. Specify an existing scenario. Subsequent dialogs and end requests for the same text session should use the scenario specified when the session is started.
   * 
   * @example
   * script-example-001
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the scenario associated with the channel, used for display on the trial page. Use the actual value returned by the service.
   * 
   * @example
   * Product consultation
   */
  scriptName?: string;
  /**
   * @remarks
   * The JSON string of the variable configuration exported from the scenario version. It is not the variable values passed in this interaction. The specific configuration items are determined by the scenario version. The empty JSON array in the example only indicates that there are no configuration items and does not declare unverified internal fields.
   * 
   * @example
   * []
   */
  variableConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      labelConfigs: 'LabelConfigs',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      variableConfigs: 'VariableConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelConfigs: 'string',
      scriptId: 'string',
      scriptName: 'string',
      variableConfigs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrialAccessChannelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel associated with the trial link or specific access configuration. When a channel needs to be associated, use the ID actually returned by the channel service. It is not the ChannelId returned by a call, and the two must not be mixed. The configuration layer uses a UUID as the channel ID when creating a new channel.
   * 
   * @example
   * 66666666-7777-4888-8999-000000000000
   */
  accessChannelId?: string;
  /**
   * @remarks
   * Identifies the access source of the current interaction. The configuration layer enumerations are TEST (voice test window or real number outbound call test), TEXT_TEST (text test window), TRIAL (web voice trial link), and TEXT_TRIAL (text trial link). The existing default values and visibility of each API remain unchanged. If the current definition uses the historical value Text, it should be processed according to the existing definition and is not modified in this documentation update.
   * 
   * @example
   * TEST
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The scenario building method. The configuration layer enumerations are FLOW and LITE. This field is not declared in the current business layer channel response object. Therefore, whether it is actually returned depends on the deployment version.
   * 
   * @example
   * FLOW
   */
  builderType?: string;
  /**
   * @remarks
   * The scenarios associated with this channel and their display, variable, and label configurations. The trial page should use the ScriptId actually returned in the list and must not specify scenarios outside the channel.
   * 
   * @example
   * [{"ScriptId":"script-example-001","ScriptName":"Product consultation","VariableConfigs":"[]","LabelConfigs":"[]"}]
   */
  channelScripts?: GetTrialAccessChannelResponseBodyDataChannelScripts[];
  /**
   * @remarks
   * The display configuration of the trial channel, which is a JSON object string. The content is configured during channel creation and agreed upon with the trial page, and may include display information such as Images. The current code does not provide a complete fixed structure, and the empty object in the example only illustrates the serialization format.
   * 
   * @example
   * {}
   */
  channelSetting?: string;
  /**
   * @remarks
   * The creation time of the channel, in Unix timestamp format and measured in milliseconds. It is converted from the creation time of the configuration layer entity.
   * 
   * @example
   * 1794556800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The expiration time of the trial channel and the visitor token, in Unix timestamp format and measured in milliseconds. The service compares the validity period with the current system time in milliseconds. Expired tokens cannot continue the trial.
   * 
   * @example
   * 1794564000000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The instance identity of the product to which it belongs. You must use an instance that the invoker has permission to access and that actually exists. It must be consistent with the instance to which the scenario, channel, and session belong. The maximum length is subject to the current POP parameter definition.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the trial channel, used for display and identification on the trial page. The content is configured by the channel creator.
   * 
   * @example
   * Product consultation trial
   */
  name?: string;
  /**
   * @remarks
   * The natural language understanding (NLU) engine type defined in the configuration layer. Valid values: BEEBOT, PROMPTS, and FUNCTION. This field is not declared in the current business layer channel response object. Therefore, whether it can be returned through this operation depends on the deployment version and must not be assumed to always exist on the client.
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * The channel status. Valid values: Active (effective) and Expired (invalid). Trial access still requires server-side token and validity period verification. You cannot bypass the verification based solely on the status value saved on the client.
   * 
   * @example
   * Active
   */
  state?: string;
  /**
   * @remarks
   * The last update time of the channel, in Unix timestamp format and measured in milliseconds. It is converted from the update time of the configuration layer entity.
   * 
   * @example
   * 1794560400000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The visitor token obtained from the trial link. It is used to locate the trial channel and verify access permissions and the validity period. The token is generated by the channel service and must not be constructed manually. It cannot be empty and must be within its validity period. The example is a placeholder value that cannot be used for authentication. Do not disclose actual tokens to unauthorized personnel.
   * 
   * @example
   * example-visitor-token
   */
  visitorToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelType: 'AccessChannelType',
      builderType: 'BuilderType',
      channelScripts: 'ChannelScripts',
      channelSetting: 'ChannelSetting',
      createdTime: 'CreatedTime',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      name: 'Name',
      nluEngine: 'NluEngine',
      state: 'State',
      updatedTime: 'UpdatedTime',
      visitorToken: 'VisitorToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      builderType: 'string',
      channelScripts: { 'type': 'array', 'itemType': GetTrialAccessChannelResponseBodyDataChannelScripts },
      channelSetting: 'string',
      createdTime: 'number',
      expirationTime: 'number',
      instanceId: 'string',
      name: 'string',
      nluEngine: 'string',
      state: 'string',
      updatedTime: 'number',
      visitorToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelScripts)) {
      $dara.Model.validateArray(this.channelScripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrialAccessChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. A value of OK indicates success. When an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration. No error codes are added or modified in this update.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The channel configuration corresponding to the VisitorToken and its associated scenarios, used for trial page initialization.
   * 
   * @example
   * {"InstanceId":"instance-example-001","AccessChannelId":"66666666-7777-4888-8999-000000000000","AccessChannelType":"TEST","Name":"Product consultation trial","State":"Active","ChannelSetting":"{}","VisitorToken":"example-visitor-token","ExpirationTime":1794564000000,"CreatedTime":1794556800000,"UpdatedTime":1794560400000,"ChannelScripts":[{"ScriptId":"script-example-001","ScriptName":"Product consultation","VariableConfigs":"[]","LabelConfigs":"[]"}],"NluEngine":"BEEBOT","BuilderType":"FLOW"}
   */
  data?: GetTrialAccessChannelResponseBodyData;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A normal return value is 200. To determine whether the business operation is successful, you must also check the Code field. The presence of this field alone does not indicate a successful call.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error description. It is usually empty or not returned upon success, and a fixed text cannot be required for successful responses. Upon failure, it provides an error description to assist in troubleshooting. Combine it with Code and Params to understand the cause of the error. The example shows an error message when the trial link visitor token expires (corresponding to the Code Expired.VisitorToken) and is for format reference only.
   * 
   * @example
   * VisitorToken: example-visitor-token is expired.
   */
  message?: string;
  /**
   * @remarks
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to the current request. System request parameters are injected by the gateway, and callers do not need to fill in system fields manually.
   * 
   * @example
   * AAAAAAAA-BBBB-4CCC-8DDD-EEEEEEEEEEEE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business processing is successful. A value of true indicates success, and false indicates failure. The current general response implementation determines success based on whether the Code is OK.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTrialAccessChannelResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

