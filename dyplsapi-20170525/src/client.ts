// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAxnTrackNoRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The private number in the AXN binding, that is, phone number X.
   * 
   * You can call the [BindAxn](https://help.aliyun.com/document_detail/110258.html) operation to obtain the value of PhoneNoX.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700000****
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * You can call the [BindAxn](https://help.aliyun.com/document_detail/110258.html) operation to obtain the value of SubsId.
   * 
   * This parameter is required.
   * 
   * @example
   * 15678890****
   */
  subsId?: string;
  /**
   * @remarks
   * The tracking number.
   * 
   * This parameter is required.
   * 
   * @example
   * abcde*****
   */
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'string',
      trackNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAxnTrackNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 1A4CADEF-8516-5890-9177-A1A4D97F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAxnTrackNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAxnTrackNoResponseBody;
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
      body: AddAxnTrackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistRequest extends $tea.Model {
  /**
   * @remarks
   * The numbers in the blacklist. A point-to-point blacklist has a pair of numbers separated by a colon (:). A number pool blacklist has only one single number.
   * 
   * >  The asterisks (\\*) in the sample value are not wildcards.
   * 
   * This parameter is required.
   * 
   * @example
   * 1825638****:1825248****
   */
  blackNo?: string;
  /**
   * @remarks
   * The blacklist type. Valid values:
   * 
   * *   **POINT_TO_POINT_BLACK**: point-to-point blacklist.
   * *   **PARTNER_GLOBAL_NUMBER_BLACK**: number pool blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * POINT_TO_POINT_BLACK
   */
  blackType?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the Number Pool Management page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  /**
   * @remarks
   * The blacklist remarks.
   * 
   * @example
   * Customer service feedback
   */
  remark?: string;
  /**
   * @remarks
   * The control on the call direction.
   * 
   * *   **PHONEA_REJECT**: The first number in the blacklist can be used to call the second number, but the second number cannot be used to call the first number.
   * *   **PHONEB_REJECT**: The first number in the blacklist cannot be used to call the second number, but the second number can be used to call the first number.
   * *   If this parameter is left empty, the two numbers in the blacklist cannot be used to call each other.
   * 
   * >  This parameter is available only for a point-to-point blacklist.
   * 
   * Valid values:
   * 
   * *   DUPLEX_REJECT
   * *   PHONEA_REJECT
   * *   PHONEB_REJECT
   * 
   * @example
   * PHONEA_REJECT
   */
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      blackType: 'BlackType',
      poolKey: 'PoolKey',
      remark: 'Remark',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      blackType: 'string',
      poolKey: 'string',
      remark: 'string',
      wayControl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecretBlacklistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSecretBlacklistResponseBody;
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
      body: AddSecretBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAXBCallRequest extends $tea.Model {
  /**
   * @remarks
   * authId绑定关系BX唯一id
   * 
   * This parameter is required.
   * 
   * @example
   * 12353
   */
  authId?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 绑定关系过期失效时间： 取值必须大于0； 单位：秒，ct_time + expiration = 自动解绑时间
   * 
   * This parameter is required.
   * 
   * @example
   * 7200
   */
  expiration?: number;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 客户A号码
   * 
   * This parameter is required.
   * 
   * @example
   * 13*******43
   */
  telA?: string;
  /**
   * @remarks
   * 客户自定义参数回调带回
   * 
   * @example
   * 000
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      expiration: 'Expiration',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telA: 'TelA',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      expiration: 'number',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telA: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAXBCallResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 绑定关系ID
   * 
   * @example
   * 476567566
   */
  bindId?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      bindId: 'BindId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      bindId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAXBCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAXBCallResponseBody;
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
      body: BindAXBCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ASR model. On the [Automatic Speech Recognition (ASR) Model Management](https://dyplsnext.console.aliyun.com/?spm=5176.12818093.categories-n-products.ddypls.22e616d0a0tEFC#/asr) page, you can view the ID of the ASR model.
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic speech recognition (ASR). Valid values:
   * 
   * *   **false** (default): disables ASR.
   * *   **true**: enables ASR.
   * 
   * @example
   * false
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Re-sets the phone number display logic in the AXB binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The status of the one-way call restriction. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The maximum ringing duration for each number in sequential ringing. Unit: seconds. The value ranges from 5 to 20.
   * 
   * @example
   * 10
   */
  callTimeout?: number;
  /**
   * @remarks
   * Specifies the dual tone multiple frequency (DTMF) key configuration in the AXB binding. The following content can be configured:
   * 
   * *   endCallIvrPhoneNo: for whom the audio is played, user A or user B.
   * *   waitingDtmfTime: the maximum waiting time after the first audio is played. The maximum waiting time is 30 seconds.
   * *   maxLoop: the maximum number of loop playback times of the first audio if the DTMF key is not matched. The maximum number of loop playback times is 5.
   * *   step1File: the name of the first audio.
   * *   step2File: the name of the second audio.
   * *   validKey: the valid key values, such as 1,2. Only two valid key values can be set, and the key values are separated by a comma (,).
   * *   waitingEndCall: The waiting duration to hang up a call. The waiting duration is allowed by a carrier. The maximum waiting duration is 10 seconds.
   * 
   * @example
   * {
   *     "endCallIvrPhoneNo":"A",
   *     "waitingDtmfTime":10,
   *     "maxLoop":3,
   *     "step1File":"62ab72f8-4750-4234-859e-e8d678c0cad3-flow_tts_test_1.wav",
   *     "step2File":"62ab72f8-4750-4234-859e-e8d678c0cad3-flow_tts_test_2.wav",
   *     "validKey":"1,2",
   *     "waitingEndCall":2
   * }
   */
  dtmfConfig?: string;
  /**
   * @remarks
   * Specifies the city to which phone number X to be selected belongs.
   * 
   * *   If no phone number for the specified city is available in the current phone number pool or this parameter is not specified, a phone number that belongs to another city is randomly selected from the current phone number pool and assigned as phone number X.
   * *   If**Number X Assignment Mode** is set to **Strict Matching Mode** and no phone number meets the requirement, the system displays an allocation error.
   * 
   * @example
   * hangzhou
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the AXB binding.
   * 
   * >  The expiration time must be more than 1 minute later than the time when you call this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * Specifies whether to record all calls made by the bound phone numbers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The extension field for the external business. This parameter is returned in a call record receipt.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @remarks
   * The ID of the external business.
   * 
   * @example
   * 34553330****
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the AXB binding.
   * 
   * Phone number A can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the AXB binding. If phone number A is used to call phone number X, the call is forwarded to phone number B. Phone number B can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * >  If you need to update phone number B, call the [UpdateSubscription](https://help.aliyun.com/document_detail/110253.html) operation.
   * 
   * @example
   * 139****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the AXB binding.
   * 
   * Phone number X is the phone number that you purchased in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) or by using the [BuySecretNo](https://help.aliyun.com/document_detail/110266.html) operation before you bind a phone number. Phone number X is used to forward calls.
   * 
   * If you do not specify this parameter, a random phone number is selected from the phone number pool based on the value of the ExpectCity parameter and is used as phone number X.
   * 
   * @example
   * 139****0000
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * @example
   * FC5526*****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sets the ringtone code for enterprise Color Ring Back Tone (CRBT) in the AXB binding.
   * 
   * *   Ringtone setting when phone number A is used to call phone number X in the AXB binding: AXBRing_A
   * *   Ringtone setting when phone number B is used to call phone number X in the AXB binding: AXBRing_B
   * 
   * Enterprise CRBT codes: Enterprise CRBT codes can be queried in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). You can choose **Number Pool Management** > **Enterprise CRBT Management** to view enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXBRing_B":"1000****1","AXBRing_A":"1000****1"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      dtmfConfig: 'DtmfConfig',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      callTimeout: 'number',
      dtmfConfig: 'string',
      expectCity: 'string',
      expiration: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 9297B722-A016-43FB-B51A-E54050D9369D
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the phone numbers were bound.
   */
  secretBindDTO?: BindAxbResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxbResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAxbResponseBody;
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
      body: BindAxbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ASR model.
   * 
   * @example
   * 980abddb908f48e8b987cb2cd303****
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic speech recognition (ASR). Valid values:
   * 
   * *   **False** (default): disables ASR.
   * *   **True**: enables ASR.
   * 
   * @example
   * False
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Re-sets the phone number display logic in the AXG binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The status of call restrictions. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * Specifies the city to which phone number X to be selected belongs.
   * 
   * *   If no phone number for the specified city is available in the current phone number pool or this parameter is not specified, a phone number that belongs to another city is randomly selected from the current phone number pool and assigned as phone number X.
   * *   If Number X Assignment Mode is set to Strict Matching Mode and no phone number meets the requirement, the system displays an allocation error.
   * 
   * @example
   * hangzhou
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the AXG binding. The value is accurate to seconds.
   * 
   * >  The expiration time must be more than 1 minute later than the time when you call this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * The group ID in the AXG binding. You can view the group ID by using either of the following methods:
   * 
   * *   On the **Number Pool Management** page in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account), filter AXG privacy numbers and click **Number Group G Management** to view the group IDs of number groups G.****
   * *   If the [CreateAxgGroup](https://help.aliyun.com/document_detail/110250.html) operation is called to create number group G, the value of **GroupId** in the response of the CreateAxgGroup operation is specified as the value of the request parameter **GroupId** of the BindAxg operation.
   * 
   * >  Number group G must have one or more phone numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to record all calls made by the bound phone numbers.
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The extension field for the external business. This parameter is returned in a call record receipt.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @remarks
   * The ID of the external business.
   * 
   * @example
   * abcdef
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the AXG binding. Phone number A can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the AXG binding. If phone number A is used to call phone number X, the call is forwarded to phone number B. If you need to update phone number B, call the [UpdateSubscription](https://help.aliyun.com/document_detail/110253.html) operation.
   * 
   * Phone number B can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * @example
   * 139****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the AXG binding. If you do not specify this parameter, a random phone number is selected from the phone number pool based on the value of the **ExpectCity** parameter and is used as phone number X.
   * 
   * >  Phone number X is the phone number that you purchased in the Phone Number Protection console or by using the [BuySecretNo](https://help.aliyun.com/document_detail/110266.html) operation before you bind a phone number. Phone number X is used to forward calls.
   * 
   * @example
   * 139****0000
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sets the ringtone for enterprise Color Ring Back Tone (CRBT) in the AXG binding.
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXG binding: AXGRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXG binding: AXGRing_A
   * *   Ringtone setting when a phone number in number group G is used to call phone number X in the AXG binding: AXGRing_G
   * *   Enterprise CRBT codes: Enterprise CRBT codes can be queried in the Phone Number Protection console. You can choose **Number Pool Management > Enterprise CRBT Management** to view and manage enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXGRing_AB":"100000001","AXGRing_A":"100000002","AXGRing_G":"100000003"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the phone numbers were bound.
   */
  secretBindDTO?: BindAxgResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxgResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAxgResponseBody;
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
      body: BindAxgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ASR model. On the [Automatic Speech Recognition (ASR) Model Management](https://dyplsnext.console.aliyun.com/?spm=5176.12818093.categories-n-products.ddypls.22e616d0a0tEFC#/asr) page, you can view the ID of the ASR model.
   * 
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic speech recognition (ASR). Valid values:
   * 
   * *   **false** (default): disables ASR.
   * *   **true**: enables ASR.
   * 
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Re-sets the phone number display logic in the AXN binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The status of one-way call restrictions. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The maximum ringing duration for each number in sequential ringing. Unit: seconds.
   * 
   * @example
   * 10
   */
  callTimeout?: number;
  /**
   * @remarks
   * Specifies the city to which phone number X to be selected belongs.
   * 
   * *   If no phone number for the specified city is available in the current phone number pool or this parameter is not specified, a phone number that belongs to another city is randomly selected from the current phone number pool and assigned as phone number X.
   * *   If **Number X Assignment Mode** is set to **Strict Matching Mode** and no phone number meets the requirement, the system displays an allocation error.
   * 
   * @example
   * hangzhou
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the AXN binding. Unit: seconds.
   * 
   * >  The expiration time must be more than 60 seconds later than the time when you call this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-05 12:00:00
   */
  expiration?: string;
  extend?: string;
  /**
   * @remarks
   * Specifies whether to record all calls made by the bound phone numbers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The type of the phone number.
   * 
   * >  This parameter is applicable to the key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * @example
   * AXB_170
   */
  noType?: string;
  /**
   * @remarks
   * The extension field for the external business. This parameter is returned in a call record receipt.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @remarks
   * The ID of the external business.
   * 
   * @example
   * 34553330****
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the AXN binding. Phone number A can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the AXN binding. If phone number A is used to call phone number X, the call is forwarded to phone number B. Phone number B can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * >  If phone number B is not specified in the AXN binding, the system automatically generates a nonexistent number. If phone number A is used to call phone number X, the nonexistent number is returned. If you need to update phone number B, call the [UpdateSubscription](https://help.aliyun.com/document_detail/110253.html) operation.
   * 
   * @example
   * 138****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the AXN binding. Phone number X is the phone number that you purchased in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) or by using the [BuySecretNo](https://help.aliyun.com/document_detail/110266.html) operation before you bind a phone number. Phone number X is used to forward calls.
   * 
   * >  If you do not specify this parameter, a random phone number is selected from the phone number pool based on the value of the ExpectCity parameter and is used as phone number X.
   * 
   * @example
   * 139****0000
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console ](https://dypls.console.aliyun.com/dypls.htm#/account)and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * @example
   * FC2256****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sets the ringtone code for enterprise Color Ring Back Tone (CRBT) in the AXN extension binding.
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_A
   * *   Ringtone setting when an N-side number is used to call phone number X in the AXN extension binding: AXNRing_N
   * 
   * Enterprise CRBT codes: Enterprise CRBT codes can be queried in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). You can choose **Number Pool Management > Enterprise CRBT Management** to view enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXNRing_N":"100000001","AXNRing_A":"100000001"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      callTimeout: 'CallTimeout',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      extend: 'Extend',
      isRecordingEnabled: 'IsRecordingEnabled',
      noType: 'NoType',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      callTimeout: 'number',
      expectCity: 'string',
      expiration: 'string',
      extend: 'string',
      isRecordingEnabled: 'boolean',
      noType: 'string',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the phone numbers were bound.
   */
  secretBindDTO?: BindAxnResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxnResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAxnResponseBody;
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
      body: BindAxnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ASR model. On the [Automatic Speech Recognition (ASR) Model Management](https://dyplsnext.console.aliyun.com/?spm=5176.12818093.categories-n-products.ddypls.22e616d0a0tEFC#/asr) page, you can view the ID of the ASR model.
   * 
   * @example
   * 980abddb908f48e8b987cb2cd303****
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic speech recognition (ASR). Valid values:
   * 
   * *   **false** (default): disables ASR.
   * *   **true**: enables ASR.
   * 
   * @example
   * True
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Re-sets the phone number display logic in the AXN extension binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * The status of call restrictions. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * Specifies the city to which phone number X to be selected belongs.
   * 
   * *   If no phone number for the specified city is available in the current phone number pool or this parameter is not specified, a phone number that belongs to another city is randomly selected from the current phone number pool and assigned as phone number X.
   * *   If Number X Assignment Mode is set to Strict Matching Mode and no phone number meets the requirement, the system displays an allocation error.
   * 
   * @example
   * hangzhou
   */
  expectCity?: string;
  /**
   * @remarks
   * The expiration time of the AXN extension binding. The value is accurate to seconds.
   * 
   * >  The expiration time must be more than 1 minute later than the time when you call this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expiration?: string;
  extend?: string;
  /**
   * @remarks
   * The extension of phone number X. The extension is 1 to 3 digits in length.
   * 
   * >  If you specify Extension, you must also specify PhoneNoX.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * Specifies whether to record all calls made by the bound phone numbers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The extension field for the external business. This parameter is returned in a call record receipt.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  /**
   * @remarks
   * The ID of the external business.
   * 
   * @example
   * abcdef
   */
  outOrderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the AXN extension binding. Phone number A can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the AXN extension binding. When phone number A is used to call phone number X, the call is forwarded to phone number B. If you need to update phone number B, call the [UpdateSubscription](https://help.aliyun.com/document_detail/110253.html) operation.
   * 
   * Phone number B can be set to a mobile phone number or a landline phone number. The landline phone number must be added with an area code, and no hyphen is required between the area code and the landline phone number.
   * 
   * @example
   * 139****0000
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the AXN extension binding. If you do not specify this parameter, a random phone number is selected from the phone number pool based on the value of the **ExpectCity** parameter and is used as phone number X.
   * 
   * >  Phone number X is the phone number that you purchased in the Phone Number Protection console or by using the [BuySecretNo](https://help.aliyun.com/document_detail/110266.html) operation before you bind a phone number. Phone number X is used to forward calls.
   * 
   * @example
   * 139****0000
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Sets the ringtone for enterprise Color Ring Back Tone (CRBT) in the AXN extension binding.
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_A
   * *   Ringtone setting when an N-side number is used to call phone number X in the AXN extension binding: AXNRing_N
   * 
   * Enterprise CRBT codes: Enterprise CRBT codes can be queried in the Phone Number Protection console. You can choose **Number Pool Management > Enterprise CRBT Management** to view and manage enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXNRing_N":"100000001","AXNRing_A":"100000001"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      extend: 'Extend',
      extension: 'Extension',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      extend: 'string',
      extension: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 9297B722-A016-43FB-B51A-E54050D9369D
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the phone numbers were bound.
   */
  secretBindDTO?: BindAxnExtensionResponseBodySecretBindDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDTO: 'SecretBindDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDTO: BindAxnExtensionResponseBodySecretBindDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAxnExtensionResponseBody;
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
      body: BindAxnExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  axgBindList?: BindBatchAxgRequestAxgBindList[];
  ownerId?: number;
  /**
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindList: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindList: { 'type': 'array', 'itemType': BindBatchAxgRequestAxgBindList },
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  axgBindListShrink?: string;
  ownerId?: number;
  /**
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      axgBindListShrink: 'AxgBindList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axgBindListShrink: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponseBody extends $tea.Model {
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
   * 5DCCA8CD-6C0A-50B4-A496-B1D2AB48A1C3
   */
  requestId?: string;
  secretBindList?: BindBatchAxgResponseBodySecretBindList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindList: 'SecretBindList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindList: BindBatchAxgResponseBodySecretBindList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindBatchAxgResponseBody;
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
      body: BindBatchAxgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindXBRequest extends $tea.Model {
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 员工真实号码
   * 
   * This parameter is required.
   * 
   * @example
   * 18*******22
   */
  telB?: string;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  /**
   * @remarks
   * 客户自定义参数回调带回
   * 
   * @example
   * 000
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telB: 'TelB',
      telX: 'TelX',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telB: 'string',
      telX: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindXBResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 工作号关系绑定的唯一标识
   * 
   * @example
   * 435****456
   */
  authId?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * 工作号号码
   * 
   * @example
   * 18*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      authId: 'AuthId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      authId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindXBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindXBResponseBody;
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
      body: BindXBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies the home location of the phone number.
   * 
   * > 
   * 
   * *   The home location can be set only to a location in the Chinese mainland.
   * 
   * *   A phone number that starts with 95 does not have a home location. If you purchase a phone number that starts with 95, set this parameter to **Nationwide**.
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * Specifies whether to add the phone number to the pool of numbers that will be displayed during calls.
   * 
   * >  This parameter takes effect only for customers who have enabled the number display feature.
   * 
   * @example
   * true
   */
  displayPool?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The prefix of the phone number. If you specify the value of **SecretNo** when you purchase a phone number, a phone number starting with the specified prefix is selected.
   * 
   * >  You can specify up to 18 digits of the phone number prefix.
   * 
   * @example
   * 130
   */
  secretNo?: string;
  /**
   * @remarks
   * The type of the phone number. Valid values:
   * 
   * *   **1**: a phone number assigned by a virtual network operator, that is, a phone number that belongs to the 170 or 171 number segment.
   * *   **2**: a phone number provided by a carrier.
   * *   **3**: a phone number that starts with 95.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      displayPool: 'DisplayPool',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      displayPool: 'boolean',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 2D1AEB96-96D0-454E-B0DC-AE2A8DF08020
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the operation was called.
   */
  secretBuyInfoDTO?: BuySecretNoResponseBodySecretBuyInfoDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBuyInfoDTO: 'SecretBuyInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBuyInfoDTO: BuySecretNoResponseBodySecretBuyInfoDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BuySecretNoResponseBody;
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
      body: BuySecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillRequest extends $tea.Model {
  /**
   * @remarks
   * The cancellation reason.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"action\\":\\"UPDATE_DESC\\",\\"value\\":\\"The courier is unable to pick up the package.\\"}
   */
  cancelDesc?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * This parameter is required.
   * 
   * @example
   * 1145678823****
   */
  outerOrderCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cancelDesc: 'CancelDesc',
      outerOrderCode: 'OuterOrderCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelDesc: 'string',
      outerOrderCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CancelPickUpWaybillResponseBodyData;
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
   * 9FC30594-3841-43AD-9008-03393BCB5CD2
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
      data: CancelPickUpWaybillResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelPickUpWaybillResponseBody;
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
      body: CancelPickUpWaybillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigXRequest extends $tea.Model {
  /**
   * @remarks
   * 开/关呼叫能力状态‘0’：禁用‘1’：开启
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * 1898871967585852
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫：00-非透传：互相拨打时都显示工作号;10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号;默认为 00
   * 
   * @example
   * 0
   */
  GNFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCalls?: ConfigXRequestSequenceCalls[];
  /**
   * @remarks
   * 顺振模式：0-不顺振（默认）1-有条件顺振，先接续calledNo指定被叫，如果该被叫未能接通，再顺振sequenceCalls号码列表2-无条件顺振，不接续calledNo指定被叫，直接顺振sequenceCalls号码列表
   * 
   * @example
   * 0
   */
  sequenceMode?: string;
  /**
   * @remarks
   * 开/关短信功能状态‘0’：禁用；‘1’：开启；
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实用户0：不透传; 1：透传默认：0不透传
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      GNFlag: 'GNFlag',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sequenceCalls: 'SequenceCalls',
      sequenceMode: 'SequenceMode',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAbility: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      GNFlag: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sequenceCalls: { 'type': 'array', 'itemType': ConfigXRequestSequenceCalls },
      sequenceMode: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigXShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 开/关呼叫能力状态‘0’：禁用‘1’：开启
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * 1898871967585852
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫：00-非透传：互相拨打时都显示工作号;10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号;默认为 00
   * 
   * @example
   * 0
   */
  GNFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCallsShrink?: string;
  /**
   * @remarks
   * 顺振模式：0-不顺振（默认）1-有条件顺振，先接续calledNo指定被叫，如果该被叫未能接通，再顺振sequenceCalls号码列表2-无条件顺振，不接续calledNo指定被叫，直接顺振sequenceCalls号码列表
   * 
   * @example
   * 0
   */
  sequenceMode?: string;
  /**
   * @remarks
   * 开/关短信功能状态‘0’：禁用；‘1’：开启；
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实用户0：不透传; 1：透传默认：0不透传
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callAbility: 'CallAbility',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      GNFlag: 'GNFlag',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sequenceCallsShrink: 'SequenceCalls',
      sequenceMode: 'SequenceMode',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAbility: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      GNFlag: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sequenceCallsShrink: 'string',
      sequenceMode: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigXResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigXResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigXResponseBody;
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
      body: ConfigXResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of number group G. If the name of number group G is not specified, the ID of number group G is used as the name of number group G.
   * 
   * >  The value must be 1 to 128 characters in length.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  /**
   * @remarks
   * The phone numbers that you add to number group G. Separate multiple phone numbers with commas (,). A maximum of 200 phone numbers can be added to number group G.
   * 
   * @example
   * 1390000****,1380000****
   */
  numbers?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The remarks of number group G. The value must be 0 to 256 characters in length.
   * 
   * @example
   * test
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      numbers: 'string',
      ownerId: 'number',
      poolKey: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of number group G. The value of this parameter is required when the [BindAxg](https://help.aliyun.com/document_detail/110249.html) operation is called to add an AXG binding.
   * 
   * @example
   * 2000000000001
   */
  groupId?: number;
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
   * 635C0FDA-9EBC-43D7-B368-9F583C08A126
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAxgGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAxgGroupResponseBody;
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
      body: CreateAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequest extends $tea.Model {
  /**
   * @remarks
   * The end time of the door-to-door pickup in the appointment. The value of **AppointGotEndTime** is the value of **EndTime** of **AppointTimes** in **CpTimeSelectList** returned by the [CreatePickUpWaybillPreQuery](~~CreatePickUpWaybillPreQuery~~#resultMapping) operation.
   * 
   * >  This parameter is required when **BizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 12:00:00
   */
  appointGotEndTime?: string;
  /**
   * @remarks
   * The start time of the door-to-door pickup in the appointment. The value of **AppointGotStartTime** is the value of **StartTime** of **AppointTimes** in **CpTimeSelectList** returned by the [CreatePickUpWaybillPreQuery](~~CreatePickUpWaybillPreQuery~~#resultMapping) operation.
   * 
   * >  This parameter is required when **BizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 10:00:00
   */
  appointGotStartTime?: string;
  /**
   * @remarks
   * The pickup mode. Valid values:
   * 
   * *   **0** (default): real-time order.
   * *   **1**: appointment order.
   * 
   * @example
   * 0
   */
  bizType?: number;
  /**
   * @remarks
   * The address of the consignee.
   * 
   * This parameter is required.
   */
  consigneeAddress?: CreatePickUpWaybillRequestConsigneeAddress;
  /**
   * @remarks
   * The mobile phone number of the consignee.
   * 
   * >  Either ConsigneeMobile or ConsigneePhone must be set.
   * 
   * @example
   * 1580000****
   */
  consigneeMobile?: string;
  /**
   * @remarks
   * The name of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * Li
   */
  consigneeName?: string;
  /**
   * @remarks
   * The landline phone number of the consignee.
   * 
   * >  Either ConsigneeMobile or ConsigneePhone must be set.
   * 
   * @example
   * 0570000****
   */
  consigneePhone?: string;
  /**
   * @remarks
   * The code of the courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The items.
   */
  goodsInfos?: CreatePickUpWaybillRequestGoodsInfos[];
  /**
   * @remarks
   * The external channel sources.
   * 
   * This parameter is required.
   * 
   * @example
   * YUN_DIAN_SHANG
   */
  orderChannels?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * This parameter is required.
   * 
   * @example
   * 143234234266****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The additional information about the order. The additional information will be printed on the order.
   * 
   * @example
   * fragile
   */
  remark?: string;
  /**
   * @remarks
   * The address of the sender.
   * 
   * This parameter is required.
   */
  sendAddress?: CreatePickUpWaybillRequestSendAddress;
  /**
   * @remarks
   * The mobile phone number of the sender.
   * 
   * >  Either SendMobile or SendPhone must be set.
   * 
   * @example
   * 1596714****
   */
  sendMobile?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * Wang
   */
  sendName?: string;
  /**
   * @remarks
   * The landline phone number of the sender.
   * 
   * >  Either SendMobile or SendPhone must be set.
   * 
   * @example
   * 05718845****
   */
  sendPhone?: string;
  static names(): { [key: string]: string } {
    return {
      appointGotEndTime: 'AppointGotEndTime',
      appointGotStartTime: 'AppointGotStartTime',
      bizType: 'BizType',
      consigneeAddress: 'ConsigneeAddress',
      consigneeMobile: 'ConsigneeMobile',
      consigneeName: 'ConsigneeName',
      consigneePhone: 'ConsigneePhone',
      cpCode: 'CpCode',
      goodsInfos: 'GoodsInfos',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      remark: 'Remark',
      sendAddress: 'SendAddress',
      sendMobile: 'SendMobile',
      sendName: 'SendName',
      sendPhone: 'SendPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointGotEndTime: 'string',
      appointGotStartTime: 'string',
      bizType: 'number',
      consigneeAddress: CreatePickUpWaybillRequestConsigneeAddress,
      consigneeMobile: 'string',
      consigneeName: 'string',
      consigneePhone: 'string',
      cpCode: 'string',
      goodsInfos: { 'type': 'array', 'itemType': CreatePickUpWaybillRequestGoodsInfos },
      orderChannels: 'string',
      outerOrderCode: 'string',
      remark: 'string',
      sendAddress: CreatePickUpWaybillRequestSendAddress,
      sendMobile: 'string',
      sendName: 'string',
      sendPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The end time of the door-to-door pickup in the appointment. The value of **AppointGotEndTime** is the value of **EndTime** of **AppointTimes** in **CpTimeSelectList** returned by the [CreatePickUpWaybillPreQuery](~~CreatePickUpWaybillPreQuery~~#resultMapping) operation.
   * 
   * >  This parameter is required when **BizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 12:00:00
   */
  appointGotEndTime?: string;
  /**
   * @remarks
   * The start time of the door-to-door pickup in the appointment. The value of **AppointGotStartTime** is the value of **StartTime** of **AppointTimes** in **CpTimeSelectList** returned by the [CreatePickUpWaybillPreQuery](~~CreatePickUpWaybillPreQuery~~#resultMapping) operation.
   * 
   * >  This parameter is required when **BizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 10:00:00
   */
  appointGotStartTime?: string;
  /**
   * @remarks
   * The pickup mode. Valid values:
   * 
   * *   **0** (default): real-time order.
   * *   **1**: appointment order.
   * 
   * @example
   * 0
   */
  bizType?: number;
  /**
   * @remarks
   * The address of the consignee.
   * 
   * This parameter is required.
   */
  consigneeAddressShrink?: string;
  /**
   * @remarks
   * The mobile phone number of the consignee.
   * 
   * >  Either ConsigneeMobile or ConsigneePhone must be set.
   * 
   * @example
   * 1580000****
   */
  consigneeMobile?: string;
  /**
   * @remarks
   * The name of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * Li
   */
  consigneeName?: string;
  /**
   * @remarks
   * The landline phone number of the consignee.
   * 
   * >  Either ConsigneeMobile or ConsigneePhone must be set.
   * 
   * @example
   * 0570000****
   */
  consigneePhone?: string;
  /**
   * @remarks
   * The code of the courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The items.
   */
  goodsInfosShrink?: string;
  /**
   * @remarks
   * The external channel sources.
   * 
   * This parameter is required.
   * 
   * @example
   * YUN_DIAN_SHANG
   */
  orderChannels?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * This parameter is required.
   * 
   * @example
   * 143234234266****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The additional information about the order. The additional information will be printed on the order.
   * 
   * @example
   * fragile
   */
  remark?: string;
  /**
   * @remarks
   * The address of the sender.
   * 
   * This parameter is required.
   */
  sendAddressShrink?: string;
  /**
   * @remarks
   * The mobile phone number of the sender.
   * 
   * >  Either SendMobile or SendPhone must be set.
   * 
   * @example
   * 1596714****
   */
  sendMobile?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * Wang
   */
  sendName?: string;
  /**
   * @remarks
   * The landline phone number of the sender.
   * 
   * >  Either SendMobile or SendPhone must be set.
   * 
   * @example
   * 05718845****
   */
  sendPhone?: string;
  static names(): { [key: string]: string } {
    return {
      appointGotEndTime: 'AppointGotEndTime',
      appointGotStartTime: 'AppointGotStartTime',
      bizType: 'BizType',
      consigneeAddressShrink: 'ConsigneeAddress',
      consigneeMobile: 'ConsigneeMobile',
      consigneeName: 'ConsigneeName',
      consigneePhone: 'ConsigneePhone',
      cpCode: 'CpCode',
      goodsInfosShrink: 'GoodsInfos',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      remark: 'Remark',
      sendAddressShrink: 'SendAddress',
      sendMobile: 'SendMobile',
      sendName: 'SendName',
      sendPhone: 'SendPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointGotEndTime: 'string',
      appointGotStartTime: 'string',
      bizType: 'number',
      consigneeAddressShrink: 'string',
      consigneeMobile: 'string',
      consigneeName: 'string',
      consigneePhone: 'string',
      cpCode: 'string',
      goodsInfosShrink: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      remark: 'string',
      sendAddressShrink: 'string',
      sendMobile: 'string',
      sendName: 'string',
      sendPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreatePickUpWaybillResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * 9FC30594-3841-43AD-9008-03393BCB5CD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePickUpWaybillResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePickUpWaybillResponseBody;
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
      body: CreatePickUpWaybillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequest extends $tea.Model {
  /**
   * @remarks
   * The consignee information.
   * 
   * This parameter is required.
   */
  consigneeInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfo;
  /**
   * @remarks
   * The code of the courier company. If no courier company is specified, the system allocates a courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The identifier of the external channel source. It cannot contain underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  orderChannels?: string;
  /**
   * @remarks
   * The order number of the access system.
   * 
   * @example
   * 787DFHHDS989****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The estimated weight. Unit: gram.
   * 
   * >  If you need to query the estimated price, this parameter is required.
   * 
   * @example
   * 2000
   */
  preWeight?: string;
  /**
   * @remarks
   * The sender information.
   * 
   * This parameter is required.
   */
  senderInfo?: CreatePickUpWaybillPreQueryRequestSenderInfo;
  static names(): { [key: string]: string } {
    return {
      consigneeInfo: 'ConsigneeInfo',
      cpCode: 'CpCode',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      preWeight: 'PreWeight',
      senderInfo: 'SenderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consigneeInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfo,
      cpCode: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      preWeight: 'string',
      senderInfo: CreatePickUpWaybillPreQueryRequestSenderInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The consignee information.
   * 
   * This parameter is required.
   */
  consigneeInfoShrink?: string;
  /**
   * @remarks
   * The code of the courier company. If no courier company is specified, the system allocates a courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The identifier of the external channel source. It cannot contain underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  orderChannels?: string;
  /**
   * @remarks
   * The order number of the access system.
   * 
   * @example
   * 787DFHHDS989****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The estimated weight. Unit: gram.
   * 
   * >  If you need to query the estimated price, this parameter is required.
   * 
   * @example
   * 2000
   */
  preWeight?: string;
  /**
   * @remarks
   * The sender information.
   * 
   * This parameter is required.
   */
  senderInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      consigneeInfoShrink: 'ConsigneeInfo',
      cpCode: 'CpCode',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      preWeight: 'PreWeight',
      senderInfoShrink: 'SenderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consigneeInfoShrink: 'string',
      cpCode: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      preWeight: 'string',
      senderInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result set.
   */
  data?: CreatePickUpWaybillPreQueryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * 9FC30594-3841-43AD-9008-03393BCB5CD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePickUpWaybillPreQueryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePickUpWaybillPreQueryResponseBody;
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
      body: CreatePickUpWaybillPreQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignRequest extends $tea.Model {
  /**
   * @remarks
   * 收信人号码
   * 
   * This parameter is required.
   * 
   * @example
   * 178****3614
   */
  calledNo?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 发信人号码
   * 
   * This parameter is required.
   * 
   * @example
   * 150****6539
   */
  callingNo?: string;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNo: 'CalledNo',
      callerParentId: 'CallerParentId',
      callingNo: 'CallingNo',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNo: 'string',
      callerParentId: 'number',
      callingNo: 'string',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 短信接收者号码签名串(加到短信内容中供解析真实被叫号码)
   * 
   * @example
   * sign*****466
   */
  calledNoSign?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      calledNoSign: 'CalledNoSign',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      calledNoSign: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmsSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSmsSignResponseBody;
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
      body: CreateSmsSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAxgGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  groupId?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAxgGroupResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * 9297B722-A016-43FB-B51A-E54050D9369D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAxgGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAxgGroupResponseBody;
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
      body: DeleteAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistRequest extends $tea.Model {
  /**
   * @remarks
   * The phone numbers in the blacklist. A point-to-point blacklist has a pair of numbers separated by a colon (":"). A number pool blacklist or a platform blacklist has only one single number.
   * 
   * This parameter is required.
   * 
   * @example
   * 18252***383:18252***483
   */
  blackNo?: string;
  /**
   * @remarks
   * The blacklist type. Valid values:
   * 
   * *   **POINT_TO_POINT_BLACK**: point-to-point blacklist
   * *   **PARTNER_GLOBAL_NUMBER_BLACK**: number pool blacklist
   * 
   * This parameter is required.
   * 
   * @example
   * POINT_TO_POINT_BLACK
   */
  blackType?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC1232****
   */
  poolKey?: string;
  /**
   * @remarks
   * The remarks for the blacklist.
   * 
   * @example
   * fragile
   */
  remark?: string;
  /**
   * @remarks
   * The control on the call direction.
   * 
   * *   **PHONEA_REJECT**: The first phone number in the blacklist can be used to call the second phone number, but the second phone number in the blacklist cannot be used to call the first phone number.
   * *   **PHONEB_REJECT**: The first phone number in the blacklist cannot be used to call the second phone number, but the second phone number in the blacklist can be used to call the first phone number.
   * *   If this parameter is not specified, the two phone numbers in the blacklist cannot be used to call each other.
   * 
   * Valid values:
   * 
   * *   DUPLEX_REJECT
   * *   PHONEA_REJECT
   * *   PHONEB_REJECT
   * 
   * @example
   * PHONEA_REJECT
   */
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      blackType: 'BlackType',
      poolKey: 'PoolKey',
      remark: 'Remark',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      blackType: 'string',
      poolKey: 'string',
      remark: 'string',
      wayControl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretBlacklistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecretBlacklistResponseBody;
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
      body: DeleteSecretBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the call record.
   * 
   * You can log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view **Call Record ID** on the **Call Record Query** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 225625****
   */
  callId?: string;
  /**
   * @remarks
   * The call initiation time in the call record.
   * 
   * You can log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). View **Call Initiated At** on the **Call Record Query** page, or view the call_time field in the Call Detail Record (CDR) receipt.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  callTime?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * You can log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2267****
   */
  poolKey?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      poolKey: 'PoolKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      poolKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBody extends $tea.Model {
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
   * The ASR details.
   */
  data?: GetSecretAsrDetailResponseBodyData;
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
      data: GetSecretAsrDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretAsrDetailResponseBody;
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
      body: GetSecretAsrDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the call record.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view **Call Record ID** on the **Call Record Query** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 2568900****
   */
  callId?: string;
  /**
   * @remarks
   * The call initiation time in the call record.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). View **Call Initiated At** on the **Call Record Query** page, or view the call_time field in the Call Detail Record (CDR) receipt.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  callTime?: string;
  /**
   * @remarks
   * Specifies whether the verification on the binding ID is required.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  checkSubs?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC12256****
   */
  partnerKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      checkSubs: 'CheckSubs',
      ownerId: 'OwnerId',
      partnerKey: 'PartnerKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      checkSubs: 'boolean',
      ownerId: 'number',
      partnerKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The download URLs of the recording files.
   */
  data?: GetTotalPublicUrlResponseBodyData;
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
   * 1AB3CEF7-DCBE-488C-9C33-D180982CE031
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
      data: GetTotalPublicUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTotalPublicUrlResponseBody;
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
      body: GetTotalPublicUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigRequest extends $tea.Model {
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 开/关呼叫能力状态： ‘0’：禁用； ‘1’：开启；
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫： 00-非透传：互相拨打时都显示工作号; 10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号; 默认为 00
   * 
   * @example
   * 10
   */
  GNFlag?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCalls?: GetXConfigResponseBodySequenceCalls[];
  /**
   * @remarks
   * 顺振模式： 0-不顺振（默认） 1-有条件顺振，先接续calledNo指定被叫，如果该被叫未能接通，再顺振sequenceCalls号码列表 2-无条件顺振，不接续calledNo指定被叫，直接顺振sequenceCalls号码列表
   * 
   * @example
   * 0
   */
  sequenceMode?: string;
  /**
   * @remarks
   * 开/关短信功能状态： ‘0’：禁用；‘1’：开启；
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实用户 0：不透传; 1：透传 默认：0不透传
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * X号码
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      callAbility: 'CallAbility',
      code: 'Code',
      GNFlag: 'GNFlag',
      message: 'Message',
      sequenceCalls: 'SequenceCalls',
      sequenceMode: 'SequenceMode',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
      success: 'Success',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      callAbility: 'string',
      code: 'string',
      GNFlag: 'string',
      message: 'string',
      sequenceCalls: { 'type': 'array', 'itemType': GetXConfigResponseBodySequenceCalls },
      sequenceMode: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
      success: 'boolean',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetXConfigResponseBody;
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
      body: GetXConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigRequest extends $tea.Model {
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 开/关呼叫能力状态： ‘0’：禁用； ‘1’：开启；
   * 
   * @example
   * 0
   */
  callAbility?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 是否透传来显为真实主叫： 00-非透传：互相拨打时都显示工作号; 10-透传：A客户为主叫时,B员工的来显为客户A号码;B员工为主叫时,A客户的来显为工作号; 默认为 00
   * 
   * @example
   * 00
   */
  GNFlag?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 企业名片规则控制参数
   */
  reachJson?: GetXDefaultConfigResponseBodyReachJson[];
  /**
   * @remarks
   * 顺振控制参数
   */
  sequenceCalls?: GetXDefaultConfigResponseBodySequenceCalls[];
  /**
   * @remarks
   * 顺振结束时间 格式：HH:mm:ss 18:00:00
   * 
   * @example
   * 09:01:00
   */
  sequenceEndTime?: string;
  /**
   * @remarks
   * 顺振开启时间 格式：HH:mm:ss 09:00:00
   * 
   * @example
   * 09:00:00
   */
  sequenceStartTime?: string;
  /**
   * @remarks
   * 开/关短信功能状态： ‘0’：禁用； ‘1’：开启；
   * 
   * @example
   * 0
   */
  smsAbility?: string;
  /**
   * @remarks
   * 是否透传来显为真实用户 0：不透传; 1：透传 默认：0不透传
   * 
   * @example
   * 0
   */
  smsSignMode?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      callAbility: 'CallAbility',
      code: 'Code',
      GNFlag: 'GNFlag',
      message: 'Message',
      reachJson: 'ReachJson',
      sequenceCalls: 'SequenceCalls',
      sequenceEndTime: 'SequenceEndTime',
      sequenceStartTime: 'SequenceStartTime',
      smsAbility: 'SmsAbility',
      smsSignMode: 'SmsSignMode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      callAbility: 'string',
      code: 'string',
      GNFlag: 'string',
      message: 'string',
      reachJson: { 'type': 'array', 'itemType': GetXDefaultConfigResponseBodyReachJson },
      sequenceCalls: { 'type': 'array', 'itemType': GetXDefaultConfigResponseBodySequenceCalls },
      sequenceEndTime: 'string',
      sequenceStartTime: 'string',
      smsAbility: 'string',
      smsSignMode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetXDefaultConfigResponseBody;
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
      body: GetXDefaultConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListXTelephonesRequest extends $tea.Model {
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 页码从1开始
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListXTelephonesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 数据集合
   */
  data?: ListXTelephonesResponseBodyData[];
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 6
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * 符合查询条件的总数量
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListXTelephonesResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListXTelephonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListXTelephonesResponseBody;
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
      body: ListXTelephonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The private number that you want to lock. You must enter a complete mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1300000****
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 2D1AEB96-96D0-454E-B0DC-AE2A8DF08020
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSecretNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LockSecretNoResponseBody;
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
      body: LockSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The group ID in the AXG binding.
   * 
   * You can view the group ID by using either of the following methods:
   * 
   * *   On the **Number Pool Management** page in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account), filter AXG private numbers and click **Number Group G Management** to view the group IDs of number groups G.****
   * *   If the [CreateAxgGroup](https://help.aliyun.com/document_detail/110250.html) operation is called to create number group G, the value of **GroupId** in the response of the CreateAxgGroup operation is specified as the value of the request parameter **GroupId** of the OperateAxgGroup operation.
   * 
   * >  Number group G must have one or more phone numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  groupId?: number;
  /**
   * @remarks
   * The phone numbers that you add to number group G. Separate the phone numbers with commas (,). You can add up to 200 phone numbers at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****,1380000****
   */
  numbers?: string;
  /**
   * @remarks
   * The type of the operation on number group G. Valid values:
   * 
   * *   **addNumbers**: adds phone numbers to number group G.
   * *   **deleteNumbers**: deletes phone numbers from number group G.
   * *   **overwriteNumbers**: replaces all phone numbers in number group G. All the original phone numbers are deleted from number group G, and new phone numbers are added to number group G.
   * 
   * > 
   * 
   * *   When you replace all phone numbers in number group G, the quantity of original phone numbers in number group G cannot exceed 200.
   * 
   * *   You can add up to 200 phone numbers to number group G at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * addNumbers
   */
  operateType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      numbers: 'Numbers',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      numbers: 'string',
      operateType: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 986BCB6D-C9BF-42F9-91CE-3A9901233D36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAxgGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateAxgGroupResponseBody;
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
      body: OperateAxgGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoRequest extends $tea.Model {
  /**
   * @remarks
   * The phone number to be added to or deleted from the blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * 150****0000
   */
  blackNo?: string;
  /**
   * @remarks
   * The type of the operation on the phone number. Valid values:
   * 
   * *   **AddBlack**: adds the phone number to the blacklist.
   * *   **DeleteBlack**: deletes the phone number from the blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * AddBlack
   */
  operateType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * abcdef
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      operateType: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 2D1AEB96-96D0-454E-B0DC-AE2A8DF08020
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBlackNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateBlackNoResponseBody;
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
      body: OperateBlackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoRequest extends $tea.Model {
  /**
   * @remarks
   * The cabinet number.
   * 
   * @example
   * 25689****
   */
  cabinetNo?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number X returned by the API operation for creating a binding.
   * 
   * @example
   * 1710000****
   */
  phoneNoX?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tracking number.
   * 
   * This parameter is required.
   * 
   * @example
   * 22573****
   */
  trackNo?: string;
  static names(): { [key: string]: string } {
    return {
      cabinetNo: 'CabinetNo',
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trackNo: 'trackNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinetNo: 'string',
      ownerId: 'number',
      phoneNoX: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trackNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * The information returned after the phone numbers were bound.
   */
  module?: QueryPhoneNoAByTrackNoResponseBodyModule[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': QueryPhoneNoAByTrackNoResponseBodyModule },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPhoneNoAByTrackNoResponseBody;
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
      body: QueryPhoneNoAByTrackNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the call record. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view **Call Record ID** on the **Call Record Query** page.
   * 
   * This parameter is required.
   * 
   * @example
   * abcedf1234
   */
  callId?: string;
  /**
   * @remarks
   * The call initiation time in the call record. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). View **Call Initiated At** on the **Call Record Query** page, or view the call_time field in the Call Detail Record (CDR) receipt.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  callTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * *   **AXB_170**.
   * *   **AXN_170**.
   * *   **AXN_95**.
   * *   **AXN_EXTENSION_REUSE**
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      ownerId: 'number',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The download URL of the recording file. The download URL is valid for 2 hours.
   * 
   * @example
   * http://secret-axb-reco****cn-shanghai.aliyuncs.com/1000000820257625_66647243838006067251551752068865.mp3?Expires=155175****&OSSAccessKeyId=LTAIP00vvvv****v&Signature=tK6Yq9KusU4n%2BZ****7lg4/WmEA%3D
   */
  downloadUrl?: string;
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
   * 1AB3CEF7-DCBE-488C-9C33-D180982CE031
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadUrl: 'DownloadUrl',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadUrl: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordFileDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRecordFileDownloadUrlResponseBody;
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
      body: QueryRecordFileDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2258****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The private number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 066E6E47-04CB-4774-A976-4F73CB76D4A3
   */
  requestId?: string;
  /**
   * @remarks
   * The attributes of the phone number.
   */
  secretNoInfoDTO?: QuerySecretNoDetailResponseBodySecretNoInfoDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretNoInfoDTO: 'SecretNoInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretNoInfoDTO: QuerySecretNoDetailResponseBodySecretNoInfoDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySecretNoDetailResponseBody;
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
      body: QuerySecretNoDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainRequest extends $tea.Model {
  /**
   * @remarks
   * The home location of the phone number.
   * 
   * *   If **SpecId** is set to 1 or 2, you can specify the **City** parameter to query the quantity of available phone numbers.
   * 
   * 1.  You can enter a single city name to perform a query.
   * 2.  You can enter National to query the quantity of remaining phone numbers available in the Chinese mainland for online purchase.
   * 3.  You can enter National List to query the cities with available phone numbers and the quantities of remaining phone numbers in the Chinese mainland. Cities without available phone numbers will not be returned.
   * 
   * *   If **SpecId** is set to 3, home locations are not distinguished for phone numbers that start with 95 and only the quantity of all the remaining phone numbers that start with 95 and are available for online purchase can be queried. If SpecId is set to 3, **City** must be set to **Nationwide**.
   * 
   * >  Home locations can be set to only locations in the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The prefix of the phone number. When you call the QuerySecretNoRemain operation with **SecretNo** specified, the quantity of remaining phone numbers with the specified prefix that are available for online purchase is queried.
   * 
   * Up to 18 digits of a phone number prefix can be specified.
   * 
   * @example
   * 130
   */
  secretNo?: string;
  /**
   * @remarks
   * The type of the phone number. Valid values:
   * 
   * *   **1**: a phone number assigned by a virtual network operator, that is, a phone number that belongs to the 170 or 171 number segment.
   * *   **2**: a phone number provided by a carrier.
   * *   **3**: a phone number that starts with 95.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 9FC30594-3841-43AD-9008-03393BCB5CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the operation was called.
   */
  secretRemainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretRemainDTO: 'SecretRemainDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretRemainDTO: QuerySecretNoRemainResponseBodySecretRemainDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySecretNoRemainResponseBody;
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
      body: QuerySecretNoRemainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySoundRecordRequest extends $tea.Model {
  /**
   * @remarks
   * 本次呼叫唯一id
   * 
   * This parameter is required.
   * 
   * @example
   * ac445343254
   */
  callId?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySoundRecordResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 通话录音url路径，最大长度1000，有效期1小时
   * 
   * @example
   * http://www.***.com/temepl/a.mp3
   */
  fileUrl?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      fileUrl: 'FileUrl',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      fileUrl: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySoundRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySoundRecordResponseBody;
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
      body: QuerySoundRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The private number in the binding, that is, phone number X.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dyplsnext.console.aliyun.com/overview) and view the key of the phone number pool on the Number Pool Management page.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. The value OK indicates that the request was successful.
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
   * E7F99446-8191-43C0-99B5-F58A6AEAD779
   */
  requestId?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 11111111****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubsIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySubsIdResponseBody;
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
      body: QuerySubsIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The private number in the binding, that is, phone number X.
   * 
   * This parameter is required.
   * 
   * @example
   * 13900001234
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * *   **AXB_170**
   * *   **AXN_170**
   * *   **AXN_95**
   * *   **AXN_EXTENSION_REUSE**
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * Log on to the Phone Number Protection console, choose **Number and Number Pool** > **Number Management**. On the Number Management page, select the desired record and click Details to view the binding ID. Alternatively, you can view the value of the **SubsId** parameter returned by an API operation for a phone number binding such as [BindAxb](https://help.aliyun.com/document_detail/110248.html). The value of this parameter indicates a binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000076879****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 066E6E47-04CB-4774-A976-4F73CB76D4A3
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned after the QuerySubscriptionDetail operation was called.
   */
  secretBindDetailDTO?: QuerySubscriptionDetailResponseBodySecretBindDetailDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretBindDetailDTO: 'SecretBindDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretBindDetailDTO: QuerySubscriptionDetailResponseBodySecretBindDetailDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySubscriptionDetailResponseBody;
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
      body: QuerySubscriptionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The prefix of phone numbers. When you call the ReleaseSecretNo operation with **SecretNo** specified, the system performs fuzzy matching against phone numbers based on the prefix.
   * 
   * >  Up to 18 digits of a phone number prefix can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * 130
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 986BCB6D-C9BF-42F9-91CE-3A990121232
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseSecretNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseSecretNoResponseBody;
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
      body: ReleaseSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnBindAXBRequest extends $tea.Model {
  /**
   * @remarks
   * bindId绑定关系AXB唯一id
   * 
   * This parameter is required.
   * 
   * @example
   * 4534543
   */
  bindId?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bindId: 'BindId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnBindAXBResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnBindAXBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnBindAXBResponseBody;
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
      body: UnBindAXBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnBindXBRequest extends $tea.Model {
  /**
   * @remarks
   * authId绑定关系BX唯一id
   * 
   * This parameter is required.
   * 
   * @example
   * 34*****46
   */
  authId?: string;
  /**
   * @remarks
   * 客户uid
   * 
   * @example
   * -
   */
  callerParentId?: number;
  /**
   * @remarks
   * 号码池key
   * 
   * This parameter is required.
   * 
   * @example
   * FC5**********************a1a
   */
  customerPoolKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * 请求去重ID, reqId最大长度为20位,接入方需要保持原子性
   * 
   * This parameter is required.
   * 
   * @example
   * 564**********879
   */
  reqId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * X号码
   * 
   * This parameter is required.
   * 
   * @example
   * 17*******22
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      callerParentId: 'CallerParentId',
      customerPoolKey: 'CustomerPoolKey',
      ownerId: 'OwnerId',
      reqId: 'ReqId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      callerParentId: 'number',
      customerPoolKey: 'string',
      ownerId: 'number',
      reqId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      telX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnBindXBResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnBindXBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnBindXBResponseBody;
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
      body: UnBindXBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Fixed value: **AXB_170**.
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The private number, that is, phone number X specified in an API operation for a phone number binding such as [BindAXG](https://help.aliyun.com/document_detail/110249.html) or automatically assigned after such an operation is called.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * Log on to the Phone Number Protection console, choose **Number and Number Pool** > **Number Management**. On the Number Management page, select the desired record and click Details to view the binding ID. Alternatively, you can view the value of the **SubsId** parameter returned by an API operation for a phone number binding such as BindAxb. The value of this parameter indicates a binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1************2
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * true
   */
  chargeId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 986BCB6D-C9BF-42F9-91CE-3A9901233D36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeId: 'ChargeId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindSubscriptionResponseBody;
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
      body: UnbindSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2256****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The private number that you want to unlock. You must enter a complete mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1300000****
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 2D1AEB96-96D0-454E-B0DC-AE2A8DF08020
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSecretNoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockSecretNoResponseBody;
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
      body: UnlockSecretNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ASR model.
   * 
   * @example
   * 980abddb908f48e8b987cb2cd303****
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic speech recognition (ASR). Valid values:
   * 
   * *   **false** (default): disables ASR.
   * *   **true**: enables ASR.
   * 
   * @example
   * false
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * Re-sets the phone number display logic in the phone number binding. Fixed value: **1**, indicating that phone number X is displayed on both the calling phone and the called phone.
   * 
   * >  Due to the regulatory restrictions imposed by carriers, the setting to display real phone numbers during calls does not take effect.
   * 
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @remarks
   * One-way call restrictions. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * *   **CONTROL_CLEAR_DISABLE**: The call restrictions are cleared.
   * 
   * >  This parameter is required when **OperateType** is set to **updateCallRestrict**.
   * 
   * @example
   * CONTROL_BX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * Re-sets the expiration time of the phone number binding.
   * 
   * > 
   * 
   * *   This parameter is required when **OperateType** is set to **updateExpire**.
   * 
   * *   The expiration time must be more than 1 minute later than the time when you call this API operation.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expiration?: string;
  /**
   * @remarks
   * The ID of number group G in the phone number binding.
   * 
   * >  This parameter is required when **OperateType** is set to **updateAxgGroup**.
   * 
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @remarks
   * Re-sets the recording status in the phone number binding.
   * 
   * >  This parameter does not have a default value. If you do not specify this parameter, the value of the corresponding field is not updated.
   * 
   * @example
   * true
   */
  isRecordingEnabled?: boolean;
  /**
   * @remarks
   * The operation to modify the phone number binding. Valid values:
   * 
   * *   **updateNoA**: modifies phone number A.
   * *   **updateNoB**: modifies phone number B.
   * *   **updateExpire**: modifies the validity period of the binding.
   * *   **updateAxgGroup**: modifies number group G.
   * *   **updateCallRestrict**: modifies one-way call restrictions.
   * *   **updateCallDisplayType**: updates the number display logic for calls.
   * *   **updateOutId**: updates the value of the OutId parameter.
   * *   **updateIsRecordingEnabled**: updates the status of the recording feature in the binding.
   * 
   * This parameter is required.
   * 
   * @example
   * updateNoA
   */
  operateType?: string;
  /**
   * @remarks
   * Re-sets the value of the OutId parameter in the phone number binding.
   * 
   * @example
   * abcdef
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number A in the phone number binding.
   * 
   * >  This parameter is required when **OperateType** is set to **updateNoA**.
   * 
   * @example
   * 1390000****
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the phone number binding.
   * 
   * >  This parameter is required when **OperateType** is set to **updateNoB**.
   * 
   * @example
   * 1390000****
   */
  phoneNoB?: string;
  /**
   * @remarks
   * Phone number X in the phone number binding.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC122356****
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * *   **AXB_170**
   * *   **AXN_170**
   * *   **AXN_95**
   * *   **AXN_EXTENSION_REUSE**
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Updates the ringtone code for enterprise Color Ring Back Tone (CRBT) in the phone number binding.
   * 
   * AXB product:
   * 
   * *   Ringtone setting when phone number A is used to call phone number X in the AXB binding: AXBRing_A
   * *   Ringtone setting when phone number B is used to call phone number X in the AXB binding: AXBRing_B
   * 
   * AXN product:
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXN extension binding: AXNRing_A
   * *   Ringtone setting when phone number N is used to call phone number X in the AXN extension binding: AXNRing_N
   * 
   * AXG product:
   * 
   * *   Ringtone setting (with a callback number) when phone number A is used to call phone number X in the AXG binding: AXGRing_AB
   * *   Ringtone setting (without a callback number) when phone number A is used to call phone number X in the AXG binding: AXGRing_A
   * *   Ringtone setting when a phone number in number group G is used to call phone number X in the AXG binding: AXGRing_G
   * 
   * Enterprise CRBT codes: Enterprise CRBT codes can be queried in the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). You can choose **Number Pool Management** > **Enterprise CRBT Management** to view and manage enterprise CRBT codes. You can also upload, delete, or perform other operations on enterprise CRBT codes.
   * 
   * >  The bound enterprise CRBTs are preferentially used. If no enterprise CRBT is set or the setting does not take effect, the enterprise CRBTs at the phone number pool level are used.
   * 
   * @example
   * {"AXBRing_B":"100000001","AXBRing_A":"100000001"}
   */
  ringConfig?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account), choose **Number and Number Pool** > **Number Management**. On the Number Management page, select the desired record and click Details to view the binding ID. Alternatively, you can view the value of the **SubsId** parameter returned by an API operation for a phone number binding such as BindAxb. The value of this parameter indicates a binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000076879****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      operateType: 'OperateType',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringConfig: 'RingConfig',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      operateType: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringConfig: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
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
   * 986BCB6D-C9BF-42F9-91CE-3A9901233D36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSubscriptionResponseBody;
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
      body: UpdateSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxbResponseBodySecretBindDTO extends $tea.Model {
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * >  The BindAxb operation does not involve an extension. Ignore this parameter.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 139****0000
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 1**************3
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxgResponseBodySecretBindDTO extends $tea.Model {
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * >  The BindAxg operation does not involve an extension. Ignore this parameter.
   * 
   * @example
   * 139****0000
   */
  extension?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 139****0000
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 1************3
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnResponseBodySecretBindDTO extends $tea.Model {
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * >  The BindAxn operation does not involve an extension. Ignore this parameter.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 139****0000
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 1***************3
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAxnExtensionResponseBodySecretBindDTO extends $tea.Model {
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 139*****0000
   */
  secretNo?: string;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 1***************3
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgRequestAxgBindList extends $tea.Model {
  /**
   * @example
   * 7ee372834d2f4cc7ac0d0ab2d0ae1aac
   */
  ASRModelId?: string;
  /**
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @example
   * 1
   */
  callDisplayType?: number;
  /**
   * @example
   * CONTROL_AX_DISABLE
   */
  callRestrict?: string;
  expectCity?: string;
  /**
   * @example
   * 2022-07-11 01:05:15
   */
  expiration?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @example
   * False
   */
  isRecordingEnabled?: boolean;
  /**
   * @example
   * 18223ad447910fd
   */
  outId?: string;
  /**
   * @example
   * 20220824021816883677
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13333333333
   */
  phoneNoA?: string;
  /**
   * @example
   * 13333333333
   */
  phoneNoB?: string;
  /**
   * @example
   * 13333333333
   */
  phoneNoX?: string;
  /**
   * @example
   * {\\"AXBRing_B\\":\\"100000002\\",\\"AXBRing_A\\":\\"100000001\\"}
   */
  ringConfig?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callDisplayType: 'CallDisplayType',
      callRestrict: 'CallRestrict',
      expectCity: 'ExpectCity',
      expiration: 'Expiration',
      groupId: 'GroupId',
      isRecordingEnabled: 'IsRecordingEnabled',
      outId: 'OutId',
      outOrderId: 'OutOrderId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      ringConfig: 'RingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callDisplayType: 'number',
      callRestrict: 'string',
      expectCity: 'string',
      expiration: 'string',
      groupId: 'string',
      isRecordingEnabled: 'boolean',
      outId: 'string',
      outOrderId: 'string',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      ringConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponseBodySecretBindListSecretBind extends $tea.Model {
  /**
   * @example
   * isv.INVALID_PARAMETERS
   */
  code?: string;
  /**
   * @example
   * 257
   */
  extension?: string;
  /**
   * @example
   * 1234
   */
  groupId?: string;
  /**
   * @example
   * ringConfig invalid
   */
  message?: string;
  /**
   * @example
   * 13333333333
   */
  phoneNoA?: string;
  /**
   * @example
   * 13333333333
   */
  secretNo?: string;
  /**
   * @example
   * 1000085060515673
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extension: 'Extension',
      groupId: 'GroupId',
      message: 'Message',
      phoneNoA: 'PhoneNoA',
      secretNo: 'SecretNo',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extension: 'string',
      groupId: 'string',
      message: 'string',
      phoneNoA: 'string',
      secretNo: 'string',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindBatchAxgResponseBodySecretBindList extends $tea.Model {
  secretBind?: BindBatchAxgResponseBodySecretBindListSecretBind[];
  static names(): { [key: string]: string } {
    return {
      secretBind: 'SecretBind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretBind: { 'type': 'array', 'itemType': BindBatchAxgResponseBodySecretBindListSecretBind },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuySecretNoResponseBodySecretBuyInfoDTO extends $tea.Model {
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 1390000****
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPickUpWaybillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * none
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * none
   */
  errorMsg?: string;
  /**
   * @remarks
   * The cancellation result.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the cancellation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigXRequestSequenceCalls extends $tea.Model {
  /**
   * @remarks
   * 顺振提示音放音编号，格式如callNoPlayCode
   * 
   * @example
   * 01
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * 顺振被叫号码
   * 
   * @example
   * 18*******33
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * 接通后主被叫放音编号，格式如calledPlayCode
   * 
   * @example
   * 02
   */
  sequenceCalledPlayCode?: string;
  static names(): { [key: string]: string } {
    return {
      sequenceCallNoPlayCode: 'SequenceCallNoPlayCode',
      sequenceCalledNo: 'SequenceCalledNo',
      sequenceCalledPlayCode: 'SequenceCalledPlayCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceCallNoPlayCode: 'string',
      sequenceCalledNo: 'string',
      sequenceCalledPlayCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestConsigneeAddress extends $tea.Model {
  /**
   * @remarks
   * The detailed address of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the consignee is located.
   * 
   * This parameter is required.
   * 
   * @example
   * xihu
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the consignee is located.
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the consignee is located.
   * 
   * This parameter is required.
   * 
   * @example
   * zhejiang
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the consignee is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestGoodsInfos extends $tea.Model {
  /**
   * @remarks
   * The item name.
   * 
   * @example
   * zhang
   */
  name?: string;
  /**
   * @remarks
   * The item quantity.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * The item weight. Unit: gram.
   * 
   * @example
   * 1000
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      quantity: 'Quantity',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quantity: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestSendAddress extends $tea.Model {
  /**
   * @remarks
   * The detailed address of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the sender is located.
   * 
   * This parameter is required.
   * 
   * @example
   * wenjiang
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the sender is located.
   * 
   * This parameter is required.
   * 
   * @example
   * chengdu
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the sender is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Sichuan
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the sender is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The code of the courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * none
   */
  errorMsg?: string;
  /**
   * @remarks
   * The pickup code.
   * 
   * @example
   * 3524
   */
  gotCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 77312345629****
   */
  mailNo?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      cpCode: 'CpCode',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      gotCode: 'GotCode',
      mailNo: 'MailNo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpCode: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      gotCode: 'string',
      mailNo: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo extends $tea.Model {
  /**
   * @remarks
   * The detailed address of the consignee.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the consignee is located.
   * 
   * @example
   * chang,an
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the consignee is located.
   * 
   * @example
   * Xi,an
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the consignee is located.
   * 
   * @example
   * Shanxi
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the consignee is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestConsigneeInfo extends $tea.Model {
  /**
   * @remarks
   * The address of the consignee.
   */
  addressInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo;
  /**
   * @remarks
   * The mobile phone number of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * Li
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo extends $tea.Model {
  /**
   * @remarks
   * The detailed address of the sender.
   * 
   * @example
   * XX community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the sender is located.
   * 
   * @example
   * xihu
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the sender is located.
   * 
   * @example
   * hangzhou
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the sender is located.
   * 
   * @example
   * zhejiang
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the sender is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestSenderInfo extends $tea.Model {
  /**
   * @remarks
   * The address of the sender.
   */
  addressInfo?: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo;
  /**
   * @remarks
   * The mobile phone number of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * Wang
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList extends $tea.Model {
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The tip displayed when the scheduled pickup is not available.
   * 
   * @example
   * Appointment Full
   */
  selectDisableTip?: string;
  /**
   * @remarks
   * Indicates whether the time range can be selected for the scheduled pickup.
   * 
   * @example
   * true
   */
  selectable?: boolean;
  /**
   * @remarks
   * The beginning of the time range.
   * 
   * @example
   * 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes extends $tea.Model {
  /**
   * @remarks
   * The date in the YYYY-MM-DD format.
   * 
   * @example
   * 2022-04-28
   */
  date?: string;
  /**
   * @remarks
   * Indicates whether the date is selectable.
   * 
   * @example
   * true
   */
  dateSelectable?: boolean;
  /**
   * @remarks
   * The time range for the scheduled pickup for this date.
   */
  timeList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList[];
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateSelectable: 'DateSelectable',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateSelectable: 'boolean',
      timeList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime extends $tea.Model {
  /**
   * @remarks
   * The name of the real-time order type.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  /**
   * @remarks
   * The tip displayed when the real-time order cannot be placed.
   * 
   * @example
   * Exceeding the real-time ordering time range.
   */
  selectDisableTip?: string;
  /**
   * @remarks
   * Indicates whether the real-time order can be placed after the deadline for placing a real-time order is reached.
   * 
   * @example
   * false
   */
  selectable?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList extends $tea.Model {
  /**
   * @remarks
   * The available time for the scheduled pickup. If the current courier company cannot accept the scheduled pickup, this field is left empty.
   */
  appointTimes?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes[];
  /**
   * @remarks
   * The estimated price. Unit: CNY. The value is accurate to two decimal places. The value of this parameter is displayed if an estimated weight is specified.
   * 
   * @example
   * 12.50
   */
  prePrice?: string;
  /**
   * @remarks
   * The information about whether the real-time order can be selected.
   */
  realTime?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime;
  static names(): { [key: string]: string } {
    return {
      appointTimes: 'AppointTimes',
      prePrice: 'PrePrice',
      realTime: 'RealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointTimes: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes },
      prePrice: 'string',
      realTime: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The information about whether the courier company can accept the order.
   */
  cpTimeSelectList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * none
   */
  errorMsg?: string;
  /**
   * @remarks
   * The response content.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpTimeSelectList: 'CpTimeSelectList',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpTimeSelectList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList },
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBodyDataSentences extends $tea.Model {
  /**
   * @remarks
   * The start time offset of the sentence. Unit: milliseconds.
   * 
   * @example
   * 1020
   */
  beginTime?: number;
  /**
   * @remarks
   * The ID of the audio track to which the sentence belongs.
   * 
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @remarks
   * The emotion value. Value range: 1 to 10. The higher the value, the stronger the emotion.
   * 
   * @example
   * 5.7
   */
  emotionValue?: string;
  /**
   * @remarks
   * The end time offset of the sentence. Unit: milliseconds.
   * 
   * @example
   * 1770
   */
  endTime?: number;
  /**
   * @remarks
   * The silence duration between the current sentence and the previous sentence. Unit: seconds.
   * 
   * @example
   * 0
   */
  silenceDuration?: number;
  /**
   * @remarks
   * The average speech rate of the sentence. Unit: number of words per minute.
   * 
   * @example
   * 80
   */
  speechRate?: number;
  /**
   * @remarks
   * The recognition result of the sentence.
   * 
   * @example
   * Hello
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'string',
      endTime: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The total duration of the audio file that was recognized. Unit: milliseconds.
   * 
   * @example
   * 10944
   */
  bizDuration?: number;
  /**
   * @remarks
   * The ID of the business process.
   * 
   * @example
   * 435ee78c7a019650@!FC100000074672458@!2020061522****
   */
  businessId?: string;
  /**
   * @remarks
   * The business keyword.
   * 
   * @example
   * JCGTncltuNao****
   */
  businessKey?: string;
  /**
   * @remarks
   * The status code. The status code 21050000 indicates that the request was successful.
   * 
   * @example
   * 21050000
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * SUCCESS
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8d2329d407a83447a83be441681f4872ac74nE
   */
  requestId?: string;
  /**
   * @remarks
   * The ASR result.
   */
  sentences?: GetSecretAsrDetailResponseBodyDataSentences[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * asrResult
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizDuration: 'BizDuration',
      businessId: 'BusinessId',
      businessKey: 'BusinessKey',
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      sentences: 'Sentences',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDuration: 'number',
      businessId: 'string',
      businessKey: 'string',
      code: 'string',
      msg: 'string',
      requestId: 'string',
      sentences: { 'type': 'array', 'itemType': GetSecretAsrDetailResponseBodyDataSentences },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTotalPublicUrlResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The download URL of the recorded call.
   * 
   * >  The download URL of the recorded call is valid for 30 days.
   * 
   * @example
   * http://secret-axb-reco****cn-shanghai.aliyuncs.com/1000000820257625_66647243838006067251551752068865.mp3?Expires=1551****07&OSSAccessKeyId=LTAIP00vvvv****v&Signature=tK6Yq9KusU4n%2BZQWX****4/WmEA%3D
   */
  phonePublicUrl?: string;
  /**
   * @remarks
   * The download URL of the recorded ringing tone.
   * 
   * >  The download URL of the recorded ringing tone is valid for 30 days.
   * 
   * @example
   * http://secret-ab-reco****cn-shanghai.aliyuncs.com/1000000820257625_66647243838006067251551752068865.mp3?Expires=155175****&OSSAccessKeyId=LTAIP00vvv****vv&Signature=tK6Yq9KusU4n%2BZQW****g4/WmEA%3D
   */
  ringPublicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      phonePublicUrl: 'PhonePublicUrl',
      ringPublicUrl: 'RingPublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phonePublicUrl: 'string',
      ringPublicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXConfigResponseBodySequenceCalls extends $tea.Model {
  /**
   * @remarks
   * 顺振提示音放音编号，格式如callNoPlayCode
   * 
   * @example
   * 01
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * 顺振被叫号码
   * 
   * @example
   * 18*******33
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * 接通后主被叫放音编号，格式如calledPlayCode
   * 
   * @example
   * 02
   */
  sequenceCalledPlayCode?: string;
  static names(): { [key: string]: string } {
    return {
      sequenceCallNoPlayCode: 'SequenceCallNoPlayCode',
      sequenceCalledNo: 'SequenceCalledNo',
      sequenceCalledPlayCode: 'SequenceCalledPlayCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceCallNoPlayCode: 'string',
      sequenceCalledNo: 'string',
      sequenceCalledPlayCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponseBodyReachJson extends $tea.Model {
  /**
   * @remarks
   * 呼叫方向 1:员工B呼叫客户A 2:客户A呼叫员工B
   * 
   * @example
   * 1
   */
  callDir?: string;
  /**
   * @remarks
   * 通话状态 1:通话振铃 2:接通前 3:接通后 4:通话结束 5:已接通6:未接通
   * 
   * @example
   * 3
   */
  callStatus?: string;
  /**
   * @remarks
   * 接收方向 1:主叫 2:被叫
   * 
   * @example
   * 1
   */
  receiveDir?: string;
  /**
   * @remarks
   * 规则ID
   * 
   * @example
   * 345
   */
  ruleId?: string;
  /**
   * @remarks
   * 规则名称
   * 
   * @example
   * 企业名片-短信规则
   */
  ruleName?: string;
  /**
   * @remarks
   * 规则类型： 1：企业名片-短信 2：企业名片-闪信 3：企业名片-视频 4：企业名片-音频
   * 
   * @example
   * 1
   */
  ruleType?: string;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 12345
   */
  tempId?: string;
  static names(): { [key: string]: string } {
    return {
      callDir: 'CallDir',
      callStatus: 'CallStatus',
      receiveDir: 'ReceiveDir',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tempId: 'TempId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDir: 'string',
      callStatus: 'string',
      receiveDir: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
      tempId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXDefaultConfigResponseBodySequenceCalls extends $tea.Model {
  /**
   * @remarks
   * 顺振提示音放音编号，格式如callNoPlayCode
   * 
   * @example
   * 01
   */
  sequenceCallNoPlayCode?: string;
  /**
   * @remarks
   * 顺振被叫号码
   * 
   * @example
   * 18*******33
   */
  sequenceCalledNo?: string;
  /**
   * @remarks
   * 接通后主被叫放音编号，格式如calledPlayCode
   * 
   * @example
   * 02
   */
  sequenceCalledPlayCode?: string;
  static names(): { [key: string]: string } {
    return {
      sequenceCallNoPlayCode: 'SequenceCallNoPlayCode',
      sequenceCalledNo: 'SequenceCalledNo',
      sequenceCalledPlayCode: 'SequenceCalledPlayCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceCallNoPlayCode: 'string',
      sequenceCalledNo: 'string',
      sequenceCalledPlayCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListXTelephonesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * 绑定失败原因
   * 
   * @example
   * 绑定失败用户身份证黑名单
   */
  authMsg?: string;
  /**
   * @remarks
   * 绑定时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  bindTime?: string;
  /**
   * @remarks
   * 购买时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  buyTime?: string;
  /**
   * @remarks
   * 客户号码池key
   * 
   * @example
   * FC5***********************a1a
   */
  customerPoolKey?: string;
  /**
   * @remarks
   * 号码池名称
   * 
   * @example
   * 测试号码池
   */
  customerPoolName?: string;
  /**
   * @remarks
   * 释放时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  releaseTime?: string;
  /**
   * @remarks
   * 短信开通状态：0 未开通 1已开通
   * 
   * @example
   * 0
   */
  smsStatus?: string;
  /**
   * @remarks
   * X号码
   * 
   * @example
   * 17*******46
   */
  telephone?: string;
  /**
   * @remarks
   * 号码状态：0 空闲中 1 调拨完成待购买 2购买完成待认证  3 实名认证中  4 实名认证成功  5 认证失败  6 解绑中 7 解绑失败 8已释放 99 超时释放
   * 
   * @example
   * 0
   */
  telephoneStatus?: string;
  /**
   * @remarks
   * 解绑时间
   * 
   * @example
   * 2024-08-29 17:23:58
   */
  unbindTime?: string;
  static names(): { [key: string]: string } {
    return {
      authMsg: 'AuthMsg',
      bindTime: 'BindTime',
      buyTime: 'BuyTime',
      customerPoolKey: 'CustomerPoolKey',
      customerPoolName: 'CustomerPoolName',
      releaseTime: 'ReleaseTime',
      smsStatus: 'SmsStatus',
      telephone: 'Telephone',
      telephoneStatus: 'TelephoneStatus',
      unbindTime: 'UnbindTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMsg: 'string',
      bindTime: 'string',
      buyTime: 'string',
      customerPoolKey: 'string',
      customerPoolName: 'string',
      releaseTime: 'string',
      smsStatus: 'string',
      telephone: 'string',
      telephoneStatus: 'string',
      unbindTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNoAByTrackNoResponseBodyModule extends $tea.Model {
  /**
   * @remarks
   * The extension of phone number X.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * Phone number A.
   * 
   * @example
   * 1310000****
   */
  phoneNoA?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 1710000****
   */
  phoneNoX?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      phoneNoA: 'PhoneNoA',
      phoneNoX: 'PhoneNoX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      phoneNoA: 'string',
      phoneNoX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoDetailResponseBodySecretNoInfoDTO extends $tea.Model {
  /**
   * @remarks
   * The verification status of the phone number. Valid values:
   * 
   * *   **0**: The phone number is not verified.
   * *   **1**: The phone number is verified.
   * 
   * @example
   * 0
   */
  certifyStatus?: number;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * chengdu
   */
  city?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * sichuan
   */
  province?: string;
  /**
   * @remarks
   * The time when the phone number was purchased.
   * 
   * @example
   * 2021-12-03 15:19:27
   */
  purchaseTime?: string;
  /**
   * @remarks
   * The status of the phone number. Valid values:
   * 
   * *   **0**: The phone number is not bound to other phone numbers.
   * *   **1**: The phone number is bound to other phone numbers.
   * *   **2**: The phone number is locked.
   * *   **3**: The phone number is frozen.
   * 
   * @example
   * 0
   */
  secretStatus?: number;
  /**
   * @remarks
   * The carrier to which the phone number belongs. Valid values:
   * 
   * *   **1**: China Mobile
   * *   **2**: China Unicom
   * *   **3**: China Telecom
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      certifyStatus: 'CertifyStatus',
      city: 'City',
      province: 'Province',
      purchaseTime: 'PurchaseTime',
      secretStatus: 'SecretStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyStatus: 'number',
      city: 'string',
      province: 'string',
      purchaseTime: 'string',
      secretStatus: 'number',
      vendor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO extends $tea.Model {
  /**
   * @remarks
   * The quantity of remaining phone numbers available for online purchase for the city.
   * 
   * @example
   * 120
   */
  amount?: number;
  /**
   * @remarks
   * The home location of the phone numbers.
   * 
   * @example
   * Wuhan
   */
  city?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      city: 'City',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      city: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList extends $tea.Model {
  remainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO[];
  static names(): { [key: string]: string } {
    return {
      remainDTO: 'remainDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainDTO: { 'type': 'array', 'itemType': QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretNoRemainResponseBodySecretRemainDTO extends $tea.Model {
  /**
   * @remarks
   * The quantity of remaining phone numbers available for online purchase.
   * 
   * @example
   * 0
   */
  amount?: number;
  /**
   * @remarks
   * The home location of the phone numbers.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The information about remaining phone numbers available for online purchase.
   */
  remainDTOList?: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      city: 'City',
      remainDTOList: 'RemainDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      city: 'string',
      remainDTOList: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscriptionDetailResponseBodySecretBindDetailDTO extends $tea.Model {
  /**
   * @remarks
   * The ID of the ASR model.
   * 
   * @example
   * 123456
   */
  ASRModelId?: string;
  /**
   * @remarks
   * Indicates whether automatic speech recognition (ASR) is enabled. Valid values:
   * 
   * *   **false**: ASR is disabled.
   * *   **true**: ASR is enabled.
   * 
   * @example
   * true
   */
  ASRStatus?: boolean;
  /**
   * @remarks
   * The status of one-way call restrictions. No value is returned for this parameter if one-way call restrictions are not set. Valid values:
   * 
   * *   **CONTROL_AX_DISABLE**: Phone number A cannot be used to call phone number X.
   * *   **CONTROL_BX_DISABLE**: Phone number B cannot be used to call phone number X.
   * 
   * @example
   * CONTROL_BX_DISABLE
   */
  callRestrict?: string;
  /**
   * @remarks
   * The expiration time of the binding.
   * 
   * @example
   * 2019-09-05 12:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * The extension in the AXG extension binding.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * The creation time of the binding.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of number group G in the binding.
   * 
   * @example
   * 2000000130001
   */
  groupId?: number;
  /**
   * @remarks
   * Indicates whether all calls made by the bound phone numbers are recorded. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  needRecord?: boolean;
  /**
   * @remarks
   * Phone number A in the binding.
   * 
   * @example
   * 13900001111
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Phone number B in the binding.
   * 
   * @example
   * 13900002222
   */
  phoneNoB?: string;
  /**
   * @remarks
   * The private number in the binding, that is, phone number X.
   * 
   * @example
   * 13900001234
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The binding status. Valid values:
   * 
   * *   **0**: The binding expired.
   * *   **1**: The binding is in effect.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * 100000076879****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ASRModelId: 'ASRModelId',
      ASRStatus: 'ASRStatus',
      callRestrict: 'CallRestrict',
      expireDate: 'ExpireDate',
      extension: 'Extension',
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      needRecord: 'NeedRecord',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      phoneNoX: 'PhoneNoX',
      status: 'Status',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRModelId: 'string',
      ASRStatus: 'boolean',
      callRestrict: 'string',
      expireDate: 'string',
      extension: 'string',
      gmtCreate: 'string',
      groupId: 'number',
      needRecord: 'boolean',
      phoneNoA: 'string',
      phoneNoB: 'string',
      phoneNoX: 'string',
      status: 'number',
      subsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dyplsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a tracking number for a private number in the AXN binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAxnTrackNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAxnTrackNoResponse
   */
  async addAxnTrackNoWithOptions(request: AddAxnTrackNoRequest, runtime: $Util.RuntimeOptions): Promise<AddAxnTrackNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    if (!Util.isUnset(request.trackNo)) {
      query["trackNo"] = request.trackNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAxnTrackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAxnTrackNoResponse>(await this.callApi(params, req, runtime), new AddAxnTrackNoResponse({}));
  }

  /**
   * Adds a tracking number for a private number in the AXN binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAxnTrackNoRequest
   * @returns AddAxnTrackNoResponse
   */
  async addAxnTrackNo(request: AddAxnTrackNoRequest): Promise<AddAxnTrackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAxnTrackNoWithOptions(request, runtime);
  }

  /**
   * Adds a blacklist.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddSecretBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSecretBlacklistResponse
   */
  async addSecretBlacklistWithOptions(request: AddSecretBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddSecretBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.wayControl)) {
      query["WayControl"] = request.wayControl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSecretBlacklist",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSecretBlacklistResponse>(await this.callApi(params, req, runtime), new AddSecretBlacklistResponse({}));
  }

  /**
   * Adds a blacklist.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddSecretBlacklistRequest
   * @returns AddSecretBlacklistResponse
   */
  async addSecretBlacklist(request: AddSecretBlacklistRequest): Promise<AddSecretBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecretBlacklistWithOptions(request, runtime);
  }

  /**
   * 调用本接口向工作号平台请求为员工B的工作号X建立呼叫绑定（B，X，A），允许B通过X呼叫客户A
   * 
   * @param request - BindAXBCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAXBCallResponse
   */
  async bindAXBCallWithOptions(request: BindAXBCallRequest, runtime: $Util.RuntimeOptions): Promise<BindAXBCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authId)) {
      query["AuthId"] = request.authId;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAXBCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAXBCallResponse>(await this.callApi(params, req, runtime), new BindAXBCallResponse({}));
  }

  /**
   * 调用本接口向工作号平台请求为员工B的工作号X建立呼叫绑定（B，X，A），允许B通过X呼叫客户A
   * 
   * @param request - BindAXBCallRequest
   * @returns BindAXBCallResponse
   */
  async bindAXBCall(request: BindAXBCallRequest): Promise<BindAXBCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAXBCallWithOptions(request, runtime);
  }

  /**
   * Adds an AXB binding.
   * 
   * @remarks
   * Before you add an AXB binding, we recommend that you specify role A and role B in the AXB device certificate (ProductKey, DeviceName, and DeviceSecret) in your business scenario. For example, in a taxi-hailing scenario, role A is the passenger and role B is the driver.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxbResponse
   */
  async bindAxbWithOptions(request: BindAxbRequest, runtime: $Util.RuntimeOptions): Promise<BindAxbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!Util.isUnset(request.dtmfConfig)) {
      query["DtmfConfig"] = request.dtmfConfig;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxbResponse>(await this.callApi(params, req, runtime), new BindAxbResponse({}));
  }

  /**
   * Adds an AXB binding.
   * 
   * @remarks
   * Before you add an AXB binding, we recommend that you specify role A and role B in the AXB device certificate (ProductKey, DeviceName, and DeviceSecret) in your business scenario. For example, in a taxi-hailing scenario, role A is the passenger and role B is the driver.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxbRequest
   * @returns BindAxbResponse
   */
  async bindAxb(request: BindAxbRequest): Promise<BindAxbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxbWithOptions(request, runtime);
  }

  /**
   * Adds an AXG binding.
   * 
   * @remarks
   * An AXG protection solution can be configured to meet the requirements for grading users, limiting the scope of calls, and restricting order snatching. The letter G represents a phone number group to which you can add phone numbers as needed.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxgResponse
   */
  async bindAxgWithOptions(request: BindAxgRequest, runtime: $Util.RuntimeOptions): Promise<BindAxgResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxg",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxgResponse>(await this.callApi(params, req, runtime), new BindAxgResponse({}));
  }

  /**
   * Adds an AXG binding.
   * 
   * @remarks
   * An AXG protection solution can be configured to meet the requirements for grading users, limiting the scope of calls, and restricting order snatching. The letter G represents a phone number group to which you can add phone numbers as needed.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxgRequest
   * @returns BindAxgResponse
   */
  async bindAxg(request: BindAxgRequest): Promise<BindAxgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxgWithOptions(request, runtime);
  }

  /**
   * Adds an AXN binding.
   * 
   * @remarks
   * >  An AXN private number is a dedicated private number assigned to phone number A. When an N-side number is used to call phone number X, the call is forwarded to phone number A.
   * 
   * @param request - BindAxnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxnResponse
   */
  async bindAxnWithOptions(request: BindAxnRequest, runtime: $Util.RuntimeOptions): Promise<BindAxnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.noType)) {
      query["NoType"] = request.noType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxn",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxnResponse>(await this.callApi(params, req, runtime), new BindAxnResponse({}));
  }

  /**
   * Adds an AXN binding.
   * 
   * @remarks
   * >  An AXN private number is a dedicated private number assigned to phone number A. When an N-side number is used to call phone number X, the call is forwarded to phone number A.
   * 
   * @param request - BindAxnRequest
   * @returns BindAxnResponse
   */
  async bindAxn(request: BindAxnRequest): Promise<BindAxnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxnWithOptions(request, runtime);
  }

  /**
   * Adds an AXN extension binding.
   * 
   * @remarks
   * Before you add an AXN extension binding, confirm phone number A and phone number N in the business scenario. Phone number A belongs to a customer, and phone number X is the private number assigned to the customer. When any other phone number is used to call phone number X and the extension, the call is transferred to phone number A. When phone number A is used to call phone number X, the call is transferred to the default phone number B that is specified during the phone number binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxnExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxnExtensionResponse
   */
  async bindAxnExtensionWithOptions(request: BindAxnExtensionRequest, runtime: $Util.RuntimeOptions): Promise<BindAxnExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!Util.isUnset(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAxnExtension",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAxnExtensionResponse>(await this.callApi(params, req, runtime), new BindAxnExtensionResponse({}));
  }

  /**
   * Adds an AXN extension binding.
   * 
   * @remarks
   * Before you add an AXN extension binding, confirm phone number A and phone number N in the business scenario. Phone number A belongs to a customer, and phone number X is the private number assigned to the customer. When any other phone number is used to call phone number X and the extension, the call is transferred to phone number A. When phone number A is used to call phone number X, the call is transferred to the default phone number B that is specified during the phone number binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxnExtensionRequest
   * @returns BindAxnExtensionResponse
   */
  async bindAxnExtension(request: BindAxnExtensionRequest): Promise<BindAxnExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAxnExtensionWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - BindBatchAxgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindBatchAxgResponse
   */
  async bindBatchAxgWithOptions(tmpReq: BindBatchAxgRequest, runtime: $Util.RuntimeOptions): Promise<BindBatchAxgResponse> {
    Util.validateModel(tmpReq);
    let request = new BindBatchAxgShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.axgBindList)) {
      request.axgBindListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.axgBindList, "AxgBindList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.axgBindListShrink)) {
      query["AxgBindList"] = request.axgBindListShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "BindBatchAxg",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindBatchAxgResponse>(await this.callApi(params, req, runtime), new BindBatchAxgResponse({}));
  }

  /**
   * @param request - BindBatchAxgRequest
   * @returns BindBatchAxgResponse
   */
  async bindBatchAxg(request: BindBatchAxgRequest): Promise<BindBatchAxgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindBatchAxgWithOptions(request, runtime);
  }

  /**
   * 平台指定工作号X 和员工号B建立关联，完成X 实名认证，绑定生效后，所有X 的呼叫都会转接到B
   * 
   * @param request - BindXBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindXBResponse
   */
  async bindXBWithOptions(request: BindXBRequest, runtime: $Util.RuntimeOptions): Promise<BindXBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!Util.isUnset(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindXB",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindXBResponse>(await this.callApi(params, req, runtime), new BindXBResponse({}));
  }

  /**
   * 平台指定工作号X 和员工号B建立关联，完成X 实名认证，绑定生效后，所有X 的呼叫都会转接到B
   * 
   * @param request - BindXBRequest
   * @returns BindXBResponse
   */
  async bindXB(request: BindXBRequest): Promise<BindXBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindXBWithOptions(request, runtime);
  }

  /**
   * Purchases a phone number.
   * 
   * @remarks
   *   After you create a phone number pool in the Phone Number Protection console, the phone number pool is empty by default. You must purchase phone numbers and add them to the phone number pool.
   * *   Before you call this operation, make sure that you are familiar with the [pricing](https://help.aliyun.com/document_detail/59825.html) of Phone Number Protection.
   * *   When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before you call this operation to purchase a phone number, check the quantity of phone numbers available for purchase by using the [QuerySecretNoRemain](https://help.aliyun.com/document_detail/111699.html) operation.
   * *   The account used to purchase a phone number must be an enterprise account that has passed real-name verification. For more information about how to perform real-name verification, see [Enterprise verification FAQs](https://help.aliyun.com/document_detail/37172.html).
   * 
   * @param request - BuySecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuySecretNoResponse
   */
  async buySecretNoWithOptions(request: BuySecretNoRequest, runtime: $Util.RuntimeOptions): Promise<BuySecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.displayPool)) {
      query["DisplayPool"] = request.displayPool;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BuySecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BuySecretNoResponse>(await this.callApi(params, req, runtime), new BuySecretNoResponse({}));
  }

  /**
   * Purchases a phone number.
   * 
   * @remarks
   *   After you create a phone number pool in the Phone Number Protection console, the phone number pool is empty by default. You must purchase phone numbers and add them to the phone number pool.
   * *   Before you call this operation, make sure that you are familiar with the [pricing](https://help.aliyun.com/document_detail/59825.html) of Phone Number Protection.
   * *   When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before you call this operation to purchase a phone number, check the quantity of phone numbers available for purchase by using the [QuerySecretNoRemain](https://help.aliyun.com/document_detail/111699.html) operation.
   * *   The account used to purchase a phone number must be an enterprise account that has passed real-name verification. For more information about how to perform real-name verification, see [Enterprise verification FAQs](https://help.aliyun.com/document_detail/37172.html).
   * 
   * @param request - BuySecretNoRequest
   * @returns BuySecretNoResponse
   */
  async buySecretNo(request: BuySecretNoRequest): Promise<BuySecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.buySecretNoWithOptions(request, runtime);
  }

  /**
   * Cancels a door-to-door delivery order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelPickUpWaybillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPickUpWaybillResponse
   */
  async cancelPickUpWaybillWithOptions(request: CancelPickUpWaybillRequest, runtime: $Util.RuntimeOptions): Promise<CancelPickUpWaybillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cancelDesc)) {
      query["CancelDesc"] = request.cancelDesc;
    }

    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
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
      action: "CancelPickUpWaybill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelPickUpWaybillResponse>(await this.callApi(params, req, runtime), new CancelPickUpWaybillResponse({}));
  }

  /**
   * Cancels a door-to-door delivery order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelPickUpWaybillRequest
   * @returns CancelPickUpWaybillResponse
   */
  async cancelPickUpWaybill(request: CancelPickUpWaybillRequest): Promise<CancelPickUpWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPickUpWaybillWithOptions(request, runtime);
  }

  /**
   * 配置X号码，单独对工作号的话音呼叫、企业名片等通信功能进行配置操作
   * 
   * @param tmpReq - ConfigXRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigXResponse
   */
  async configXWithOptions(tmpReq: ConfigXRequest, runtime: $Util.RuntimeOptions): Promise<ConfigXResponse> {
    Util.validateModel(tmpReq);
    let request = new ConfigXShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sequenceCalls)) {
      request.sequenceCallsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sequenceCalls, "SequenceCalls", "json");
    }

    let query = { };
    if (!Util.isUnset(request.callAbility)) {
      query["CallAbility"] = request.callAbility;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.GNFlag)) {
      query["GNFlag"] = request.GNFlag;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sequenceCallsShrink)) {
      query["SequenceCalls"] = request.sequenceCallsShrink;
    }

    if (!Util.isUnset(request.sequenceMode)) {
      query["SequenceMode"] = request.sequenceMode;
    }

    if (!Util.isUnset(request.smsAbility)) {
      query["SmsAbility"] = request.smsAbility;
    }

    if (!Util.isUnset(request.smsSignMode)) {
      query["SmsSignMode"] = request.smsSignMode;
    }

    if (!Util.isUnset(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigX",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigXResponse>(await this.callApi(params, req, runtime), new ConfigXResponse({}));
  }

  /**
   * 配置X号码，单独对工作号的话音呼叫、企业名片等通信功能进行配置操作
   * 
   * @param request - ConfigXRequest
   * @returns ConfigXResponse
   */
  async configX(request: ConfigXRequest): Promise<ConfigXResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configXWithOptions(request, runtime);
  }

  /**
   * Creates number group G.
   * 
   * @remarks
   * Before you add an AXG binding, you must purchase phone number X, create number group G, and then add phone numbers to number group G. If you do not add phone numbers to number group G after you create number group G, you can call the [OperateAxgGroup](https://help.aliyun.com/document_detail/110252.htm) operation to add phone numbers to number group G.
   * >  Up to 2,000 number groups G can be added for a single phone number pool.
   * 
   * @param request - CreateAxgGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAxgGroupResponse
   */
  async createAxgGroupWithOptions(request: CreateAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAxgGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.numbers)) {
      query["Numbers"] = request.numbers;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
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
      action: "CreateAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAxgGroupResponse>(await this.callApi(params, req, runtime), new CreateAxgGroupResponse({}));
  }

  /**
   * Creates number group G.
   * 
   * @remarks
   * Before you add an AXG binding, you must purchase phone number X, create number group G, and then add phone numbers to number group G. If you do not add phone numbers to number group G after you create number group G, you can call the [OperateAxgGroup](https://help.aliyun.com/document_detail/110252.htm) operation to add phone numbers to number group G.
   * >  Up to 2,000 number groups G can be added for a single phone number pool.
   * 
   * @param request - CreateAxgGroupRequest
   * @returns CreateAxgGroupResponse
   */
  async createAxgGroup(request: CreateAxgGroupRequest): Promise<CreateAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAxgGroupWithOptions(request, runtime);
  }

  /**
   * Creates a door-to-door delivery order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreatePickUpWaybillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePickUpWaybillResponse
   */
  async createPickUpWaybillWithOptions(tmpReq: CreatePickUpWaybillRequest, runtime: $Util.RuntimeOptions): Promise<CreatePickUpWaybillResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePickUpWaybillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.consigneeAddress)) {
      request.consigneeAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.consigneeAddress, "ConsigneeAddress", "json");
    }

    if (!Util.isUnset(tmpReq.goodsInfos)) {
      request.goodsInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.goodsInfos, "GoodsInfos", "json");
    }

    if (!Util.isUnset(tmpReq.sendAddress)) {
      request.sendAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendAddress, "SendAddress", "json");
    }

    let query = { };
    if (!Util.isUnset(request.appointGotEndTime)) {
      query["AppointGotEndTime"] = request.appointGotEndTime;
    }

    if (!Util.isUnset(request.appointGotStartTime)) {
      query["AppointGotStartTime"] = request.appointGotStartTime;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.consigneeAddressShrink)) {
      query["ConsigneeAddress"] = request.consigneeAddressShrink;
    }

    if (!Util.isUnset(request.consigneeMobile)) {
      query["ConsigneeMobile"] = request.consigneeMobile;
    }

    if (!Util.isUnset(request.consigneeName)) {
      query["ConsigneeName"] = request.consigneeName;
    }

    if (!Util.isUnset(request.consigneePhone)) {
      query["ConsigneePhone"] = request.consigneePhone;
    }

    if (!Util.isUnset(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.goodsInfosShrink)) {
      query["GoodsInfos"] = request.goodsInfosShrink;
    }

    if (!Util.isUnset(request.orderChannels)) {
      query["OrderChannels"] = request.orderChannels;
    }

    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.sendAddressShrink)) {
      query["SendAddress"] = request.sendAddressShrink;
    }

    if (!Util.isUnset(request.sendMobile)) {
      query["SendMobile"] = request.sendMobile;
    }

    if (!Util.isUnset(request.sendName)) {
      query["SendName"] = request.sendName;
    }

    if (!Util.isUnset(request.sendPhone)) {
      query["SendPhone"] = request.sendPhone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePickUpWaybill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePickUpWaybillResponse>(await this.callApi(params, req, runtime), new CreatePickUpWaybillResponse({}));
  }

  /**
   * Creates a door-to-door delivery order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreatePickUpWaybillRequest
   * @returns CreatePickUpWaybillResponse
   */
  async createPickUpWaybill(request: CreatePickUpWaybillRequest): Promise<CreatePickUpWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPickUpWaybillWithOptions(request, runtime);
  }

  /**
   * Queries a pickup order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreatePickUpWaybillPreQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePickUpWaybillPreQueryResponse
   */
  async createPickUpWaybillPreQueryWithOptions(tmpReq: CreatePickUpWaybillPreQueryRequest, runtime: $Util.RuntimeOptions): Promise<CreatePickUpWaybillPreQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePickUpWaybillPreQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.consigneeInfo)) {
      request.consigneeInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.consigneeInfo, "ConsigneeInfo", "json");
    }

    if (!Util.isUnset(tmpReq.senderInfo)) {
      request.senderInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.senderInfo, "SenderInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.consigneeInfoShrink)) {
      query["ConsigneeInfo"] = request.consigneeInfoShrink;
    }

    if (!Util.isUnset(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.orderChannels)) {
      query["OrderChannels"] = request.orderChannels;
    }

    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!Util.isUnset(request.preWeight)) {
      query["PreWeight"] = request.preWeight;
    }

    if (!Util.isUnset(request.senderInfoShrink)) {
      query["SenderInfo"] = request.senderInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePickUpWaybillPreQuery",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePickUpWaybillPreQueryResponse>(await this.callApi(params, req, runtime), new CreatePickUpWaybillPreQueryResponse({}));
  }

  /**
   * Queries a pickup order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreatePickUpWaybillPreQueryRequest
   * @returns CreatePickUpWaybillPreQueryResponse
   */
  async createPickUpWaybillPreQuery(request: CreatePickUpWaybillPreQueryRequest): Promise<CreatePickUpWaybillPreQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPickUpWaybillPreQueryWithOptions(request, runtime);
  }

  /**
   * B向A 发短信，客户端获取“短信标签”，尾部添加“标签”。通过“标签”解析被叫A，发短信到A。
   * 
   * @param request - CreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignResponse
   */
  async createSmsSignWithOptions(request: CreateSmsSignRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmsSignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNo)) {
      query["CalledNo"] = request.calledNo;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.callingNo)) {
      query["CallingNo"] = request.callingNo;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
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
      action: "CreateSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSmsSignResponse>(await this.callApi(params, req, runtime), new CreateSmsSignResponse({}));
  }

  /**
   * B向A 发短信，客户端获取“短信标签”，尾部添加“标签”。通过“标签”解析被叫A，发短信到A。
   * 
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: CreateSmsSignRequest): Promise<CreateSmsSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAxgGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAxgGroupResponse
   */
  async deleteAxgGroupWithOptions(request: DeleteAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAxgGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "DeleteAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAxgGroupResponse>(await this.callApi(params, req, runtime), new DeleteAxgGroupResponse({}));
  }

  /**
   * @param request - DeleteAxgGroupRequest
   * @returns DeleteAxgGroupResponse
   */
  async deleteAxgGroup(request: DeleteAxgGroupRequest): Promise<DeleteAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAxgGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a blacklist.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSecretBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretBlacklistResponse
   */
  async deleteSecretBlacklistWithOptions(request: DeleteSecretBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretBlacklistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.wayControl)) {
      query["WayControl"] = request.wayControl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretBlacklist",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretBlacklistResponse>(await this.callApi(params, req, runtime), new DeleteSecretBlacklistResponse({}));
  }

  /**
   * Deletes a blacklist.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSecretBlacklistRequest
   * @returns DeleteSecretBlacklistResponse
   */
  async deleteSecretBlacklist(request: DeleteSecretBlacklistRequest): Promise<DeleteSecretBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretBlacklistWithOptions(request, runtime);
  }

  /**
   * Obtains the details of the automatic speech recognition (ASR) result.
   * 
   * @remarks
   * Before you call the GetSecretAsrDetail operation, set the ASRStatus parameter to true in the [BindAxn operation](https://help.aliyun.com/document_detail/400483.html). This ensures that you can obtain the ASR result properly.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSecretAsrDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretAsrDetailResponse
   */
  async getSecretAsrDetailWithOptions(request: GetSecretAsrDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretAsrDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretAsrDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretAsrDetailResponse>(await this.callApi(params, req, runtime), new GetSecretAsrDetailResponse({}));
  }

  /**
   * Obtains the details of the automatic speech recognition (ASR) result.
   * 
   * @remarks
   * Before you call the GetSecretAsrDetail operation, set the ASRStatus parameter to true in the [BindAxn operation](https://help.aliyun.com/document_detail/400483.html). This ensures that you can obtain the ASR result properly.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSecretAsrDetailRequest
   * @returns GetSecretAsrDetailResponse
   */
  async getSecretAsrDetail(request: GetSecretAsrDetailRequest): Promise<GetSecretAsrDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretAsrDetailWithOptions(request, runtime);
  }

  /**
   * Obtains the download URL of a recorded ringing tone.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetTotalPublicUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTotalPublicUrlResponse
   */
  async getTotalPublicUrlWithOptions(request: GetTotalPublicUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetTotalPublicUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.checkSubs)) {
      query["CheckSubs"] = request.checkSubs;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.partnerKey)) {
      query["PartnerKey"] = request.partnerKey;
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
      action: "GetTotalPublicUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTotalPublicUrlResponse>(await this.callApi(params, req, runtime), new GetTotalPublicUrlResponse({}));
  }

  /**
   * Obtains the download URL of a recorded ringing tone.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetTotalPublicUrlRequest
   * @returns GetTotalPublicUrlResponse
   */
  async getTotalPublicUrl(request: GetTotalPublicUrlRequest): Promise<GetTotalPublicUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTotalPublicUrlWithOptions(request, runtime);
  }

  /**
   * 获取X号码配置信息
   * 
   * @param request - GetXConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetXConfigResponse
   */
  async getXConfigWithOptions(request: GetXConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetXConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetXConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetXConfigResponse>(await this.callApi(params, req, runtime), new GetXConfigResponse({}));
  }

  /**
   * 获取X号码配置信息
   * 
   * @param request - GetXConfigRequest
   * @returns GetXConfigResponse
   */
  async getXConfig(request: GetXConfigRequest): Promise<GetXConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getXConfigWithOptions(request, runtime);
  }

  /**
   * 获取X号码默认配置信息
   * 
   * @param request - GetXDefaultConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetXDefaultConfigResponse
   */
  async getXDefaultConfigWithOptions(request: GetXDefaultConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetXDefaultConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetXDefaultConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetXDefaultConfigResponse>(await this.callApi(params, req, runtime), new GetXDefaultConfigResponse({}));
  }

  /**
   * 获取X号码默认配置信息
   * 
   * @param request - GetXDefaultConfigRequest
   * @returns GetXDefaultConfigResponse
   */
  async getXDefaultConfig(request: GetXDefaultConfigRequest): Promise<GetXDefaultConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getXDefaultConfigWithOptions(request, runtime);
  }

  /**
   * 查询客户名下X号码列表
   * 
   * @param request - ListXTelephonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListXTelephonesResponse
   */
  async listXTelephonesWithOptions(request: ListXTelephonesRequest, runtime: $Util.RuntimeOptions): Promise<ListXTelephonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
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

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
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
      action: "ListXTelephones",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListXTelephonesResponse>(await this.callApi(params, req, runtime), new ListXTelephonesResponse({}));
  }

  /**
   * 查询客户名下X号码列表
   * 
   * @param request - ListXTelephonesRequest
   * @returns ListXTelephonesResponse
   */
  async listXTelephones(request: ListXTelephonesRequest): Promise<ListXTelephonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listXTelephonesWithOptions(request, runtime);
  }

  /**
   * Locks a phone number.
   * 
   * @remarks
   * After a phone number is locked, the locked phone number cannot be selected when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - LockSecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockSecretNoResponse
   */
  async lockSecretNoWithOptions(request: LockSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<LockSecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockSecretNoResponse>(await this.callApi(params, req, runtime), new LockSecretNoResponse({}));
  }

  /**
   * Locks a phone number.
   * 
   * @remarks
   * After a phone number is locked, the locked phone number cannot be selected when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - LockSecretNoRequest
   * @returns LockSecretNoResponse
   */
  async lockSecretNo(request: LockSecretNoRequest): Promise<LockSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockSecretNoWithOptions(request, runtime);
  }

  /**
   * Modifies number group G.
   * 
   * @remarks
   * After you create number group G, you can call the OperateAxgGroup operation to modify number group G. For example, you can add phone numbers to number group G, delete phone numbers from number group G, and replace all phone numbers in number group G.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateAxgGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAxgGroupResponse
   */
  async operateAxgGroupWithOptions(request: OperateAxgGroupRequest, runtime: $Util.RuntimeOptions): Promise<OperateAxgGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.numbers)) {
      query["Numbers"] = request.numbers;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "OperateAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateAxgGroupResponse>(await this.callApi(params, req, runtime), new OperateAxgGroupResponse({}));
  }

  /**
   * Modifies number group G.
   * 
   * @remarks
   * After you create number group G, you can call the OperateAxgGroup operation to modify number group G. For example, you can add phone numbers to number group G, delete phone numbers from number group G, and replace all phone numbers in number group G.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateAxgGroupRequest
   * @returns OperateAxgGroupResponse
   */
  async operateAxgGroup(request: OperateAxgGroupRequest): Promise<OperateAxgGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateAxgGroupWithOptions(request, runtime);
  }

  /**
   * Adds a phone number to a blacklist or deletes a phone number from a blacklist.
   * 
   * @remarks
   * The OperateBlackNo operation supports the following number pool types: AXN, AXN extension, and 95AXN.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateBlackNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateBlackNoResponse
   */
  async operateBlackNoWithOptions(request: OperateBlackNoRequest, runtime: $Util.RuntimeOptions): Promise<OperateBlackNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tips)) {
      query["Tips"] = request.tips;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateBlackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateBlackNoResponse>(await this.callApi(params, req, runtime), new OperateBlackNoResponse({}));
  }

  /**
   * Adds a phone number to a blacklist or deletes a phone number from a blacklist.
   * 
   * @remarks
   * The OperateBlackNo operation supports the following number pool types: AXN, AXN extension, and 95AXN.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateBlackNoRequest
   * @returns OperateBlackNoResponse
   */
  async operateBlackNo(request: OperateBlackNoRequest): Promise<OperateBlackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateBlackNoWithOptions(request, runtime);
  }

  /**
   * Queries the details about a tracking number.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneNoAByTrackNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneNoAByTrackNoResponse
   */
  async queryPhoneNoAByTrackNoWithOptions(request: QueryPhoneNoAByTrackNoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneNoAByTrackNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cabinetNo)) {
      query["CabinetNo"] = request.cabinetNo;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.trackNo)) {
      query["trackNo"] = request.trackNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPhoneNoAByTrackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPhoneNoAByTrackNoResponse>(await this.callApi(params, req, runtime), new QueryPhoneNoAByTrackNoResponse({}));
  }

  /**
   * Queries the details about a tracking number.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneNoAByTrackNoRequest
   * @returns QueryPhoneNoAByTrackNoResponse
   */
  async queryPhoneNoAByTrackNo(request: QueryPhoneNoAByTrackNoRequest): Promise<QueryPhoneNoAByTrackNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneNoAByTrackNoWithOptions(request, runtime);
  }

  /**
   * Obtains the download URL of a recording file.
   * 
   * @remarks
   * If the recording feature is enabled for a binding, all calls made by the bound phone numbers are recorded. You can obtain the download URL of a recording file by calling the QueryRecordFileDownloadUrl operation and download the recording file.
   * >  We recommend that you subscribe to [the recording status report SecretRecording](https://help.aliyun.com/document_detail/109198.html). The values of the response parameters in SecretRecording can be used as the values of the request parameters for downloading a recording file.
   * ### [](#)Procedure for obtaining a recording file
   * 1.  Specify the request parameter in an update or binding operation to enable the recording feature.
   * 2.  Subscribe to recording message receipts in the Phone Number Protection console.
   * 3.  After a recording message receipt is returned, call the QueryRecordFileDownloadUrl operation to obtain the download URL of the recording file, and download the recording file.
   * > 
   * *   A download URL is valid for 2 hours. Download the recording file as soon as possible after obtaining a download URL.
   * *   The storage period of recording files is 30 days. You can download only the recording files of calls recorded in the last 30 days.
   * 
   * @param request - QueryRecordFileDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordFileDownloadUrlResponse
   */
  async queryRecordFileDownloadUrlWithOptions(request: QueryRecordFileDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordFileDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
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
      action: "QueryRecordFileDownloadUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordFileDownloadUrlResponse>(await this.callApi(params, req, runtime), new QueryRecordFileDownloadUrlResponse({}));
  }

  /**
   * Obtains the download URL of a recording file.
   * 
   * @remarks
   * If the recording feature is enabled for a binding, all calls made by the bound phone numbers are recorded. You can obtain the download URL of a recording file by calling the QueryRecordFileDownloadUrl operation and download the recording file.
   * >  We recommend that you subscribe to [the recording status report SecretRecording](https://help.aliyun.com/document_detail/109198.html). The values of the response parameters in SecretRecording can be used as the values of the request parameters for downloading a recording file.
   * ### [](#)Procedure for obtaining a recording file
   * 1.  Specify the request parameter in an update or binding operation to enable the recording feature.
   * 2.  Subscribe to recording message receipts in the Phone Number Protection console.
   * 3.  After a recording message receipt is returned, call the QueryRecordFileDownloadUrl operation to obtain the download URL of the recording file, and download the recording file.
   * > 
   * *   A download URL is valid for 2 hours. Download the recording file as soon as possible after obtaining a download URL.
   * *   The storage period of recording files is 30 days. You can download only the recording files of calls recorded in the last 30 days.
   * 
   * @param request - QueryRecordFileDownloadUrlRequest
   * @returns QueryRecordFileDownloadUrlResponse
   */
  async queryRecordFileDownloadUrl(request: QueryRecordFileDownloadUrlRequest): Promise<QueryRecordFileDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordFileDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of a private number.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySecretNoDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecretNoDetailResponse
   */
  async querySecretNoDetailWithOptions(request: QuerySecretNoDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySecretNoDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySecretNoDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySecretNoDetailResponse>(await this.callApi(params, req, runtime), new QuerySecretNoDetailResponse({}));
  }

  /**
   * Queries the attributes of a private number.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySecretNoDetailRequest
   * @returns QuerySecretNoDetailResponse
   */
  async querySecretNoDetail(request: QuerySecretNoDetailRequest): Promise<QuerySecretNoDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySecretNoDetailWithOptions(request, runtime);
  }

  /**
   * Queries the quantity of remaining phone numbers available for online purchase.
   * 
   * @remarks
   * When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before calling the [BuySecretNo](~~BuySecretNo~~) operation to purchase a phone number, call the [QuerySecretNoRemain](~~QuerySecretNoRemain~~) operation to query the quantity of remaining phone numbers available for online purchase.
   * 
   * @param request - QuerySecretNoRemainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecretNoRemainResponse
   */
  async querySecretNoRemainWithOptions(request: QuerySecretNoRemainRequest, runtime: $Util.RuntimeOptions): Promise<QuerySecretNoRemainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
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

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySecretNoRemain",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySecretNoRemainResponse>(await this.callApi(params, req, runtime), new QuerySecretNoRemainResponse({}));
  }

  /**
   * Queries the quantity of remaining phone numbers available for online purchase.
   * 
   * @remarks
   * When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before calling the [BuySecretNo](~~BuySecretNo~~) operation to purchase a phone number, call the [QuerySecretNoRemain](~~QuerySecretNoRemain~~) operation to query the quantity of remaining phone numbers available for online purchase.
   * 
   * @param request - QuerySecretNoRemainRequest
   * @returns QuerySecretNoRemainResponse
   */
  async querySecretNoRemain(request: QuerySecretNoRemainRequest): Promise<QuerySecretNoRemainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySecretNoRemainWithOptions(request, runtime);
  }

  /**
   * 查询通话录音链接
   * 
   * @param request - QuerySoundRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySoundRecordResponse
   */
  async querySoundRecordWithOptions(request: QuerySoundRecordRequest, runtime: $Util.RuntimeOptions): Promise<QuerySoundRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
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
      action: "QuerySoundRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySoundRecordResponse>(await this.callApi(params, req, runtime), new QuerySoundRecordResponse({}));
  }

  /**
   * 查询通话录音链接
   * 
   * @param request - QuerySoundRecordRequest
   * @returns QuerySoundRecordResponse
   */
  async querySoundRecord(request: QuerySoundRecordRequest): Promise<QuerySoundRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySoundRecordWithOptions(request, runtime);
  }

  /**
   * Queries binding IDs.
   * 
   * @remarks
   * You can query binding IDs by phone number X. In the AXB product, multiple bindings may exist for the same phone number X. In this case, multiple binding IDs may be obtained for the same phone number X.
   * 
   * @param request - QuerySubsIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySubsIdResponse
   */
  async querySubsIdWithOptions(request: QuerySubsIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubsIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
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
      action: "QuerySubsId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySubsIdResponse>(await this.callApi(params, req, runtime), new QuerySubsIdResponse({}));
  }

  /**
   * Queries binding IDs.
   * 
   * @remarks
   * You can query binding IDs by phone number X. In the AXB product, multiple bindings may exist for the same phone number X. In this case, multiple binding IDs may be obtained for the same phone number X.
   * 
   * @param request - QuerySubsIdRequest
   * @returns QuerySubsIdResponse
   */
  async querySubsId(request: QuerySubsIdRequest): Promise<QuerySubsIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubsIdWithOptions(request, runtime);
  }

  /**
   * Queries the details about a phone number binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#poolkeyproducttype)Limits on PoolKey and ProductType
   * You must specify either PoolKey or ProductType. If both parameters are not specified, an error is reported when you call the QuerySubscriptionDetail operation. We recommend that you specify the ProductType parameter for the original key accounts of Alibaba Cloud and the PoolKey parameter for Alibaba Cloud users.
   * 
   * @param request - QuerySubscriptionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySubscriptionDetailResponse
   */
  async querySubscriptionDetailWithOptions(request: QuerySubscriptionDetailRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubscriptionDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySubscriptionDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySubscriptionDetailResponse>(await this.callApi(params, req, runtime), new QuerySubscriptionDetailResponse({}));
  }

  /**
   * Queries the details about a phone number binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#poolkeyproducttype)Limits on PoolKey and ProductType
   * You must specify either PoolKey or ProductType. If both parameters are not specified, an error is reported when you call the QuerySubscriptionDetail operation. We recommend that you specify the ProductType parameter for the original key accounts of Alibaba Cloud and the PoolKey parameter for Alibaba Cloud users.
   * 
   * @param request - QuerySubscriptionDetailRequest
   * @returns QuerySubscriptionDetailResponse
   */
  async querySubscriptionDetail(request: QuerySubscriptionDetailRequest): Promise<QuerySubscriptionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubscriptionDetailWithOptions(request, runtime);
  }

  /**
   * Releases a phone number.
   * 
   * @remarks
   *   After a phone number is released, it will no longer be charged from the following month.
   * *   Before you release a phone number, log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) to check whether the phone number is bound to other phone numbers. The phone number can be released only if it is not bound to other phone numbers.
   * 
   * @param request - ReleaseSecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseSecretNoResponse
   */
  async releaseSecretNoWithOptions(request: ReleaseSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseSecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseSecretNoResponse>(await this.callApi(params, req, runtime), new ReleaseSecretNoResponse({}));
  }

  /**
   * Releases a phone number.
   * 
   * @remarks
   *   After a phone number is released, it will no longer be charged from the following month.
   * *   Before you release a phone number, log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) to check whether the phone number is bound to other phone numbers. The phone number can be released only if it is not bound to other phone numbers.
   * 
   * @param request - ReleaseSecretNoRequest
   * @returns ReleaseSecretNoResponse
   */
  async releaseSecretNo(request: ReleaseSecretNoRequest): Promise<ReleaseSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseSecretNoWithOptions(request, runtime);
  }

  /**
   * 解除指定的呼叫绑定关系（A，X，B），解决呼叫绑定关系后，员工B不能通过工作号X呼叫到客户A。
   * 
   * @param request - UnBindAXBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnBindAXBResponse
   */
  async unBindAXBWithOptions(request: UnBindAXBRequest, runtime: $Util.RuntimeOptions): Promise<UnBindAXBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindId)) {
      query["BindId"] = request.bindId;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
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
      action: "UnBindAXB",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnBindAXBResponse>(await this.callApi(params, req, runtime), new UnBindAXBResponse({}));
  }

  /**
   * 解除指定的呼叫绑定关系（A，X，B），解决呼叫绑定关系后，员工B不能通过工作号X呼叫到客户A。
   * 
   * @param request - UnBindAXBRequest
   * @returns UnBindAXBResponse
   */
  async unBindAXB(request: UnBindAXBRequest): Promise<UnBindAXBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unBindAXBWithOptions(request, runtime);
  }

  /**
   * 调用本接口可取消工作号X与员工号码B的绑定。绑定解除后，对X的呼叫都不会转接给B。
   * 
   * @param request - UnBindXBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnBindXBResponse
   */
  async unBindXBWithOptions(request: UnBindXBRequest, runtime: $Util.RuntimeOptions): Promise<UnBindXBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authId)) {
      query["AuthId"] = request.authId;
    }

    if (!Util.isUnset(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!Util.isUnset(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnBindXB",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnBindXBResponse>(await this.callApi(params, req, runtime), new UnBindXBResponse({}));
  }

  /**
   * 调用本接口可取消工作号X与员工号码B的绑定。绑定解除后，对X的呼叫都不会转接给B。
   * 
   * @param request - UnBindXBRequest
   * @returns UnBindXBResponse
   */
  async unBindXB(request: UnBindXBRequest): Promise<UnBindXBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unBindXBWithOptions(request, runtime);
  }

  /**
   * Unbinds a phone number.
   * 
   * @remarks
   * Before releasing a phone number, you must call the UnbindSubscription operation to unbind the phone number.
   * 
   * @param request - UnbindSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindSubscriptionResponse
   */
  async unbindSubscriptionWithOptions(request: UnbindSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSubscription",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindSubscriptionResponse>(await this.callApi(params, req, runtime), new UnbindSubscriptionResponse({}));
  }

  /**
   * Unbinds a phone number.
   * 
   * @remarks
   * Before releasing a phone number, you must call the UnbindSubscription operation to unbind the phone number.
   * 
   * @param request - UnbindSubscriptionRequest
   * @returns UnbindSubscriptionResponse
   */
  async unbindSubscription(request: UnbindSubscriptionRequest): Promise<UnbindSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSubscriptionWithOptions(request, runtime);
  }

  /**
   * Unlocks a phone number.
   * 
   * @remarks
   * After a phone number is unlocked, you can reselect the unlocked phone number when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnlockSecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockSecretNoResponse
   */
  async unlockSecretNoWithOptions(request: UnlockSecretNoRequest, runtime: $Util.RuntimeOptions): Promise<UnlockSecretNoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockSecretNoResponse>(await this.callApi(params, req, runtime), new UnlockSecretNoResponse({}));
  }

  /**
   * Unlocks a phone number.
   * 
   * @remarks
   * After a phone number is unlocked, you can reselect the unlocked phone number when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnlockSecretNoRequest
   * @returns UnlockSecretNoResponse
   */
  async unlockSecretNo(request: UnlockSecretNoRequest): Promise<UnlockSecretNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockSecretNoWithOptions(request, runtime);
  }

  /**
   * Modifies a phone number binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 10,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscriptionWithOptions(request: UpdateSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubscriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!Util.isUnset(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!Util.isUnset(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!Util.isUnset(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!Util.isUnset(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    if (!Util.isUnset(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubscription",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new UpdateSubscriptionResponse({}));
  }

  /**
   * Modifies a phone number binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 10,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

}
