// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import Number from '@darabonba/number';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class GetAsyncJobResultRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $tea.Model {
  data?: GetAsyncJobResultResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAsyncJobResultResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsyncJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBody extends $tea.Model {
  data?: RecognizeBankCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeBankCardResponseBodyData,
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

export class RecognizeBusinessLicenseRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBody extends $tea.Model {
  data?: RecognizeBusinessLicenseResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeBusinessLicenseResponseBodyData,
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

export class RecognizeCharacterRequest extends $tea.Model {
  imageURL?: string;
  minHeight?: number;
  outputProbability?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      minHeight: 'MinHeight',
      outputProbability: 'OutputProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      minHeight: 'number',
      outputProbability: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  minHeight?: number;
  outputProbability?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      minHeight: 'MinHeight',
      outputProbability: 'OutputProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      minHeight: 'number',
      outputProbability: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBody extends $tea.Model {
  data?: RecognizeCharacterResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeCharacterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeCharacterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeCharacterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseRequest extends $tea.Model {
  imageURL?: string;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBody extends $tea.Model {
  data?: RecognizeDriverLicenseResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeDriverLicenseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeDriverLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeDriverLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseRequest extends $tea.Model {
  imageURL?: string;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBody extends $tea.Model {
  data?: RecognizeDrivingLicenseResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeDrivingLicenseResponseBodyData,
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

export class RecognizeIdentityCardRequest extends $tea.Model {
  imageURL?: string;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      side: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeIdentityCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponseBody extends $tea.Model {
  data?: RecognizeLicensePlateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeLicensePlateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeLicensePlateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeLicensePlateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfRequest extends $tea.Model {
  fileURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfAdvanceRequest extends $tea.Model {
  fileURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileURLObject: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponseBody extends $tea.Model {
  data?: RecognizePdfResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizePdfResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizePdfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizePdfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeRequest extends $tea.Model {
  tasks?: RecognizeQrCodeRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': RecognizeQrCodeRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeAdvanceRequest extends $tea.Model {
  tasks?: RecognizeQrCodeAdvanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': RecognizeQrCodeAdvanceRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBody extends $tea.Model {
  data?: RecognizeQrCodeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeQrCodeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeQrCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeQrCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBody extends $tea.Model {
  data?: RecognizeQuotaInvoiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeQuotaInvoiceResponseBodyData,
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

export class RecognizeTableRequest extends $tea.Model {
  assureDirection?: boolean;
  hasLine?: boolean;
  imageURL?: string;
  outputFormat?: string;
  skipDetection?: boolean;
  useFinanceModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      assureDirection: 'AssureDirection',
      hasLine: 'HasLine',
      imageURL: 'ImageURL',
      outputFormat: 'OutputFormat',
      skipDetection: 'SkipDetection',
      useFinanceModel: 'UseFinanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assureDirection: 'boolean',
      hasLine: 'boolean',
      imageURL: 'string',
      outputFormat: 'string',
      skipDetection: 'boolean',
      useFinanceModel: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableAdvanceRequest extends $tea.Model {
  assureDirection?: boolean;
  hasLine?: boolean;
  imageURLObject?: Readable;
  outputFormat?: string;
  skipDetection?: boolean;
  useFinanceModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      assureDirection: 'AssureDirection',
      hasLine: 'HasLine',
      imageURLObject: 'ImageURL',
      outputFormat: 'OutputFormat',
      skipDetection: 'SkipDetection',
      useFinanceModel: 'UseFinanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assureDirection: 'boolean',
      hasLine: 'boolean',
      imageURLObject: 'Readable',
      outputFormat: 'string',
      skipDetection: 'boolean',
      useFinanceModel: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBody extends $tea.Model {
  data?: RecognizeTableResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTableResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBody extends $tea.Model {
  data?: RecognizeTaxiInvoiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTaxiInvoiceResponseBodyData,
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

export class RecognizeTicketInvoiceRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBody extends $tea.Model {
  data?: RecognizeTicketInvoiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTicketInvoiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTicketInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTicketInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketResponseBody extends $tea.Model {
  data?: RecognizeTrainTicketResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTrainTicketResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTrainTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTrainTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceRequest extends $tea.Model {
  fileType?: string;
  fileURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      fileURL: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      fileURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceAdvanceRequest extends $tea.Model {
  fileType?: string;
  fileURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      fileURLObject: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      fileURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBody extends $tea.Model {
  data?: RecognizeVATInvoiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVATInvoiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVATInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVATInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeRequest extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeAdvanceRequest extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeResponseBody extends $tea.Model {
  data?: RecognizeVINCodeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVINCodeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVINCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVINCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterRequest extends $tea.Model {
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterAdvanceRequest extends $tea.Model {
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBody extends $tea.Model {
  data?: RecognizeVideoCharacterResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVideoCharacterResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVideoCharacterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVideoCharacterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  jobId?: string;
  result?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      result: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBodyData extends $tea.Model {
  bankName?: string;
  cardNumber?: string;
  cardType?: string;
  validDate?: string;
  static names(): { [key: string]: string } {
    return {
      bankName: 'BankName',
      cardNumber: 'CardNumber',
      cardType: 'CardType',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankName: 'string',
      cardNumber: 'string',
      cardType: 'string',
      validDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataEmblem extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataQRCode extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataStamp extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataTitle extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyData extends $tea.Model {
  address?: string;
  angle?: number;
  business?: string;
  capital?: string;
  emblem?: RecognizeBusinessLicenseResponseBodyDataEmblem;
  establishDate?: string;
  legalPerson?: string;
  name?: string;
  QRCode?: RecognizeBusinessLicenseResponseBodyDataQRCode;
  registerNumber?: string;
  stamp?: RecognizeBusinessLicenseResponseBodyDataStamp;
  title?: RecognizeBusinessLicenseResponseBodyDataTitle;
  type?: string;
  validPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      angle: 'Angle',
      business: 'Business',
      capital: 'Capital',
      emblem: 'Emblem',
      establishDate: 'EstablishDate',
      legalPerson: 'LegalPerson',
      name: 'Name',
      QRCode: 'QRCode',
      registerNumber: 'RegisterNumber',
      stamp: 'Stamp',
      title: 'Title',
      type: 'Type',
      validPeriod: 'ValidPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      angle: 'number',
      business: 'string',
      capital: 'string',
      emblem: RecognizeBusinessLicenseResponseBodyDataEmblem,
      establishDate: 'string',
      legalPerson: 'string',
      name: 'string',
      QRCode: RecognizeBusinessLicenseResponseBodyDataQRCode,
      registerNumber: 'string',
      stamp: RecognizeBusinessLicenseResponseBodyDataStamp,
      title: RecognizeBusinessLicenseResponseBodyDataTitle,
      type: 'string',
      validPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyDataResultsTextRectangles extends $tea.Model {
  angle?: number;
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyDataResults extends $tea.Model {
  probability?: number;
  text?: string;
  textRectangles?: RecognizeCharacterResponseBodyDataResultsTextRectangles;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
      textRectangles: 'TextRectangles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
      textRectangles: RecognizeCharacterResponseBodyDataResultsTextRectangles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyData extends $tea.Model {
  results?: RecognizeCharacterResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': RecognizeCharacterResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyDataBackResult extends $tea.Model {
  archiveNumber?: string;
  cardNumber?: string;
  name?: string;
  record?: string;
  static names(): { [key: string]: string } {
    return {
      archiveNumber: 'ArchiveNumber',
      cardNumber: 'CardNumber',
      name: 'Name',
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveNumber: 'string',
      cardNumber: 'string',
      name: 'string',
      record: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyDataFaceResult extends $tea.Model {
  address?: string;
  birthDate?: string;
  endDate?: string;
  gender?: string;
  issueDate?: string;
  issueUnit?: string;
  licenseNumber?: string;
  name?: string;
  nationality?: string;
  startDate?: string;
  vehicleType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      birthDate: 'BirthDate',
      endDate: 'EndDate',
      gender: 'Gender',
      issueDate: 'IssueDate',
      issueUnit: 'IssueUnit',
      licenseNumber: 'LicenseNumber',
      name: 'Name',
      nationality: 'Nationality',
      startDate: 'StartDate',
      vehicleType: 'VehicleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      birthDate: 'string',
      endDate: 'string',
      gender: 'string',
      issueDate: 'string',
      issueUnit: 'string',
      licenseNumber: 'string',
      name: 'string',
      nationality: 'string',
      startDate: 'string',
      vehicleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyData extends $tea.Model {
  backResult?: RecognizeDriverLicenseResponseBodyDataBackResult;
  faceResult?: RecognizeDriverLicenseResponseBodyDataFaceResult;
  static names(): { [key: string]: string } {
    return {
      backResult: 'BackResult',
      faceResult: 'FaceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backResult: RecognizeDriverLicenseResponseBodyDataBackResult,
      faceResult: RecognizeDriverLicenseResponseBodyDataFaceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyDataBackResult extends $tea.Model {
  approvedLoad?: string;
  approvedPassengerCapacity?: string;
  energyType?: string;
  fileNumber?: string;
  grossMass?: string;
  inspectionRecord?: string;
  overallDimension?: string;
  plateNumber?: string;
  tractionMass?: string;
  unladenMass?: string;
  static names(): { [key: string]: string } {
    return {
      approvedLoad: 'ApprovedLoad',
      approvedPassengerCapacity: 'ApprovedPassengerCapacity',
      energyType: 'EnergyType',
      fileNumber: 'FileNumber',
      grossMass: 'GrossMass',
      inspectionRecord: 'InspectionRecord',
      overallDimension: 'OverallDimension',
      plateNumber: 'PlateNumber',
      tractionMass: 'TractionMass',
      unladenMass: 'UnladenMass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedLoad: 'string',
      approvedPassengerCapacity: 'string',
      energyType: 'string',
      fileNumber: 'string',
      grossMass: 'string',
      inspectionRecord: 'string',
      overallDimension: 'string',
      plateNumber: 'string',
      tractionMass: 'string',
      unladenMass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyDataFaceResult extends $tea.Model {
  address?: string;
  engineNumber?: string;
  issueDate?: string;
  model?: string;
  owner?: string;
  plateNumber?: string;
  registerDate?: string;
  useCharacter?: string;
  vehicleType?: string;
  vin?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      engineNumber: 'EngineNumber',
      issueDate: 'IssueDate',
      model: 'Model',
      owner: 'Owner',
      plateNumber: 'PlateNumber',
      registerDate: 'RegisterDate',
      useCharacter: 'UseCharacter',
      vehicleType: 'VehicleType',
      vin: 'Vin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      engineNumber: 'string',
      issueDate: 'string',
      model: 'string',
      owner: 'string',
      plateNumber: 'string',
      registerDate: 'string',
      useCharacter: 'string',
      vehicleType: 'string',
      vin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyData extends $tea.Model {
  backResult?: RecognizeDrivingLicenseResponseBodyDataBackResult;
  faceResult?: RecognizeDrivingLicenseResponseBodyDataFaceResult;
  static names(): { [key: string]: string } {
    return {
      backResult: 'BackResult',
      faceResult: 'FaceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backResult: RecognizeDrivingLicenseResponseBodyDataBackResult,
      faceResult: RecognizeDrivingLicenseResponseBodyDataFaceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataBackResult extends $tea.Model {
  endDate?: string;
  issue?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      issue: 'Issue',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      issue: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultCardAreas extends $tea.Model {
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices extends $tea.Model {
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter extends $tea.Model {
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize extends $tea.Model {
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle extends $tea.Model {
  angle?: number;
  center?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter;
  size?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      center: 'Center',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      center: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter,
      size: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResult extends $tea.Model {
  address?: string;
  birthDate?: string;
  cardAreas?: RecognizeIdentityCardResponseBodyDataFrontResultCardAreas[];
  faceRectVertices?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices[];
  faceRectangle?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle;
  gender?: string;
  IDNumber?: string;
  name?: string;
  nationality?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      birthDate: 'BirthDate',
      cardAreas: 'CardAreas',
      faceRectVertices: 'FaceRectVertices',
      faceRectangle: 'FaceRectangle',
      gender: 'Gender',
      IDNumber: 'IDNumber',
      name: 'Name',
      nationality: 'Nationality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      birthDate: 'string',
      cardAreas: { 'type': 'array', 'itemType': RecognizeIdentityCardResponseBodyDataFrontResultCardAreas },
      faceRectVertices: { 'type': 'array', 'itemType': RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices },
      faceRectangle: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle,
      gender: 'string',
      IDNumber: 'string',
      name: 'string',
      nationality: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyData extends $tea.Model {
  backResult?: RecognizeIdentityCardResponseBodyDataBackResult;
  frontResult?: RecognizeIdentityCardResponseBodyDataFrontResult;
  static names(): { [key: string]: string } {
    return {
      backResult: 'BackResult',
      frontResult: 'FrontResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backResult: RecognizeIdentityCardResponseBodyDataBackResult,
      frontResult: RecognizeIdentityCardResponseBodyDataFrontResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponseBodyDataPlatesPositions extends $tea.Model {
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

export class RecognizeLicensePlateResponseBodyDataPlatesRoi extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponseBodyDataPlates extends $tea.Model {
  confidence?: number;
  plateNumber?: string;
  plateType?: string;
  plateTypeConfidence?: number;
  positions?: RecognizeLicensePlateResponseBodyDataPlatesPositions[];
  roi?: RecognizeLicensePlateResponseBodyDataPlatesRoi;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      plateNumber: 'PlateNumber',
      plateType: 'PlateType',
      plateTypeConfidence: 'PlateTypeConfidence',
      positions: 'Positions',
      roi: 'Roi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      plateNumber: 'string',
      plateType: 'string',
      plateTypeConfidence: 'number',
      positions: { 'type': 'array', 'itemType': RecognizeLicensePlateResponseBodyDataPlatesPositions },
      roi: RecognizeLicensePlateResponseBodyDataPlatesRoi,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponseBodyData extends $tea.Model {
  plates?: RecognizeLicensePlateResponseBodyDataPlates[];
  static names(): { [key: string]: string } {
    return {
      plates: 'Plates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plates: { 'type': 'array', 'itemType': RecognizeLicensePlateResponseBodyDataPlates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponseBodyDataWordsInfoPositions extends $tea.Model {
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

export class RecognizePdfResponseBodyDataWordsInfo extends $tea.Model {
  angle?: number;
  height?: number;
  positions?: RecognizePdfResponseBodyDataWordsInfoPositions[];
  width?: number;
  word?: string;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      positions: 'Positions',
      width: 'Width',
      word: 'Word',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      positions: { 'type': 'array', 'itemType': RecognizePdfResponseBodyDataWordsInfoPositions },
      width: 'number',
      word: 'string',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponseBodyData extends $tea.Model {
  angle?: number;
  height?: number;
  orgHeight?: number;
  orgWidth?: number;
  pageIndex?: number;
  width?: number;
  wordsInfo?: RecognizePdfResponseBodyDataWordsInfo[];
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      orgHeight: 'OrgHeight',
      orgWidth: 'OrgWidth',
      pageIndex: 'PageIndex',
      width: 'Width',
      wordsInfo: 'WordsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      orgHeight: 'number',
      orgWidth: 'number',
      pageIndex: 'number',
      width: 'number',
      wordsInfo: { 'type': 'array', 'itemType': RecognizePdfResponseBodyDataWordsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeRequestTasks extends $tea.Model {
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeAdvanceRequestTasks extends $tea.Model {
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBodyDataElementsResults extends $tea.Model {
  label?: string;
  qrCodesData?: string[];
  rate?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      qrCodesData: 'QrCodesData',
      rate: 'Rate',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      qrCodesData: { 'type': 'array', 'itemType': 'string' },
      rate: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  results?: RecognizeQrCodeResponseBodyDataElementsResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': RecognizeQrCodeResponseBodyDataElementsResults },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBodyData extends $tea.Model {
  elements?: RecognizeQrCodeResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeQrCodeResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBodyDataContent extends $tea.Model {
  invoiceAmount?: string;
  invoiceCode?: string;
  invoiceDetails?: string;
  invoiceNo?: string;
  sumAmount?: string;
  static names(): { [key: string]: string } {
    return {
      invoiceAmount: 'InvoiceAmount',
      invoiceCode: 'InvoiceCode',
      invoiceDetails: 'InvoiceDetails',
      invoiceNo: 'InvoiceNo',
      sumAmount: 'SumAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceAmount: 'string',
      invoiceCode: 'string',
      invoiceDetails: 'string',
      invoiceNo: 'string',
      sumAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBodyDataKeyValueInfosValuePositions extends $tea.Model {
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

export class RecognizeQuotaInvoiceResponseBodyDataKeyValueInfos extends $tea.Model {
  key?: string;
  value?: string;
  valuePositions?: RecognizeQuotaInvoiceResponseBodyDataKeyValueInfosValuePositions[];
  valueScore?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valuePositions: 'ValuePositions',
      valueScore: 'ValueScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valuePositions: { 'type': 'array', 'itemType': RecognizeQuotaInvoiceResponseBodyDataKeyValueInfosValuePositions },
      valueScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQuotaInvoiceResponseBodyData extends $tea.Model {
  angle?: number;
  content?: RecognizeQuotaInvoiceResponseBodyDataContent;
  height?: number;
  keyValueInfos?: RecognizeQuotaInvoiceResponseBodyDataKeyValueInfos[];
  orgHeight?: number;
  orgWidth?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      content: 'Content',
      height: 'Height',
      keyValueInfos: 'KeyValueInfos',
      orgHeight: 'OrgHeight',
      orgWidth: 'OrgWidth',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      content: RecognizeQuotaInvoiceResponseBodyDataContent,
      height: 'number',
      keyValueInfos: { 'type': 'array', 'itemType': RecognizeQuotaInvoiceResponseBodyDataKeyValueInfos },
      orgHeight: 'number',
      orgWidth: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyDataTablesTableRowsTableColumns extends $tea.Model {
  endColumn?: number;
  endRow?: number;
  height?: number;
  startColumn?: number;
  startRow?: number;
  texts?: string[];
  width?: number;
  static names(): { [key: string]: string } {
    return {
      endColumn: 'EndColumn',
      endRow: 'EndRow',
      height: 'Height',
      startColumn: 'StartColumn',
      startRow: 'StartRow',
      texts: 'Texts',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endColumn: 'number',
      endRow: 'number',
      height: 'number',
      startColumn: 'number',
      startRow: 'number',
      texts: { 'type': 'array', 'itemType': 'string' },
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyDataTablesTableRows extends $tea.Model {
  tableColumns?: RecognizeTableResponseBodyDataTablesTableRowsTableColumns[];
  static names(): { [key: string]: string } {
    return {
      tableColumns: 'TableColumns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableColumns: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTablesTableRowsTableColumns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyDataTables extends $tea.Model {
  head?: string[];
  tableRows?: RecognizeTableResponseBodyDataTablesTableRows[];
  tail?: string[];
  static names(): { [key: string]: string } {
    return {
      head: 'Head',
      tableRows: 'TableRows',
      tail: 'Tail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      head: { 'type': 'array', 'itemType': 'string' },
      tableRows: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTablesTableRows },
      tail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyData extends $tea.Model {
  fileContent?: string;
  tables?: RecognizeTableResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      tables: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter extends $tea.Model {
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

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize extends $tea.Model {
  h?: number;
  w?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi extends $tea.Model {
  angle?: number;
  center?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter;
  size?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      center: 'Center',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      center: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter,
      size: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItems extends $tea.Model {
  itemRoi?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      itemRoi: 'ItemRoi',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemRoi: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi,
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoices extends $tea.Model {
  invoiceRoi?: RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi;
  items?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItems[];
  rotateType?: number;
  static names(): { [key: string]: string } {
    return {
      invoiceRoi: 'InvoiceRoi',
      items: 'Items',
      rotateType: 'RotateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceRoi: RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi,
      items: { 'type': 'array', 'itemType': RecognizeTaxiInvoiceResponseBodyDataInvoicesItems },
      rotateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyData extends $tea.Model {
  invoices?: RecognizeTaxiInvoiceResponseBodyDataInvoices[];
  static names(): { [key: string]: string } {
    return {
      invoices: 'Invoices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoices: { 'type': 'array', 'itemType': RecognizeTaxiInvoiceResponseBodyDataInvoices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResultsContent extends $tea.Model {
  antiFakeCode?: string;
  invoiceCode?: string;
  invoiceDate?: string;
  invoiceNumber?: string;
  payeeName?: string;
  payeeRegisterNo?: string;
  payerName?: string;
  payerRegisterNo?: string;
  sumAmount?: string;
  static names(): { [key: string]: string } {
    return {
      antiFakeCode: 'AntiFakeCode',
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceNumber: 'InvoiceNumber',
      payeeName: 'PayeeName',
      payeeRegisterNo: 'PayeeRegisterNo',
      payerName: 'PayerName',
      payerRegisterNo: 'PayerRegisterNo',
      sumAmount: 'SumAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiFakeCode: 'string',
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceNumber: 'string',
      payeeName: 'string',
      payeeRegisterNo: 'string',
      payerName: 'string',
      payerRegisterNo: 'string',
      sumAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfosValuePositions extends $tea.Model {
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

export class RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfos extends $tea.Model {
  key?: string;
  value?: string;
  valuePositions?: RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfosValuePositions[];
  valueScore?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valuePositions: 'ValuePositions',
      valueScore: 'ValueScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valuePositions: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfosValuePositions },
      valueScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyDataResultsSliceRectangle extends $tea.Model {
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

export class RecognizeTicketInvoiceResponseBodyDataResults extends $tea.Model {
  content?: RecognizeTicketInvoiceResponseBodyDataResultsContent;
  index?: number;
  keyValueInfos?: RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfos[];
  sliceRectangle?: RecognizeTicketInvoiceResponseBodyDataResultsSliceRectangle[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      index: 'Index',
      keyValueInfos: 'KeyValueInfos',
      sliceRectangle: 'SliceRectangle',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: RecognizeTicketInvoiceResponseBodyDataResultsContent,
      index: 'number',
      keyValueInfos: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResultsKeyValueInfos },
      sliceRectangle: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResultsSliceRectangle },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTicketInvoiceResponseBodyData extends $tea.Model {
  count?: number;
  height?: number;
  orgHeight?: number;
  orgWidth?: number;
  results?: RecognizeTicketInvoiceResponseBodyDataResults[];
  width?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      height: 'Height',
      orgHeight: 'OrgHeight',
      orgWidth: 'OrgWidth',
      results: 'Results',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      height: 'number',
      orgHeight: 'number',
      orgWidth: 'number',
      results: { 'type': 'array', 'itemType': RecognizeTicketInvoiceResponseBodyDataResults },
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketResponseBodyData extends $tea.Model {
  date?: string;
  departureStation?: string;
  destination?: string;
  level?: string;
  name?: string;
  number?: string;
  price?: number;
  seat?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      departureStation: 'DepartureStation',
      destination: 'Destination',
      level: 'Level',
      name: 'Name',
      number: 'Number',
      price: 'Price',
      seat: 'Seat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      departureStation: 'string',
      destination: 'string',
      level: 'string',
      name: 'string',
      number: 'string',
      price: 'number',
      seat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBodyDataBox extends $tea.Model {
  checkers?: number[];
  clerks?: number[];
  invoiceAmounts?: number[];
  invoiceCodes?: number[];
  invoiceDates?: number[];
  invoiceFakeCodes?: number[];
  invoiceNoes?: number[];
  itemNames?: number[];
  payeeAddresses?: number[];
  payeeBankNames?: number[];
  payeeNames?: number[];
  payeeRegisterNoes?: number[];
  payees?: number[];
  payerAddresses?: number[];
  payerBankNames?: number[];
  payerNames?: number[];
  payerRegisterNoes?: number[];
  sumAmounts?: number[];
  taxAmounts?: number[];
  withoutTaxAmounts?: number[];
  static names(): { [key: string]: string } {
    return {
      checkers: 'Checkers',
      clerks: 'Clerks',
      invoiceAmounts: 'InvoiceAmounts',
      invoiceCodes: 'InvoiceCodes',
      invoiceDates: 'InvoiceDates',
      invoiceFakeCodes: 'InvoiceFakeCodes',
      invoiceNoes: 'InvoiceNoes',
      itemNames: 'ItemNames',
      payeeAddresses: 'PayeeAddresses',
      payeeBankNames: 'PayeeBankNames',
      payeeNames: 'PayeeNames',
      payeeRegisterNoes: 'PayeeRegisterNoes',
      payees: 'Payees',
      payerAddresses: 'PayerAddresses',
      payerBankNames: 'PayerBankNames',
      payerNames: 'PayerNames',
      payerRegisterNoes: 'PayerRegisterNoes',
      sumAmounts: 'SumAmounts',
      taxAmounts: 'TaxAmounts',
      withoutTaxAmounts: 'WithoutTaxAmounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkers: { 'type': 'array', 'itemType': 'number' },
      clerks: { 'type': 'array', 'itemType': 'number' },
      invoiceAmounts: { 'type': 'array', 'itemType': 'number' },
      invoiceCodes: { 'type': 'array', 'itemType': 'number' },
      invoiceDates: { 'type': 'array', 'itemType': 'number' },
      invoiceFakeCodes: { 'type': 'array', 'itemType': 'number' },
      invoiceNoes: { 'type': 'array', 'itemType': 'number' },
      itemNames: { 'type': 'array', 'itemType': 'number' },
      payeeAddresses: { 'type': 'array', 'itemType': 'number' },
      payeeBankNames: { 'type': 'array', 'itemType': 'number' },
      payeeNames: { 'type': 'array', 'itemType': 'number' },
      payeeRegisterNoes: { 'type': 'array', 'itemType': 'number' },
      payees: { 'type': 'array', 'itemType': 'number' },
      payerAddresses: { 'type': 'array', 'itemType': 'number' },
      payerBankNames: { 'type': 'array', 'itemType': 'number' },
      payerNames: { 'type': 'array', 'itemType': 'number' },
      payerRegisterNoes: { 'type': 'array', 'itemType': 'number' },
      sumAmounts: { 'type': 'array', 'itemType': 'number' },
      taxAmounts: { 'type': 'array', 'itemType': 'number' },
      withoutTaxAmounts: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBodyDataContent extends $tea.Model {
  antiFakeCode?: string;
  checker?: string;
  clerk?: string;
  invoiceAmount?: string;
  invoiceCode?: string;
  invoiceDate?: string;
  invoiceNo?: string;
  itemName?: string[];
  payee?: string;
  payeeAddress?: string;
  payeeBankName?: string;
  payeeName?: string;
  payeeRegisterNo?: string;
  payerAddress?: string;
  payerBankName?: string;
  payerName?: string;
  payerRegisterNo?: string;
  sumAmount?: string;
  taxAmount?: string;
  withoutTaxAmount?: string;
  static names(): { [key: string]: string } {
    return {
      antiFakeCode: 'AntiFakeCode',
      checker: 'Checker',
      clerk: 'Clerk',
      invoiceAmount: 'InvoiceAmount',
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceNo: 'InvoiceNo',
      itemName: 'ItemName',
      payee: 'Payee',
      payeeAddress: 'PayeeAddress',
      payeeBankName: 'PayeeBankName',
      payeeName: 'PayeeName',
      payeeRegisterNo: 'PayeeRegisterNo',
      payerAddress: 'PayerAddress',
      payerBankName: 'PayerBankName',
      payerName: 'PayerName',
      payerRegisterNo: 'PayerRegisterNo',
      sumAmount: 'SumAmount',
      taxAmount: 'TaxAmount',
      withoutTaxAmount: 'WithoutTaxAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiFakeCode: 'string',
      checker: 'string',
      clerk: 'string',
      invoiceAmount: 'string',
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceNo: 'string',
      itemName: { 'type': 'array', 'itemType': 'string' },
      payee: 'string',
      payeeAddress: 'string',
      payeeBankName: 'string',
      payeeName: 'string',
      payeeRegisterNo: 'string',
      payerAddress: 'string',
      payerBankName: 'string',
      payerName: 'string',
      payerRegisterNo: 'string',
      sumAmount: 'string',
      taxAmount: 'string',
      withoutTaxAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBodyData extends $tea.Model {
  box?: RecognizeVATInvoiceResponseBodyDataBox;
  content?: RecognizeVATInvoiceResponseBodyDataContent;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: RecognizeVATInvoiceResponseBodyDataBox,
      content: RecognizeVATInvoiceResponseBodyDataContent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeResponseBodyData extends $tea.Model {
  vinCode?: string;
  static names(): { [key: string]: string } {
    return {
      vinCode: 'VinCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vinCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBodyDataFramesElementsTextRectangles extends $tea.Model {
  angle?: number;
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBodyDataFramesElements extends $tea.Model {
  score?: number;
  text?: string;
  textRectangles?: RecognizeVideoCharacterResponseBodyDataFramesElementsTextRectangles[];
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      text: 'Text',
      textRectangles: 'TextRectangles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      text: 'string',
      textRectangles: { 'type': 'array', 'itemType': RecognizeVideoCharacterResponseBodyDataFramesElementsTextRectangles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBodyDataFrames extends $tea.Model {
  elements?: RecognizeVideoCharacterResponseBodyDataFramesElements[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeVideoCharacterResponseBodyDataFramesElements },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBodyData extends $tea.Model {
  frames?: RecognizeVideoCharacterResponseBodyDataFrames[];
  height?: number;
  inputFile?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      height: 'Height',
      inputFile: 'InputFile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': RecognizeVideoCharacterResponseBodyDataFrames },
      height: 'number',
      inputFile: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ocr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncJobResult",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.callApi(params, req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async recognizeBankCardWithOptions(request: RecognizeBankCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBankCard",
      version: "2019-12-30",
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

  async recognizeBankCardAdvance(request: RecognizeBankCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeBankCardReq = new RecognizeBankCardRequest({ });
    OpenApiUtil.convert(request, recognizeBankCardReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeBankCardReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeBankCardResp = await this.recognizeBankCardWithOptions(recognizeBankCardReq, runtime);
    return recognizeBankCardResp;
  }

  async recognizeBusinessLicenseWithOptions(request: RecognizeBusinessLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBusinessLicense",
      version: "2019-12-30",
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

  async recognizeBusinessLicenseAdvance(request: RecognizeBusinessLicenseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeBusinessLicenseReq = new RecognizeBusinessLicenseRequest({ });
    OpenApiUtil.convert(request, recognizeBusinessLicenseReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeBusinessLicenseReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeBusinessLicenseResp = await this.recognizeBusinessLicenseWithOptions(recognizeBusinessLicenseReq, runtime);
    return recognizeBusinessLicenseResp;
  }

  async recognizeCharacterWithOptions(request: RecognizeCharacterRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCharacterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.minHeight)) {
      body["MinHeight"] = request.minHeight;
    }

    if (!Util.isUnset(request.outputProbability)) {
      body["OutputProbability"] = request.outputProbability;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeCharacter",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeCharacterResponse>(await this.callApi(params, req, runtime), new RecognizeCharacterResponse({}));
  }

  async recognizeCharacter(request: RecognizeCharacterRequest): Promise<RecognizeCharacterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCharacterWithOptions(request, runtime);
  }

  async recognizeCharacterAdvance(request: RecognizeCharacterAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCharacterResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeCharacterReq = new RecognizeCharacterRequest({ });
    OpenApiUtil.convert(request, recognizeCharacterReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeCharacterReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeCharacterResp = await this.recognizeCharacterWithOptions(recognizeCharacterReq, runtime);
    return recognizeCharacterResp;
  }

  async recognizeDriverLicenseWithOptions(request: RecognizeDriverLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDriverLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.side)) {
      body["Side"] = request.side;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeDriverLicense",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeDriverLicenseResponse>(await this.callApi(params, req, runtime), new RecognizeDriverLicenseResponse({}));
  }

  async recognizeDriverLicense(request: RecognizeDriverLicenseRequest): Promise<RecognizeDriverLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDriverLicenseWithOptions(request, runtime);
  }

  async recognizeDriverLicenseAdvance(request: RecognizeDriverLicenseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDriverLicenseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeDriverLicenseReq = new RecognizeDriverLicenseRequest({ });
    OpenApiUtil.convert(request, recognizeDriverLicenseReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeDriverLicenseReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeDriverLicenseResp = await this.recognizeDriverLicenseWithOptions(recognizeDriverLicenseReq, runtime);
    return recognizeDriverLicenseResp;
  }

  async recognizeDrivingLicenseWithOptions(request: RecognizeDrivingLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.side)) {
      body["Side"] = request.side;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeDrivingLicense",
      version: "2019-12-30",
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

  async recognizeDrivingLicenseAdvance(request: RecognizeDrivingLicenseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeDrivingLicenseReq = new RecognizeDrivingLicenseRequest({ });
    OpenApiUtil.convert(request, recognizeDrivingLicenseReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeDrivingLicenseReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeDrivingLicenseResp = await this.recognizeDrivingLicenseWithOptions(recognizeDrivingLicenseReq, runtime);
    return recognizeDrivingLicenseResp;
  }

  async recognizeIdentityCardWithOptions(request: RecognizeIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.side)) {
      body["Side"] = request.side;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeIdentityCardResponse({}));
  }

  async recognizeIdentityCard(request: RecognizeIdentityCardRequest): Promise<RecognizeIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeIdentityCardWithOptions(request, runtime);
  }

  async recognizeIdentityCardAdvance(request: RecognizeIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdentityCardResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeIdentityCardReq = new RecognizeIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeIdentityCardReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeIdentityCardReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeIdentityCardResp = await this.recognizeIdentityCardWithOptions(recognizeIdentityCardReq, runtime);
    return recognizeIdentityCardResp;
  }

  async recognizeLicensePlateWithOptions(request: RecognizeLicensePlateRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLicensePlateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeLicensePlate",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeLicensePlateResponse>(await this.callApi(params, req, runtime), new RecognizeLicensePlateResponse({}));
  }

  async recognizeLicensePlate(request: RecognizeLicensePlateRequest): Promise<RecognizeLicensePlateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLicensePlateWithOptions(request, runtime);
  }

  async recognizeLicensePlateAdvance(request: RecognizeLicensePlateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLicensePlateResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeLicensePlateReq = new RecognizeLicensePlateRequest({ });
    OpenApiUtil.convert(request, recognizeLicensePlateReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeLicensePlateReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeLicensePlateResp = await this.recognizeLicensePlateWithOptions(recognizeLicensePlateReq, runtime);
    return recognizeLicensePlateResp;
  }

  async recognizePdfWithOptions(request: RecognizePdfRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePdfResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileURL)) {
      body["FileURL"] = request.fileURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizePdf",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePdfResponse>(await this.callApi(params, req, runtime), new RecognizePdfResponse({}));
  }

  async recognizePdf(request: RecognizePdfRequest): Promise<RecognizePdfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePdfWithOptions(request, runtime);
  }

  async recognizePdfAdvance(request: RecognizePdfAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePdfResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizePdfReq = new RecognizePdfRequest({ });
    OpenApiUtil.convert(request, recognizePdfReq);
    if (!Util.isUnset(request.fileURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizePdfReq.fileURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizePdfResp = await this.recognizePdfWithOptions(recognizePdfReq, runtime);
    return recognizePdfResp;
  }

  async recognizeQrCodeWithOptions(request: RecognizeQrCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQrCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tasks)) {
      body["Tasks"] = request.tasks;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeQrCode",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeQrCodeResponse>(await this.callApi(params, req, runtime), new RecognizeQrCodeResponse({}));
  }

  async recognizeQrCode(request: RecognizeQrCodeRequest): Promise<RecognizeQrCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeQrCodeWithOptions(request, runtime);
  }

  async recognizeQrCodeAdvance(request: RecognizeQrCodeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQrCodeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeQrCodeReq = new RecognizeQrCodeRequest({ });
    OpenApiUtil.convert(request, recognizeQrCodeReq);
    if (!Util.isUnset(request.tasks)) {
      let i0 : number = 0;

      for (let item0 of request.tasks) {
        if (!Util.isUnset(item0.imageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.imageURLObject,
            contentType: "",
          });
          ossHeader = new $OSS.PostObjectRequestHeader({
            accessKeyId: authResponse.body.accessKeyId,
            policy: authResponse.body.encodedPolicy,
            signature: authResponse.body.signature,
            key: authResponse.body.objectKey,
            file: fileObj,
            successActionStatus: "201",
          });
          uploadRequest = new $OSS.PostObjectRequest({
            bucketName: authResponse.body.bucket,
            header: ossHeader,
          });
          await ossClient.postObject(uploadRequest, ossRuntime);
          let tmp : RecognizeQrCodeRequestTasks = recognizeQrCodeReq.tasks[i0];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let recognizeQrCodeResp = await this.recognizeQrCodeWithOptions(recognizeQrCodeReq, runtime);
    return recognizeQrCodeResp;
  }

  async recognizeQuotaInvoiceWithOptions(request: RecognizeQuotaInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQuotaInvoiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeQuotaInvoice",
      version: "2019-12-30",
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

  async recognizeQuotaInvoiceAdvance(request: RecognizeQuotaInvoiceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQuotaInvoiceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeQuotaInvoiceReq = new RecognizeQuotaInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeQuotaInvoiceReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeQuotaInvoiceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeQuotaInvoiceResp = await this.recognizeQuotaInvoiceWithOptions(recognizeQuotaInvoiceReq, runtime);
    return recognizeQuotaInvoiceResp;
  }

  async recognizeTableWithOptions(request: RecognizeTableRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.assureDirection)) {
      body["AssureDirection"] = request.assureDirection;
    }

    if (!Util.isUnset(request.hasLine)) {
      body["HasLine"] = request.hasLine;
    }

    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.outputFormat)) {
      body["OutputFormat"] = request.outputFormat;
    }

    if (!Util.isUnset(request.skipDetection)) {
      body["SkipDetection"] = request.skipDetection;
    }

    if (!Util.isUnset(request.useFinanceModel)) {
      body["UseFinanceModel"] = request.useFinanceModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTable",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTableResponse>(await this.callApi(params, req, runtime), new RecognizeTableResponse({}));
  }

  async recognizeTable(request: RecognizeTableRequest): Promise<RecognizeTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTableWithOptions(request, runtime);
  }

  async recognizeTableAdvance(request: RecognizeTableAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeTableReq = new RecognizeTableRequest({ });
    OpenApiUtil.convert(request, recognizeTableReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTableReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeTableResp = await this.recognizeTableWithOptions(recognizeTableReq, runtime);
    return recognizeTableResp;
  }

  async recognizeTaxiInvoiceWithOptions(request: RecognizeTaxiInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTaxiInvoice",
      version: "2019-12-30",
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

  async recognizeTaxiInvoiceAdvance(request: RecognizeTaxiInvoiceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeTaxiInvoiceReq = new RecognizeTaxiInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeTaxiInvoiceReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTaxiInvoiceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeTaxiInvoiceResp = await this.recognizeTaxiInvoiceWithOptions(recognizeTaxiInvoiceReq, runtime);
    return recognizeTaxiInvoiceResp;
  }

  async recognizeTicketInvoiceWithOptions(request: RecognizeTicketInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTicketInvoiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTicketInvoice",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTicketInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeTicketInvoiceResponse({}));
  }

  async recognizeTicketInvoice(request: RecognizeTicketInvoiceRequest): Promise<RecognizeTicketInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTicketInvoiceWithOptions(request, runtime);
  }

  async recognizeTicketInvoiceAdvance(request: RecognizeTicketInvoiceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTicketInvoiceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeTicketInvoiceReq = new RecognizeTicketInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeTicketInvoiceReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTicketInvoiceReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeTicketInvoiceResp = await this.recognizeTicketInvoiceWithOptions(recognizeTicketInvoiceReq, runtime);
    return recognizeTicketInvoiceResp;
  }

  async recognizeTrainTicketWithOptions(request: RecognizeTrainTicketRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTrainTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTrainTicket",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTrainTicketResponse>(await this.callApi(params, req, runtime), new RecognizeTrainTicketResponse({}));
  }

  async recognizeTrainTicket(request: RecognizeTrainTicketRequest): Promise<RecognizeTrainTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTrainTicketWithOptions(request, runtime);
  }

  async recognizeTrainTicketAdvance(request: RecognizeTrainTicketAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTrainTicketResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeTrainTicketReq = new RecognizeTrainTicketRequest({ });
    OpenApiUtil.convert(request, recognizeTrainTicketReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTrainTicketReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeTrainTicketResp = await this.recognizeTrainTicketWithOptions(recognizeTrainTicketReq, runtime);
    return recognizeTrainTicketResp;
  }

  async recognizeVATInvoiceWithOptions(request: RecognizeVATInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVATInvoiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.fileURL)) {
      body["FileURL"] = request.fileURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVATInvoice",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVATInvoiceResponse>(await this.callApi(params, req, runtime), new RecognizeVATInvoiceResponse({}));
  }

  async recognizeVATInvoice(request: RecognizeVATInvoiceRequest): Promise<RecognizeVATInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVATInvoiceWithOptions(request, runtime);
  }

  async recognizeVATInvoiceAdvance(request: RecognizeVATInvoiceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVATInvoiceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeVATInvoiceReq = new RecognizeVATInvoiceRequest({ });
    OpenApiUtil.convert(request, recognizeVATInvoiceReq);
    if (!Util.isUnset(request.fileURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeVATInvoiceReq.fileURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVATInvoiceResp = await this.recognizeVATInvoiceWithOptions(recognizeVATInvoiceReq, runtime);
    return recognizeVATInvoiceResp;
  }

  async recognizeVINCodeWithOptions(request: RecognizeVINCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVINCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVINCode",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVINCodeResponse>(await this.callApi(params, req, runtime), new RecognizeVINCodeResponse({}));
  }

  async recognizeVINCode(request: RecognizeVINCodeRequest): Promise<RecognizeVINCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVINCodeWithOptions(request, runtime);
  }

  async recognizeVINCodeAdvance(request: RecognizeVINCodeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVINCodeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeVINCodeReq = new RecognizeVINCodeRequest({ });
    OpenApiUtil.convert(request, recognizeVINCodeReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeVINCodeReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVINCodeResp = await this.recognizeVINCodeWithOptions(recognizeVINCodeReq, runtime);
    return recognizeVINCodeResp;
  }

  async recognizeVideoCharacterWithOptions(request: RecognizeVideoCharacterRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVideoCharacterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.videoURL)) {
      body["VideoURL"] = request.videoURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVideoCharacter",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVideoCharacterResponse>(await this.callApi(params, req, runtime), new RecognizeVideoCharacterResponse({}));
  }

  async recognizeVideoCharacter(request: RecognizeVideoCharacterRequest): Promise<RecognizeVideoCharacterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVideoCharacterWithOptions(request, runtime);
  }

  async recognizeVideoCharacterAdvance(request: RecognizeVideoCharacterAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVideoCharacterResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ocr",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let recognizeVideoCharacterReq = new RecognizeVideoCharacterRequest({ });
    OpenApiUtil.convert(request, recognizeVideoCharacterReq);
    if (!Util.isUnset(request.videoURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeVideoCharacterReq.videoURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVideoCharacterResp = await this.recognizeVideoCharacterWithOptions(recognizeVideoCharacterReq, runtime);
    return recognizeVideoCharacterResp;
  }

}
