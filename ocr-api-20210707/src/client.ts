// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class RecognizeAdvancedRequest extends $tea.Model {
  needRotate?: boolean;
  needSortPage?: boolean;
  noStamp?: boolean;
  outputCharInfo?: boolean;
  outputFigure?: boolean;
  outputTable?: boolean;
  paragraph?: boolean;
  row?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      noStamp: 'NoStamp',
      outputCharInfo: 'OutputCharInfo',
      outputFigure: 'OutputFigure',
      outputTable: 'OutputTable',
      paragraph: 'Paragraph',
      row: 'Row',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      needSortPage: 'boolean',
      noStamp: 'boolean',
      outputCharInfo: 'boolean',
      outputFigure: 'boolean',
      outputTable: 'boolean',
      paragraph: 'boolean',
      row: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAdvancedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeAdvancedResponseBody;
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
      body: RecognizeAdvancedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAirItineraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeAirItineraryResponseBody;
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
      body: RecognizeAirItineraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAcceptanceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAcceptanceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAcceptanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBankAcceptanceResponseBody;
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
      body: RecognizeBankAcceptanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankAccountLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBankAccountLicenseResponseBody;
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
      body: RecognizeBankAccountLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBankCardResponseBody;
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
      body: RecognizeBankCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBasicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBasicResponseBody;
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
      body: RecognizeBasicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBirthCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBirthCertificationResponseBody;
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
      body: RecognizeBirthCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusShipTicketRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusShipTicketResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusShipTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBusShipTicketResponseBody;
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
      body: RecognizeBusShipTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBusinessLicenseResponseBody;
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
      body: RecognizeBusinessLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCarInvoiceResponseBody;
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
      body: RecognizeCarInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCarNumberResponseBody;
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
      body: RecognizeCarNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCarVinCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCarVinCodeResponseBody;
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
      body: RecognizeCarVinCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinesePassportRequest extends $tea.Model {
  outputFigure?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinesePassportResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinesePassportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeChinesePassportResponseBody;
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
      body: RecognizeChinesePassportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCommonPrintedInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCommonPrintedInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCommonPrintedInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCommonPrintedInvoiceResponseBody;
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
      body: RecognizeCommonPrintedInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCosmeticProduceLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCosmeticProduceLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCosmeticProduceLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCosmeticProduceLicenseResponseBody;
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
      body: RecognizeCosmeticProduceLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCovidTestReportRequest extends $tea.Model {
  multipleResult?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      multipleResult: 'MultipleResult',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipleResult: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCovidTestReportResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCovidTestReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCovidTestReportResponseBody;
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
      body: RecognizeCovidTestReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCtwoMedicalDeviceManageLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCtwoMedicalDeviceManageLicenseResponseBody;
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
      body: RecognizeCtwoMedicalDeviceManageLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDocumentStructureRequest extends $tea.Model {
  needRotate?: boolean;
  needSortPage?: boolean;
  noStamp?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  page?: boolean;
  paragraph?: boolean;
  row?: boolean;
  url?: string;
  useNewStyleOutput?: boolean;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      noStamp: 'NoStamp',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      page: 'Page',
      paragraph: 'Paragraph',
      row: 'Row',
      url: 'Url',
      useNewStyleOutput: 'UseNewStyleOutput',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      needSortPage: 'boolean',
      noStamp: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      page: 'boolean',
      paragraph: 'boolean',
      row: 'boolean',
      url: 'string',
      useNewStyleOutput: 'boolean',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDocumentStructureResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDocumentStructureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeDocumentStructureResponseBody;
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
      body: RecognizeDocumentStructureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeDrivingLicenseResponseBody;
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
      body: RecognizeDrivingLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduFormulaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEduFormulaResponseBody;
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
      body: RecognizeEduFormulaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduOralCalculationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEduOralCalculationResponseBody;
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
      body: RecognizeEduOralCalculationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutRequest extends $tea.Model {
  cutType?: string;
  imageType?: string;
  subject?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      cutType: 'CutType',
      imageType: 'ImageType',
      subject: 'Subject',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cutType: 'string',
      imageType: 'string',
      subject: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperCutResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEduPaperCutResponseBody;
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
      body: RecognizeEduPaperCutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrRequest extends $tea.Model {
  imageType?: string;
  outputOricoord?: boolean;
  subject?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageType: 'ImageType',
      outputOricoord: 'OutputOricoord',
      subject: 'Subject',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'string',
      outputOricoord: 'boolean',
      subject: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEduPaperOcrResponseBody;
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
      body: RecognizeEduPaperOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedRequest extends $tea.Model {
  needRotate?: boolean;
  subject?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      subject: 'Subject',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      subject: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduPaperStructedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEduPaperStructedResponseBody;
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
      body: RecognizeEduPaperStructedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrRequest extends $tea.Model {
  needRotate?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEduQuestionOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEduQuestionOcrResponseBody;
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
      body: RecognizeEduQuestionOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishRequest extends $tea.Model {
  needRotate?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEnglishResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEnglishResponseBody;
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
      body: RecognizeEnglishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeEstateCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeEstateCertificationResponseBody;
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
      body: RecognizeEstateCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToHKRequest extends $tea.Model {
  outputFigure?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToHKResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToHKResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeExitEntryPermitToHKResponseBody;
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
      body: RecognizeExitEntryPermitToHKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToMainlandRequest extends $tea.Model {
  outputFigure?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToMainlandResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExitEntryPermitToMainlandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeExitEntryPermitToMainlandResponseBody;
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
      body: RecognizeExitEntryPermitToMainlandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodManageLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeFoodManageLicenseResponseBody;
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
      body: RecognizeFoodManageLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodProduceLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeFoodProduceLicenseResponseBody;
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
      body: RecognizeFoodProduceLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeGeneralResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeGeneralResponseBody;
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
      body: RecognizeGeneralResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingRequest extends $tea.Model {
  needRotate?: boolean;
  needSortPage?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      needSortPage: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHandwritingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeHandwritingResponseBody;
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
      body: RecognizeHandwritingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHealthCodeRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHealthCodeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHealthCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeHealthCodeResponseBody;
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
      body: RecognizeHealthCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHotelConsumeRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHotelConsumeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHotelConsumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeHotelConsumeResponseBody;
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
      body: RecognizeHotelConsumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdRequest extends $tea.Model {
  isResidentPage?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      isResidentPage: 'IsResidentPage',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isResidentPage: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeHouseholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeHouseholdResponseBody;
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
      body: RecognizeHouseholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardRequest extends $tea.Model {
  outputFigure?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdcardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeIdcardResponseBody;
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
      body: RecognizeIdcardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeInvoiceResponseBody;
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
      body: RecognizeInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseRequest extends $tea.Model {
  needRotate?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeJanpaneseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeJanpaneseResponseBody;
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
      body: RecognizeJanpaneseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanRequest extends $tea.Model {
  needRotate?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeKoreanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeKoreanResponseBody;
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
      body: RecognizeKoreanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinRequest extends $tea.Model {
  needRotate?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLatinResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeLatinResponseBody;
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
      body: RecognizeLatinResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceManageLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeMedicalDeviceManageLicenseResponseBody;
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
      body: RecognizeMedicalDeviceManageLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMedicalDeviceProduceLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeMedicalDeviceProduceLicenseResponseBody;
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
      body: RecognizeMedicalDeviceProduceLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMixedInvoicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeMixedInvoicesResponseBody;
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
      body: RecognizeMixedInvoicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageRequest extends $tea.Model {
  languages?: string[];
  needRotate?: boolean;
  needSortPage?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      languages: 'Languages',
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languages: { 'type': 'array', 'itemType': 'string' },
      needRotate: 'boolean',
      needSortPage: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageShrinkRequest extends $tea.Model {
  languagesShrink?: string;
  needRotate?: boolean;
  needSortPage?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      languagesShrink: 'Languages',
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languagesShrink: 'string',
      needRotate: 'boolean',
      needSortPage: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMultiLanguageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeMultiLanguageResponseBody;
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
      body: RecognizeMultiLanguageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeNonTaxInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeNonTaxInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeNonTaxInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeNonTaxInvoiceResponseBody;
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
      body: RecognizeNonTaxInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizePassportResponseBody;
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
      body: RecognizePassportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePaymentRecordRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePaymentRecordResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePaymentRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizePaymentRecordResponseBody;
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
      body: RecognizePaymentRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePurchaseRecordRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePurchaseRecordResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePurchaseRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizePurchaseRecordResponseBody;
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
      body: RecognizePurchaseRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeQuotaInvoiceResponseBody;
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
      body: RecognizeQuotaInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRideHailingItineraryRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRideHailingItineraryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRideHailingItineraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeRideHailingItineraryResponseBody;
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
      body: RecognizeRideHailingItineraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRollTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeRollTicketResponseBody;
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
      body: RecognizeRollTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianRequest extends $tea.Model {
  needRotate?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussianResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeRussianResponseBody;
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
      body: RecognizeRussianResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeShoppingReceiptRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeShoppingReceiptResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeShoppingReceiptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeShoppingReceiptResponseBody;
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
      body: RecognizeShoppingReceiptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeSocialSecurityCardResponseBody;
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
      body: RecognizeSocialSecurityCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardVersionIIRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardVersionIIResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSocialSecurityCardVersionIIResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeSocialSecurityCardVersionIIResponseBody;
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
      body: RecognizeSocialSecurityCardVersionIIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrRequest extends $tea.Model {
  lineLess?: boolean;
  needRotate?: boolean;
  skipDetection?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      lineLess: 'LineLess',
      needRotate: 'NeedRotate',
      skipDetection: 'SkipDetection',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineLess: 'boolean',
      needRotate: 'boolean',
      skipDetection: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableOcrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTableOcrResponseBody;
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
      body: RecognizeTableOcrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxClearanceCertificateRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxClearanceCertificateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxClearanceCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTaxClearanceCertificateResponseBody;
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
      body: RecognizeTaxClearanceCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTaxiInvoiceResponseBody;
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
      body: RecognizeTaxiInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiRequest extends $tea.Model {
  needRotate?: boolean;
  outputCharInfo?: boolean;
  outputTable?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRotate: 'boolean',
      outputCharInfo: 'boolean',
      outputTable: 'boolean',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeThaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeThaiResponseBody;
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
      body: RecognizeThaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTollInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTollInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTollInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTollInvoiceResponseBody;
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
      body: RecognizeTollInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTradeMarkCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTradeMarkCertificationResponseBody;
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
      body: RecognizeTradeMarkCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTrainInvoiceResponseBody;
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
      body: RecognizeTrainInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTravelCardRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTravelCardResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTravelCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTravelCardResponseBody;
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
      body: RecognizeTravelCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUsedCarInvoiceRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUsedCarInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUsedCarInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeUsedCarInvoiceResponseBody;
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
      body: RecognizeUsedCarInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleCertificationRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleCertificationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleCertificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVehicleCertificationResponseBody;
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
      body: RecognizeVehicleCertificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVehicleLicenseResponseBody;
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
      body: RecognizeVehicleLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleRegistrationRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleRegistrationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleRegistrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVehicleRegistrationResponseBody;
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
      body: RecognizeVehicleRegistrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillRequest extends $tea.Model {
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeWaybillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeWaybillResponseBody;
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
      body: RecognizeWaybillResponseBody,
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

  async recognizeAdvancedWithOptions(request: RecognizeAdvancedRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAdvancedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!Util.isUnset(request.noStamp)) {
      query["NoStamp"] = request.noStamp;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.paragraph)) {
      query["Paragraph"] = request.paragraph;
    }

    if (!Util.isUnset(request.row)) {
      query["Row"] = request.row;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeAdvanced",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeAdvancedResponse>(await this.callApi(params, req, runtime), new RecognizeAdvancedResponse({}));
  }

  async recognizeAdvanced(request: RecognizeAdvancedRequest): Promise<RecognizeAdvancedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAdvancedWithOptions(request, runtime);
  }

  async recognizeAirItineraryWithOptions(request: RecognizeAirItineraryRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAirItineraryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeAirItinerary",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeAirItineraryResponse>(await this.callApi(params, req, runtime), new RecognizeAirItineraryResponse({}));
  }

  async recognizeAirItinerary(request: RecognizeAirItineraryRequest): Promise<RecognizeAirItineraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAirItineraryWithOptions(request, runtime);
  }

  async recognizeBankAcceptanceWithOptions(request: RecognizeBankAcceptanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankAcceptanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBankAcceptance",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBankAcceptanceResponse>(await this.callApi(params, req, runtime), new RecognizeBankAcceptanceResponse({}));
  }

  async recognizeBankAcceptance(request: RecognizeBankAcceptanceRequest): Promise<RecognizeBankAcceptanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankAcceptanceWithOptions(request, runtime);
  }

  async recognizeBankAccountLicenseWithOptions(request: RecognizeBankAccountLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankAccountLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBankAccountLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBankAccountLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeBankAccountLicenseResponse({}));
  }

  async recognizeBankAccountLicense(request: RecognizeBankAccountLicenseRequest): Promise<RecognizeBankAccountLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankAccountLicenseWithOptions(request, runtime);
  }

  async recognizeBankCardWithOptions(request: RecognizeBankCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBankCard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBankCardResponse>(await this.callApi(params, req, runtime), new RecognizeBankCardResponse({}));
  }

  async recognizeBankCard(request: RecognizeBankCardRequest): Promise<RecognizeBankCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankCardWithOptions(request, runtime);
  }

  async recognizeBasicWithOptions(request: RecognizeBasicRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBasicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBasic",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBasicResponse>(await this.callApi(params, req, runtime), new RecognizeBasicResponse({}));
  }

  async recognizeBasic(request: RecognizeBasicRequest): Promise<RecognizeBasicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBasicWithOptions(request, runtime);
  }

  async recognizeBirthCertificationWithOptions(request: RecognizeBirthCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBirthCertificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBirthCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBirthCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeBirthCertificationResponse({}));
  }

  async recognizeBirthCertification(request: RecognizeBirthCertificationRequest): Promise<RecognizeBirthCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBirthCertificationWithOptions(request, runtime);
  }

  async recognizeBusShipTicketWithOptions(request: RecognizeBusShipTicketRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusShipTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBusShipTicket",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBusShipTicketResponse>(await this.callApi(params, req, runtime), new RecognizeBusShipTicketResponse({}));
  }

  async recognizeBusShipTicket(request: RecognizeBusShipTicketRequest): Promise<RecognizeBusShipTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusShipTicketWithOptions(request, runtime);
  }

  async recognizeBusinessLicenseWithOptions(request: RecognizeBusinessLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBusinessLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBusinessLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeBusinessLicenseResponse({}));
  }

  async recognizeBusinessLicense(request: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusinessLicenseWithOptions(request, runtime);
  }

  async recognizeCarInvoiceWithOptions(request: RecognizeCarInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCarInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCarInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCarInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeCarInvoiceResponse({}));
  }

  async recognizeCarInvoice(request: RecognizeCarInvoiceRequest): Promise<RecognizeCarInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarInvoiceWithOptions(request, runtime);
  }

  async recognizeCarNumberWithOptions(request: RecognizeCarNumberRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCarNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCarNumber",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCarNumberResponse>(await this.callApi(params, req, runtime), new RecognizeCarNumberResponse({}));
  }

  async recognizeCarNumber(request: RecognizeCarNumberRequest): Promise<RecognizeCarNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarNumberWithOptions(request, runtime);
  }

  async recognizeCarVinCodeWithOptions(request: RecognizeCarVinCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCarVinCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCarVinCode",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCarVinCodeResponse>(await this.callApi(params, req, runtime), new RecognizeCarVinCodeResponse({}));
  }

  async recognizeCarVinCode(request: RecognizeCarVinCodeRequest): Promise<RecognizeCarVinCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarVinCodeWithOptions(request, runtime);
  }

  async recognizeChinesePassportWithOptions(request: RecognizeChinesePassportRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeChinesePassportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeChinesePassport",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeChinesePassportResponse>(await this.callApi(params, req, runtime), new RecognizeChinesePassportResponse({}));
  }

  async recognizeChinesePassport(request: RecognizeChinesePassportRequest): Promise<RecognizeChinesePassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeChinesePassportWithOptions(request, runtime);
  }

  async recognizeCommonPrintedInvoiceWithOptions(request: RecognizeCommonPrintedInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCommonPrintedInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCommonPrintedInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCommonPrintedInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeCommonPrintedInvoiceResponse({}));
  }

  async recognizeCommonPrintedInvoice(request: RecognizeCommonPrintedInvoiceRequest): Promise<RecognizeCommonPrintedInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCommonPrintedInvoiceWithOptions(request, runtime);
  }

  async recognizeCosmeticProduceLicenseWithOptions(request: RecognizeCosmeticProduceLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCosmeticProduceLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCosmeticProduceLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCosmeticProduceLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeCosmeticProduceLicenseResponse({}));
  }

  async recognizeCosmeticProduceLicense(request: RecognizeCosmeticProduceLicenseRequest): Promise<RecognizeCosmeticProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCosmeticProduceLicenseWithOptions(request, runtime);
  }

  async recognizeCovidTestReportWithOptions(request: RecognizeCovidTestReportRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCovidTestReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.multipleResult)) {
      query["MultipleResult"] = request.multipleResult;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCovidTestReport",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCovidTestReportResponse>(await this.callApi(params, req, runtime), new RecognizeCovidTestReportResponse({}));
  }

  async recognizeCovidTestReport(request: RecognizeCovidTestReportRequest): Promise<RecognizeCovidTestReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCovidTestReportWithOptions(request, runtime);
  }

  async recognizeCtwoMedicalDeviceManageLicenseWithOptions(request: RecognizeCtwoMedicalDeviceManageLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCtwoMedicalDeviceManageLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCtwoMedicalDeviceManageLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeCtwoMedicalDeviceManageLicenseResponse({}));
  }

  async recognizeCtwoMedicalDeviceManageLicense(request: RecognizeCtwoMedicalDeviceManageLicenseRequest): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCtwoMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  async recognizeDocumentStructureWithOptions(request: RecognizeDocumentStructureRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDocumentStructureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!Util.isUnset(request.noStamp)) {
      query["NoStamp"] = request.noStamp;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.paragraph)) {
      query["Paragraph"] = request.paragraph;
    }

    if (!Util.isUnset(request.row)) {
      query["Row"] = request.row;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.useNewStyleOutput)) {
      query["UseNewStyleOutput"] = request.useNewStyleOutput;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeDocumentStructure",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeDocumentStructureResponse>(await this.callApi(params, req, runtime), new RecognizeDocumentStructureResponse({}));
  }

  async recognizeDocumentStructure(request: RecognizeDocumentStructureRequest): Promise<RecognizeDocumentStructureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDocumentStructureWithOptions(request, runtime);
  }

  async recognizeDrivingLicenseWithOptions(request: RecognizeDrivingLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeDrivingLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeDrivingLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeDrivingLicenseResponse({}));
  }

  async recognizeDrivingLicense(request: RecognizeDrivingLicenseRequest): Promise<RecognizeDrivingLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDrivingLicenseWithOptions(request, runtime);
  }

  async recognizeEduFormulaWithOptions(request: RecognizeEduFormulaRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduFormulaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEduFormula",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEduFormulaResponse>(await this.callApi(params, req, runtime), new RecognizeEduFormulaResponse({}));
  }

  async recognizeEduFormula(request: RecognizeEduFormulaRequest): Promise<RecognizeEduFormulaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduFormulaWithOptions(request, runtime);
  }

  async recognizeEduOralCalculationWithOptions(request: RecognizeEduOralCalculationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduOralCalculationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEduOralCalculation",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEduOralCalculationResponse>(await this.callApi(params, req, runtime), new RecognizeEduOralCalculationResponse({}));
  }

  async recognizeEduOralCalculation(request: RecognizeEduOralCalculationRequest): Promise<RecognizeEduOralCalculationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduOralCalculationWithOptions(request, runtime);
  }

  async recognizeEduPaperCutWithOptions(request: RecognizeEduPaperCutRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduPaperCutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cutType)) {
      query["CutType"] = request.cutType;
    }

    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEduPaperCut",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEduPaperCutResponse>(await this.callApi(params, req, runtime), new RecognizeEduPaperCutResponse({}));
  }

  async recognizeEduPaperCut(request: RecognizeEduPaperCutRequest): Promise<RecognizeEduPaperCutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperCutWithOptions(request, runtime);
  }

  async recognizeEduPaperOcrWithOptions(request: RecognizeEduPaperOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduPaperOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.outputOricoord)) {
      query["OutputOricoord"] = request.outputOricoord;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEduPaperOcr",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEduPaperOcrResponse>(await this.callApi(params, req, runtime), new RecognizeEduPaperOcrResponse({}));
  }

  async recognizeEduPaperOcr(request: RecognizeEduPaperOcrRequest): Promise<RecognizeEduPaperOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperOcrWithOptions(request, runtime);
  }

  async recognizeEduPaperStructedWithOptions(request: RecognizeEduPaperStructedRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduPaperStructedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEduPaperStructed",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEduPaperStructedResponse>(await this.callApi(params, req, runtime), new RecognizeEduPaperStructedResponse({}));
  }

  async recognizeEduPaperStructed(request: RecognizeEduPaperStructedRequest): Promise<RecognizeEduPaperStructedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperStructedWithOptions(request, runtime);
  }

  async recognizeEduQuestionOcrWithOptions(request: RecognizeEduQuestionOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEduQuestionOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEduQuestionOcr",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEduQuestionOcrResponse>(await this.callApi(params, req, runtime), new RecognizeEduQuestionOcrResponse({}));
  }

  async recognizeEduQuestionOcr(request: RecognizeEduQuestionOcrRequest): Promise<RecognizeEduQuestionOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduQuestionOcrWithOptions(request, runtime);
  }

  async recognizeEnglishWithOptions(request: RecognizeEnglishRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEnglishResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEnglish",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEnglishResponse>(await this.callApi(params, req, runtime), new RecognizeEnglishResponse({}));
  }

  async recognizeEnglish(request: RecognizeEnglishRequest): Promise<RecognizeEnglishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEnglishWithOptions(request, runtime);
  }

  async recognizeEstateCertificationWithOptions(request: RecognizeEstateCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeEstateCertificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeEstateCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeEstateCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeEstateCertificationResponse({}));
  }

  async recognizeEstateCertification(request: RecognizeEstateCertificationRequest): Promise<RecognizeEstateCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEstateCertificationWithOptions(request, runtime);
  }

  async recognizeExitEntryPermitToHKWithOptions(request: RecognizeExitEntryPermitToHKRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeExitEntryPermitToHKResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeExitEntryPermitToHK",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeExitEntryPermitToHKResponse>(await this.callApi(params, req, runtime), new RecognizeExitEntryPermitToHKResponse({}));
  }

  async recognizeExitEntryPermitToHK(request: RecognizeExitEntryPermitToHKRequest): Promise<RecognizeExitEntryPermitToHKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeExitEntryPermitToHKWithOptions(request, runtime);
  }

  async recognizeExitEntryPermitToMainlandWithOptions(request: RecognizeExitEntryPermitToMainlandRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeExitEntryPermitToMainlandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeExitEntryPermitToMainland",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeExitEntryPermitToMainlandResponse>(await this.callApi(params, req, runtime), new RecognizeExitEntryPermitToMainlandResponse({}));
  }

  async recognizeExitEntryPermitToMainland(request: RecognizeExitEntryPermitToMainlandRequest): Promise<RecognizeExitEntryPermitToMainlandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeExitEntryPermitToMainlandWithOptions(request, runtime);
  }

  async recognizeFoodManageLicenseWithOptions(request: RecognizeFoodManageLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodManageLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeFoodManageLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeFoodManageLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeFoodManageLicenseResponse({}));
  }

  async recognizeFoodManageLicense(request: RecognizeFoodManageLicenseRequest): Promise<RecognizeFoodManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodManageLicenseWithOptions(request, runtime);
  }

  async recognizeFoodProduceLicenseWithOptions(request: RecognizeFoodProduceLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodProduceLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeFoodProduceLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeFoodProduceLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeFoodProduceLicenseResponse({}));
  }

  async recognizeFoodProduceLicense(request: RecognizeFoodProduceLicenseRequest): Promise<RecognizeFoodProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodProduceLicenseWithOptions(request, runtime);
  }

  async recognizeGeneralWithOptions(request: RecognizeGeneralRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeGeneralResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeGeneral",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeGeneralResponse>(await this.callApi(params, req, runtime), new RecognizeGeneralResponse({}));
  }

  async recognizeGeneral(request: RecognizeGeneralRequest): Promise<RecognizeGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeGeneralWithOptions(request, runtime);
  }

  async recognizeHandwritingWithOptions(request: RecognizeHandwritingRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHandwritingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeHandwriting",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeHandwritingResponse>(await this.callApi(params, req, runtime), new RecognizeHandwritingResponse({}));
  }

  async recognizeHandwriting(request: RecognizeHandwritingRequest): Promise<RecognizeHandwritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHandwritingWithOptions(request, runtime);
  }

  async recognizeHealthCodeWithOptions(request: RecognizeHealthCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHealthCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeHealthCode",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeHealthCodeResponse>(await this.callApi(params, req, runtime), new RecognizeHealthCodeResponse({}));
  }

  async recognizeHealthCode(request: RecognizeHealthCodeRequest): Promise<RecognizeHealthCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHealthCodeWithOptions(request, runtime);
  }

  async recognizeHotelConsumeWithOptions(request: RecognizeHotelConsumeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHotelConsumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeHotelConsume",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeHotelConsumeResponse>(await this.callApi(params, req, runtime), new RecognizeHotelConsumeResponse({}));
  }

  async recognizeHotelConsume(request: RecognizeHotelConsumeRequest): Promise<RecognizeHotelConsumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHotelConsumeWithOptions(request, runtime);
  }

  async recognizeHouseholdWithOptions(request: RecognizeHouseholdRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHouseholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isResidentPage)) {
      query["IsResidentPage"] = request.isResidentPage;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeHousehold",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeHouseholdResponse>(await this.callApi(params, req, runtime), new RecognizeHouseholdResponse({}));
  }

  async recognizeHousehold(request: RecognizeHouseholdRequest): Promise<RecognizeHouseholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHouseholdWithOptions(request, runtime);
  }

  async recognizeIdcardWithOptions(request: RecognizeIdcardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdcardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeIdcard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeIdcardResponse>(await this.callApi(params, req, runtime), new RecognizeIdcardResponse({}));
  }

  async recognizeIdcard(request: RecognizeIdcardRequest): Promise<RecognizeIdcardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeIdcardWithOptions(request, runtime);
  }

  async recognizeInvoiceWithOptions(request: RecognizeInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeInvoiceResponse({}));
  }

  async recognizeInvoice(request: RecognizeInvoiceRequest): Promise<RecognizeInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeInvoiceWithOptions(request, runtime);
  }

  async recognizeJanpaneseWithOptions(request: RecognizeJanpaneseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeJanpaneseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeJanpanese",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeJanpaneseResponse>(await this.callApi(params, req, runtime), new RecognizeJanpaneseResponse({}));
  }

  async recognizeJanpanese(request: RecognizeJanpaneseRequest): Promise<RecognizeJanpaneseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeJanpaneseWithOptions(request, runtime);
  }

  async recognizeKoreanWithOptions(request: RecognizeKoreanRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeKoreanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeKorean",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeKoreanResponse>(await this.callApi(params, req, runtime), new RecognizeKoreanResponse({}));
  }

  async recognizeKorean(request: RecognizeKoreanRequest): Promise<RecognizeKoreanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeKoreanWithOptions(request, runtime);
  }

  async recognizeLatinWithOptions(request: RecognizeLatinRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLatinResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeLatin",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeLatinResponse>(await this.callApi(params, req, runtime), new RecognizeLatinResponse({}));
  }

  async recognizeLatin(request: RecognizeLatinRequest): Promise<RecognizeLatinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLatinWithOptions(request, runtime);
  }

  async recognizeMedicalDeviceManageLicenseWithOptions(request: RecognizeMedicalDeviceManageLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeMedicalDeviceManageLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeMedicalDeviceManageLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeMedicalDeviceManageLicenseResponse({}));
  }

  async recognizeMedicalDeviceManageLicense(request: RecognizeMedicalDeviceManageLicenseRequest): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  async recognizeMedicalDeviceProduceLicenseWithOptions(request: RecognizeMedicalDeviceProduceLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeMedicalDeviceProduceLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeMedicalDeviceProduceLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeMedicalDeviceProduceLicenseResponse({}));
  }

  async recognizeMedicalDeviceProduceLicense(request: RecognizeMedicalDeviceProduceLicenseRequest): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceProduceLicenseWithOptions(request, runtime);
  }

  async recognizeMixedInvoicesWithOptions(request: RecognizeMixedInvoicesRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMixedInvoicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeMixedInvoices",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeMixedInvoicesResponse>(await this.callApi(params, req, runtime), new RecognizeMixedInvoicesResponse({}));
  }

  async recognizeMixedInvoices(request: RecognizeMixedInvoicesRequest): Promise<RecognizeMixedInvoicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMixedInvoicesWithOptions(request, runtime);
  }

  async recognizeMultiLanguageWithOptions(tmpReq: RecognizeMultiLanguageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMultiLanguageResponse> {
    Util.validateModel(tmpReq);
    let request = new RecognizeMultiLanguageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.languages)) {
      request.languagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.languages, "Languages", "simple");
    }

    let query = { };
    if (!Util.isUnset(request.languagesShrink)) {
      query["Languages"] = request.languagesShrink;
    }

    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.needSortPage)) {
      query["NeedSortPage"] = request.needSortPage;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: tmpReq.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeMultiLanguage",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeMultiLanguageResponse>(await this.callApi(params, req, runtime), new RecognizeMultiLanguageResponse({}));
  }

  async recognizeMultiLanguage(request: RecognizeMultiLanguageRequest): Promise<RecognizeMultiLanguageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMultiLanguageWithOptions(request, runtime);
  }

  async recognizeNonTaxInvoiceWithOptions(request: RecognizeNonTaxInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeNonTaxInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeNonTaxInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeNonTaxInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeNonTaxInvoiceResponse({}));
  }

  async recognizeNonTaxInvoice(request: RecognizeNonTaxInvoiceRequest): Promise<RecognizeNonTaxInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeNonTaxInvoiceWithOptions(request, runtime);
  }

  async recognizePassportWithOptions(request: RecognizePassportRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePassportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizePassport",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePassportResponse>(await this.callApi(params, req, runtime), new RecognizePassportResponse({}));
  }

  async recognizePassport(request: RecognizePassportRequest): Promise<RecognizePassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePassportWithOptions(request, runtime);
  }

  async recognizePaymentRecordWithOptions(request: RecognizePaymentRecordRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePaymentRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizePaymentRecord",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePaymentRecordResponse>(await this.callApi(params, req, runtime), new RecognizePaymentRecordResponse({}));
  }

  async recognizePaymentRecord(request: RecognizePaymentRecordRequest): Promise<RecognizePaymentRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePaymentRecordWithOptions(request, runtime);
  }

  async recognizePurchaseRecordWithOptions(request: RecognizePurchaseRecordRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePurchaseRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizePurchaseRecord",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePurchaseRecordResponse>(await this.callApi(params, req, runtime), new RecognizePurchaseRecordResponse({}));
  }

  async recognizePurchaseRecord(request: RecognizePurchaseRecordRequest): Promise<RecognizePurchaseRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePurchaseRecordWithOptions(request, runtime);
  }

  async recognizeQuotaInvoiceWithOptions(request: RecognizeQuotaInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQuotaInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeQuotaInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeQuotaInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeQuotaInvoiceResponse({}));
  }

  async recognizeQuotaInvoice(request: RecognizeQuotaInvoiceRequest): Promise<RecognizeQuotaInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeQuotaInvoiceWithOptions(request, runtime);
  }

  async recognizeRideHailingItineraryWithOptions(request: RecognizeRideHailingItineraryRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRideHailingItineraryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeRideHailingItinerary",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeRideHailingItineraryResponse>(await this.callApi(params, req, runtime), new RecognizeRideHailingItineraryResponse({}));
  }

  async recognizeRideHailingItinerary(request: RecognizeRideHailingItineraryRequest): Promise<RecognizeRideHailingItineraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRideHailingItineraryWithOptions(request, runtime);
  }

  async recognizeRollTicketWithOptions(request: RecognizeRollTicketRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRollTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeRollTicket",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeRollTicketResponse>(await this.callApi(params, req, runtime), new RecognizeRollTicketResponse({}));
  }

  async recognizeRollTicket(request: RecognizeRollTicketRequest): Promise<RecognizeRollTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRollTicketWithOptions(request, runtime);
  }

  async recognizeRussianWithOptions(request: RecognizeRussianRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRussianResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeRussian",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeRussianResponse>(await this.callApi(params, req, runtime), new RecognizeRussianResponse({}));
  }

  async recognizeRussian(request: RecognizeRussianRequest): Promise<RecognizeRussianResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRussianWithOptions(request, runtime);
  }

  async recognizeShoppingReceiptWithOptions(request: RecognizeShoppingReceiptRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeShoppingReceiptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeShoppingReceipt",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeShoppingReceiptResponse>(await this.callApi(params, req, runtime), new RecognizeShoppingReceiptResponse({}));
  }

  async recognizeShoppingReceipt(request: RecognizeShoppingReceiptRequest): Promise<RecognizeShoppingReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeShoppingReceiptWithOptions(request, runtime);
  }

  async recognizeSocialSecurityCardWithOptions(request: RecognizeSocialSecurityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSocialSecurityCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeSocialSecurityCard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeSocialSecurityCardResponse>(await this.callApi(params, req, runtime), new RecognizeSocialSecurityCardResponse({}));
  }

  async recognizeSocialSecurityCard(request: RecognizeSocialSecurityCardRequest): Promise<RecognizeSocialSecurityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeSocialSecurityCardWithOptions(request, runtime);
  }

  async recognizeSocialSecurityCardVersionIIWithOptions(request: RecognizeSocialSecurityCardVersionIIRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSocialSecurityCardVersionIIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeSocialSecurityCardVersionII",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeSocialSecurityCardVersionIIResponse>(await this.callApi(params, req, runtime), new RecognizeSocialSecurityCardVersionIIResponse({}));
  }

  async recognizeSocialSecurityCardVersionII(request: RecognizeSocialSecurityCardVersionIIRequest): Promise<RecognizeSocialSecurityCardVersionIIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeSocialSecurityCardVersionIIWithOptions(request, runtime);
  }

  async recognizeTableOcrWithOptions(request: RecognizeTableOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lineLess)) {
      query["LineLess"] = request.lineLess;
    }

    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.skipDetection)) {
      query["SkipDetection"] = request.skipDetection;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTableOcr",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTableOcrResponse>(await this.callApi(params, req, runtime), new RecognizeTableOcrResponse({}));
  }

  async recognizeTableOcr(request: RecognizeTableOcrRequest): Promise<RecognizeTableOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTableOcrWithOptions(request, runtime);
  }

  async recognizeTaxClearanceCertificateWithOptions(request: RecognizeTaxClearanceCertificateRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxClearanceCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTaxClearanceCertificate",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTaxClearanceCertificateResponse>(await this.callApi(params, req, runtime), new RecognizeTaxClearanceCertificateResponse({}));
  }

  async recognizeTaxClearanceCertificate(request: RecognizeTaxClearanceCertificateRequest): Promise<RecognizeTaxClearanceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTaxClearanceCertificateWithOptions(request, runtime);
  }

  async recognizeTaxiInvoiceWithOptions(request: RecognizeTaxiInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTaxiInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTaxiInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTaxiInvoiceResponse({}));
  }

  async recognizeTaxiInvoice(request: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTaxiInvoiceWithOptions(request, runtime);
  }

  async recognizeThaiWithOptions(request: RecognizeThaiRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeThaiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needRotate)) {
      query["NeedRotate"] = request.needRotate;
    }

    if (!Util.isUnset(request.outputCharInfo)) {
      query["OutputCharInfo"] = request.outputCharInfo;
    }

    if (!Util.isUnset(request.outputTable)) {
      query["OutputTable"] = request.outputTable;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeThai",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeThaiResponse>(await this.callApi(params, req, runtime), new RecognizeThaiResponse({}));
  }

  async recognizeThai(request: RecognizeThaiRequest): Promise<RecognizeThaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeThaiWithOptions(request, runtime);
  }

  async recognizeTollInvoiceWithOptions(request: RecognizeTollInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTollInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTollInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTollInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTollInvoiceResponse({}));
  }

  async recognizeTollInvoice(request: RecognizeTollInvoiceRequest): Promise<RecognizeTollInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTollInvoiceWithOptions(request, runtime);
  }

  async recognizeTradeMarkCertificationWithOptions(request: RecognizeTradeMarkCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTradeMarkCertificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTradeMarkCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTradeMarkCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeTradeMarkCertificationResponse({}));
  }

  async recognizeTradeMarkCertification(request: RecognizeTradeMarkCertificationRequest): Promise<RecognizeTradeMarkCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTradeMarkCertificationWithOptions(request, runtime);
  }

  async recognizeTrainInvoiceWithOptions(request: RecognizeTrainInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTrainInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTrainInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTrainInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTrainInvoiceResponse({}));
  }

  async recognizeTrainInvoice(request: RecognizeTrainInvoiceRequest): Promise<RecognizeTrainInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTrainInvoiceWithOptions(request, runtime);
  }

  async recognizeTravelCardWithOptions(request: RecognizeTravelCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTravelCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTravelCard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTravelCardResponse>(await this.callApi(params, req, runtime), new RecognizeTravelCardResponse({}));
  }

  async recognizeTravelCard(request: RecognizeTravelCardRequest): Promise<RecognizeTravelCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTravelCardWithOptions(request, runtime);
  }

  async recognizeUsedCarInvoiceWithOptions(request: RecognizeUsedCarInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeUsedCarInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeUsedCarInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeUsedCarInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeUsedCarInvoiceResponse({}));
  }

  async recognizeUsedCarInvoice(request: RecognizeUsedCarInvoiceRequest): Promise<RecognizeUsedCarInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeUsedCarInvoiceWithOptions(request, runtime);
  }

  async recognizeVehicleCertificationWithOptions(request: RecognizeVehicleCertificationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleCertificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVehicleCertification",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVehicleCertificationResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleCertificationResponse({}));
  }

  async recognizeVehicleCertification(request: RecognizeVehicleCertificationRequest): Promise<RecognizeVehicleCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleCertificationWithOptions(request, runtime);
  }

  async recognizeVehicleLicenseWithOptions(request: RecognizeVehicleLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVehicleLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVehicleLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleLicenseResponse({}));
  }

  async recognizeVehicleLicense(request: RecognizeVehicleLicenseRequest): Promise<RecognizeVehicleLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleLicenseWithOptions(request, runtime);
  }

  async recognizeVehicleRegistrationWithOptions(request: RecognizeVehicleRegistrationRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleRegistrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVehicleRegistration",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVehicleRegistrationResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleRegistrationResponse({}));
  }

  async recognizeVehicleRegistration(request: RecognizeVehicleRegistrationRequest): Promise<RecognizeVehicleRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleRegistrationWithOptions(request, runtime);
  }

  async recognizeWaybillWithOptions(request: RecognizeWaybillRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeWaybillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "RecognizeWaybill",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeWaybillResponse>(await this.callApi(params, req, runtime), new RecognizeWaybillResponse({}));
  }

  async recognizeWaybill(request: RecognizeWaybillRequest): Promise<RecognizeWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeWaybillWithOptions(request, runtime);
  }

}
