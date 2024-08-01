// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchSendMessageToGlobeRequest extends $tea.Model {
  /**
   * @remarks
   * The mobile phone number of the sender. You can also specify a sender ID. The sender ID can contain both letters and digits. If it does, the ID must be between 1 to 11 characters in length. If the sender ID contains only digits, it must be 1 to 15 characters in length.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"message to 931520581****\\",\\"message to 931530581****\\",\\"message to 931540581****\\",\\"message to 931550581****\\"]
   */
  message?: string;
  /**
   * @remarks
   * The ID of the messaging campaign. It must be 1 to 255 characters in length. The ID is the value of the TaskId field in the delivery receipt of the message.
   * 
   * @example
   * 123789****
   */
  taskId?: string;
  /**
   * @remarks
   * The mobile phone numbers to which the message is sent. You must add the dialing code to the beginning of each mobile phone number.
   * 
   * For more information, see [Dialing codes](https://www.alibabacloud.com/help/zh/short-message-service/latest/dialing-codes).
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"931520581****\\",\\"931530581****\\",\\"931540581****\\",\\"931550581****\\"]
   */
  to?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **NOTIFY**: notification
   * *   **MKT**: promotional message
   * 
   * @example
   * NOTIFY
   */
  type?: string;
  /**
   * @remarks
   * The validity period of the message. Unit: seconds.
   * 
   * @example
   * 1
   */
  validityPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      message: 'Message',
      taskId: 'TaskId',
      to: 'To',
      type: 'Type',
      validityPeriod: 'ValidityPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      message: 'string',
      taskId: 'string',
      to: 'string',
      type: 'string',
      validityPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageToGlobeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of mobile phone numbers that failed to receive the message.
   * 
   * @example
   * ["931520581****","931530581****"]
   */
  failedList?: string;
  /**
   * @remarks
   * The sender ID returned.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * ["123****","124****"]
   */
  messageIdList?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D3
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. If OK is returned, the request is successful. For more information, see [Error codes](https://www.alibabacloud.com/help/zh/short-message-service/latest/error-codes).
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The SMS Send Request was accepted
   */
  responseDescription?: string;
  /**
   * @remarks
   * The number of mobile phone numbers that received the message.
   * 
   * @example
   * 2
   */
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      failedList: 'FailedList',
      from: 'From',
      messageIdList: 'MessageIdList',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedList: 'string',
      from: 'string',
      messageIdList: 'string',
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      successCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageToGlobeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSendMessageToGlobeResponseBody;
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
      body: BatchSendMessageToGlobeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataRequest extends $tea.Model {
  /**
   * @remarks
   * Conversion rate monitoring return value.
   * 
   * >  The value of this parameter is of type double, and the value is between [0,1].
   * 
   * This parameter is required.
   * 
   * @example
   * 0.53
   */
  conversionRate?: string;
  /**
   * @remarks
   * Timestamp of the conversion rate observation should be a Unix timestamp, a millisecond-level long integer.
   * 
   * >  If this field is not specified: the current timestamp is the default.
   * 
   * @example
   * 1349055900000
   */
  reportTime?: number;
  static names(): { [key: string]: string } {
    return {
      conversionRate: 'ConversionRate',
      reportTime: 'ReportTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionRate: 'string',
      reportTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
  requestId?: string;
  /**
   * @remarks
   * Status code. Returning OK means the request was successful. For other error codes, please refer to the [Error codes](https://help.aliyun.com/document_detail/180674.html) list.
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  responseDescription?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConversionDataResponseBody;
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
      body: ConversionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 1008030xxx3003
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code of the message.
   * 
   * @example
   * DELIVERED
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  errorDescription?: string;
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * Hello!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1008030xxx3003
   */
  messageId?: string;
  /**
   * @remarks
   * The details about the mobile phone number.
   */
  numberDetail?: QueryMessageResponseBodyNumberDetail;
  /**
   * @remarks
   * The time when the delivery receipt was received from the carrier.
   * 
   * @example
   * Mon, 24 Dec 2018 16:58:22 +0800
   */
  receiveDate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D0
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the delivery request.
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the delivery request status.
   * 
   * @example
   * The SMS Send Request was accepted
   */
  responseDescription?: string;
  /**
   * @remarks
   * The time when the message was sent to the carrier.
   * 
   * @example
   * Mon, 24 Dec 2018 16:58:22 +0800
   */
  sendDate?: string;
  /**
   * @remarks
   * The delivery status of the message.
   * 
   * *   1: The message was sent.
   * *   2: The message failed to be sent.
   * *   3: The message is being sent.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The mobile phone number to which the message was sent.
   * 
   * @example
   * 6581xxx810
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDescription: 'ErrorDescription',
      message: 'Message',
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      receiveDate: 'ReceiveDate',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      sendDate: 'SendDate',
      status: 'Status',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDescription: 'string',
      message: 'string',
      messageId: 'string',
      numberDetail: QueryMessageResponseBodyNumberDetail,
      receiveDate: 'string',
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      sendDate: 'string',
      status: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMessageResponseBody;
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
      body: QueryMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * 3790
   */
  channelId?: string;
  /**
   * @remarks
   * The mobile phone number of the sender. You can also specify a sender ID. The sender ID can contain both letters and digits. If it does, the ID must be between 1 to 11 characters in length. If the sender ID contains only digits, it must be 1 to 15 characters in length.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  message?: string;
  /**
   * @remarks
   * The ID of the messaging campaign. It must be 1 to 255 characters in length. The ID is the value of the TaskId field in the delivery receipt of the message.
   * 
   * @example
   * 123****789
   */
  taskId?: string;
  /**
   * @remarks
   * The mobile phone number to which the message is sent. You must add the dialing code to the beginning of the mobile phone number. Example: 8521245567\\*\\*\\*\\*.
   * 
   * For more information, see [Dialing codes](https://www.alibabacloud.com/help/en/sms/product-overview/dialing-codes?spm=a2c63.p38356.0.0.48b940a1PFYRMz).
   * 
   * >  You cannot call the SendMessageToGlobe operation to send messages to the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * 8521245567****
   */
  to?: string;
  /**
   * @remarks
   * The validity period of the message. Unit: seconds.
   * 
   * @example
   * 600
   */
  validityPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      from: 'From',
      message: 'Message',
      taskId: 'TaskId',
      to: 'To',
      validityPeriod: 'ValidityPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      from: 'string',
      message: 'string',
      taskId: 'string',
      to: 'string',
      validityPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The sender ID returned.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1008030300****
   */
  messageId?: string;
  /**
   * @remarks
   * The details about the mobile phone number of the recipient.
   */
  numberDetail?: SendMessageToGlobeResponseBodyNumberDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the delivery request.
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the delivery request status.
   * 
   * @example
   * The SMS Send Request was accepted
   */
  responseDescription?: string;
  /**
   * @remarks
   * The number of messages that incurred fees.
   * 
   * @example
   * 1
   */
  segments?: string;
  /**
   * @remarks
   * The mobile phone number to which the message was sent.
   * 
   * @example
   * 1380000****
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      segments: 'Segments',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      messageId: 'string',
      numberDetail: SendMessageToGlobeResponseBodyNumberDetail,
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      segments: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageToGlobeResponseBody;
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
      body: SendMessageToGlobeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * 5739
   */
  channelId?: string;
  /**
   * @remarks
   * The signature. To query the signature, log on to the [Short Message Service (SMS) console](https://sms-intl.console.aliyun.com/overview) and navigate to the **Signatures** tab of the **Go China** page.
   * 
   * This parameter is required.
   * 
   * @example
   * Alicloud321
   */
  from?: string;
  /**
   * @remarks
   * The extension code of the MO message.
   * 
   * @example
   * 90999
   */
  smsUpExtendCode?: string;
  /**
   * @remarks
   * The code of the message template. To query the code, log on to the [SMS console](https://sms-intl.console.aliyun.com/overview) and navigate to the **Templates** tab of the **Go China** page.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_****
   */
  templateCode?: string;
  /**
   * @remarks
   * The value of the variable in the message template. If a variable exists in the template, the parameter is required.
   * 
   * @example
   * {"code":"1234","product":"ytx"}
   */
  templateParam?: string;
  /**
   * @remarks
   * The mobile phone number to which the message is sent. You must add the country code to the beginning of the mobile phone number. Example: 861503871\\*\\*\\*\\*.
   * 
   * For more information, see [Dialing codes](https://www.alibabacloud.com/help/en/sms/product-overview/dialing-codes?spm=a2c63.p38356.0.0.367279cbwQFoeM).
   * 
   * This parameter is required.
   * 
   * @example
   * 861503871****
   */
  to?: string;
  /**
   * @remarks
   * The validity period of the message.
   * 
   * @example
   * 1
   */
  validityPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      from: 'From',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      to: 'To',
      validityPeriod: 'ValidityPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      from: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
      to: 'string',
      validityPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1**************3
   */
  messageId?: string;
  /**
   * @remarks
   * The details about the mobile phone number of the recipient.
   */
  numberDetail?: SendMessageWithTemplateResponseBodyNumberDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D23D6
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the delivery request.
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the delivery request status.
   * 
   * @example
   * The SMS Send Request was accepted
   */
  responseDescription?: string;
  /**
   * @remarks
   * The number of messages that incurred fees.
   * 
   * @example
   * 1
   */
  segments?: string;
  /**
   * @remarks
   * The mobile phone number to which the message was sent. The dialing code was added to the beginning of the mobile phone number. Example: 861503871\\*\\*\\*\\*.
   * 
   * @example
   * 861503871****
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      segments: 'Segments',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      numberDetail: SendMessageWithTemplateResponseBodyNumberDetail,
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      segments: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageWithTemplateResponseBody;
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
      body: SendMessageWithTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the OTP message was delivered. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * *   If you leave the parameter empty, the current timestamp is specified by default.
   * *   If you specify the parameter, the timestamp must be greater than the message sending time and less than the current timestamp.
   * 
   * @example
   * 1349055900000
   */
  conversionTime?: number;
  /**
   * @remarks
   * Specifies whether customers replied to the OTP message. Valid values: true and false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  delivered?: boolean;
  /**
   * @remarks
   * The ID of the OTP message.
   * 
   * This parameter is required.
   * 
   * @example
   * 1008030300****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      conversionTime: 'ConversionTime',
      delivered: 'Delivered',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionTime: 'number',
      delivered: 'boolean',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. If OK is returned, the request is successful. For more information, see [Error codes](https://help.aliyun.com/document_detail/180674.html).
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  responseDescription?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmsConversionResponseBody;
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
      body: SmsConversionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBodyNumberDetail extends $tea.Model {
  /**
   * @remarks
   * The carrier that owns the mobile phone number.
   * 
   * @example
   * CMI
   */
  carrier?: string;
  /**
   * @remarks
   * The country to which the mobile phone number belongs.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The region to which the mobile phone number belongs.
   * 
   * @example
   * HongKong
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponseBodyNumberDetail extends $tea.Model {
  /**
   * @remarks
   * The carrier that owns the mobile phone number.
   * 
   * @example
   * CMI
   */
  carrier?: string;
  /**
   * @remarks
   * The country to which the mobile phone number belongs.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The region to which the mobile phone number belongs.
   * 
   * @example
   * HongKong
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponseBodyNumberDetail extends $tea.Model {
  /**
   * @remarks
   * The carrier that owns the mobile phone number.
   * 
   * @example
   * China Mobile
   */
  carrier?: string;
  /**
   * @remarks
   * The country to which the mobile phone number belongs.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The region to which the mobile phone number belongs.
   * 
   * @example
   * Nanjing, Jiangsu
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
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
    this._endpointMap = {
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'cn-hongkong': "dysmsapi-xman.cn-hongkong.aliyuncs.com",
      'eu-central-1': "dysmsapi.eu-central-1.aliyuncs.com",
      'us-east-1': "dysmsapi.us-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sends a message to multiple recipients in countries or regions outside the Chinese mainland.
   * 
   * @remarks
   *   You cannot call the BatchSendMessageToGlobe operation to send messages to the Chinese mainland.
   * *   You can call the BatchSendMessageToGlobe operation to send notifications and promotional messages to a limited number of mobile phone numbers at a time. To send messages to a large number of mobile phone numbers at a time, use the mass messaging feature of the SMS console.
   * *   For time-sensitive related messages, we recommend that you use the [SendMessageToGlobe](https://www.alibabacloud.com/help/zh/sms/developer-reference/api-dysmsapi-2018-05-01-batchsendmessagetoglobe) operation to ensure that messages are delivered on time.
   * *   In each request, you can send messages to up to 1,000 mobile phone numbers.
   * ### [](#qps)QPS limits
   * You can call this operation only once per second. If the number of calls per second exceeds this limit, throttling will be triggered. This can potentially impact your business operations. Therefore, we recommend that you take note of this limit when making calls to this operation.
   * 
   * @param request - BatchSendMessageToGlobeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSendMessageToGlobeResponse
   */
  async batchSendMessageToGlobeWithOptions(request: BatchSendMessageToGlobeRequest, runtime: $Util.RuntimeOptions): Promise<BatchSendMessageToGlobeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSendMessageToGlobe",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSendMessageToGlobeResponse>(await this.callApi(params, req, runtime), new BatchSendMessageToGlobeResponse({}));
  }

  /**
   * Sends a message to multiple recipients in countries or regions outside the Chinese mainland.
   * 
   * @remarks
   *   You cannot call the BatchSendMessageToGlobe operation to send messages to the Chinese mainland.
   * *   You can call the BatchSendMessageToGlobe operation to send notifications and promotional messages to a limited number of mobile phone numbers at a time. To send messages to a large number of mobile phone numbers at a time, use the mass messaging feature of the SMS console.
   * *   For time-sensitive related messages, we recommend that you use the [SendMessageToGlobe](https://www.alibabacloud.com/help/zh/sms/developer-reference/api-dysmsapi-2018-05-01-batchsendmessagetoglobe) operation to ensure that messages are delivered on time.
   * *   In each request, you can send messages to up to 1,000 mobile phone numbers.
   * ### [](#qps)QPS limits
   * You can call this operation only once per second. If the number of calls per second exceeds this limit, throttling will be triggered. This can potentially impact your business operations. Therefore, we recommend that you take note of this limit when making calls to this operation.
   * 
   * @param request - BatchSendMessageToGlobeRequest
   * @returns BatchSendMessageToGlobeResponse
   */
  async batchSendMessageToGlobe(request: BatchSendMessageToGlobeRequest): Promise<BatchSendMessageToGlobeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMessageToGlobeWithOptions(request, runtime);
  }

  /**
   * This API, sends conversion data to the Alibaba SMS service.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * 
   * @param request - ConversionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConversionDataResponse
   */
  async conversionDataWithOptions(request: ConversionDataRequest, runtime: $Util.RuntimeOptions): Promise<ConversionDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conversionRate)) {
      body["ConversionRate"] = request.conversionRate;
    }

    if (!Util.isUnset(request.reportTime)) {
      body["ReportTime"] = request.reportTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConversionData",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConversionDataResponse>(await this.callApi(params, req, runtime), new ConversionDataResponse({}));
  }

  /**
   * This API, sends conversion data to the Alibaba SMS service.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * 
   * @param request - ConversionDataRequest
   * @returns ConversionDataResponse
   */
  async conversionData(request: ConversionDataRequest): Promise<ConversionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.conversionDataWithOptions(request, runtime);
  }

  /**
   * Queries the delivery report of a message.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - QueryMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageResponse
   */
  async queryMessageWithOptions(request: QueryMessageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMessage",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMessageResponse>(await this.callApi(params, req, runtime), new QueryMessageResponse({}));
  }

  /**
   * Queries the delivery report of a message.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - QueryMessageRequest
   * @returns QueryMessageResponse
   */
  async queryMessage(request: QueryMessageRequest): Promise<QueryMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessageWithOptions(request, runtime);
  }

  /**
   * Sends a message to regions outside the Chinese mainland.
   * 
   * @remarks
   * ### [](#)Usage notes
   * The SendMessageToGlobe API operation does not support message delivery to the Chinese mainland.
   * ### [](#qps-)QPS limit
   * You can call this operation up to 30 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendMessageToGlobeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageToGlobeResponse
   */
  async sendMessageToGlobeWithOptions(request: SendMessageToGlobeRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageToGlobeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessageToGlobe",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageToGlobeResponse>(await this.callApi(params, req, runtime), new SendMessageToGlobeResponse({}));
  }

  /**
   * Sends a message to regions outside the Chinese mainland.
   * 
   * @remarks
   * ### [](#)Usage notes
   * The SendMessageToGlobe API operation does not support message delivery to the Chinese mainland.
   * ### [](#qps-)QPS limit
   * You can call this operation up to 30 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendMessageToGlobeRequest
   * @returns SendMessageToGlobeResponse
   */
  async sendMessageToGlobe(request: SendMessageToGlobeRequest): Promise<SendMessageToGlobeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageToGlobeWithOptions(request, runtime);
  }

  /**
   * Sends a message to the Chinese mainland by using a message template.
   * 
   * @remarks
   * ### Usage notes
   * You can call the SendMessageWithTemplate operation to send messages only to the Chinese mainland.
   * 
   * @param request - SendMessageWithTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageWithTemplateResponse
   */
  async sendMessageWithTemplateWithOptions(request: SendMessageWithTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageWithTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessageWithTemplate",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageWithTemplateResponse>(await this.callApi(params, req, runtime), new SendMessageWithTemplateResponse({}));
  }

  /**
   * Sends a message to the Chinese mainland by using a message template.
   * 
   * @remarks
   * ### Usage notes
   * You can call the SendMessageWithTemplate operation to send messages only to the Chinese mainland.
   * 
   * @param request - SendMessageWithTemplateRequest
   * @returns SendMessageWithTemplateResponse
   */
  async sendMessageWithTemplate(request: SendMessageWithTemplateRequest): Promise<SendMessageWithTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithTemplateWithOptions(request, runtime);
  }

  /**
   * Delivers one-time password (OTP) message statuses to Alibaba Cloud, which calculates and monitors OTP conversion rates.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations:
   * > * Call the SmsConversion operation in an asynchronous manner by configuring queues or events.
   * > * Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsConversionResponse
   */
  async smsConversionWithOptions(request: SmsConversionRequest, runtime: $Util.RuntimeOptions): Promise<SmsConversionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conversionTime)) {
      query["ConversionTime"] = request.conversionTime;
    }

    if (!Util.isUnset(request.delivered)) {
      query["Delivered"] = request.delivered;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SmsConversion",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SmsConversionResponse>(await this.callApi(params, req, runtime), new SmsConversionResponse({}));
  }

  /**
   * Delivers one-time password (OTP) message statuses to Alibaba Cloud, which calculates and monitors OTP conversion rates.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations:
   * > * Call the SmsConversion operation in an asynchronous manner by configuring queues or events.
   * > * Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionRequest
   * @returns SmsConversionResponse
   */
  async smsConversion(request: SmsConversionRequest): Promise<SmsConversionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsConversionWithOptions(request, runtime);
  }

}
