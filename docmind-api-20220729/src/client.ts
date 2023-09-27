// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ExtractFeedbackRequest extends $tea.Model {
  feedbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      feedbackUrl: 'FeedbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFeedbackAdvanceRequest extends $tea.Model {
  feedbackUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      feedbackUrlObject: 'FeedbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedbackUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFeedbackResponseBody extends $tea.Model {
  code?: string;
  data?: ExtractFeedbackResponseBodyData;
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
      data: ExtractFeedbackResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExtractFeedbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExtractFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleDocumentExtractResultRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleDocumentExtractResultResponseBody extends $tea.Model {
  code?: string;
  completed?: boolean;
  data?: any;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: 'any',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSingleDocumentExtractResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSingleDocumentExtractResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSingleDocumentExtractResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReClassifyTradeDocumentExtractRequest extends $tea.Model {
  bizId?: string;
  pageUpdateInfoModels?: ReClassifyTradeDocumentExtractRequestPageUpdateInfoModels[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageUpdateInfoModels: 'PageUpdateInfoModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageUpdateInfoModels: { 'type': 'array', 'itemType': ReClassifyTradeDocumentExtractRequestPageUpdateInfoModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReClassifyTradeDocumentExtractShrinkRequest extends $tea.Model {
  bizId?: string;
  pageUpdateInfoModelsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageUpdateInfoModelsShrink: 'PageUpdateInfoModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageUpdateInfoModelsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReClassifyTradeDocumentExtractResponseBody extends $tea.Model {
  code?: string;
  data?: ReClassifyTradeDocumentExtractResponseBodyData;
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
      data: ReClassifyTradeDocumentExtractResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReClassifyTradeDocumentExtractResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReClassifyTradeDocumentExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReClassifyTradeDocumentExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTradeDocumentExtractRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTradeDocumentExtractResponseBody extends $tea.Model {
  code?: string;
  data?: RetryTradeDocumentExtractResponseBodyData;
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
      data: RetryTradeDocumentExtractResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTradeDocumentExtractResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RetryTradeDocumentExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryTradeDocumentExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAirWaybillExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAirWaybillExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAirWaybillExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitAirWaybillExtractJobResponseBodyData;
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
      data: SubmitAirWaybillExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAirWaybillExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitAirWaybillExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitAirWaybillExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBillOfLadingExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBillOfLadingExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBillOfLadingExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitBillOfLadingExtractJobResponseBodyData;
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
      data: SubmitBillOfLadingExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBillOfLadingExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitBillOfLadingExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitBillOfLadingExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBookingNoteExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBookingNoteExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBookingNoteExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitBookingNoteExtractJobResponseBodyData;
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
      data: SubmitBookingNoteExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBookingNoteExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitBookingNoteExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitBookingNoteExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCertificateOfOriginExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCertificateOfOriginExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCertificateOfOriginExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitCertificateOfOriginExtractJobResponseBodyData;
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
      data: SubmitCertificateOfOriginExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCertificateOfOriginExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitCertificateOfOriginExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitCertificateOfOriginExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitContainerLoadPlanExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitContainerLoadPlanExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitContainerLoadPlanExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitContainerLoadPlanExtractJobResponseBodyData;
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
      data: SubmitContainerLoadPlanExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitContainerLoadPlanExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitContainerLoadPlanExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitContainerLoadPlanExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitExportDeclarationSheetExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitExportDeclarationSheetExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitExportDeclarationSheetExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitExportDeclarationSheetExtractJobResponseBodyData;
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
      data: SubmitExportDeclarationSheetExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitExportDeclarationSheetExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitExportDeclarationSheetExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitExportDeclarationSheetExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGeneralContractExtractJobRequest extends $tea.Model {
  contractModel?: string;
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      contractModel: 'ContractModel',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractModel: 'string',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGeneralContractExtractJobAdvanceRequest extends $tea.Model {
  contractModel?: string;
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      contractModel: 'ContractModel',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractModel: 'string',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGeneralContractExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitGeneralContractExtractJobResponseBodyData;
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
      data: SubmitGeneralContractExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGeneralContractExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitGeneralContractExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitGeneralContractExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportDeclarationSheetExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportDeclarationSheetExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportDeclarationSheetExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitImportDeclarationSheetExtractJobResponseBodyData;
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
      data: SubmitImportDeclarationSheetExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportDeclarationSheetExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitImportDeclarationSheetExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitImportDeclarationSheetExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInvoiceExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInvoiceExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInvoiceExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitInvoiceExtractJobResponseBodyData;
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
      data: SubmitInvoiceExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInvoiceExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitInvoiceExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitInvoiceExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackingListExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackingListExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackingListExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitPackingListExtractJobResponseBodyData;
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
      data: SubmitPackingListExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackingListExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitPackingListExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitPackingListExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSalesConfirmationExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSalesConfirmationExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSalesConfirmationExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitSalesConfirmationExtractJobResponseBodyData;
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
      data: SubmitSalesConfirmationExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSalesConfirmationExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSalesConfirmationExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSalesConfirmationExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSeaWaybillExtractJobRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSeaWaybillExtractJobAdvanceRequest extends $tea.Model {
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  parserConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      parserConfigId: 'ParserConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      parserConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSeaWaybillExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitSeaWaybillExtractJobResponseBodyData;
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
      data: SubmitSeaWaybillExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSeaWaybillExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSeaWaybillExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSeaWaybillExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTradeDocumentPackageExtractJobRequest extends $tea.Model {
  customExtractionRange?: string[];
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customExtractionRange: 'CustomExtractionRange',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRange: { 'type': 'array', 'itemType': 'string' },
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTradeDocumentPackageExtractJobAdvanceRequest extends $tea.Model {
  customExtractionRange?: string[];
  fileName?: string;
  fileNameExtension?: string;
  fileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      customExtractionRange: 'CustomExtractionRange',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRange: { 'type': 'array', 'itemType': 'string' },
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTradeDocumentPackageExtractJobShrinkRequest extends $tea.Model {
  customExtractionRangeShrink?: string;
  fileName?: string;
  fileNameExtension?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customExtractionRangeShrink: 'CustomExtractionRange',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRangeShrink: 'string',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTradeDocumentPackageExtractJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitTradeDocumentPackageExtractJobResponseBodyData;
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
      data: SubmitTradeDocumentPackageExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTradeDocumentPackageExtractJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTradeDocumentPackageExtractJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitTradeDocumentPackageExtractJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFeedbackResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReClassifyTradeDocumentExtractRequestPageUpdateInfoModels extends $tea.Model {
  attTypeCode?: string;
  pageId?: string;
  static names(): { [key: string]: string } {
    return {
      attTypeCode: 'AttTypeCode',
      pageId: 'PageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attTypeCode: 'string',
      pageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReClassifyTradeDocumentExtractResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTradeDocumentExtractResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAirWaybillExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBillOfLadingExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBookingNoteExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCertificateOfOriginExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitContainerLoadPlanExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitExportDeclarationSheetExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitGeneralContractExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImportDeclarationSheetExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitInvoiceExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPackingListExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSalesConfirmationExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSeaWaybillExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTradeDocumentPackageExtractJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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
    this._endpointMap = {
      'ap-northeast-1': "docmind-api.aliyuncs.com",
      'ap-northeast-2-pop': "docmind-api.aliyuncs.com",
      'ap-south-1': "docmind-api.aliyuncs.com",
      'ap-southeast-1': "docmind-api.aliyuncs.com",
      'ap-southeast-2': "docmind-api.aliyuncs.com",
      'ap-southeast-3': "docmind-api.aliyuncs.com",
      'ap-southeast-5': "docmind-api.aliyuncs.com",
      'cn-beijing': "docmind-api.aliyuncs.com",
      'cn-beijing-finance-1': "docmind-api.aliyuncs.com",
      'cn-beijing-finance-pop': "docmind-api.aliyuncs.com",
      'cn-beijing-gov-1': "docmind-api.aliyuncs.com",
      'cn-beijing-nu16-b01': "docmind-api.aliyuncs.com",
      'cn-chengdu': "docmind-api.aliyuncs.com",
      'cn-edge-1': "docmind-api.aliyuncs.com",
      'cn-fujian': "docmind-api.aliyuncs.com",
      'cn-haidian-cm12-c01': "docmind-api.aliyuncs.com",
      'cn-hangzhou-bj-b01': "docmind-api.aliyuncs.com",
      'cn-hangzhou-finance': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "docmind-api.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "docmind-api.aliyuncs.com",
      'cn-hangzhou-test-306': "docmind-api.aliyuncs.com",
      'cn-hongkong': "docmind-api.aliyuncs.com",
      'cn-hongkong-finance-pop': "docmind-api.aliyuncs.com",
      'cn-huhehaote': "docmind-api.aliyuncs.com",
      'cn-huhehaote-nebula-1': "docmind-api.aliyuncs.com",
      'cn-north-2-gov-1': "docmind-api.aliyuncs.com",
      'cn-qingdao': "docmind-api.aliyuncs.com",
      'cn-qingdao-nebula': "docmind-api.aliyuncs.com",
      'cn-shanghai': "docmind-api.aliyuncs.com",
      'cn-shanghai-et15-b01': "docmind-api.aliyuncs.com",
      'cn-shanghai-et2-b01': "docmind-api.aliyuncs.com",
      'cn-shanghai-finance-1': "docmind-api.aliyuncs.com",
      'cn-shanghai-inner': "docmind-api.aliyuncs.com",
      'cn-shanghai-internal-test-1': "docmind-api.aliyuncs.com",
      'cn-shenzhen': "docmind-api.aliyuncs.com",
      'cn-shenzhen-finance-1': "docmind-api.aliyuncs.com",
      'cn-shenzhen-inner': "docmind-api.aliyuncs.com",
      'cn-shenzhen-st4-d01': "docmind-api.aliyuncs.com",
      'cn-shenzhen-su18-b01': "docmind-api.aliyuncs.com",
      'cn-wuhan': "docmind-api.aliyuncs.com",
      'cn-wulanchabu': "docmind-api.aliyuncs.com",
      'cn-yushanfang': "docmind-api.aliyuncs.com",
      'cn-zhangbei': "docmind-api.aliyuncs.com",
      'cn-zhangbei-na61-b01': "docmind-api.aliyuncs.com",
      'cn-zhangjiakou': "docmind-api.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "docmind-api.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "docmind-api.aliyuncs.com",
      'eu-central-1': "docmind-api.aliyuncs.com",
      'eu-west-1': "docmind-api.aliyuncs.com",
      'eu-west-1-oxs': "docmind-api.aliyuncs.com",
      'me-east-1': "docmind-api.aliyuncs.com",
      'rus-west-1-pop': "docmind-api.aliyuncs.com",
      'us-east-1': "docmind-api.aliyuncs.com",
      'us-west-1': "docmind-api.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("docmind-api", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async extractFeedbackWithOptions(request: ExtractFeedbackRequest, runtime: $Util.RuntimeOptions): Promise<ExtractFeedbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.feedbackUrl)) {
      query["FeedbackUrl"] = request.feedbackUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExtractFeedback",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractFeedbackResponse>(await this.callApi(params, req, runtime), new ExtractFeedbackResponse({}));
  }

  async extractFeedback(request: ExtractFeedbackRequest): Promise<ExtractFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractFeedbackWithOptions(request, runtime);
  }

  async extractFeedbackAdvance(request: ExtractFeedbackAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ExtractFeedbackResponse> {
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
      product: "docmind-api",
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
    let extractFeedbackReq = new ExtractFeedbackRequest({ });
    OpenApiUtil.convert(request, extractFeedbackReq);
    if (!Util.isUnset(request.feedbackUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.feedbackUrlObject,
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
      extractFeedbackReq.feedbackUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let extractFeedbackResp = await this.extractFeedbackWithOptions(extractFeedbackReq, runtime);
    return extractFeedbackResp;
  }

  async getSingleDocumentExtractResultWithOptions(request: GetSingleDocumentExtractResultRequest, runtime: $Util.RuntimeOptions): Promise<GetSingleDocumentExtractResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSingleDocumentExtractResult",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSingleDocumentExtractResultResponse>(await this.callApi(params, req, runtime), new GetSingleDocumentExtractResultResponse({}));
  }

  async getSingleDocumentExtractResult(request: GetSingleDocumentExtractResultRequest): Promise<GetSingleDocumentExtractResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSingleDocumentExtractResultWithOptions(request, runtime);
  }

  async reClassifyTradeDocumentExtractWithOptions(tmpReq: ReClassifyTradeDocumentExtractRequest, runtime: $Util.RuntimeOptions): Promise<ReClassifyTradeDocumentExtractResponse> {
    Util.validateModel(tmpReq);
    let request = new ReClassifyTradeDocumentExtractShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.pageUpdateInfoModels)) {
      request.pageUpdateInfoModelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageUpdateInfoModels, "PageUpdateInfoModels", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.pageUpdateInfoModelsShrink)) {
      query["PageUpdateInfoModels"] = request.pageUpdateInfoModelsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReClassifyTradeDocumentExtract",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReClassifyTradeDocumentExtractResponse>(await this.callApi(params, req, runtime), new ReClassifyTradeDocumentExtractResponse({}));
  }

  async reClassifyTradeDocumentExtract(request: ReClassifyTradeDocumentExtractRequest): Promise<ReClassifyTradeDocumentExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reClassifyTradeDocumentExtractWithOptions(request, runtime);
  }

  async retryTradeDocumentExtractWithOptions(request: RetryTradeDocumentExtractRequest, runtime: $Util.RuntimeOptions): Promise<RetryTradeDocumentExtractResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryTradeDocumentExtract",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryTradeDocumentExtractResponse>(await this.callApi(params, req, runtime), new RetryTradeDocumentExtractResponse({}));
  }

  async retryTradeDocumentExtract(request: RetryTradeDocumentExtractRequest): Promise<RetryTradeDocumentExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryTradeDocumentExtractWithOptions(request, runtime);
  }

  async submitAirWaybillExtractJobWithOptions(request: SubmitAirWaybillExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAirWaybillExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAirWaybillExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAirWaybillExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitAirWaybillExtractJobResponse({}));
  }

  async submitAirWaybillExtractJob(request: SubmitAirWaybillExtractJobRequest): Promise<SubmitAirWaybillExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAirWaybillExtractJobWithOptions(request, runtime);
  }

  async submitAirWaybillExtractJobAdvance(request: SubmitAirWaybillExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAirWaybillExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitAirWaybillExtractJobReq = new SubmitAirWaybillExtractJobRequest({ });
    OpenApiUtil.convert(request, submitAirWaybillExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitAirWaybillExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitAirWaybillExtractJobResp = await this.submitAirWaybillExtractJobWithOptions(submitAirWaybillExtractJobReq, runtime);
    return submitAirWaybillExtractJobResp;
  }

  async submitBillOfLadingExtractJobWithOptions(request: SubmitBillOfLadingExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBillOfLadingExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitBillOfLadingExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitBillOfLadingExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitBillOfLadingExtractJobResponse({}));
  }

  async submitBillOfLadingExtractJob(request: SubmitBillOfLadingExtractJobRequest): Promise<SubmitBillOfLadingExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitBillOfLadingExtractJobWithOptions(request, runtime);
  }

  async submitBillOfLadingExtractJobAdvance(request: SubmitBillOfLadingExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBillOfLadingExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitBillOfLadingExtractJobReq = new SubmitBillOfLadingExtractJobRequest({ });
    OpenApiUtil.convert(request, submitBillOfLadingExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitBillOfLadingExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitBillOfLadingExtractJobResp = await this.submitBillOfLadingExtractJobWithOptions(submitBillOfLadingExtractJobReq, runtime);
    return submitBillOfLadingExtractJobResp;
  }

  async submitBookingNoteExtractJobWithOptions(request: SubmitBookingNoteExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBookingNoteExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitBookingNoteExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitBookingNoteExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitBookingNoteExtractJobResponse({}));
  }

  async submitBookingNoteExtractJob(request: SubmitBookingNoteExtractJobRequest): Promise<SubmitBookingNoteExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitBookingNoteExtractJobWithOptions(request, runtime);
  }

  async submitBookingNoteExtractJobAdvance(request: SubmitBookingNoteExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBookingNoteExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitBookingNoteExtractJobReq = new SubmitBookingNoteExtractJobRequest({ });
    OpenApiUtil.convert(request, submitBookingNoteExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitBookingNoteExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitBookingNoteExtractJobResp = await this.submitBookingNoteExtractJobWithOptions(submitBookingNoteExtractJobReq, runtime);
    return submitBookingNoteExtractJobResp;
  }

  async submitCertificateOfOriginExtractJobWithOptions(request: SubmitCertificateOfOriginExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCertificateOfOriginExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCertificateOfOriginExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitCertificateOfOriginExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitCertificateOfOriginExtractJobResponse({}));
  }

  async submitCertificateOfOriginExtractJob(request: SubmitCertificateOfOriginExtractJobRequest): Promise<SubmitCertificateOfOriginExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCertificateOfOriginExtractJobWithOptions(request, runtime);
  }

  async submitCertificateOfOriginExtractJobAdvance(request: SubmitCertificateOfOriginExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCertificateOfOriginExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitCertificateOfOriginExtractJobReq = new SubmitCertificateOfOriginExtractJobRequest({ });
    OpenApiUtil.convert(request, submitCertificateOfOriginExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitCertificateOfOriginExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitCertificateOfOriginExtractJobResp = await this.submitCertificateOfOriginExtractJobWithOptions(submitCertificateOfOriginExtractJobReq, runtime);
    return submitCertificateOfOriginExtractJobResp;
  }

  async submitContainerLoadPlanExtractJobWithOptions(request: SubmitContainerLoadPlanExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitContainerLoadPlanExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitContainerLoadPlanExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitContainerLoadPlanExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitContainerLoadPlanExtractJobResponse({}));
  }

  async submitContainerLoadPlanExtractJob(request: SubmitContainerLoadPlanExtractJobRequest): Promise<SubmitContainerLoadPlanExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitContainerLoadPlanExtractJobWithOptions(request, runtime);
  }

  async submitContainerLoadPlanExtractJobAdvance(request: SubmitContainerLoadPlanExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitContainerLoadPlanExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitContainerLoadPlanExtractJobReq = new SubmitContainerLoadPlanExtractJobRequest({ });
    OpenApiUtil.convert(request, submitContainerLoadPlanExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitContainerLoadPlanExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitContainerLoadPlanExtractJobResp = await this.submitContainerLoadPlanExtractJobWithOptions(submitContainerLoadPlanExtractJobReq, runtime);
    return submitContainerLoadPlanExtractJobResp;
  }

  async submitExportDeclarationSheetExtractJobWithOptions(request: SubmitExportDeclarationSheetExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitExportDeclarationSheetExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitExportDeclarationSheetExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitExportDeclarationSheetExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitExportDeclarationSheetExtractJobResponse({}));
  }

  async submitExportDeclarationSheetExtractJob(request: SubmitExportDeclarationSheetExtractJobRequest): Promise<SubmitExportDeclarationSheetExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitExportDeclarationSheetExtractJobWithOptions(request, runtime);
  }

  async submitExportDeclarationSheetExtractJobAdvance(request: SubmitExportDeclarationSheetExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitExportDeclarationSheetExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitExportDeclarationSheetExtractJobReq = new SubmitExportDeclarationSheetExtractJobRequest({ });
    OpenApiUtil.convert(request, submitExportDeclarationSheetExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitExportDeclarationSheetExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitExportDeclarationSheetExtractJobResp = await this.submitExportDeclarationSheetExtractJobWithOptions(submitExportDeclarationSheetExtractJobReq, runtime);
    return submitExportDeclarationSheetExtractJobResp;
  }

  async submitGeneralContractExtractJobWithOptions(request: SubmitGeneralContractExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitGeneralContractExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contractModel)) {
      query["ContractModel"] = request.contractModel;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitGeneralContractExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitGeneralContractExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitGeneralContractExtractJobResponse({}));
  }

  async submitGeneralContractExtractJob(request: SubmitGeneralContractExtractJobRequest): Promise<SubmitGeneralContractExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitGeneralContractExtractJobWithOptions(request, runtime);
  }

  async submitGeneralContractExtractJobAdvance(request: SubmitGeneralContractExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitGeneralContractExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitGeneralContractExtractJobReq = new SubmitGeneralContractExtractJobRequest({ });
    OpenApiUtil.convert(request, submitGeneralContractExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitGeneralContractExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitGeneralContractExtractJobResp = await this.submitGeneralContractExtractJobWithOptions(submitGeneralContractExtractJobReq, runtime);
    return submitGeneralContractExtractJobResp;
  }

  async submitImportDeclarationSheetExtractJobWithOptions(request: SubmitImportDeclarationSheetExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitImportDeclarationSheetExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitImportDeclarationSheetExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitImportDeclarationSheetExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitImportDeclarationSheetExtractJobResponse({}));
  }

  async submitImportDeclarationSheetExtractJob(request: SubmitImportDeclarationSheetExtractJobRequest): Promise<SubmitImportDeclarationSheetExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitImportDeclarationSheetExtractJobWithOptions(request, runtime);
  }

  async submitImportDeclarationSheetExtractJobAdvance(request: SubmitImportDeclarationSheetExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitImportDeclarationSheetExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitImportDeclarationSheetExtractJobReq = new SubmitImportDeclarationSheetExtractJobRequest({ });
    OpenApiUtil.convert(request, submitImportDeclarationSheetExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitImportDeclarationSheetExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitImportDeclarationSheetExtractJobResp = await this.submitImportDeclarationSheetExtractJobWithOptions(submitImportDeclarationSheetExtractJobReq, runtime);
    return submitImportDeclarationSheetExtractJobResp;
  }

  async submitInvoiceExtractJobWithOptions(request: SubmitInvoiceExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitInvoiceExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitInvoiceExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitInvoiceExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitInvoiceExtractJobResponse({}));
  }

  async submitInvoiceExtractJob(request: SubmitInvoiceExtractJobRequest): Promise<SubmitInvoiceExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitInvoiceExtractJobWithOptions(request, runtime);
  }

  async submitInvoiceExtractJobAdvance(request: SubmitInvoiceExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitInvoiceExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitInvoiceExtractJobReq = new SubmitInvoiceExtractJobRequest({ });
    OpenApiUtil.convert(request, submitInvoiceExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitInvoiceExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitInvoiceExtractJobResp = await this.submitInvoiceExtractJobWithOptions(submitInvoiceExtractJobReq, runtime);
    return submitInvoiceExtractJobResp;
  }

  async submitPackingListExtractJobWithOptions(request: SubmitPackingListExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPackingListExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPackingListExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPackingListExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitPackingListExtractJobResponse({}));
  }

  async submitPackingListExtractJob(request: SubmitPackingListExtractJobRequest): Promise<SubmitPackingListExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPackingListExtractJobWithOptions(request, runtime);
  }

  async submitPackingListExtractJobAdvance(request: SubmitPackingListExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPackingListExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitPackingListExtractJobReq = new SubmitPackingListExtractJobRequest({ });
    OpenApiUtil.convert(request, submitPackingListExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitPackingListExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitPackingListExtractJobResp = await this.submitPackingListExtractJobWithOptions(submitPackingListExtractJobReq, runtime);
    return submitPackingListExtractJobResp;
  }

  async submitSalesConfirmationExtractJobWithOptions(request: SubmitSalesConfirmationExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSalesConfirmationExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSalesConfirmationExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSalesConfirmationExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitSalesConfirmationExtractJobResponse({}));
  }

  async submitSalesConfirmationExtractJob(request: SubmitSalesConfirmationExtractJobRequest): Promise<SubmitSalesConfirmationExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSalesConfirmationExtractJobWithOptions(request, runtime);
  }

  async submitSalesConfirmationExtractJobAdvance(request: SubmitSalesConfirmationExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSalesConfirmationExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitSalesConfirmationExtractJobReq = new SubmitSalesConfirmationExtractJobRequest({ });
    OpenApiUtil.convert(request, submitSalesConfirmationExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitSalesConfirmationExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitSalesConfirmationExtractJobResp = await this.submitSalesConfirmationExtractJobWithOptions(submitSalesConfirmationExtractJobReq, runtime);
    return submitSalesConfirmationExtractJobResp;
  }

  async submitSeaWaybillExtractJobWithOptions(request: SubmitSeaWaybillExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSeaWaybillExtractJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.parserConfigId)) {
      query["ParserConfigId"] = request.parserConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSeaWaybillExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSeaWaybillExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitSeaWaybillExtractJobResponse({}));
  }

  async submitSeaWaybillExtractJob(request: SubmitSeaWaybillExtractJobRequest): Promise<SubmitSeaWaybillExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSeaWaybillExtractJobWithOptions(request, runtime);
  }

  async submitSeaWaybillExtractJobAdvance(request: SubmitSeaWaybillExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSeaWaybillExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitSeaWaybillExtractJobReq = new SubmitSeaWaybillExtractJobRequest({ });
    OpenApiUtil.convert(request, submitSeaWaybillExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitSeaWaybillExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitSeaWaybillExtractJobResp = await this.submitSeaWaybillExtractJobWithOptions(submitSeaWaybillExtractJobReq, runtime);
    return submitSeaWaybillExtractJobResp;
  }

  async submitTradeDocumentPackageExtractJobWithOptions(tmpReq: SubmitTradeDocumentPackageExtractJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTradeDocumentPackageExtractJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTradeDocumentPackageExtractJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customExtractionRange)) {
      request.customExtractionRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customExtractionRange, "CustomExtractionRange", "json");
    }

    let query = { };
    if (!Util.isUnset(request.customExtractionRangeShrink)) {
      query["CustomExtractionRange"] = request.customExtractionRangeShrink;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileNameExtension)) {
      query["FileNameExtension"] = request.fileNameExtension;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTradeDocumentPackageExtractJob",
      version: "2022-07-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTradeDocumentPackageExtractJobResponse>(await this.callApi(params, req, runtime), new SubmitTradeDocumentPackageExtractJobResponse({}));
  }

  async submitTradeDocumentPackageExtractJob(request: SubmitTradeDocumentPackageExtractJobRequest): Promise<SubmitTradeDocumentPackageExtractJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTradeDocumentPackageExtractJobWithOptions(request, runtime);
  }

  async submitTradeDocumentPackageExtractJobAdvance(request: SubmitTradeDocumentPackageExtractJobAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTradeDocumentPackageExtractJobResponse> {
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
      product: "docmind-api",
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
    let submitTradeDocumentPackageExtractJobReq = new SubmitTradeDocumentPackageExtractJobRequest({ });
    OpenApiUtil.convert(request, submitTradeDocumentPackageExtractJobReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
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
      submitTradeDocumentPackageExtractJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitTradeDocumentPackageExtractJobResp = await this.submitTradeDocumentPackageExtractJobWithOptions(submitTradeDocumentPackageExtractJobReq, runtime);
    return submitTradeDocumentPackageExtractJobResp;
  }

}
