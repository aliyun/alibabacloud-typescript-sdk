// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

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
  imageURLObject: Readable;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeDrivingLicenseResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeDrivingLicenseResponseBodyData,
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

export class RecognizeChinapassportRequest extends $tea.Model {
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

export class RecognizeChinapassportAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizeChinapassportResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeChinapassportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeChinapassportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinapassportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeChinapassportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeChinapassportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentRequest extends $tea.Model {
  fileURL?: string;
  fileType?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      fileType: 'FileType',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      fileType: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentAdvanceRequest extends $tea.Model {
  fileURLObject: Readable;
  fileType?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      fileURLObject: 'FileURLObject',
      fileType: 'FileType',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURLObject: 'Readable',
      fileType: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentResponseBody extends $tea.Model {
  requestId?: string;
  data?: TrimDocumentResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TrimDocumentResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TrimDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TrimDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableRequest extends $tea.Model {
  imageURL?: string;
  outputFormat?: string;
  useFinanceModel?: boolean;
  assureDirection?: boolean;
  hasLine?: boolean;
  skipDetection?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      outputFormat: 'OutputFormat',
      useFinanceModel: 'UseFinanceModel',
      assureDirection: 'AssureDirection',
      hasLine: 'HasLine',
      skipDetection: 'SkipDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      outputFormat: 'string',
      useFinanceModel: 'boolean',
      assureDirection: 'boolean',
      hasLine: 'boolean',
      skipDetection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  outputFormat?: string;
  useFinanceModel?: boolean;
  assureDirection?: boolean;
  hasLine?: boolean;
  skipDetection?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      outputFormat: 'OutputFormat',
      useFinanceModel: 'UseFinanceModel',
      assureDirection: 'AssureDirection',
      hasLine: 'HasLine',
      skipDetection: 'SkipDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      outputFormat: 'string',
      useFinanceModel: 'boolean',
      assureDirection: 'boolean',
      hasLine: 'boolean',
      skipDetection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeTableResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeTableResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTableResponseBody,
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
  imageURLObject: Readable;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeIdentityCardResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeIdentityCardResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeIdentityCardResponseBody,
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
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeBusinessLicenseResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeBusinessLicenseResponseBodyData,
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
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeBankCardResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeBankCardResponseBodyData,
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

export class RecognizeVerificationcodeRequest extends $tea.Model {
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

export class RecognizeVerificationcodeAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizeVerificationcodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeVerificationcodeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVerificationcodeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVerificationcodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVerificationcodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVerificationcodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageRequest extends $tea.Model {
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

export class RecognizeAccountPageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizeAccountPageResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeAccountPageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeAccountPageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeAccountPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeAccountPageResponseBody,
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
  imageURLObject: Readable;
  minHeight?: number;
  outputProbability?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeCharacterResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeCharacterResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeCharacterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeCharacterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  requestId?: string;
  data?: GetAsyncJobResultResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAsyncJobResultResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTakeoutOrderRequest extends $tea.Model {
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

export class RecognizeTakeoutOrderAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizeTakeoutOrderResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeTakeoutOrderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeTakeoutOrderResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTakeoutOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTakeoutOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTakeoutOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessCardRequest extends $tea.Model {
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

export class RecognizeBusinessCardAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizeBusinessCardResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeBusinessCardResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeBusinessCardResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeBusinessCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeBusinessCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotRequest extends $tea.Model {
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

export class DetectCardScreenshotAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class DetectCardScreenshotResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectCardScreenshotResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectCardScreenshotResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectCardScreenshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectCardScreenshotResponseBody,
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
  imageURLObject: Readable;
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeDriverLicenseResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeDriverLicenseResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeDriverLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeDriverLicenseResponseBody,
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
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeLicensePlateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeLicensePlateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeLicensePlateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeLicensePlateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampRequest extends $tea.Model {
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

export class RecognizeStampAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizeStampResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeStampResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeStampResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeStampResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeStampResponseBody,
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
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeTaxiInvoiceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeTaxiInvoiceResponseBodyData,
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

export class RecognizeVATInvoiceRequest extends $tea.Model {
  fileURL?: string;
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceAdvanceRequest extends $tea.Model {
  fileURLObject: Readable;
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileURLObject: 'FileURLObject',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURLObject: 'Readable',
      fileType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeVATInvoiceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVATInvoiceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVATInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVATInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportMRZRequest extends $tea.Model {
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

export class RecognizePassportMRZAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizePassportMRZResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizePassportMRZResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizePassportMRZResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportMRZResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizePassportMRZResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizePassportMRZResponseBody,
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
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeTrainTicketResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeTrainTicketResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeTrainTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeTrainTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameRequest extends $tea.Model {
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

export class RecognizePoiNameAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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

export class RecognizePoiNameResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizePoiNameResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizePoiNameResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizePoiNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizePoiNameResponseBody,
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

export class RecognizeQrCodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeQrCodeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeQrCodeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeQrCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeQrCodeResponseBody,
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
  imageURLObject: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
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
  requestId?: string;
  data?: RecognizeVINCodeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVINCodeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVINCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVINCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyDataBackResult extends $tea.Model {
  overallDimension?: string;
  inspectionRecord?: string;
  unladenMass?: string;
  fileNumber?: string;
  tractionMass?: string;
  grossMass?: string;
  plateNumber?: string;
  approvedPassengerCapacity?: string;
  energyType?: string;
  approvedLoad?: string;
  static names(): { [key: string]: string } {
    return {
      overallDimension: 'OverallDimension',
      inspectionRecord: 'InspectionRecord',
      unladenMass: 'UnladenMass',
      fileNumber: 'FileNumber',
      tractionMass: 'TractionMass',
      grossMass: 'GrossMass',
      plateNumber: 'PlateNumber',
      approvedPassengerCapacity: 'ApprovedPassengerCapacity',
      energyType: 'EnergyType',
      approvedLoad: 'ApprovedLoad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallDimension: 'string',
      inspectionRecord: 'string',
      unladenMass: 'string',
      fileNumber: 'string',
      tractionMass: 'string',
      grossMass: 'string',
      plateNumber: 'string',
      approvedPassengerCapacity: 'string',
      energyType: 'string',
      approvedLoad: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDrivingLicenseResponseBodyDataFaceResult extends $tea.Model {
  issueDate?: string;
  model?: string;
  vehicleType?: string;
  owner?: string;
  engineNumber?: string;
  plateNumber?: string;
  address?: string;
  useCharacter?: string;
  vin?: string;
  registerDate?: string;
  static names(): { [key: string]: string } {
    return {
      issueDate: 'IssueDate',
      model: 'Model',
      vehicleType: 'VehicleType',
      owner: 'Owner',
      engineNumber: 'EngineNumber',
      plateNumber: 'PlateNumber',
      address: 'Address',
      useCharacter: 'UseCharacter',
      vin: 'Vin',
      registerDate: 'RegisterDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueDate: 'string',
      model: 'string',
      vehicleType: 'string',
      owner: 'string',
      engineNumber: 'string',
      plateNumber: 'string',
      address: 'string',
      useCharacter: 'string',
      vin: 'string',
      registerDate: 'string',
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

export class RecognizeChinapassportResponseBodyData extends $tea.Model {
  type?: string;
  sex?: string;
  authority?: string;
  issuePlaceRaw?: string;
  success?: boolean;
  lineOne?: string;
  expiryDate?: string;
  birthPlace?: string;
  passportNo?: string;
  birthPlaceRaw?: string;
  issueDate?: string;
  sourceCountry?: string;
  birthDate?: string;
  nameChineseRaw?: string;
  issuePlace?: string;
  nameChinese?: string;
  lineZero?: string;
  country?: string;
  birthDay?: string;
  expiryDay?: string;
  name?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      sex: 'Sex',
      authority: 'Authority',
      issuePlaceRaw: 'IssuePlaceRaw',
      success: 'Success',
      lineOne: 'LineOne',
      expiryDate: 'ExpiryDate',
      birthPlace: 'BirthPlace',
      passportNo: 'PassportNo',
      birthPlaceRaw: 'BirthPlaceRaw',
      issueDate: 'IssueDate',
      sourceCountry: 'SourceCountry',
      birthDate: 'BirthDate',
      nameChineseRaw: 'NameChineseRaw',
      issuePlace: 'IssuePlace',
      nameChinese: 'NameChinese',
      lineZero: 'LineZero',
      country: 'Country',
      birthDay: 'BirthDay',
      expiryDay: 'ExpiryDay',
      name: 'Name',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      sex: 'string',
      authority: 'string',
      issuePlaceRaw: 'string',
      success: 'boolean',
      lineOne: 'string',
      expiryDate: 'string',
      birthPlace: 'string',
      passportNo: 'string',
      birthPlaceRaw: 'string',
      issueDate: 'string',
      sourceCountry: 'string',
      birthDate: 'string',
      nameChineseRaw: 'string',
      issuePlace: 'string',
      nameChinese: 'string',
      lineZero: 'string',
      country: 'string',
      birthDay: 'string',
      expiryDay: 'string',
      name: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentResponseBodyData extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyDataTablesTableRowsTableColumns extends $tea.Model {
  endRow?: number;
  endColumn?: number;
  width?: number;
  height?: number;
  texts?: string[];
  startRow?: number;
  startColumn?: number;
  static names(): { [key: string]: string } {
    return {
      endRow: 'EndRow',
      endColumn: 'EndColumn',
      width: 'Width',
      height: 'Height',
      texts: 'Texts',
      startRow: 'StartRow',
      startColumn: 'StartColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endRow: 'number',
      endColumn: 'number',
      width: 'number',
      height: 'number',
      texts: { 'type': 'array', 'itemType': 'string' },
      startRow: 'number',
      startColumn: 'number',
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
  tail?: string[];
  tableRows?: RecognizeTableResponseBodyDataTablesTableRows[];
  static names(): { [key: string]: string } {
    return {
      head: 'Head',
      tail: 'Tail',
      tableRows: 'TableRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      head: { 'type': 'array', 'itemType': 'string' },
      tail: { 'type': 'array', 'itemType': 'string' },
      tableRows: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTablesTableRows },
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize extends $tea.Model {
  width?: number;
  height?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle extends $tea.Model {
  size?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize;
  angle?: number;
  center?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      angle: 'Angle',
      center: 'Center',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize,
      angle: 'number',
      center: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultCardAreas extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResult extends $tea.Model {
  faceRectangle?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle;
  birthDate?: string;
  gender?: string;
  address?: string;
  faceRectVertices?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices[];
  cardAreas?: RecognizeIdentityCardResponseBodyDataFrontResultCardAreas[];
  nationality?: string;
  name?: string;
  IDNumber?: string;
  static names(): { [key: string]: string } {
    return {
      faceRectangle: 'FaceRectangle',
      birthDate: 'BirthDate',
      gender: 'Gender',
      address: 'Address',
      faceRectVertices: 'FaceRectVertices',
      cardAreas: 'CardAreas',
      nationality: 'Nationality',
      name: 'Name',
      IDNumber: 'IDNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRectangle: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle,
      birthDate: 'string',
      gender: 'string',
      address: 'string',
      faceRectVertices: { 'type': 'array', 'itemType': RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices },
      cardAreas: { 'type': 'array', 'itemType': RecognizeIdentityCardResponseBodyDataFrontResultCardAreas },
      nationality: 'string',
      name: 'string',
      IDNumber: 'string',
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

export class RecognizeBusinessLicenseResponseBodyDataStamp extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataTitle extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataEmblem extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataQRCode extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyData extends $tea.Model {
  type?: string;
  stamp?: RecognizeBusinessLicenseResponseBodyDataStamp;
  establishDate?: string;
  validPeriod?: string;
  business?: string;
  angle?: number;
  registerNumber?: string;
  address?: string;
  capital?: string;
  title?: RecognizeBusinessLicenseResponseBodyDataTitle;
  emblem?: RecognizeBusinessLicenseResponseBodyDataEmblem;
  name?: string;
  QRCode?: RecognizeBusinessLicenseResponseBodyDataQRCode;
  legalPerson?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      stamp: 'Stamp',
      establishDate: 'EstablishDate',
      validPeriod: 'ValidPeriod',
      business: 'Business',
      angle: 'Angle',
      registerNumber: 'RegisterNumber',
      address: 'Address',
      capital: 'Capital',
      title: 'Title',
      emblem: 'Emblem',
      name: 'Name',
      QRCode: 'QRCode',
      legalPerson: 'LegalPerson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      stamp: RecognizeBusinessLicenseResponseBodyDataStamp,
      establishDate: 'string',
      validPeriod: 'string',
      business: 'string',
      angle: 'number',
      registerNumber: 'string',
      address: 'string',
      capital: 'string',
      title: RecognizeBusinessLicenseResponseBodyDataTitle,
      emblem: RecognizeBusinessLicenseResponseBodyDataEmblem,
      name: 'string',
      QRCode: RecognizeBusinessLicenseResponseBodyDataQRCode,
      legalPerson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBodyData extends $tea.Model {
  cardNumber?: string;
  validDate?: string;
  bankName?: string;
  static names(): { [key: string]: string } {
    return {
      cardNumber: 'CardNumber',
      validDate: 'ValidDate',
      bankName: 'BankName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNumber: 'string',
      validDate: 'string',
      bankName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVerificationcodeResponseBodyData extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponseBodyDataTitleArea extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponseBodyDataRegisterStampAreas extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponseBodyDataOtherStampAreas extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponseBodyDataUndertakeStampAreas extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponseBodyDataInvalidStampAreas extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponseBodyData extends $tea.Model {
  gender?: string;
  titleArea?: RecognizeAccountPageResponseBodyDataTitleArea;
  angle?: number;
  registerStampAreas?: RecognizeAccountPageResponseBodyDataRegisterStampAreas[];
  nationality?: string;
  birthPlace?: string;
  otherStampAreas?: RecognizeAccountPageResponseBodyDataOtherStampAreas[];
  undertakeStampAreas?: RecognizeAccountPageResponseBodyDataUndertakeStampAreas[];
  birthDate?: string;
  relation?: string;
  nativePlace?: string;
  name?: string;
  IDNumber?: string;
  invalidStampAreas?: RecognizeAccountPageResponseBodyDataInvalidStampAreas[];
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      titleArea: 'TitleArea',
      angle: 'Angle',
      registerStampAreas: 'RegisterStampAreas',
      nationality: 'Nationality',
      birthPlace: 'BirthPlace',
      otherStampAreas: 'OtherStampAreas',
      undertakeStampAreas: 'UndertakeStampAreas',
      birthDate: 'BirthDate',
      relation: 'Relation',
      nativePlace: 'NativePlace',
      name: 'Name',
      IDNumber: 'IDNumber',
      invalidStampAreas: 'InvalidStampAreas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      titleArea: RecognizeAccountPageResponseBodyDataTitleArea,
      angle: 'number',
      registerStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataRegisterStampAreas },
      nationality: 'string',
      birthPlace: 'string',
      otherStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataOtherStampAreas },
      undertakeStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataUndertakeStampAreas },
      birthDate: 'string',
      relation: 'string',
      nativePlace: 'string',
      name: 'string',
      IDNumber: 'string',
      invalidStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataInvalidStampAreas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyDataResultsTextRectangles extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  angle?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      angle: 'Angle',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      angle: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyDataResults extends $tea.Model {
  textRectangles?: RecognizeCharacterResponseBodyDataResultsTextRectangles;
  text?: string;
  probability?: number;
  static names(): { [key: string]: string } {
    return {
      textRectangles: 'TextRectangles',
      text: 'Text',
      probability: 'Probability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textRectangles: RecognizeCharacterResponseBodyDataResultsTextRectangles,
      text: 'string',
      probability: 'number',
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

export class GetAsyncJobResultResponseBodyData extends $tea.Model {
  status?: string;
  errorMessage?: string;
  result?: string;
  errorCode?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      result: 'Result',
      errorCode: 'ErrorCode',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorMessage: 'string',
      result: 'string',
      errorCode: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTakeoutOrderResponseBodyDataElements extends $tea.Model {
  value?: string;
  boxes?: number[];
  score?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      boxes: 'Boxes',
      score: 'Score',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTakeoutOrderResponseBodyData extends $tea.Model {
  elements?: RecognizeTakeoutOrderResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeTakeoutOrderResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessCardResponseBodyData extends $tea.Model {
  companies?: string[];
  titles?: string[];
  emails?: string[];
  departments?: string[];
  officePhoneNumbers?: string[];
  name?: string;
  cellPhoneNumbers?: string[];
  addresses?: string[];
  static names(): { [key: string]: string } {
    return {
      companies: 'Companies',
      titles: 'Titles',
      emails: 'Emails',
      departments: 'Departments',
      officePhoneNumbers: 'OfficePhoneNumbers',
      name: 'Name',
      cellPhoneNumbers: 'CellPhoneNumbers',
      addresses: 'Addresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companies: { 'type': 'array', 'itemType': 'string' },
      titles: { 'type': 'array', 'itemType': 'string' },
      emails: { 'type': 'array', 'itemType': 'string' },
      departments: { 'type': 'array', 'itemType': 'string' },
      officePhoneNumbers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      cellPhoneNumbers: { 'type': 'array', 'itemType': 'string' },
      addresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotResponseBodyDataSpoofResultResultMap extends $tea.Model {
  screenThreshold?: number;
  screenScore?: number;
  static names(): { [key: string]: string } {
    return {
      screenThreshold: 'ScreenThreshold',
      screenScore: 'ScreenScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenThreshold: 'number',
      screenScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotResponseBodyDataSpoofResult extends $tea.Model {
  isSpoof?: boolean;
  resultMap?: DetectCardScreenshotResponseBodyDataSpoofResultResultMap;
  static names(): { [key: string]: string } {
    return {
      isSpoof: 'IsSpoof',
      resultMap: 'ResultMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSpoof: 'boolean',
      resultMap: DetectCardScreenshotResponseBodyDataSpoofResultResultMap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotResponseBodyData extends $tea.Model {
  isBlur?: boolean;
  isCard?: boolean;
  spoofResult?: DetectCardScreenshotResponseBodyDataSpoofResult;
  static names(): { [key: string]: string } {
    return {
      isBlur: 'IsBlur',
      isCard: 'IsCard',
      spoofResult: 'SpoofResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBlur: 'boolean',
      isCard: 'boolean',
      spoofResult: DetectCardScreenshotResponseBodyDataSpoofResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyDataBackResult extends $tea.Model {
  archiveNumber?: string;
  name?: string;
  cardNumber?: string;
  record?: string;
  static names(): { [key: string]: string } {
    return {
      archiveNumber: 'ArchiveNumber',
      name: 'Name',
      cardNumber: 'CardNumber',
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveNumber: 'string',
      name: 'string',
      cardNumber: 'string',
      record: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeDriverLicenseResponseBodyDataFaceResult extends $tea.Model {
  vehicleType?: string;
  issueDate?: string;
  endDate?: string;
  gender?: string;
  address?: string;
  startDate?: string;
  licenseNumber?: string;
  name?: string;
  issueUnit?: string;
  static names(): { [key: string]: string } {
    return {
      vehicleType: 'VehicleType',
      issueDate: 'IssueDate',
      endDate: 'EndDate',
      gender: 'Gender',
      address: 'Address',
      startDate: 'StartDate',
      licenseNumber: 'LicenseNumber',
      name: 'Name',
      issueUnit: 'IssueUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vehicleType: 'string',
      issueDate: 'string',
      endDate: 'string',
      gender: 'string',
      address: 'string',
      startDate: 'string',
      licenseNumber: 'string',
      name: 'string',
      issueUnit: 'string',
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

export class RecognizeLicensePlateResponseBodyDataPlatesRoi extends $tea.Model {
  w?: number;
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
      y: 'number',
      x: 'number',
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

export class RecognizeLicensePlateResponseBodyDataPlates extends $tea.Model {
  plateTypeConfidence?: number;
  plateType?: string;
  confidence?: number;
  plateNumber?: string;
  roi?: RecognizeLicensePlateResponseBodyDataPlatesRoi;
  positions?: RecognizeLicensePlateResponseBodyDataPlatesPositions[];
  static names(): { [key: string]: string } {
    return {
      plateTypeConfidence: 'PlateTypeConfidence',
      plateType: 'PlateType',
      confidence: 'Confidence',
      plateNumber: 'PlateNumber',
      roi: 'Roi',
      positions: 'Positions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plateTypeConfidence: 'number',
      plateType: 'string',
      confidence: 'number',
      plateNumber: 'string',
      roi: RecognizeLicensePlateResponseBodyDataPlatesRoi,
      positions: { 'type': 'array', 'itemType': RecognizeLicensePlateResponseBodyDataPlatesPositions },
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

export class RecognizeStampResponseBodyDataResultsText extends $tea.Model {
  confidence?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampResponseBodyDataResultsRoi extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampResponseBodyDataResultsGeneralText extends $tea.Model {
  confidence?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampResponseBodyDataResults extends $tea.Model {
  text?: RecognizeStampResponseBodyDataResultsText;
  roi?: RecognizeStampResponseBodyDataResultsRoi;
  generalText?: RecognizeStampResponseBodyDataResultsGeneralText[];
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      roi: 'Roi',
      generalText: 'GeneralText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: RecognizeStampResponseBodyDataResultsText,
      roi: RecognizeStampResponseBodyDataResultsRoi,
      generalText: { 'type': 'array', 'itemType': RecognizeStampResponseBodyDataResultsGeneralText },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampResponseBodyData extends $tea.Model {
  results?: RecognizeStampResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': RecognizeStampResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize extends $tea.Model {
  w?: number;
  h?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoi extends $tea.Model {
  size?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize;
  angle?: number;
  center?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      angle: 'Angle',
      center: 'Center',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiSize,
      angle: 'number',
      center: RecognizeTaxiInvoiceResponseBodyDataInvoicesItemsItemRoiCenter,
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

export class RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi extends $tea.Model {
  w?: number;
  h?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      w: 'W',
      h: 'H',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      w: 'number',
      h: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTaxiInvoiceResponseBodyDataInvoices extends $tea.Model {
  items?: RecognizeTaxiInvoiceResponseBodyDataInvoicesItems[];
  rotateType?: number;
  invoiceRoi?: RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      rotateType: 'RotateType',
      invoiceRoi: 'InvoiceRoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': RecognizeTaxiInvoiceResponseBodyDataInvoicesItems },
      rotateType: 'number',
      invoiceRoi: RecognizeTaxiInvoiceResponseBodyDataInvoicesInvoiceRoi,
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

export class RecognizeVATInvoiceResponseBodyDataBox extends $tea.Model {
  payerRegisterNoes?: number[];
  payeeAddresses?: number[];
  payeeBankNames?: number[];
  checkers?: number[];
  taxAmounts?: number[];
  sumAmounts?: number[];
  clerks?: number[];
  invoiceNoes?: number[];
  invoiceDates?: number[];
  invoiceCodes?: number[];
  invoiceFakeCodes?: number[];
  payerNames?: number[];
  payerBankNames?: number[];
  payees?: number[];
  payeeNames?: number[];
  invoiceAmounts?: number[];
  withoutTaxAmounts?: number[];
  payerAddresses?: number[];
  payeeRegisterNoes?: number[];
  static names(): { [key: string]: string } {
    return {
      payerRegisterNoes: 'PayerRegisterNoes',
      payeeAddresses: 'PayeeAddresses',
      payeeBankNames: 'PayeeBankNames',
      checkers: 'Checkers',
      taxAmounts: 'TaxAmounts',
      sumAmounts: 'SumAmounts',
      clerks: 'Clerks',
      invoiceNoes: 'InvoiceNoes',
      invoiceDates: 'InvoiceDates',
      invoiceCodes: 'InvoiceCodes',
      invoiceFakeCodes: 'InvoiceFakeCodes',
      payerNames: 'PayerNames',
      payerBankNames: 'PayerBankNames',
      payees: 'Payees',
      payeeNames: 'PayeeNames',
      invoiceAmounts: 'InvoiceAmounts',
      withoutTaxAmounts: 'WithoutTaxAmounts',
      payerAddresses: 'PayerAddresses',
      payeeRegisterNoes: 'PayeeRegisterNoes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payerRegisterNoes: { 'type': 'array', 'itemType': 'number' },
      payeeAddresses: { 'type': 'array', 'itemType': 'number' },
      payeeBankNames: { 'type': 'array', 'itemType': 'number' },
      checkers: { 'type': 'array', 'itemType': 'number' },
      taxAmounts: { 'type': 'array', 'itemType': 'number' },
      sumAmounts: { 'type': 'array', 'itemType': 'number' },
      clerks: { 'type': 'array', 'itemType': 'number' },
      invoiceNoes: { 'type': 'array', 'itemType': 'number' },
      invoiceDates: { 'type': 'array', 'itemType': 'number' },
      invoiceCodes: { 'type': 'array', 'itemType': 'number' },
      invoiceFakeCodes: { 'type': 'array', 'itemType': 'number' },
      payerNames: { 'type': 'array', 'itemType': 'number' },
      payerBankNames: { 'type': 'array', 'itemType': 'number' },
      payees: { 'type': 'array', 'itemType': 'number' },
      payeeNames: { 'type': 'array', 'itemType': 'number' },
      invoiceAmounts: { 'type': 'array', 'itemType': 'number' },
      withoutTaxAmounts: { 'type': 'array', 'itemType': 'number' },
      payerAddresses: { 'type': 'array', 'itemType': 'number' },
      payeeRegisterNoes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBodyDataContent extends $tea.Model {
  payerAddress?: string;
  payeeRegisterNo?: string;
  payeeBankName?: string;
  invoiceNo?: string;
  payerRegisterNo?: string;
  checker?: string;
  taxAmount?: string;
  invoiceDate?: string;
  withoutTaxAmount?: string;
  invoiceAmount?: string;
  antiFakeCode?: string;
  payerName?: string;
  payee?: string;
  sumAmount?: string;
  payerBankName?: string;
  clerk?: string;
  payeeName?: string;
  payeeAddress?: string;
  invoiceCode?: string;
  static names(): { [key: string]: string } {
    return {
      payerAddress: 'PayerAddress',
      payeeRegisterNo: 'PayeeRegisterNo',
      payeeBankName: 'PayeeBankName',
      invoiceNo: 'InvoiceNo',
      payerRegisterNo: 'PayerRegisterNo',
      checker: 'Checker',
      taxAmount: 'TaxAmount',
      invoiceDate: 'InvoiceDate',
      withoutTaxAmount: 'WithoutTaxAmount',
      invoiceAmount: 'InvoiceAmount',
      antiFakeCode: 'AntiFakeCode',
      payerName: 'PayerName',
      payee: 'Payee',
      sumAmount: 'SumAmount',
      payerBankName: 'PayerBankName',
      clerk: 'Clerk',
      payeeName: 'PayeeName',
      payeeAddress: 'PayeeAddress',
      invoiceCode: 'InvoiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payerAddress: 'string',
      payeeRegisterNo: 'string',
      payeeBankName: 'string',
      invoiceNo: 'string',
      payerRegisterNo: 'string',
      checker: 'string',
      taxAmount: 'string',
      invoiceDate: 'string',
      withoutTaxAmount: 'string',
      invoiceAmount: 'string',
      antiFakeCode: 'string',
      payerName: 'string',
      payee: 'string',
      sumAmount: 'string',
      payerBankName: 'string',
      clerk: 'string',
      payeeName: 'string',
      payeeAddress: 'string',
      invoiceCode: 'string',
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

export class RecognizePassportMRZResponseBodyDataRegions extends $tea.Model {
  recognitionScore?: number;
  detectionScore?: number;
  name?: string;
  content?: string;
  bandBoxes?: number[];
  static names(): { [key: string]: string } {
    return {
      recognitionScore: 'RecognitionScore',
      detectionScore: 'DetectionScore',
      name: 'Name',
      content: 'Content',
      bandBoxes: 'BandBoxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recognitionScore: 'number',
      detectionScore: 'number',
      name: 'string',
      content: 'string',
      bandBoxes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportMRZResponseBodyData extends $tea.Model {
  regions?: RecognizePassportMRZResponseBodyDataRegions[];
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': RecognizePassportMRZResponseBodyDataRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketResponseBodyData extends $tea.Model {
  price?: number;
  destination?: string;
  departureStation?: string;
  date?: string;
  number?: string;
  seat?: string;
  name?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      destination: 'Destination',
      departureStation: 'DepartureStation',
      date: 'Date',
      number: 'Number',
      seat: 'Seat',
      name: 'Name',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      destination: 'string',
      departureStation: 'string',
      date: 'string',
      number: 'string',
      seat: 'string',
      name: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameResponseBodyDataSummary extends $tea.Model {
  brand?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameResponseBodyDataSignboardsTexts extends $tea.Model {
  type?: string;
  score?: number;
  tag?: string;
  label?: string;
  points?: number[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      score: 'Score',
      tag: 'Tag',
      label: 'Label',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      score: 'number',
      tag: 'string',
      label: 'string',
      points: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameResponseBodyDataSignboards extends $tea.Model {
  texts?: RecognizePoiNameResponseBodyDataSignboardsTexts[];
  static names(): { [key: string]: string } {
    return {
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      texts: { 'type': 'array', 'itemType': RecognizePoiNameResponseBodyDataSignboardsTexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameResponseBodyData extends $tea.Model {
  summary?: RecognizePoiNameResponseBodyDataSummary;
  signboards?: RecognizePoiNameResponseBodyDataSignboards[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      signboards: 'Signboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: RecognizePoiNameResponseBodyDataSummary,
      signboards: { 'type': 'array', 'itemType': RecognizePoiNameResponseBodyDataSignboards },
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

export class RecognizeQrCodeResponseBodyDataElementsResults extends $tea.Model {
  suggestion?: string;
  qrCodesData?: string[];
  label?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      qrCodesData: 'QrCodesData',
      label: 'Label',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      qrCodesData: { 'type': 'array', 'itemType': 'string' },
      label: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeQrCodeResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  taskId?: string;
  results?: RecognizeQrCodeResponseBodyDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      taskId: 'TaskId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      taskId: 'string',
      results: { 'type': 'array', 'itemType': RecognizeQrCodeResponseBodyDataElementsResults },
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

  async recognizeDrivingLicenseWithOptions(request: RecognizeDrivingLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeDrivingLicenseResponse>(await this.doRPCRequest("RecognizeDrivingLicense", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeDrivingLicenseResponse({}));
  }

  async recognizeDrivingLicense(request: RecognizeDrivingLicenseRequest): Promise<RecognizeDrivingLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDrivingLicenseWithOptions(request, runtime);
  }

  async recognizeDrivingLicenseAdvance(request: RecognizeDrivingLicenseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDrivingLicenseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeDrivingLicenseReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeDrivingLicenseResp = await this.recognizeDrivingLicenseWithOptions(recognizeDrivingLicenseReq, runtime);
    return recognizeDrivingLicenseResp;
  }

  async recognizeChinapassportWithOptions(request: RecognizeChinapassportRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeChinapassportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeChinapassportResponse>(await this.doRPCRequest("RecognizeChinapassport", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeChinapassportResponse({}));
  }

  async recognizeChinapassport(request: RecognizeChinapassportRequest): Promise<RecognizeChinapassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeChinapassportWithOptions(request, runtime);
  }

  async recognizeChinapassportAdvance(request: RecognizeChinapassportAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeChinapassportResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizeChinapassportReq = new RecognizeChinapassportRequest({ });
    OpenApiUtil.convert(request, recognizeChinapassportReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeChinapassportReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeChinapassportResp = await this.recognizeChinapassportWithOptions(recognizeChinapassportReq, runtime);
    return recognizeChinapassportResp;
  }

  async trimDocumentWithOptions(request: TrimDocumentRequest, runtime: $Util.RuntimeOptions): Promise<TrimDocumentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TrimDocumentResponse>(await this.doRPCRequest("TrimDocument", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new TrimDocumentResponse({}));
  }

  async trimDocument(request: TrimDocumentRequest): Promise<TrimDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.trimDocumentWithOptions(request, runtime);
  }

  async trimDocumentAdvance(request: TrimDocumentAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TrimDocumentResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let trimDocumentReq = new TrimDocumentRequest({ });
    OpenApiUtil.convert(request, trimDocumentReq);
    if (!Util.isUnset(request.fileURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.fileURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      trimDocumentReq.fileURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let trimDocumentResp = await this.trimDocumentWithOptions(trimDocumentReq, runtime);
    return trimDocumentResp;
  }

  async recognizeTableWithOptions(request: RecognizeTableRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeTableResponse>(await this.doRPCRequest("RecognizeTable", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeTableResponse({}));
  }

  async recognizeTable(request: RecognizeTableRequest): Promise<RecognizeTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTableWithOptions(request, runtime);
  }

  async recognizeTableAdvance(request: RecognizeTableAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTableResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTableReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeTableResp = await this.recognizeTableWithOptions(recognizeTableReq, runtime);
    return recognizeTableResp;
  }

  async recognizeIdentityCardWithOptions(request: RecognizeIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdentityCardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeIdentityCardResponse>(await this.doRPCRequest("RecognizeIdentityCard", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeIdentityCardResponse({}));
  }

  async recognizeIdentityCard(request: RecognizeIdentityCardRequest): Promise<RecognizeIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeIdentityCardWithOptions(request, runtime);
  }

  async recognizeIdentityCardAdvance(request: RecognizeIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIdentityCardResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeIdentityCardReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeIdentityCardResp = await this.recognizeIdentityCardWithOptions(recognizeIdentityCardReq, runtime);
    return recognizeIdentityCardResp;
  }

  async recognizeBusinessLicenseWithOptions(request: RecognizeBusinessLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeBusinessLicenseResponse>(await this.doRPCRequest("RecognizeBusinessLicense", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeBusinessLicenseResponse({}));
  }

  async recognizeBusinessLicense(request: RecognizeBusinessLicenseRequest): Promise<RecognizeBusinessLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusinessLicenseWithOptions(request, runtime);
  }

  async recognizeBusinessLicenseAdvance(request: RecognizeBusinessLicenseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessLicenseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeBusinessLicenseReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeBusinessLicenseResp = await this.recognizeBusinessLicenseWithOptions(recognizeBusinessLicenseReq, runtime);
    return recognizeBusinessLicenseResp;
  }

  async recognizeBankCardWithOptions(request: RecognizeBankCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeBankCardResponse>(await this.doRPCRequest("RecognizeBankCard", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeBankCardResponse({}));
  }

  async recognizeBankCard(request: RecognizeBankCardRequest): Promise<RecognizeBankCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBankCardWithOptions(request, runtime);
  }

  async recognizeBankCardAdvance(request: RecognizeBankCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBankCardResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeBankCardReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeBankCardResp = await this.recognizeBankCardWithOptions(recognizeBankCardReq, runtime);
    return recognizeBankCardResp;
  }

  async recognizeVerificationcodeWithOptions(request: RecognizeVerificationcodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVerificationcodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVerificationcodeResponse>(await this.doRPCRequest("RecognizeVerificationcode", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVerificationcodeResponse({}));
  }

  async recognizeVerificationcode(request: RecognizeVerificationcodeRequest): Promise<RecognizeVerificationcodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVerificationcodeWithOptions(request, runtime);
  }

  async recognizeVerificationcodeAdvance(request: RecognizeVerificationcodeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVerificationcodeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizeVerificationcodeReq = new RecognizeVerificationcodeRequest({ });
    OpenApiUtil.convert(request, recognizeVerificationcodeReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeVerificationcodeReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeVerificationcodeResp = await this.recognizeVerificationcodeWithOptions(recognizeVerificationcodeReq, runtime);
    return recognizeVerificationcodeResp;
  }

  async recognizeAccountPageWithOptions(request: RecognizeAccountPageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAccountPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeAccountPageResponse>(await this.doRPCRequest("RecognizeAccountPage", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeAccountPageResponse({}));
  }

  async recognizeAccountPage(request: RecognizeAccountPageRequest): Promise<RecognizeAccountPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAccountPageWithOptions(request, runtime);
  }

  async recognizeAccountPageAdvance(request: RecognizeAccountPageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAccountPageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizeAccountPageReq = new RecognizeAccountPageRequest({ });
    OpenApiUtil.convert(request, recognizeAccountPageReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeAccountPageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeAccountPageResp = await this.recognizeAccountPageWithOptions(recognizeAccountPageReq, runtime);
    return recognizeAccountPageResp;
  }

  async recognizeCharacterWithOptions(request: RecognizeCharacterRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCharacterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeCharacterResponse>(await this.doRPCRequest("RecognizeCharacter", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeCharacterResponse({}));
  }

  async recognizeCharacter(request: RecognizeCharacterRequest): Promise<RecognizeCharacterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeCharacterWithOptions(request, runtime);
  }

  async recognizeCharacterAdvance(request: RecognizeCharacterAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeCharacterResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeCharacterReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeCharacterResp = await this.recognizeCharacterWithOptions(recognizeCharacterReq, runtime);
    return recognizeCharacterResp;
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async recognizeTakeoutOrderWithOptions(request: RecognizeTakeoutOrderRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTakeoutOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeTakeoutOrderResponse>(await this.doRPCRequest("RecognizeTakeoutOrder", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeTakeoutOrderResponse({}));
  }

  async recognizeTakeoutOrder(request: RecognizeTakeoutOrderRequest): Promise<RecognizeTakeoutOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTakeoutOrderWithOptions(request, runtime);
  }

  async recognizeTakeoutOrderAdvance(request: RecognizeTakeoutOrderAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTakeoutOrderResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizeTakeoutOrderReq = new RecognizeTakeoutOrderRequest({ });
    OpenApiUtil.convert(request, recognizeTakeoutOrderReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTakeoutOrderReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeTakeoutOrderResp = await this.recognizeTakeoutOrderWithOptions(recognizeTakeoutOrderReq, runtime);
    return recognizeTakeoutOrderResp;
  }

  async recognizeBusinessCardWithOptions(request: RecognizeBusinessCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessCardResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeBusinessCardResponse>(await this.doRPCRequest("RecognizeBusinessCard", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeBusinessCardResponse({}));
  }

  async recognizeBusinessCard(request: RecognizeBusinessCardRequest): Promise<RecognizeBusinessCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusinessCardWithOptions(request, runtime);
  }

  async recognizeBusinessCardAdvance(request: RecognizeBusinessCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessCardResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizeBusinessCardReq = new RecognizeBusinessCardRequest({ });
    OpenApiUtil.convert(request, recognizeBusinessCardReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeBusinessCardReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeBusinessCardResp = await this.recognizeBusinessCardWithOptions(recognizeBusinessCardReq, runtime);
    return recognizeBusinessCardResp;
  }

  async detectCardScreenshotWithOptions(request: DetectCardScreenshotRequest, runtime: $Util.RuntimeOptions): Promise<DetectCardScreenshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectCardScreenshotResponse>(await this.doRPCRequest("DetectCardScreenshot", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectCardScreenshotResponse({}));
  }

  async detectCardScreenshot(request: DetectCardScreenshotRequest): Promise<DetectCardScreenshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectCardScreenshotWithOptions(request, runtime);
  }

  async detectCardScreenshotAdvance(request: DetectCardScreenshotAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectCardScreenshotResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let detectCardScreenshotReq = new DetectCardScreenshotRequest({ });
    OpenApiUtil.convert(request, detectCardScreenshotReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      detectCardScreenshotReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectCardScreenshotResp = await this.detectCardScreenshotWithOptions(detectCardScreenshotReq, runtime);
    return detectCardScreenshotResp;
  }

  async recognizeDriverLicenseWithOptions(request: RecognizeDriverLicenseRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDriverLicenseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeDriverLicenseResponse>(await this.doRPCRequest("RecognizeDriverLicense", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeDriverLicenseResponse({}));
  }

  async recognizeDriverLicense(request: RecognizeDriverLicenseRequest): Promise<RecognizeDriverLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeDriverLicenseWithOptions(request, runtime);
  }

  async recognizeDriverLicenseAdvance(request: RecognizeDriverLicenseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeDriverLicenseResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeDriverLicenseReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeDriverLicenseResp = await this.recognizeDriverLicenseWithOptions(recognizeDriverLicenseReq, runtime);
    return recognizeDriverLicenseResp;
  }

  async recognizeLicensePlateWithOptions(request: RecognizeLicensePlateRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLicensePlateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeLicensePlateResponse>(await this.doRPCRequest("RecognizeLicensePlate", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeLicensePlateResponse({}));
  }

  async recognizeLicensePlate(request: RecognizeLicensePlateRequest): Promise<RecognizeLicensePlateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLicensePlateWithOptions(request, runtime);
  }

  async recognizeLicensePlateAdvance(request: RecognizeLicensePlateAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLicensePlateResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeLicensePlateReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeLicensePlateResp = await this.recognizeLicensePlateWithOptions(recognizeLicensePlateReq, runtime);
    return recognizeLicensePlateResp;
  }

  async recognizeStampWithOptions(request: RecognizeStampRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeStampResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeStampResponse>(await this.doRPCRequest("RecognizeStamp", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeStampResponse({}));
  }

  async recognizeStamp(request: RecognizeStampRequest): Promise<RecognizeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeStampWithOptions(request, runtime);
  }

  async recognizeStampAdvance(request: RecognizeStampAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeStampResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizeStampReq = new RecognizeStampRequest({ });
    OpenApiUtil.convert(request, recognizeStampReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeStampReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeStampResp = await this.recognizeStampWithOptions(recognizeStampReq, runtime);
    return recognizeStampResp;
  }

  async recognizeTaxiInvoiceWithOptions(request: RecognizeTaxiInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeTaxiInvoiceResponse>(await this.doRPCRequest("RecognizeTaxiInvoice", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeTaxiInvoiceResponse({}));
  }

  async recognizeTaxiInvoice(request: RecognizeTaxiInvoiceRequest): Promise<RecognizeTaxiInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTaxiInvoiceWithOptions(request, runtime);
  }

  async recognizeTaxiInvoiceAdvance(request: RecognizeTaxiInvoiceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTaxiInvoiceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTaxiInvoiceReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeTaxiInvoiceResp = await this.recognizeTaxiInvoiceWithOptions(recognizeTaxiInvoiceReq, runtime);
    return recognizeTaxiInvoiceResp;
  }

  async recognizeVATInvoiceWithOptions(request: RecognizeVATInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVATInvoiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVATInvoiceResponse>(await this.doRPCRequest("RecognizeVATInvoice", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVATInvoiceResponse({}));
  }

  async recognizeVATInvoice(request: RecognizeVATInvoiceRequest): Promise<RecognizeVATInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVATInvoiceWithOptions(request, runtime);
  }

  async recognizeVATInvoiceAdvance(request: RecognizeVATInvoiceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVATInvoiceResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.fileURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeVATInvoiceReq.fileURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeVATInvoiceResp = await this.recognizeVATInvoiceWithOptions(recognizeVATInvoiceReq, runtime);
    return recognizeVATInvoiceResp;
  }

  async recognizePassportMRZWithOptions(request: RecognizePassportMRZRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePassportMRZResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizePassportMRZResponse>(await this.doRPCRequest("RecognizePassportMRZ", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizePassportMRZResponse({}));
  }

  async recognizePassportMRZ(request: RecognizePassportMRZRequest): Promise<RecognizePassportMRZResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePassportMRZWithOptions(request, runtime);
  }

  async recognizePassportMRZAdvance(request: RecognizePassportMRZAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePassportMRZResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizePassportMRZReq = new RecognizePassportMRZRequest({ });
    OpenApiUtil.convert(request, recognizePassportMRZReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizePassportMRZReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizePassportMRZResp = await this.recognizePassportMRZWithOptions(recognizePassportMRZReq, runtime);
    return recognizePassportMRZResp;
  }

  async recognizeTrainTicketWithOptions(request: RecognizeTrainTicketRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTrainTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeTrainTicketResponse>(await this.doRPCRequest("RecognizeTrainTicket", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeTrainTicketResponse({}));
  }

  async recognizeTrainTicket(request: RecognizeTrainTicketRequest): Promise<RecognizeTrainTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTrainTicketWithOptions(request, runtime);
  }

  async recognizeTrainTicketAdvance(request: RecognizeTrainTicketAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTrainTicketResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeTrainTicketReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeTrainTicketResp = await this.recognizeTrainTicketWithOptions(recognizeTrainTicketReq, runtime);
    return recognizeTrainTicketResp;
  }

  async recognizePoiNameWithOptions(request: RecognizePoiNameRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePoiNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizePoiNameResponse>(await this.doRPCRequest("RecognizePoiName", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizePoiNameResponse({}));
  }

  async recognizePoiName(request: RecognizePoiNameRequest): Promise<RecognizePoiNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePoiNameWithOptions(request, runtime);
  }

  async recognizePoiNameAdvance(request: RecognizePoiNameAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePoiNameResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
    let recognizePoiNameReq = new RecognizePoiNameRequest({ });
    OpenApiUtil.convert(request, recognizePoiNameReq);
    if (!Util.isUnset(request.imageURLObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizePoiNameReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizePoiNameResp = await this.recognizePoiNameWithOptions(recognizePoiNameReq, runtime);
    return recognizePoiNameResp;
  }

  async recognizeQrCodeWithOptions(request: RecognizeQrCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeQrCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeQrCodeResponse>(await this.doRPCRequest("RecognizeQrCode", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeQrCodeResponse({}));
  }

  async recognizeQrCode(request: RecognizeQrCodeRequest): Promise<RecognizeQrCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeQrCodeWithOptions(request, runtime);
  }

  async recognizeVINCodeWithOptions(request: RecognizeVINCodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVINCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVINCodeResponse>(await this.doRPCRequest("RecognizeVINCode", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVINCodeResponse({}));
  }

  async recognizeVINCode(request: RecognizeVINCodeRequest): Promise<RecognizeVINCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVINCodeWithOptions(request, runtime);
  }

  async recognizeVINCodeAdvance(request: RecognizeVINCodeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVINCodeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
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
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageURLObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.accessKeyId,
        policy: authResponse.encodedPolicy,
        signature: authResponse.signature,
        key: authResponse.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      recognizeVINCodeReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let recognizeVINCodeResp = await this.recognizeVINCodeWithOptions(recognizeVINCodeReq, runtime);
    return recognizeVINCodeResp;
  }

}
