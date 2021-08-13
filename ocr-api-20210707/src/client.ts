// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RecognizeDrivingLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeDrivingLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeDrivingLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeKoreanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeKoreanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeCarInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeCarInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeMixedInvoicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeMixedInvoicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEstateCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEstateCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeCarNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeCarNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrRequest extends $tea.Model {
  url?: string;
  imageType?: string;
  subject?: string;
  outputOricoord?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      imageType: 'ImageType',
      subject: 'Subject',
      outputOricoord: 'OutputOricoord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      imageType: 'string',
      subject: 'string',
      outputOricoord: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEduPaperOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEduPaperOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTradeMarkCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTradeMarkCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeBirthCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeBirthCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDoctypeRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDoctypeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDoctypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeDoctypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeDoctypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeBankAccountLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeBankAccountLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFoodManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFoodManageLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeRollTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeRollTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEduFormulaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEduFormulaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizePassportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizePassportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTaxiInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTaxiInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFoodProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFoodProduceLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeMedicalDeviceProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeMedicalDeviceProduceLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  needSortPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
      needSortPage: 'NeedSortPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
      needSortPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeHandwritingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeHandwritingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeAirItineraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeAirItineraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeJanpaneseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeJanpaneseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeCtwoMedicalDeviceManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeCtwoMedicalDeviceManageLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeThaiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeThaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeMedicalDeviceManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeMedicalDeviceManageLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeLatinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeLatinResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedCardsRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedCardsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeMixedCardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeMixedCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeWaybillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeWaybillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeCarVinCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeCarVinCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  needSortPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
      needSortPage: 'NeedSortPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
      needSortPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeAdvancedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeAdvancedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVehicleLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVehicleLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianRequest extends $tea.Model {
  url?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeRussianResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeRussianResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeBasicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeBasicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeBusinessLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeBankCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeBankCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutRequest extends $tea.Model {
  url?: string;
  cutType?: string;
  imageType?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      cutType: 'CutType',
      imageType: 'ImageType',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      cutType: 'string',
      imageType: 'string',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEduPaperCutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEduPaperCutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeHouseholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeHouseholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrRequest extends $tea.Model {
  url?: string;
  needRotate?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      needRotate: 'NeedRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      needRotate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEduQuestionOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEduQuestionOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTrainInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTrainInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTableOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTableOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishRequest extends $tea.Model {
  url?: string;
  needRotate?: boolean;
  outputTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      needRotate: 'boolean',
      outputTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEnglishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEnglishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageRequest extends $tea.Model {
  url?: string;
  languages?: string[];
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  needSortPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      languages: 'Languages',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
      needSortPage: 'NeedSortPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      languages: { 'type': 'array', 'itemType': 'string' },
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
      needSortPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageShrinkRequest extends $tea.Model {
  url?: string;
  languagesShrink?: string;
  outputCharInfo?: boolean;
  needRotate?: boolean;
  outputTable?: boolean;
  needSortPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      languagesShrink: 'Languages',
      outputCharInfo: 'OutputCharInfo',
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
      needSortPage: 'NeedSortPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      languagesShrink: 'string',
      outputCharInfo: 'boolean',
      needRotate: 'boolean',
      outputTable: 'boolean',
      needSortPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeMultiLanguageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeMultiLanguageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEduOralCalculationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEduOralCalculationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeQuotaInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeQuotaInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeGeneralResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedRequest extends $tea.Model {
  url?: string;
  needRotate?: boolean;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      needRotate: 'NeedRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      needRotate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeEduPaperStructedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeEduPaperStructedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeIdcardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ocr-api", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async recognizeDrivingLicenseWithOptions(request: RecognizeDrivingLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeDrivingLicenseResponse>(await this.doRPCRequest("RecognizeDrivingLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeDrivingLicenseResponse({}));
  }

  async recognizeDrivingLicense(request: RecognizeDrivingLicenseRequest): Promise<RecognizeDrivingLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDrivingLicenseWithOptions(request, runtime);
  }

  async recognizeKoreanWithOptions(request: RecognizeKoreanRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeKoreanResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeKoreanResponse>(await this.doRPCRequest("RecognizeKorean", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeKoreanResponse({}));
  }

  async recognizeKorean(request: RecognizeKoreanRequest): Promise<RecognizeKoreanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeKoreanWithOptions(request, runtime);
  }

  async recognizeCarInvoiceWithOptions(request: RecognizeCarInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCarInvoiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeCarInvoiceResponse>(await this.doRPCRequest("RecognizeCarInvoice", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeCarInvoiceResponse({}));
  }

  async recognizeCarInvoice(request: RecognizeCarInvoiceRequest): Promise<RecognizeCarInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarInvoiceWithOptions(request, runtime);
  }

  async recognizeMixedInvoicesWithOptions(request: RecognizeMixedInvoicesRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMixedInvoicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeMixedInvoicesResponse>(await this.doRPCRequest("RecognizeMixedInvoices", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeMixedInvoicesResponse({}));
  }

  async recognizeMixedInvoices(request: RecognizeMixedInvoicesRequest): Promise<RecognizeMixedInvoicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMixedInvoicesWithOptions(request, runtime);
  }

  async recognizeEstateCertificationWithOptions(request: RecognizeEstateCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEstateCertificationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEstateCertificationResponse>(await this.doRPCRequest("RecognizeEstateCertification", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEstateCertificationResponse({}));
  }

  async recognizeEstateCertification(request: RecognizeEstateCertificationRequest): Promise<RecognizeEstateCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEstateCertificationWithOptions(request, runtime);
  }

  async recognizeCarNumberWithOptions(request: RecognizeCarNumberRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCarNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeCarNumberResponse>(await this.doRPCRequest("RecognizeCarNumber", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeCarNumberResponse({}));
  }

  async recognizeCarNumber(request: RecognizeCarNumberRequest): Promise<RecognizeCarNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarNumberWithOptions(request, runtime);
  }

  async recognizeEduPaperOcrWithOptions(request: RecognizeEduPaperOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduPaperOcrResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEduPaperOcrResponse>(await this.doRPCRequest("RecognizeEduPaperOcr", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEduPaperOcrResponse({}));
  }

  async recognizeEduPaperOcr(request: RecognizeEduPaperOcrRequest): Promise<RecognizeEduPaperOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperOcrWithOptions(request, runtime);
  }

  async recognizeTradeMarkCertificationWithOptions(request: RecognizeTradeMarkCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTradeMarkCertificationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeTradeMarkCertificationResponse>(await this.doRPCRequest("RecognizeTradeMarkCertification", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeTradeMarkCertificationResponse({}));
  }

  async recognizeTradeMarkCertification(request: RecognizeTradeMarkCertificationRequest): Promise<RecognizeTradeMarkCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTradeMarkCertificationWithOptions(request, runtime);
  }

  async recognizeBirthCertificationWithOptions(request: RecognizeBirthCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBirthCertificationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeBirthCertificationResponse>(await this.doRPCRequest("RecognizeBirthCertification", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeBirthCertificationResponse({}));
  }

  async recognizeBirthCertification(request: RecognizeBirthCertificationRequest): Promise<RecognizeBirthCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBirthCertificationWithOptions(request, runtime);
  }

  async recognizeDoctypeWithOptions(request: RecognizeDoctypeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDoctypeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeDoctypeResponse>(await this.doRPCRequest("RecognizeDoctype", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeDoctypeResponse({}));
  }

  async recognizeDoctype(request: RecognizeDoctypeRequest): Promise<RecognizeDoctypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDoctypeWithOptions(request, runtime);
  }

  async recognizeBankAccountLicenseWithOptions(request: RecognizeBankAccountLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankAccountLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeBankAccountLicenseResponse>(await this.doRPCRequest("RecognizeBankAccountLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeBankAccountLicenseResponse({}));
  }

  async recognizeBankAccountLicense(request: RecognizeBankAccountLicenseRequest): Promise<RecognizeBankAccountLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankAccountLicenseWithOptions(request, runtime);
  }

  async recognizeFoodManageLicenseWithOptions(request: RecognizeFoodManageLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodManageLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeFoodManageLicenseResponse>(await this.doRPCRequest("RecognizeFoodManageLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeFoodManageLicenseResponse({}));
  }

  async recognizeFoodManageLicense(request: RecognizeFoodManageLicenseRequest): Promise<RecognizeFoodManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodManageLicenseWithOptions(request, runtime);
  }

  async recognizeRollTicketWithOptions(request: RecognizeRollTicketRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRollTicketResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeRollTicketResponse>(await this.doRPCRequest("RecognizeRollTicket", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeRollTicketResponse({}));
  }

  async recognizeRollTicket(request: RecognizeRollTicketRequest): Promise<RecognizeRollTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRollTicketWithOptions(request, runtime);
  }

  async recognizeEduFormulaWithOptions(request: RecognizeEduFormulaRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduFormulaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEduFormulaResponse>(await this.doRPCRequest("RecognizeEduFormula", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEduFormulaResponse({}));
  }

  async recognizeEduFormula(request: RecognizeEduFormulaRequest): Promise<RecognizeEduFormulaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduFormulaWithOptions(request, runtime);
  }

  async recognizePassportWithOptions(request: RecognizePassportRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePassportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizePassportResponse>(await this.doRPCRequest("RecognizePassport", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizePassportResponse({}));
  }

  async recognizePassport(request: RecognizePassportRequest): Promise<RecognizePassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePassportWithOptions(request, runtime);
  }

  async recognizeTaxiInvoiceWithOptions(request: RecognizeTaxiInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeTaxiInvoiceResponse>(await this.doRPCRequest("RecognizeTaxiInvoice", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeTaxiInvoiceResponse({}));
  }

  async recognizeTaxiInvoice(request: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTaxiInvoiceWithOptions(request, runtime);
  }

  async recognizeFoodProduceLicenseWithOptions(request: RecognizeFoodProduceLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodProduceLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeFoodProduceLicenseResponse>(await this.doRPCRequest("RecognizeFoodProduceLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeFoodProduceLicenseResponse({}));
  }

  async recognizeFoodProduceLicense(request: RecognizeFoodProduceLicenseRequest): Promise<RecognizeFoodProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodProduceLicenseWithOptions(request, runtime);
  }

  async recognizeMedicalDeviceProduceLicenseWithOptions(request: RecognizeMedicalDeviceProduceLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeMedicalDeviceProduceLicenseResponse>(await this.doRPCRequest("RecognizeMedicalDeviceProduceLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeMedicalDeviceProduceLicenseResponse({}));
  }

  async recognizeMedicalDeviceProduceLicense(request: RecognizeMedicalDeviceProduceLicenseRequest): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceProduceLicenseWithOptions(request, runtime);
  }

  async recognizeHandwritingWithOptions(request: RecognizeHandwritingRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHandwritingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeHandwritingResponse>(await this.doRPCRequest("RecognizeHandwriting", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeHandwritingResponse({}));
  }

  async recognizeHandwriting(request: RecognizeHandwritingRequest): Promise<RecognizeHandwritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHandwritingWithOptions(request, runtime);
  }

  async recognizeAirItineraryWithOptions(request: RecognizeAirItineraryRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAirItineraryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeAirItineraryResponse>(await this.doRPCRequest("RecognizeAirItinerary", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeAirItineraryResponse({}));
  }

  async recognizeAirItinerary(request: RecognizeAirItineraryRequest): Promise<RecognizeAirItineraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAirItineraryWithOptions(request, runtime);
  }

  async recognizeJanpaneseWithOptions(request: RecognizeJanpaneseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeJanpaneseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeJanpaneseResponse>(await this.doRPCRequest("RecognizeJanpanese", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeJanpaneseResponse({}));
  }

  async recognizeJanpanese(request: RecognizeJanpaneseRequest): Promise<RecognizeJanpaneseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeJanpaneseWithOptions(request, runtime);
  }

  async recognizeCtwoMedicalDeviceManageLicenseWithOptions(request: RecognizeCtwoMedicalDeviceManageLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeCtwoMedicalDeviceManageLicenseResponse>(await this.doRPCRequest("RecognizeCtwoMedicalDeviceManageLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeCtwoMedicalDeviceManageLicenseResponse({}));
  }

  async recognizeCtwoMedicalDeviceManageLicense(request: RecognizeCtwoMedicalDeviceManageLicenseRequest): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCtwoMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  async recognizeThaiWithOptions(request: RecognizeThaiRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeThaiResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeThaiResponse>(await this.doRPCRequest("RecognizeThai", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeThaiResponse({}));
  }

  async recognizeThai(request: RecognizeThaiRequest): Promise<RecognizeThaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeThaiWithOptions(request, runtime);
  }

  async recognizeMedicalDeviceManageLicenseWithOptions(request: RecognizeMedicalDeviceManageLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeMedicalDeviceManageLicenseResponse>(await this.doRPCRequest("RecognizeMedicalDeviceManageLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeMedicalDeviceManageLicenseResponse({}));
  }

  async recognizeMedicalDeviceManageLicense(request: RecognizeMedicalDeviceManageLicenseRequest): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  async recognizeLatinWithOptions(request: RecognizeLatinRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLatinResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeLatinResponse>(await this.doRPCRequest("RecognizeLatin", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeLatinResponse({}));
  }

  async recognizeLatin(request: RecognizeLatinRequest): Promise<RecognizeLatinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLatinWithOptions(request, runtime);
  }

  async recognizeInvoiceWithOptions(request: RecognizeInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeInvoiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeInvoiceResponse>(await this.doRPCRequest("RecognizeInvoice", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeInvoiceResponse({}));
  }

  async recognizeInvoice(request: RecognizeInvoiceRequest): Promise<RecognizeInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeInvoiceWithOptions(request, runtime);
  }

  async recognizeMixedCardsWithOptions(request: RecognizeMixedCardsRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMixedCardsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeMixedCardsResponse>(await this.doRPCRequest("RecognizeMixedCards", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeMixedCardsResponse({}));
  }

  async recognizeMixedCards(request: RecognizeMixedCardsRequest): Promise<RecognizeMixedCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMixedCardsWithOptions(request, runtime);
  }

  async recognizeWaybillWithOptions(request: RecognizeWaybillRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeWaybillResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeWaybillResponse>(await this.doRPCRequest("RecognizeWaybill", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeWaybillResponse({}));
  }

  async recognizeWaybill(request: RecognizeWaybillRequest): Promise<RecognizeWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeWaybillWithOptions(request, runtime);
  }

  async recognizeCarVinCodeWithOptions(request: RecognizeCarVinCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCarVinCodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeCarVinCodeResponse>(await this.doRPCRequest("RecognizeCarVinCode", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeCarVinCodeResponse({}));
  }

  async recognizeCarVinCode(request: RecognizeCarVinCodeRequest): Promise<RecognizeCarVinCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarVinCodeWithOptions(request, runtime);
  }

  async recognizeAdvancedWithOptions(request: RecognizeAdvancedRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAdvancedResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeAdvancedResponse>(await this.doRPCRequest("RecognizeAdvanced", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeAdvancedResponse({}));
  }

  async recognizeAdvanced(request: RecognizeAdvancedRequest): Promise<RecognizeAdvancedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAdvancedWithOptions(request, runtime);
  }

  async recognizeVehicleLicenseWithOptions(request: RecognizeVehicleLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeVehicleLicenseResponse>(await this.doRPCRequest("RecognizeVehicleLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeVehicleLicenseResponse({}));
  }

  async recognizeVehicleLicense(request: RecognizeVehicleLicenseRequest): Promise<RecognizeVehicleLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleLicenseWithOptions(request, runtime);
  }

  async recognizeRussianWithOptions(request: RecognizeRussianRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRussianResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeRussianResponse>(await this.doRPCRequest("RecognizeRussian", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeRussianResponse({}));
  }

  async recognizeRussian(request: RecognizeRussianRequest): Promise<RecognizeRussianResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRussianWithOptions(request, runtime);
  }

  async recognizeBasicWithOptions(request: RecognizeBasicRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBasicResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeBasicResponse>(await this.doRPCRequest("RecognizeBasic", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeBasicResponse({}));
  }

  async recognizeBasic(request: RecognizeBasicRequest): Promise<RecognizeBasicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBasicWithOptions(request, runtime);
  }

  async recognizeBusinessLicenseWithOptions(request: RecognizeBusinessLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeBusinessLicenseResponse>(await this.doRPCRequest("RecognizeBusinessLicense", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeBusinessLicenseResponse({}));
  }

  async recognizeBusinessLicense(request: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusinessLicenseWithOptions(request, runtime);
  }

  async recognizeBankCardWithOptions(request: RecognizeBankCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeBankCardResponse>(await this.doRPCRequest("RecognizeBankCard", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeBankCardResponse({}));
  }

  async recognizeBankCard(request: RecognizeBankCardRequest): Promise<RecognizeBankCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankCardWithOptions(request, runtime);
  }

  async recognizeEduPaperCutWithOptions(request: RecognizeEduPaperCutRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduPaperCutResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEduPaperCutResponse>(await this.doRPCRequest("RecognizeEduPaperCut", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEduPaperCutResponse({}));
  }

  async recognizeEduPaperCut(request: RecognizeEduPaperCutRequest): Promise<RecognizeEduPaperCutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperCutWithOptions(request, runtime);
  }

  async recognizeHouseholdWithOptions(request: RecognizeHouseholdRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHouseholdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeHouseholdResponse>(await this.doRPCRequest("RecognizeHousehold", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeHouseholdResponse({}));
  }

  async recognizeHousehold(request: RecognizeHouseholdRequest): Promise<RecognizeHouseholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHouseholdWithOptions(request, runtime);
  }

  async recognizeEduQuestionOcrWithOptions(request: RecognizeEduQuestionOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduQuestionOcrResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEduQuestionOcrResponse>(await this.doRPCRequest("RecognizeEduQuestionOcr", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEduQuestionOcrResponse({}));
  }

  async recognizeEduQuestionOcr(request: RecognizeEduQuestionOcrRequest): Promise<RecognizeEduQuestionOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduQuestionOcrWithOptions(request, runtime);
  }

  async recognizeTrainInvoiceWithOptions(request: RecognizeTrainInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTrainInvoiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeTrainInvoiceResponse>(await this.doRPCRequest("RecognizeTrainInvoice", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeTrainInvoiceResponse({}));
  }

  async recognizeTrainInvoice(request: RecognizeTrainInvoiceRequest): Promise<RecognizeTrainInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTrainInvoiceWithOptions(request, runtime);
  }

  async recognizeTableOcrWithOptions(request: RecognizeTableOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableOcrResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeTableOcrResponse>(await this.doRPCRequest("RecognizeTableOcr", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeTableOcrResponse({}));
  }

  async recognizeTableOcr(request: RecognizeTableOcrRequest): Promise<RecognizeTableOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTableOcrWithOptions(request, runtime);
  }

  async recognizeEnglishWithOptions(request: RecognizeEnglishRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEnglishResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEnglishResponse>(await this.doRPCRequest("RecognizeEnglish", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEnglishResponse({}));
  }

  async recognizeEnglish(request: RecognizeEnglishRequest): Promise<RecognizeEnglishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEnglishWithOptions(request, runtime);
  }

  async recognizeMultiLanguageWithOptions(tmpReq: RecognizeMultiLanguageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMultiLanguageResponse> {
    Util.validateModel(tmpReq);
    let request = new RecognizeMultiLanguageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.languages)) {
      request.languagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.languages, "Languages", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeMultiLanguageResponse>(await this.doRPCRequest("RecognizeMultiLanguage", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeMultiLanguageResponse({}));
  }

  async recognizeMultiLanguage(request: RecognizeMultiLanguageRequest): Promise<RecognizeMultiLanguageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMultiLanguageWithOptions(request, runtime);
  }

  async recognizeEduOralCalculationWithOptions(request: RecognizeEduOralCalculationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduOralCalculationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEduOralCalculationResponse>(await this.doRPCRequest("RecognizeEduOralCalculation", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEduOralCalculationResponse({}));
  }

  async recognizeEduOralCalculation(request: RecognizeEduOralCalculationRequest): Promise<RecognizeEduOralCalculationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduOralCalculationWithOptions(request, runtime);
  }

  async recognizeQuotaInvoiceWithOptions(request: RecognizeQuotaInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQuotaInvoiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeQuotaInvoiceResponse>(await this.doRPCRequest("RecognizeQuotaInvoice", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeQuotaInvoiceResponse({}));
  }

  async recognizeQuotaInvoice(request: RecognizeQuotaInvoiceRequest): Promise<RecognizeQuotaInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeQuotaInvoiceWithOptions(request, runtime);
  }

  async recognizeGeneralWithOptions(request: RecognizeGeneralRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeGeneralResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeGeneralResponse>(await this.doRPCRequest("RecognizeGeneral", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeGeneralResponse({}));
  }

  async recognizeGeneral(request: RecognizeGeneralRequest): Promise<RecognizeGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeGeneralWithOptions(request, runtime);
  }

  async recognizeEduPaperStructedWithOptions(request: RecognizeEduPaperStructedRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduPaperStructedResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeEduPaperStructedResponse>(await this.doRPCRequest("RecognizeEduPaperStructed", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeEduPaperStructedResponse({}));
  }

  async recognizeEduPaperStructed(request: RecognizeEduPaperStructedRequest): Promise<RecognizeEduPaperStructedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperStructedWithOptions(request, runtime);
  }

  async recognizeIdcardWithOptions(request: RecognizeIdcardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdcardResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecognizeIdcardResponse>(await this.doRPCRequest("RecognizeIdcard", "2021-07-07", "HTTPS", "GET", "AK", "json", req, runtime), new RecognizeIdcardResponse({}));
  }

  async recognizeIdcard(request: RecognizeIdcardRequest): Promise<RecognizeIdcardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeIdcardWithOptions(request, runtime);
  }

}
