// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddVirtualNumberRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The company names. Separate multiple company names with commas (,).
   * 
   * @example
   * Company 1
   */
  corpNameList?: string;
  /**
   * @remarks
   * The real numbers. Separate multiple real numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1321111****,1322222****
   */
  numberList?: string;
  ownerId?: number;
  /**
   * @remarks
   * The virtual number.
   * 
   * This parameter is required.
   * 
   * @example
   * 05516214****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The service name. Default value: **dyvms**.
   * 
   * @example
   * dyvms
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **0**: number location first.
   * *   **1**: random.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  routeType?: number;
  static names(): { [key: string]: string } {
    return {
      corpNameList: 'CorpNameList',
      numberList: 'NumberList',
      ownerId: 'OwnerId',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpNameList: 'string',
      numberList: 'string',
      ownerId: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirtualNumberRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value 200 indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The numbers that failed to be associated.
   * 
   * > If all numbers are associated, no value is returned for this parameter.
   * 
   * @example
   * 1321111****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirtualNumberRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddVirtualNumberRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddVirtualNumberRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRobotSmartCallRequest extends $tea.Model {
  /**
   * @remarks
   * The called number. Only mobile phone numbers in the Chinese mainland are supported.
   * 
   * You can set up to 1,000 called numbers and separate the numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to called parties, which must be a number you purchased. You can view the numbers you purchased in the [Voice Messaging Service console](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal).
   * 
   * You can set up to 100 numbers and separate the numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 222
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The company name, which must be the same as the **company name** specified on the [qualification management page](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal).
   * 
   * > This parameter is optional if **isSelfLine** is set to **true**.
   * 
   * @example
   * Alibaba
   */
  corpName?: string;
  /**
   * @remarks
   * The ID of the robot or communication script that is used to initiate a call.
   * 
   * You can obtain the **communication script ID** from the [Communication script management](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  dialogId?: string;
  /**
   * @remarks
   * The speech recognition identifier of early media. The default value is **false**, which means that the speech recognition identifier of early media is not enabled.
   * 
   * Set the parameter to **true** if you want to enable the speech recognition identifier of early media.
   * 
   * @example
   * true
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to call the self-managed line. Default value: **false**.
   * 
   * @example
   * true
   */
  isSelfLine?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the call is scheduled. If you set this parameter to **true**, the **ScheduleTime** parameter is required.
   * 
   * @example
   * true
   */
  scheduleCall?: boolean;
  /**
   * @remarks
   * The preset call time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter is required only when **ScheduleCall** is set to **true**.
   * 
   * @example
   * 12
   */
  scheduleTime?: number;
  /**
   * @remarks
   * The task name. The task name can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Batch Tasks
   */
  taskName?: string;
  /**
   * @remarks
   * The variable value of the TTS template, in the JSON format.
   * 
   * The variable value must correspond to a number. The TtsParam parameter must be used together with the TtsParamHead parameter.
   * 
   * @example
   * [{"number":"1390000****","params":[“Miss li”,"miss wang","Mr.li"]}]
   */
  ttsParam?: string;
  /**
   * @remarks
   * The call tasks with variables, in the JSON format.
   * 
   * The parameter value is a list of variable names. The TtsParamHead parameter must be used together with the TtsParam parameter.
   * 
   * @example
   * ["name1","name2","name3"]
   */
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      corpName: 'CorpName',
      dialogId: 'DialogId',
      earlyMediaAsr: 'EarlyMediaAsr',
      isSelfLine: 'IsSelfLine',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleCall: 'ScheduleCall',
      scheduleTime: 'ScheduleTime',
      taskName: 'TaskName',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      corpName: 'string',
      dialogId: 'string',
      earlyMediaAsr: 'boolean',
      isSelfLine: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleCall: 'boolean',
      scheduleTime: 'number',
      taskName: 'string',
      ttsParam: 'string',
      ttsParamHead: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRobotSmartCallResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [QueryCallDetailByTaskId](https://help.aliyun.com/document_detail/393537.html) operation to query the details of the task based on the task ID.
   * 
   * @example
   * 4001112222
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRobotSmartCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchRobotSmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchRobotSmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](https://help.aliyun.com/document_detail/393531.html) operation to obtain the ID of the robocall task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRobotTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRobotTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOrderRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelOrderRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](https://help.aliyun.com/document_detail/393531.html) operation to obtain the task ID.
   * 
   * @example
   * 1045001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRobotTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRobotTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMediaTypeRequest extends $tea.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  calledNum?: string;
  /**
   * @example
   * 示例值示例值
   */
  mediaType?: string;
  /**
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNum: 'CalledNum',
      mediaType: 'MediaType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNum: 'string',
      mediaType: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMediaTypeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * false
   */
  model?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMediaTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeMediaTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeMediaTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the task template. Valid values:
   * 
   * *   **VMS_VOICE_TTS**: the text-to-speech (TTS) notification template.
   * *   **VMS_VOICE_CODE**: the voice notification template.
   * *   **VMS_TTS**: the voice verification code template.
   * 
   * @example
   * VMS_VOICE_TTS
   */
  bizType?: string;
  /**
   * @remarks
   * The called numbers.
   * 
   * *   If you set DataType to LIST, the value of Data is in the LIST format.
   * *   If you set DataType to JSON, the value of Data is in the JSON format.
   * 
   * @example
   * { "paramNames":["name1","name2","key3"], "calleeList":[ { "callee":"131222222", "params":["zangsan","zhangsan01","zhangsan02"] }, { "callee":"131222222", "params":["zangsan","zhangsan01","zhangsan02"] }, ] }
   */
  data?: string;
  /**
   * @remarks
   * The type of called numbers. Valid values:
   * 
   * *   **LIST**: the called numbers that are separated by commas (,).
   * *   **JSON**: a JSON-formatted list of called numbers with template parameters.
   * 
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  fireTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The calling number. Only virtual numbers are supported.
   * 
   * @example
   * 05516214****
   */
  resource?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the calling number. Set the value to **LIST**.
   * 
   * @example
   * LIST
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  scheduleType?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  stopTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Aliyun
   */
  taskName?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * TTS_2122****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      data: 'Data',
      dataType: 'DataType',
      fireTime: 'FireTime',
      ownerId: 'OwnerId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scheduleType: 'ScheduleType',
      stopTime: 'StopTime',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      data: 'string',
      dataType: 'string',
      fireTime: 'string',
      ownerId: 'number',
      resource: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scheduleType: 'string',
      stopTime: 'string',
      taskName: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123456
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED815433-724A-4357-9991-A54AD2FF09FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCallTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCallTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The calling number.
   * 
   * You must use the phone numbers that you have purchased and separate multiple numbers with commas (,). You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Real Number Service** > **Real Number Management** to view the numbers you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  caller?: string;
  /**
   * @remarks
   * The company name, which must be the same as the **enterprise name** on the qualification management page.
   * 
   * @example
   * Alibaba
   */
  corpName?: string;
  /**
   * @remarks
   * The ID of the robot or communication script that is used to initiate the call.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Intelligent Voice Robot** > **Communication Script Management** to view the communication script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000023****
   */
  dialogId?: number;
  /**
   * @remarks
   * Specifies whether to call the self-managed line. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * > If you set this parameter to **true**, calling numbers are not verified.
   * 
   * @example
   * false
   */
  isSelfLine?: boolean;
  /**
   * @remarks
   * Specifies whether to enable number status identification. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * > If you set this parameter to **true**, the reason why a call is not answered is recorded.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  numberStatusIdent?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The redial interval. Unit: minutes. The value must be greater than 1.
   * 
   * > The maximum redial interval is 30 minutes.
   * 
   * @example
   * 5
   */
  recallInterval?: number;
  /**
   * @remarks
   * The call state in which redial is required. Separate multiple call states with commas (,). Valid values:
   * 
   * *   **200010**: The phone of the called party is powered off.
   * *   **200011**: The number of the called party is out of service.
   * *   **200002**: The line is busy.
   * *   **200012**: The call is lost.
   * *   **200005**: The called party cannot be connected.
   * *   **200003**: The called party does not respond to the call.
   * 
   * @example
   * 200010,200011
   */
  recallStateCodes?: string;
  /**
   * @remarks
   * The number of redial times.
   * 
   * @example
   * 1
   */
  recallTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-redial. Valid values:
   * 
   * *   **1**: enables auto-redial.
   * *   **0**: disables auto-redial.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  retryType?: number;
  /**
   * @remarks
   * The task name. The task name can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test Template
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      corpName: 'CorpName',
      dialogId: 'DialogId',
      isSelfLine: 'IsSelfLine',
      numberStatusIdent: 'NumberStatusIdent',
      ownerId: 'OwnerId',
      recallInterval: 'RecallInterval',
      recallStateCodes: 'RecallStateCodes',
      recallTimes: 'RecallTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryType: 'RetryType',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      corpName: 'string',
      dialogId: 'number',
      isSelfLine: 'boolean',
      numberStatusIdent: 'boolean',
      ownerId: 'number',
      recallInterval: 'number',
      recallStateCodes: 'string',
      recallTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryType: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The unique ID of the robocall task.
   * 
   * You can call the [QueryRobotTaskDetail](https://help.aliyun.com/document_detail/393538.html) operation to query the details of the task based on the task ID.
   * 
   * @example
   * 400111****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRobotTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DegradeVideoFileRequest extends $tea.Model {
  /**
   * @example
   * 116012354148^1028137841****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 225869*****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      mediaType: 'MediaType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      mediaType: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DegradeVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DegradeVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DegradeVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DegradeVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRobotTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRobotTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the call task is executed, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * > You can leave this parameter empty.
   * 
   * @example
   * 2021-03-09 00:00:00
   */
  fireTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **RUNNING**
   * *   **STOP**
   * *   **CANCEL**
   * 
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can call the [CreateCallTask](~~CreateCallTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2256****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      fireTime: 'FireTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fireTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 53D0F0Fe-cbbB-De28-6FCd-DdbBcefA46dD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCallTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteCallTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteCallTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMediaTypeRequest extends $tea.Model {
  /**
   * @example
   * 116012854210^10281427****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1580000****
   */
  calledNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMediaTypeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallMediaTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCallMediaTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCallMediaTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallProgressRequest extends $tea.Model {
  /**
   * @example
   * 示例值
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  calledNum?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNum: 'CalledNum',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNum: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallProgressResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: { [key: string]: any };
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCallProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCallProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderRequest extends $tea.Model {
  /**
   * @remarks
   * The ticket ID.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Qualification\\&Communication Script Management** > **Qualification Management**, and then click the **400 Qualifications** tab to view the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22456****
   */
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetHotlineQualificationByOrderResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineQualificationByOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotlineQualificationByOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotlineQualificationByOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemporaryFileUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 45a04670582571eebf9e4531948c****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemporaryFileUrlResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemporaryFileUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemporaryFileUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTemporaryFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The token type.
   * 
   * @example
   * dyvms
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tokenType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69DDD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The token.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjY2Vzc190ZXN0In0.eyJqdGkiOiJUTjhfRzFCaEpETTJ3LWVoeGJZZXRnIiwiaWF0IjoxNjIzMzk0NTI3LCJleHAiOjE2MjMzOTYzMjcsIm5iZi****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoFieldUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  videoFile?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoFile: 'VideoFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      videoFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoFieldUrlResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: { [key: string]: any };
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoFieldUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoFieldUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoFieldUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallRequest extends $tea.Model {
  /**
   * @remarks
   * The end voice.
   * 
   * *   If you use a voice notification file, this parameter specifies the voice ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **Voice Notification Files** tab to view the voice ID.
   * *   If you use a TTS template, this parameter specifies the template ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **TTS Template** tab to view the template ID.
   * 
   * > The value of the ByeCode parameter must be of the same type as the value of the StartCode parameter. This means that both parameters must specify voice IDs or TTS template IDs.
   * 
   * @example
   * TTS_1234****
   */
  byeCode?: string;
  /**
   * @remarks
   * The variables in the TTS template, in the JSON format.
   * 
   * > This parameter is required when the ByeCode parameter is set to the ID of a TTS template that contains variables.
   * 
   * @example
   * {"name":"xxx","code":"123"}
   */
  byeTtsParams?: string;
  /**
   * @remarks
   * The called number.
   * 
   * Only phone numbers in the Chinese mainland are supported. Each request supports only one called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * The value must be a number you purchased. Each request supports only one calling number. In most cases, a calling number is configured with the maximum number of concurrent requests. New requests fail if the maximum number of concurrent requests is reached. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Real Number Service > Real Number Management** to view the number you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The information about the key pressed by the subscriber.
   */
  menuKeyMap?: IvrCallRequestMenuKeyMap[];
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation. This ID is returned to the caller in a receipt message.
   * 
   * The value is of the STRING type and must be 1 to 15 bytes in length.
   * 
   * @example
   * PR0210428****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of replay times. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The voice that is played when the call begins.
   * 
   * *   If you use a voice notification file, this parameter specifies the voice ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > Voice Notifications, and then click the **Voice Notification Files** tab to view the voice ID.
   * *   If you use a text-to-speech (TTS) template, this parameter specifies the template ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **TTS Template** tab to view the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TTS_1234****
   */
  startCode?: string;
  /**
   * @remarks
   * The variables in the TTS template, in the JSON format.
   * 
   * > This parameter is required when the StartCode parameter is set to the ID of a TTS template that contains variables.
   * 
   * @example
   * {"name":"xxx","code":"123"}
   */
  startTtsParams?: string;
  /**
   * @remarks
   * The timeout period for the subscriber to press a key. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      byeCode: 'ByeCode',
      byeTtsParams: 'ByeTtsParams',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      menuKeyMap: 'MenuKeyMap',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startCode: 'StartCode',
      startTtsParams: 'StartTtsParams',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byeCode: 'string',
      byeTtsParams: 'string',
      calledNumber: 'string',
      calledShowNumber: 'string',
      menuKeyMap: { 'type': 'array', 'itemType': IvrCallRequestMenuKeyMap },
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startCode: 'string',
      startTtsParams: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique receipt ID of the call.
   * 
   * You can call the [QueryCallDetailByCallId](https://help.aliyun.com/document_detail/393529.html) operation to query the details of the call based on the receipt ID.
   * 
   * @example
   * 116012354148^10281378****
   */
  callId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IvrCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IvrCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the task template. Valid values:
   * 
   * *   **VMS_VOICE_TTS**: the text-to-speech (TTS) notification template.
   * *   **VMS_VOICE_CODE**: the voice notification template.
   * *   **VMS_TTS**: the voice verification code template.
   * 
   * @example
   * VMS_VOICE_CODE
   */
  bizType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task is in the initial state.
   * *   **RELEASE**: The task is being parsed.
   * *   **RUNNING**: The task is running.
   * *   **STOP**: The task is suspended.
   * *   **SYSTEM_STOP**: The task is suspended by the system.
   * *   **CANCEL**: The task is canceled.
   * *   **SYSTEM_CANCEL**: The task is canceled by the system.
   * *   **DONE**: The task is complete.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 151001****
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Aliyun
   */
  taskName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task information.
   */
  data?: ListCallTaskResponseBodyData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B0F201F-DCDA-45C2-AA92-1AE177F94991
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallTaskResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCallTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCallTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1300000****
   */
  calledNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **FAIL**: The task fails.
   * *   **INIT**: The task is not started.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 150001****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNum: 'CalledNum',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNum: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the task.
   */
  data?: ListCallTaskDetailResponseBodyData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D692AC3D-CBA8-417F-BEB9-5B73718922D4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of called numbers.
   * 
   * @example
   * 1000
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallTaskDetailResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCallTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCallTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberRequest extends $tea.Model {
  /**
   * @remarks
   * The China 400 number.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100***
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the registered phone number.
   */
  data?: ListHotlineTransferNumberResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHotlineTransferNumberResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotlineTransferNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotlineTransferNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileRequest extends $tea.Model {
  /**
   * @remarks
   * The China 400 number.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000****
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListHotlineTransferRegisterFileResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHotlineTransferRegisterFileResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotlineTransferRegisterFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotlineTransferRegisterFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseVideoFileRequest extends $tea.Model {
  /**
   * @example
   * 116012854210^10281427****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  calledNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PauseVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PauseVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayVideoFileRequest extends $tea.Model {
  /**
   * @example
   * 116012354148^1028137841****
   */
  callId?: string;
  /**
   * @example
   * 示例值
   */
  calledNumber?: string;
  /**
   * @example
   * false
   */
  onlyPhone?: boolean;
  /**
   * @example
   * 342268*****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      onlyPhone: 'OnlyPhone',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      onlyPhone: 'boolean',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      videoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * false
   */
  model?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlayVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PlayVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PlayVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdRequest extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the call.
   * 
   * > 
   * 
   * *   The CallId parameter is included in the response parameters of the outbound call operation that you call to initiate a call.
   * 
   * *   The date when the call specified by CallId is started must be the same as the date specified by QueryDate.
   * 
   * *   The value of CallId must match the value of ProdId.
   * 
   * This parameter is required.
   * 
   * @example
   * 116014888060^10281631****
   */
  callId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service ID. Valid values:
   * 
   * *   **11000000300006**: voice notification. You can call the [SingleCallByVoice](https://help.aliyun.com/document_detail/393517.html) operation to send a voice notification of the voice notification file type to the specified number.
   * *   **11010000138001**: voice verification code. You can call the [SingleCallByTts](https://help.aliyun.com/document_detail/393519.html) operation to send a voice verification code or a text-to-speech (TTS) voice notification to the specified number.
   * *   **11000000300005**: IVR. You can call the [IvrCall](https://help.aliyun.com/document_detail/393521.html) operation to initiate an interactive voice call to the specified number.
   * *   **11000000300009**: Session Initiation Protocol (SIP) call.
   * *   **11030000180001**: intelligent outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 11000000300006
   */
  prodId?: number;
  /**
   * @remarks
   * The time at which call details are queried. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > The system queries the call records that are generated within 24 hours after the specified point in time. For example, if you specify the time 20:00:01 on November 21, 2022, the system queries the call records that are generated for the specified call ID from 20:00:01 on November 21, 2022, to 20:00:01 on November 22, 2022.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671552000000
   */
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      ownerId: 'OwnerId',
      prodId: 'ProdId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      ownerId: 'number',
      prodId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the call, in the JSON format.
   * 
   * *   **caller**: the calling number.
   * *   **startDate**: the time when the call was started.
   * *   **stateDesc**: the description of the call state.
   * *   **duration**: the call duration. Unit: seconds. The value **0** indicates that the user was not connected.
   * *   **callerShowNumber**: the calling number displayed to the called party.
   * *   **gmtCreate**: the time when the call request was received.
   * *   **state**: the call state. The call state is returned by the Internet service provider (ISP) in real time. For more information about call states, see [ISP-returned error codes](https://help.aliyun.com/document_detail/55085.html).
   * *   **endDate**: the time when the call was ended.
   * *   **calleeShowNumber**: the number displayed to the called party.
   * *   **callee**: the called number.
   * *   **aRingTime**: the time when Line A started to ring, in the yyyy-MM-dd HH:mm:ss format.
   * *   **aEndTime**: the time when ringing on Line A ended, in the yyyy-MM-dd HH:mm:ss format.
   * *   **bRingTime**: the time when Line B started to ring, in the yyyy-MM-dd HH:mm:ss format.
   * *   **bEndTime**: the time when ringing on Line B ended, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * {"caller":"18767****","startDate":"","stateDesc":"502","duration":0,"callerShowNumber":"05344****","gmtCreate":"2017-11-27 20:09:06","state":"502","endDate":"","calleeShowNumber":"053447****","bRingTime":"2022-01-01 12:02:00"，"bEndTime":"2022-01-01 12:02:28"，"callee":"1373546****"}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByCallIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCallDetailByCallIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCallDetailByCallIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdRequest extends $tea.Model {
  /**
   * @remarks
   * The called number. You can view the outbound call records of only one called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  callee?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the outbound robocall task. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-10-09 09:02:03
   */
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the outbound robocall task. The task ID is returned after the outbound robocall task is successfully delivered. You can view the task ID on the [Task Management](https://dyvms.console.aliyun.com/job/list) page of the Voice Messaging Service console, or call the **BatchRobotSmartCall** operation to obtain the **task ID**.
   * 
   * This parameter is required.
   * 
   * @example
   * 4001112222
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      ownerId: 'OwnerId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      ownerId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The call details of the outbound robocall task, in the JSON format.
   * 
   * *   **startDate**: the time when the call was answered.
   * 
   * *   **stateDesc**: the reason why the call was hung up. If the status code of early media was returned, this parameter indicates the reason why the status code of early media was used.
   * 
   * *   **statusCode**: the status code.
   * 
   * *   **EndDate**: the time when the call was ended.
   * 
   * *   **calleeShowNumber**: the calling number displayed to the called party.
   * 
   * *   **callee**: the called number.
   * 
   * *   **duration**: the billing duration.
   * 
   * *   **gmtCreate**: the time when the outbound robocall task was created.
   * 
   * *   **hangupDirection**: the party who hung up.
   * 
   * *   **tags**: the call tags.
   * 
   * *   **dialogCount**: the number of conversation rounds in the call.
   * 
   * *   **sureCount**: the number of times that the robocall task was acknowledged.
   * 
   * *   **denyCount**: the number of times that the robocall task was denied.
   * 
   * *   **rejectCount**: the number of times that the robocall task was rejected.
   * 
   * *   **customCount**: the number of times that the robocall task was customized.
   * 
   * *   **knowledgeCount**: the number of times that the knowledge base was queried.
   * 
   * *   **recordFile**: the download URL of the recording file. The URL is valid only for 48 hours. The recording file must be downloaded in time.
   * 
   * *   **callId**: the call ID.
   * 
   * *   **recordStatus**: indicates whether a recording file was available. Valid values:
   * 
   *     *   1: A recording file was available.
   *     *   2: No recording file was available.
   * 
   * *   **knowledgeCommonCount**: the number of call failures caused by the common issues in the knowledge base.
   * 
   * *   **knowledgeBusinessCount**: the number of call failures caused by the business issues in the knowledge base.
   * 
   * *   **callee**: the called number.
   * 
   * *   **dialogDetail**: the conversation details. The value is a JSON array that contains the following parameters:
   * 
   *     *   **role**: the role who spoke.
   *     *   **content**: the content of the speech.
   *     *   **time**: the start time of the speech.
   * 
   * > The preceding parameters are for reference only. The actually returned parameters prevail.
   * 
   * @example
   * {"rejectCount":0,"dialogCount":3,"tags":"","startDate":"2019-03-27 10:34:54","gmtCreate":"2019-03-27 10:34:40","sureCount":0,"state":"200000","recordFile":"http://alicom-fc-record-biz.cn-hangzhou.oss.aliyun-inc.com/Freeswitch_RU_115987800002_02c3554f-ea24-422d-b1de-e671f455f21a_record.wav?OSSAccessKeyId=bypFNbGJVk73****&Signature=VWHOX%2FFhvvtSkxfMTw%2F5fdJUQuk%3D&Expires=1554382725","defaultCount":0,"endDate":"2019-03-27 10:35:09","calleeShowNumber":"1390000****","customCount":0,"callId":"1390000****","knowledgeCount":0,"recordStatus":1,"denyCount":0,"duration":16,"knowledgeCommonCount":0,"callee":"1390000****","knowledgeBusinessCount":0,"hangupDirection":1}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D86B61A8-F2EE-4E4C-9F05-08A4676FFD89
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallDetailByTaskIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCallDetailByTaskIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCallDetailByTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The China 400 number used to transfer the call.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryCallInPoolTransferConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCallInPoolTransferConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCallInPoolTransferConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCallInPoolTransferConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordRequest extends $tea.Model {
  /**
   * @remarks
   * The calling number of the inbound call.
   * 
   * @example
   * 150****0000
   */
  callInCaller?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The phone number to which a call is transferred.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The time at which call transfer records are queried, in the YYYY-MM-DD hh:mm:ss format.
   * 
   * > The query result is all the call transfer records of the specified day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-28 00:00:00
   */
  queryDate?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callInCaller: 'CallInCaller',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCaller: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      queryDate: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryCallInTransferRecordResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCallInTransferRecordResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCallInTransferRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCallInTransferRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListRequest extends $tea.Model {
  /**
   * @remarks
   * The review state. Valid values:
   * 
   * *   **CONFIGURABLE**
   * *   **AUDITING**
   * *   **AUDITPASS**
   * *   **AUDITFAIL**
   * 
   * @example
   * AUDITING
   */
  auditStatus?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The basic information about the robot, in the JSON format. The basic information contains the following parameters:
   * 
   * *   **id**: the robot ID.
   * *   **robotName**: the robot name.
   * *   **robotType**: the robot type.
   * *   **auditStatus**: the review state.
   * *   **gmtCreate**: the time when the task was created.
   * *   **gmtModified**: the time when the task was modified.
   * *   **partnerId**: the partner ID.
   * *   **asrId**: the ID of the automatic speech recognition (ASR) model.
   * *   **asrType**: the ASR type. Valid values: **Public** and **Private**.
   * *   **remark**: the additional information.
   * 
   * @example
   * {["id":1000010920004, "gmtModified":"Thu Mar 21 15:38:55 CST 2019", "auditStatus":"AUDITPASS","gmtCreate":"Thu Mar 21 12:00:51 CST 2019","remark":"tset","partnerId":100000022670001,"asrId":"a9a1d69081fd4266ad788346bf5e1b6c","robotType":"CUSTOM","asrType":"1","robotName":"Collection scenario"},{"id":1000010920003,"gmtModified":"Thu Mar 21 11:51:10 CST 2019","auditStatus":"AUDITPASS","gmtCreate":"Thu Mar 21 11:44:57 CST 2019","remark":"test","partnerId":100000022670001,"asrId":"a9a1d69081fd4266ad788346bf5e1b6c","robotType":"CUSTOM","asrType":"1","robotName":"Collection scenario"]}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F59AF338-655D-48E8-9471-5EB07692B1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotInfoListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRobotInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRobotInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  callee?: string;
  ownerId?: number;
  /**
   * @remarks
   * The timestamp of the time at which the call details you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-10-21 08:23:21
   */
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](https://help.aliyun.com/document_detail/393531.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      ownerId: 'OwnerId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      ownerId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The call details of a robocall task, in the JSON format.
   * 
   * *   **taskId**: the unique ID of the robocall task.
   * *   **caller**: the calling number.
   * *   **called**: the called number.
   * *   **duration**: the call duration. Unit: seconds.
   * *   **label**: the label of the called party.
   * *   **dialogCount**: the number of conversation rounds in the call.
   * *   **callResult**: the call result.
   * *   **hangupDirection**: the party who hung up. Valid values: **0**: the robot. **1**: the called party.
   * *   **transferResult**: the result of transferring the call to an agent. Valid values: **1**, **0**, and **3**. The value 1 indicates that the call was transferred to the agent. The value 0 indicates that the call failed to be transferred to the agent. The value 3 indicates that the call was not transferred to the agent.
   * *   **transferNumber**: the phone number of the agent to whom the call was transferred.
   * *   **transferFailReason**: the reason why the call failed to be transferred to the agent.
   * *   **callId**: the unique receipt ID of the call, in the `taskId^bizId` format.
   * *   **recallCurTimes**: the number of recalls.
   * *   **callStartTime**: the start time of the call.
   * *   **callEndTime**: the end time of the call.
   * *   **sureCount**: the number of times that the robocall task was affirmed.
   * *   **denyCount**: the number of times that the robocall task was denied.
   * *   **rejectCount**: the number of times that the robocall task was rejected.
   * *   **customCount**: the number of times that the robocall task was customized.
   * *   **knowledgeCount**: the number of times that the knowledge base was queried.
   * *   **defaultCount**: the default number of calls.
   * *   **knowledgeBusinessCount**: the number of call failures caused by the business issues in the knowledge base.
   * *   **knowledgeCommonCount**: the number of call failures caused by the common issues in the knowledge base.
   * *   **recordStatus**: Indicates whether the call has a recording file. Valid values: **1**: The call has a recording file. **2**: The call does not have a recording file.
   * *   **recordFile**: the download URL of the recording file.
   * *   **dialogDetail**: the dialog details, in a JSON-formatted array. **role**: the object of the speech. **content**: the content of the speech. **speakTime**: the time of the speech.
   * 
   * @example
   * { "taskId" : 1045001, "caller" : "0571-8899****", "called" : "130****0000", "duration" : "60", "label" : "Invitation", "dialogCount": "3", "callResult" : "Not Available", "hangupDirection" : "1", "transferResult" : "3", "transferNumber" ：0571-8833****, "transferFailReason" ："User hangs up", "callId" ："116950320375^10375010****", "recallCurTimes" : 2, "callStartTime" : "2019.06.14 15:22:23", "callEndTime" : "2019.06.14 15:22:55", "sureCount" : 2, "denyCount" : 2, "rejectCount" : 0, "customCount" : 0, "knowledgeCount" : 0, "defaultCount" : 0, "knowledgeBusinessCount" : 0, "knowledgeCommonCount" : 0, "recordStatus":1, "recordFile": "http://alicom-fc-record-biz.cn-hangzhou.oss.aliyun-inc.com/Freeswitch_RU_117074080001_ccd71132-8256-4eb4-9217-884e1d87c0d4_record.wav?Expires=1562740186&OSSAccessKeyId=bypFNbGJVk7****&Signature=99losPmytVl%2BMH85noZGD******", "dialogDetail": [{"role": "robot","speakTime": "2019-06-19 20:44:17","content":"prologue"}] }
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRobotTaskCallDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRobotTaskCallDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListRequest extends $tea.Model {
  /**
   * @remarks
   * The call result. Valid values:
   * 
   * *   **200002**: The line is busy.
   * *   **200005**: The called party cannot be connected.
   * *   **200010**: The phone of the called party is powered off.
   * *   **200011**: The called party is out of service.
   * *   **200012**: The call is lost.
   * 
   * @example
   * 200002
   */
  callResult?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1300****0000
   */
  called?: string;
  /**
   * @remarks
   * The minimum number of conversation rounds in the call.
   * 
   * @example
   * 0
   */
  dialogCountFrom?: string;
  /**
   * @remarks
   * The maximum number of conversation rounds in the call.
   * 
   * @example
   * 5
   */
  dialogCountTo?: string;
  /**
   * @remarks
   * The minimum call duration.
   * 
   * @example
   * 0
   */
  durationFrom?: string;
  /**
   * @remarks
   * The maximum call duration.
   * 
   * @example
   * 60
   */
  durationTo?: string;
  /**
   * @remarks
   * The party who hangs up. Valid values:
   * 
   * *   **0**: the called party.
   * *   **1**: the robot.
   * 
   * @example
   * 1
   */
  hangupDirection?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](https://help.aliyun.com/document_detail/393531.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callResult: 'CallResult',
      called: 'Called',
      dialogCountFrom: 'DialogCountFrom',
      dialogCountTo: 'DialogCountTo',
      durationFrom: 'DurationFrom',
      durationTo: 'DurationTo',
      hangupDirection: 'HangupDirection',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callResult: 'string',
      called: 'string',
      dialogCountFrom: 'string',
      dialogCountTo: 'string',
      durationFrom: 'string',
      durationTo: 'string',
      hangupDirection: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the robocall task, which is a JSON-formatted array.
   * 
   * *   **taskId**: the unique ID of the robocall task.
   * *   **caller**: the calling number.
   * *   **called**: the called number.
   * *   **duration**: the call duration. Unit: seconds.
   * *   **label**: the label of the called party.
   * *   **dialogCount**: the number of conversation rounds in the call.
   * *   **callResult**: the call result.
   * *   **hangupDirection**: the party who hung up. Valid values: **1** and **0**. The value 1 indicates the called party, and the value 0 indicates the robot.
   * *   **transferResult**: the result of transferring the call to an agent. Valid values: **1**, **0**, and **3**. The value 1 indicates that the call was transferred to an agent. The value 0 indicates that the call failed to be transferred to an agent. The value 3 indicates that the call was not transferred to an agent.
   * *   **transferNumber**: the phone number of the agent to whom the call was transferred.
   * *   **transferFailReason**: the reason why the call failed to be transferred to an agent.
   * *   **callId**: the unique receipt ID of the call.
   * *   **recallCurTimes**: the number of recalls.
   * *   **callStartTime**: the start time of the call.
   * *   **callEndTime**: the end time of the call.
   * *   **sureCount**: the number of times that the robocall task was acknowledged.
   * *   **denyCount**: the number of times that the robocall task was denied.
   * *   **rejectCount**: the number of times that the robocall task was rejected.
   * *   **customCount**: the number of times that the robocall task was customized.
   * *   **knowledgeCount**: the number of times that the knowledge base was queried.
   * *   **defaultCount**: the default number of calls.
   * *   **knowledgeBusinessCount**: the number of call failures caused by the business issues in the knowledge base.
   * *   **knowledgeCommonCount**: the number of call failures caused by the common issues in the knowledge base.
   * *   ****
   * 
   * @example
   * [ {"taskId":"1045001", "caller":"0571-889****", "called": "130****0000", "duration":"60", "label":"Invitation", "dialogCount":"3", "callResult":"Not Available", "hangupDirection":"1", "transferResult":"3", "transferNumber":"0571-8833****", "transferFailReason":"User hangs up", "callId":"116950320375^10375010****", "recallCurTimes":"2", "callStartTime":"2019.06.14 15:22:23", "callEndTime":"2019.06.14 15:22:55", "sureCount":"2", "denyCount":"2", "rejectCount":"0", "customCount:"0", "knowledgeCount":"0", "defaultCount":"0", "knowledgeBusinessCount":"0", "knowledgeCommonCount":"0"} ]
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskCallListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRobotTaskCallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRobotTaskCallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the robocall task, in the JSON format.
   * 
   * *   **Id**: the unique ID of the robocall task.
   * *   **taskName**: the task name.
   * *   **robotId**: the robot ID.
   * *   **robotName**: the robot name.
   * *   **corpName**: the company name.
   * *   **caller**: the number displayed to the called party.
   * *   **numberStatusIdent**: indicates whether number status identification was enabled. Valid values: **true** and **false**. The value true indicates that number status identification was enabled. The value false indicates that number status identification was not enabled.
   * *   **status**: the task state. You can call the [QueryRobotTaskList](~~QueryRobotTaskList~~) operation to obtain the task state from the `status` parameter.
   * *   **scheduleType**: the scheduling type. Valid values: **SINGLE** and **ORDER**. The value SINGLE indicates that the task was started immediately after it was created. The value ORDER indicates that the task was started at a scheduled time.
   * *   **retryType**: indicates whether auto-redial was enabled. Valid values: **1** and **0**. The value 1 indicates that auto-redial was enabled. The value 0 indicates that auto-redial was not enabled.
   * *   **recallStateCodes**: the call state in which redial is required. Valid values: **200010**, **200011**, **200002**, **200012**, and **200005**. The value 200010 indicates that the phone of the called party was powered off. The value 200011 indicates that the number of the called party was out of service. The value 200002 indicates that the line was busy. The value 200012 indicates that the call was lost. The value 200005 indicates that the called party could not be connected.
   * *   **recallTimes**: the number of redial times.
   * *   **recallInterval**: the redial interval. Unit: minutes.
   * *   **createTime**: the time when the task was created, in the yyyy-MM-dd HH:mm:ss format.
   * *   **fireTime**: the time when the task was started, in the yyyy-MM-dd HH:mm:ss format.
   * *   **completeTime**: the time when the task was completed, in the yyyy-MM-dd HH:mm:ss format.
   * *   **filename**: the name of the called number file.
   * *   **ossFilePath**: the path of the called number file.
   * 
   * @example
   * {"id":1045001,"taskName":"Test Template","robotId":1000000075003,"robotName":"robot","corpName":"company ","caller":"057156xxxx,0571568xxxx", "numberStatusIdent":true,"status":"INIT","scheduleType":"SINGLE", "retryType":1,"recallStateCodes":"200010,200011", "recallTimes":2,"recallInterval":5,"createTime": "2019-06-14 11:04:19","fireTime":"2019-06-14 11:05:23","completeTime": "2019-06-14 18:21:06","called": [{"fileName": "5102636f-7be6-4a2d-9ac7-755a2e140a50--robotCallApi", "ossFilePath": "http://test.cn-hangzhou.oss.aliyun-inc.com/5102636f-7be6-4a2d-9ac7-755a2e140a50--robotCallApi.xlsx"}]}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRobotTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRobotTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task is not started.
   * *   **READY**: The task is ready to start.
   * *   **DISPATCH**: The task is being parsed.
   * *   **EXCUTING**: The task is being executed.
   * *   **MANUAL_STOP**: The task is manually suspended.
   * *   **SYSTEM_STOP**: The task is suspended by the system.
   * *   **ARREARS_STOP**: The task is suspended due to overdue payments.
   * *   **CANCEL**: The task is manually canceled.
   * *   **SYSTEM_CANCEL**: The task is canceled by the system.
   * *   **FINISH**: The task is complete.
   * 
   * @example
   * EXCUTING
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Test Template
   */
  taskName?: string;
  /**
   * @remarks
   * The date when the task is created, in the yyyy-MM-dd format.
   * 
   * @example
   * 2019-06-14
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskName: 'TaskName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskName: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The robocall tasks, in the JSON format.
   * 
   * *   **id**: the unique ID of the robocall task.
   * *   **taskName**: the task name.
   * *   **robotId**: the robot ID.
   * *   **robotName**: the robot name.
   * *   **status**: the task state.
   * *   **scheduleType**: the scheduling type. Valid values: **SINGLE** and **ORDER**. The value SINGLE indicates that the task was started immediately after it was created. The value ORDER indicates that the task was started at a scheduled time.
   * *   **createTime**: the time when the task was created, in the yyyy.MM.dd HH:mm:ss format.
   * *   **completeTime**: the time when the task was completed, in the yyyy.MM.dd HH:mm:ss format.
   * *   **fireTime**: the time when the task was started, in the yyyy.MM.dd HH:mm:ss format.
   * *   **totalCount**: the total number of calls processed.
   * *   **finishCount**: the number of calls completed.
   * 
   * @example
   * [ {"id": 1045001, "taskName": "Test Template", "robotId": 1000000075003, "robotName": "robot", "status": "INIT","scheduleType": "SINGLE", "createTime": "2019.06.14 14:55:23", "completeTime": "2019.06.14 14:55:23", "fireTime": "2019.06.14 14:55:23", "totalCount": 1000, "finishCount": 998} ]
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotTaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRobotTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRobotTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotv2AllListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotv2AllListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the robot communication script, in the JSON format.
   * 
   * *   **id**: the ID of the robot communication script.
   * *   **robotName**: the name of the robot communication script.
   * *   **robotType**: the type of the robot communication script.
   * 
   * @example
   * {"id":100000007****,"robotName":"Robot","robotType":"CUSTOM"}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRobotv2AllListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRobotv2AllListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRobotv2AllListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoPlayProgressRequest extends $tea.Model {
  /**
   * @example
   * 116004767703^102806****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 159****0000
   */
  calledNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoPlayProgressResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoPlayProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryVideoPlayProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVideoPlayProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service name. Default value: **dyvms**.
   * 
   * @example
   * dyvms
   */
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **0**: number location first.
   * *   **1**: random.
   * 
   * @example
   * 0
   */
  routeType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the numbers associated with the virtual numbers. The following fields are returned:
   * 
   * *   createTime: the time when the number was activated.
   * *   qualificationCount: the number of qualifications.
   * *   cityCount: the number of cities.
   * *   phoneNumCount: the number of virtual numbers.
   * *   remark: the additional information.
   * *   phoneNum: the virtual number.
   * *   routeType: the route type.
   * *   canCancel: indicates whether the number can be deactivated.
   * *   specCount: the number of Internet service providers (ISPs).
   * *   status: the number state. Valid values: **1**, **0**, and **-1**. The value 1 indicates that the number is valid. The value 0 indicates that the number is invalid. The value -1 indicates that the number was deactivated.
   * *   pageNo: the page number.
   * *   pageSize: the number of entries per page.
   * *   total: the total number of virtual numbers.
   * 
   * @example
   * {"data":[{"createTime":"2020-07-15 04:00:00","qualificationCount":0,"cityCount":0,"phoneNumCount":1,"remark":"20200715Unicom CTD shut down","phoneNum":"05516214****","routeType":1,"canCancel":true,"specCount":0,"status":"1"}],"pageSize":1,"total":17,"pageNo":1}
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FF70B74-1B3C-44C1-ACDF-8DF962988F0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryVirtualNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVirtualNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRelationRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The virtual number.
   * 
   * @example
   * 05516214****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The service name. Default value: **dyvms**.
   * 
   * @example
   * dyvms
   */
  prodCode?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Qualifications\\&Communication Scripts > Qualification Management**, and then click **Details** in the Actions column to view the qualification ID.
   * 
   * @example
   * 1000000542****
   */
  qualificationId?: number;
  /**
   * @remarks
   * The city to which the virtual number belongs.
   * 
   * @example
   * hangzhou
   */
  regionNameCity?: string;
  /**
   * @remarks
   * The real number.
   * 
   * @example
   * 1705559****
   */
  relatedNum?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * **0**: number location first. **1**: random.
   * 
   * @example
   * 0
   */
  routeType?: number;
  /**
   * @remarks
   * The number type. Valid values:
   * 
   * *   **1**: the number provided by a virtual network operator, in the 05710000\\*\\*\\*\\* format.
   * *   **2**: the number provided by an Internet service provider (ISP).
   * *   **3**: a 5-digit phone number that starts with 95.
   * 
   * @example
   * 1
   */
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      qualificationId: 'QualificationId',
      regionNameCity: 'RegionNameCity',
      relatedNum: 'RelatedNum',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      qualificationId: 'number',
      regionNameCity: 'string',
      relatedNum: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value 200 indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of associations between virtual numbers and real numbers. The following fields are returned:
   * 
   * *   **relatedNum**: the real number.
   * *   **createTime**: the time when the number was activated.
   * *   **pageNo**: the page number.
   * *   **pageSize**: the number of entries per page.
   * *   **total**: the total number of entries returned.
   * 
   * @example
   * {"data":[{"relatedNum":"1705559****","createTime":"2021-03-26 12:34:08"}],"pageSize":20,"total":1,"pageNo":1}
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FAD5988-B483-48A4-B251-6E8470A67371
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualNumberRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryVirtualNumberRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVirtualNumberRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceFileAuditInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the voice file. Valid values:
   * 
   * *   **0** (default): the voice notification file.
   * *   **2**: the recording file.
   * 
   * @example
   * 0
   */
  businessType?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the voice file. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications** or **Voice File Management**, and then click the **Voice Notification Files** tab to view the **voice ID**.
   * 
   * > You can query up to 10 voice files each time. Separate the voice file names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 8501d2eb-efbb-471f-xxx8-****.wav
   */
  voiceCodes?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      voiceCodes: 'VoiceCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      voiceCodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceFileAuditInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * The value OK indicates that the request was successful. For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryVoiceFileAuditInfoResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryVoiceFileAuditInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceFileAuditInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryVoiceFileAuditInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVoiceFileAuditInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverCallInConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The China 400 number that is used to transfer the inbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 400***
   */
  number?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverCallInConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the inbound call was resumed. Valid values:
   * 
   * *   true: The inbound call was resumed.
   * *   false: The inbound call failed to be resumed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a78278ff-26bb-48ec-805c-26a0f4c102***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverCallInConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoverCallInConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecoverCallInConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVideoFileRequest extends $tea.Model {
  /**
   * @example
   * 100001616500^1000018****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  calledNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SeekVideoFileRequest extends $tea.Model {
  /**
   * @remarks
   * 呼叫唯一ID
   * 
   * @example
   * 示例值
   */
  callId?: string;
  /**
   * @remarks
   * 被叫号码
   * 
   * @example
   * 示例值示例值示例值
   */
  calledNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 快进或快退值，负数为快退，单位秒
   * 
   * @example
   * 92
   */
  seekTimes?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      seekTimes: 'SeekTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      seekTimes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SeekVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SeekVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SeekVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SeekVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationRequest extends $tea.Model {
  /**
   * @remarks
   * The business type. Set the value to **CONTACT**.
   * 
   * This parameter is required.
   * 
   * @example
   * CONTACT
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The mobile phone number that receives the SMS verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 150****0000
   */
  target?: string;
  /**
   * @remarks
   * The mode of sending the SMS verification code. Set the value to **SMS**.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      target: 'Target',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      target: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the verification code was sent successfully.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendVerificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * *   **roundRobin**
   * *   **random**
   * 
   * This parameter is required.
   * 
   * @example
   * roundRobin
   */
  calledRouteMode?: string;
  /**
   * @remarks
   * The information about the phone numbers for transferring the call.
   * 
   * This parameter is required.
   */
  details?: SetTransferCalleePoolConfigRequestDetails[];
  ownerId?: number;
  /**
   * @remarks
   * The phone number used for transferring the call.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 190***
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledRouteMode: 'CalledRouteMode',
      details: 'Details',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledRouteMode: 'string',
      details: { 'type': 'array', 'itemType': SetTransferCalleePoolConfigRequestDetails },
      ownerId: 'number',
      phoneNumber: 'string',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the phone numbers for transferring the call were configured.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7518CE1-B0FF-4C6F-9252-BF80271B2F99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetTransferCalleePoolConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetTransferCalleePoolConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsRequest extends $tea.Model {
  /**
   * @remarks
   * The mobile phone number that receives voice notifications.
   * 
   * *   Number format in the Chinese mainland:
   * 
   *     *   Mobile phone number, for example, 159\\*\\*\\*\\*0000.
   *     *   Landline number, for example, 0571\\*\\*\\*\\*5678.
   * 
   * *   Number format outside the Chinese mainland: country code + phone number, for example, 85200\\*\\*\\*\\*00.
   * 
   * > 
   * 
   * *   Each request supports only one called number. For more information, see [How to use voice notifications in the Chinese mainland](https://help.aliyun.com/document_detail/150016.html) or [How to use voice verification codes in regions outside the Chinese mainland](https://help.aliyun.com/document_detail/270044.html).
   * 
   * *   Voice verification codes are sent to a called number at the following frequency: one time per minute, five times per hour, and 20 times per 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to the called party.
   * 
   * *   You do not need to specify this parameter if you use the text-to-speech (TTS) notification template or voice verification code template for outbound calls in the common mode. For more information, see [FAQ about the common outbound call mode](https://help.aliyun.com/document_detail/172104.html).
   * *   If you use the TTS notification template or voice verification code template for outbound calls in the dedicated mode, you must specify a number you purchased and only one number can be specified. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Voice Numbers** > **Real Number Management** to view the number you purchased.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The custom ID that is reserved for the caller of the operation when the request is initiated. This ID is returned to the caller in a receipt message.
   * 
   * The value is of the STRING type and must be 1 to 15 bytes in length.
   * 
   * @example
   * 225869*****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times a voice notification is played back in a call. Valid values: 1 to 3. Default value: 3.
   * 
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The playback speed. Valid value: -500 to 500.
   * 
   * @example
   * 5
   */
  speed?: number;
  /**
   * @remarks
   * The ID of the approved TTS notification template or voice verification code template.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), and choose **Voice Messages** > **Voice Verification Codes** or choose **Voice Messages** > **Voice Notifications** to view the **template ID**.
   * 
   * > The account to which the TTS template belongs must be the same as the account that is used to call the SingleCallByTts operation.
   * 
   * This parameter is required.
   * 
   * @example
   * TTS_100****
   */
  ttsCode?: string;
  /**
   * @remarks
   * The variables in the template, in the JSON format.
   * 
   * > The variables in the template must be less than 250 characters in length. The length of each single variable is not limited. These variables do not support URLs. The variables in the verification code template support only digits and letters.
   * 
   * @example
   * {"AckNum":"123456"}
   */
  ttsParam?: string;
  /**
   * @remarks
   * The playback volume of the voice notification. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      ttsCode: 'string',
      ttsParam: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique receipt ID of the call.
   * 
   * You can call the [QueryCallDetailByCallId](https://help.aliyun.com/document_detail/393529.html) operation to query the details of the call based on the receipt ID.
   * 
   * @example
   * 116012354148^10281378****
   */
  callId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByTtsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SingleCallByTtsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SingleCallByTtsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVideoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @example
   * abcdefgh
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 100
   */
  speed?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  videoCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  voiceCode?: string;
  /**
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      videoCode: 'VideoCode',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      videoCode: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVideoResponseBody extends $tea.Model {
  /**
   * @example
   * 116012354148^10281378****
   */
  callId?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * a78278ff-26bb-48ec-805c-26a0f4c102***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVideoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SingleCallByVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SingleCallByVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceRequest extends $tea.Model {
  /**
   * @remarks
   * The number for receiving voice notifications.
   * 
   * Number format:
   * 
   * *   In the Chinese mainland:
   * 
   *     *   Mobile phone number, for example, 159\\*\\*\\*\\*0000.
   *     *   Landline number, for example, 0571\\*\\*\\*\\*5678.
   * 
   * *   Outside the Chinese mainland: country code + phone number, for example, 85200\\*\\*\\*\\*00.
   * 
   * > 
   * 
   * *   You can specify only one called number for a request. For more information, see [How to use voice notifications in the Chinese mainland](https://help.aliyun.com/document_detail/150016.html) or [How to use voice notifications in regions outside the Chinese mainland](https://help.aliyun.com/document_detail/268810.html).
   * 
   * *   Voice notifications are sent to a called number at the following frequency: one time per minute, five times per hour, and 20 times per 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to the called party.
   * 
   * *   You do not need to specify this parameter if you use a voice notification file that uses the common outbound call mode. For more information, see [FAQ about the common outbound call mode](https://help.aliyun.com/document_detail/172104.html).
   * *   If you use a voice notification file that uses the dedicated outbound call mode, you must specify a number that you purchased. You can specify only one number. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Real Number Service** > **Real Number Management** to view the number that you purchased.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in a receipt message.
   * 
   * The value must be of the STRING type and 1 to 15 bytes in length.
   * 
   * @example
   * 22596****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of times the voice notification file is played. Valid values: 1 to 3.
   * 
   * @example
   * 3
   */
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The playback speed of the voice notification file. Valid values: -500 to 500.
   * 
   * @example
   * 100
   */
  speed?: number;
  /**
   * @remarks
   * The voice ID of the voice notification file.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications** or **Voice File Management**, and then click the **Voice Notification Files** tab to view the **voice ID**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  voiceCode?: string;
  /**
   * @remarks
   * The playback volume of the voice notification file. Valid values: 0 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique receipt ID for the call.
   * 
   * You can call the [QueryCallDetailByCallId](https://help.aliyun.com/document_detail/393529.html) operation to query the details of the call.
   * 
   * @example
   * 116004767703^102806****
   */
  callId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.****
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50FFA85-0B79-4421-A7BD-00B0A271966F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleCallByVoiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SingleCallByVoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SingleCallByVoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipVideoFileRequest extends $tea.Model {
  /**
   * @example
   * 116012854210^10281427****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @example
   * PR0210428****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 04:02:01
   */
  skipTimes?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipTimes: 'SkipTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipTimes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'boolean',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkipVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SkipVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SkipVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the playback of the recording file can be interrupted. Default value: **true**. The default value indicates that the playback of the recording file can be interrupted.
   * 
   * If you set the value of this parameter to false, the playback of the recording file cannot be interrupted even if the value of action_break is set to true.
   * 
   * > The value of action_code_break takes precedence over the value of action_break.
   * 
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @remarks
   * The duration that the user keeps speaking. The playback of the recording file is interrupted when this duration is reached. Unit: milliseconds.
   * 
   * If the value of ActionCodeBreak is set to **true** for the recording file and the duration that the user keeps speaking reaches the specified duration, the playback of the recording file is interrupted. If you do not specify ActionCodeTimeBreak or set the value of ActionCodeTimeBreak to 0, the setting of ActionCodeBreak does not take effect.
   * 
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @remarks
   * The ASR base model. Valid values:
   * 
   * *   **customer_service_8k** (default): Chinese Mandarin.
   * *   **dialect_customer_service_8k**: a heavy accent.
   * 
   * > You must specify the ASR model when you call the SmartCall operation. We recommend that you specify either of the AsrModelId and AsrBaseId parameters.
   * 
   * *   If you specify only the AsrModelId parameter, the specified ASR model is used.
   * 
   * *   If you specify only the AsrBaseId parameter, the ASR base model is used.
   * 
   * *   If you specify neither of the two parameters, the default ASR base model is used, that is, the default value customer_service_8k is used for the AsrBaseId parameter.
   * 
   * *   If you specify both parameters, make sure that their values do not conflict with each other.
   * 
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @remarks
   * The ID of the Automatic Speech Recognition (ASR) model.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and view the ID of the ASR model on the **ASR Model Management** page.
   * 
   * > You must specify the ASR model when you call the SmartCall operation. We recommend that you specify either of the AsrModelId and AsrBaseId parameters.
   * 
   * *   If you specify only the AsrModelId parameter, the specified ASR model is used.
   * 
   * *   If you specify only the AsrBaseId parameter, the specified ASR base model is used.
   * 
   * *   If you specify neither of the two parameters, the default value customer_service_8k is used for the AsrBaseId parameter. This means that the default Mandarin ASR base model is used.
   * 
   * *   If you specify both parameters, make sure that their values do not conflict with each other.
   * 
   * @example
   * 2070aca1eff146f9a7bc826f1c3d****
   */
  asrModelId?: string;
  /**
   * @remarks
   * The ID of the background voice file that is played back when the user talks with the robot.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice File Management**, click the **Intelligent Speech Interaction Recording File** tab, and then click **Details** in the Actions column to view the voice ID.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * The called number. Only phone numbers in the Chinese mainland are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to the called party. The value must be the number you purchased.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Voice Numbers** > **Real Number Management** to view the number you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The dynamic extension ID that is reserved for the caller of the operation. This ID is returned in the callback URL and is used as the development identifier of the customer.
   * 
   * @example
   * abcdefgh
   */
  dynamicId?: string;
  /**
   * @remarks
   * Specifies whether to enable speech recognition of early media. Valid values:
   * 
   * *   **false** (default): Speech recognition of early media is disabled.
   * *   **true**: Speech recognition of early media is enabled.
   * 
   * > If you set the value of this parameter to **true**, the reason why the call is not answered is recorded.
   * 
   * @example
   * true
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Inverse Text Normalization (ITN) during post-processing. Default value: **false**. If you set the value to false, ITN is not enabled during post-processing.
   * 
   * If you set the value to **true**, Chinese numerals are converted into Arabic numerals for output.
   * 
   * @example
   * false
   */
  enableITN?: boolean;
  /**
   * @remarks
   * The silence duration. The system determines the end of the conversation based on the silence duration of the user. Unit: milliseconds. Valid values: 1000 to 20000.****
   * 
   * > 
   * 
   * *   If you specify a value out of the valid range, the default value **10000** is used.
   * 
   * *   The parameter value can be adjusted during the conversation. The last setting prevails.
   * 
   * @example
   * 10000
   */
  muteTime?: number;
  noiseThreshold?: number;
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation. This ID is returned to the caller in a receipt message.
   * 
   * The value is of the STRING type and must be 1 to 15 bytes in length.
   * 
   * @example
   * 342268*****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pause duration. The system determines the end of a sentence based on the pause duration of the user in the conversation. Unit: milliseconds. Valid values: 300 to 1200.****
   * 
   * > 
   * 
   * *   If you specify a value out of the valid range, the default value **800** is used.
   * 
   * *   You cannot change the parameter value after specifying it.
   * 
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @remarks
   * Specifies whether to record the conversation. Valid values:
   * 
   * *   **true**: The conversation is recorded.
   * *   **false**: The conversation is not recorded.
   * 
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum call duration. The call is automatically hung up when the maximum call duration is reached. Unit: seconds.
   * 
   * > The maximum call duration is 3,600 seconds.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  speed?: number;
  /**
   * @remarks
   * Specifies whether to enable streaming ASR, which intelligently judges what the user wants to express based on the first few words spoken by the user. Valid values:
   * 
   * *   **0**: Streaming ASR is disabled.
   * *   **1**: Streaming ASR is enabled.
   * 
   * @example
   * 1
   */
  streamAsr?: number;
  /**
   * @remarks
   * Specifies whether to set TTS sound parameters. Valid values:
   * 
   * *   **true**: TTS sound parameters must be set. You must set the **TtsStyle**, **TtsColume**, and **TtsSpeed** parameters to specify a sound style.
   * *   **false**: TTS sound parameters do not need to be set. The values of TTS sound parameters do not take effect even if you set them.
   * 
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @remarks
   * The speed of TTS variable playback. Valid values: -200 to 200. Default value: 0.
   * 
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The sound style for TTS variable playback. Default value: **xiaoyun**. For more information about the sound styles, see the **Sound styles** table below.
   * 
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume of TTS variable playback. Valid values: 0 to 100. Default value: 0.
   * 
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The recording file that is played back in the intelligent outbound call.
   * 
   * The file can be an online file, a voice file uploaded from the Voice Messaging Service console, or a text-to-speech (TTS) template that contains variables. You can specify multiple files and a TTS variable together. Separate them with commas (,). The values of the variables in the TTS template are specified by the **VoiceCodeParam** parameter.
   * 
   * *   If you use an online file as the recording file, set the value of **VoiceCode** to the URL of the file that can be accessed over the Internet.
   * *   If you use a voice file uploaded from the Voice Messaging Service console as the recording file, set the value of **VoiceCode** to the voice ID of the file. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice File Management**, click the **Intelligent Speech Interaction Recording File** tab, and then click **Details** in the Actions column to view the voice ID.
   * *   If you use a TTS template that contains variables as the recording file, set the value of **VoiceCode** to a variable name such as $name$, and also set a value for the variable in the **VoiceCodeParam** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  /**
   * @remarks
   * The value of the TTS variable, in the JSON format. This value must match the TTS variable specified by the **VoiceCode** parameter.
   * 
   * @example
   * {"name":"hello"}
   */
  voiceCodeParam?: string;
  /**
   * @remarks
   * The volume at which the recording file is played. Valid values: -4 to 4. We recommend that you set the value of this parameter to **1**.
   * 
   * @example
   * 1
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      actionCodeBreak: 'ActionCodeBreak',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      backgroundFileCode: 'BackgroundFileCode',
      backgroundSpeed: 'BackgroundSpeed',
      backgroundVolume: 'BackgroundVolume',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      enableITN: 'EnableITN',
      muteTime: 'MuteTime',
      noiseThreshold: 'NoiseThreshold',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
      streamAsr: 'StreamAsr',
      ttsConf: 'TtsConf',
      ttsSpeed: 'TtsSpeed',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      voiceCode: 'VoiceCode',
      voiceCodeParam: 'VoiceCodeParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodeBreak: 'boolean',
      actionCodeTimeBreak: 'number',
      asrBaseId: 'string',
      asrModelId: 'string',
      backgroundFileCode: 'string',
      backgroundSpeed: 'number',
      backgroundVolume: 'number',
      calledNumber: 'string',
      calledShowNumber: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      enableITN: 'boolean',
      muteTime: 'number',
      noiseThreshold: 'number',
      outId: 'string',
      ownerId: 'number',
      pauseTime: 'number',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
      streamAsr: 'number',
      ttsConf: 'boolean',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceCodeParam: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique receipt ID for this call.
   * 
   * You can call the [QueryCallDetailByCallId](~~QueryCallDetailByCallId~~) operation to query the details of the call based on the receipt ID.
   * 
   * @example
   * 116012854210^10281427****
   */
  callId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateRequest extends $tea.Model {
  /**
   * @remarks
   * The unique receipt ID of the call. You can call the [SmartCall](https://help.aliyun.com/document_detail/393526.html) operation to obtain the receipt ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 116012854210^1028142****
   */
  callId?: string;
  /**
   * @remarks
   * The action that is initiated to the called number of an outbound robocall.
   * 
   * > Only the value **parallelBridge** is supported. This value indicates that a bridge action is initiated between a called number and an agent of the call center.
   * 
   * This parameter is required.
   * 
   * @example
   * parallelBridge
   */
  command?: string;
  ownerId?: number;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * Param
   */
  param?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      command: 'Command',
      ownerId: 'OwnerId',
      param: 'Param',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      command: 'string',
      ownerId: 'number',
      param: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The action result. Valid values:
   * 
   * *   **true**: The action was successful.
   * *   **false**: The action failed.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartCallOperateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmartCallOperateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmartCallOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time scheduled for starting the robocall task, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2019-06-14 14:55:23
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 104500****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleTime: 'ScheduleTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleTime: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRobotTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCallInConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The China 400 number from which the inbound call to be stopped is transferred.
   * 
   * This parameter is required.
   * 
   * @example
   * 400***
   */
  number?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCallInConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the inbound call was stopped. Valid values:
   * 
   * *   true: The inbound call was stopped.
   * *   false: The inbound call failed to be stopped.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a78278ff-26bb-48ec-805c-26a0f4c102***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCallInConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopCallInConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCallInConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRobotTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRobotTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRobotTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopRobotTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopRobotTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterRequest extends $tea.Model {
  /**
   * @remarks
   * The authenticity of the commitment. Valid values:
   * 
   * *   **true**: The commitment is authentic.
   * *   **false**: The commitment is not authentic.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  agreement?: string;
  /**
   * @remarks
   * The China 400 number.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID card number of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * 5****************9
   */
  operatorIdentityCard?: string;
  /**
   * @remarks
   * The email address of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  operatorMail?: string;
  /**
   * @remarks
   * The verification code that is received by the mailbox of the handler.
   * 
   * @example
   * 1234
   */
  operatorMailVerifyCode?: string;
  /**
   * @remarks
   * The mobile phone number of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * 158****7230
   */
  operatorMobile?: string;
  /**
   * @remarks
   * The verification code that is received by the mobile phone of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  operatorMobileVerifyCode?: string;
  /**
   * @remarks
   * The name of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * A***
   */
  operatorName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000004933****
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The registration information about the China 400 number.
   * 
   * This parameter is required.
   */
  transferPhoneNumberInfos?: SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos[];
  static names(): { [key: string]: string } {
    return {
      agreement: 'Agreement',
      hotlineNumber: 'HotlineNumber',
      operatorIdentityCard: 'OperatorIdentityCard',
      operatorMail: 'OperatorMail',
      operatorMailVerifyCode: 'OperatorMailVerifyCode',
      operatorMobile: 'OperatorMobile',
      operatorMobileVerifyCode: 'OperatorMobileVerifyCode',
      operatorName: 'OperatorName',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transferPhoneNumberInfos: 'TransferPhoneNumberInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreement: 'string',
      hotlineNumber: 'string',
      operatorIdentityCard: 'string',
      operatorMail: 'string',
      operatorMailVerifyCode: 'string',
      operatorMobile: 'string',
      operatorMobileVerifyCode: 'string',
      operatorName: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transferPhoneNumberInfos: { 'type': 'array', 'itemType': SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * 2258****
   */
  data?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitHotlineTransferRegisterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitHotlineTransferRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeVideoFileRequest extends $tea.Model {
  /**
   * @example
   * 116012354148^10281378****
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1590****000
   */
  calledNumber?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 225869*****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      mediaType: 'MediaType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      calledNumber: 'string',
      mediaType: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeVideoFileResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeVideoFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeVideoFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeVideoFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileRequest extends $tea.Model {
  /**
   * @remarks
   * The called numbers. Separate multiple called numbers with commas (,).
   * 
   * > After you create a robocall task, you must upload called numbers in batches. You can upload up to 300,000 called numbers for each task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1370****000,1370****111
   */
  calledNumber?: string;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the ID of the robocall task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045****
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The values of the variable in the text-to-speech (TTS) template, in the JSON format. The variable values specified by the TtsParam parameter must match the variable names specified by the TtsParamHead parameter.
   * 
   * *   If all the called numbers carry the same variable values, you can set the value of the number field to **all** and upload only one copy of the variable values.
   * *   If only some of the called numbers carry the same variable values, you can set the value of the number field to **all** for these called numbers and set the value of the number field and variable values for other called numbers based on your business requirements. The system preferentially selects the values that you set for the called numbers.
   * 
   * @example
   * [{"number":"1370****000","params":["xiaowang","xiaoli","xiaozhou"]}]
   */
  ttsParam?: string;
  /**
   * @remarks
   * The list of variable names carried in the robocall task, in the JSON format. The TtsParamHead parameter must be used together with the TtsParam parameter.
   * 
   * @example
   * ["name1","name2","name3"]
   */
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ttsParam: 'string',
      ttsParamHead: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The unique ID of the robocall task.
   * 
   * You can call the [QueryRobotTaskDetail](~~QueryRobotTaskDetail~~) operation to query the details of the robocall task based on the task ID.
   * 
   * @example
   * 10450****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRobotTaskCalledFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadRobotTaskCalledFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadRobotTaskCalledFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineQualificationByOrderResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the qualification application ticket.
   * 
   * @example
   * 22456****
   */
  orderId?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 1478*****
   */
  qualificationId?: string;
  /**
   * @remarks
   * The qualification state. Valid values:
   * 
   * *   **NORMAL**
   * *   **OTHER**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      qualificationId: 'QualificationId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      qualificationId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IvrCallRequestMenuKeyMap extends $tea.Model {
  /**
   * @remarks
   * The voice that corresponds to the key specified by the **MenuKeyMap.N.Key** parameter.
   * 
   * *   If you use a voice notification file, this parameter specifies the voice ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **Voice Notification Files** tab to view the voice ID.
   * *   If you use a TTS template, this parameter specifies the template ID. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice Messages** > **Voice Notifications**, and then click the **TTS Template** tab to view the template ID.
   * 
   * @example
   * TTS_1235****
   */
  code?: string;
  /**
   * @remarks
   * The key that can be pressed by the subscriber.
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The variables in the TTS template, in the JSON format.
   * 
   * > 
   * 
   * *   This parameter specifies the substitution relationship of the variables in the TTS template if the value of the **MenuKeyMap.N.Code** parameter is set to the ID of the TTS template.
   * 
   * *   This parameter is required if the value of the **MenuKeyMap.N.Code** parameter is set to the ID of a TTS template that contains variables.
   * 
   * @example
   * {"name":"xxx","code":"123"}
   */
  ttsParams?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      key: 'Key',
      ttsParams: 'TtsParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      key: 'string',
      ttsParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The type of the task template. Valid values:
   * 
   * *   **VMS_VOICE_TTS**: the TTS notification template.
   * *   **VMS_VOICE_CODE**: the voice notification template.
   * *   **VMS_TTS**: the voice verification code template.
   * 
   * @example
   * VMS_VOICE_TTS
   */
  bizType?: string;
  /**
   * @remarks
   * The time when the task was completed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1614330986000
   */
  completeTime?: string;
  /**
   * @remarks
   * The number of tasks that were complete.
   * 
   * @example
   * 2
   */
  completedCount?: number;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 26%
   */
  completedRate?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  data?: string;
  /**
   * @remarks
   * The type of the called number.
   * 
   * @example
   * LIST
   */
  dataType?: string;
  /**
   * @remarks
   * The time when the scheduled task was started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1614330978000
   */
  fireTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123879546214
   */
  id?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0571000****
   */
  resource?: string;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task was in the initial state.
   * *   **RELEASE**: The task was being parsed.
   * *   **RUNNING**: The task was running.
   * *   **STOP**: The task was manually suspended.
   * *   **SYSTEM_STOP**: The task was suspended by the system.
   * *   **CANCEL**: The task was manually canceled.
   * *   **SYSTEM_CANCEL**: The task was canceled by the system.
   * *   **DONE**: The task was complete.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  stopTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Aliyun
   */
  taskName?: string;
  /**
   * @remarks
   * The ID of the voice template.
   * 
   * @example
   * TTS_2100****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test Template
   */
  templateName?: string;
  /**
   * @remarks
   * The total number of called numbers.
   * 
   * @example
   * 600
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      completeTime: 'CompleteTime',
      completedCount: 'CompletedCount',
      completedRate: 'CompletedRate',
      data: 'Data',
      dataType: 'DataType',
      fireTime: 'FireTime',
      id: 'Id',
      resource: 'Resource',
      status: 'Status',
      stopTime: 'StopTime',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      completeTime: 'string',
      completedCount: 'number',
      completedRate: 'number',
      data: 'string',
      dataType: 'string',
      fireTime: 'string',
      id: 'number',
      resource: 'string',
      status: 'string',
      stopTime: 'string',
      taskName: 'string',
      templateCode: 'string',
      templateName: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1300000****
   */
  calledNum?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0571000****
   */
  caller?: string;
  /**
   * @remarks
   * The call duration. Unit: seconds.
   * 
   * @example
   * 200
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **SUCCESS**: The task was successful.
   * *   **FAIL**: The task failed.
   * *   **INIT**: The task was not started.
   * 
   * @example
   * FAIL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      calledNum: 'CalledNum',
      caller: 'Caller',
      duration: 'Duration',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNum: 'string',
      caller: 'string',
      duration: 'number',
      id: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBodyDataValues extends $tea.Model {
  /**
   * @remarks
   * The China 400 number.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID card number of the number owner.
   * 
   * @example
   * 500***4119
   */
  identityCard?: string;
  /**
   * @remarks
   * The real name of the number owner or the company name.
   * 
   * @example
   * A***
   */
  numberOwnerName?: string;
  /**
   * @remarks
   * The registered phone number.
   * 
   * @example
   * 1580000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 100***
   */
  qualificationId?: string;
  /**
   * @remarks
   * The resource code.
   * 
   * @example
   * 1***
   */
  resUniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      identityCard: 'IdentityCard',
      numberOwnerName: 'NumberOwnerName',
      phoneNumber: 'PhoneNumber',
      qualificationId: 'QualificationId',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      identityCard: 'string',
      numberOwnerName: 'string',
      phoneNumber: 'string',
      qualificationId: 'string',
      resUniqueCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferNumberResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The phone numbers.
   */
  values?: ListHotlineTransferNumberResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': ListHotlineTransferNumberResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBodyDataValues extends $tea.Model {
  /**
   * @remarks
   * The authenticity of the commitment.
   * 
   * @example
   * true
   */
  agree?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * A**
   */
  corpName?: string;
  /**
   * @remarks
   * The China 400 number.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID card number of the handler.
   * 
   * @example
   * 5****************9
   */
  mngOpIdentityCard?: string;
  /**
   * @remarks
   * The email address of the handler.
   * 
   * @example
   * username@example.com
   */
  mngOpMail?: string;
  /**
   * @remarks
   * The mobile phone number of the handler.
   * 
   * @example
   * 150****0000
   */
  mngOpMobile?: string;
  /**
   * @remarks
   * The name of the handler.
   * 
   * @example
   * A***
   */
  mngOpName?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 1234****
   */
  qualificationId?: string;
  /**
   * @remarks
   * The unique code of the query operation.
   * 
   * @example
   * 1
   */
  resUniqueCode?: number;
  static names(): { [key: string]: string } {
    return {
      agree: 'Agree',
      corpName: 'CorpName',
      hotlineNumber: 'HotlineNumber',
      mngOpIdentityCard: 'MngOpIdentityCard',
      mngOpMail: 'MngOpMail',
      mngOpMobile: 'MngOpMobile',
      mngOpName: 'MngOpName',
      qualificationId: 'QualificationId',
      resUniqueCode: 'ResUniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agree: 'string',
      corpName: 'string',
      hotlineNumber: 'string',
      mngOpIdentityCard: 'string',
      mngOpMail: 'string',
      mngOpMobile: 'string',
      mngOpName: 'string',
      qualificationId: 'string',
      resUniqueCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineTransferRegisterFileResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The registration file.
   */
  values?: ListHotlineTransferRegisterFileResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': ListHotlineTransferRegisterFileResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBodyDataDetails extends $tea.Model {
  /**
   * @remarks
   * The number used to transfer the call.
   * 
   * @example
   * 400****
   */
  called?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInPoolTransferConfigResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * *   **roundRobin**
   * *   **random**
   * 
   * @example
   * random
   */
  calledRouteMode?: string;
  /**
   * @remarks
   * The details of the response parameters.
   */
  details?: QueryCallInPoolTransferConfigResponseBodyDataDetails[];
  /**
   * @remarks
   * The time when the call transfer task was created.
   * 
   * @example
   * 1623137002000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timeout period for transferring the call.
   * 
   * @example
   * 30
   */
  transferTimeout?: string;
  static names(): { [key: string]: string } {
    return {
      calledRouteMode: 'CalledRouteMode',
      details: 'Details',
      gmtCreate: 'GmtCreate',
      transferTimeout: 'TransferTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledRouteMode: 'string',
      details: { 'type': 'array', 'itemType': QueryCallInPoolTransferConfigResponseBodyDataDetails },
      gmtCreate: 'number',
      transferTimeout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBodyDataValues extends $tea.Model {
  /**
   * @remarks
   * The called number of the inbound call.
   * 
   * @example
   * 150****0000
   */
  callInCalled?: string;
  /**
   * @remarks
   * The calling number of the inbound call.
   * 
   * @example
   * 150****0000
   */
  callInCaller?: string;
  /**
   * @remarks
   * The time when the call was initiated.
   * 
   * @example
   * 2020-10-03 10:21:21
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The recording URL.
   * 
   * @example
   * http://alicom-fc-media.cn-hangzhou.oss.aliyun-inc.com/dayuBizVoiceMrg/4238c230-9e74-41be-90b8-2fbe7684****.wav?Expires=1627538265&OSSAccessKeyId=bypFNbGJVk73****&Signature=****mUqkPqIQ%3D
   */
  recordUrl?: string;
  /**
   * @remarks
   * The phone number to which the call was transferred.
   * 
   * @example
   * 151****0000
   */
  transferCalled?: string;
  /**
   * @remarks
   * The calling number that transferred the call.
   * 
   * @example
   * 151****0000
   */
  transferCaller?: string;
  static names(): { [key: string]: string } {
    return {
      callInCalled: 'CallInCalled',
      callInCaller: 'CallInCaller',
      gmtCreate: 'GmtCreate',
      recordUrl: 'RecordUrl',
      transferCalled: 'TransferCalled',
      transferCaller: 'TransferCaller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCalled: 'string',
      callInCaller: 'string',
      gmtCreate: 'number',
      recordUrl: 'string',
      transferCalled: 'string',
      transferCaller: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallInTransferRecordResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  total?: number;
  /**
   * @remarks
   * The call transfer records.
   */
  values?: QueryCallInTransferRecordResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      values: { 'type': 'array', 'itemType': QueryCallInTransferRecordResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceFileAuditInfoResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The review state of the voice file. Valid values:
   * 
   * *   **AUDIT_STATE_INIT**: The voice file was under review.
   * *   **AUDIT_STATE_PASS**: The voice file was approved.
   * *   **AUDIT_STATE_NOT_PASS**: The voice file was rejected.
   * *   **AUDIT_STATE_UPLOADING**: The voice file was approved and is being uploaded.
   * *   **AUDIT_STATE_REDOING**: The voice file was being reprocessed.
   * *   **AUDIT_SATE_CANCEL**: The review of the voice file was canceled.
   * *   **AUDIT_PAUSE**: The review of the voice file was suspended.
   * *   **AUDIT_ORDER_FINISHED**: The voice file was approved by the ticket system and was waiting for the review of the Internet service provider (ISP).
   * 
   * @example
   * AUDIT_STATE_NOT_PASS
   */
  auditState?: string;
  /**
   * @remarks
   * The reason why the voice file was rejected.
   * 
   * @example
   * This business is not supported
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The code of the voice file.
   * 
   * @example
   * 8501d2eb-efbb-471f-xxx8-****.wav
   */
  voiceCode?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      rejectInfo: 'RejectInfo',
      voiceCode: 'VoiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      rejectInfo: 'string',
      voiceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTransferCalleePoolConfigRequestDetails extends $tea.Model {
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 151****0000
   */
  called?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 150****0000
   */
  caller?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos extends $tea.Model {
  /**
   * @remarks
   * The ID card number of the number owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 500***
   */
  identityCard?: string;
  /**
   * @remarks
   * The China 400 number that you want to submit for registration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1580000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The real name or company name of the number owner.
   * 
   * This parameter is required.
   * 
   * @example
   * A***
   */
  phoneNumberOwnerName?: string;
  static names(): { [key: string]: string } {
    return {
      identityCard: 'IdentityCard',
      phoneNumber: 'PhoneNumber',
      phoneNumberOwnerName: 'PhoneNumberOwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCard: 'string',
      phoneNumber: 'string',
      phoneNumberOwnerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dyvmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds the association relationship between a virtual number and real numbers in batches.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - AddVirtualNumberRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVirtualNumberRelationResponse
   */
  async addVirtualNumberRelationWithOptions(request: AddVirtualNumberRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddVirtualNumberRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.corpNameList)) {
      query["CorpNameList"] = request.corpNameList;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVirtualNumberRelation",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVirtualNumberRelationResponse>(await this.callApi(params, req, runtime), new AddVirtualNumberRelationResponse({}));
  }

  /**
   * Adds the association relationship between a virtual number and real numbers in batches.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - AddVirtualNumberRelationRequest
   * @returns AddVirtualNumberRelationResponse
   */
  async addVirtualNumberRelation(request: AddVirtualNumberRelationRequest): Promise<AddVirtualNumberRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVirtualNumberRelationWithOptions(request, runtime);
  }

  /**
   * Initiates an outbound robocall task.
   * 
   * @remarks
   *   In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * *   The BatchRobotSmartCall operation is used to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console.
   * ## Prerequisites
   * *   You have passed the real-name verification for an enterprise user and passed the enterprise qualification review.
   * *   You have purchased numbers in the [Voice Messaging Service console](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal).
   * *   You have added communication scripts on the [Communication script management](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list) page, and the communication scripts have been approved.
   * > Before you call this operation, make sure that you are familiar with the [billing](https://www.aliyun.com/price/product#/vms/detail) of Voice Messaging Service (VMS).
   * 
   * @param request - BatchRobotSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRobotSmartCallResponse
   */
  async batchRobotSmartCallWithOptions(request: BatchRobotSmartCallRequest, runtime: $Util.RuntimeOptions): Promise<BatchRobotSmartCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!Util.isUnset(request.dialogId)) {
      query["DialogId"] = request.dialogId;
    }

    if (!Util.isUnset(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!Util.isUnset(request.isSelfLine)) {
      query["IsSelfLine"] = request.isSelfLine;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduleCall)) {
      query["ScheduleCall"] = request.scheduleCall;
    }

    if (!Util.isUnset(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.ttsParamHead)) {
      query["TtsParamHead"] = request.ttsParamHead;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchRobotSmartCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchRobotSmartCallResponse>(await this.callApi(params, req, runtime), new BatchRobotSmartCallResponse({}));
  }

  /**
   * Initiates an outbound robocall task.
   * 
   * @remarks
   *   In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * *   The BatchRobotSmartCall operation is used to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console.
   * ## Prerequisites
   * *   You have passed the real-name verification for an enterprise user and passed the enterprise qualification review.
   * *   You have purchased numbers in the [Voice Messaging Service console](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal).
   * *   You have added communication scripts on the [Communication script management](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list) page, and the communication scripts have been approved.
   * > Before you call this operation, make sure that you are familiar with the [billing](https://www.aliyun.com/price/product#/vms/detail) of Voice Messaging Service (VMS).
   * 
   * @param request - BatchRobotSmartCallRequest
   * @returns BatchRobotSmartCallResponse
   */
  async batchRobotSmartCall(request: BatchRobotSmartCallRequest): Promise<BatchRobotSmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRobotSmartCallWithOptions(request, runtime);
  }

  /**
   * Cancels a robocall task that has not been started.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelOrderRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderRobotTaskResponse
   */
  async cancelOrderRobotTaskWithOptions(request: CancelOrderRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrderRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderRobotTaskResponse>(await this.callApi(params, req, runtime), new CancelOrderRobotTaskResponse({}));
  }

  /**
   * Cancels a robocall task that has not been started.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelOrderRobotTaskRequest
   * @returns CancelOrderRobotTaskResponse
   */
  async cancelOrderRobotTask(request: CancelOrderRobotTaskRequest): Promise<CancelOrderRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderRobotTaskWithOptions(request, runtime);
  }

  /**
   * Terminates a robocall task.
   * 
   * @remarks
   * Only a task in progress can be terminated by calling the CancelRobotTask operation, and the task cannot be resumed after it is terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRobotTaskResponse
   */
  async cancelRobotTaskWithOptions(request: CancelRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRobotTaskResponse>(await this.callApi(params, req, runtime), new CancelRobotTaskResponse({}));
  }

  /**
   * Terminates a robocall task.
   * 
   * @remarks
   * Only a task in progress can be terminated by calling the CancelRobotTask operation, and the task cannot be resumed after it is terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelRobotTaskRequest
   * @returns CancelRobotTaskResponse
   */
  async cancelRobotTask(request: CancelRobotTaskRequest): Promise<CancelRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRobotTaskWithOptions(request, runtime);
  }

  /**
   * ChangeMediaType
   * 
   * @param request - ChangeMediaTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMediaTypeResponse
   */
  async changeMediaTypeWithOptions(request: ChangeMediaTypeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeMediaTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNum)) {
      query["CalledNum"] = request.calledNum;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeMediaType",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeMediaTypeResponse>(await this.callApi(params, req, runtime), new ChangeMediaTypeResponse({}));
  }

  /**
   * ChangeMediaType
   * 
   * @param request - ChangeMediaTypeRequest
   * @returns ChangeMediaTypeResponse
   */
  async changeMediaType(request: ChangeMediaTypeRequest): Promise<ChangeMediaTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeMediaTypeWithOptions(request, runtime);
  }

  /**
   * Creates a task for sending voice notifications or voice verification codes.
   * 
   * @remarks
   * You can create up to 1,000 voice notifications for each task.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallTaskResponse
   */
  async createCallTaskWithOptions(request: CreateCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCallTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.fireTime)) {
      query["FireTime"] = request.fireTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!Util.isUnset(request.stopTime)) {
      query["StopTime"] = request.stopTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCallTaskResponse>(await this.callApi(params, req, runtime), new CreateCallTaskResponse({}));
  }

  /**
   * Creates a task for sending voice notifications or voice verification codes.
   * 
   * @remarks
   * You can create up to 1,000 voice notifications for each task.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateCallTaskRequest
   * @returns CreateCallTaskResponse
   */
  async createCallTask(request: CreateCallTaskRequest): Promise<CreateCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCallTaskWithOptions(request, runtime);
  }

  /**
   * Initiates an outbound robocall task.
   * 
   * @remarks
   * You can call this operation to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console. In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRobotTaskResponse
   */
  async createRobotTaskWithOptions(request: CreateRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!Util.isUnset(request.dialogId)) {
      query["DialogId"] = request.dialogId;
    }

    if (!Util.isUnset(request.isSelfLine)) {
      query["IsSelfLine"] = request.isSelfLine;
    }

    if (!Util.isUnset(request.numberStatusIdent)) {
      query["NumberStatusIdent"] = request.numberStatusIdent;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.recallInterval)) {
      query["RecallInterval"] = request.recallInterval;
    }

    if (!Util.isUnset(request.recallStateCodes)) {
      query["RecallStateCodes"] = request.recallStateCodes;
    }

    if (!Util.isUnset(request.recallTimes)) {
      query["RecallTimes"] = request.recallTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retryType)) {
      query["RetryType"] = request.retryType;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRobotTaskResponse>(await this.callApi(params, req, runtime), new CreateRobotTaskResponse({}));
  }

  /**
   * Initiates an outbound robocall task.
   * 
   * @remarks
   * You can call this operation to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console. In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateRobotTaskRequest
   * @returns CreateRobotTaskResponse
   */
  async createRobotTask(request: CreateRobotTaskRequest): Promise<CreateRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRobotTaskWithOptions(request, runtime);
  }

  /**
   * DegradeVideoFile
   * 
   * @param request - DegradeVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DegradeVideoFileResponse
   */
  async degradeVideoFileWithOptions(request: DegradeVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<DegradeVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DegradeVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DegradeVideoFileResponse>(await this.callApi(params, req, runtime), new DegradeVideoFileResponse({}));
  }

  /**
   * DegradeVideoFile
   * 
   * @param request - DegradeVideoFileRequest
   * @returns DegradeVideoFileResponse
   */
  async degradeVideoFile(request: DegradeVideoFileRequest): Promise<DegradeVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.degradeVideoFileWithOptions(request, runtime);
  }

  /**
   * Deletes a robocall task.
   * 
   * @remarks
   * You can call this operation to delete only tasks that are not started, that are completed, and that are terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRobotTaskResponse
   */
  async deleteRobotTaskWithOptions(request: DeleteRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRobotTaskResponse>(await this.callApi(params, req, runtime), new DeleteRobotTaskResponse({}));
  }

  /**
   * Deletes a robocall task.
   * 
   * @remarks
   * You can call this operation to delete only tasks that are not started, that are completed, and that are terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRobotTaskRequest
   * @returns DeleteRobotTaskResponse
   */
  async deleteRobotTask(request: DeleteRobotTaskRequest): Promise<DeleteRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRobotTaskWithOptions(request, runtime);
  }

  /**
   * Executes a call task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ExecuteCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteCallTaskResponse
   */
  async executeCallTaskWithOptions(request: ExecuteCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteCallTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fireTime)) {
      query["FireTime"] = request.fireTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteCallTaskResponse>(await this.callApi(params, req, runtime), new ExecuteCallTaskResponse({}));
  }

  /**
   * Executes a call task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ExecuteCallTaskRequest
   * @returns ExecuteCallTaskResponse
   */
  async executeCallTask(request: ExecuteCallTaskRequest): Promise<ExecuteCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeCallTaskWithOptions(request, runtime);
  }

  /**
   * GetCallMediaType
   * 
   * @param request - GetCallMediaTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallMediaTypeResponse
   */
  async getCallMediaTypeWithOptions(request: GetCallMediaTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetCallMediaTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCallMediaType",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCallMediaTypeResponse>(await this.callApi(params, req, runtime), new GetCallMediaTypeResponse({}));
  }

  /**
   * GetCallMediaType
   * 
   * @param request - GetCallMediaTypeRequest
   * @returns GetCallMediaTypeResponse
   */
  async getCallMediaType(request: GetCallMediaTypeRequest): Promise<GetCallMediaTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallMediaTypeWithOptions(request, runtime);
  }

  /**
   * GetCallProgress
   * 
   * @param request - GetCallProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallProgressResponse
   */
  async getCallProgressWithOptions(request: GetCallProgressRequest, runtime: $Util.RuntimeOptions): Promise<GetCallProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNum)) {
      query["CalledNum"] = request.calledNum;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCallProgress",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCallProgressResponse>(await this.callApi(params, req, runtime), new GetCallProgressResponse({}));
  }

  /**
   * GetCallProgress
   * 
   * @param request - GetCallProgressRequest
   * @returns GetCallProgressResponse
   */
  async getCallProgress(request: GetCallProgressRequest): Promise<GetCallProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallProgressWithOptions(request, runtime);
  }

  /**
   * Obtains the qualification ID based on the ID of a qualification application ticket.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - GetHotlineQualificationByOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineQualificationByOrderResponse
   */
  async getHotlineQualificationByOrderWithOptions(request: GetHotlineQualificationByOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineQualificationByOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotlineQualificationByOrder",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotlineQualificationByOrderResponse>(await this.callApi(params, req, runtime), new GetHotlineQualificationByOrderResponse({}));
  }

  /**
   * Obtains the qualification ID based on the ID of a qualification application ticket.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - GetHotlineQualificationByOrderRequest
   * @returns GetHotlineQualificationByOrderResponse
   */
  async getHotlineQualificationByOrder(request: GetHotlineQualificationByOrderRequest): Promise<GetHotlineQualificationByOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineQualificationByOrderWithOptions(request, runtime);
  }

  /**
   * GetTemporaryFileUrl
   * 
   * @param request - GetTemporaryFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemporaryFileUrlResponse
   */
  async getTemporaryFileUrlWithOptions(request: GetTemporaryFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetTemporaryFileUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemporaryFileUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemporaryFileUrlResponse>(await this.callApi(params, req, runtime), new GetTemporaryFileUrlResponse({}));
  }

  /**
   * GetTemporaryFileUrl
   * 
   * @param request - GetTemporaryFileUrlRequest
   * @returns GetTemporaryFileUrlResponse
   */
  async getTemporaryFileUrl(request: GetTemporaryFileUrlRequest): Promise<GetTemporaryFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemporaryFileUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the token for authentication.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to five times per second per account.
   * 
   * @param request - GetTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: GetTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * Obtains the token for authentication.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to five times per second per account.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  /**
   * GetVideoFieldUrl
   * 
   * @param request - GetVideoFieldUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoFieldUrlResponse
   */
  async getVideoFieldUrlWithOptions(request: GetVideoFieldUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoFieldUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.videoFile)) {
      query["VideoFile"] = request.videoFile;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoFieldUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoFieldUrlResponse>(await this.callApi(params, req, runtime), new GetVideoFieldUrlResponse({}));
  }

  /**
   * GetVideoFieldUrl
   * 
   * @param request - GetVideoFieldUrlRequest
   * @returns GetVideoFieldUrlResponse
   */
  async getVideoFieldUrl(request: GetVideoFieldUrlRequest): Promise<GetVideoFieldUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoFieldUrlWithOptions(request, runtime);
  }

  /**
   * Initiates an interactive voice response (IVR) call to a specified number.
   * 
   * @remarks
   *   Your enterprise qualification is approved. For more information, see [Submit enterprise qualifications](https://help.aliyun.com/document_detail/149795.html).
   * *   Voice numbers are purchased. For more information, see [Purchase numbers](https://help.aliyun.com/document_detail/149794.html).
   * *   When the subscriber answers the call, the subscriber hears a voice that instructs the subscriber to press a key as needed. If the [message receipt](https://help.aliyun.com/document_detail/112503.html) feature is enabled, the Voice Messaging Service (VMS) platform returns the information about the key pressed by the subscriber to the business system. The key information includes the order confirmation, questionnaire survey, and satisfaction survey completed by the subscriber.
   * ## QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - IvrCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IvrCallResponse
   */
  async ivrCallWithOptions(request: IvrCallRequest, runtime: $Util.RuntimeOptions): Promise<IvrCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.byeCode)) {
      query["ByeCode"] = request.byeCode;
    }

    if (!Util.isUnset(request.byeTtsParams)) {
      query["ByeTtsParams"] = request.byeTtsParams;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.menuKeyMap)) {
      query["MenuKeyMap"] = request.menuKeyMap;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startCode)) {
      query["StartCode"] = request.startCode;
    }

    if (!Util.isUnset(request.startTtsParams)) {
      query["StartTtsParams"] = request.startTtsParams;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IvrCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IvrCallResponse>(await this.callApi(params, req, runtime), new IvrCallResponse({}));
  }

  /**
   * Initiates an interactive voice response (IVR) call to a specified number.
   * 
   * @remarks
   *   Your enterprise qualification is approved. For more information, see [Submit enterprise qualifications](https://help.aliyun.com/document_detail/149795.html).
   * *   Voice numbers are purchased. For more information, see [Purchase numbers](https://help.aliyun.com/document_detail/149794.html).
   * *   When the subscriber answers the call, the subscriber hears a voice that instructs the subscriber to press a key as needed. If the [message receipt](https://help.aliyun.com/document_detail/112503.html) feature is enabled, the Voice Messaging Service (VMS) platform returns the information about the key pressed by the subscriber to the business system. The key information includes the order confirmation, questionnaire survey, and satisfaction survey completed by the subscriber.
   * ## QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - IvrCallRequest
   * @returns IvrCallResponse
   */
  async ivrCall(request: IvrCallRequest): Promise<IvrCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ivrCallWithOptions(request, runtime);
  }

  /**
   * Queries task information.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallTaskResponse
   */
  async listCallTaskWithOptions(request: ListCallTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCallTaskResponse>(await this.callApi(params, req, runtime), new ListCallTaskResponse({}));
  }

  /**
   * Queries task information.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskRequest
   * @returns ListCallTaskResponse
   */
  async listCallTask(request: ListCallTaskRequest): Promise<ListCallTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTaskWithOptions(request, runtime);
  }

  /**
   * Queries the information about a task based on the task ID.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallTaskDetailResponse
   */
  async listCallTaskDetailWithOptions(request: ListCallTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListCallTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNum)) {
      query["CalledNum"] = request.calledNum;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCallTaskDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCallTaskDetailResponse>(await this.callApi(params, req, runtime), new ListCallTaskDetailResponse({}));
  }

  /**
   * Queries the information about a task based on the task ID.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskDetailRequest
   * @returns ListCallTaskDetailResponse
   */
  async listCallTaskDetail(request: ListCallTaskDetailRequest): Promise<ListCallTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCallTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of registered phone numbers that are used to transfer calls.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListHotlineTransferNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineTransferNumberResponse
   */
  async listHotlineTransferNumberWithOptions(request: ListHotlineTransferNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineTransferNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hotlineNumber)) {
      query["HotlineNumber"] = request.hotlineNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotlineTransferNumber",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotlineTransferNumberResponse>(await this.callApi(params, req, runtime), new ListHotlineTransferNumberResponse({}));
  }

  /**
   * Queries a list of registered phone numbers that are used to transfer calls.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListHotlineTransferNumberRequest
   * @returns ListHotlineTransferNumberResponse
   */
  async listHotlineTransferNumber(request: ListHotlineTransferNumberRequest): Promise<ListHotlineTransferNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineTransferNumberWithOptions(request, runtime);
  }

  /**
   * Queries the registration information about a China 400 number.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListHotlineTransferRegisterFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineTransferRegisterFileResponse
   */
  async listHotlineTransferRegisterFileWithOptions(request: ListHotlineTransferRegisterFileRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineTransferRegisterFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hotlineNumber)) {
      query["HotlineNumber"] = request.hotlineNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotlineTransferRegisterFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotlineTransferRegisterFileResponse>(await this.callApi(params, req, runtime), new ListHotlineTransferRegisterFileResponse({}));
  }

  /**
   * Queries the registration information about a China 400 number.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListHotlineTransferRegisterFileRequest
   * @returns ListHotlineTransferRegisterFileResponse
   */
  async listHotlineTransferRegisterFile(request: ListHotlineTransferRegisterFileRequest): Promise<ListHotlineTransferRegisterFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineTransferRegisterFileWithOptions(request, runtime);
  }

  /**
   * PauseVideoFile
   * 
   * @param request - PauseVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseVideoFileResponse
   */
  async pauseVideoFileWithOptions(request: PauseVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<PauseVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PauseVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseVideoFileResponse>(await this.callApi(params, req, runtime), new PauseVideoFileResponse({}));
  }

  /**
   * PauseVideoFile
   * 
   * @param request - PauseVideoFileRequest
   * @returns PauseVideoFileResponse
   */
  async pauseVideoFile(request: PauseVideoFileRequest): Promise<PauseVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseVideoFileWithOptions(request, runtime);
  }

  /**
   * PlayVideoFile
   * 
   * @param request - PlayVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PlayVideoFileResponse
   */
  async playVideoFileWithOptions(request: PlayVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<PlayVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.onlyPhone)) {
      query["OnlyPhone"] = request.onlyPhone;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PlayVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PlayVideoFileResponse>(await this.callApi(params, req, runtime), new PlayVideoFileResponse({}));
  }

  /**
   * PlayVideoFile
   * 
   * @param request - PlayVideoFileRequest
   * @returns PlayVideoFileResponse
   */
  async playVideoFile(request: PlayVideoFileRequest): Promise<PlayVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.playVideoFileWithOptions(request, runtime);
  }

  /**
   * Queries the details of a call.
   * 
   * @remarks
   * QueryCallDetailByCallId is a common query operation. You can call this operation to query the details of a voice notification, voice verification code, interactive voice response (IVR), intelligent inbound voice call, intelligent outbound voice call, or intelligent robocall.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallDetailByCallIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallDetailByCallIdResponse
   */
  async queryCallDetailByCallIdWithOptions(request: QueryCallDetailByCallIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallDetailByCallIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!Util.isUnset(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallDetailByCallId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCallDetailByCallIdResponse>(await this.callApi(params, req, runtime), new QueryCallDetailByCallIdResponse({}));
  }

  /**
   * Queries the details of a call.
   * 
   * @remarks
   * QueryCallDetailByCallId is a common query operation. You can call this operation to query the details of a voice notification, voice verification code, interactive voice response (IVR), intelligent inbound voice call, intelligent outbound voice call, or intelligent robocall.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallDetailByCallIdRequest
   * @returns QueryCallDetailByCallIdResponse
   */
  async queryCallDetailByCallId(request: QueryCallDetailByCallIdRequest): Promise<QueryCallDetailByCallIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallDetailByCallIdWithOptions(request, runtime);
  }

  /**
   * Queries the call details of an outbound robocall task.
   * 
   * @param request - QueryCallDetailByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallDetailByTaskIdResponse
   */
  async queryCallDetailByTaskIdWithOptions(request: QueryCallDetailByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallDetailByTaskIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallDetailByTaskId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCallDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new QueryCallDetailByTaskIdResponse({}));
  }

  /**
   * Queries the call details of an outbound robocall task.
   * 
   * @param request - QueryCallDetailByTaskIdRequest
   * @returns QueryCallDetailByTaskIdResponse
   */
  async queryCallDetailByTaskId(request: QueryCallDetailByTaskIdRequest): Promise<QueryCallDetailByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallDetailByTaskIdWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of the phone number used to transfer a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInPoolTransferConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallInPoolTransferConfigResponse
   */
  async queryCallInPoolTransferConfigWithOptions(request: QueryCallInPoolTransferConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallInPoolTransferConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallInPoolTransferConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCallInPoolTransferConfigResponse>(await this.callApi(params, req, runtime), new QueryCallInPoolTransferConfigResponse({}));
  }

  /**
   * Queries the configuration of the phone number used to transfer a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInPoolTransferConfigRequest
   * @returns QueryCallInPoolTransferConfigResponse
   */
  async queryCallInPoolTransferConfig(request: QueryCallInPoolTransferConfigRequest): Promise<QueryCallInPoolTransferConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallInPoolTransferConfigWithOptions(request, runtime);
  }

  /**
   * Queries call transfer records.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInTransferRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallInTransferRecordResponse
   */
  async queryCallInTransferRecordWithOptions(request: QueryCallInTransferRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallInTransferRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callInCaller)) {
      query["CallInCaller"] = request.callInCaller;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallInTransferRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCallInTransferRecordResponse>(await this.callApi(params, req, runtime), new QueryCallInTransferRecordResponse({}));
  }

  /**
   * Queries call transfer records.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInTransferRecordRequest
   * @returns QueryCallInTransferRecordResponse
   */
  async queryCallInTransferRecord(request: QueryCallInTransferRecordRequest): Promise<QueryCallInTransferRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallInTransferRecordWithOptions(request, runtime);
  }

  /**
   * Queries a list of robots.
   * 
   * @param request - QueryRobotInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotInfoListResponse
   */
  async queryRobotInfoListWithOptions(request: QueryRobotInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotInfoList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotInfoListResponse>(await this.callApi(params, req, runtime), new QueryRobotInfoListResponse({}));
  }

  /**
   * Queries a list of robots.
   * 
   * @param request - QueryRobotInfoListRequest
   * @returns QueryRobotInfoListResponse
   */
  async queryRobotInfoList(request: QueryRobotInfoListRequest): Promise<QueryRobotInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotInfoListWithOptions(request, runtime);
  }

  /**
   * Queries the call details of a called number in a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskCallDetailResponse
   */
  async queryRobotTaskCallDetailWithOptions(request: QueryRobotTaskCallDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskCallDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskCallDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskCallDetailResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskCallDetailResponse({}));
  }

  /**
   * Queries the call details of a called number in a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallDetailRequest
   * @returns QueryRobotTaskCallDetailResponse
   */
  async queryRobotTaskCallDetail(request: QueryRobotTaskCallDetailRequest): Promise<QueryRobotTaskCallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskCallDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskCallListResponse
   */
  async queryRobotTaskCallListWithOptions(request: QueryRobotTaskCallListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskCallListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callResult)) {
      query["CallResult"] = request.callResult;
    }

    if (!Util.isUnset(request.called)) {
      query["Called"] = request.called;
    }

    if (!Util.isUnset(request.dialogCountFrom)) {
      query["DialogCountFrom"] = request.dialogCountFrom;
    }

    if (!Util.isUnset(request.dialogCountTo)) {
      query["DialogCountTo"] = request.dialogCountTo;
    }

    if (!Util.isUnset(request.durationFrom)) {
      query["DurationFrom"] = request.durationFrom;
    }

    if (!Util.isUnset(request.durationTo)) {
      query["DurationTo"] = request.durationTo;
    }

    if (!Util.isUnset(request.hangupDirection)) {
      query["HangupDirection"] = request.hangupDirection;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskCallList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskCallListResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskCallListResponse({}));
  }

  /**
   * Queries the information about a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallListRequest
   * @returns QueryRobotTaskCallListResponse
   */
  async queryRobotTaskCallList(request: QueryRobotTaskCallListRequest): Promise<QueryRobotTaskCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskCallListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskDetailResponse
   */
  async queryRobotTaskDetailWithOptions(request: QueryRobotTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskDetailResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskDetailResponse({}));
  }

  /**
   * Queries the details of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskDetailRequest
   * @returns QueryRobotTaskDetailResponse
   */
  async queryRobotTaskDetail(request: QueryRobotTaskDetailRequest): Promise<QueryRobotTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about all robocall tasks.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskListResponse
   */
  async queryRobotTaskListWithOptions(request: QueryRobotTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotTaskList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotTaskListResponse>(await this.callApi(params, req, runtime), new QueryRobotTaskListResponse({}));
  }

  /**
   * Queries the information about all robocall tasks.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskListRequest
   * @returns QueryRobotTaskListResponse
   */
  async queryRobotTaskList(request: QueryRobotTaskListRequest): Promise<QueryRobotTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotTaskListWithOptions(request, runtime);
  }

  /**
   * Queries a list of robot communication scripts.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotv2AllListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotv2AllListResponse
   */
  async queryRobotv2AllListWithOptions(request: QueryRobotv2AllListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRobotv2AllListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRobotv2AllList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRobotv2AllListResponse>(await this.callApi(params, req, runtime), new QueryRobotv2AllListResponse({}));
  }

  /**
   * Queries a list of robot communication scripts.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotv2AllListRequest
   * @returns QueryRobotv2AllListResponse
   */
  async queryRobotv2AllList(request: QueryRobotv2AllListRequest): Promise<QueryRobotv2AllListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRobotv2AllListWithOptions(request, runtime);
  }

  /**
   * QueryVideoPlayProgress
   * 
   * @param request - QueryVideoPlayProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVideoPlayProgressResponse
   */
  async queryVideoPlayProgressWithOptions(request: QueryVideoPlayProgressRequest, runtime: $Util.RuntimeOptions): Promise<QueryVideoPlayProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVideoPlayProgress",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVideoPlayProgressResponse>(await this.callApi(params, req, runtime), new QueryVideoPlayProgressResponse({}));
  }

  /**
   * QueryVideoPlayProgress
   * 
   * @param request - QueryVideoPlayProgressRequest
   * @returns QueryVideoPlayProgressResponse
   */
  async queryVideoPlayProgress(request: QueryVideoPlayProgressRequest): Promise<QueryVideoPlayProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVideoPlayProgressWithOptions(request, runtime);
  }

  /**
   * Queries a list of virtual numbers.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryVirtualNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVirtualNumberResponse
   */
  async queryVirtualNumberWithOptions(request: QueryVirtualNumberRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVirtualNumber",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVirtualNumberResponse>(await this.callApi(params, req, runtime), new QueryVirtualNumberResponse({}));
  }

  /**
   * Queries a list of virtual numbers.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryVirtualNumberRequest
   * @returns QueryVirtualNumberResponse
   */
  async queryVirtualNumber(request: QueryVirtualNumberRequest): Promise<QueryVirtualNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualNumberWithOptions(request, runtime);
  }

  /**
   * Queries a list of associations between virtual numbers and real numbers.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - QueryVirtualNumberRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVirtualNumberRelationResponse
   */
  async queryVirtualNumberRelationWithOptions(request: QueryVirtualNumberRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualNumberRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.regionNameCity)) {
      query["RegionNameCity"] = request.regionNameCity;
    }

    if (!Util.isUnset(request.relatedNum)) {
      query["RelatedNum"] = request.relatedNum;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVirtualNumberRelation",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVirtualNumberRelationResponse>(await this.callApi(params, req, runtime), new QueryVirtualNumberRelationResponse({}));
  }

  /**
   * Queries a list of associations between virtual numbers and real numbers.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - QueryVirtualNumberRelationRequest
   * @returns QueryVirtualNumberRelationResponse
   */
  async queryVirtualNumberRelation(request: QueryVirtualNumberRelationRequest): Promise<QueryVirtualNumberRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualNumberRelationWithOptions(request, runtime);
  }

  /**
   * Queries the review state of a voice file.
   * 
   * @param request - QueryVoiceFileAuditInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVoiceFileAuditInfoResponse
   */
  async queryVoiceFileAuditInfoWithOptions(request: QueryVoiceFileAuditInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryVoiceFileAuditInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.voiceCodes)) {
      query["VoiceCodes"] = request.voiceCodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVoiceFileAuditInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVoiceFileAuditInfoResponse>(await this.callApi(params, req, runtime), new QueryVoiceFileAuditInfoResponse({}));
  }

  /**
   * Queries the review state of a voice file.
   * 
   * @param request - QueryVoiceFileAuditInfoRequest
   * @returns QueryVoiceFileAuditInfoResponse
   */
  async queryVoiceFileAuditInfo(request: QueryVoiceFileAuditInfoRequest): Promise<QueryVoiceFileAuditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVoiceFileAuditInfoWithOptions(request, runtime);
  }

  /**
   * Resumes the inbound call that is transferred by using a China 400 number.
   * 
   * @param request - RecoverCallInConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverCallInConfigResponse
   */
  async recoverCallInConfigWithOptions(request: RecoverCallInConfigRequest, runtime: $Util.RuntimeOptions): Promise<RecoverCallInConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoverCallInConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoverCallInConfigResponse>(await this.callApi(params, req, runtime), new RecoverCallInConfigResponse({}));
  }

  /**
   * Resumes the inbound call that is transferred by using a China 400 number.
   * 
   * @param request - RecoverCallInConfigRequest
   * @returns RecoverCallInConfigResponse
   */
  async recoverCallInConfig(request: RecoverCallInConfigRequest): Promise<RecoverCallInConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoverCallInConfigWithOptions(request, runtime);
  }

  /**
   * ResumeVideoFile
   * 
   * @param request - ResumeVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeVideoFileResponse
   */
  async resumeVideoFileWithOptions(request: ResumeVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<ResumeVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeVideoFileResponse>(await this.callApi(params, req, runtime), new ResumeVideoFileResponse({}));
  }

  /**
   * ResumeVideoFile
   * 
   * @param request - ResumeVideoFileRequest
   * @returns ResumeVideoFileResponse
   */
  async resumeVideoFile(request: ResumeVideoFileRequest): Promise<ResumeVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeVideoFileWithOptions(request, runtime);
  }

  /**
   * SeekVideoFile
   * 
   * @param request - SeekVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SeekVideoFileResponse
   */
  async seekVideoFileWithOptions(request: SeekVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<SeekVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.seekTimes)) {
      query["SeekTimes"] = request.seekTimes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SeekVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SeekVideoFileResponse>(await this.callApi(params, req, runtime), new SeekVideoFileResponse({}));
  }

  /**
   * SeekVideoFile
   * 
   * @param request - SeekVideoFileRequest
   * @returns SeekVideoFileResponse
   */
  async seekVideoFile(request: SeekVideoFileRequest): Promise<SeekVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.seekVideoFileWithOptions(request, runtime);
  }

  /**
   * Sends an SMS verification code.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SendVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationResponse
   */
  async sendVerificationWithOptions(request: SendVerificationRequest, runtime: $Util.RuntimeOptions): Promise<SendVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVerification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVerificationResponse>(await this.callApi(params, req, runtime), new SendVerificationResponse({}));
  }

  /**
   * Sends an SMS verification code.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SendVerificationRequest
   * @returns SendVerificationResponse
   */
  async sendVerification(request: SendVerificationRequest): Promise<SendVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerificationWithOptions(request, runtime);
  }

  /**
   * Sets the phone numbers for transferring a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetTransferCalleePoolConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTransferCalleePoolConfigResponse
   */
  async setTransferCalleePoolConfigWithOptions(request: SetTransferCalleePoolConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetTransferCalleePoolConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledRouteMode)) {
      query["CalledRouteMode"] = request.calledRouteMode;
    }

    if (!Util.isUnset(request.details)) {
      query["Details"] = request.details;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTransferCalleePoolConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTransferCalleePoolConfigResponse>(await this.callApi(params, req, runtime), new SetTransferCalleePoolConfigResponse({}));
  }

  /**
   * Sets the phone numbers for transferring a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetTransferCalleePoolConfigRequest
   * @returns SetTransferCalleePoolConfigResponse
   */
  async setTransferCalleePoolConfig(request: SetTransferCalleePoolConfigRequest): Promise<SetTransferCalleePoolConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTransferCalleePoolConfigWithOptions(request, runtime);
  }

  /**
   * Sends a voice verification code or a voice notification with variables to a specified phone number.
   * 
   * @remarks
   *   Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * *   For more information about voice plans or voice service billing, see [Pricing of VMS on China site (aliyun.com)](https://help.aliyun.com/document_detail/150083.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SingleCallByTtsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleCallByTtsResponse
   */
  async singleCallByTtsWithOptions(request: SingleCallByTtsRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByTtsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleCallByTts",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SingleCallByTtsResponse>(await this.callApi(params, req, runtime), new SingleCallByTtsResponse({}));
  }

  /**
   * Sends a voice verification code or a voice notification with variables to a specified phone number.
   * 
   * @remarks
   *   Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * *   For more information about voice plans or voice service billing, see [Pricing of VMS on China site (aliyun.com)](https://help.aliyun.com/document_detail/150083.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SingleCallByTtsRequest
   * @returns SingleCallByTtsResponse
   */
  async singleCallByTts(request: SingleCallByTtsRequest): Promise<SingleCallByTtsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByTtsWithOptions(request, runtime);
  }

  /**
   * 语音视频单呼接口
   * 
   * @param request - SingleCallByVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleCallByVideoResponse
   */
  async singleCallByVideoWithOptions(request: SingleCallByVideoRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByVideoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.videoCode)) {
      query["VideoCode"] = request.videoCode;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleCallByVideo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SingleCallByVideoResponse>(await this.callApi(params, req, runtime), new SingleCallByVideoResponse({}));
  }

  /**
   * 语音视频单呼接口
   * 
   * @param request - SingleCallByVideoRequest
   * @returns SingleCallByVideoResponse
   */
  async singleCallByVideo(request: SingleCallByVideoRequest): Promise<SingleCallByVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByVideoWithOptions(request, runtime);
  }

  /**
   * Sends a voice notification to a phone number by using a voice notification file.
   * 
   * @remarks
   * > Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * You can call the [SingleCallByTts](https://help.aliyun.com/document_detail/393519.html) operation to send voice notifications with variables.
   * ### QPS limits
   * You can call this operation up to 1,200 times per second per account.
   * 
   * @param request - SingleCallByVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleCallByVoiceResponse
   */
  async singleCallByVoiceWithOptions(request: SingleCallByVoiceRequest, runtime: $Util.RuntimeOptions): Promise<SingleCallByVoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleCallByVoice",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SingleCallByVoiceResponse>(await this.callApi(params, req, runtime), new SingleCallByVoiceResponse({}));
  }

  /**
   * Sends a voice notification to a phone number by using a voice notification file.
   * 
   * @remarks
   * > Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * You can call the [SingleCallByTts](https://help.aliyun.com/document_detail/393519.html) operation to send voice notifications with variables.
   * ### QPS limits
   * You can call this operation up to 1,200 times per second per account.
   * 
   * @param request - SingleCallByVoiceRequest
   * @returns SingleCallByVoiceResponse
   */
  async singleCallByVoice(request: SingleCallByVoiceRequest): Promise<SingleCallByVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.singleCallByVoiceWithOptions(request, runtime);
  }

  /**
   * SkipVideoFile
   * 
   * @param request - SkipVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipVideoFileResponse
   */
  async skipVideoFileWithOptions(request: SkipVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<SkipVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.skipTimes)) {
      query["SkipTimes"] = request.skipTimes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SkipVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SkipVideoFileResponse>(await this.callApi(params, req, runtime), new SkipVideoFileResponse({}));
  }

  /**
   * SkipVideoFile
   * 
   * @param request - SkipVideoFileRequest
   * @returns SkipVideoFileResponse
   */
  async skipVideoFile(request: SkipVideoFileRequest): Promise<SkipVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.skipVideoFileWithOptions(request, runtime);
  }

  /**
   * Initiates an intelligent voice call.
   * 
   * @remarks
   *   The SmartCall operation must be used together with the [intelligent outbound HTTP operation](https://help.aliyun.com/document_detail/112703.html). After the call initiated by the Voice Messaging Service (VMS) platform is connected, the VMS platform sends the text converted from speech back to the business side, and the business side then returns the follow-up action to the VMS platform.
   * *   The SmartCall operation does not support the following characters: `@ = : "" $ { } ^ * ￥`.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartCallResponse
   */
  async smartCallWithOptions(request: SmartCallRequest, runtime: $Util.RuntimeOptions): Promise<SmartCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!Util.isUnset(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!Util.isUnset(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!Util.isUnset(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!Util.isUnset(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!Util.isUnset(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!Util.isUnset(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!Util.isUnset(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!Util.isUnset(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!Util.isUnset(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!Util.isUnset(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!Util.isUnset(request.noiseThreshold)) {
      query["NoiseThreshold"] = request.noiseThreshold;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!Util.isUnset(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.streamAsr)) {
      query["StreamAsr"] = request.streamAsr;
    }

    if (!Util.isUnset(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!Util.isUnset(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!Util.isUnset(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!Util.isUnset(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SmartCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SmartCallResponse>(await this.callApi(params, req, runtime), new SmartCallResponse({}));
  }

  /**
   * Initiates an intelligent voice call.
   * 
   * @remarks
   *   The SmartCall operation must be used together with the [intelligent outbound HTTP operation](https://help.aliyun.com/document_detail/112703.html). After the call initiated by the Voice Messaging Service (VMS) platform is connected, the VMS platform sends the text converted from speech back to the business side, and the business side then returns the follow-up action to the VMS platform.
   * *   The SmartCall operation does not support the following characters: `@ = : "" $ { } ^ * ￥`.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SmartCallRequest
   * @returns SmartCallResponse
   */
  async smartCall(request: SmartCallRequest): Promise<SmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smartCallWithOptions(request, runtime);
  }

  /**
   * Initiates an action in an outbound robocall. This operation is applicable only when the robocall is transferred to an agent or an agent is listening in on the conversation between the robot and the user.
   * 
   * @remarks
   * You can call this operation to initiate a specified action on the called number of an outbound robocall when the call is transferred to an agent of the call center.
   * > You can only initiate the action of bridging a called number and an agent of the call center.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SmartCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartCallOperateResponse
   */
  async smartCallOperateWithOptions(request: SmartCallOperateRequest, runtime: $Util.RuntimeOptions): Promise<SmartCallOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.param)) {
      query["Param"] = request.param;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SmartCallOperate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SmartCallOperateResponse>(await this.callApi(params, req, runtime), new SmartCallOperateResponse({}));
  }

  /**
   * Initiates an action in an outbound robocall. This operation is applicable only when the robocall is transferred to an agent or an agent is listening in on the conversation between the robot and the user.
   * 
   * @remarks
   * You can call this operation to initiate a specified action on the called number of an outbound robocall when the call is transferred to an agent of the call center.
   * > You can only initiate the action of bridging a called number and an agent of the call center.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SmartCallOperateRequest
   * @returns SmartCallOperateResponse
   */
  async smartCallOperate(request: SmartCallOperateRequest): Promise<SmartCallOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smartCallOperateWithOptions(request, runtime);
  }

  /**
   * Starts a robocall task immediately or at a scheduled time.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StartRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRobotTaskResponse
   */
  async startRobotTaskWithOptions(request: StartRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartRobotTaskResponse>(await this.callApi(params, req, runtime), new StartRobotTaskResponse({}));
  }

  /**
   * Starts a robocall task immediately or at a scheduled time.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StartRobotTaskRequest
   * @returns StartRobotTaskResponse
   */
  async startRobotTask(request: StartRobotTaskRequest): Promise<StartRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRobotTaskWithOptions(request, runtime);
  }

  /**
   * Stops the inbound call that is transferred from a China 400 number.
   * 
   * @param request - StopCallInConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCallInConfigResponse
   */
  async stopCallInConfigWithOptions(request: StopCallInConfigRequest, runtime: $Util.RuntimeOptions): Promise<StopCallInConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopCallInConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCallInConfigResponse>(await this.callApi(params, req, runtime), new StopCallInConfigResponse({}));
  }

  /**
   * Stops the inbound call that is transferred from a China 400 number.
   * 
   * @param request - StopCallInConfigRequest
   * @returns StopCallInConfigResponse
   */
  async stopCallInConfig(request: StopCallInConfigRequest): Promise<StopCallInConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCallInConfigWithOptions(request, runtime);
  }

  /**
   * Stops a robocall task that is in progress.
   * 
   * @remarks
   * After you stop a robocall task, you can call the [StartRobotTask](~~StartRobotTask~~) operation to start it again.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StopRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRobotTaskResponse
   */
  async stopRobotTaskWithOptions(request: StopRobotTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopRobotTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopRobotTaskResponse>(await this.callApi(params, req, runtime), new StopRobotTaskResponse({}));
  }

  /**
   * Stops a robocall task that is in progress.
   * 
   * @remarks
   * After you stop a robocall task, you can call the [StartRobotTask](~~StartRobotTask~~) operation to start it again.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StopRobotTaskRequest
   * @returns StopRobotTaskResponse
   */
  async stopRobotTask(request: StopRobotTaskRequest): Promise<StopRobotTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRobotTaskWithOptions(request, runtime);
  }

  /**
   * Submits a China 400 number for registration.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SubmitHotlineTransferRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotlineTransferRegisterResponse
   */
  async submitHotlineTransferRegisterWithOptions(request: SubmitHotlineTransferRegisterRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotlineTransferRegisterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agreement)) {
      query["Agreement"] = request.agreement;
    }

    if (!Util.isUnset(request.hotlineNumber)) {
      query["HotlineNumber"] = request.hotlineNumber;
    }

    if (!Util.isUnset(request.operatorIdentityCard)) {
      query["OperatorIdentityCard"] = request.operatorIdentityCard;
    }

    if (!Util.isUnset(request.operatorMail)) {
      query["OperatorMail"] = request.operatorMail;
    }

    if (!Util.isUnset(request.operatorMailVerifyCode)) {
      query["OperatorMailVerifyCode"] = request.operatorMailVerifyCode;
    }

    if (!Util.isUnset(request.operatorMobile)) {
      query["OperatorMobile"] = request.operatorMobile;
    }

    if (!Util.isUnset(request.operatorMobileVerifyCode)) {
      query["OperatorMobileVerifyCode"] = request.operatorMobileVerifyCode;
    }

    if (!Util.isUnset(request.operatorName)) {
      query["OperatorName"] = request.operatorName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.transferPhoneNumberInfos)) {
      query["TransferPhoneNumberInfos"] = request.transferPhoneNumberInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitHotlineTransferRegister",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitHotlineTransferRegisterResponse>(await this.callApi(params, req, runtime), new SubmitHotlineTransferRegisterResponse({}));
  }

  /**
   * Submits a China 400 number for registration.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SubmitHotlineTransferRegisterRequest
   * @returns SubmitHotlineTransferRegisterResponse
   */
  async submitHotlineTransferRegister(request: SubmitHotlineTransferRegisterRequest): Promise<SubmitHotlineTransferRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotlineTransferRegisterWithOptions(request, runtime);
  }

  /**
   * UpgradeVideoFile
   * 
   * @param request - UpgradeVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeVideoFileResponse
   */
  async upgradeVideoFileWithOptions(request: UpgradeVideoFileRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeVideoFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeVideoFileResponse>(await this.callApi(params, req, runtime), new UpgradeVideoFileResponse({}));
  }

  /**
   * UpgradeVideoFile
   * 
   * @param request - UpgradeVideoFileRequest
   * @returns UpgradeVideoFileResponse
   */
  async upgradeVideoFile(request: UpgradeVideoFileRequest): Promise<UpgradeVideoFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeVideoFileWithOptions(request, runtime);
  }

  /**
   * Uploads the called numbers of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadRobotTaskCalledFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRobotTaskCalledFileResponse
   */
  async uploadRobotTaskCalledFileWithOptions(request: UploadRobotTaskCalledFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadRobotTaskCalledFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.ttsParamHead)) {
      query["TtsParamHead"] = request.ttsParamHead;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadRobotTaskCalledFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadRobotTaskCalledFileResponse>(await this.callApi(params, req, runtime), new UploadRobotTaskCalledFileResponse({}));
  }

  /**
   * Uploads the called numbers of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadRobotTaskCalledFileRequest
   * @returns UploadRobotTaskCalledFileResponse
   */
  async uploadRobotTaskCalledFile(request: UploadRobotTaskCalledFileRequest): Promise<UploadRobotTaskCalledFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRobotTaskCalledFileWithOptions(request, runtime);
  }

}
