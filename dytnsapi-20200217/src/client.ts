// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CertNoTwoElementVerificationRequest extends $tea.Model {
  authCode?: string;
  certName?: string;
  certNo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      certName: 'CertName',
      certNo: 'CertNo',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      certName: 'string',
      certNo: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertNoTwoElementVerificationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: CertNoTwoElementVerificationResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CertNoTwoElementVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertNoTwoElementVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CertNoTwoElementVerificationResponseBody;
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
      body: CertNoTwoElementVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyFourElementsVerificationRequest extends $tea.Model {
  authCode?: string;
  epCertName?: string;
  epCertNo?: string;
  legalPersonCertName?: string;
  legalPersonCertNo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      epCertName: 'EpCertName',
      epCertNo: 'EpCertNo',
      legalPersonCertName: 'LegalPersonCertName',
      legalPersonCertNo: 'LegalPersonCertNo',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      epCertName: 'string',
      epCertNo: 'string',
      legalPersonCertName: 'string',
      legalPersonCertNo: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyFourElementsVerificationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: CompanyFourElementsVerificationResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CompanyFourElementsVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyFourElementsVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompanyFourElementsVerificationResponseBody;
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
      body: CompanyFourElementsVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyThreeElementsVerificationRequest extends $tea.Model {
  authCode?: string;
  epCertName?: string;
  epCertNo?: string;
  legalPersonCertName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      epCertName: 'EpCertName',
      epCertNo: 'EpCertNo',
      legalPersonCertName: 'LegalPersonCertName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      epCertName: 'string',
      epCertNo: 'string',
      legalPersonCertName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyThreeElementsVerificationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: CompanyThreeElementsVerificationResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CompanyThreeElementsVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyThreeElementsVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompanyThreeElementsVerificationResponseBody;
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
      body: CompanyThreeElementsVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationRequest extends $tea.Model {
  authCode?: string;
  epCertName?: string;
  epCertNo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      epCertName: 'EpCertName',
      epCertNo: 'EpCertNo',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      epCertName: 'string',
      epCertNo: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: CompanyTwoElementsVerificationResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CompanyTwoElementsVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompanyTwoElementsVerificationResponseBody;
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
      body: CompanyTwoElementsVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  data?: DescribePhoneNumberAnalysisResponseBodyData;
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
      data: DescribePhoneNumberAnalysisResponseBodyData,
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

export class DescribePhoneNumberAnalysisAIRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  modelConfig?: string;
  ownerId?: number;
  rate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      modelConfig: 'ModelConfig',
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
      modelConfig: 'string',
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

export class DescribePhoneNumberAnalysisAIResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePhoneNumberAnalysisAIResponseBodyData;
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
      data: DescribePhoneNumberAnalysisAIResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisAIResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberAnalysisAIResponseBody;
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
      body: DescribePhoneNumberAnalysisAIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisTransparentRequest extends $tea.Model {
  authCode?: string;
  inputNumber?: string;
  ip?: string;
  numberType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      ip: 'Ip',
      numberType: 'NumberType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      ip: 'string',
      numberType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisTransparentResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: DescribePhoneNumberAnalysisTransparentResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DescribePhoneNumberAnalysisTransparentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisTransparentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberAnalysisTransparentResponseBody;
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
      body: DescribePhoneNumberAnalysisTransparentResponseBody,
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

export class DescribePhoneNumberRiskRequest extends $tea.Model {
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

export class DescribePhoneNumberRiskResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: DescribePhoneNumberRiskResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DescribePhoneNumberRiskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberRiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePhoneNumberRiskResponseBody;
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
      body: DescribePhoneNumberRiskResponseBody,
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

export class GetUAIDApplyTokenSignRequest extends $tea.Model {
  authCode?: string;
  carrier?: string;
  clientType?: string;
  format?: string;
  outId?: string;
  ownerId?: number;
  paramKey?: string;
  paramStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      clientType: 'ClientType',
      format: 'Format',
      outId: 'OutId',
      ownerId: 'OwnerId',
      paramKey: 'ParamKey',
      paramStr: 'ParamStr',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      clientType: 'string',
      format: 'string',
      outId: 'string',
      ownerId: 'number',
      paramKey: 'string',
      paramStr: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUAIDApplyTokenSignResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: GetUAIDApplyTokenSignResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetUAIDApplyTokenSignResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUAIDApplyTokenSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUAIDApplyTokenSignResponseBody;
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
      body: GetUAIDApplyTokenSignResponseBody,
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

export class PhoneNumberConvertServiceRequest extends $tea.Model {
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

export class PhoneNumberConvertServiceResponseBody extends $tea.Model {
  code?: string;
  data?: PhoneNumberConvertServiceResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': PhoneNumberConvertServiceResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhoneNumberConvertServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PhoneNumberConvertServiceResponseBody;
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
      body: PhoneNumberConvertServiceResponseBody,
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

export class QueryAvailableAuthCodeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableAuthCodeResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableAuthCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAvailableAuthCodeResponseBody;
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
      body: QueryAvailableAuthCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagApplyRuleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagApplyRuleResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTagApplyRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTagApplyRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagApplyRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTagApplyRuleResponseBody;
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
      body: QueryTagApplyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionRequest extends $tea.Model {
  industryId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneId?: number;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      industryId: 'IndustryId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneId: 'SceneId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industryId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneId: 'number',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTagInfoBySelectionResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTagInfoBySelectionResponseBody;
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
      body: QueryTagInfoBySelectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagListPageRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagListPageResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTagListPageResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTagListPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagListPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTagListPageResponseBody;
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
      body: QueryTagListPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUsageStatisticsByTagIdRequest extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUsageStatisticsByTagIdResponseBody extends $tea.Model {
  code?: string;
  data?: QueryUsageStatisticsByTagIdResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryUsageStatisticsByTagIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUsageStatisticsByTagIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUsageStatisticsByTagIdResponseBody;
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
      body: QueryUsageStatisticsByTagIdResponseBody,
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

export class UAIDVerificationRequest extends $tea.Model {
  authCode?: string;
  carrier?: string;
  ip?: string;
  outId?: string;
  ownerId?: number;
  province?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  token?: string;
  userGrantId?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      ip: 'Ip',
      outId: 'OutId',
      ownerId: 'OwnerId',
      province: 'Province',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      token: 'Token',
      userGrantId: 'UserGrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      ip: 'string',
      outId: 'string',
      ownerId: 'number',
      province: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      token: 'string',
      userGrantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDVerificationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: UAIDVerificationResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: UAIDVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDVerificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UAIDVerificationResponseBody;
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
      body: UAIDVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertNoTwoElementVerificationResponseBodyData extends $tea.Model {
  isConsistent?: string;
  static names(): { [key: string]: string } {
    return {
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isConsistent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyFourElementsVerificationResponseBodyDataDetailInfo extends $tea.Model {
  enterpriseStatus?: string;
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseStatus: 'EnterpriseStatus',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseStatus: 'string',
      openTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyFourElementsVerificationResponseBodyData extends $tea.Model {
  detailInfo?: CompanyFourElementsVerificationResponseBodyDataDetailInfo;
  inconsistentData?: string[];
  reasonCode?: number;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      inconsistentData: 'InconsistentData',
      reasonCode: 'ReasonCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: CompanyFourElementsVerificationResponseBodyDataDetailInfo,
      inconsistentData: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'number',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyThreeElementsVerificationResponseBodyDataDetailInfo extends $tea.Model {
  enterpriseStatus?: string;
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseStatus: 'EnterpriseStatus',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseStatus: 'string',
      openTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyThreeElementsVerificationResponseBodyData extends $tea.Model {
  detailInfo?: CompanyThreeElementsVerificationResponseBodyDataDetailInfo;
  inconsistentData?: string[];
  reasonCode?: number;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      inconsistentData: 'InconsistentData',
      reasonCode: 'ReasonCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: CompanyThreeElementsVerificationResponseBodyDataDetailInfo,
      inconsistentData: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'number',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationResponseBodyDataDetailInfo extends $tea.Model {
  enterpriseStatus?: string;
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseStatus: 'EnterpriseStatus',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseStatus: 'string',
      openTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompanyTwoElementsVerificationResponseBodyData extends $tea.Model {
  detailInfo?: CompanyTwoElementsVerificationResponseBodyDataDetailInfo;
  inconsistentData?: string[];
  reasonCode?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      inconsistentData: 'InconsistentData',
      reasonCode: 'ReasonCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: CompanyTwoElementsVerificationResponseBodyDataDetailInfo,
      inconsistentData: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'string',
      verifyResult: 'string',
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

export class DescribePhoneNumberAnalysisResponseBodyDataList extends $tea.Model {
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

export class DescribePhoneNumberAnalysisResponseBodyData extends $tea.Model {
  list?: DescribePhoneNumberAnalysisResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribePhoneNumberAnalysisResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberAnalysisAIResponseBodyData extends $tea.Model {
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

export class DescribePhoneNumberAnalysisTransparentResponseBodyData extends $tea.Model {
  deviceRisk?: string;
  ipRisk?: string;
  score1?: string;
  score2?: string;
  score3?: string;
  static names(): { [key: string]: string } {
    return {
      deviceRisk: 'Device_risk',
      ipRisk: 'Ip_risk',
      score1: 'Score1',
      score2: 'Score2',
      score3: 'Score3',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceRisk: 'string',
      ipRisk: 'string',
      score1: 'string',
      score2: 'string',
      score3: 'string',
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

export class DescribePhoneNumberRiskResponseBodyData extends $tea.Model {
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

export class GetUAIDApplyTokenSignResponseBodyData extends $tea.Model {
  carrier?: string;
  outId?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      outId: 'OutId',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      outId: 'string',
      sign: 'string',
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

export class PhoneNumberConvertServiceResponseBodyData extends $tea.Model {
  converResult?: boolean;
  number?: string;
  numberMd5?: string;
  numberSha256?: string;
  static names(): { [key: string]: string } {
    return {
      converResult: 'ConverResult',
      number: 'Number',
      numberMd5: 'NumberMd5',
      numberSha256: 'NumberSha256',
    };
  }

  static types(): { [key: string]: any } {
    return {
      converResult: 'boolean',
      number: 'string',
      numberMd5: 'string',
      numberSha256: 'string',
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

export class QueryTagApplyRuleResponseBodyData extends $tea.Model {
  applyMaterialDesc?: string;
  autoAudit?: number;
  chargingStandardLink?: string;
  encryptedQuery?: number;
  needApplyMaterial?: number;
  slaLink?: string;
  static names(): { [key: string]: string } {
    return {
      applyMaterialDesc: 'ApplyMaterialDesc',
      autoAudit: 'AutoAudit',
      chargingStandardLink: 'ChargingStandardLink',
      encryptedQuery: 'EncryptedQuery',
      needApplyMaterial: 'NeedApplyMaterial',
      slaLink: 'SlaLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyMaterialDesc: 'string',
      autoAudit: 'number',
      chargingStandardLink: 'string',
      encryptedQuery: 'number',
      needApplyMaterial: 'number',
      slaLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponseBodyDataParamListValueDict extends $tea.Model {
  code?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponseBodyDataParamList extends $tea.Model {
  code?: string;
  hint?: string;
  must?: boolean;
  name?: string;
  type?: string;
  valueDict?: QueryTagInfoBySelectionResponseBodyDataParamListValueDict[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hint: 'Hint',
      must: 'Must',
      name: 'Name',
      type: 'Type',
      valueDict: 'ValueDict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hint: 'string',
      must: 'boolean',
      name: 'string',
      type: 'string',
      valueDict: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyDataParamListValueDict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagInfoBySelectionResponseBodyData extends $tea.Model {
  authCodeList?: string[];
  complexityType?: string;
  demoAddress?: string;
  docAddress?: string;
  enumDefinitionAddress?: string;
  flowName?: string;
  industryId?: number;
  industryName?: string;
  paramList?: QueryTagInfoBySelectionResponseBodyDataParamList[];
  richTextDescription?: string;
  sceneId?: number;
  sceneName?: string;
  tagId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      authCodeList: 'AuthCodeList',
      complexityType: 'ComplexityType',
      demoAddress: 'DemoAddress',
      docAddress: 'DocAddress',
      enumDefinitionAddress: 'EnumDefinitionAddress',
      flowName: 'FlowName',
      industryId: 'IndustryId',
      industryName: 'IndustryName',
      paramList: 'ParamList',
      richTextDescription: 'RichTextDescription',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCodeList: { 'type': 'array', 'itemType': 'string' },
      complexityType: 'string',
      demoAddress: 'string',
      docAddress: 'string',
      enumDefinitionAddress: 'string',
      flowName: 'string',
      industryId: 'number',
      industryName: 'string',
      paramList: { 'type': 'array', 'itemType': QueryTagInfoBySelectionResponseBodyDataParamList },
      richTextDescription: 'string',
      sceneId: 'number',
      sceneName: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagListPageResponseBodyDataRecords extends $tea.Model {
  apiName?: string;
  code?: string;
  docAddress?: string;
  id?: number;
  industryId?: number;
  industryName?: string;
  introduction?: string;
  isOpen?: number;
  name?: string;
  saleStatusStr?: string;
  sceneId?: number;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      code: 'Code',
      docAddress: 'DocAddress',
      id: 'Id',
      industryId: 'IndustryId',
      industryName: 'IndustryName',
      introduction: 'Introduction',
      isOpen: 'IsOpen',
      name: 'Name',
      saleStatusStr: 'SaleStatusStr',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      code: 'string',
      docAddress: 'string',
      id: 'number',
      industryId: 'number',
      industryName: 'string',
      introduction: 'string',
      isOpen: 'number',
      name: 'string',
      saleStatusStr: 'string',
      sceneId: 'number',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagListPageResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  records?: QueryTagListPageResponseBodyDataRecords[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': QueryTagListPageResponseBodyDataRecords },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUsageStatisticsByTagIdResponseBodyData extends $tea.Model {
  authorizationCode?: string;
  failTotal?: number;
  gmtDateStr?: string;
  id?: number;
  industryName?: string;
  partnerId?: number;
  sceneName?: string;
  successTotal?: number;
  tagId?: number;
  tagName?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      failTotal: 'FailTotal',
      gmtDateStr: 'GmtDateStr',
      id: 'Id',
      industryName: 'IndustryName',
      partnerId: 'PartnerId',
      sceneName: 'SceneName',
      successTotal: 'SuccessTotal',
      tagId: 'TagId',
      tagName: 'TagName',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      failTotal: 'number',
      gmtDateStr: 'string',
      id: 'number',
      industryName: 'string',
      partnerId: 'number',
      sceneName: 'string',
      successTotal: 'number',
      tagId: 'number',
      tagName: 'string',
      total: 'number',
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

export class UAIDVerificationResponseBodyData extends $tea.Model {
  uaid?: string;
  static names(): { [key: string]: string } {
    return {
      uaid: 'Uaid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uaid: 'string',
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

  async certNoTwoElementVerificationWithOptions(request: CertNoTwoElementVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CertNoTwoElementVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certNo)) {
      query["CertNo"] = request.certNo;
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
      action: "CertNoTwoElementVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CertNoTwoElementVerificationResponse>(await this.callApi(params, req, runtime), new CertNoTwoElementVerificationResponse({}));
  }

  async certNoTwoElementVerification(request: CertNoTwoElementVerificationRequest): Promise<CertNoTwoElementVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certNoTwoElementVerificationWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the billing of services related to four-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
    * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
    * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request CompanyFourElementsVerificationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CompanyFourElementsVerificationResponse
   */
  async companyFourElementsVerificationWithOptions(request: CompanyFourElementsVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CompanyFourElementsVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.epCertName)) {
      query["EpCertName"] = request.epCertName;
    }

    if (!Util.isUnset(request.epCertNo)) {
      query["EpCertNo"] = request.epCertNo;
    }

    if (!Util.isUnset(request.legalPersonCertName)) {
      query["LegalPersonCertName"] = request.legalPersonCertName;
    }

    if (!Util.isUnset(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
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
      action: "CompanyFourElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompanyFourElementsVerificationResponse>(await this.callApi(params, req, runtime), new CompanyFourElementsVerificationResponse({}));
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the billing of services related to four-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
    * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
    * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request CompanyFourElementsVerificationRequest
    * @return CompanyFourElementsVerificationResponse
   */
  async companyFourElementsVerification(request: CompanyFourElementsVerificationRequest): Promise<CompanyFourElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.companyFourElementsVerificationWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the billing of services related to three-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
    * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
    * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request CompanyThreeElementsVerificationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CompanyThreeElementsVerificationResponse
   */
  async companyThreeElementsVerificationWithOptions(request: CompanyThreeElementsVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CompanyThreeElementsVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.epCertName)) {
      query["EpCertName"] = request.epCertName;
    }

    if (!Util.isUnset(request.epCertNo)) {
      query["EpCertNo"] = request.epCertNo;
    }

    if (!Util.isUnset(request.legalPersonCertName)) {
      query["LegalPersonCertName"] = request.legalPersonCertName;
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
      action: "CompanyThreeElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompanyThreeElementsVerificationResponse>(await this.callApi(params, req, runtime), new CompanyThreeElementsVerificationResponse({}));
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the billing of services related to three-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
    * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
    * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request CompanyThreeElementsVerificationRequest
    * @return CompanyThreeElementsVerificationResponse
   */
  async companyThreeElementsVerification(request: CompanyThreeElementsVerificationRequest): Promise<CompanyThreeElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.companyThreeElementsVerificationWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the billing of services related to two-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
    * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0 or 1.
    * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request CompanyTwoElementsVerificationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CompanyTwoElementsVerificationResponse
   */
  async companyTwoElementsVerificationWithOptions(request: CompanyTwoElementsVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CompanyTwoElementsVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.epCertName)) {
      query["EpCertName"] = request.epCertName;
    }

    if (!Util.isUnset(request.epCertNo)) {
      query["EpCertNo"] = request.epCertNo;
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
      action: "CompanyTwoElementsVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompanyTwoElementsVerificationResponse>(await this.callApi(params, req, runtime), new CompanyTwoElementsVerificationResponse({}));
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the billing of services related to two-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
    * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0 or 1.
    * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request CompanyTwoElementsVerificationRequest
    * @return CompanyTwoElementsVerificationResponse
   */
  async companyTwoElementsVerification(request: CompanyTwoElementsVerificationRequest): Promise<CompanyTwoElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.companyTwoElementsVerificationWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation to verify whether a phone number is a nonexistent number. When you call this operation to verify a number, the system charges you CNY 0.01 per verification based on the number of verifications. **Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.**
    * *   You are charged only if the value of Code is OK and the value of Status is not UNKNOWN.
    * *   The prediction is not strictly accurate because Cell Phone Number Service predicts the nonexistent number probability by using AI algorithms. The accuracy rate of the prediction and the recall rate of empty numbers are about 95%. **Pay attention to this point when you call this operation**.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    * ### [](#)Authorization information
    * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    *
    * @param request DescribeEmptyNumberRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeEmptyNumberResponse
   */
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

  /**
    * *   You can call this operation to verify whether a phone number is a nonexistent number. When you call this operation to verify a number, the system charges you CNY 0.01 per verification based on the number of verifications. **Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.**
    * *   You are charged only if the value of Code is OK and the value of Status is not UNKNOWN.
    * *   The prediction is not strictly accurate because Cell Phone Number Service predicts the nonexistent number probability by using AI algorithms. The accuracy rate of the prediction and the recall rate of empty numbers are about 95%. **Pay attention to this point when you call this operation**.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    * ### [](#)Authorization information
    * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    *
    * @param request DescribeEmptyNumberRequest
    * @return DescribeEmptyNumberResponse
   */
  async describeEmptyNumber(request: DescribeEmptyNumberRequest): Promise<DescribeEmptyNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmptyNumberWithOptions(request, runtime);
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

  /**
    * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the Labels page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can use the label. Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.
    *
    * @param request DescribePhoneNumberAnalysisAIRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePhoneNumberAnalysisAIResponse
   */
  async describePhoneNumberAnalysisAIWithOptions(request: DescribePhoneNumberAnalysisAIRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberAnalysisAIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.modelConfig)) {
      query["ModelConfig"] = request.modelConfig;
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
      action: "DescribePhoneNumberAnalysisAI",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberAnalysisAIResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberAnalysisAIResponse({}));
  }

  /**
    * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the Labels page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can use the label. Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.
    *
    * @param request DescribePhoneNumberAnalysisAIRequest
    * @return DescribePhoneNumberAnalysisAIResponse
   */
  async describePhoneNumberAnalysisAI(request: DescribePhoneNumberAnalysisAIRequest): Promise<DescribePhoneNumberAnalysisAIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisAIWithOptions(request, runtime);
  }

  async describePhoneNumberAnalysisTransparentWithOptions(request: DescribePhoneNumberAnalysisTransparentRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberAnalysisTransparentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.inputNumber)) {
      query["InputNumber"] = request.inputNumber;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.numberType)) {
      query["NumberType"] = request.numberType;
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
      action: "DescribePhoneNumberAnalysisTransparent",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberAnalysisTransparentResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberAnalysisTransparentResponse({}));
  }

  async describePhoneNumberAnalysisTransparent(request: DescribePhoneNumberAnalysisTransparentRequest): Promise<DescribePhoneNumberAnalysisTransparentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisTransparentWithOptions(request, runtime);
  }

  /**
    * @deprecated : DescribePhoneNumberAttribute is deprecated, please use Dytnsapi::2020-02-17::DescribePhoneNumberOperatorAttribute instead.
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 2,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePhoneNumberAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePhoneNumberAttributeResponse
   */
  // Deprecated
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

  /**
    * @deprecated : DescribePhoneNumberAttribute is deprecated, please use Dytnsapi::2020-02-17::DescribePhoneNumberOperatorAttribute instead.
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 2,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePhoneNumberAttributeRequest
    * @return DescribePhoneNumberAttributeResponse
   */
  // Deprecated
  async describePhoneNumberAttribute(request: DescribePhoneNumberAttributeRequest): Promise<DescribePhoneNumberAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAttributeWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * ### [](#qps)QPS limits
    * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePhoneNumberOnlineTimeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePhoneNumberOnlineTimeResponse
   */
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

  /**
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * ### [](#qps)QPS limits
    * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribePhoneNumberOnlineTimeRequest
    * @return DescribePhoneNumberOnlineTimeResponse
   */
  async describePhoneNumberOnlineTime(request: DescribePhoneNumberOnlineTimeRequest): Promise<DescribePhoneNumberOnlineTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154008~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   You can call this operation to obtain the carrier, registration location, and mobile number portability information about a phone number. You can query phone numbers in **plaintext** and phone numbers that are encrypted by using **MD5** and **SHA256**.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request DescribePhoneNumberOperatorAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePhoneNumberOperatorAttributeResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154008~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   You can call this operation to obtain the carrier, registration location, and mobile number portability information about a phone number. You can query phone numbers in **plaintext** and phone numbers that are encrypted by using **MD5** and **SHA256**.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    *
    * @param request DescribePhoneNumberOperatorAttributeRequest
    * @return DescribePhoneNumberOperatorAttributeResponse
   */
  async describePhoneNumberOperatorAttribute(request: DescribePhoneNumberOperatorAttributeRequest): Promise<DescribePhoneNumberOperatorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberOperatorAttributeWithOptions(request, runtime);
  }

  async describePhoneNumberRiskWithOptions(request: DescribePhoneNumberRiskRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberRiskResponse> {
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
      action: "DescribePhoneNumberRisk",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePhoneNumberRiskResponse>(await this.callApi(params, req, runtime), new DescribePhoneNumberRiskResponse({}));
  }

  async describePhoneNumberRisk(request: DescribePhoneNumberRiskRequest): Promise<DescribePhoneNumberRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberRiskWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   You are charged for phone number verifications only if the value of Code is OK and the value of VerifyResult is not 0.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ## [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    * ## [](#)Authorization information
    * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    *
    * @param request DescribePhoneTwiceTelVerifyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribePhoneTwiceTelVerifyResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   You are charged for phone number verifications only if the value of Code is OK and the value of VerifyResult is not 0.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ## [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    * ## [](#)Authorization information
    * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    *
    * @param request DescribePhoneTwiceTelVerifyRequest
    * @return DescribePhoneTwiceTelVerifyResponse
   */
  async describePhoneTwiceTelVerify(request: DescribePhoneTwiceTelVerifyRequest): Promise<DescribePhoneTwiceTelVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  async getUAIDApplyTokenSignWithOptions(request: GetUAIDApplyTokenSignRequest, runtime: $Util.RuntimeOptions): Promise<GetUAIDApplyTokenSignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.format)) {
      query["Format"] = request.format;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.paramKey)) {
      query["ParamKey"] = request.paramKey;
    }

    if (!Util.isUnset(request.paramStr)) {
      query["ParamStr"] = request.paramStr;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUAIDApplyTokenSign",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUAIDApplyTokenSignResponse>(await this.callApi(params, req, runtime), new GetUAIDApplyTokenSignResponse({}));
  }

  async getUAIDApplyTokenSign(request: GetUAIDApplyTokenSignRequest): Promise<GetUAIDApplyTokenSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUAIDApplyTokenSignWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request InvalidPhoneNumberFilterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InvalidPhoneNumberFilterResponse
   */
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

  /**
    * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request InvalidPhoneNumberFilterRequest
    * @return InvalidPhoneNumberFilterResponse
   */
  async invalidPhoneNumberFilter(request: InvalidPhoneNumberFilterRequest): Promise<InvalidPhoneNumberFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invalidPhoneNumberFilterWithOptions(request, runtime);
  }

  async phoneNumberConvertServiceWithOptions(request: PhoneNumberConvertServiceRequest, runtime: $Util.RuntimeOptions): Promise<PhoneNumberConvertServiceResponse> {
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
      action: "PhoneNumberConvertService",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PhoneNumberConvertServiceResponse>(await this.callApi(params, req, runtime), new PhoneNumberConvertServiceResponse({}));
  }

  async phoneNumberConvertService(request: PhoneNumberConvertServiceRequest): Promise<PhoneNumberConvertServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberConvertServiceWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberEncryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberEncryptResponse
   */
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

  /**
    * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberEncryptRequest
    * @return PhoneNumberEncryptResponse
   */
  async phoneNumberEncrypt(request: PhoneNumberEncryptRequest): Promise<PhoneNumberEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberEncryptWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForAccountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberStatusForAccountResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForAccountRequest
    * @return PhoneNumberStatusForAccountResponse
   */
  async phoneNumberStatusForAccount(request: PhoneNumberStatusForAccountRequest): Promise<PhoneNumberStatusForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForAccountWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForPublicRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberStatusForPublicResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForPublicRequest
    * @return PhoneNumberStatusForPublicResponse
   */
  async phoneNumberStatusForPublic(request: PhoneNumberStatusForPublicRequest): Promise<PhoneNumberStatusForPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForPublicWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForRealRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberStatusForRealResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForRealRequest
    * @return PhoneNumberStatusForRealResponse
   */
  async phoneNumberStatusForReal(request: PhoneNumberStatusForRealRequest): Promise<PhoneNumberStatusForRealResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForRealWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForSmsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberStatusForSmsResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForSmsRequest
    * @return PhoneNumberStatusForSmsResponse
   */
  async phoneNumberStatusForSms(request: PhoneNumberStatusForSmsRequest): Promise<PhoneNumberStatusForSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForSmsWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   You are charged only if the value of Code is OK and the value of IsPrivacyNumber is true or false.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForVirtualRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberStatusForVirtualResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   You are charged only if the value of Code is OK and the value of IsPrivacyNumber is true or false.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForVirtualRequest
    * @return PhoneNumberStatusForVirtualResponse
   */
  async phoneNumberStatusForVirtual(request: PhoneNumberStatusForVirtualRequest): Promise<PhoneNumberStatusForVirtualResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForVirtualWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForVoiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PhoneNumberStatusForVoiceResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](~~154006~~).
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * ### [](#qps)QPS limits
    * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request PhoneNumberStatusForVoiceRequest
    * @return PhoneNumberStatusForVoiceResponse
   */
  async phoneNumberStatusForVoice(request: PhoneNumberStatusForVoiceRequest): Promise<PhoneNumberStatusForVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForVoiceWithOptions(request, runtime);
  }

  async queryAvailableAuthCodeWithOptions(request: QueryAvailableAuthCodeRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvailableAuthCodeResponse> {
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

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvailableAuthCode",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAvailableAuthCodeResponse>(await this.callApi(params, req, runtime), new QueryAvailableAuthCodeResponse({}));
  }

  async queryAvailableAuthCode(request: QueryAvailableAuthCodeRequest): Promise<QueryAvailableAuthCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvailableAuthCodeWithOptions(request, runtime);
  }

  async queryTagApplyRuleWithOptions(request: QueryTagApplyRuleRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagApplyRuleResponse> {
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

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTagApplyRule",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTagApplyRuleResponse>(await this.callApi(params, req, runtime), new QueryTagApplyRuleResponse({}));
  }

  async queryTagApplyRule(request: QueryTagApplyRuleRequest): Promise<QueryTagApplyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagApplyRuleWithOptions(request, runtime);
  }

  async queryTagInfoBySelectionWithOptions(request: QueryTagInfoBySelectionRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagInfoBySelectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.industryId)) {
      query["IndustryId"] = request.industryId;
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

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTagInfoBySelection",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTagInfoBySelectionResponse>(await this.callApi(params, req, runtime), new QueryTagInfoBySelectionResponse({}));
  }

  async queryTagInfoBySelection(request: QueryTagInfoBySelectionRequest): Promise<QueryTagInfoBySelectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagInfoBySelectionWithOptions(request, runtime);
  }

  async queryTagListPageWithOptions(request: QueryTagListPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagListPageResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTagListPage",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTagListPageResponse>(await this.callApi(params, req, runtime), new QueryTagListPageResponse({}));
  }

  async queryTagListPage(request: QueryTagListPageRequest): Promise<QueryTagListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagListPageWithOptions(request, runtime);
  }

  async queryUsageStatisticsByTagIdWithOptions(request: QueryUsageStatisticsByTagIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryUsageStatisticsByTagIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUsageStatisticsByTagId",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUsageStatisticsByTagIdResponse>(await this.callApi(params, req, runtime), new QueryUsageStatisticsByTagIdResponse({}));
  }

  async queryUsageStatisticsByTagId(request: QueryUsageStatisticsByTagIdRequest): Promise<QueryUsageStatisticsByTagIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUsageStatisticsByTagIdWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
    * ### [](#qps)QPS limits
    * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ThreeElementsVerificationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ThreeElementsVerificationResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
    * ### [](#qps)QPS limits
    * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ThreeElementsVerificationRequest
    * @return ThreeElementsVerificationResponse
   */
  async threeElementsVerification(request: ThreeElementsVerificationRequest): Promise<ThreeElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.threeElementsVerificationWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
    * ### [](#qps)QPS limits
    * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request TwoElementsVerificationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TwoElementsVerificationResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you are familiar with the [billing](~~154751~~) of Cell Phone Number Service.
    * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
    * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
    * ### [](#qps)QPS limits
    * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request TwoElementsVerificationRequest
    * @return TwoElementsVerificationResponse
   */
  async twoElementsVerification(request: TwoElementsVerificationRequest): Promise<TwoElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.twoElementsVerificationWithOptions(request, runtime);
  }

  async uAIDVerificationWithOptions(request: UAIDVerificationRequest, runtime: $Util.RuntimeOptions): Promise<UAIDVerificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    if (!Util.isUnset(request.userGrantId)) {
      query["UserGrantId"] = request.userGrantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UAIDVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UAIDVerificationResponse>(await this.callApi(params, req, runtime), new UAIDVerificationResponse({}));
  }

  async uAIDVerification(request: UAIDVerificationRequest): Promise<UAIDVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uAIDVerificationWithOptions(request, runtime);
  }

}
