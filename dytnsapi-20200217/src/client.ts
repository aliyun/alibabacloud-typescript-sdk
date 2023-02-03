// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeEmptyNumberRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeEmptyNumberResponseBodyData;
  message?: string;
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
      data: DescribeEmptyNumberResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEmptyNumberResponseBody;
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
      body: DescribeEmptyNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberDetectRequest extends $tea.Model {
  encryptType?: string;
  ownerId?: number;
  phone?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      encryptType: 'EncryptType',
      ownerId: 'OwnerId',
      phone: 'Phone',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptType: 'string',
      ownerId: 'number',
      phone: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberDetectResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeEmptyNumberDetectResponseBodyData[];
  message?: string;
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
      data: { 'type': 'array', 'itemType': DescribeEmptyNumberDetectResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberDetectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEmptyNumberDetectResponseBody;
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
      body: DescribeEmptyNumberDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  numberType?: number;
  ownerId?: number;
  rate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      numberType: 'NumberType',
      ownerId: 'OwnerId',
      rate: 'Rate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      numberType: 'number',
      ownerId: 'number',
      rate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePhoneNumberAnalysisResponseBodyData[];
  message?: string;
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
      data: { 'type': 'array', 'itemType': DescribePhoneNumberAnalysisResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberAnalysisResponseBody;
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
      body: DescribePhoneNumberAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAttributeRequest extends $tea.Model {
  ownerId?: number;
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

export class DescribePhoneNumberAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  phoneNumberAttribute?: DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      phoneNumberAttribute: 'PhoneNumberAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      phoneNumberAttribute: DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberAttributeResponseBody;
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
      body: DescribePhoneNumberAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOnlineTimeRequest extends $tea.Model {
  authCode?: string;
  carrier?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOnlineTimeResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePhoneNumberOnlineTimeResponseBodyData;
  message?: string;
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
      data: DescribePhoneNumberOnlineTimeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOnlineTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberOnlineTimeResponseBody;
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
      body: DescribePhoneNumberOnlineTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOperatorAttributeRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOperatorAttributeResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePhoneNumberOperatorAttributeResponseBodyData;
  message?: string;
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
      data: DescribePhoneNumberOperatorAttributeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOperatorAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberOperatorAttributeResponseBody;
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
      body: DescribePhoneNumberOperatorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleRequest extends $tea.Model {
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  since?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      since: 'Since',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      since: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  twiceTelVerify?: DescribePhoneNumberResaleResponseBodyTwiceTelVerify;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      twiceTelVerify: 'TwiceTelVerify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      twiceTelVerify: DescribePhoneNumberResaleResponseBodyTwiceTelVerify,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberResaleResponseBody;
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
      body: DescribePhoneNumberResaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusRequest extends $tea.Model {
  ownerId?: number;
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

export class DescribePhoneNumberStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  phoneStatus?: DescribePhoneNumberStatusResponseBodyPhoneStatus;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      phoneStatus: 'PhoneStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      phoneStatus: DescribePhoneNumberStatusResponseBodyPhoneStatus,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberStatusResponseBody;
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
      body: DescribePhoneNumberStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneTwiceTelVerifyRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneTwiceTelVerifyResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePhoneTwiceTelVerifyResponseBodyData;
  message?: string;
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
      data: DescribePhoneTwiceTelVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneTwiceTelVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneTwiceTelVerifyResponseBody;
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
      body: DescribePhoneTwiceTelVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidPhoneNumberFilterRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidPhoneNumberFilterResponseBody extends $tea.Model {
  code?: string;
  data?: InvalidPhoneNumberFilterResponseBodyData[];
  message?: string;
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
      data: { 'type': 'array', 'itemType': InvalidPhoneNumberFilterResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidPhoneNumberFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvalidPhoneNumberFilterResponseBody;
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
      body: InvalidPhoneNumberFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberEncryptRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberEncryptResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberEncryptResponseBodyData[];
  message?: string;
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
      data: { 'type': 'array', 'itemType': PhoneNumberEncryptResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberEncryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberEncryptResponseBody;
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
      body: PhoneNumberEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForAccountRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForAccountResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberStatusForAccountResponseBodyData;
  message?: string;
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
      data: PhoneNumberStatusForAccountResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberStatusForAccountResponseBody;
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
      body: PhoneNumberStatusForAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForPublicRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForPublicResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberStatusForPublicResponseBodyData;
  message?: string;
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
      data: PhoneNumberStatusForPublicResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForPublicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberStatusForPublicResponseBody;
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
      body: PhoneNumberStatusForPublicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForRealRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForRealResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberStatusForRealResponseBodyData;
  message?: string;
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
      data: PhoneNumberStatusForRealResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForRealResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberStatusForRealResponseBody;
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
      body: PhoneNumberStatusForRealResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForSmsRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForSmsResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberStatusForSmsResponseBodyData;
  message?: string;
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
      data: PhoneNumberStatusForSmsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForSmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberStatusForSmsResponseBody;
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
      body: PhoneNumberStatusForSmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVirtualRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVirtualResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberStatusForVirtualResponseBodyData;
  message?: string;
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
      data: PhoneNumberStatusForVirtualResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVirtualResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberStatusForVirtualResponseBody;
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
      body: PhoneNumberStatusForVirtualResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVoiceRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVoiceResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberStatusForVoiceResponseBodyData;
  message?: string;
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
      data: PhoneNumberStatusForVoiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberStatusForVoiceResponseBody;
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
      body: PhoneNumberStatusForVoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThreeElementsVerificationRequest extends $tea.Model {
  authCode?: string;
  certCode?: string;
  inputNumber?: string;
  mask?: string;
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      certCode: 'CertCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      certCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThreeElementsVerificationResponseBody extends $tea.Model {
  code?: string;
  data?: ThreeElementsVerificationResponseBodyData;
  message?: string;
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
      data: ThreeElementsVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThreeElementsVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ThreeElementsVerificationResponseBody;
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
      body: ThreeElementsVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwoElementsVerificationRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  mask?: string;
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwoElementsVerificationResponseBody extends $tea.Model {
  code?: string;
  data?: TwoElementsVerificationResponseBodyData;
  message?: string;
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
      data: TwoElementsVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwoElementsVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TwoElementsVerificationResponseBody;
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
      body: TwoElementsVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberResponseBodyData extends $tea.Model {
  number?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmptyNumberDetectResponseBodyData extends $tea.Model {
  number?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisResponseBodyData extends $tea.Model {
  code?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute extends $tea.Model {
  basicCarrier?: string;
  carrier?: string;
  city?: string;
  isNumberPortability?: boolean;
  numberSegment?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      city: 'City',
      isNumberPortability: 'IsNumberPortability',
      numberSegment: 'NumberSegment',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      city: 'string',
      isNumberPortability: 'boolean',
      numberSegment: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOnlineTimeResponseBodyData extends $tea.Model {
  carrierCode?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      carrierCode: 'CarrierCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrierCode: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOperatorAttributeResponseBodyData extends $tea.Model {
  basicCarrier?: string;
  carrier?: string;
  city?: string;
  isNumberPortability?: boolean;
  numberSegment?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      city: 'City',
      isNumberPortability: 'IsNumberPortability',
      numberSegment: 'NumberSegment',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      city: 'string',
      isNumberPortability: 'boolean',
      numberSegment: 'number',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberResaleResponseBodyTwiceTelVerify extends $tea.Model {
  carrier?: string;
  verifyResult?: number;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      verifyResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberStatusResponseBodyPhoneStatus extends $tea.Model {
  carrier?: string;
  serialId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      serialId: 'SerialId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      serialId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneTwiceTelVerifyResponseBodyData extends $tea.Model {
  carrier?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidPhoneNumberFilterResponseBodyData extends $tea.Model {
  code?: string;
  encryptedNumber?: string;
  expireTime?: string;
  originalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      encryptedNumber: 'EncryptedNumber',
      expireTime: 'ExpireTime',
      originalNumber: 'OriginalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      encryptedNumber: 'string',
      expireTime: 'string',
      originalNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberEncryptResponseBodyData extends $tea.Model {
  encryptedNumber?: string;
  expireTime?: string;
  originalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedNumber: 'EncryptedNumber',
      expireTime: 'ExpireTime',
      originalNumber: 'OriginalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedNumber: 'string',
      expireTime: 'string',
      originalNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForAccountResponseBodyData extends $tea.Model {
  carrier?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForPublicResponseBodyData extends $tea.Model {
  carrier?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForRealResponseBodyData extends $tea.Model {
  carrier?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForSmsResponseBodyData extends $tea.Model {
  carrier?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVirtualResponseBodyData extends $tea.Model {
  isPrivacyNumber?: boolean;
  static names(): { [key: string]: string } {
    return {
      isPrivacyNumber: 'IsPrivacyNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPrivacyNumber: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberStatusForVoiceResponseBodyData extends $tea.Model {
  carrier?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThreeElementsVerificationResponseBodyData extends $tea.Model {
  basicCarrier?: string;
  isConsistent?: number;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      isConsistent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwoElementsVerificationResponseBodyData extends $tea.Model {
  basicCarrier?: string;
  isConsistent?: number;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      isConsistent: 'number',
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
    this._endpoint = this.getEndpoint("dytnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeEmptyNumberWithOptions(request: DescribeEmptyNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEmptyNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "DescribeEmptyNumber",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEmptyNumberResponse>(await this.callApi(params, req, runtime), new DescribeEmptyNumberResponse({}));
  }

  async describeEmptyNumber(request: DescribeEmptyNumberRequest): Promise<DescribeEmptyNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmptyNumberWithOptions(request, runtime);
  }

  async describeEmptyNumberDetectWithOptions(request: DescribeEmptyNumberDetectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEmptyNumberDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
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
      action: "DescribeEmptyNumberDetect",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEmptyNumberDetectResponse>(await this.callApi(params, req, runtime), new DescribeEmptyNumberDetectResponse({}));
  }

  async describeEmptyNumberDetect(request: DescribeEmptyNumberDetectRequest): Promise<DescribeEmptyNumberDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmptyNumberDetectWithOptions(request, runtime);
  }

  async describePhoneNumberAnalysisWithOptions(request: DescribePhoneNumberAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberAnalysisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.numberType)) {
      query["NumberType"] = request.numberType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rate)) {
      query["Rate"] = request.rate;
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
      action: "DescribePhoneNumberAnalysis",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberAnalysisResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberAnalysisResponse({}));
  }

  async describePhoneNumberAnalysis(request: DescribePhoneNumberAnalysisRequest): Promise<DescribePhoneNumberAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisWithOptions(request, runtime);
  }

  async describePhoneNumberAttributeWithOptions(request: DescribePhoneNumberAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberAttributeResponse> {
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
      action: "DescribePhoneNumberAttribute",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberAttributeResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberAttributeResponse({}));
  }

  async describePhoneNumberAttribute(request: DescribePhoneNumberAttributeRequest): Promise<DescribePhoneNumberAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAttributeWithOptions(request, runtime);
  }

  async describePhoneNumberOnlineTimeWithOptions(request: DescribePhoneNumberOnlineTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberOnlineTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "DescribePhoneNumberOnlineTime",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberOnlineTimeResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberOnlineTimeResponse({}));
  }

  async describePhoneNumberOnlineTime(request: DescribePhoneNumberOnlineTimeRequest): Promise<DescribePhoneNumberOnlineTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  async describePhoneNumberOperatorAttributeWithOptions(request: DescribePhoneNumberOperatorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberOperatorAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "DescribePhoneNumberOperatorAttribute",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberOperatorAttributeResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberOperatorAttributeResponse({}));
  }

  async describePhoneNumberOperatorAttribute(request: DescribePhoneNumberOperatorAttributeRequest): Promise<DescribePhoneNumberOperatorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberOperatorAttributeWithOptions(request, runtime);
  }

  async describePhoneNumberResaleWithOptions(request: DescribePhoneNumberResaleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberResaleResponse> {
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

    if (!Util.isUnset(request.since)) {
      query["Since"] = request.since;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePhoneNumberResale",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberResaleResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberResaleResponse({}));
  }

  async describePhoneNumberResale(request: DescribePhoneNumberResaleRequest): Promise<DescribePhoneNumberResaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberResaleWithOptions(request, runtime);
  }

  async describePhoneNumberStatusWithOptions(request: DescribePhoneNumberStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberStatusResponse> {
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
      action: "DescribePhoneNumberStatus",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberStatusResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberStatusResponse({}));
  }

  async describePhoneNumberStatus(request: DescribePhoneNumberStatusRequest): Promise<DescribePhoneNumberStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberStatusWithOptions(request, runtime);
  }

  async describePhoneTwiceTelVerifyWithOptions(request: DescribePhoneTwiceTelVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneTwiceTelVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePhoneTwiceTelVerify",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneTwiceTelVerifyResponse>(await this.callApi(params, req, runtime), new DescribePhoneTwiceTelVerifyResponse({}));
  }

  async describePhoneTwiceTelVerify(request: DescribePhoneTwiceTelVerifyRequest): Promise<DescribePhoneTwiceTelVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  async invalidPhoneNumberFilterWithOptions(request: InvalidPhoneNumberFilterRequest, runtime: $Util.RuntimeOptions): Promise<InvalidPhoneNumberFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "InvalidPhoneNumberFilter",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvalidPhoneNumberFilterResponse>(await this.callApi(params, req, runtime), new InvalidPhoneNumberFilterResponse({}));
  }

  async invalidPhoneNumberFilter(request: InvalidPhoneNumberFilterRequest): Promise<InvalidPhoneNumberFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invalidPhoneNumberFilterWithOptions(request, runtime);
  }

  async phoneNumberEncryptWithOptions(request: PhoneNumberEncryptRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberEncryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberEncrypt",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberEncryptResponse>(await this.callApi(params, req, runtime), new PhoneNumberEncryptResponse({}));
  }

  async phoneNumberEncrypt(request: PhoneNumberEncryptRequest): Promise<PhoneNumberEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberEncryptWithOptions(request, runtime);
  }

  async phoneNumberStatusForAccountWithOptions(request: PhoneNumberStatusForAccountRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberStatusForAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberStatusForAccount",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberStatusForAccountResponse>(await this.callApi(params, req, runtime), new PhoneNumberStatusForAccountResponse({}));
  }

  async phoneNumberStatusForAccount(request: PhoneNumberStatusForAccountRequest): Promise<PhoneNumberStatusForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForAccountWithOptions(request, runtime);
  }

  async phoneNumberStatusForPublicWithOptions(request: PhoneNumberStatusForPublicRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberStatusForPublicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberStatusForPublic",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberStatusForPublicResponse>(await this.callApi(params, req, runtime), new PhoneNumberStatusForPublicResponse({}));
  }

  async phoneNumberStatusForPublic(request: PhoneNumberStatusForPublicRequest): Promise<PhoneNumberStatusForPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForPublicWithOptions(request, runtime);
  }

  async phoneNumberStatusForRealWithOptions(request: PhoneNumberStatusForRealRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberStatusForRealResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberStatusForReal",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberStatusForRealResponse>(await this.callApi(params, req, runtime), new PhoneNumberStatusForRealResponse({}));
  }

  async phoneNumberStatusForReal(request: PhoneNumberStatusForRealRequest): Promise<PhoneNumberStatusForRealResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForRealWithOptions(request, runtime);
  }

  async phoneNumberStatusForSmsWithOptions(request: PhoneNumberStatusForSmsRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberStatusForSmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberStatusForSms",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberStatusForSmsResponse>(await this.callApi(params, req, runtime), new PhoneNumberStatusForSmsResponse({}));
  }

  async phoneNumberStatusForSms(request: PhoneNumberStatusForSmsRequest): Promise<PhoneNumberStatusForSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForSmsWithOptions(request, runtime);
  }

  async phoneNumberStatusForVirtualWithOptions(request: PhoneNumberStatusForVirtualRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberStatusForVirtualResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberStatusForVirtual",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberStatusForVirtualResponse>(await this.callApi(params, req, runtime), new PhoneNumberStatusForVirtualResponse({}));
  }

  async phoneNumberStatusForVirtual(request: PhoneNumberStatusForVirtualRequest): Promise<PhoneNumberStatusForVirtualResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForVirtualWithOptions(request, runtime);
  }

  async phoneNumberStatusForVoiceWithOptions(request: PhoneNumberStatusForVoiceRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberStatusForVoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
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
      action: "PhoneNumberStatusForVoice",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberStatusForVoiceResponse>(await this.callApi(params, req, runtime), new PhoneNumberStatusForVoiceResponse({}));
  }

  async phoneNumberStatusForVoice(request: PhoneNumberStatusForVoiceRequest): Promise<PhoneNumberStatusForVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForVoiceWithOptions(request, runtime);
  }

  async threeElementsVerificationWithOptions(request: ThreeElementsVerificationRequest, runtime: $Util.RuntimeOptions): Promise<ThreeElementsVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.certCode)) {
      query["CertCode"] = request.certCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "ThreeElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ThreeElementsVerificationResponse>(await this.callApi(params, req, runtime), new ThreeElementsVerificationResponse({}));
  }

  async threeElementsVerification(request: ThreeElementsVerificationRequest): Promise<ThreeElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.threeElementsVerificationWithOptions(request, runtime);
  }

  async twoElementsVerificationWithOptions(request: TwoElementsVerificationRequest, runtime: $Util.RuntimeOptions): Promise<TwoElementsVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "TwoElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TwoElementsVerificationResponse>(await this.callApi(params, req, runtime), new TwoElementsVerificationResponse({}));
  }

  async twoElementsVerification(request: TwoElementsVerificationRequest): Promise<TwoElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.twoElementsVerificationWithOptions(request, runtime);
  }

}
