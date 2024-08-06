// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CertNoThreeElementVerificationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  certName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  certPicture?: string;
  /**
   * @example
   * 示例值示例值
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      certName: 'CertName',
      certNo: 'CertNo',
      certPicture: 'CertPicture',
      mask: 'Mask',
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
      certPicture: 'string',
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

export class CertNoThreeElementVerificationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: CertNoThreeElementVerificationResponseBodyData;
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
      data: CertNoThreeElementVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertNoThreeElementVerificationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertNoThreeElementVerificationResponseBody;
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
      body: CertNoThreeElementVerificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertNoTwoElementVerificationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  certName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 331021200001010000
   */
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
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CertNoTwoElementVerificationResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertNoTwoElementVerificationResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * 示例值示例值
   */
  epCertName?: string;
  /**
   * @remarks
   * The business license number.
   * 
   * This parameter is required.
   * 
   * @example
   * 9242032*******J627
   */
  epCertNo?: string;
  /**
   * @remarks
   * The name of the legal representative.
   * 
   * >  If an enterprise has multiple legal representatives, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  legalPersonCertName?: string;
  /**
   * @remarks
   * The ID card number of the legal representative.
   * 
   * >  If an enterprise has multiple legal representatives, separate the ID card numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 331021********0011
   */
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
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
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
   * The response parameters.
   */
  data?: CompanyFourElementsVerificationResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompanyFourElementsVerificationResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  epCertName?: string;
  /**
   * @remarks
   * The business license number.
   * 
   * This parameter is required.
   * 
   * @example
   * 9242032*******J627
   */
  epCertNo?: string;
  /**
   * @remarks
   * The name of the legal representative.
   * 
   * >  If an enterprise has multiple legal representatives, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
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
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
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
   * The response parameters.
   */
  data?: CompanyThreeElementsVerificationResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompanyThreeElementsVerificationResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  epCertName?: string;
  /**
   * @remarks
   * The business license number.
   * 
   * This parameter is required.
   * 
   * @example
   * 9242032*******J627
   */
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
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
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
   * The response parameters.
   */
  data?: CompanyTwoElementsVerificationResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompanyTwoElementsVerificationResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * >  You can query only one phone number a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 189****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **InvalidPhoneNumber.Check**: The phone number is invalid.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeEmptyNumberResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEmptyNumberResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1310000****
   */
  inputNumber?: string;
  /**
   * @example
   * MD5
   */
  mask?: string;
  /**
   * @example
   * 0
   */
  numberType?: number;
  ownerId?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DescribePhoneNumberAnalysisResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberAnalysisResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the ****[**Labels**](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can obtain an authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * HwD***nG
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 187****5620
   */
  inputNumber?: string;
  /**
   * @remarks
   * The model parameter configuration. This field is required by some labels.
   * 
   * @example
   * {"trainingJobId": "17**********48"}
   */
  modelConfig?: string;
  ownerId?: number;
  /**
   * @remarks
   * The score threshold for the phone number. Valid values: **0 to 100**.
   * 
   * >  The system provided by Alibaba Cloud determines whether to accept the specified score threshold. When the system does not accept the specified score threshold, the value of this field is invalid.
   * 
   * @example
   * 96
   */
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
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   OK: The request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneNumberAnalysisAIResponseBodyData;
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
   * 68A40250-50CD-034C-B728-0BD******177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberAnalysisAIResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 187****5620
   */
  inputNumber?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
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
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DescribePhoneNumberAnalysisTransparentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberAnalysisTransparentResponseBody;
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
  /**
   * @remarks
   * The phone number that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
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

export class DescribePhoneNumberAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **InvalidParameter**: The specified phone number is invalid or the parameter format is invalid.
   * *   **PhoneNumberNotfound**: No attribute information can be found for the specified phone number.
   * *   **isp.UNKNOWN**: An unknown exception occurred.
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
   * The attribute information about the phone number.
   */
  phoneNumberAttribute?: DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberAttributeResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The carrier. Valid values:
   * 
   * *   **MOBILE**: China Mobile
   * *   **UNICOM**: China Unicom
   * *   **TELECOM**: China Telecom
   * 
   * >  Alibaba Cloud automatically determines the carrier based on the carrier who assigns the phone number. Therefore, the value of this field does not affect the query result.
   * 
   * @example
   * UNICOM
   */
  carrier?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **PortabilityNumberNotSupported**: The phone number that is involved in mobile number portability is not supported.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * >  You are charged if the value of Code is OK and the value of VerifyResult is not -1. For more information, see [Pricing](https://help.aliyun.com/document_detail/154751.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneNumberOnlineTimeResponseBodyData;
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberOnlineTimeResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @example
   * 示例值
   */
  flowName?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**: The phone number is MD5-encrypted.
   * *   **SHA256**: The phone number is SHA256-encrypted.
   * 
   * > Letters in the string must be uppercase.
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  resultCount?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      flowName: 'FlowName',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resultCount: 'ResultCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      flowName: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resultCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOperatorAttributeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **InvalidParameter**: The specified phone number is invalid or the parameter format is invalid.
   * *   **PhoneNumberNotfound**: No attribute information can be found for the specified phone number.
   * *   **isp.UNKNOWN**: An unknown exception occurred.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneNumberOperatorAttributeResponseBodyData;
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
   * 68A40250-50CD-034C-B728-0BD135850177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberOperatorAttributeResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  inputNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneNumberRiskResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139*******
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The registration time. Specify the time in the yyyy-MM-dd HH:mm:ss format. This time is the service registration time of the mobile phone user. If the service registration time is later than the time when the phone number is assigned by a carrier, it indicates that the phone number is not a reassigned number. Otherwise, the phone number is a reassigned number.
   * 
   * > 
   * 
   * *   If a carrier allocates a single number multiple times, the system will determine whether the phone number is a reassigned number based on the time when the carrier last allocated the phone number.
   * 
   * *   The service registration time must be later than 00:00:00 on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-01-01 00:00:00
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **PortabilityNumberNotSupported**: The phone number that is involved in mobile number portability is not supported.
   * *   **RequestNumberNotSupported**: You are not allowed to query phone numbers assigned by China Broadnet (that is, phone numbers start with 192) and phone numbers assigned by virtual network operators (VNOs).
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * >  You are charged for phone number verifications if the value of Code is OK and the value of VerifyResult is not 0. For more information, see [Pricing](https://help.aliyun.com/document_detail/154751.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneTwiceTelVerifyResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePhoneTwiceTelVerifyResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HwD97InG
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30300
   */
  clientType?: string;
  /**
   * @example
   * 示例值示例值
   */
  format?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 955EC1A869852EA8BC66F********D7C6E92017BBD5B001C736EFEAFB775C232
   */
  paramKey?: string;
  /**
   * @example
   * B2F0D4CD7A216D16CE2AF4BBC********29A454FDDD991F919106C12CB89ABA8
   */
  paramStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20121227180001165
   */
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
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetUAIDApplyTokenSignResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 68A40250-50CD-034C-B728-0BD******177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUAIDApplyTokenSignResponseBody;
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

export class GetUAIDConversionSignRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值
   */
  clientType?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  format?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  paramKey?: string;
  /**
   * @example
   * 示例值示例值
   */
  paramStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
   */
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

export class GetUAIDConversionSignResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: GetUAIDConversionSignResponseBodyData;
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
      data: GetUAIDConversionSignResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUAIDConversionSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUAIDConversionSignResponseBody;
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
      body: GetUAIDConversionSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidPhoneNumberFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number.
   * 
   * >  Only the NORMAL encryption method is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **MobileNumberIllegal**: The phone number is invalid.
   * *   **EncyrptTypeIllegal**: The encryption type is invalid.
   * *   **MobileNumberTypeNotMatch**: The phone number does not match the encryption type.
   * *   **CarrierIllegal**: The carrier type is invalid.
   * *   **AuthCodeNotExist**: The authorization code does not exist.
   * *   **PortabilityNumberNotSupported**: Mobile number portability is not supported.
   * *   **Unknown**: An unknown exception occurred.
   * *   **AuthCodeAndApiNotMatch**: A system exception occurred.
   * *   **AuthCodeAndApiNotMatch**: The authorization code does not match the API operation.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Details about the returned entries.
   */
  data?: InvalidPhoneNumberFilterResponseBodyData[];
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvalidPhoneNumberFilterResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberConvertServiceResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * >  You can query only one phone number at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Set the value to **NORMAL**.
   * 
   * >  Only the NORMAL encryption method is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
   * Details about the returned entries.
   */
  data?: PhoneNumberEncryptResponseBodyData[];
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberEncryptResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **OperatorLimit**: The carrier prohibits the query of the phone number.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: PhoneNumberStatusForAccountResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberStatusForAccountResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, the value of this field is an 11-digit phone number.
   * *   If the value of Mask is MD5, the value of this field is a 32-bit encrypted string.
   * *   If the value of Mask is SHA256, the value of this field is a 64-bit encrypted string.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * @example
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **OperatorLimit**: The carrier prohibits the query of the phone number.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * >  For a list of error codes, see [Service error codes](https://next.api.aliyun.com/document/Dytnsapi/2020-02-17/errorCode).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: PhoneNumberStatusForPublicResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-****-****-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberStatusForPublicResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, the value of this field is an 11-digit phone number.
   * *   If the value of Mask is MD5, the value of this field is a 32-bit encrypted string.
   * *   If the value of Mask is SHA256, the value of this field is a 64-bit encrypted string.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 189****8999
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **OperatorLimit**: The carrier prohibits the query of the phone number.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: PhoneNumberStatusForRealResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberStatusForRealResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * zf08***pi6
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 181****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: plaintext
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **OperatorLimit**: The carrier prohibits the query of the phone number.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: PhoneNumberStatusForSmsResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberStatusForSmsResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, the value of this field is an 11-digit phone number.
   * *   If the value of Mask is MD5, the value of this field is a 32-bit encrypted string.
   * *   If the value of Mask is SHA256, the value of this field is a 64-bit encrypted string.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****0000
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **OperatorLimit**: The carrier prohibits the query of the phone number.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: PhoneNumberStatusForVirtualResponseBodyData;
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberStatusForVirtualResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****1234
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * *   **NORMAL**: plaintext
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **OperatorLimit**: The carrier prohibits the query of the phone number.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: PhoneNumberStatusForVoiceResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot issues.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PhoneNumberStatusForVoiceResponseBody;
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
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 22
   */
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
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: string[];
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
   * 6ADDCD31-6BC7-5913-A47F-E29A07E37FEE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAvailableAuthCodeResponseBody;
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

export class QueryPhoneNumberOnlineTimeRequest extends $tea.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  authCode?: string;
  /**
   * @example
   * 示例值
   */
  inputNumber?: string;
  /**
   * @example
   * 示例值示例值
   */
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

export class QueryPhoneNumberOnlineTimeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryPhoneNumberOnlineTimeResponseBodyData;
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
      data: QueryPhoneNumberOnlineTimeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneNumberOnlineTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPhoneNumberOnlineTimeResponseBody;
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
      body: QueryPhoneNumberOnlineTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneTwiceTelVerifyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  inputNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  mask?: string;
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

export class QueryPhoneTwiceTelVerifyResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: QueryPhoneTwiceTelVerifyResponseBodyData;
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
      data: QueryPhoneTwiceTelVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneTwiceTelVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPhoneTwiceTelVerifyResponseBody;
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
      body: QueryPhoneTwiceTelVerifyResponseBody,
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
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 61
   */
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
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTagApplyRuleResponseBodyData;
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
   * CC3BB6D2-****-****-9DCE-B38165CE4C47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTagApplyRuleResponseBody;
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
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 58
   */
  industryId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 83
   */
  sceneId?: number;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 71
   */
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
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTagInfoBySelectionResponseBodyData[];
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
   * 1C3B8084-3A7D-570B-BC84-BF945A9CF65E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTagInfoBySelectionResponseBody;
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
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 18
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 66
   */
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
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTagListPageResponseBodyData;
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
   * A4475657-BB7E-585D-9E09-37934F096103
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTagListPageResponseBody;
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
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 20230308
   */
  beginTime?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 20230406
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * The tag ID.
   * 
   * @example
   * 14
   */
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
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryUsageStatisticsByTagIdResponseBodyData[];
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
   * D45CC751-34DF-5797-81FB-9A2ED6DC024B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUsageStatisticsByTagIdResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The ID card number to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 83d8040d3cb2181e04****dc6ff5566d4493876a4a5da782887446356b0a787e
   */
  certCode?: string;
  /**
   * @remarks
   * The phone number to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  mask?: string;
  /**
   * @remarks
   * The name to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
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
  /**
   * @remarks
   * The response code.
   * 
   * *   **OK**: The request is successful.
   * *   For more information, see Error codes in this documentation.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: ThreeElementsVerificationResponseBodyData;
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ThreeElementsVerificationResponseBody;
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
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * *   **NORMAL**: plaintext
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  mask?: string;
  /**
   * @remarks
   * The name to be verified.
   * 
   * *   If the value of Mask is NORMAL, specify a value in plaintext for this field.
   * *   If the value of Mask is MD5, specify a MD5-encrypted value for this field.
   * *   If the value of Mask is SHA256, specify a SHA256-encrypted value for this field.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
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
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   For more information, see Error codes in this documentation.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number or name at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: TwoElementsVerificationResponseBodyData;
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
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE****
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TwoElementsVerificationResponseBody;
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

export class UAIDCollectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @example
   * 示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  province?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  token?: string;
  /**
   * @example
   * 示例值示例值
   */
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

export class UAIDCollectionResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: UAIDCollectionResponseBodyModel;
  /**
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: UAIDCollectionResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDCollectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UAIDCollectionResponseBody;
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
      body: UAIDCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDConversionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  uaidList?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uaidList: 'UaidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uaidList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDConversionResponseBody extends $tea.Model {
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
  model?: UAIDConversionResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: UAIDConversionResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDConversionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UAIDConversionResponseBody;
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
      body: UAIDConversionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDVerificationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HwD97InG
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @example
   * 示例值
   */
  ip?: string;
  /**
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  province?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MIGfMA0********3DQEBAQUAA4GNADCB
   */
  token?: string;
  /**
   * @example
   * Md****a3Em
   */
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
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: UAIDVerificationResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 68A40250-50CD-034C-B728-0BD******177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UAIDVerificationResponseBody;
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

export class CertNoThreeElementVerificationResponseBodyData extends $tea.Model {
  /**
   * @example
   * 示例值示例值
   */
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

export class CertNoTwoElementVerificationResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The business status of the enterprise.
   * 
   * @example
   * Active
   */
  enterpriseStatus?: string;
  /**
   * @remarks
   * The business term of the enterprise.
   * 
   * @example
   * 2023-05-25/2053-05-24
   */
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
  /**
   * @remarks
   * The information about the enterprise.
   */
  detailInfo?: CompanyFourElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields to be verified.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The code of the verification result. Valid values:
   * 
   * *   0: The four elements belong to the same enterprise.
   * *   1: The four elements belong to the same enterprise, but the business status of the enterprise is abnormal.
   * *   2: The legal representative information cannot match the enterprise information.
   * *   3: The four elements do not belong to the same enterprise.
   * *   4: No information about the enterprise is found.
   * *   5: No information about the legal representative is found.
   * 
   * @example
   * 0
   */
  reasonCode?: number;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * *   true: The four elements belong to the same enterprise and the business status of the enterprise is Active.
   * *   false: The four elements do not belong to the same enterprise.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The business status of the enterprise.
   * 
   * @example
   * Active
   */
  enterpriseStatus?: string;
  /**
   * @remarks
   * The business term of the enterprise.
   * 
   * @example
   * 2023-05-25/2053-05-24
   */
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
  /**
   * @remarks
   * The information about the enterprise.
   */
  detailInfo?: CompanyThreeElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields to be verified.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The code of the verification result. Valid values:
   * 
   * *   0: The three elements belong to the same enterprise.
   * *   1: The three elements belong to the same enterprise, and the business status of the enterprise is abnormal.
   * *   2: The legal representative information cannot match the enterprise information.
   * *   3: The three elements do not belong to the same enterprise.
   * *   4: No information about the enterprise is found.
   * *   5: No information about the legal representative is found.
   * 
   * @example
   * 0
   */
  reasonCode?: number;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * *   true: The three elements belong to the same enterprise and the business status of the enterprise is Active.
   * *   false: The three elements do not belong to the same enterprise.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The business status of the enterprise.
   * 
   * @example
   * Active
   */
  enterpriseStatus?: string;
  /**
   * @remarks
   * The business term of the enterprise.
   * 
   * @example
   * 2023-05-25/2053-05-24
   */
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
  /**
   * @remarks
   * The information about the enterprise.
   */
  detailInfo?: CompanyTwoElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields to be verified.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The code of the verification result. Valid values:
   * 
   * *   0: The two elements belong to the same enterprise.
   * *   1: The two elements belong to the same enterprise, but the business status of the enterprise is abnormal.
   * *   3: The two elements do not belong to the same enterprise.
   * *   4: No information about the enterprise is found.
   * 
   * @example
   * 0
   */
  reasonCode?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * *   true: The two elements belong to the same enterprise and the business status of the enterprise is Active.
   * *   false: The two elements do not belong to the same enterprise.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The specified phone number.
   * 
   * @example
   * 189****1234
   */
  number?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **EMPTY**: The queried phone number is a nonexistent number.
   * *   **NORMAL**: The queried phone number is valid.
   * *   **SUSPECT_EMPTY**: The queried phone number is suspected to be a nonexistent number.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * @example
   * EMPTY
   */
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
  /**
   * @example
   * NO
   */
  code?: string;
  /**
   * @example
   * 18752785620
   */
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
  /**
   * @remarks
   * The returned code.
   * 
   * *   YES: The specified phone number is valid.
   * *   NO: The specified phone number is invalid.
   * *   UNKNOWN: The specified phone number is unknown
   * 
   * @example
   * YES
   */
  code?: string;
  /**
   * @remarks
   * The specified phone number.
   * 
   * @example
   * 187****5620
   */
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
  /**
   * @example
   * 示例值示例值示例值
   */
  deviceRisk?: string;
  /**
   * @example
   * 示例值示例值
   */
  ipRisk?: string;
  /**
   * @example
   * 0.6
   */
  score1?: string;
  /**
   * @example
   * 0.2
   */
  score2?: string;
  /**
   * @example
   * 0.8
   */
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
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * *   **China Mobile**
   * *   **China Unicom**
   * *   **China Telecom**
   */
  basicCarrier?: string;
  /**
   * @remarks
   * The actual carrier, including the virtual network operator (VNO). If the phone number involves mobile number portability, the value of this parameter is the carrier after mobile number portability.
   */
  carrier?: string;
  /**
   * @remarks
   * The city where the phone number is registered.
   */
  city?: string;
  /**
   * @remarks
   * Indicates whether the phone number involves mobile number portability. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isNumberPortability?: boolean;
  /**
   * @remarks
   * The number segment to which the phone number belongs.
   * 
   * @example
   * 139
   */
  numberSegment?: number;
  /**
   * @remarks
   * The province where the phone number is registered.
   */
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
  /**
   * @remarks
   * The carrier code. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * *   **CBN**: China Broadnet
   * 
   * @example
   * CMCC
   */
  carrierCode?: string;
  /**
   * @remarks
   * The enumerated value of the usage period of a phone number. Valid values:
   * 
   * *   **-1**: No usage period information is available for the phone number.
   * *   **0**: The phone number status is abnormal. For example, the phone number is a nonexistent number.
   * *   **1** :[0-3) months.
   * *   **2** :[3-6] months.
   * *   **3** :(6-12] months.
   * *   **4** :(12-24] months.
   * *   **5** :(24,+) months.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * *   **China Mobile**
   * *   **China Unicom**
   * *   **China Telecom**
   * *   **China Broadnet**
   * 
   * @example
   * China Mobile
   */
  basicCarrier?: string;
  /**
   * @remarks
   * The actual carrier, including the virtual network operator (VNO). If the phone number involves mobile number portability, the value of this parameter is the carrier after mobile number portability.
   * 
   * @example
   * China Mobile
   */
  carrier?: string;
  /**
   * @remarks
   * The city where the phone number is registered.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * Indicates whether the phone number involves mobile number portability. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isNumberPortability?: boolean;
  /**
   * @remarks
   * The number segment to which the phone number belongs.
   * 
   * @example
   * 139
   */
  numberSegment?: number;
  /**
   * @remarks
   * The province where the phone number is registered.
   * 
   * @example
   * zhejiang
   */
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
  /**
   * @example
   * 示例值
   */
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
  /**
   * @remarks
   * The carrier. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  The returned result indicates the carrier who assigns the phone number. If the phone number involves mobile number portability, the carrier after mobile number portability is returned.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The result of the request. Valid values:
   * 
   * *   **0**: It is unable to judge whether the phone number is a reassigned number.
   * *   **1**: The phone number is a reassigned number.
   * *   **2**: The phone number is not a reassigned number.
   * *   **3**: The phone number has been canceled.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  /**
   * @example
   * D2E204D74EEB373E468632********23F592C4C9
   */
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

export class GetUAIDConversionSignResponseBodyData extends $tea.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值
   */
  outId?: string;
  /**
   * @example
   * 示例值
   */
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
  /**
   * @remarks
   * The returned filter results.
   * 
   * *   **YES**: the valid phone number. The mappings are returned.
   * *   **NO**: the invalid phone number. No mappings are returned.
   * 
   * @example
   * YES
   */
  code?: string;
  /**
   * @remarks
   * The encrypted phone number.
   * 
   * @example
   * 1400513****
   */
  encryptedNumber?: string;
  /**
   * @remarks
   * The time when the phone number expires.
   * 
   * @example
   * 2022-05-27 16:05:23
   */
  expireTime?: string;
  /**
   * @remarks
   * The original phone number.
   * 
   * @example
   * 1390000****
   */
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
  /**
   * @remarks
   * The encrypted phone number.
   * 
   * @example
   * 1400513****
   */
  encryptedNumber?: string;
  /**
   * @remarks
   * The time when the phone number expires.
   * 
   * @example
   * 2022-05-27 16:05:23
   */
  expireTime?: string;
  /**
   * @remarks
   * The original phone number.
   * 
   * @example
   * 1390000****
   */
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
  /**
   * @remarks
   * The basic carrier who assings the phone number. If the queried phone number involves mobile number portability, the carrier after mobile number portability is returned. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  You are not allowed to query the phone numbers assigned by China Broadnet.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **NORMAL**: The queried phone number is valid.
   * *   **SHUTDOWN**: The queried phone number is suspended.
   * *   **POWER_OFF**: The queried phone number cannot be connected.
   * *   **NOT_EXIST**: The queried phone number is a nonexistent number.
   * *   **DEFECT**: The queried phone number is invalid.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * >  Due to system adjustment of the carrier, the BUSY and POWER_OFF states cannot be returned for the numbers assigned by China Telecom. [For more information, see the official announcements](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The basic carrier who assigns the phone number. If the queried phone number involves mobile number portability, the carrier after mobile number portability is returned.
   * 
   * Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  You are not allowed to query the phone numbers assigned by China Broadnet.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **NORMAL**: The queried phone number can be reached.
   * *   **SHUTDOWN**: The queried phone number is suspended.
   * *   **POWER_OFF**: The phone is powered off.
   * *   **NOT_EXIST**: The queried phone number is a nonexistent number.
   * *   **SUSPECTED_POWER_OFF**: The phone is suspected to be powered off.
   * *   **BUSY**: The queried phone number is busy.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * >  Due to system adjustment of the carrier, the BUSY and POWER_OFF states cannot be returned for the numbers assigned by China Telecom. [For more information, see the official announcements](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The basic carrier who assigns the phone number. If the queried phone number involves mobile number portability, the carrier after mobile number portability is returned. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  You are not allowed to query the phone numbers assigned by China Broadnet.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **NORMAL**: The queried phone number can be reached.
   * *   **SHUTDOWN**: The queried phone number is suspended.
   * *   **POWER_OFF**: The phone is powered off.
   * *   **NOT_EXIST**: The queried phone number is a nonexistent number.
   * *   **BUSY**: The queried phone number is busy.
   * *   **SUSPECTED_POWER_OFF**: The phone is suspected to be powered off.
   * *   **DEFECT**: The queried phone number is invalid.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * >  Due to system adjustment of the carrier, the BUSY and POWER_OFF states cannot be returned for the numbers assigned by China Telecom. [For more information, see the official announcements](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * The basic carrier who assigns the phone number. If the queried phone number involves mobile number portability, the carrier after mobile number portability is returned. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  You are not allowed to query the phone numbers assigned by China Broadnet.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **NORMAL**: The queried phone number can be reached.
   * *   **SHUTDOWN**: The queried phone number is suspended.
   * *   **POWER_OFF**: The phone is powered off.
   * *   **NOT_EXIST**: The queried phone number is a nonexistent number.
   * *   **DEFECT**: The queried phone number is invalid.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * >  Due to system adjustment of the carrier, the BUSY, SUSPECTED_POWER_OFF, and POWER_OFF states cannot be returned for the numbers assigned by China Telecom. [For more information, see the official announcements](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
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
  /**
   * @remarks
   * Indicate whether the phone number is a virtual number assigned by the carrier. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The basic carrier who assigns the phone number. If the queried phone number involves mobile number portability, the carrier after mobile number portability is returned. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  You are not allowed to query the phone numbers assigned by China Broadnet.
   * 
   * @example
   * CTCC
   */
  carrier?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **NORMAL**: The queried phone number can be reached.
   * *   **SHUTDOWN**: The queried phone number is suspended.
   * *   **POWER_OFF**: The phone is powered off.
   * *   **NOT_EXIST**: The queried phone number is a nonexistent number.
   * *   **SUSPECTED_POWER_OFF**: The phone is suspected to be powered off.
   * *   **DEFECT**: The queried phone number is invalid.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * >  Due to system adjustment of the carrier, the BUSY, SUSPECTED_POWER_OFF, and POWER_OFF states cannot be returned for the numbers assigned by China Telecom. [For more information, see the official announcements](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
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

export class QueryPhoneNumberOnlineTimeResponseBodyData extends $tea.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  carrierCode?: string;
  /**
   * @example
   * 29
   */
  verifyResult?: number;
  static names(): { [key: string]: string } {
    return {
      carrierCode: 'CarrierCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrierCode: 'string',
      verifyResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPhoneTwiceTelVerifyResponseBodyData extends $tea.Model {
  /**
   * @example
   * 示例值示例值
   */
  carrierCode?: string;
  /**
   * @example
   * 73
   */
  verifyResult?: number;
  static names(): { [key: string]: string } {
    return {
      carrierCode: 'CarrierCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrierCode: 'string',
      verifyResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagApplyRuleResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The requirements for application materials.
   * 
   * @example
   * Requirements for application materials
   */
  applyMaterialDesc?: string;
  /**
   * @remarks
   * Indicates whether the application is automatically approved.
   * 
   * @example
   * 16
   */
  autoAudit?: number;
  /**
   * @remarks
   * The URL for the billing documentation.
   * 
   * @example
   * aliyundoc.com
   */
  chargingStandardLink?: string;
  /**
   * @remarks
   * indicates whether encrypted queries are supported.
   * 
   * @example
   * 99
   */
  encryptedQuery?: number;
  /**
   * @remarks
   * Indicates whether application materials are required.
   * 
   * @example
   * 46
   */
  needApplyMaterial?: number;
  /**
   * @remarks
   * The URL for the service agreement.
   * 
   * @example
   * example.aliyundoc.com
   */
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
  /**
   * @remarks
   * The English name.
   * 
   * @example
   * Aliyun
   */
  code?: string;
  /**
   * @remarks
   * The Chinese name.
   * 
   * @example
   * 阿里云
   */
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
  /**
   * @remarks
   * The English name of the parameter.
   * 
   * @example
   * preame
   */
  code?: string;
  /**
   * @remarks
   * The input hint.
   * 
   * @example
   * none
   */
  hint?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * false
   */
  must?: boolean;
  /**
   * @remarks
   * The Chinese name of the parameter.
   * 
   * @example
   * none
   */
  name?: string;
  /**
   * @remarks
   * The type. The code that corresponds to EnumUIWidgetTypes.
   * 
   * @example
   * aqzx
   */
  type?: string;
  /**
   * @remarks
   * The definitions of the enumerated values such as Code or Desc.
   */
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
  /**
   * @remarks
   * The list of available authorization codes.
   */
  authCodeList?: string[];
  complexityType?: string;
  /**
   * @remarks
   * The URL for the API demo.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz
   */
  demoAddress?: string;
  /**
   * @remarks
   * The URL for the API documentation.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.2573870.0.0.3aa921cbOrtqJz
   */
  docAddress?: string;
  /**
   * @remarks
   * The URL for the definitions of the enumerated values.
   * 
   * @example
   * example.aliyundoc.com
   */
  enumDefinitionAddress?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * process name
   */
  flowName?: string;
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 83
   */
  industryId?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * logistics
   */
  industryName?: string;
  /**
   * @remarks
   * The list of tag parameters.
   */
  paramList?: QueryTagInfoBySelectionResponseBodyDataParamList[];
  richTextDescription?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 41
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * General scenario
   */
  sceneName?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 31
   */
  tagId?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Number ownership
   */
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
  /**
   * @remarks
   * The API operation that is called by the frontend.
   * 
   * @example
   * TwoElementsVerification
   */
  apiName?: string;
  /**
   * @remarks
   * Code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The URL for the API documentation.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.388997.0.0.cf804cc7DX4vlP
   */
  docAddress?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 75
   */
  id?: number;
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 2
   */
  industryId?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * Test
   */
  industryName?: string;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * for autotest new
   */
  introduction?: string;
  /**
   * @remarks
   * Indicates whether the number is activated.
   * 
   * @example
   * 45
   */
  isOpen?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  /**
   * @remarks
   * *   0: The number is hidden.
   * *   1: The number is public.
   * 
   * @example
   * 1
   */
  saleStatusStr?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 13
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * check
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 11
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 24
   */
  pageSize?: number;
  /**
   * @remarks
   * The retruned data.
   */
  records?: QueryTagListPageResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 91
   */
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
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * g61I8UV5zd
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The numbers for which the query failed.
   * 
   * @example
   * 71
   */
  failTotal?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 20230312
   */
  gmtDateStr?: string;
  /**
   * @remarks
   * The ID of the authorization code usage record.
   * 
   * @example
   * 17
   */
  id?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * Home security
   */
  industryName?: string;
  /**
   * @remarks
   * The customer product ID (PID).
   * 
   * @example
   * 89
   */
  partnerId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * Return visit
   */
  sceneName?: string;
  /**
   * @remarks
   * The numbers for which the query succeeded.
   * 
   * @example
   * 93
   */
  successTotal?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 69
   */
  tagId?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Alibaba Cloud Query
   */
  tagName?: string;
  /**
   * @remarks
   * The total quantity of numbers that are involved in the query.
   * 
   * @example
   * 41
   */
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
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * *   **China Mobile**
   * *   **China Unicom**
   * *   **China Telecom**
   * 
   * @example
   * China Mobile
   */
  basicCarrier?: string;
  /**
   * @remarks
   * Indicates whether the specified name, phone number, and ID card number belong to the same user. Valid values:
   * 
   * * **1**: The specified name, phone number, and ID card number belong to the same user.
   * * **0**: The specified name, phone number, and ID card number do not belong to the same user.
   * * **2**: The specified name, phone number, and ID card number cannot be found.
   * 
   * **Note** The phone number registration data of a user is usually updated one or three days after registration. The registration data can be queried only after the update. The following table shows the verification results under different phone number states.
   * 
   * |Carrier/Phone number state|Out-of-service|Nonexistent|Canceled|
   * |---|---|---|---|
   * |China Mobile|Verifications can be carried out normally.|The specified name, phone number, and ID card number cannot be found.|The specified name, phone number, and ID card number cannot be found.|
   * |China Unicom|Verifications can be carried out normally.|The specified name, phone number, and ID card number do not belong to the same user.|The specified name, phone number, and ID card number do not belong to the same user.|
   * |China Telecom|Verifications can be carried out normally.|The specified name, phone number, and ID card number cannot be found.|The specified name, phone number, and ID card number cannot be found.|
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The basic carriers. Valid values:
   * 
   * *   **China Mobile**
   * *   **China Unicom**
   * *   **China Telecom**
   * 
   * >  You are not allowed to verify numbers assigned by China Broadnet.
   * 
   * @example
   * China Mobile
   */
  basicCarrier?: string;
  /**
   * @remarks
   * Indicates whether the specified name and phone number belong to the same user. Valid values:
   * 
   * * **1**: The specified name and phone number belong to the same user.
   * 
   * * **0**: The specified name and phone number do not belong to the same user.
   * 
   * * **2**: The specified name and phone number cannot be found.
   * 
   * The phone number registration data of a user is usually updated one or three days after registration. The registration data can be queried only after the update. The following table shows the verification results under different phone number states.
   * 
   * |Carrier/Phone number state|Out-of-service|Nonexistent|Canceled|
   * |---|---|---|---|
   * |China Mobile|Verifications can be carried out normally.|The specified name and phone number cannot be found.|The specified name and phone number cannot be found.|
   * |China Unicom|Verifications can be carried out normally.|The specified name and phone number do not belong to the same user.|The specified name and phone number do not belong to the same user.|
   * |China Telecom|Verifications can be carried out normally.|The specified name and phone number cannot be found.|The specified name and phone number cannot be found.|
   * 
   * @example
   * 1
   */
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

export class UAIDCollectionResponseBodyModel extends $tea.Model {
  /**
   * @example
   * 示例值
   */
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

export class UAIDConversionResponseBodyModel extends $tea.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneList?: string;
  static names(): { [key: string]: string } {
    return {
      phoneList: 'PhoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDVerificationResponseBodyData extends $tea.Model {
  /**
   * @example
   * B1E0C1********9F757AF52A035
   */
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

  /**
   * 身份证三要素
   * 
   * @param request - CertNoThreeElementVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertNoThreeElementVerificationResponse
   */
  async certNoThreeElementVerificationWithOptions(request: CertNoThreeElementVerificationRequest, runtime: $Util.RuntimeOptions): Promise<CertNoThreeElementVerificationResponse> {
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

    if (!Util.isUnset(request.certPicture)) {
      query["CertPicture"] = request.certPicture;
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
      action: "CertNoThreeElementVerification",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CertNoThreeElementVerificationResponse>(await this.callApi(params, req, runtime), new CertNoThreeElementVerificationResponse({}));
  }

  /**
   * 身份证三要素
   * 
   * @param request - CertNoThreeElementVerificationRequest
   * @returns CertNoThreeElementVerificationResponse
   */
  async certNoThreeElementVerification(request: CertNoThreeElementVerificationRequest): Promise<CertNoThreeElementVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certNoThreeElementVerificationWithOptions(request, runtime);
  }

  /**
   * 身份证二要素认证
   * 
   * @param request - CertNoTwoElementVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertNoTwoElementVerificationResponse
   */
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

  /**
   * 身份证二要素认证
   * 
   * @param request - CertNoTwoElementVerificationRequest
   * @returns CertNoTwoElementVerificationResponse
   */
  async certNoTwoElementVerification(request: CertNoTwoElementVerificationRequest): Promise<CertNoTwoElementVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certNoTwoElementVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the enterprise name, the business license number, and the name and ID card of the legal representative belong to the same enterprise. The verification is successful only when the preceding four elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to four-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyFourElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompanyFourElementsVerificationResponse
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
   * Verifies whether the enterprise name, the business license number, and the name and ID card of the legal representative belong to the same enterprise. The verification is successful only when the preceding four elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to four-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyFourElementsVerificationRequest
   * @returns CompanyFourElementsVerificationResponse
   */
  async companyFourElementsVerification(request: CompanyFourElementsVerificationRequest): Promise<CompanyFourElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.companyFourElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the enterprise name, the business license number, and the name of the legal representative belong to the same enterprise. The verification is successful only when the three elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to three-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyThreeElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompanyThreeElementsVerificationResponse
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
   * Verifies whether the enterprise name, the business license number, and the name of the legal representative belong to the same enterprise. The verification is successful only when the three elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to three-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0, 1, or 2.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyThreeElementsVerificationRequest
   * @returns CompanyThreeElementsVerificationResponse
   */
  async companyThreeElementsVerification(request: CompanyThreeElementsVerificationRequest): Promise<CompanyThreeElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.companyThreeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the enterprise name and the business license number belong to the same enterprise. The verification is successful only when the two elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to two-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0 or 1.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyTwoElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompanyTwoElementsVerificationResponse
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
   * Verifies whether the enterprise name and the business license number belong to the same enterprise. The verification is successful only when the two elements belong to the same enterprise and the business status of the enterprise is Active.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of services related to two-element verification for enterprises. For more information, see [Billing](https://help.aliyun.com/document_detail/154751.html?spm=a2c4g.154007.0.0.3edd7eb6E90YT4).
   * *   You are charged only if the value of VerifyResult is true or false and the value of ReasonCode is 0 or 1.
   * *   Before you call this operation, perform the following operations: Log on to the [Cell Phone Number Service console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fdytns.console.aliyun.com%2Foverview%3Fspm%3Da2c4g.608385.0.0.79847f8b3awqUC\\&lang=zh). On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - CompanyTwoElementsVerificationRequest
   * @returns CompanyTwoElementsVerificationResponse
   */
  async companyTwoElementsVerification(request: CompanyTwoElementsVerificationRequest): Promise<CompanyTwoElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.companyTwoElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Predicts whether a phone number is a nonexistent number by using AI algorithms.
   * 
   * @remarks
   *   You can call this operation to verify whether a phone number is a nonexistent number. When you call this operation to verify a number, the system charges you CNY 0.01 per verification based on the number of verifications. **Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.**
   * *   You are charged only if the value of Code is OK and the value of Status is not UNKNOWN.
   * *   The prediction is not strictly accurate because Cell Phone Number Service predicts the nonexistent number probability by using AI algorithms. The accuracy rate of the prediction and the recall rate of empty numbers are about 95%. **Pay attention to this point when you call this operation**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribeEmptyNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEmptyNumberResponse
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
   * Predicts whether a phone number is a nonexistent number by using AI algorithms.
   * 
   * @remarks
   *   You can call this operation to verify whether a phone number is a nonexistent number. When you call this operation to verify a number, the system charges you CNY 0.01 per verification based on the number of verifications. **Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.**
   * *   You are charged only if the value of Code is OK and the value of Status is not UNKNOWN.
   * *   The prediction is not strictly accurate because Cell Phone Number Service predicts the nonexistent number probability by using AI algorithms. The accuracy rate of the prediction and the recall rate of empty numbers are about 95%. **Pay attention to this point when you call this operation**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribeEmptyNumberRequest
   * @returns DescribeEmptyNumberResponse
   */
  async describeEmptyNumber(request: DescribeEmptyNumberRequest): Promise<DescribeEmptyNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmptyNumberWithOptions(request, runtime);
  }

  /**
   * 号码分析实时查询蚂蚁
   * 
   * @param request - DescribePhoneNumberAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisResponse
   */
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

  /**
   * 号码分析实时查询蚂蚁
   * 
   * @param request - DescribePhoneNumberAnalysisRequest
   * @returns DescribePhoneNumberAnalysisResponse
   */
  async describePhoneNumberAnalysis(request: DescribePhoneNumberAnalysisRequest): Promise<DescribePhoneNumberAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of a phone number.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the Labels page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can use the label. Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.
   * 
   * @param request - DescribePhoneNumberAnalysisAIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisAIResponse
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
   * Obtains the analysis results of a phone number.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the Labels page, find the label that you want to use, click Activate Now, enter the required information, and then submit your application. After your application is approved, you can use the label. Before you call this operation, make sure that you are familiar with the billing of Cell Phone Number Service.
   * 
   * @param request - DescribePhoneNumberAnalysisAIRequest
   * @returns DescribePhoneNumberAnalysisAIResponse
   */
  async describePhoneNumberAnalysisAI(request: DescribePhoneNumberAnalysisAIRequest): Promise<DescribePhoneNumberAnalysisAIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisAIWithOptions(request, runtime);
  }

  /**
   * 泛行业人群筛选
   * 
   * @param request - DescribePhoneNumberAnalysisTransparentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAnalysisTransparentResponse
   */
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

  /**
   * 泛行业人群筛选
   * 
   * @param request - DescribePhoneNumberAnalysisTransparentRequest
   * @returns DescribePhoneNumberAnalysisTransparentResponse
   */
  async describePhoneNumberAnalysisTransparent(request: DescribePhoneNumberAnalysisTransparentRequest): Promise<DescribePhoneNumberAnalysisTransparentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAnalysisTransparentWithOptions(request, runtime);
  }

  /**
   * Queries the carrier, registration location, and mobile number portability information of a phone number.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 2,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI DescribePhoneNumberAttribute is deprecated, please use Dytnsapi::2020-02-17::DescribePhoneNumberOperatorAttribute instead.
   * 
   * @param request - DescribePhoneNumberAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberAttributeResponse
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
   * Queries the carrier, registration location, and mobile number portability information of a phone number.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 2,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI DescribePhoneNumberAttribute is deprecated, please use Dytnsapi::2020-02-17::DescribePhoneNumberOperatorAttribute instead.
   * 
   * @param request - DescribePhoneNumberAttributeRequest
   * @returns DescribePhoneNumberAttributeResponse
   */
  // Deprecated
  async describePhoneNumberAttribute(request: DescribePhoneNumberAttributeRequest): Promise<DescribePhoneNumberAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the usage period of a phone number of a user.
   * 
   * @remarks
   *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePhoneNumberOnlineTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberOnlineTimeResponse
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
   * Queries the usage period of a phone number of a user.
   * 
   * @remarks
   *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePhoneNumberOnlineTimeRequest
   * @returns DescribePhoneNumberOnlineTimeResponse
   */
  async describePhoneNumberOnlineTime(request: DescribePhoneNumberOnlineTimeRequest): Promise<DescribePhoneNumberOnlineTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  /**
   * Queries the attribute information about a phone number, including the registration province, registration city, basic carrier (such as China Mobile, China Unicom, China Telecom, or China Broadnet), reseller of mobile communications services (such as Alibaba Communications), mobile number portability, and the number segment to which the phone number belongs.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154008.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   You can call this operation to obtain the carrier, registration location, and mobile number portability information about a phone number. You can query phone numbers in **plaintext** and phone numbers that are encrypted by using **MD5** and **SHA256**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - DescribePhoneNumberOperatorAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberOperatorAttributeResponse
   */
  async describePhoneNumberOperatorAttributeWithOptions(request: DescribePhoneNumberOperatorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhoneNumberOperatorAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.flowName)) {
      query["FlowName"] = request.flowName;
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

    if (!Util.isUnset(request.resultCount)) {
      query["ResultCount"] = request.resultCount;
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
   * Queries the attribute information about a phone number, including the registration province, registration city, basic carrier (such as China Mobile, China Unicom, China Telecom, or China Broadnet), reseller of mobile communications services (such as Alibaba Communications), mobile number portability, and the number segment to which the phone number belongs.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154008.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   You can call this operation to obtain the carrier, registration location, and mobile number portability information about a phone number. You can query phone numbers in **plaintext** and phone numbers that are encrypted by using **MD5** and **SHA256**.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * 
   * @param request - DescribePhoneNumberOperatorAttributeRequest
   * @returns DescribePhoneNumberOperatorAttributeResponse
   */
  async describePhoneNumberOperatorAttribute(request: DescribePhoneNumberOperatorAttributeRequest): Promise<DescribePhoneNumberOperatorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberOperatorAttributeWithOptions(request, runtime);
  }

  /**
   * 风险用户评分
   * 
   * @param request - DescribePhoneNumberRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneNumberRiskResponse
   */
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

  /**
   * 风险用户评分
   * 
   * @param request - DescribePhoneNumberRiskRequest
   * @returns DescribePhoneNumberRiskResponse
   */
  async describePhoneNumberRisk(request: DescribePhoneNumberRiskRequest): Promise<DescribePhoneNumberRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneNumberRiskWithOptions(request, runtime);
  }

  /**
   * Verifies whether a phone number is a reassigned phone number by calling this operation.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   You are charged for phone number verifications only if the value of Code is OK and the value of VerifyResult is not 0.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ## [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ## [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneTwiceTelVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePhoneTwiceTelVerifyResponse
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
   * Verifies whether a phone number is a reassigned phone number by calling this operation.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   You are charged for phone number verifications only if the value of Code is OK and the value of VerifyResult is not 0.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ## [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ## [](#)Authorization information
   * By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * 
   * @param request - DescribePhoneTwiceTelVerifyRequest
   * @returns DescribePhoneTwiceTelVerifyResponse
   */
  async describePhoneTwiceTelVerify(request: DescribePhoneTwiceTelVerifyRequest): Promise<DescribePhoneTwiceTelVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  /**
   * 获取UAID申请Token所需的签名字段
   * 
   * @param request - GetUAIDApplyTokenSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUAIDApplyTokenSignResponse
   */
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

  /**
   * 获取UAID申请Token所需的签名字段
   * 
   * @param request - GetUAIDApplyTokenSignRequest
   * @returns GetUAIDApplyTokenSignResponse
   */
  async getUAIDApplyTokenSign(request: GetUAIDApplyTokenSignRequest): Promise<GetUAIDApplyTokenSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUAIDApplyTokenSignWithOptions(request, runtime);
  }

  /**
   * 获取号码采集服务申请Token所需的签名字段
   * 
   * @param request - GetUAIDConversionSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUAIDConversionSignResponse
   */
  async getUAIDConversionSignWithOptions(request: GetUAIDConversionSignRequest, runtime: $Util.RuntimeOptions): Promise<GetUAIDConversionSignResponse> {
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
      action: "GetUAIDConversionSign",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUAIDConversionSignResponse>(await this.callApi(params, req, runtime), new GetUAIDConversionSignResponse({}));
  }

  /**
   * 获取号码采集服务申请Token所需的签名字段
   * 
   * @param request - GetUAIDConversionSignRequest
   * @returns GetUAIDConversionSignResponse
   */
  async getUAIDConversionSign(request: GetUAIDConversionSignRequest): Promise<GetUAIDConversionSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUAIDConversionSignWithOptions(request, runtime);
  }

  /**
   * Filters invalid phone numbers.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - InvalidPhoneNumberFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidPhoneNumberFilterResponse
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
   * Filters invalid phone numbers.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - InvalidPhoneNumberFilterRequest
   * @returns InvalidPhoneNumberFilterResponse
   */
  async invalidPhoneNumberFilter(request: InvalidPhoneNumberFilterRequest): Promise<InvalidPhoneNumberFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invalidPhoneNumberFilterWithOptions(request, runtime);
  }

  /**
   * @param request - PhoneNumberConvertServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberConvertServiceResponse
   */
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

  /**
   * @param request - PhoneNumberConvertServiceRequest
   * @returns PhoneNumberConvertServiceResponse
   */
  async phoneNumberConvertService(request: PhoneNumberConvertServiceRequest): Promise<PhoneNumberConvertServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberConvertServiceWithOptions(request, runtime);
  }

  /**
   * Encrypts the original phone number into a virtual number that starts with 140. Cell Phone Number Service integrates the communications services provided by Alibaba Cloud. This allows you to initiate a call by using a virtual number that starts with 140.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberEncryptResponse
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
   * Encrypts the original phone number into a virtual number that starts with 140. Cell Phone Number Service integrates the communications services provided by Alibaba Cloud. This allows you to initiate a call by using a virtual number that starts with 140.
   * 
   * @remarks
   * Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberEncryptRequest
   * @returns PhoneNumberEncryptResponse
   */
  async phoneNumberEncrypt(request: PhoneNumberEncryptRequest): Promise<PhoneNumberEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberEncryptWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForAccountResponse
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForAccountRequest
   * @returns PhoneNumberStatusForAccountResponse
   */
  async phoneNumberStatusForAccount(request: PhoneNumberStatusForAccountRequest): Promise<PhoneNumberStatusForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForPublicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForPublicResponse
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForPublicRequest
   * @returns PhoneNumberStatusForPublicResponse
   */
  async phoneNumberStatusForPublic(request: PhoneNumberStatusForPublicRequest): Promise<PhoneNumberStatusForPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForPublicWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForRealRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForRealResponse
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForRealRequest
   * @returns PhoneNumberStatusForRealResponse
   */
  async phoneNumberStatusForReal(request: PhoneNumberStatusForRealRequest): Promise<PhoneNumberStatusForRealResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForRealWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForSmsResponse
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForSmsRequest
   * @returns PhoneNumberStatusForSmsResponse
   */
  async phoneNumberStatusForSms(request: PhoneNumberStatusForSmsRequest): Promise<PhoneNumberStatusForSmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForSmsWithOptions(request, runtime);
  }

  /**
   * Queries the status of a virtual phone number. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   You are charged only if the value of Code is OK and the value of IsPrivacyNumber is true or false.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForVirtualRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForVirtualResponse
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
   * Queries the status of a virtual phone number. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   You are charged only if the value of Code is OK and the value of IsPrivacyNumber is true or false.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForVirtualRequest
   * @returns PhoneNumberStatusForVirtualResponse
   */
  async phoneNumberStatusForVirtual(request: PhoneNumberStatusForVirtualRequest): Promise<PhoneNumberStatusForVirtualResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForVirtualWithOptions(request, runtime);
  }

  /**
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PhoneNumberStatusForVoiceResponse
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
   * Queries the real-time service state of a phone number. The state includes NORMAL, SHUTDOWN, and NOT_EXIST. You can choose an encryption method for your phone number query, including plaintext, MD5, and SHA256.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   By default, only Alibaba Cloud accounts can call this operation. RAM users can call this operation only after the RAM users are granted the related permissions. For more information, see [Grant permissions to RAM users](https://help.aliyun.com/document_detail/154006.html).
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * ### [](#qps)QPS limits
   * You can call this operation up to 300 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PhoneNumberStatusForVoiceRequest
   * @returns PhoneNumberStatusForVoiceResponse
   */
  async phoneNumberStatusForVoice(request: PhoneNumberStatusForVoiceRequest): Promise<PhoneNumberStatusForVoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.phoneNumberStatusForVoiceWithOptions(request, runtime);
  }

  /**
   * Queries available authorization codes.
   * 
   * @param request - QueryAvailableAuthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailableAuthCodeResponse
   */
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

  /**
   * Queries available authorization codes.
   * 
   * @param request - QueryAvailableAuthCodeRequest
   * @returns QueryAvailableAuthCodeResponse
   */
  async queryAvailableAuthCode(request: QueryAvailableAuthCodeRequest): Promise<QueryAvailableAuthCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvailableAuthCodeWithOptions(request, runtime);
  }

  /**
   * 在网时长专用接口
   * 
   * @param request - QueryPhoneNumberOnlineTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneNumberOnlineTimeResponse
   */
  async queryPhoneNumberOnlineTimeWithOptions(request: QueryPhoneNumberOnlineTimeRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneNumberOnlineTimeResponse> {
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
      action: "QueryPhoneNumberOnlineTime",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPhoneNumberOnlineTimeResponse>(await this.callApi(params, req, runtime), new QueryPhoneNumberOnlineTimeResponse({}));
  }

  /**
   * 在网时长专用接口
   * 
   * @param request - QueryPhoneNumberOnlineTimeRequest
   * @returns QueryPhoneNumberOnlineTimeResponse
   */
  async queryPhoneNumberOnlineTime(request: QueryPhoneNumberOnlineTimeRequest): Promise<QueryPhoneNumberOnlineTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneNumberOnlineTimeWithOptions(request, runtime);
  }

  /**
   * 二次号携号转网号码查询
   * 
   * @param request - QueryPhoneTwiceTelVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneTwiceTelVerifyResponse
   */
  async queryPhoneTwiceTelVerifyWithOptions(request: QueryPhoneTwiceTelVerifyRequest, runtime: $Util.RuntimeOptions): Promise<QueryPhoneTwiceTelVerifyResponse> {
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
      action: "QueryPhoneTwiceTelVerify",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPhoneTwiceTelVerifyResponse>(await this.callApi(params, req, runtime), new QueryPhoneTwiceTelVerifyResponse({}));
  }

  /**
   * 二次号携号转网号码查询
   * 
   * @param request - QueryPhoneTwiceTelVerifyRequest
   * @returns QueryPhoneTwiceTelVerifyResponse
   */
  async queryPhoneTwiceTelVerify(request: QueryPhoneTwiceTelVerifyRequest): Promise<QueryPhoneTwiceTelVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPhoneTwiceTelVerifyWithOptions(request, runtime);
  }

  /**
   * Queries tag application rules.
   * 
   * @param request - QueryTagApplyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagApplyRuleResponse
   */
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

  /**
   * Queries tag application rules.
   * 
   * @param request - QueryTagApplyRuleRequest
   * @returns QueryTagApplyRuleResponse
   */
  async queryTagApplyRule(request: QueryTagApplyRuleRequest): Promise<QueryTagApplyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagApplyRuleWithOptions(request, runtime);
  }

  /**
   * Queries information about tags.
   * 
   * @param request - QueryTagInfoBySelectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagInfoBySelectionResponse
   */
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

  /**
   * Queries information about tags.
   * 
   * @param request - QueryTagInfoBySelectionRequest
   * @returns QueryTagInfoBySelectionResponse
   */
  async queryTagInfoBySelection(request: QueryTagInfoBySelectionRequest): Promise<QueryTagInfoBySelectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagInfoBySelectionWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags by page.
   * 
   * @param request - QueryTagListPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagListPageResponse
   */
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

  /**
   * Queries a list of tags by page.
   * 
   * @param request - QueryTagListPageRequest
   * @returns QueryTagListPageResponse
   */
  async queryTagListPage(request: QueryTagListPageRequest): Promise<QueryTagListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagListPageWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics based on tag IDs.
   * 
   * @param request - QueryUsageStatisticsByTagIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUsageStatisticsByTagIdResponse
   */
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

  /**
   * Queries the usage statistics based on tag IDs.
   * 
   * @param request - QueryUsageStatisticsByTagIdRequest
   * @returns QueryUsageStatisticsByTagIdResponse
   */
  async queryUsageStatisticsByTagId(request: QueryUsageStatisticsByTagIdRequest): Promise<QueryUsageStatisticsByTagIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUsageStatisticsByTagIdWithOptions(request, runtime);
  }

  /**
   * Verifies whether the name, phone number, and ID card number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ThreeElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ThreeElementsVerificationResponse
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
   * Verifies whether the name, phone number, and ID card number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ThreeElementsVerificationRequest
   * @returns ThreeElementsVerificationResponse
   */
  async threeElementsVerification(request: ThreeElementsVerificationRequest): Promise<ThreeElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.threeElementsVerificationWithOptions(request, runtime);
  }

  /**
   * Verifies whether the name and phone number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TwoElementsVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TwoElementsVerificationResponse
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
   * Verifies whether the name and phone number entered by a user belong to the same user.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/154751.html) of Cell Phone Number Service.
   * *   Before you call this operation, perform the following operations: Log on to the Cell Phone Number Service console. On the [Labels](https://dytns.console.aliyun.com/analysis/square) page, find the label that you want to use, click **Activate Now**, enter the required information, and then submit your application. After your application is approved, you can use the label.
   * *   You are charged only if the value of Code is OK and the value of IsConsistent is not 2.
   * ### [](#qps)QPS limits
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TwoElementsVerificationRequest
   * @returns TwoElementsVerificationResponse
   */
  async twoElementsVerification(request: TwoElementsVerificationRequest): Promise<TwoElementsVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.twoElementsVerificationWithOptions(request, runtime);
  }

  /**
   * UAID采集
   * 
   * @param request - UAIDCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UAIDCollectionResponse
   */
  async uAIDCollectionWithOptions(request: UAIDCollectionRequest, runtime: $Util.RuntimeOptions): Promise<UAIDCollectionResponse> {
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
      action: "UAIDCollection",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UAIDCollectionResponse>(await this.callApi(params, req, runtime), new UAIDCollectionResponse({}));
  }

  /**
   * UAID采集
   * 
   * @param request - UAIDCollectionRequest
   * @returns UAIDCollectionResponse
   */
  async uAIDCollection(request: UAIDCollectionRequest): Promise<UAIDCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uAIDCollectionWithOptions(request, runtime);
  }

  /**
   * uaid号码转换服务
   * 
   * @param request - UAIDConversionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UAIDConversionResponse
   */
  async uAIDConversionWithOptions(request: UAIDConversionRequest, runtime: $Util.RuntimeOptions): Promise<UAIDConversionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.carrier)) {
      query["Carrier"] = request.carrier;
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

    if (!Util.isUnset(request.uaidList)) {
      query["UaidList"] = request.uaidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UAIDConversion",
      version: "2020-02-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UAIDConversionResponse>(await this.callApi(params, req, runtime), new UAIDConversionResponse({}));
  }

  /**
   * uaid号码转换服务
   * 
   * @param request - UAIDConversionRequest
   * @returns UAIDConversionResponse
   */
  async uAIDConversion(request: UAIDConversionRequest): Promise<UAIDConversionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uAIDConversionWithOptions(request, runtime);
  }

  /**
   * 获取UAID
   * 
   * @param request - UAIDVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UAIDVerificationResponse
   */
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

  /**
   * 获取UAID
   * 
   * @param request - UAIDVerificationRequest
   * @returns UAIDVerificationResponse
   */
  async uAIDVerification(request: UAIDVerificationRequest): Promise<UAIDVerificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uAIDVerificationWithOptions(request, runtime);
  }

}
