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

export class DataSubImagesFigureInfoValue extends $tea.Model {
  figureCount?: number;
  figureDetails?: DataSubImagesFigureInfoValueFigureDetails[];
  static names(): { [key: string]: string } {
    return {
      figureCount: 'FigureCount',
      figureDetails: 'FigureDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureCount: 'number',
      figureDetails: { 'type': 'array', 'itemType': DataSubImagesFigureInfoValueFigureDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesKvInfoKvDetailsValue extends $tea.Model {
  keyName?: string;
  keyConfidence?: number;
  value?: string;
  valueConfidence?: number;
  valuePoints?: DataSubImagesKvInfoKvDetailsValueValuePoints[];
  valueRect?: DataSubImagesKvInfoKvDetailsValueValueRect;
  valueAngle?: number;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      keyConfidence: 'KeyConfidence',
      value: 'Value',
      valueConfidence: 'ValueConfidence',
      valuePoints: 'ValuePoints',
      valueRect: 'ValueRect',
      valueAngle: 'ValueAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      keyConfidence: 'number',
      value: 'string',
      valueConfidence: 'number',
      valuePoints: { 'type': 'array', 'itemType': DataSubImagesKvInfoKvDetailsValueValuePoints },
      valueRect: DataSubImagesKvInfoKvDetailsValueValueRect,
      valueAngle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAdvancedResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAirItineraryResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RecognizeAllTextRequest extends $tea.Model {
  advancedConfig?: RecognizeAllTextRequestAdvancedConfig;
  idCardConfig?: RecognizeAllTextRequestIdCardConfig;
  internationalBusinessLicenseConfig?: RecognizeAllTextRequestInternationalBusinessLicenseConfig;
  internationalIdCardConfig?: RecognizeAllTextRequestInternationalIdCardConfig;
  multiLanConfig?: RecognizeAllTextRequestMultiLanConfig;
  outputBarCode?: boolean;
  outputCoordinate?: string;
  outputFigure?: boolean;
  outputKVExcel?: boolean;
  outputOricoord?: boolean;
  outputQrcode?: boolean;
  outputStamp?: boolean;
  pageNo?: number;
  tableConfig?: RecognizeAllTextRequestTableConfig;
  type?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      advancedConfig: 'AdvancedConfig',
      idCardConfig: 'IdCardConfig',
      internationalBusinessLicenseConfig: 'InternationalBusinessLicenseConfig',
      internationalIdCardConfig: 'InternationalIdCardConfig',
      multiLanConfig: 'MultiLanConfig',
      outputBarCode: 'OutputBarCode',
      outputCoordinate: 'OutputCoordinate',
      outputFigure: 'OutputFigure',
      outputKVExcel: 'OutputKVExcel',
      outputOricoord: 'OutputOricoord',
      outputQrcode: 'OutputQrcode',
      outputStamp: 'OutputStamp',
      pageNo: 'PageNo',
      tableConfig: 'TableConfig',
      type: 'Type',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: RecognizeAllTextRequestAdvancedConfig,
      idCardConfig: RecognizeAllTextRequestIdCardConfig,
      internationalBusinessLicenseConfig: RecognizeAllTextRequestInternationalBusinessLicenseConfig,
      internationalIdCardConfig: RecognizeAllTextRequestInternationalIdCardConfig,
      multiLanConfig: RecognizeAllTextRequestMultiLanConfig,
      outputBarCode: 'boolean',
      outputCoordinate: 'string',
      outputFigure: 'boolean',
      outputKVExcel: 'boolean',
      outputOricoord: 'boolean',
      outputQrcode: 'boolean',
      outputStamp: 'boolean',
      pageNo: 'number',
      tableConfig: RecognizeAllTextRequestTableConfig,
      type: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextShrinkRequest extends $tea.Model {
  advancedConfigShrink?: string;
  idCardConfigShrink?: string;
  internationalBusinessLicenseConfigShrink?: string;
  internationalIdCardConfigShrink?: string;
  multiLanConfigShrink?: string;
  outputBarCode?: boolean;
  outputCoordinate?: string;
  outputFigure?: boolean;
  outputKVExcel?: boolean;
  outputOricoord?: boolean;
  outputQrcode?: boolean;
  outputStamp?: boolean;
  pageNo?: number;
  tableConfigShrink?: string;
  type?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      advancedConfigShrink: 'AdvancedConfig',
      idCardConfigShrink: 'IdCardConfig',
      internationalBusinessLicenseConfigShrink: 'InternationalBusinessLicenseConfig',
      internationalIdCardConfigShrink: 'InternationalIdCardConfig',
      multiLanConfigShrink: 'MultiLanConfig',
      outputBarCode: 'OutputBarCode',
      outputCoordinate: 'OutputCoordinate',
      outputFigure: 'OutputFigure',
      outputKVExcel: 'OutputKVExcel',
      outputOricoord: 'OutputOricoord',
      outputQrcode: 'OutputQrcode',
      outputStamp: 'OutputStamp',
      pageNo: 'PageNo',
      tableConfigShrink: 'TableConfig',
      type: 'Type',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfigShrink: 'string',
      idCardConfigShrink: 'string',
      internationalBusinessLicenseConfigShrink: 'string',
      internationalIdCardConfigShrink: 'string',
      multiLanConfigShrink: 'string',
      outputBarCode: 'boolean',
      outputCoordinate: 'string',
      outputFigure: 'boolean',
      outputKVExcel: 'boolean',
      outputOricoord: 'boolean',
      outputQrcode: 'boolean',
      outputStamp: 'boolean',
      pageNo: 'number',
      tableConfigShrink: 'string',
      type: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBody extends $tea.Model {
  code?: string;
  data?: RecognizeAllTextResponseBodyData;
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
      data: RecognizeAllTextResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAllTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeAllTextResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBankAcceptanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBankAccountLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBankCardResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBasicResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBirthCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBusShipTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCarInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCarNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCarVinCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeChinesePassportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCommonPrintedInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCosmeticProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCovidTestReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeCtwoMedicalDeviceManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeDocumentStructureResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeDrivingLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduFormulaResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduOralCalculationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduPaperCutResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduPaperOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduPaperStructedResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEduQuestionOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEnglishResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeEstateCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeExitEntryPermitToHKResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeExitEntryPermitToMainlandResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeFoodManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeFoodProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeGeneralResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RecognizeHKIdcardRequest extends $tea.Model {
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

export class RecognizeHKIdcardResponseBody extends $tea.Model {
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

export class RecognizeHKIdcardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHKIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeHKIdcardResponseBody,
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
  paragraph?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      needRotate: 'NeedRotate',
      needSortPage: 'NeedSortPage',
      outputCharInfo: 'OutputCharInfo',
      outputTable: 'OutputTable',
      paragraph: 'Paragraph',
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
      paragraph: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHandwritingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHealthCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHotelConsumeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeHouseholdResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  outputQualityInfo?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputFigure: 'OutputFigure',
      outputQualityInfo: 'OutputQualityInfo',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFigure: 'boolean',
      outputQualityInfo: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RecognizeInternationalBusinessLicenseRequest extends $tea.Model {
  country?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalBusinessLicenseResponseBody extends $tea.Model {
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

export class RecognizeInternationalBusinessLicenseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeInternationalBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeInternationalBusinessLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalIdcardRequest extends $tea.Model {
  country?: string;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      url: 'string',
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInternationalIdcardResponseBody extends $tea.Model {
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

export class RecognizeInternationalIdcardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeInternationalIdcardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeInternationalIdcardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeInvoiceRequest extends $tea.Model {
  pageNo?: number;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeJanpaneseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeKoreanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeLatinResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMedicalDeviceManageLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMedicalDeviceProduceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  mergePdfPages?: boolean;
  pageNo?: number;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      mergePdfPages: 'MergePdfPages',
      pageNo: 'PageNo',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergePdfPages: 'boolean',
      pageNo: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMixedInvoicesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeMultiLanguageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeNonTaxInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePassportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePaymentRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  outputMultiOrders?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      outputMultiOrders: 'OutputMultiOrders',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputMultiOrders: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizePurchaseRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeQuotaInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeRideHailingItineraryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeRollTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeRussianResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeShoppingReceiptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeSocialSecurityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeSocialSecurityCardVersionIIResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  isHandWriting?: string;
  lineLess?: boolean;
  needRotate?: boolean;
  skipDetection?: boolean;
  url?: string;
  body?: Readable;
  static names(): { [key: string]: string } {
    return {
      isHandWriting: 'IsHandWriting',
      lineLess: 'LineLess',
      needRotate: 'NeedRotate',
      skipDetection: 'SkipDetection',
      url: 'Url',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHandWriting: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTableOcrResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTaxClearanceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTaxiInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeThaiResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTollInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTradeMarkCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeTrainInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeUsedCarInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVehicleCertificationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVehicleLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeVehicleRegistrationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeWaybillResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class VerifyBusinessLicenseRequest extends $tea.Model {
  companyName?: string;
  creditCode?: string;
  legalPerson?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      creditCode: 'CreditCode',
      legalPerson: 'LegalPerson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      creditCode: 'string',
      legalPerson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBusinessLicenseResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyBusinessLicenseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyBusinessLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyBusinessLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVATInvoiceRequest extends $tea.Model {
  invoiceCode?: string;
  invoiceDate?: string;
  invoiceKind?: number;
  invoiceNo?: string;
  invoiceSum?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceKind: 'InvoiceKind',
      invoiceNo: 'InvoiceNo',
      invoiceSum: 'InvoiceSum',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceKind: 'number',
      invoiceNo: 'string',
      invoiceSum: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVATInvoiceResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVATInvoiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyVATInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyVATInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesFigureInfoValueFigureDetailsFigurePoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesFigureInfoValueFigureDetailsFigureRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesFigureInfoValueFigureDetails extends $tea.Model {
  type?: string;
  data?: any;
  figurePoints?: DataSubImagesFigureInfoValueFigureDetailsFigurePoints[];
  figureRect?: DataSubImagesFigureInfoValueFigureDetailsFigureRect;
  figureAngle?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      data: 'Data',
      figurePoints: 'FigurePoints',
      figureRect: 'FigureRect',
      figureAngle: 'FigureAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      data: 'any',
      figurePoints: { 'type': 'array', 'itemType': DataSubImagesFigureInfoValueFigureDetailsFigurePoints },
      figureRect: DataSubImagesFigureInfoValueFigureDetailsFigureRect,
      figureAngle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesKvInfoKvDetailsValueValuePoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSubImagesKvInfoKvDetailsValueValueRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestAdvancedConfig extends $tea.Model {
  isHandWritingTable?: boolean;
  isLineLessTable?: boolean;
  outputCharInfo?: boolean;
  outputParagraph?: boolean;
  outputRow?: boolean;
  outputTable?: boolean;
  outputTableExcel?: boolean;
  outputTableHtml?: boolean;
  static names(): { [key: string]: string } {
    return {
      isHandWritingTable: 'IsHandWritingTable',
      isLineLessTable: 'IsLineLessTable',
      outputCharInfo: 'OutputCharInfo',
      outputParagraph: 'OutputParagraph',
      outputRow: 'OutputRow',
      outputTable: 'OutputTable',
      outputTableExcel: 'OutputTableExcel',
      outputTableHtml: 'OutputTableHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHandWritingTable: 'boolean',
      isLineLessTable: 'boolean',
      outputCharInfo: 'boolean',
      outputParagraph: 'boolean',
      outputRow: 'boolean',
      outputTable: 'boolean',
      outputTableExcel: 'boolean',
      outputTableHtml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestIdCardConfig extends $tea.Model {
  outputIdCardQuality?: boolean;
  static names(): { [key: string]: string } {
    return {
      outputIdCardQuality: 'OutputIdCardQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputIdCardQuality: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestInternationalBusinessLicenseConfig extends $tea.Model {
  country?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestInternationalIdCardConfig extends $tea.Model {
  country?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestMultiLanConfig extends $tea.Model {
  languages?: string;
  static names(): { [key: string]: string } {
    return {
      languages: 'Languages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languages: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextRequestTableConfig extends $tea.Model {
  isHandWritingTable?: boolean;
  isLineLessTable?: boolean;
  outputTableExcel?: boolean;
  outputTableHtml?: boolean;
  static names(): { [key: string]: string } {
    return {
      isHandWritingTable: 'IsHandWritingTable',
      isLineLessTable: 'IsLineLessTable',
      outputTableExcel: 'OutputTableExcel',
      outputTableHtml: 'OutputTableHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHandWritingTable: 'boolean',
      isLineLessTable: 'boolean',
      outputTableExcel: 'boolean',
      outputTableHtml: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodePoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodeRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetails extends $tea.Model {
  barCodeAngle?: number;
  barCodePoints?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodePoints[];
  barCodeRect?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodeRect;
  data?: any;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      barCodeAngle: 'BarCodeAngle',
      barCodePoints: 'BarCodePoints',
      barCodeRect: 'BarCodeRect',
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barCodeAngle: 'number',
      barCodePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodePoints },
      barCodeRect: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetailsBarCodeRect,
      data: 'any',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBarCodeInfo extends $tea.Model {
  barCodeCount?: number;
  barCodeDetails?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetails[];
  static names(): { [key: string]: string } {
    return {
      barCodeCount: 'BarCodeCount',
      barCodeDetails: 'BarCodeDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barCodeCount: 'number',
      barCodeDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBarCodeInfoBarCodeDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockPoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharPoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfos extends $tea.Model {
  charConfidence?: number;
  charContent?: string;
  charId?: number;
  charPoints?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharPoints[];
  charRect?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharRect;
  static names(): { [key: string]: string } {
    return {
      charConfidence: 'CharConfidence',
      charContent: 'CharContent',
      charId: 'CharId',
      charPoints: 'CharPoints',
      charRect: 'CharRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charConfidence: 'number',
      charContent: 'string',
      charId: 'number',
      charPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharPoints },
      charRect: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfosCharRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetails extends $tea.Model {
  blockAngle?: number;
  blockConfidence?: number;
  blockContent?: string;
  blockId?: number;
  blockPoints?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockPoints[];
  blockRect?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockRect;
  charInfos?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfos[];
  static names(): { [key: string]: string } {
    return {
      blockAngle: 'BlockAngle',
      blockConfidence: 'BlockConfidence',
      blockContent: 'BlockContent',
      blockId: 'BlockId',
      blockPoints: 'BlockPoints',
      blockRect: 'BlockRect',
      charInfos: 'CharInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockAngle: 'number',
      blockConfidence: 'number',
      blockContent: 'string',
      blockId: 'number',
      blockPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockPoints },
      blockRect: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsBlockRect,
      charInfos: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetailsCharInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesBlockInfo extends $tea.Model {
  blockCount?: number;
  blockDetails?: RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetails[];
  static names(): { [key: string]: string } {
    return {
      blockCount: 'BlockCount',
      blockDetails: 'BlockDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockCount: 'number',
      blockDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesBlockInfoBlockDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesKvInfo extends $tea.Model {
  data?: any;
  kvCount?: number;
  kvDetails?: { [key: string]: DataSubImagesKvInfoKvDetailsValue };
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      kvCount: 'KvCount',
      kvDetails: 'KvDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      kvCount: 'number',
      kvDetails: { 'type': 'map', 'keyType': 'string', 'valueType': DataSubImagesKvInfoKvDetailsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesParagraphInfoParagraphDetails extends $tea.Model {
  blockList?: number[];
  paragraphContent?: string;
  paragraphId?: number;
  static names(): { [key: string]: string } {
    return {
      blockList: 'BlockList',
      paragraphContent: 'ParagraphContent',
      paragraphId: 'ParagraphId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockList: { 'type': 'array', 'itemType': 'number' },
      paragraphContent: 'string',
      paragraphId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesParagraphInfo extends $tea.Model {
  paragraphCount?: number;
  paragraphDetails?: RecognizeAllTextResponseBodyDataSubImagesParagraphInfoParagraphDetails[];
  static names(): { [key: string]: string } {
    return {
      paragraphCount: 'ParagraphCount',
      paragraphDetails: 'ParagraphDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paragraphCount: 'number',
      paragraphDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesParagraphInfoParagraphDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodePoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodeRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetails extends $tea.Model {
  data?: any;
  qrCodeAngle?: number;
  qrCodePoints?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodePoints[];
  qrCodeRect?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodeRect;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      qrCodeAngle: 'QrCodeAngle',
      qrCodePoints: 'QrCodePoints',
      qrCodeRect: 'QrCodeRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      qrCodeAngle: 'number',
      qrCodePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodePoints },
      qrCodeRect: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetailsQrCodeRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQrCodeInfo extends $tea.Model {
  qrCodeCount?: number;
  qrCodeDetails?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetails[];
  static names(): { [key: string]: string } {
    return {
      qrCodeCount: 'QrCodeCount',
      qrCodeDetails: 'QrCodeDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qrCodeCount: 'number',
      qrCodeDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesQrCodeInfoQrCodeDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesQualityInfo extends $tea.Model {
  completenessScore?: number;
  isCopy?: boolean;
  isReshoot?: boolean;
  qualityScore?: number;
  tamperScore?: number;
  static names(): { [key: string]: string } {
    return {
      completenessScore: 'CompletenessScore',
      isCopy: 'IsCopy',
      isReshoot: 'IsReshoot',
      qualityScore: 'QualityScore',
      tamperScore: 'TamperScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completenessScore: 'number',
      isCopy: 'boolean',
      isReshoot: 'boolean',
      qualityScore: 'number',
      tamperScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesRowInfoRowDetails extends $tea.Model {
  blockList?: number[];
  rowContent?: string;
  rowId?: number;
  static names(): { [key: string]: string } {
    return {
      blockList: 'BlockList',
      rowContent: 'RowContent',
      rowId: 'RowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockList: { 'type': 'array', 'itemType': 'number' },
      rowContent: 'string',
      rowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesRowInfo extends $tea.Model {
  rowCount?: number;
  rowDetails?: RecognizeAllTextResponseBodyDataSubImagesRowInfoRowDetails[];
  static names(): { [key: string]: string } {
    return {
      rowCount: 'RowCount',
      rowDetails: 'RowDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowCount: 'number',
      rowDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesRowInfoRowDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsData extends $tea.Model {
  antiFakeCode?: string;
  companyId?: string;
  organizationName?: string;
  organizationNameEng?: string;
  otherText?: string;
  taxpayerId?: string;
  topText?: string;
  static names(): { [key: string]: string } {
    return {
      antiFakeCode: 'AntiFakeCode',
      companyId: 'CompanyId',
      organizationName: 'OrganizationName',
      organizationNameEng: 'OrganizationNameEng',
      otherText: 'OtherText',
      taxpayerId: 'TaxpayerId',
      topText: 'TopText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiFakeCode: 'string',
      companyId: 'string',
      organizationName: 'string',
      organizationNameEng: 'string',
      otherText: 'string',
      taxpayerId: 'string',
      topText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampPoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetails extends $tea.Model {
  data?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsData;
  stampAngle?: number;
  stampPoints?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampPoints[];
  stampRect?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampRect;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      stampAngle: 'StampAngle',
      stampPoints: 'StampPoints',
      stampRect: 'StampRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsData,
      stampAngle: 'number',
      stampPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampPoints },
      stampRect: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetailsStampRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesStampInfo extends $tea.Model {
  stampCount?: number;
  stampDetails?: RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetails[];
  static names(): { [key: string]: string } {
    return {
      stampCount: 'StampCount',
      stampDetails: 'StampDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stampCount: 'number',
      stampDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesStampInfoStampDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesSubImagePoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesSubImageRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellPoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetails extends $tea.Model {
  blockList?: number[];
  cellAngle?: number;
  cellContent?: string;
  cellId?: number;
  cellPoints?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellPoints[];
  cellRect?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellRect;
  columnEnd?: number;
  columnStart?: number;
  rowEnd?: number;
  rowStart?: number;
  static names(): { [key: string]: string } {
    return {
      blockList: 'BlockList',
      cellAngle: 'CellAngle',
      cellContent: 'CellContent',
      cellId: 'CellId',
      cellPoints: 'CellPoints',
      cellRect: 'CellRect',
      columnEnd: 'ColumnEnd',
      columnStart: 'ColumnStart',
      rowEnd: 'RowEnd',
      rowStart: 'RowStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockList: { 'type': 'array', 'itemType': 'number' },
      cellAngle: 'number',
      cellContent: 'string',
      cellId: 'number',
      cellPoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellPoints },
      cellRect: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetailsCellRect,
      columnEnd: 'number',
      columnStart: 'number',
      rowEnd: 'number',
      rowStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsFooter extends $tea.Model {
  blockId?: number;
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'number',
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsHeader extends $tea.Model {
  blockId?: number;
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'number',
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTablePoints extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTableRect extends $tea.Model {
  centerX?: number;
  centerY?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      centerX: 'CenterX',
      centerY: 'CenterY',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centerX: 'number',
      centerY: 'number',
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetails extends $tea.Model {
  cellCount?: number;
  cellDetails?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetails[];
  columnCount?: number;
  footer?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsFooter;
  header?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsHeader;
  rowCount?: number;
  tableId?: number;
  tablePoints?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTablePoints[];
  tableRect?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTableRect;
  static names(): { [key: string]: string } {
    return {
      cellCount: 'CellCount',
      cellDetails: 'CellDetails',
      columnCount: 'ColumnCount',
      footer: 'Footer',
      header: 'Header',
      rowCount: 'RowCount',
      tableId: 'TableId',
      tablePoints: 'TablePoints',
      tableRect: 'TableRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellCount: 'number',
      cellDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsCellDetails },
      columnCount: 'number',
      footer: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsFooter,
      header: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsHeader,
      rowCount: 'number',
      tableId: 'number',
      tablePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTablePoints },
      tableRect: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetailsTableRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImagesTableInfo extends $tea.Model {
  tableCount?: number;
  tableDetails?: RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetails[];
  tableExcel?: string;
  tableHtml?: string;
  static names(): { [key: string]: string } {
    return {
      tableCount: 'TableCount',
      tableDetails: 'TableDetails',
      tableExcel: 'TableExcel',
      tableHtml: 'TableHtml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableCount: 'number',
      tableDetails: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesTableInfoTableDetails },
      tableExcel: 'string',
      tableHtml: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyDataSubImages extends $tea.Model {
  angle?: number;
  barCodeInfo?: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfo;
  blockInfo?: RecognizeAllTextResponseBodyDataSubImagesBlockInfo;
  figureInfo?: { [key: string]: DataSubImagesFigureInfoValue };
  kvInfo?: RecognizeAllTextResponseBodyDataSubImagesKvInfo;
  paragraphInfo?: RecognizeAllTextResponseBodyDataSubImagesParagraphInfo;
  qrCodeInfo?: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfo;
  qualityInfo?: RecognizeAllTextResponseBodyDataSubImagesQualityInfo;
  rowInfo?: RecognizeAllTextResponseBodyDataSubImagesRowInfo;
  stampInfo?: RecognizeAllTextResponseBodyDataSubImagesStampInfo;
  subImageId?: number;
  subImagePoints?: RecognizeAllTextResponseBodyDataSubImagesSubImagePoints[];
  subImageRect?: RecognizeAllTextResponseBodyDataSubImagesSubImageRect;
  tableInfo?: RecognizeAllTextResponseBodyDataSubImagesTableInfo;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      barCodeInfo: 'BarCodeInfo',
      blockInfo: 'BlockInfo',
      figureInfo: 'FigureInfo',
      kvInfo: 'KvInfo',
      paragraphInfo: 'ParagraphInfo',
      qrCodeInfo: 'QrCodeInfo',
      qualityInfo: 'QualityInfo',
      rowInfo: 'RowInfo',
      stampInfo: 'StampInfo',
      subImageId: 'SubImageId',
      subImagePoints: 'SubImagePoints',
      subImageRect: 'SubImageRect',
      tableInfo: 'TableInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      barCodeInfo: RecognizeAllTextResponseBodyDataSubImagesBarCodeInfo,
      blockInfo: RecognizeAllTextResponseBodyDataSubImagesBlockInfo,
      figureInfo: { 'type': 'map', 'keyType': 'string', 'valueType': DataSubImagesFigureInfoValue },
      kvInfo: RecognizeAllTextResponseBodyDataSubImagesKvInfo,
      paragraphInfo: RecognizeAllTextResponseBodyDataSubImagesParagraphInfo,
      qrCodeInfo: RecognizeAllTextResponseBodyDataSubImagesQrCodeInfo,
      qualityInfo: RecognizeAllTextResponseBodyDataSubImagesQualityInfo,
      rowInfo: RecognizeAllTextResponseBodyDataSubImagesRowInfo,
      stampInfo: RecognizeAllTextResponseBodyDataSubImagesStampInfo,
      subImageId: 'number',
      subImagePoints: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImagesSubImagePoints },
      subImageRect: RecognizeAllTextResponseBodyDataSubImagesSubImageRect,
      tableInfo: RecognizeAllTextResponseBodyDataSubImagesTableInfo,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAllTextResponseBodyData extends $tea.Model {
  algoServer?: string[];
  algoVersion?: string;
  content?: string;
  debugInfo?: any;
  height?: number;
  isMixedMode?: boolean;
  kvExcelUrl?: string;
  pageNo?: number;
  subImageCount?: number;
  subImages?: RecognizeAllTextResponseBodyDataSubImages[];
  width?: number;
  xmlResult?: string;
  static names(): { [key: string]: string } {
    return {
      algoServer: 'AlgoServer',
      algoVersion: 'AlgoVersion',
      content: 'Content',
      debugInfo: 'DebugInfo',
      height: 'Height',
      isMixedMode: 'IsMixedMode',
      kvExcelUrl: 'KvExcelUrl',
      pageNo: 'PageNo',
      subImageCount: 'SubImageCount',
      subImages: 'SubImages',
      width: 'Width',
      xmlResult: 'XmlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoServer: { 'type': 'array', 'itemType': 'string' },
      algoVersion: 'string',
      content: 'string',
      debugInfo: 'any',
      height: 'number',
      isMixedMode: 'boolean',
      kvExcelUrl: 'string',
      pageNo: 'number',
      subImageCount: 'number',
      subImages: { 'type': 'array', 'itemType': RecognizeAllTextResponseBodyDataSubImages },
      width: 'number',
      xmlResult: 'string',
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

  /**
   * @summary 全文识别高精版
   *
   * @param request RecognizeAdvancedRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeAdvancedResponse
   */
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

  /**
   * @summary 全文识别高精版
   *
   * @param request RecognizeAdvancedRequest
   * @return RecognizeAdvancedResponse
   */
  async recognizeAdvanced(request: RecognizeAdvancedRequest): Promise<RecognizeAdvancedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAdvancedWithOptions(request, runtime);
  }

  /**
   * @summary 航空行程单
   *
   * @param request RecognizeAirItineraryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeAirItineraryResponse
   */
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

  /**
   * @summary 航空行程单
   *
   * @param request RecognizeAirItineraryRequest
   * @return RecognizeAirItineraryResponse
   */
  async recognizeAirItinerary(request: RecognizeAirItineraryRequest): Promise<RecognizeAirItineraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAirItineraryWithOptions(request, runtime);
  }

  /**
   * @summary 统一Api
   *
   * @param tmpReq RecognizeAllTextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeAllTextResponse
   */
  async recognizeAllTextWithOptions(tmpReq: RecognizeAllTextRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAllTextResponse> {
    Util.validateModel(tmpReq);
    let request = new RecognizeAllTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.advancedConfig)) {
      request.advancedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedConfig, "AdvancedConfig", "json");
    }

    if (!Util.isUnset(tmpReq.idCardConfig)) {
      request.idCardConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.idCardConfig, "IdCardConfig", "json");
    }

    if (!Util.isUnset(tmpReq.internationalBusinessLicenseConfig)) {
      request.internationalBusinessLicenseConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.internationalBusinessLicenseConfig, "InternationalBusinessLicenseConfig", "json");
    }

    if (!Util.isUnset(tmpReq.internationalIdCardConfig)) {
      request.internationalIdCardConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.internationalIdCardConfig, "InternationalIdCardConfig", "json");
    }

    if (!Util.isUnset(tmpReq.multiLanConfig)) {
      request.multiLanConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiLanConfig, "MultiLanConfig", "json");
    }

    if (!Util.isUnset(tmpReq.tableConfig)) {
      request.tableConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableConfig, "TableConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.advancedConfigShrink)) {
      query["AdvancedConfig"] = request.advancedConfigShrink;
    }

    if (!Util.isUnset(request.idCardConfigShrink)) {
      query["IdCardConfig"] = request.idCardConfigShrink;
    }

    if (!Util.isUnset(request.internationalBusinessLicenseConfigShrink)) {
      query["InternationalBusinessLicenseConfig"] = request.internationalBusinessLicenseConfigShrink;
    }

    if (!Util.isUnset(request.internationalIdCardConfigShrink)) {
      query["InternationalIdCardConfig"] = request.internationalIdCardConfigShrink;
    }

    if (!Util.isUnset(request.multiLanConfigShrink)) {
      query["MultiLanConfig"] = request.multiLanConfigShrink;
    }

    if (!Util.isUnset(request.outputBarCode)) {
      query["OutputBarCode"] = request.outputBarCode;
    }

    if (!Util.isUnset(request.outputCoordinate)) {
      query["OutputCoordinate"] = request.outputCoordinate;
    }

    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.outputKVExcel)) {
      query["OutputKVExcel"] = request.outputKVExcel;
    }

    if (!Util.isUnset(request.outputOricoord)) {
      query["OutputOricoord"] = request.outputOricoord;
    }

    if (!Util.isUnset(request.outputQrcode)) {
      query["OutputQrcode"] = request.outputQrcode;
    }

    if (!Util.isUnset(request.outputStamp)) {
      query["OutputStamp"] = request.outputStamp;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.tableConfigShrink)) {
      query["TableConfig"] = request.tableConfigShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
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
      action: "RecognizeAllText",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeAllTextResponse>(await this.callApi(params, req, runtime), new RecognizeAllTextResponse({}));
  }

  /**
   * @summary 统一Api
   *
   * @param request RecognizeAllTextRequest
   * @return RecognizeAllTextResponse
   */
  async recognizeAllText(request: RecognizeAllTextRequest): Promise<RecognizeAllTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAllTextWithOptions(request, runtime);
  }

  /**
   * @summary 银承汇票识别
   *
   * @param request RecognizeBankAcceptanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBankAcceptanceResponse
   */
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

  /**
   * @summary 银承汇票识别
   *
   * @param request RecognizeBankAcceptanceRequest
   * @return RecognizeBankAcceptanceResponse
   */
  async recognizeBankAcceptance(request: RecognizeBankAcceptanceRequest): Promise<RecognizeBankAcceptanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankAcceptanceWithOptions(request, runtime);
  }

  /**
   * @summary 银行开户许可证识别
   *
   * @param request RecognizeBankAccountLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBankAccountLicenseResponse
   */
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

  /**
   * @summary 银行开户许可证识别
   *
   * @param request RecognizeBankAccountLicenseRequest
   * @return RecognizeBankAccountLicenseResponse
   */
  async recognizeBankAccountLicense(request: RecognizeBankAccountLicenseRequest): Promise<RecognizeBankAccountLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankAccountLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 银行卡识别
   *
   * @param request RecognizeBankCardRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBankCardResponse
   */
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

  /**
   * @summary 银行卡识别
   *
   * @param request RecognizeBankCardRequest
   * @return RecognizeBankCardResponse
   */
  async recognizeBankCard(request: RecognizeBankCardRequest): Promise<RecognizeBankCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankCardWithOptions(request, runtime);
  }

  /**
   * @summary 电商图片文字识别
   *
   * @param request RecognizeBasicRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBasicResponse
   */
  async recognizeBasicWithOptions(request: RecognizeBasicRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBasicResponse> {
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

  /**
   * @summary 电商图片文字识别
   *
   * @param request RecognizeBasicRequest
   * @return RecognizeBasicResponse
   */
  async recognizeBasic(request: RecognizeBasicRequest): Promise<RecognizeBasicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBasicWithOptions(request, runtime);
  }

  /**
   * @summary 出生证明
   *
   * @param request RecognizeBirthCertificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBirthCertificationResponse
   */
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

  /**
   * @summary 出生证明
   *
   * @param request RecognizeBirthCertificationRequest
   * @return RecognizeBirthCertificationResponse
   */
  async recognizeBirthCertification(request: RecognizeBirthCertificationRequest): Promise<RecognizeBirthCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBirthCertificationWithOptions(request, runtime);
  }

  /**
   * @summary 客运车船票识别
   *
   * @param request RecognizeBusShipTicketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBusShipTicketResponse
   */
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

  /**
   * @summary 客运车船票识别
   *
   * @param request RecognizeBusShipTicketRequest
   * @return RecognizeBusShipTicketResponse
   */
  async recognizeBusShipTicket(request: RecognizeBusShipTicketRequest): Promise<RecognizeBusShipTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusShipTicketWithOptions(request, runtime);
  }

  /**
   * @summary 营业执照识别
   *
   * @param request RecognizeBusinessLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeBusinessLicenseResponse
   */
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

  /**
   * @summary 营业执照识别
   *
   * @param request RecognizeBusinessLicenseRequest
   * @return RecognizeBusinessLicenseResponse
   */
  async recognizeBusinessLicense(request: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusinessLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 机动车销售发票
   *
   * @param request RecognizeCarInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCarInvoiceResponse
   */
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

  /**
   * @summary 机动车销售发票
   *
   * @param request RecognizeCarInvoiceRequest
   * @return RecognizeCarInvoiceResponse
   */
  async recognizeCarInvoice(request: RecognizeCarInvoiceRequest): Promise<RecognizeCarInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 车牌识别
   *
   * @param request RecognizeCarNumberRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCarNumberResponse
   */
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

  /**
   * @summary 车牌识别
   *
   * @param request RecognizeCarNumberRequest
   * @return RecognizeCarNumberResponse
   */
  async recognizeCarNumber(request: RecognizeCarNumberRequest): Promise<RecognizeCarNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarNumberWithOptions(request, runtime);
  }

  /**
   * @summary 车辆vin码识别
   *
   * @param request RecognizeCarVinCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCarVinCodeResponse
   */
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

  /**
   * @summary 车辆vin码识别
   *
   * @param request RecognizeCarVinCodeRequest
   * @return RecognizeCarVinCodeResponse
   */
  async recognizeCarVinCode(request: RecognizeCarVinCodeRequest): Promise<RecognizeCarVinCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCarVinCodeWithOptions(request, runtime);
  }

  /**
   * @summary 中国护照识别
   *
   * @param request RecognizeChinesePassportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeChinesePassportResponse
   */
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

  /**
   * @summary 中国护照识别
   *
   * @param request RecognizeChinesePassportRequest
   * @return RecognizeChinesePassportResponse
   */
  async recognizeChinesePassport(request: RecognizeChinesePassportRequest): Promise<RecognizeChinesePassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeChinesePassportWithOptions(request, runtime);
  }

  /**
   * @summary 通用机打发票识别
   *
   * @param request RecognizeCommonPrintedInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCommonPrintedInvoiceResponse
   */
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

  /**
   * @summary 通用机打发票识别
   *
   * @param request RecognizeCommonPrintedInvoiceRequest
   * @return RecognizeCommonPrintedInvoiceResponse
   */
  async recognizeCommonPrintedInvoice(request: RecognizeCommonPrintedInvoiceRequest): Promise<RecognizeCommonPrintedInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCommonPrintedInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 化妆品生产许可证识别
   *
   * @param request RecognizeCosmeticProduceLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCosmeticProduceLicenseResponse
   */
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

  /**
   * @summary 化妆品生产许可证识别
   *
   * @param request RecognizeCosmeticProduceLicenseRequest
   * @return RecognizeCosmeticProduceLicenseResponse
   */
  async recognizeCosmeticProduceLicense(request: RecognizeCosmeticProduceLicenseRequest): Promise<RecognizeCosmeticProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCosmeticProduceLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 核算检测报告识别
   *
   * @param request RecognizeCovidTestReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCovidTestReportResponse
   */
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

  /**
   * @summary 核算检测报告识别
   *
   * @param request RecognizeCovidTestReportRequest
   * @return RecognizeCovidTestReportResponse
   */
  async recognizeCovidTestReport(request: RecognizeCovidTestReportRequest): Promise<RecognizeCovidTestReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCovidTestReportWithOptions(request, runtime);
  }

  /**
   * @summary 第二类医疗器械经营备案凭证
   *
   * @param request RecognizeCtwoMedicalDeviceManageLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeCtwoMedicalDeviceManageLicenseResponse
   */
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

  /**
   * @summary 第二类医疗器械经营备案凭证
   *
   * @param request RecognizeCtwoMedicalDeviceManageLicenseRequest
   * @return RecognizeCtwoMedicalDeviceManageLicenseResponse
   */
  async recognizeCtwoMedicalDeviceManageLicense(request: RecognizeCtwoMedicalDeviceManageLicenseRequest): Promise<RecognizeCtwoMedicalDeviceManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCtwoMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 文档结构化识别
   *
   * @param request RecognizeDocumentStructureRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeDocumentStructureResponse
   */
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

  /**
   * @summary 文档结构化识别
   *
   * @param request RecognizeDocumentStructureRequest
   * @return RecognizeDocumentStructureResponse
   */
  async recognizeDocumentStructure(request: RecognizeDocumentStructureRequest): Promise<RecognizeDocumentStructureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDocumentStructureWithOptions(request, runtime);
  }

  /**
   * @summary 驾驶证识别
   *
   * @param request RecognizeDrivingLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeDrivingLicenseResponse
   */
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

  /**
   * @summary 驾驶证识别
   *
   * @param request RecognizeDrivingLicenseRequest
   * @return RecognizeDrivingLicenseResponse
   */
  async recognizeDrivingLicense(request: RecognizeDrivingLicenseRequest): Promise<RecognizeDrivingLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDrivingLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 印刷体数学公式识别
   *
   * @param request RecognizeEduFormulaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEduFormulaResponse
   */
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

  /**
   * @summary 印刷体数学公式识别
   *
   * @param request RecognizeEduFormulaRequest
   * @return RecognizeEduFormulaResponse
   */
  async recognizeEduFormula(request: RecognizeEduFormulaRequest): Promise<RecognizeEduFormulaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduFormulaWithOptions(request, runtime);
  }

  /**
   * @summary 口算判题
   *
   * @param request RecognizeEduOralCalculationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEduOralCalculationResponse
   */
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

  /**
   * @summary 口算判题
   *
   * @param request RecognizeEduOralCalculationRequest
   * @return RecognizeEduOralCalculationResponse
   */
  async recognizeEduOralCalculation(request: RecognizeEduOralCalculationRequest): Promise<RecognizeEduOralCalculationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduOralCalculationWithOptions(request, runtime);
  }

  /**
   * @summary 试卷切题识别
   *
   * @param request RecognizeEduPaperCutRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEduPaperCutResponse
   */
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

  /**
   * @summary 试卷切题识别
   *
   * @param request RecognizeEduPaperCutRequest
   * @return RecognizeEduPaperCutResponse
   */
  async recognizeEduPaperCut(request: RecognizeEduPaperCutRequest): Promise<RecognizeEduPaperCutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperCutWithOptions(request, runtime);
  }

  /**
   * @summary 整页试卷识别
   *
   * @param request RecognizeEduPaperOcrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEduPaperOcrResponse
   */
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

  /**
   * @summary 整页试卷识别
   *
   * @param request RecognizeEduPaperOcrRequest
   * @return RecognizeEduPaperOcrResponse
   */
  async recognizeEduPaperOcr(request: RecognizeEduPaperOcrRequest): Promise<RecognizeEduPaperOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperOcrWithOptions(request, runtime);
  }

  /**
   * @summary 精细版结构化切题
   *
   * @param request RecognizeEduPaperStructedRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEduPaperStructedResponse
   */
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

  /**
   * @summary 精细版结构化切题
   *
   * @param request RecognizeEduPaperStructedRequest
   * @return RecognizeEduPaperStructedResponse
   */
  async recognizeEduPaperStructed(request: RecognizeEduPaperStructedRequest): Promise<RecognizeEduPaperStructedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduPaperStructedWithOptions(request, runtime);
  }

  /**
   * @summary 题目识别
   *
   * @param request RecognizeEduQuestionOcrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEduQuestionOcrResponse
   */
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

  /**
   * @summary 题目识别
   *
   * @param request RecognizeEduQuestionOcrRequest
   * @return RecognizeEduQuestionOcrResponse
   */
  async recognizeEduQuestionOcr(request: RecognizeEduQuestionOcrRequest): Promise<RecognizeEduQuestionOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEduQuestionOcrWithOptions(request, runtime);
  }

  /**
   * @summary 英语专项识别
   *
   * @param request RecognizeEnglishRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEnglishResponse
   */
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

  /**
   * @summary 英语专项识别
   *
   * @param request RecognizeEnglishRequest
   * @return RecognizeEnglishResponse
   */
  async recognizeEnglish(request: RecognizeEnglishRequest): Promise<RecognizeEnglishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEnglishWithOptions(request, runtime);
  }

  /**
   * @summary 不动产权证
   *
   * @param request RecognizeEstateCertificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeEstateCertificationResponse
   */
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

  /**
   * @summary 不动产权证
   *
   * @param request RecognizeEstateCertificationRequest
   * @return RecognizeEstateCertificationResponse
   */
  async recognizeEstateCertification(request: RecognizeEstateCertificationRequest): Promise<RecognizeEstateCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeEstateCertificationWithOptions(request, runtime);
  }

  /**
   * @summary 来往港澳台通行证识别
   *
   * @param request RecognizeExitEntryPermitToHKRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeExitEntryPermitToHKResponse
   */
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

  /**
   * @summary 来往港澳台通行证识别
   *
   * @param request RecognizeExitEntryPermitToHKRequest
   * @return RecognizeExitEntryPermitToHKResponse
   */
  async recognizeExitEntryPermitToHK(request: RecognizeExitEntryPermitToHKRequest): Promise<RecognizeExitEntryPermitToHKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeExitEntryPermitToHKWithOptions(request, runtime);
  }

  /**
   * @summary 来往大陆(内地)通行证识别
   *
   * @param request RecognizeExitEntryPermitToMainlandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeExitEntryPermitToMainlandResponse
   */
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

  /**
   * @summary 来往大陆(内地)通行证识别
   *
   * @param request RecognizeExitEntryPermitToMainlandRequest
   * @return RecognizeExitEntryPermitToMainlandResponse
   */
  async recognizeExitEntryPermitToMainland(request: RecognizeExitEntryPermitToMainlandRequest): Promise<RecognizeExitEntryPermitToMainlandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeExitEntryPermitToMainlandWithOptions(request, runtime);
  }

  /**
   * @summary 食品经营许可证
   *
   * @param request RecognizeFoodManageLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeFoodManageLicenseResponse
   */
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

  /**
   * @summary 食品经营许可证
   *
   * @param request RecognizeFoodManageLicenseRequest
   * @return RecognizeFoodManageLicenseResponse
   */
  async recognizeFoodManageLicense(request: RecognizeFoodManageLicenseRequest): Promise<RecognizeFoodManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodManageLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 食品生产许可证
   *
   * @param request RecognizeFoodProduceLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeFoodProduceLicenseResponse
   */
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

  /**
   * @summary 食品生产许可证
   *
   * @param request RecognizeFoodProduceLicenseRequest
   * @return RecognizeFoodProduceLicenseResponse
   */
  async recognizeFoodProduceLicense(request: RecognizeFoodProduceLicenseRequest): Promise<RecognizeFoodProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodProduceLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 通用文字识别
   *
   * @param request RecognizeGeneralRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeGeneralResponse
   */
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

  /**
   * @summary 通用文字识别
   *
   * @param request RecognizeGeneralRequest
   * @return RecognizeGeneralResponse
   */
  async recognizeGeneral(request: RecognizeGeneralRequest): Promise<RecognizeGeneralResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeGeneralWithOptions(request, runtime);
  }

  /**
   * @summary 香港身份证识别
   *
   * @param request RecognizeHKIdcardRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeHKIdcardResponse
   */
  async recognizeHKIdcardWithOptions(request: RecognizeHKIdcardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeHKIdcardResponse> {
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
      action: "RecognizeHKIdcard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeHKIdcardResponse>(await this.callApi(params, req, runtime), new RecognizeHKIdcardResponse({}));
  }

  /**
   * @summary 香港身份证识别
   *
   * @param request RecognizeHKIdcardRequest
   * @return RecognizeHKIdcardResponse
   */
  async recognizeHKIdcard(request: RecognizeHKIdcardRequest): Promise<RecognizeHKIdcardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHKIdcardWithOptions(request, runtime);
  }

  /**
   * @summary 通用手写体识别
   *
   * @param request RecognizeHandwritingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeHandwritingResponse
   */
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

    if (!Util.isUnset(request.paragraph)) {
      query["Paragraph"] = request.paragraph;
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

  /**
   * @summary 通用手写体识别
   *
   * @param request RecognizeHandwritingRequest
   * @return RecognizeHandwritingResponse
   */
  async recognizeHandwriting(request: RecognizeHandwritingRequest): Promise<RecognizeHandwritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHandwritingWithOptions(request, runtime);
  }

  /**
   * @summary 防疫健康码识别
   *
   * @param request RecognizeHealthCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeHealthCodeResponse
   */
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

  /**
   * @summary 防疫健康码识别
   *
   * @param request RecognizeHealthCodeRequest
   * @return RecognizeHealthCodeResponse
   */
  async recognizeHealthCode(request: RecognizeHealthCodeRequest): Promise<RecognizeHealthCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHealthCodeWithOptions(request, runtime);
  }

  /**
   * @summary 酒店流水识别
   *
   * @param request RecognizeHotelConsumeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeHotelConsumeResponse
   */
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

  /**
   * @summary 酒店流水识别
   *
   * @param request RecognizeHotelConsumeRequest
   * @return RecognizeHotelConsumeResponse
   */
  async recognizeHotelConsume(request: RecognizeHotelConsumeRequest): Promise<RecognizeHotelConsumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHotelConsumeWithOptions(request, runtime);
  }

  /**
   * @summary 户口本识别
   *
   * @param request RecognizeHouseholdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeHouseholdResponse
   */
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

  /**
   * @summary 户口本识别
   *
   * @param request RecognizeHouseholdRequest
   * @return RecognizeHouseholdResponse
   */
  async recognizeHousehold(request: RecognizeHouseholdRequest): Promise<RecognizeHouseholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeHouseholdWithOptions(request, runtime);
  }

  /**
   * @summary 身份证识别
   *
   * @param request RecognizeIdcardRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeIdcardResponse
   */
  async recognizeIdcardWithOptions(request: RecognizeIdcardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdcardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFigure)) {
      query["OutputFigure"] = request.outputFigure;
    }

    if (!Util.isUnset(request.outputQualityInfo)) {
      query["OutputQualityInfo"] = request.outputQualityInfo;
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

  /**
   * @summary 身份证识别
   *
   * @param request RecognizeIdcardRequest
   * @return RecognizeIdcardResponse
   */
  async recognizeIdcard(request: RecognizeIdcardRequest): Promise<RecognizeIdcardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeIdcardWithOptions(request, runtime);
  }

  /**
   * @summary 国际营业执照识别
   *
   * @param request RecognizeInternationalBusinessLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeInternationalBusinessLicenseResponse
   */
  async recognizeInternationalBusinessLicenseWithOptions(request: RecognizeInternationalBusinessLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeInternationalBusinessLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
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
      action: "RecognizeInternationalBusinessLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeInternationalBusinessLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeInternationalBusinessLicenseResponse({}));
  }

  /**
   * @summary 国际营业执照识别
   *
   * @param request RecognizeInternationalBusinessLicenseRequest
   * @return RecognizeInternationalBusinessLicenseResponse
   */
  async recognizeInternationalBusinessLicense(request: RecognizeInternationalBusinessLicenseRequest): Promise<RecognizeInternationalBusinessLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeInternationalBusinessLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 国际身份证识别
   *
   * @param request RecognizeInternationalIdcardRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeInternationalIdcardResponse
   */
  async recognizeInternationalIdcardWithOptions(request: RecognizeInternationalIdcardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeInternationalIdcardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
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
      action: "RecognizeInternationalIdcard",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeInternationalIdcardResponse>(await this.callApi(params, req, runtime), new RecognizeInternationalIdcardResponse({}));
  }

  /**
   * @summary 国际身份证识别
   *
   * @param request RecognizeInternationalIdcardRequest
   * @return RecognizeInternationalIdcardResponse
   */
  async recognizeInternationalIdcard(request: RecognizeInternationalIdcardRequest): Promise<RecognizeInternationalIdcardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeInternationalIdcardWithOptions(request, runtime);
  }

  /**
   * @summary 增值税发票识别
   *
   * @param request RecognizeInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeInvoiceResponse
   */
  async recognizeInvoiceWithOptions(request: RecognizeInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

  /**
   * @summary 增值税发票识别
   *
   * @param request RecognizeInvoiceRequest
   * @return RecognizeInvoiceResponse
   */
  async recognizeInvoice(request: RecognizeInvoiceRequest): Promise<RecognizeInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 日语识别
   *
   * @param request RecognizeJanpaneseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeJanpaneseResponse
   */
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

  /**
   * @summary 日语识别
   *
   * @param request RecognizeJanpaneseRequest
   * @return RecognizeJanpaneseResponse
   */
  async recognizeJanpanese(request: RecognizeJanpaneseRequest): Promise<RecognizeJanpaneseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeJanpaneseWithOptions(request, runtime);
  }

  /**
   * @summary 韩语识别
   *
   * @param request RecognizeKoreanRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeKoreanResponse
   */
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

  /**
   * @summary 韩语识别
   *
   * @param request RecognizeKoreanRequest
   * @return RecognizeKoreanResponse
   */
  async recognizeKorean(request: RecognizeKoreanRequest): Promise<RecognizeKoreanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeKoreanWithOptions(request, runtime);
  }

  /**
   * @summary 拉丁语识别
   *
   * @param request RecognizeLatinRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeLatinResponse
   */
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

  /**
   * @summary 拉丁语识别
   *
   * @param request RecognizeLatinRequest
   * @return RecognizeLatinResponse
   */
  async recognizeLatin(request: RecognizeLatinRequest): Promise<RecognizeLatinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLatinWithOptions(request, runtime);
  }

  /**
   * @summary 医疗器械经营许可证
   *
   * @param request RecognizeMedicalDeviceManageLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeMedicalDeviceManageLicenseResponse
   */
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

  /**
   * @summary 医疗器械经营许可证
   *
   * @param request RecognizeMedicalDeviceManageLicenseRequest
   * @return RecognizeMedicalDeviceManageLicenseResponse
   */
  async recognizeMedicalDeviceManageLicense(request: RecognizeMedicalDeviceManageLicenseRequest): Promise<RecognizeMedicalDeviceManageLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceManageLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 医疗器械生产许可证
   *
   * @param request RecognizeMedicalDeviceProduceLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeMedicalDeviceProduceLicenseResponse
   */
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

  /**
   * @summary 医疗器械生产许可证
   *
   * @param request RecognizeMedicalDeviceProduceLicenseRequest
   * @return RecognizeMedicalDeviceProduceLicenseResponse
   */
  async recognizeMedicalDeviceProduceLicense(request: RecognizeMedicalDeviceProduceLicenseRequest): Promise<RecognizeMedicalDeviceProduceLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMedicalDeviceProduceLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 混贴发票识别
   *
   * @param request RecognizeMixedInvoicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeMixedInvoicesResponse
   */
  async recognizeMixedInvoicesWithOptions(request: RecognizeMixedInvoicesRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMixedInvoicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mergePdfPages)) {
      query["MergePdfPages"] = request.mergePdfPages;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

  /**
   * @summary 混贴发票识别
   *
   * @param request RecognizeMixedInvoicesRequest
   * @return RecognizeMixedInvoicesResponse
   */
  async recognizeMixedInvoices(request: RecognizeMixedInvoicesRequest): Promise<RecognizeMixedInvoicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMixedInvoicesWithOptions(request, runtime);
  }

  /**
   * @summary 通用多语言识别
   *
   * @param tmpReq RecognizeMultiLanguageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeMultiLanguageResponse
   */
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

  /**
   * @summary 通用多语言识别
   *
   * @param request RecognizeMultiLanguageRequest
   * @return RecognizeMultiLanguageResponse
   */
  async recognizeMultiLanguage(request: RecognizeMultiLanguageRequest): Promise<RecognizeMultiLanguageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMultiLanguageWithOptions(request, runtime);
  }

  /**
   * @summary 非税收入票据识别
   *
   * @param request RecognizeNonTaxInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeNonTaxInvoiceResponse
   */
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

  /**
   * @summary 非税收入票据识别
   *
   * @param request RecognizeNonTaxInvoiceRequest
   * @return RecognizeNonTaxInvoiceResponse
   */
  async recognizeNonTaxInvoice(request: RecognizeNonTaxInvoiceRequest): Promise<RecognizeNonTaxInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeNonTaxInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 护照识别
   *
   * @param request RecognizePassportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizePassportResponse
   */
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

  /**
   * @summary 护照识别
   *
   * @param request RecognizePassportRequest
   * @return RecognizePassportResponse
   */
  async recognizePassport(request: RecognizePassportRequest): Promise<RecognizePassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePassportWithOptions(request, runtime);
  }

  /**
   * @summary 支付详情页识别
   *
   * @param request RecognizePaymentRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizePaymentRecordResponse
   */
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

  /**
   * @summary 支付详情页识别
   *
   * @param request RecognizePaymentRecordRequest
   * @return RecognizePaymentRecordResponse
   */
  async recognizePaymentRecord(request: RecognizePaymentRecordRequest): Promise<RecognizePaymentRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePaymentRecordWithOptions(request, runtime);
  }

  /**
   * @summary 电商订单页识别
   *
   * @param request RecognizePurchaseRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizePurchaseRecordResponse
   */
  async recognizePurchaseRecordWithOptions(request: RecognizePurchaseRecordRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePurchaseRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputMultiOrders)) {
      query["OutputMultiOrders"] = request.outputMultiOrders;
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

  /**
   * @summary 电商订单页识别
   *
   * @param request RecognizePurchaseRecordRequest
   * @return RecognizePurchaseRecordResponse
   */
  async recognizePurchaseRecord(request: RecognizePurchaseRecordRequest): Promise<RecognizePurchaseRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePurchaseRecordWithOptions(request, runtime);
  }

  /**
   * @summary 定额发票
   *
   * @param request RecognizeQuotaInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeQuotaInvoiceResponse
   */
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

  /**
   * @summary 定额发票
   *
   * @param request RecognizeQuotaInvoiceRequest
   * @return RecognizeQuotaInvoiceResponse
   */
  async recognizeQuotaInvoice(request: RecognizeQuotaInvoiceRequest): Promise<RecognizeQuotaInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeQuotaInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 网约车行程单识别
   *
   * @param request RecognizeRideHailingItineraryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeRideHailingItineraryResponse
   */
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

  /**
   * @summary 网约车行程单识别
   *
   * @param request RecognizeRideHailingItineraryRequest
   * @return RecognizeRideHailingItineraryResponse
   */
  async recognizeRideHailingItinerary(request: RecognizeRideHailingItineraryRequest): Promise<RecognizeRideHailingItineraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRideHailingItineraryWithOptions(request, runtime);
  }

  /**
   * @summary 增值税发票卷票
   *
   * @param request RecognizeRollTicketRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeRollTicketResponse
   */
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

  /**
   * @summary 增值税发票卷票
   *
   * @param request RecognizeRollTicketRequest
   * @return RecognizeRollTicketResponse
   */
  async recognizeRollTicket(request: RecognizeRollTicketRequest): Promise<RecognizeRollTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRollTicketWithOptions(request, runtime);
  }

  /**
   * @summary 俄语识别
   *
   * @param request RecognizeRussianRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeRussianResponse
   */
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

  /**
   * @summary 俄语识别
   *
   * @param request RecognizeRussianRequest
   * @return RecognizeRussianResponse
   */
  async recognizeRussian(request: RecognizeRussianRequest): Promise<RecognizeRussianResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRussianWithOptions(request, runtime);
  }

  /**
   * @summary 购物小票识别
   *
   * @param request RecognizeShoppingReceiptRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeShoppingReceiptResponse
   */
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

  /**
   * @summary 购物小票识别
   *
   * @param request RecognizeShoppingReceiptRequest
   * @return RecognizeShoppingReceiptResponse
   */
  async recognizeShoppingReceipt(request: RecognizeShoppingReceiptRequest): Promise<RecognizeShoppingReceiptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeShoppingReceiptWithOptions(request, runtime);
  }

  /**
   * @summary 社会保障卡识别
   *
   * @param request RecognizeSocialSecurityCardRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeSocialSecurityCardResponse
   */
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

  /**
   * @summary 社会保障卡识别
   *
   * @param request RecognizeSocialSecurityCardRequest
   * @return RecognizeSocialSecurityCardResponse
   */
  async recognizeSocialSecurityCard(request: RecognizeSocialSecurityCardRequest): Promise<RecognizeSocialSecurityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeSocialSecurityCardWithOptions(request, runtime);
  }

  /**
   * @summary 社保卡识别
   *
   * @param request RecognizeSocialSecurityCardVersionIIRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeSocialSecurityCardVersionIIResponse
   */
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

  /**
   * @summary 社保卡识别
   *
   * @param request RecognizeSocialSecurityCardVersionIIRequest
   * @return RecognizeSocialSecurityCardVersionIIResponse
   */
  async recognizeSocialSecurityCardVersionII(request: RecognizeSocialSecurityCardVersionIIRequest): Promise<RecognizeSocialSecurityCardVersionIIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeSocialSecurityCardVersionIIWithOptions(request, runtime);
  }

  /**
   * @summary 表格识别
   *
   * @param request RecognizeTableOcrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeTableOcrResponse
   */
  async recognizeTableOcrWithOptions(request: RecognizeTableOcrRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableOcrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isHandWriting)) {
      query["IsHandWriting"] = request.isHandWriting;
    }

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

  /**
   * @summary 表格识别
   *
   * @param request RecognizeTableOcrRequest
   * @return RecognizeTableOcrResponse
   */
  async recognizeTableOcr(request: RecognizeTableOcrRequest): Promise<RecognizeTableOcrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTableOcrWithOptions(request, runtime);
  }

  /**
   * @summary 税收完税证明识别
   *
   * @param request RecognizeTaxClearanceCertificateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeTaxClearanceCertificateResponse
   */
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

  /**
   * @summary 税收完税证明识别
   *
   * @param request RecognizeTaxClearanceCertificateRequest
   * @return RecognizeTaxClearanceCertificateResponse
   */
  async recognizeTaxClearanceCertificate(request: RecognizeTaxClearanceCertificateRequest): Promise<RecognizeTaxClearanceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTaxClearanceCertificateWithOptions(request, runtime);
  }

  /**
   * @summary 出租车发票
   *
   * @param request RecognizeTaxiInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeTaxiInvoiceResponse
   */
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

  /**
   * @summary 出租车发票
   *
   * @param request RecognizeTaxiInvoiceRequest
   * @return RecognizeTaxiInvoiceResponse
   */
  async recognizeTaxiInvoice(request: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTaxiInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 泰语识别
   *
   * @param request RecognizeThaiRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeThaiResponse
   */
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

  /**
   * @summary 泰语识别
   *
   * @param request RecognizeThaiRequest
   * @return RecognizeThaiResponse
   */
  async recognizeThai(request: RecognizeThaiRequest): Promise<RecognizeThaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeThaiWithOptions(request, runtime);
  }

  /**
   * @summary 过路过桥费发票识别
   *
   * @param request RecognizeTollInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeTollInvoiceResponse
   */
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

  /**
   * @summary 过路过桥费发票识别
   *
   * @param request RecognizeTollInvoiceRequest
   * @return RecognizeTollInvoiceResponse
   */
  async recognizeTollInvoice(request: RecognizeTollInvoiceRequest): Promise<RecognizeTollInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTollInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 商标注册证
   *
   * @param request RecognizeTradeMarkCertificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeTradeMarkCertificationResponse
   */
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

  /**
   * @summary 商标注册证
   *
   * @param request RecognizeTradeMarkCertificationRequest
   * @return RecognizeTradeMarkCertificationResponse
   */
  async recognizeTradeMarkCertification(request: RecognizeTradeMarkCertificationRequest): Promise<RecognizeTradeMarkCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTradeMarkCertificationWithOptions(request, runtime);
  }

  /**
   * @summary 火车票
   *
   * @param request RecognizeTrainInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeTrainInvoiceResponse
   */
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

  /**
   * @summary 火车票
   *
   * @param request RecognizeTrainInvoiceRequest
   * @return RecognizeTrainInvoiceResponse
   */
  async recognizeTrainInvoice(request: RecognizeTrainInvoiceRequest): Promise<RecognizeTrainInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTrainInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 二手车统一销售发票识别
   *
   * @param request RecognizeUsedCarInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeUsedCarInvoiceResponse
   */
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

  /**
   * @summary 二手车统一销售发票识别
   *
   * @param request RecognizeUsedCarInvoiceRequest
   * @return RecognizeUsedCarInvoiceResponse
   */
  async recognizeUsedCarInvoice(request: RecognizeUsedCarInvoiceRequest): Promise<RecognizeUsedCarInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeUsedCarInvoiceWithOptions(request, runtime);
  }

  /**
   * @summary 车辆合格证识别
   *
   * @param request RecognizeVehicleCertificationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeVehicleCertificationResponse
   */
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

  /**
   * @summary 车辆合格证识别
   *
   * @param request RecognizeVehicleCertificationRequest
   * @return RecognizeVehicleCertificationResponse
   */
  async recognizeVehicleCertification(request: RecognizeVehicleCertificationRequest): Promise<RecognizeVehicleCertificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleCertificationWithOptions(request, runtime);
  }

  /**
   * @summary 行驶证识别
   *
   * @param request RecognizeVehicleLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeVehicleLicenseResponse
   */
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

  /**
   * @summary 行驶证识别
   *
   * @param request RecognizeVehicleLicenseRequest
   * @return RecognizeVehicleLicenseResponse
   */
  async recognizeVehicleLicense(request: RecognizeVehicleLicenseRequest): Promise<RecognizeVehicleLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 机动车注册登记证识别
   *
   * @param request RecognizeVehicleRegistrationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeVehicleRegistrationResponse
   */
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

  /**
   * @summary 机动车注册登记证识别
   *
   * @param request RecognizeVehicleRegistrationRequest
   * @return RecognizeVehicleRegistrationResponse
   */
  async recognizeVehicleRegistration(request: RecognizeVehicleRegistrationRequest): Promise<RecognizeVehicleRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleRegistrationWithOptions(request, runtime);
  }

  /**
   * @summary 电子面单识别
   *
   * @param request RecognizeWaybillRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RecognizeWaybillResponse
   */
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

  /**
   * @summary 电子面单识别
   *
   * @param request RecognizeWaybillRequest
   * @return RecognizeWaybillResponse
   */
  async recognizeWaybill(request: RecognizeWaybillRequest): Promise<RecognizeWaybillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeWaybillWithOptions(request, runtime);
  }

  /**
   * @summary 营业执照核验
   *
   * @param request VerifyBusinessLicenseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyBusinessLicenseResponse
   */
  async verifyBusinessLicenseWithOptions(request: VerifyBusinessLicenseRequest, runtime: $Util.RuntimeOptions): Promise<VerifyBusinessLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!Util.isUnset(request.creditCode)) {
      query["CreditCode"] = request.creditCode;
    }

    if (!Util.isUnset(request.legalPerson)) {
      query["LegalPerson"] = request.legalPerson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyBusinessLicense",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyBusinessLicenseResponse>(await this.callApi(params, req, runtime), new VerifyBusinessLicenseResponse({}));
  }

  /**
   * @summary 营业执照核验
   *
   * @param request VerifyBusinessLicenseRequest
   * @return VerifyBusinessLicenseResponse
   */
  async verifyBusinessLicense(request: VerifyBusinessLicenseRequest): Promise<VerifyBusinessLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyBusinessLicenseWithOptions(request, runtime);
  }

  /**
   * @summary 增值税发票核验
   *
   * @param request VerifyVATInvoiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyVATInvoiceResponse
   */
  async verifyVATInvoiceWithOptions(request: VerifyVATInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyVATInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.invoiceCode)) {
      query["InvoiceCode"] = request.invoiceCode;
    }

    if (!Util.isUnset(request.invoiceDate)) {
      query["InvoiceDate"] = request.invoiceDate;
    }

    if (!Util.isUnset(request.invoiceKind)) {
      query["InvoiceKind"] = request.invoiceKind;
    }

    if (!Util.isUnset(request.invoiceNo)) {
      query["InvoiceNo"] = request.invoiceNo;
    }

    if (!Util.isUnset(request.invoiceSum)) {
      query["InvoiceSum"] = request.invoiceSum;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyVATInvoice",
      version: "2021-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyVATInvoiceResponse>(await this.callApi(params, req, runtime), new VerifyVATInvoiceResponse({}));
  }

  /**
   * @summary 增值税发票核验
   *
   * @param request VerifyVATInvoiceRequest
   * @return VerifyVATInvoiceResponse
   */
  async verifyVATInvoice(request: VerifyVATInvoiceRequest): Promise<VerifyVATInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyVATInvoiceWithOptions(request, runtime);
  }

}
