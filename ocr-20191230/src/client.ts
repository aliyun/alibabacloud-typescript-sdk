// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import Array from '@alicloud/darabonba-array';
import Number from '@darabonba/number';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

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

export class DetectCardScreenshotResponseBody extends $tea.Model {
  data?: DetectCardScreenshotResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectCardScreenshotResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectCardScreenshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectCardScreenshotResponseBody,
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

export class RecognizeAccountPageResponseBody extends $tea.Model {
  data?: RecognizeAccountPageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeAccountPageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAccountPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeAccountPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeAccountPageResponseBody,
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

export class RecognizeBusinessCardResponseBody extends $tea.Model {
  data?: RecognizeBusinessCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeBusinessCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeBusinessCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeBusinessCardResponseBody,
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

export class RecognizeChinapassportResponseBody extends $tea.Model {
  data?: RecognizeChinapassportResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeChinapassportResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeChinapassportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeChinapassportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeChinapassportResponseBody,
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

export class RecognizeIndonesiaIdentityCardRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeIndonesiaIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeIndonesiaIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeIndonesiaIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeIndonesiaIdentityCardResponseBody,
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

export class RecognizeMalaysiaIdentityCardRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeMalaysiaIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeMalaysiaIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeMalaysiaIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeMalaysiaIdentityCardResponseBody,
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

export class RecognizePassportMRZResponseBody extends $tea.Model {
  data?: RecognizePassportMRZResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizePassportMRZResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportMRZResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizePassportMRZResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizePassportMRZResponseBody,
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

export class RecognizePoiNameResponseBody extends $tea.Model {
  data?: RecognizePoiNameResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizePoiNameResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePoiNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizePoiNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class RecognizeRussiaIdentityCardRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeRussiaIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeRussiaIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeRussiaIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeRussiaIdentityCardResponseBody,
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

export class RecognizeStampResponseBody extends $tea.Model {
  data?: RecognizeStampResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeStampResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeStampResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeStampResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeStampResponseBody,
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

export class RecognizeTakeoutOrderResponseBody extends $tea.Model {
  data?: RecognizeTakeoutOrderResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTakeoutOrderResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTakeoutOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTakeoutOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTakeoutOrderResponseBody,
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

export class RecognizeTurkeyIdentityCardRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeTurkeyIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTurkeyIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeTurkeyIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeTurkeyIdentityCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeUkraineIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeUkraineIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeUkraineIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeUkraineIdentityCardResponseBody,
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

export class RecognizeVerificationcodeResponseBody extends $tea.Model {
  data?: RecognizeVerificationcodeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVerificationcodeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVerificationcodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVerificationcodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVerificationcodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListRequest extends $tea.Model {
  params?: RecognizeVideoCastCrewListRequestParams[];
  registerUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      registerUrl: 'RegisterUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListRequestParams },
      registerUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequest extends $tea.Model {
  params?: RecognizeVideoCastCrewListAdvanceRequestParams[];
  registerUrl?: string;
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      registerUrl: 'RegisterUrl',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListAdvanceRequestParams },
      registerUrl: 'string',
      videoUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListShrinkRequest extends $tea.Model {
  paramsShrink?: string;
  registerUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      paramsShrink: 'Params',
      registerUrl: 'RegisterUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsShrink: 'string',
      registerUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBody extends $tea.Model {
  data?: RecognizeVideoCastCrewListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVideoCastCrewListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVideoCastCrewListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVideoCastCrewListResponseBody,
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

export class RecognizeVietnamIdentityCardRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBody extends $tea.Model {
  data?: RecognizeVietnamIdentityCardResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVietnamIdentityCardResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVietnamIdentityCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecognizeVietnamIdentityCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentRequest extends $tea.Model {
  fileType?: string;
  fileURL?: string;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      fileURL: 'FileURL',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      fileURL: 'string',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentAdvanceRequest extends $tea.Model {
  fileType?: string;
  fileURLObject?: Readable;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      fileURLObject: 'FileURL',
      outputType: 'OutputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      fileURLObject: 'Readable',
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentResponseBody extends $tea.Model {
  data?: TrimDocumentResponseBodyData;
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
      data: TrimDocumentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrimDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TrimDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCardScreenshotResponseBodyDataSpoofResultResultMap extends $tea.Model {
  screenScore?: number;
  screenThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      screenScore: 'ScreenScore',
      screenThreshold: 'ScreenThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenScore: 'number',
      screenThreshold: 'number',
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

export class RecognizeAccountPageResponseBodyDataInvalidStampAreas extends $tea.Model {
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

export class RecognizeAccountPageResponseBodyDataOtherStampAreas extends $tea.Model {
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

export class RecognizeAccountPageResponseBodyDataRegisterStampAreas extends $tea.Model {
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

export class RecognizeAccountPageResponseBodyDataTitleArea extends $tea.Model {
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

export class RecognizeAccountPageResponseBodyDataUndertakeStampAreas extends $tea.Model {
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

export class RecognizeAccountPageResponseBodyData extends $tea.Model {
  angle?: number;
  birthDate?: string;
  birthPlace?: string;
  gender?: string;
  IDNumber?: string;
  invalidStampAreas?: RecognizeAccountPageResponseBodyDataInvalidStampAreas[];
  name?: string;
  nationality?: string;
  nativePlace?: string;
  otherStampAreas?: RecognizeAccountPageResponseBodyDataOtherStampAreas[];
  registerStampAreas?: RecognizeAccountPageResponseBodyDataRegisterStampAreas[];
  relation?: string;
  titleArea?: RecognizeAccountPageResponseBodyDataTitleArea;
  undertakeStampAreas?: RecognizeAccountPageResponseBodyDataUndertakeStampAreas[];
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      birthDate: 'BirthDate',
      birthPlace: 'BirthPlace',
      gender: 'Gender',
      IDNumber: 'IDNumber',
      invalidStampAreas: 'InvalidStampAreas',
      name: 'Name',
      nationality: 'Nationality',
      nativePlace: 'NativePlace',
      otherStampAreas: 'OtherStampAreas',
      registerStampAreas: 'RegisterStampAreas',
      relation: 'Relation',
      titleArea: 'TitleArea',
      undertakeStampAreas: 'UndertakeStampAreas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      birthDate: 'string',
      birthPlace: 'string',
      gender: 'string',
      IDNumber: 'string',
      invalidStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataInvalidStampAreas },
      name: 'string',
      nationality: 'string',
      nativePlace: 'string',
      otherStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataOtherStampAreas },
      registerStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataRegisterStampAreas },
      relation: 'string',
      titleArea: RecognizeAccountPageResponseBodyDataTitleArea,
      undertakeStampAreas: { 'type': 'array', 'itemType': RecognizeAccountPageResponseBodyDataUndertakeStampAreas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBodyData extends $tea.Model {
  bankName?: string;
  cardNumber?: string;
  validDate?: string;
  static names(): { [key: string]: string } {
    return {
      bankName: 'BankName',
      cardNumber: 'CardNumber',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankName: 'string',
      cardNumber: 'string',
      validDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessCardResponseBodyData extends $tea.Model {
  addresses?: string[];
  cellPhoneNumbers?: string[];
  companies?: string[];
  departments?: string[];
  emails?: string[];
  name?: string;
  officePhoneNumbers?: string[];
  titles?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      cellPhoneNumbers: 'CellPhoneNumbers',
      companies: 'Companies',
      departments: 'Departments',
      emails: 'Emails',
      name: 'Name',
      officePhoneNumbers: 'OfficePhoneNumbers',
      titles: 'Titles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      cellPhoneNumbers: { 'type': 'array', 'itemType': 'string' },
      companies: { 'type': 'array', 'itemType': 'string' },
      departments: { 'type': 'array', 'itemType': 'string' },
      emails: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      officePhoneNumbers: { 'type': 'array', 'itemType': 'string' },
      titles: { 'type': 'array', 'itemType': 'string' },
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

export class RecognizeChinapassportResponseBodyData extends $tea.Model {
  authority?: string;
  birthDate?: string;
  birthDay?: string;
  birthPlace?: string;
  birthPlaceRaw?: string;
  country?: string;
  expiryDate?: string;
  expiryDay?: string;
  issueDate?: string;
  issuePlace?: string;
  issuePlaceRaw?: string;
  lineOne?: string;
  lineZero?: string;
  name?: string;
  nameChinese?: string;
  nameChineseRaw?: string;
  passportNo?: string;
  personId?: string;
  sex?: string;
  sourceCountry?: string;
  success?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      birthDate: 'BirthDate',
      birthDay: 'BirthDay',
      birthPlace: 'BirthPlace',
      birthPlaceRaw: 'BirthPlaceRaw',
      country: 'Country',
      expiryDate: 'ExpiryDate',
      expiryDay: 'ExpiryDay',
      issueDate: 'IssueDate',
      issuePlace: 'IssuePlace',
      issuePlaceRaw: 'IssuePlaceRaw',
      lineOne: 'LineOne',
      lineZero: 'LineZero',
      name: 'Name',
      nameChinese: 'NameChinese',
      nameChineseRaw: 'NameChineseRaw',
      passportNo: 'PassportNo',
      personId: 'PersonId',
      sex: 'Sex',
      sourceCountry: 'SourceCountry',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      birthDate: 'string',
      birthDay: 'string',
      birthPlace: 'string',
      birthPlaceRaw: 'string',
      country: 'string',
      expiryDate: 'string',
      expiryDay: 'string',
      issueDate: 'string',
      issuePlace: 'string',
      issuePlaceRaw: 'string',
      lineOne: 'string',
      lineZero: 'string',
      name: 'string',
      nameChinese: 'string',
      nameChineseRaw: 'string',
      passportNo: 'string',
      personId: 'string',
      sex: 'string',
      sourceCountry: 'string',
      success: 'boolean',
      type: 'string',
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
  endDate?: string;
  gender?: string;
  issueDate?: string;
  issueUnit?: string;
  licenseNumber?: string;
  name?: string;
  startDate?: string;
  vehicleType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      endDate: 'EndDate',
      gender: 'Gender',
      issueDate: 'IssueDate',
      issueUnit: 'IssueUnit',
      licenseNumber: 'LicenseNumber',
      name: 'Name',
      startDate: 'StartDate',
      vehicleType: 'VehicleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      endDate: 'string',
      gender: 'string',
      issueDate: 'string',
      issueUnit: 'string',
      licenseNumber: 'string',
      name: 'string',
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressFifthLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressFifthLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFifthLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataAddressFifthLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressFirstLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFirstLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataAddressFirstLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressFourthLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressFourthLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFourthLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataAddressFourthLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressSecondLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressSecondLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataAddressSecondLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressThirdLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataAddressThirdLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressThirdLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataAddressThirdLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataBirthDateKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataBirthDate extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataBirthDateKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataBirthDateKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataBirthPlaceKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataBirthPlace extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataBirthPlaceKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataBirthPlaceKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataCardBoxKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataCardBox extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataCardBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataCardBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataExpiryDateKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataExpiryDate extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataExpiryDateKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataExpiryDateKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataGenderKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataGender extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataGenderKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataGenderKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataHeightKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataHeight extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataHeightKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataHeightKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataIdNumberKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataIdNumber extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataIdNumberKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataIdNumberKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataLicenseNumberKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataLicenseNumber extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataLicenseNumberKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataLicenseNumberKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataMaritalStatusKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataMaritalStatus extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataMaritalStatusKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataMaritalStatusKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataNameFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataNameFirstLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataNameFirstLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataNameFirstLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataNameSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataNameSecondLine extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataNameSecondLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataNameSecondLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataNationalityKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataNationality extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataNationalityKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataNationalityKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataOccupationKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataOccupation extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataOccupationKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataOccupationKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataPortraitBoxKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataPortraitBox extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataPortraitBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataPortraitBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataProvinceKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataProvince extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataProvinceKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataProvinceKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataReligionKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataReligion extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataReligionKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataReligionKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyDataSexKeyPoints extends $tea.Model {
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

export class RecognizeIndonesiaIdentityCardResponseBodyDataSex extends $tea.Model {
  keyPoints?: RecognizeIndonesiaIdentityCardResponseBodyDataSexKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeIndonesiaIdentityCardResponseBodyDataSexKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIndonesiaIdentityCardResponseBodyData extends $tea.Model {
  addressFifthLine?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFifthLine;
  addressFirstLine?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFirstLine;
  addressFourthLine?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFourthLine;
  addressSecondLine?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressSecondLine;
  addressThirdLine?: RecognizeIndonesiaIdentityCardResponseBodyDataAddressThirdLine;
  birthDate?: RecognizeIndonesiaIdentityCardResponseBodyDataBirthDate;
  birthPlace?: RecognizeIndonesiaIdentityCardResponseBodyDataBirthPlace;
  cardBox?: RecognizeIndonesiaIdentityCardResponseBodyDataCardBox;
  expiryDate?: RecognizeIndonesiaIdentityCardResponseBodyDataExpiryDate;
  gender?: RecognizeIndonesiaIdentityCardResponseBodyDataGender;
  height?: RecognizeIndonesiaIdentityCardResponseBodyDataHeight;
  idNumber?: RecognizeIndonesiaIdentityCardResponseBodyDataIdNumber;
  licenseNumber?: RecognizeIndonesiaIdentityCardResponseBodyDataLicenseNumber;
  maritalStatus?: RecognizeIndonesiaIdentityCardResponseBodyDataMaritalStatus;
  nameFirstLine?: RecognizeIndonesiaIdentityCardResponseBodyDataNameFirstLine;
  nameSecondLine?: RecognizeIndonesiaIdentityCardResponseBodyDataNameSecondLine;
  nationality?: RecognizeIndonesiaIdentityCardResponseBodyDataNationality;
  occupation?: RecognizeIndonesiaIdentityCardResponseBodyDataOccupation;
  portraitBox?: RecognizeIndonesiaIdentityCardResponseBodyDataPortraitBox;
  province?: RecognizeIndonesiaIdentityCardResponseBodyDataProvince;
  religion?: RecognizeIndonesiaIdentityCardResponseBodyDataReligion;
  sex?: RecognizeIndonesiaIdentityCardResponseBodyDataSex;
  static names(): { [key: string]: string } {
    return {
      addressFifthLine: 'AddressFifthLine',
      addressFirstLine: 'AddressFirstLine',
      addressFourthLine: 'AddressFourthLine',
      addressSecondLine: 'AddressSecondLine',
      addressThirdLine: 'AddressThirdLine',
      birthDate: 'BirthDate',
      birthPlace: 'BirthPlace',
      cardBox: 'CardBox',
      expiryDate: 'ExpiryDate',
      gender: 'Gender',
      height: 'Height',
      idNumber: 'IdNumber',
      licenseNumber: 'LicenseNumber',
      maritalStatus: 'MaritalStatus',
      nameFirstLine: 'NameFirstLine',
      nameSecondLine: 'NameSecondLine',
      nationality: 'Nationality',
      occupation: 'Occupation',
      portraitBox: 'PortraitBox',
      province: 'Province',
      religion: 'Religion',
      sex: 'Sex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFifthLine: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFifthLine,
      addressFirstLine: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFirstLine,
      addressFourthLine: RecognizeIndonesiaIdentityCardResponseBodyDataAddressFourthLine,
      addressSecondLine: RecognizeIndonesiaIdentityCardResponseBodyDataAddressSecondLine,
      addressThirdLine: RecognizeIndonesiaIdentityCardResponseBodyDataAddressThirdLine,
      birthDate: RecognizeIndonesiaIdentityCardResponseBodyDataBirthDate,
      birthPlace: RecognizeIndonesiaIdentityCardResponseBodyDataBirthPlace,
      cardBox: RecognizeIndonesiaIdentityCardResponseBodyDataCardBox,
      expiryDate: RecognizeIndonesiaIdentityCardResponseBodyDataExpiryDate,
      gender: RecognizeIndonesiaIdentityCardResponseBodyDataGender,
      height: RecognizeIndonesiaIdentityCardResponseBodyDataHeight,
      idNumber: RecognizeIndonesiaIdentityCardResponseBodyDataIdNumber,
      licenseNumber: RecognizeIndonesiaIdentityCardResponseBodyDataLicenseNumber,
      maritalStatus: RecognizeIndonesiaIdentityCardResponseBodyDataMaritalStatus,
      nameFirstLine: RecognizeIndonesiaIdentityCardResponseBodyDataNameFirstLine,
      nameSecondLine: RecognizeIndonesiaIdentityCardResponseBodyDataNameSecondLine,
      nationality: RecognizeIndonesiaIdentityCardResponseBodyDataNationality,
      occupation: RecognizeIndonesiaIdentityCardResponseBodyDataOccupation,
      portraitBox: RecognizeIndonesiaIdentityCardResponseBodyDataPortraitBox,
      province: RecognizeIndonesiaIdentityCardResponseBodyDataProvince,
      religion: RecognizeIndonesiaIdentityCardResponseBodyDataReligion,
      sex: RecognizeIndonesiaIdentityCardResponseBodyDataSex,
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressFifthLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressFifthLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFifthLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataAddressFifthLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressFirstLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFirstLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataAddressFirstLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressFourthLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressFourthLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFourthLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataAddressFourthLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressSecondLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressSecondLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataAddressSecondLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressThirdLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataAddressThirdLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressThirdLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataAddressThirdLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataCardBoxKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataCardBox extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataCardBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataCardBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataDriveClassKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataDriveClass extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataDriveClassKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataDriveClassKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataExpiryDateKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataExpiryDate extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataExpiryDateKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataExpiryDateKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataIdNumberKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataIdNumber extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataIdNumberKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataIdNumberKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataIssueDateKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataIssueDate extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataIssueDateKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataIssueDateKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataNameFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataNameFirstLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataNameFirstLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataNameFirstLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataNameSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataNameSecondLine extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataNameSecondLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataNameSecondLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataNationalityKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataNationality extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataNationalityKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataNationalityKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataPortraitBoxKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataPortraitBox extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataPortraitBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataPortraitBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyDataSexKeyPoints extends $tea.Model {
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

export class RecognizeMalaysiaIdentityCardResponseBodyDataSex extends $tea.Model {
  keyPoints?: RecognizeMalaysiaIdentityCardResponseBodyDataSexKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeMalaysiaIdentityCardResponseBodyDataSexKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeMalaysiaIdentityCardResponseBodyData extends $tea.Model {
  addressFifthLine?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFifthLine;
  addressFirstLine?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFirstLine;
  addressFourthLine?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFourthLine;
  addressSecondLine?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressSecondLine;
  addressThirdLine?: RecognizeMalaysiaIdentityCardResponseBodyDataAddressThirdLine;
  cardBox?: RecognizeMalaysiaIdentityCardResponseBodyDataCardBox;
  driveClass?: RecognizeMalaysiaIdentityCardResponseBodyDataDriveClass;
  expiryDate?: RecognizeMalaysiaIdentityCardResponseBodyDataExpiryDate;
  idNumber?: RecognizeMalaysiaIdentityCardResponseBodyDataIdNumber;
  issueDate?: RecognizeMalaysiaIdentityCardResponseBodyDataIssueDate;
  nameFirstLine?: RecognizeMalaysiaIdentityCardResponseBodyDataNameFirstLine;
  nameSecondLine?: RecognizeMalaysiaIdentityCardResponseBodyDataNameSecondLine;
  nationality?: RecognizeMalaysiaIdentityCardResponseBodyDataNationality;
  portraitBox?: RecognizeMalaysiaIdentityCardResponseBodyDataPortraitBox;
  sex?: RecognizeMalaysiaIdentityCardResponseBodyDataSex;
  static names(): { [key: string]: string } {
    return {
      addressFifthLine: 'AddressFifthLine',
      addressFirstLine: 'AddressFirstLine',
      addressFourthLine: 'AddressFourthLine',
      addressSecondLine: 'AddressSecondLine',
      addressThirdLine: 'AddressThirdLine',
      cardBox: 'CardBox',
      driveClass: 'DriveClass',
      expiryDate: 'ExpiryDate',
      idNumber: 'IdNumber',
      issueDate: 'IssueDate',
      nameFirstLine: 'NameFirstLine',
      nameSecondLine: 'NameSecondLine',
      nationality: 'Nationality',
      portraitBox: 'PortraitBox',
      sex: 'Sex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFifthLine: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFifthLine,
      addressFirstLine: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFirstLine,
      addressFourthLine: RecognizeMalaysiaIdentityCardResponseBodyDataAddressFourthLine,
      addressSecondLine: RecognizeMalaysiaIdentityCardResponseBodyDataAddressSecondLine,
      addressThirdLine: RecognizeMalaysiaIdentityCardResponseBodyDataAddressThirdLine,
      cardBox: RecognizeMalaysiaIdentityCardResponseBodyDataCardBox,
      driveClass: RecognizeMalaysiaIdentityCardResponseBodyDataDriveClass,
      expiryDate: RecognizeMalaysiaIdentityCardResponseBodyDataExpiryDate,
      idNumber: RecognizeMalaysiaIdentityCardResponseBodyDataIdNumber,
      issueDate: RecognizeMalaysiaIdentityCardResponseBodyDataIssueDate,
      nameFirstLine: RecognizeMalaysiaIdentityCardResponseBodyDataNameFirstLine,
      nameSecondLine: RecognizeMalaysiaIdentityCardResponseBodyDataNameSecondLine,
      nationality: RecognizeMalaysiaIdentityCardResponseBodyDataNationality,
      portraitBox: RecognizeMalaysiaIdentityCardResponseBodyDataPortraitBox,
      sex: RecognizeMalaysiaIdentityCardResponseBodyDataSex,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePassportMRZResponseBodyDataRegions extends $tea.Model {
  bandBoxes?: number[];
  content?: string;
  detectionScore?: number;
  name?: string;
  recognitionScore?: number;
  static names(): { [key: string]: string } {
    return {
      bandBoxes: 'BandBoxes',
      content: 'Content',
      detectionScore: 'DetectionScore',
      name: 'Name',
      recognitionScore: 'RecognitionScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandBoxes: { 'type': 'array', 'itemType': 'number' },
      content: 'string',
      detectionScore: 'number',
      name: 'string',
      recognitionScore: 'number',
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

export class RecognizePoiNameResponseBodyDataSignboardsTexts extends $tea.Model {
  label?: string;
  points?: number[];
  score?: number;
  tag?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      points: 'Points',
      score: 'Score',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      points: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      tag: 'string',
      type: 'string',
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

export class RecognizePoiNameResponseBodyData extends $tea.Model {
  signboards?: RecognizePoiNameResponseBodyDataSignboards[];
  summary?: RecognizePoiNameResponseBodyDataSummary;
  static names(): { [key: string]: string } {
    return {
      signboards: 'Signboards',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signboards: { 'type': 'array', 'itemType': RecognizePoiNameResponseBodyDataSignboards },
      summary: RecognizePoiNameResponseBodyDataSummary,
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

export class RecognizeRussiaIdentityCardResponseBodyDataBirthDateKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataBirthDate extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataBirthDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataBirthDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceFirstLine extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceFirstLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceFirstLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceSecondLine extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceSecondLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceSecondLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceThirdLineKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceThirdLine extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceThirdLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceThirdLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataCardBoxKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataCardBox extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataCardBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataCardBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataGivenNameKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataGivenName extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataGivenNameKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataGivenNameKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataIdNumberKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataIdNumber extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataIdNumberKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataIdNumberKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataPaternalNameKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataPaternalName extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataPaternalNameKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataPaternalNameKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataPortraitBoxKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataPortraitBox extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataPortraitBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataPortraitBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataSexKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataSex extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataSexKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataSexKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataSurnameFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataSurnameFirstLine extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataSurnameFirstLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataSurnameFirstLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyDataSurnameSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeRussiaIdentityCardResponseBodyDataSurnameSecondLine extends $tea.Model {
  keyPoints?: RecognizeRussiaIdentityCardResponseBodyDataSurnameSecondLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeRussiaIdentityCardResponseBodyDataSurnameSecondLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeRussiaIdentityCardResponseBodyData extends $tea.Model {
  birthDate?: RecognizeRussiaIdentityCardResponseBodyDataBirthDate;
  birthPlaceFirstLine?: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceFirstLine;
  birthPlaceSecondLine?: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceSecondLine;
  birthPlaceThirdLine?: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceThirdLine;
  cardBox?: RecognizeRussiaIdentityCardResponseBodyDataCardBox;
  givenName?: RecognizeRussiaIdentityCardResponseBodyDataGivenName;
  idNumber?: RecognizeRussiaIdentityCardResponseBodyDataIdNumber;
  paternalName?: RecognizeRussiaIdentityCardResponseBodyDataPaternalName;
  portraitBox?: RecognizeRussiaIdentityCardResponseBodyDataPortraitBox;
  sex?: RecognizeRussiaIdentityCardResponseBodyDataSex;
  surnameFirstLine?: RecognizeRussiaIdentityCardResponseBodyDataSurnameFirstLine;
  surnameSecondLine?: RecognizeRussiaIdentityCardResponseBodyDataSurnameSecondLine;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'BirthDate',
      birthPlaceFirstLine: 'BirthPlaceFirstLine',
      birthPlaceSecondLine: 'BirthPlaceSecondLine',
      birthPlaceThirdLine: 'BirthPlaceThirdLine',
      cardBox: 'CardBox',
      givenName: 'GivenName',
      idNumber: 'IdNumber',
      paternalName: 'PaternalName',
      portraitBox: 'PortraitBox',
      sex: 'Sex',
      surnameFirstLine: 'SurnameFirstLine',
      surnameSecondLine: 'SurnameSecondLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: RecognizeRussiaIdentityCardResponseBodyDataBirthDate,
      birthPlaceFirstLine: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceFirstLine,
      birthPlaceSecondLine: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceSecondLine,
      birthPlaceThirdLine: RecognizeRussiaIdentityCardResponseBodyDataBirthPlaceThirdLine,
      cardBox: RecognizeRussiaIdentityCardResponseBodyDataCardBox,
      givenName: RecognizeRussiaIdentityCardResponseBodyDataGivenName,
      idNumber: RecognizeRussiaIdentityCardResponseBodyDataIdNumber,
      paternalName: RecognizeRussiaIdentityCardResponseBodyDataPaternalName,
      portraitBox: RecognizeRussiaIdentityCardResponseBodyDataPortraitBox,
      sex: RecognizeRussiaIdentityCardResponseBodyDataSex,
      surnameFirstLine: RecognizeRussiaIdentityCardResponseBodyDataSurnameFirstLine,
      surnameSecondLine: RecognizeRussiaIdentityCardResponseBodyDataSurnameSecondLine,
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

export class RecognizeStampResponseBodyDataResultsRoi extends $tea.Model {
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

export class RecognizeStampResponseBodyDataResults extends $tea.Model {
  generalText?: RecognizeStampResponseBodyDataResultsGeneralText[];
  roi?: RecognizeStampResponseBodyDataResultsRoi;
  text?: RecognizeStampResponseBodyDataResultsText;
  static names(): { [key: string]: string } {
    return {
      generalText: 'GeneralText',
      roi: 'Roi',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generalText: { 'type': 'array', 'itemType': RecognizeStampResponseBodyDataResultsGeneralText },
      roi: RecognizeStampResponseBodyDataResultsRoi,
      text: RecognizeStampResponseBodyDataResultsText,
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

export class RecognizeTakeoutOrderResponseBodyDataElements extends $tea.Model {
  boxes?: number[];
  name?: string;
  score?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      name: 'Name',
      score: 'Score',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      score: 'number',
      value: 'string',
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

export class RecognizeTurkeyIdentityCardResponseBodyDataAuxiliaryToolsKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataAuxiliaryTools extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataAuxiliaryToolsKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataAuxiliaryToolsKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataBirthDateKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataBirthDate extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataBirthDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataBirthDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataBirthPlaceKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataBirthPlace extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataBirthPlaceKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataBirthPlaceKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataBloodTypeKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataBloodType extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataBloodTypeKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataBloodTypeKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataCardBoxKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataCardBox extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataCardBoxKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataCardBoxKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataCiltKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataCilt extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataCiltKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataCiltKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataDocumentNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataDocumentNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataDocumentNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataDocumentNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataDriveClassKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataDriveClass extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataDriveClassKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataDriveClassKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataDueDateKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataDueDate extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataDueDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataDueDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataDuzenleyenKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataDuzenleyen extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataDuzenleyenKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataDuzenleyenKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataEntryNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataEntryNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataEntryNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataEntryNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataExpiryDateKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataExpiryDate extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataExpiryDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataExpiryDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataFatherNameKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataFatherName extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataFatherNameKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataFatherNameKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataForeignersIdKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataForeignersId extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataForeignersIdKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataForeignersIdKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataGenderKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataGender extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataGenderKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataGenderKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataGivenNameKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataGivenName extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataGivenNameKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataGivenNameKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataIdNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataIdNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataIdNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataIdNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataIssueByKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataIssueBy extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataIssueByKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataIssueByKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataIssueCountyKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataIssueCounty extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataIssueCountyKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataIssueCountyKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataIssueDateKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataIssueDate extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataIssueDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataIssueDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataIssuePlaceKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataIssuePlace extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataIssuePlaceKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataIssuePlaceKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataKutukKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataKutuk extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataKutukKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataKutukKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataLicenseNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataLicenseNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataLicenseNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataLicenseNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataMaritalStatusKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataMaritalStatus extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataMaritalStatusKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataMaritalStatusKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataMotherNameKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataMotherName extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataMotherNameKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataMotherNameKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataNameKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataName extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataNameKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataNameKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataNationalityKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataNationality extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataNationalityKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataNationalityKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataNeighborhoodVillageKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataNeighborhoodVillage extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataNeighborhoodVillageKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataNeighborhoodVillageKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataPageNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataPageNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataPageNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataPageNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataPassportNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataPassportNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataPassportNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataPassportNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataPortraitBoxKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataPortraitBox extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataPortraitBoxKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataPortraitBoxKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataProvinceKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataProvince extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataProvinceKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataProvinceKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataProvinceOfResidenceKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataProvinceOfResidence extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataProvinceOfResidenceKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataProvinceOfResidenceKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataReasonOfIssueKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataReasonOfIssue extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataReasonOfIssueKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataReasonOfIssueKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataRegisterNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataRegisterNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataRegisterNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataRegisterNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataReligionKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataReligion extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataReligionKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataReligionKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataSayfaKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataSayfa extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataSayfaKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataSayfaKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataSeriKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataSeri extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataSeriKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataSeriKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataSexKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataSex extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataSexKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataSexKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataSurnameKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataSurname extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataSurnameKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataSurnameKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataTypeOfResidencePermitKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataTypeOfResidencePermit extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataTypeOfResidencePermitKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataTypeOfResidencePermitKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataValidUntilKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataValidUntil extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataValidUntilKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataValidUntilKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataVillageKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataVillage extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataVillageKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataVillageKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyDataVolumeNumberKeyPoints extends $tea.Model {
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

export class RecognizeTurkeyIdentityCardResponseBodyDataVolumeNumber extends $tea.Model {
  keyPoints?: RecognizeTurkeyIdentityCardResponseBodyDataVolumeNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeTurkeyIdentityCardResponseBodyDataVolumeNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTurkeyIdentityCardResponseBodyData extends $tea.Model {
  auxiliaryTools?: RecognizeTurkeyIdentityCardResponseBodyDataAuxiliaryTools;
  birthDate?: RecognizeTurkeyIdentityCardResponseBodyDataBirthDate;
  birthPlace?: RecognizeTurkeyIdentityCardResponseBodyDataBirthPlace;
  bloodType?: RecognizeTurkeyIdentityCardResponseBodyDataBloodType;
  cardBox?: RecognizeTurkeyIdentityCardResponseBodyDataCardBox;
  cilt?: RecognizeTurkeyIdentityCardResponseBodyDataCilt;
  documentNumber?: RecognizeTurkeyIdentityCardResponseBodyDataDocumentNumber;
  driveClass?: RecognizeTurkeyIdentityCardResponseBodyDataDriveClass;
  dueDate?: RecognizeTurkeyIdentityCardResponseBodyDataDueDate;
  duzenleyen?: RecognizeTurkeyIdentityCardResponseBodyDataDuzenleyen;
  entryNumber?: RecognizeTurkeyIdentityCardResponseBodyDataEntryNumber;
  expiryDate?: RecognizeTurkeyIdentityCardResponseBodyDataExpiryDate;
  fatherName?: RecognizeTurkeyIdentityCardResponseBodyDataFatherName;
  foreignersId?: RecognizeTurkeyIdentityCardResponseBodyDataForeignersId;
  gender?: RecognizeTurkeyIdentityCardResponseBodyDataGender;
  givenName?: RecognizeTurkeyIdentityCardResponseBodyDataGivenName;
  idNumber?: RecognizeTurkeyIdentityCardResponseBodyDataIdNumber;
  issueBy?: RecognizeTurkeyIdentityCardResponseBodyDataIssueBy;
  issueCounty?: RecognizeTurkeyIdentityCardResponseBodyDataIssueCounty;
  issueDate?: RecognizeTurkeyIdentityCardResponseBodyDataIssueDate;
  issuePlace?: RecognizeTurkeyIdentityCardResponseBodyDataIssuePlace;
  kutuk?: RecognizeTurkeyIdentityCardResponseBodyDataKutuk;
  licenseNumber?: RecognizeTurkeyIdentityCardResponseBodyDataLicenseNumber;
  maritalStatus?: RecognizeTurkeyIdentityCardResponseBodyDataMaritalStatus;
  motherName?: RecognizeTurkeyIdentityCardResponseBodyDataMotherName;
  name?: RecognizeTurkeyIdentityCardResponseBodyDataName;
  nationality?: RecognizeTurkeyIdentityCardResponseBodyDataNationality;
  neighborhoodVillage?: RecognizeTurkeyIdentityCardResponseBodyDataNeighborhoodVillage;
  pageNumber?: RecognizeTurkeyIdentityCardResponseBodyDataPageNumber;
  passportNumber?: RecognizeTurkeyIdentityCardResponseBodyDataPassportNumber;
  portraitBox?: RecognizeTurkeyIdentityCardResponseBodyDataPortraitBox;
  province?: RecognizeTurkeyIdentityCardResponseBodyDataProvince;
  provinceOfResidence?: RecognizeTurkeyIdentityCardResponseBodyDataProvinceOfResidence;
  reasonOfIssue?: RecognizeTurkeyIdentityCardResponseBodyDataReasonOfIssue;
  registerNumber?: RecognizeTurkeyIdentityCardResponseBodyDataRegisterNumber;
  religion?: RecognizeTurkeyIdentityCardResponseBodyDataReligion;
  sayfa?: RecognizeTurkeyIdentityCardResponseBodyDataSayfa;
  seri?: RecognizeTurkeyIdentityCardResponseBodyDataSeri;
  sex?: RecognizeTurkeyIdentityCardResponseBodyDataSex;
  surname?: RecognizeTurkeyIdentityCardResponseBodyDataSurname;
  typeOfResidencePermit?: RecognizeTurkeyIdentityCardResponseBodyDataTypeOfResidencePermit;
  validUntil?: RecognizeTurkeyIdentityCardResponseBodyDataValidUntil;
  village?: RecognizeTurkeyIdentityCardResponseBodyDataVillage;
  volumeNumber?: RecognizeTurkeyIdentityCardResponseBodyDataVolumeNumber;
  static names(): { [key: string]: string } {
    return {
      auxiliaryTools: 'AuxiliaryTools',
      birthDate: 'BirthDate',
      birthPlace: 'BirthPlace',
      bloodType: 'BloodType',
      cardBox: 'CardBox',
      cilt: 'Cilt',
      documentNumber: 'DocumentNumber',
      driveClass: 'DriveClass',
      dueDate: 'DueDate',
      duzenleyen: 'Duzenleyen',
      entryNumber: 'EntryNumber',
      expiryDate: 'ExpiryDate',
      fatherName: 'FatherName',
      foreignersId: 'ForeignersId',
      gender: 'Gender',
      givenName: 'GivenName',
      idNumber: 'IdNumber',
      issueBy: 'IssueBy',
      issueCounty: 'IssueCounty',
      issueDate: 'IssueDate',
      issuePlace: 'IssuePlace',
      kutuk: 'Kutuk',
      licenseNumber: 'LicenseNumber',
      maritalStatus: 'MaritalStatus',
      motherName: 'MotherName',
      name: 'Name',
      nationality: 'Nationality',
      neighborhoodVillage: 'NeighborhoodVillage',
      pageNumber: 'PageNumber',
      passportNumber: 'PassportNumber',
      portraitBox: 'PortraitBox',
      province: 'Province',
      provinceOfResidence: 'ProvinceOfResidence',
      reasonOfIssue: 'ReasonOfIssue',
      registerNumber: 'RegisterNumber',
      religion: 'Religion',
      sayfa: 'Sayfa',
      seri: 'Seri',
      sex: 'Sex',
      surname: 'Surname',
      typeOfResidencePermit: 'TypeOfResidencePermit',
      validUntil: 'ValidUntil',
      village: 'Village',
      volumeNumber: 'VolumeNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryTools: RecognizeTurkeyIdentityCardResponseBodyDataAuxiliaryTools,
      birthDate: RecognizeTurkeyIdentityCardResponseBodyDataBirthDate,
      birthPlace: RecognizeTurkeyIdentityCardResponseBodyDataBirthPlace,
      bloodType: RecognizeTurkeyIdentityCardResponseBodyDataBloodType,
      cardBox: RecognizeTurkeyIdentityCardResponseBodyDataCardBox,
      cilt: RecognizeTurkeyIdentityCardResponseBodyDataCilt,
      documentNumber: RecognizeTurkeyIdentityCardResponseBodyDataDocumentNumber,
      driveClass: RecognizeTurkeyIdentityCardResponseBodyDataDriveClass,
      dueDate: RecognizeTurkeyIdentityCardResponseBodyDataDueDate,
      duzenleyen: RecognizeTurkeyIdentityCardResponseBodyDataDuzenleyen,
      entryNumber: RecognizeTurkeyIdentityCardResponseBodyDataEntryNumber,
      expiryDate: RecognizeTurkeyIdentityCardResponseBodyDataExpiryDate,
      fatherName: RecognizeTurkeyIdentityCardResponseBodyDataFatherName,
      foreignersId: RecognizeTurkeyIdentityCardResponseBodyDataForeignersId,
      gender: RecognizeTurkeyIdentityCardResponseBodyDataGender,
      givenName: RecognizeTurkeyIdentityCardResponseBodyDataGivenName,
      idNumber: RecognizeTurkeyIdentityCardResponseBodyDataIdNumber,
      issueBy: RecognizeTurkeyIdentityCardResponseBodyDataIssueBy,
      issueCounty: RecognizeTurkeyIdentityCardResponseBodyDataIssueCounty,
      issueDate: RecognizeTurkeyIdentityCardResponseBodyDataIssueDate,
      issuePlace: RecognizeTurkeyIdentityCardResponseBodyDataIssuePlace,
      kutuk: RecognizeTurkeyIdentityCardResponseBodyDataKutuk,
      licenseNumber: RecognizeTurkeyIdentityCardResponseBodyDataLicenseNumber,
      maritalStatus: RecognizeTurkeyIdentityCardResponseBodyDataMaritalStatus,
      motherName: RecognizeTurkeyIdentityCardResponseBodyDataMotherName,
      name: RecognizeTurkeyIdentityCardResponseBodyDataName,
      nationality: RecognizeTurkeyIdentityCardResponseBodyDataNationality,
      neighborhoodVillage: RecognizeTurkeyIdentityCardResponseBodyDataNeighborhoodVillage,
      pageNumber: RecognizeTurkeyIdentityCardResponseBodyDataPageNumber,
      passportNumber: RecognizeTurkeyIdentityCardResponseBodyDataPassportNumber,
      portraitBox: RecognizeTurkeyIdentityCardResponseBodyDataPortraitBox,
      province: RecognizeTurkeyIdentityCardResponseBodyDataProvince,
      provinceOfResidence: RecognizeTurkeyIdentityCardResponseBodyDataProvinceOfResidence,
      reasonOfIssue: RecognizeTurkeyIdentityCardResponseBodyDataReasonOfIssue,
      registerNumber: RecognizeTurkeyIdentityCardResponseBodyDataRegisterNumber,
      religion: RecognizeTurkeyIdentityCardResponseBodyDataReligion,
      sayfa: RecognizeTurkeyIdentityCardResponseBodyDataSayfa,
      seri: RecognizeTurkeyIdentityCardResponseBodyDataSeri,
      sex: RecognizeTurkeyIdentityCardResponseBodyDataSex,
      surname: RecognizeTurkeyIdentityCardResponseBodyDataSurname,
      typeOfResidencePermit: RecognizeTurkeyIdentityCardResponseBodyDataTypeOfResidencePermit,
      validUntil: RecognizeTurkeyIdentityCardResponseBodyDataValidUntil,
      village: RecognizeTurkeyIdentityCardResponseBodyDataVillage,
      volumeNumber: RecognizeTurkeyIdentityCardResponseBodyDataVolumeNumber,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataBirthDateKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataBirthDate extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataBirthDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataBirthDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataCardBoxKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataCardBox extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataCardBoxKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataCardBoxKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataDocumentNumberKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataDocumentNumber extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataDocumentNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataDocumentNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataExpiryDateKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataExpiryDate extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataExpiryDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataExpiryDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataNameEnglishKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataNameEnglish extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataNameEnglishKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataNameEnglishKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataNameUkraineKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataNameUkraine extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataNameUkraineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataNameUkraineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataNationalityKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataNationality extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataNationalityKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataNationalityKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataPatronymicKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataPatronymic extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataPatronymicKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataPatronymicKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataPortraitBoxKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataPortraitBox extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataPortraitBoxKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataPortraitBoxKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataRecordNumberKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataRecordNumber extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataRecordNumberKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataRecordNumberKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataSexKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataSex extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataSexKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataSexKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataSurnameEnglishKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataSurnameEnglish extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataSurnameEnglishKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataSurnameEnglishKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyDataSurnameUkraineKeyPoints extends $tea.Model {
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

export class RecognizeUkraineIdentityCardResponseBodyDataSurnameUkraine extends $tea.Model {
  keyPoints?: RecognizeUkraineIdentityCardResponseBodyDataSurnameUkraineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeUkraineIdentityCardResponseBodyDataSurnameUkraineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeUkraineIdentityCardResponseBodyData extends $tea.Model {
  birthDate?: RecognizeUkraineIdentityCardResponseBodyDataBirthDate;
  cardBox?: RecognizeUkraineIdentityCardResponseBodyDataCardBox;
  documentNumber?: RecognizeUkraineIdentityCardResponseBodyDataDocumentNumber;
  expiryDate?: RecognizeUkraineIdentityCardResponseBodyDataExpiryDate;
  nameEnglish?: RecognizeUkraineIdentityCardResponseBodyDataNameEnglish;
  nameUkraine?: RecognizeUkraineIdentityCardResponseBodyDataNameUkraine;
  nationality?: RecognizeUkraineIdentityCardResponseBodyDataNationality;
  patronymic?: RecognizeUkraineIdentityCardResponseBodyDataPatronymic;
  portraitBox?: RecognizeUkraineIdentityCardResponseBodyDataPortraitBox;
  recordNumber?: RecognizeUkraineIdentityCardResponseBodyDataRecordNumber;
  sex?: RecognizeUkraineIdentityCardResponseBodyDataSex;
  surnameEnglish?: RecognizeUkraineIdentityCardResponseBodyDataSurnameEnglish;
  surnameUkraine?: RecognizeUkraineIdentityCardResponseBodyDataSurnameUkraine;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'BirthDate',
      cardBox: 'CardBox',
      documentNumber: 'DocumentNumber',
      expiryDate: 'ExpiryDate',
      nameEnglish: 'NameEnglish',
      nameUkraine: 'NameUkraine',
      nationality: 'Nationality',
      patronymic: 'Patronymic',
      portraitBox: 'PortraitBox',
      recordNumber: 'RecordNumber',
      sex: 'Sex',
      surnameEnglish: 'SurnameEnglish',
      surnameUkraine: 'SurnameUkraine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: RecognizeUkraineIdentityCardResponseBodyDataBirthDate,
      cardBox: RecognizeUkraineIdentityCardResponseBodyDataCardBox,
      documentNumber: RecognizeUkraineIdentityCardResponseBodyDataDocumentNumber,
      expiryDate: RecognizeUkraineIdentityCardResponseBodyDataExpiryDate,
      nameEnglish: RecognizeUkraineIdentityCardResponseBodyDataNameEnglish,
      nameUkraine: RecognizeUkraineIdentityCardResponseBodyDataNameUkraine,
      nationality: RecognizeUkraineIdentityCardResponseBodyDataNationality,
      patronymic: RecognizeUkraineIdentityCardResponseBodyDataPatronymic,
      portraitBox: RecognizeUkraineIdentityCardResponseBodyDataPortraitBox,
      recordNumber: RecognizeUkraineIdentityCardResponseBodyDataRecordNumber,
      sex: RecognizeUkraineIdentityCardResponseBodyDataSex,
      surnameEnglish: RecognizeUkraineIdentityCardResponseBodyDataSurnameEnglish,
      surnameUkraine: RecognizeUkraineIdentityCardResponseBodyDataSurnameUkraine,
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

export class RecognizeVideoCastCrewListRequestParams extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequestParams extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataCastResults extends $tea.Model {
  detailInfo?: { [key: string]: string };
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition extends $tea.Model {
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

export class RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo extends $tea.Model {
  boxes?: number[];
  charProbs?: number[][];
  frameIndex?: number;
  position?: RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition[];
  score?: number;
  text?: string;
  textProb?: number;
  timeStamp?: number;
  trackId?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      charProbs: 'CharProbs',
      frameIndex: 'FrameIndex',
      position: 'Position',
      score: 'Score',
      text: 'Text',
      textProb: 'TextProb',
      timeStamp: 'TimeStamp',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      charProbs: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      frameIndex: 'number',
      position: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfoPosition },
      score: 'number',
      text: 'string',
      textProb: 'number',
      timeStamp: 'number',
      trackId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataOcrResults extends $tea.Model {
  detailInfo?: RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo[];
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataOcrResultsDetailInfo },
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults extends $tea.Model {
  subtitlesAllResults?: { [key: string]: string };
  subtitlesAllResultsUrl?: string;
  subtitlesChineseResults?: { [key: string]: string };
  subtitlesChineseResultsUrl?: string;
  subtitlesEnglishResults?: { [key: string]: any };
  subtitlesEnglishResultsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      subtitlesAllResults: 'SubtitlesAllResults',
      subtitlesAllResultsUrl: 'SubtitlesAllResultsUrl',
      subtitlesChineseResults: 'SubtitlesChineseResults',
      subtitlesChineseResultsUrl: 'SubtitlesChineseResultsUrl',
      subtitlesEnglishResults: 'SubtitlesEnglishResults',
      subtitlesEnglishResultsUrl: 'SubtitlesEnglishResultsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitlesAllResults: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtitlesAllResultsUrl: 'string',
      subtitlesChineseResults: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtitlesChineseResultsUrl: 'string',
      subtitlesEnglishResults: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      subtitlesEnglishResultsUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition extends $tea.Model {
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

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo extends $tea.Model {
  boxes?: number[];
  position?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition[];
  score?: number;
  text?: string;
  textType?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      position: 'Position',
      score: 'Score',
      text: 'Text',
      textType: 'TextType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      position: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfoPosition },
      score: 'number',
      text: 'string',
      textType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults extends $tea.Model {
  detailInfo?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo[];
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataVideoOcrResultsDetailInfo },
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListResponseBodyData extends $tea.Model {
  castResults?: RecognizeVideoCastCrewListResponseBodyDataCastResults[];
  ocrResults?: RecognizeVideoCastCrewListResponseBodyDataOcrResults[];
  subtitlesResults?: RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults[];
  videoOcrResults?: RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults[];
  static names(): { [key: string]: string } {
    return {
      castResults: 'CastResults',
      ocrResults: 'OcrResults',
      subtitlesResults: 'SubtitlesResults',
      videoOcrResults: 'VideoOcrResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      castResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataCastResults },
      ocrResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataOcrResults },
      subtitlesResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataSubtitlesResults },
      videoOcrResults: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListResponseBodyDataVideoOcrResults },
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

export class RecognizeVietnamIdentityCardResponseBodyDataAddressFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataAddressFirstLine extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataAddressFirstLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataAddressFirstLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataAddressSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataAddressSecondLine extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataAddressSecondLineKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataAddressSecondLineKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataBirthDateKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataBirthDate extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataBirthDateKeyPoints[];
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataBirthDateKeyPoints },
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataCardBoxKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataCardBox extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataCardBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataCardBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataDriveClassKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataDriveClass extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataDriveClassKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataDriveClassKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataExpiryDateKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataExpiryDate extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataExpiryDateKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataExpiryDateKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataFullNameKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataFullName extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataFullNameKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataFullNameKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataIdNumberKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataIdNumber extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataIdNumberKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataIdNumberKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataNationalityKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataNationality extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataNationalityKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataNationalityKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceFirstLine extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceFirstLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceFirstLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceSecondLine extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceSecondLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceSecondLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataPortraitBoxKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataPortraitBox extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataPortraitBoxKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataPortraitBoxKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceFirstLineKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceFirstLine extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceFirstLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceFirstLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceSecondLineKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceSecondLine extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceSecondLineKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceSecondLineKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyDataSexKeyPoints extends $tea.Model {
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

export class RecognizeVietnamIdentityCardResponseBodyDataSex extends $tea.Model {
  keyPoints?: RecognizeVietnamIdentityCardResponseBodyDataSexKeyPoints[];
  score?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RecognizeVietnamIdentityCardResponseBodyDataSexKeyPoints },
      score: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVietnamIdentityCardResponseBodyData extends $tea.Model {
  addressFirstLine?: RecognizeVietnamIdentityCardResponseBodyDataAddressFirstLine;
  addressSecondLine?: RecognizeVietnamIdentityCardResponseBodyDataAddressSecondLine;
  birthDate?: RecognizeVietnamIdentityCardResponseBodyDataBirthDate;
  cardBox?: RecognizeVietnamIdentityCardResponseBodyDataCardBox;
  driveClass?: RecognizeVietnamIdentityCardResponseBodyDataDriveClass;
  expiryDate?: RecognizeVietnamIdentityCardResponseBodyDataExpiryDate;
  fullName?: RecognizeVietnamIdentityCardResponseBodyDataFullName;
  idNumber?: RecognizeVietnamIdentityCardResponseBodyDataIdNumber;
  nationality?: RecognizeVietnamIdentityCardResponseBodyDataNationality;
  originPlaceFirstLine?: RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceFirstLine;
  originPlaceSecondLine?: RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceSecondLine;
  portraitBox?: RecognizeVietnamIdentityCardResponseBodyDataPortraitBox;
  residencePlaceFirstLine?: RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceFirstLine;
  residencePlaceSecondLine?: RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceSecondLine;
  sex?: RecognizeVietnamIdentityCardResponseBodyDataSex;
  static names(): { [key: string]: string } {
    return {
      addressFirstLine: 'AddressFirstLine',
      addressSecondLine: 'AddressSecondLine',
      birthDate: 'BirthDate',
      cardBox: 'CardBox',
      driveClass: 'DriveClass',
      expiryDate: 'ExpiryDate',
      fullName: 'FullName',
      idNumber: 'IdNumber',
      nationality: 'Nationality',
      originPlaceFirstLine: 'OriginPlaceFirstLine',
      originPlaceSecondLine: 'OriginPlaceSecondLine',
      portraitBox: 'PortraitBox',
      residencePlaceFirstLine: 'ResidencePlaceFirstLine',
      residencePlaceSecondLine: 'ResidencePlaceSecondLine',
      sex: 'Sex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFirstLine: RecognizeVietnamIdentityCardResponseBodyDataAddressFirstLine,
      addressSecondLine: RecognizeVietnamIdentityCardResponseBodyDataAddressSecondLine,
      birthDate: RecognizeVietnamIdentityCardResponseBodyDataBirthDate,
      cardBox: RecognizeVietnamIdentityCardResponseBodyDataCardBox,
      driveClass: RecognizeVietnamIdentityCardResponseBodyDataDriveClass,
      expiryDate: RecognizeVietnamIdentityCardResponseBodyDataExpiryDate,
      fullName: RecognizeVietnamIdentityCardResponseBodyDataFullName,
      idNumber: RecognizeVietnamIdentityCardResponseBodyDataIdNumber,
      nationality: RecognizeVietnamIdentityCardResponseBodyDataNationality,
      originPlaceFirstLine: RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceFirstLine,
      originPlaceSecondLine: RecognizeVietnamIdentityCardResponseBodyDataOriginPlaceSecondLine,
      portraitBox: RecognizeVietnamIdentityCardResponseBodyDataPortraitBox,
      residencePlaceFirstLine: RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceFirstLine,
      residencePlaceSecondLine: RecognizeVietnamIdentityCardResponseBodyDataResidencePlaceSecondLine,
      sex: RecognizeVietnamIdentityCardResponseBodyDataSex,
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

  async detectCardScreenshotWithOptions(request: DetectCardScreenshotRequest, runtime: $Util.RuntimeOptions): Promise<DetectCardScreenshotResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectCardScreenshot",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectCardScreenshotResponse>(await this.callApi(params, req, runtime), new DetectCardScreenshotResponse({}));
  }

  async detectCardScreenshot(request: DetectCardScreenshotRequest): Promise<DetectCardScreenshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectCardScreenshotWithOptions(request, runtime);
  }

  async detectCardScreenshotAdvance(request: DetectCardScreenshotAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectCardScreenshotResponse> {
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
    let detectCardScreenshotReq = new DetectCardScreenshotRequest({ });
    OpenApiUtil.convert(request, detectCardScreenshotReq);
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
      detectCardScreenshotReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectCardScreenshotResp = await this.detectCardScreenshotWithOptions(detectCardScreenshotReq, runtime);
    return detectCardScreenshotResp;
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

  async recognizeAccountPageWithOptions(request: RecognizeAccountPageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAccountPageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeAccountPage",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeAccountPageResponse>(await this.callApi(params, req, runtime), new RecognizeAccountPageResponse({}));
  }

  async recognizeAccountPage(request: RecognizeAccountPageRequest): Promise<RecognizeAccountPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAccountPageWithOptions(request, runtime);
  }

  async recognizeAccountPageAdvance(request: RecognizeAccountPageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAccountPageResponse> {
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
    let recognizeAccountPageReq = new RecognizeAccountPageRequest({ });
    OpenApiUtil.convert(request, recognizeAccountPageReq);
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
      recognizeAccountPageReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeAccountPageResp = await this.recognizeAccountPageWithOptions(recognizeAccountPageReq, runtime);
    return recognizeAccountPageResp;
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

  async recognizeBusinessCardWithOptions(request: RecognizeBusinessCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeBusinessCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeBusinessCardResponse>(await this.callApi(params, req, runtime), new RecognizeBusinessCardResponse({}));
  }

  async recognizeBusinessCard(request: RecognizeBusinessCardRequest): Promise<RecognizeBusinessCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeBusinessCardWithOptions(request, runtime);
  }

  async recognizeBusinessCardAdvance(request: RecognizeBusinessCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeBusinessCardResponse> {
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
    let recognizeBusinessCardReq = new RecognizeBusinessCardRequest({ });
    OpenApiUtil.convert(request, recognizeBusinessCardReq);
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
      recognizeBusinessCardReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeBusinessCardResp = await this.recognizeBusinessCardWithOptions(recognizeBusinessCardReq, runtime);
    return recognizeBusinessCardResp;
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

  async recognizeChinapassportWithOptions(request: RecognizeChinapassportRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeChinapassportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeChinapassport",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeChinapassportResponse>(await this.callApi(params, req, runtime), new RecognizeChinapassportResponse({}));
  }

  async recognizeChinapassport(request: RecognizeChinapassportRequest): Promise<RecognizeChinapassportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeChinapassportWithOptions(request, runtime);
  }

  async recognizeChinapassportAdvance(request: RecognizeChinapassportAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeChinapassportResponse> {
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
    let recognizeChinapassportReq = new RecognizeChinapassportRequest({ });
    OpenApiUtil.convert(request, recognizeChinapassportReq);
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
      recognizeChinapassportReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeChinapassportResp = await this.recognizeChinapassportWithOptions(recognizeChinapassportReq, runtime);
    return recognizeChinapassportResp;
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

  async recognizeIndonesiaIdentityCardWithOptions(request: RecognizeIndonesiaIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIndonesiaIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeIndonesiaIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeIndonesiaIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeIndonesiaIdentityCardResponse({}));
  }

  async recognizeIndonesiaIdentityCard(request: RecognizeIndonesiaIdentityCardRequest): Promise<RecognizeIndonesiaIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeIndonesiaIdentityCardWithOptions(request, runtime);
  }

  async recognizeIndonesiaIdentityCardAdvance(request: RecognizeIndonesiaIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeIndonesiaIdentityCardResponse> {
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
    let recognizeIndonesiaIdentityCardReq = new RecognizeIndonesiaIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeIndonesiaIdentityCardReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      recognizeIndonesiaIdentityCardReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeIndonesiaIdentityCardResp = await this.recognizeIndonesiaIdentityCardWithOptions(recognizeIndonesiaIdentityCardReq, runtime);
    return recognizeIndonesiaIdentityCardResp;
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

  async recognizeMalaysiaIdentityCardWithOptions(request: RecognizeMalaysiaIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMalaysiaIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeMalaysiaIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeMalaysiaIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeMalaysiaIdentityCardResponse({}));
  }

  async recognizeMalaysiaIdentityCard(request: RecognizeMalaysiaIdentityCardRequest): Promise<RecognizeMalaysiaIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeMalaysiaIdentityCardWithOptions(request, runtime);
  }

  async recognizeMalaysiaIdentityCardAdvance(request: RecognizeMalaysiaIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeMalaysiaIdentityCardResponse> {
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
    let recognizeMalaysiaIdentityCardReq = new RecognizeMalaysiaIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeMalaysiaIdentityCardReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      recognizeMalaysiaIdentityCardReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeMalaysiaIdentityCardResp = await this.recognizeMalaysiaIdentityCardWithOptions(recognizeMalaysiaIdentityCardReq, runtime);
    return recognizeMalaysiaIdentityCardResp;
  }

  async recognizePassportMRZWithOptions(request: RecognizePassportMRZRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePassportMRZResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizePassportMRZ",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePassportMRZResponse>(await this.callApi(params, req, runtime), new RecognizePassportMRZResponse({}));
  }

  async recognizePassportMRZ(request: RecognizePassportMRZRequest): Promise<RecognizePassportMRZResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePassportMRZWithOptions(request, runtime);
  }

  async recognizePassportMRZAdvance(request: RecognizePassportMRZAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePassportMRZResponse> {
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
    let recognizePassportMRZReq = new RecognizePassportMRZRequest({ });
    OpenApiUtil.convert(request, recognizePassportMRZReq);
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
      recognizePassportMRZReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizePassportMRZResp = await this.recognizePassportMRZWithOptions(recognizePassportMRZReq, runtime);
    return recognizePassportMRZResp;
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

  async recognizePoiNameWithOptions(request: RecognizePoiNameRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePoiNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizePoiName",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizePoiNameResponse>(await this.callApi(params, req, runtime), new RecognizePoiNameResponse({}));
  }

  async recognizePoiName(request: RecognizePoiNameRequest): Promise<RecognizePoiNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizePoiNameWithOptions(request, runtime);
  }

  async recognizePoiNameAdvance(request: RecognizePoiNameAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizePoiNameResponse> {
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
    let recognizePoiNameReq = new RecognizePoiNameRequest({ });
    OpenApiUtil.convert(request, recognizePoiNameReq);
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
      recognizePoiNameReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizePoiNameResp = await this.recognizePoiNameWithOptions(recognizePoiNameReq, runtime);
    return recognizePoiNameResp;
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
      let i : number = 0;

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
          let tmp : RecognizeQrCodeRequestTasks = recognizeQrCodeReq.tasks[i];
          tmp.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i = Number.ltoi(Number.add(Number.itol(i), Number.itol(1)));
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

  async recognizeRussiaIdentityCardWithOptions(request: RecognizeRussiaIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRussiaIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeRussiaIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeRussiaIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeRussiaIdentityCardResponse({}));
  }

  async recognizeRussiaIdentityCard(request: RecognizeRussiaIdentityCardRequest): Promise<RecognizeRussiaIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeRussiaIdentityCardWithOptions(request, runtime);
  }

  async recognizeRussiaIdentityCardAdvance(request: RecognizeRussiaIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeRussiaIdentityCardResponse> {
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
    let recognizeRussiaIdentityCardReq = new RecognizeRussiaIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeRussiaIdentityCardReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      recognizeRussiaIdentityCardReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeRussiaIdentityCardResp = await this.recognizeRussiaIdentityCardWithOptions(recognizeRussiaIdentityCardReq, runtime);
    return recognizeRussiaIdentityCardResp;
  }

  async recognizeStampWithOptions(request: RecognizeStampRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeStampResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeStamp",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeStampResponse>(await this.callApi(params, req, runtime), new RecognizeStampResponse({}));
  }

  async recognizeStamp(request: RecognizeStampRequest): Promise<RecognizeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeStampWithOptions(request, runtime);
  }

  async recognizeStampAdvance(request: RecognizeStampAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeStampResponse> {
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
    let recognizeStampReq = new RecognizeStampRequest({ });
    OpenApiUtil.convert(request, recognizeStampReq);
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
      recognizeStampReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeStampResp = await this.recognizeStampWithOptions(recognizeStampReq, runtime);
    return recognizeStampResp;
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

  async recognizeTakeoutOrderWithOptions(request: RecognizeTakeoutOrderRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTakeoutOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTakeoutOrder",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTakeoutOrderResponse>(await this.callApi(params, req, runtime), new RecognizeTakeoutOrderResponse({}));
  }

  async recognizeTakeoutOrder(request: RecognizeTakeoutOrderRequest): Promise<RecognizeTakeoutOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTakeoutOrderWithOptions(request, runtime);
  }

  async recognizeTakeoutOrderAdvance(request: RecognizeTakeoutOrderAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTakeoutOrderResponse> {
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
    let recognizeTakeoutOrderReq = new RecognizeTakeoutOrderRequest({ });
    OpenApiUtil.convert(request, recognizeTakeoutOrderReq);
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
      recognizeTakeoutOrderReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeTakeoutOrderResp = await this.recognizeTakeoutOrderWithOptions(recognizeTakeoutOrderReq, runtime);
    return recognizeTakeoutOrderResp;
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

  async recognizeTurkeyIdentityCardWithOptions(request: RecognizeTurkeyIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTurkeyIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeTurkeyIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeTurkeyIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeTurkeyIdentityCardResponse({}));
  }

  async recognizeTurkeyIdentityCard(request: RecognizeTurkeyIdentityCardRequest): Promise<RecognizeTurkeyIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeTurkeyIdentityCardWithOptions(request, runtime);
  }

  async recognizeTurkeyIdentityCardAdvance(request: RecognizeTurkeyIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeTurkeyIdentityCardResponse> {
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
    let recognizeTurkeyIdentityCardReq = new RecognizeTurkeyIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeTurkeyIdentityCardReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      recognizeTurkeyIdentityCardReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeTurkeyIdentityCardResp = await this.recognizeTurkeyIdentityCardWithOptions(recognizeTurkeyIdentityCardReq, runtime);
    return recognizeTurkeyIdentityCardResp;
  }

  async recognizeUkraineIdentityCardWithOptions(request: RecognizeUkraineIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeUkraineIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeUkraineIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeUkraineIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeUkraineIdentityCardResponse({}));
  }

  async recognizeUkraineIdentityCard(request: RecognizeUkraineIdentityCardRequest): Promise<RecognizeUkraineIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeUkraineIdentityCardWithOptions(request, runtime);
  }

  async recognizeUkraineIdentityCardAdvance(request: RecognizeUkraineIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeUkraineIdentityCardResponse> {
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
    let recognizeUkraineIdentityCardReq = new RecognizeUkraineIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeUkraineIdentityCardReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      recognizeUkraineIdentityCardReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeUkraineIdentityCardResp = await this.recognizeUkraineIdentityCardWithOptions(recognizeUkraineIdentityCardReq, runtime);
    return recognizeUkraineIdentityCardResp;
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

  async recognizeVerificationcodeWithOptions(request: RecognizeVerificationcodeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVerificationcodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVerificationcode",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVerificationcodeResponse>(await this.callApi(params, req, runtime), new RecognizeVerificationcodeResponse({}));
  }

  async recognizeVerificationcode(request: RecognizeVerificationcodeRequest): Promise<RecognizeVerificationcodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVerificationcodeWithOptions(request, runtime);
  }

  async recognizeVerificationcodeAdvance(request: RecognizeVerificationcodeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVerificationcodeResponse> {
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
    let recognizeVerificationcodeReq = new RecognizeVerificationcodeRequest({ });
    OpenApiUtil.convert(request, recognizeVerificationcodeReq);
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
      recognizeVerificationcodeReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVerificationcodeResp = await this.recognizeVerificationcodeWithOptions(recognizeVerificationcodeReq, runtime);
    return recognizeVerificationcodeResp;
  }

  async recognizeVideoCastCrewListWithOptions(tmpReq: RecognizeVideoCastCrewListRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVideoCastCrewListResponse> {
    Util.validateModel(tmpReq);
    let request = new RecognizeVideoCastCrewListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    if (!Util.isUnset(request.registerUrl)) {
      body["RegisterUrl"] = request.registerUrl;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVideoCastCrewList",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVideoCastCrewListResponse>(await this.callApi(params, req, runtime), new RecognizeVideoCastCrewListResponse({}));
  }

  async recognizeVideoCastCrewList(request: RecognizeVideoCastCrewListRequest): Promise<RecognizeVideoCastCrewListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVideoCastCrewListWithOptions(request, runtime);
  }

  async recognizeVideoCastCrewListAdvance(request: RecognizeVideoCastCrewListAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVideoCastCrewListResponse> {
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
    let recognizeVideoCastCrewListReq = new RecognizeVideoCastCrewListRequest({ });
    OpenApiUtil.convert(request, recognizeVideoCastCrewListReq);
    if (!Util.isUnset(request.videoUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.videoUrlObject,
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
      recognizeVideoCastCrewListReq.videoUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVideoCastCrewListResp = await this.recognizeVideoCastCrewListWithOptions(recognizeVideoCastCrewListReq, runtime);
    return recognizeVideoCastCrewListResp;
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

  async recognizeVietnamIdentityCardWithOptions(request: RecognizeVietnamIdentityCardRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVietnamIdentityCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVietnamIdentityCard",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVietnamIdentityCardResponse>(await this.callApi(params, req, runtime), new RecognizeVietnamIdentityCardResponse({}));
  }

  async recognizeVietnamIdentityCard(request: RecognizeVietnamIdentityCardRequest): Promise<RecognizeVietnamIdentityCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVietnamIdentityCardWithOptions(request, runtime);
  }

  async recognizeVietnamIdentityCardAdvance(request: RecognizeVietnamIdentityCardAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVietnamIdentityCardResponse> {
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
    let recognizeVietnamIdentityCardReq = new RecognizeVietnamIdentityCardRequest({ });
    OpenApiUtil.convert(request, recognizeVietnamIdentityCardReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
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
      recognizeVietnamIdentityCardReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVietnamIdentityCardResp = await this.recognizeVietnamIdentityCardWithOptions(recognizeVietnamIdentityCardReq, runtime);
    return recognizeVietnamIdentityCardResp;
  }

  async trimDocumentWithOptions(request: TrimDocumentRequest, runtime: $Util.RuntimeOptions): Promise<TrimDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.fileURL)) {
      body["FileURL"] = request.fileURL;
    }

    if (!Util.isUnset(request.outputType)) {
      body["OutputType"] = request.outputType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TrimDocument",
      version: "2019-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TrimDocumentResponse>(await this.callApi(params, req, runtime), new TrimDocumentResponse({}));
  }

  async trimDocument(request: TrimDocumentRequest): Promise<TrimDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.trimDocumentWithOptions(request, runtime);
  }

  async trimDocumentAdvance(request: TrimDocumentAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TrimDocumentResponse> {
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
    let trimDocumentReq = new TrimDocumentRequest({ });
    OpenApiUtil.convert(request, trimDocumentReq);
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
      trimDocumentReq.fileURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let trimDocumentResp = await this.trimDocumentWithOptions(trimDocumentReq, runtime);
    return trimDocumentResp;
  }

}
