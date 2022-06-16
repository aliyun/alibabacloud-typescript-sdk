// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class PvrCallbackFCUResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  data?: ThreeElementsVerificationResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ThreeElementsVerificationResponseBodyData },
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
  data?: TwoElementsVerificationResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': TwoElementsVerificationResponseBodyData },
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
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'string',
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

  async pvrCallbackFCUWithOptions(runtime: $Util.RuntimeOptions): Promise<PvrCallbackFCUResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "PvrCallbackFCU",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<PvrCallbackFCUResponse>(await this.callApi(params, req, runtime), new PvrCallbackFCUResponse({}));
  }

  async pvrCallbackFCU(): Promise<PvrCallbackFCUResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pvrCallbackFCUWithOptions(runtime);
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
