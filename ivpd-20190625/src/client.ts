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

export class AssessCompositionRequest extends $tea.Model {
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

export class AssessCompositionResponseBody extends $tea.Model {
  requestId?: string;
  data?: AssessCompositionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AssessCompositionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssessCompositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssessCompositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureRequest extends $tea.Model {
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

export class AssessExposureResponseBody extends $tea.Model {
  requestId?: string;
  data?: AssessExposureResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AssessExposureResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssessExposureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssessExposureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessRequest extends $tea.Model {
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

export class AssessSharpnessResponseBody extends $tea.Model {
  requestId?: string;
  data?: AssessSharpnessResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AssessSharpnessResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssessSharpnessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssessSharpnessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeRequest extends $tea.Model {
  width?: number;
  height?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ChangeImageSizeResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ChangeImageSizeResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeImageSizeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeImageSizeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobRequest extends $tea.Model {
  async?: boolean;
  jobId?: string;
  timeToLive?: number;
  dataList?: CreateSegmentBodyJobRequestDataList[];
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      jobId: 'JobId',
      timeToLive: 'TimeToLive',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      jobId: 'string',
      timeToLive: 'number',
      dataList: { 'type': 'array', 'itemType': CreateSegmentBodyJobRequestDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateSegmentBodyJobResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateSegmentBodyJobResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSegmentBodyJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSegmentBodyJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsRequest extends $tea.Model {
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

export class DetectImageElementsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DetectImageElementsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DetectImageElementsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageElementsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageElementsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyRequest extends $tea.Model {
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

export class DetectMainBodyResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectMainBodyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectMainBodyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectMainBodyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectMainBodyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceFaceRequest extends $tea.Model {
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

export class EnhanceFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: EnhanceFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnhanceFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnhanceFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnhanceFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseLogoInVideoRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  jobId?: string;
  boxes?: EraseLogoInVideoRequestBoxes[];
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
      jobId: 'JobId',
      boxes: 'Boxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
      jobId: 'string',
      boxes: { 'type': 'array', 'itemType': EraseLogoInVideoRequestBoxes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseLogoInVideoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EraseLogoInVideoResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: EraseLogoInVideoResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseLogoInVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EraseLogoInVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EraseLogoInVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleRequest extends $tea.Model {
  styleUrl?: string;
  majorUrl?: string;
  static names(): { [key: string]: string } {
    return {
      styleUrl: 'StyleUrl',
      majorUrl: 'MajorUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      styleUrl: 'string',
      majorUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ExtendImageStyleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ExtendImageStyleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExtendImageStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExtendImageStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultRequest extends $tea.Model {
  async?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
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

export class GetAsyncResultRequest extends $tea.Model {
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

export class GetAsyncResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAsyncResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAsyncResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsyncResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResultRequest extends $tea.Model {
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

export class GetJobResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetJobResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetJobResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
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

export class GetJobStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetJobStatusResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetJobStatusResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderResultRequest extends $tea.Model {
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

export class GetRenderResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetRenderResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetRenderResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRenderResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRenderResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBucketConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetUserBucketConfigResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetUserBucketConfigResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBucketConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserBucketConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserBucketConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoRequest extends $tea.Model {
  videoUrl?: string;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoUrl: 'VideoUrl',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrl: 'string',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoAdvanceRequest extends $tea.Model {
  videoUrlObject: Readable;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      videoUrlObject: 'VideoUrlObject',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoUrlObject: 'Readable',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBody extends $tea.Model {
  requestId?: string;
  data?: HighlightGameVideoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: HighlightGameVideoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HighlightGameVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HighlightGameVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionRequest extends $tea.Model {
  numBoxes?: number;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      numBoxes: 'NumBoxes',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numBoxes: 'number',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBody extends $tea.Model {
  requestId?: string;
  data?: IntelligentCompositionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: IntelligentCompositionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IntelligentCompositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IntelligentCompositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageDesignModelTypesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListPackageDesignModelTypesResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListPackageDesignModelTypesResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageDesignModelTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPackageDesignModelTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPackageDesignModelTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBucketsRequest extends $tea.Model {
  data?: ListUserBucketsRequestData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUserBucketsRequestData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBucketsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBucketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserBucketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserBucketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageRequest extends $tea.Model {
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

export class MakeSuperResolutionImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: MakeSuperResolutionImageResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: MakeSuperResolutionImageResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MakeSuperResolutionImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MakeSuperResolutionImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFaceRequest extends $tea.Model {
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

export class ParseFaceResponseBody extends $tea.Model {
  requestId?: string;
  data?: ParseFaceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ParseFaceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ParseFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ParseFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelForPackageDesignRequest extends $tea.Model {
  dataId?: string;
  modelType?: string;
  materialType?: string;
  materialName?: string;
  category?: string;
  elementList?: PreviewModelForPackageDesignRequestElementList[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      modelType: 'ModelType',
      materialType: 'MaterialType',
      materialName: 'MaterialName',
      category: 'Category',
      elementList: 'ElementList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      modelType: 'string',
      materialType: 'string',
      materialName: 'string',
      category: 'string',
      elementList: { 'type': 'array', 'itemType': PreviewModelForPackageDesignRequestElementList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelForPackageDesignResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: PreviewModelForPackageDesignResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: PreviewModelForPackageDesignResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelForPackageDesignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreviewModelForPackageDesignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreviewModelForPackageDesignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorRequest extends $tea.Model {
  url?: string;
  colorCount?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      colorCount: 'ColorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      colorCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RecognizeImageColorResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RecognizeImageColorResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeImageColorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeImageColorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageStyleRequest extends $tea.Model {
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

export class RecognizeImageStyleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RecognizeImageStyleResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RecognizeImageStyleResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeImageStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeImageStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageRequest extends $tea.Model {
  url?: string;
  mode?: string;
  refUrl?: string;
  colorCount?: number;
  colorTemplate?: RecolorImageRequestColorTemplate[];
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      mode: 'Mode',
      refUrl: 'RefUrl',
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      mode: 'string',
      refUrl: 'string',
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorImageRequestColorTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RecolorImageResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RecolorImageResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecolorImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecolorImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderImageForPackageDesignRequest extends $tea.Model {
  jobId?: string;
  modelType?: string;
  materialType?: string;
  materialName?: string;
  category?: string;
  targetWidth?: number;
  targetHeight?: number;
  displayType?: string;
  elementList?: RenderImageForPackageDesignRequestElementList[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      modelType: 'ModelType',
      materialType: 'MaterialType',
      materialName: 'MaterialName',
      category: 'Category',
      targetWidth: 'TargetWidth',
      targetHeight: 'TargetHeight',
      displayType: 'DisplayType',
      elementList: 'ElementList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      modelType: 'string',
      materialType: 'string',
      materialName: 'string',
      category: 'string',
      targetWidth: 'number',
      targetHeight: 'number',
      displayType: 'string',
      elementList: { 'type': 'array', 'itemType': RenderImageForPackageDesignRequestElementList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderImageForPackageDesignResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RenderImageForPackageDesignResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RenderImageForPackageDesignResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderImageForPackageDesignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenderImageForPackageDesignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenderImageForPackageDesignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentAnimalRequest extends $tea.Model {
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

export class SegmentAnimalResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentAnimalResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentAnimalResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentAnimalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentAnimalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentAnimalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentBodyRequest extends $tea.Model {
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

export class SegmentBodyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SegmentBodyResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SegmentBodyResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentBodyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentBodyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentBodyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentClothRequest extends $tea.Model {
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

export class SegmentClothResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentClothResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentClothResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentClothResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentClothResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentClothResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentCommodityRequest extends $tea.Model {
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

export class SegmentCommodityResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentCommodityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentCommodityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentCommodityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentCommodityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentCommodityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHairRequest extends $tea.Model {
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

export class SegmentHairResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentHairResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentHairResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentHairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentHairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHeadRequest extends $tea.Model {
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

export class SegmentHeadResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentHeadResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentHeadResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHeadResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentHeadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentHeadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentImageRequest extends $tea.Model {
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

export class SegmentImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SegmentImageResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SegmentImageResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentSkyRequest extends $tea.Model {
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

export class SegmentSkyResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentSkyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentSkyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentSkyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentSkyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentSkyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentVehicleRequest extends $tea.Model {
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

export class SegmentVehicleResponseBody extends $tea.Model {
  requestId?: string;
  data?: SegmentVehicleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SegmentVehicleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentVehicleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SegmentVehicleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SegmentVehicleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBucketConfigRequest extends $tea.Model {
  data?: UpdateUserBucketConfigRequestData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': UpdateUserBucketConfigRequestData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBucketConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateUserBucketConfigResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': UpdateUserBucketConfigResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBucketConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserBucketConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserBucketConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionResponseBodyData extends $tea.Model {
  score?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureResponseBodyData extends $tea.Model {
  exposure?: number;
  static names(): { [key: string]: string } {
    return {
      exposure: 'Exposure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposure: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessResponseBodyData extends $tea.Model {
  sharpness?: number;
  static names(): { [key: string]: string } {
    return {
      sharpness: 'Sharpness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharpness: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBodyData extends $tea.Model {
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

export class CreateSegmentBodyJobRequestDataList extends $tea.Model {
  imageUrl?: string;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobResponseBodyDataResultListResultData extends $tea.Model {
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

export class CreateSegmentBodyJobResponseBodyDataResultList extends $tea.Model {
  resultData?: CreateSegmentBodyJobResponseBodyDataResultListResultData;
  success?: boolean;
  code?: string;
  message?: string;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      resultData: 'ResultData',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultData: CreateSegmentBodyJobResponseBodyDataResultListResultData,
      success: 'boolean',
      code: 'string',
      message: 'string',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobResponseBodyData extends $tea.Model {
  status?: string;
  resultList?: CreateSegmentBodyJobResponseBodyDataResultList[];
  batchSize?: number;
  totalUsedTime?: number;
  progress?: number;
  completed?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      resultList: 'ResultList',
      batchSize: 'BatchSize',
      totalUsedTime: 'TotalUsedTime',
      progress: 'Progress',
      completed: 'Completed',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      resultList: { 'type': 'array', 'itemType': CreateSegmentBodyJobResponseBodyDataResultList },
      batchSize: 'number',
      totalUsedTime: 'number',
      progress: 'number',
      completed: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponseBodyDataElements extends $tea.Model {
  type?: string;
  width?: number;
  height?: number;
  y?: number;
  score?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      score: 'Score',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      width: 'number',
      height: 'number',
      y: 'number',
      score: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponseBodyData extends $tea.Model {
  elements?: DetectImageElementsResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectImageElementsResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBodyDataLocation extends $tea.Model {
  width?: number;
  height?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBodyData extends $tea.Model {
  location?: DetectMainBodyResponseBodyDataLocation;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: DetectMainBodyResponseBodyDataLocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnhanceFaceResponseBodyData extends $tea.Model {
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

export class EraseLogoInVideoRequestBoxes extends $tea.Model {
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

export class EraseLogoInVideoResponseBodyData extends $tea.Model {
  jobId?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponseBodyData extends $tea.Model {
  url?: string;
  majorUrl?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      majorUrl: 'MajorUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      majorUrl: 'string',
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

export class GetAsyncResultResponseBodyData extends $tea.Model {
  status?: string;
  totalUsedTime?: number;
  progress?: number;
  batchSize?: string;
  result?: { [key: string]: any };
  completed?: boolean;
  code?: string;
  finish?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalUsedTime: 'TotalUsedTime',
      progress: 'Progress',
      batchSize: 'BatchSize',
      result: 'Result',
      completed: 'Completed',
      code: 'Code',
      finish: 'Finish',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalUsedTime: 'number',
      progress: 'number',
      batchSize: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      completed: 'boolean',
      code: 'string',
      finish: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResultResponseBodyData extends $tea.Model {
  status?: string;
  resultList?: { [key: string]: any }[];
  totalUsedTime?: number;
  batchSize?: string;
  progress?: number;
  completed?: boolean;
  finish?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      resultList: 'ResultList',
      totalUsedTime: 'TotalUsedTime',
      batchSize: 'BatchSize',
      progress: 'Progress',
      completed: 'Completed',
      finish: 'Finish',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      resultList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalUsedTime: 'number',
      batchSize: 'string',
      progress: 'number',
      completed: 'boolean',
      finish: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBodyData extends $tea.Model {
  status?: string;
  totalUsedTime?: number;
  batchSize?: string;
  progress?: number;
  timeToLive?: number;
  completed?: boolean;
  finish?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalUsedTime: 'TotalUsedTime',
      batchSize: 'BatchSize',
      progress: 'Progress',
      timeToLive: 'TimeToLive',
      completed: 'Completed',
      finish: 'Finish',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalUsedTime: 'number',
      batchSize: 'string',
      progress: 'number',
      timeToLive: 'number',
      completed: 'boolean',
      finish: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderResultResponseBodyDataResultData extends $tea.Model {
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

export class GetRenderResultResponseBodyData extends $tea.Model {
  resultData?: GetRenderResultResponseBodyDataResultData;
  progress?: number;
  completed?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      resultData: 'ResultData',
      progress: 'Progress',
      completed: 'Completed',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultData: GetRenderResultResponseBodyDataResultData,
      progress: 'number',
      completed: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBucketConfigResponseBodyData extends $tea.Model {
  regionName?: string;
  region?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      region: 'Region',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      region: 'string',
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBodyDataHighlightList extends $tea.Model {
  start?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBodyDataGameList extends $tea.Model {
  gameInfo?: { [key: string]: any };
  start?: number;
  end?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gameInfo: 'GameInfo',
      start: 'Start',
      end: 'End',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      start: 'number',
      end: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBodyData extends $tea.Model {
  highlightList?: HighlightGameVideoResponseBodyDataHighlightList[];
  gameList?: HighlightGameVideoResponseBodyDataGameList[];
  static names(): { [key: string]: string } {
    return {
      highlightList: 'HighlightList',
      gameList: 'GameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highlightList: { 'type': 'array', 'itemType': HighlightGameVideoResponseBodyDataHighlightList },
      gameList: { 'type': 'array', 'itemType': HighlightGameVideoResponseBodyDataGameList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBodyDataElements extends $tea.Model {
  minX?: number;
  score?: number;
  maxY?: number;
  maxX?: number;
  minY?: number;
  static names(): { [key: string]: string } {
    return {
      minX: 'MinX',
      score: 'Score',
      maxY: 'MaxY',
      maxX: 'MaxX',
      minY: 'MinY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minX: 'number',
      score: 'number',
      maxY: 'number',
      maxX: 'number',
      minY: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBodyData extends $tea.Model {
  elements?: IntelligentCompositionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': IntelligentCompositionResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageDesignModelTypesResponseBodyDataModelTypeListElements extends $tea.Model {
  sideName?: string;
  static names(): { [key: string]: string } {
    return {
      sideName: 'SideName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sideName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageDesignModelTypesResponseBodyDataModelTypeList extends $tea.Model {
  elements?: ListPackageDesignModelTypesResponseBodyDataModelTypeListElements[];
  modelType?: string;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      modelType: 'ModelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ListPackageDesignModelTypesResponseBodyDataModelTypeListElements },
      modelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackageDesignModelTypesResponseBodyData extends $tea.Model {
  modelTypeList?: ListPackageDesignModelTypesResponseBodyDataModelTypeList[];
  static names(): { [key: string]: string } {
    return {
      modelTypeList: 'ModelTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTypeList: { 'type': 'array', 'itemType': ListPackageDesignModelTypesResponseBodyDataModelTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBucketsRequestData extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeSuperResolutionImageResponseBodyData extends $tea.Model {
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

export class ParseFaceResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFaceResponseBodyData extends $tea.Model {
  elements?: ParseFaceResponseBodyDataElements[];
  originImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      originImageURL: 'OriginImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ParseFaceResponseBodyDataElements },
      originImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelForPackageDesignRequestElementList extends $tea.Model {
  imageUrl?: string;
  sideName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      sideName: 'SideName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      sideName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewModelForPackageDesignResponseBodyData extends $tea.Model {
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseBodyDataColorTemplateList extends $tea.Model {
  color?: string;
  percentage?: number;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      percentage: 'Percentage',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      percentage: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseBodyData extends $tea.Model {
  colorTemplateList?: RecognizeImageColorResponseBodyDataColorTemplateList[];
  static names(): { [key: string]: string } {
    return {
      colorTemplateList: 'ColorTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorTemplateList: { 'type': 'array', 'itemType': RecognizeImageColorResponseBodyDataColorTemplateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageStyleResponseBodyData extends $tea.Model {
  styles?: string[];
  static names(): { [key: string]: string } {
    return {
      styles: 'Styles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      styles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageRequestColorTemplate extends $tea.Model {
  color?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponseBodyData extends $tea.Model {
  imageList?: string[];
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderImageForPackageDesignRequestElementList extends $tea.Model {
  imageUrl?: string;
  sideName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      sideName: 'SideName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      sideName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderImageForPackageDesignResponseBodyData extends $tea.Model {
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

export class SegmentAnimalResponseBodyData extends $tea.Model {
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

export class SegmentBodyResponseBodyData extends $tea.Model {
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

export class SegmentClothResponseBodyDataElements extends $tea.Model {
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

export class SegmentClothResponseBodyData extends $tea.Model {
  elements?: SegmentClothResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentClothResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentCommodityResponseBodyData extends $tea.Model {
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

export class SegmentHairResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  width?: number;
  height?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      width: 'number',
      height: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHairResponseBodyData extends $tea.Model {
  elements?: SegmentHairResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentHairResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHeadResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  width?: number;
  height?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      width: 'number',
      height: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentHeadResponseBodyData extends $tea.Model {
  elements?: SegmentHeadResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentHeadResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentImageResponseBodyData extends $tea.Model {
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

export class SegmentSkyResponseBodyData extends $tea.Model {
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

export class SegmentVehicleResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  originImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      originImageURL: 'OriginImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      originImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentVehicleResponseBodyData extends $tea.Model {
  elements?: SegmentVehicleResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SegmentVehicleResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBucketConfigRequestData extends $tea.Model {
  region?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBucketConfigResponseBodyData extends $tea.Model {
  regionName?: string;
  region?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      region: 'Region',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      region: 'string',
      bucket: 'string',
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
    this._endpoint = this.getEndpoint("ivpd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async assessCompositionWithOptions(request: AssessCompositionRequest, runtime: $Util.RuntimeOptions): Promise<AssessCompositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssessCompositionResponse>(await this.doRPCRequest("AssessComposition", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new AssessCompositionResponse({}));
  }

  async assessComposition(request: AssessCompositionRequest): Promise<AssessCompositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assessCompositionWithOptions(request, runtime);
  }

  async assessExposureWithOptions(request: AssessExposureRequest, runtime: $Util.RuntimeOptions): Promise<AssessExposureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssessExposureResponse>(await this.doRPCRequest("AssessExposure", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new AssessExposureResponse({}));
  }

  async assessExposure(request: AssessExposureRequest): Promise<AssessExposureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assessExposureWithOptions(request, runtime);
  }

  async assessSharpnessWithOptions(request: AssessSharpnessRequest, runtime: $Util.RuntimeOptions): Promise<AssessSharpnessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssessSharpnessResponse>(await this.doRPCRequest("AssessSharpness", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new AssessSharpnessResponse({}));
  }

  async assessSharpness(request: AssessSharpnessRequest): Promise<AssessSharpnessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assessSharpnessWithOptions(request, runtime);
  }

  async changeImageSizeWithOptions(request: ChangeImageSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeImageSizeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeImageSizeResponse>(await this.doRPCRequest("ChangeImageSize", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeImageSizeResponse({}));
  }

  async changeImageSize(request: ChangeImageSizeRequest): Promise<ChangeImageSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeImageSizeWithOptions(request, runtime);
  }

  async createSegmentBodyJobWithOptions(request: CreateSegmentBodyJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateSegmentBodyJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSegmentBodyJobResponse>(await this.doRPCRequest("CreateSegmentBodyJob", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSegmentBodyJobResponse({}));
  }

  async createSegmentBodyJob(request: CreateSegmentBodyJobRequest): Promise<CreateSegmentBodyJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSegmentBodyJobWithOptions(request, runtime);
  }

  async detectImageElementsWithOptions(request: DetectImageElementsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageElementsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageElementsResponse>(await this.doRPCRequest("DetectImageElements", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageElementsResponse({}));
  }

  async detectImageElements(request: DetectImageElementsRequest): Promise<DetectImageElementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageElementsWithOptions(request, runtime);
  }

  async detectMainBodyWithOptions(request: DetectMainBodyRequest, runtime: $Util.RuntimeOptions): Promise<DetectMainBodyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectMainBodyResponse>(await this.doRPCRequest("DetectMainBody", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new DetectMainBodyResponse({}));
  }

  async detectMainBody(request: DetectMainBodyRequest): Promise<DetectMainBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectMainBodyWithOptions(request, runtime);
  }

  async enhanceFaceWithOptions(request: EnhanceFaceRequest, runtime: $Util.RuntimeOptions): Promise<EnhanceFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnhanceFaceResponse>(await this.doRPCRequest("EnhanceFace", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new EnhanceFaceResponse({}));
  }

  async enhanceFace(request: EnhanceFaceRequest): Promise<EnhanceFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enhanceFaceWithOptions(request, runtime);
  }

  async eraseLogoInVideoWithOptions(request: EraseLogoInVideoRequest, runtime: $Util.RuntimeOptions): Promise<EraseLogoInVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EraseLogoInVideoResponse>(await this.doRPCRequest("EraseLogoInVideo", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new EraseLogoInVideoResponse({}));
  }

  async eraseLogoInVideo(request: EraseLogoInVideoRequest): Promise<EraseLogoInVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseLogoInVideoWithOptions(request, runtime);
  }

  async extendImageStyleWithOptions(request: ExtendImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<ExtendImageStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExtendImageStyleResponse>(await this.doRPCRequest("ExtendImageStyle", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new ExtendImageStyleResponse({}));
  }

  async extendImageStyle(request: ExtendImageStyleRequest): Promise<ExtendImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extendImageStyleWithOptions(request, runtime);
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async getAsyncResultWithOptions(request: GetAsyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncResultResponse>(await this.doRPCRequest("GetAsyncResult", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncResultResponse({}));
  }

  async getAsyncResult(request: GetAsyncResultRequest): Promise<GetAsyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncResultWithOptions(request, runtime);
  }

  async getJobResultWithOptions(request: GetJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobResultResponse>(await this.doRPCRequest("GetJobResult", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobResultResponse({}));
  }

  async getJobResult(request: GetJobResultRequest): Promise<GetJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobResultWithOptions(request, runtime);
  }

  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobStatusResponse>(await this.doRPCRequest("GetJobStatus", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobStatusResponse({}));
  }

  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  async getRenderResultWithOptions(request: GetRenderResultRequest, runtime: $Util.RuntimeOptions): Promise<GetRenderResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRenderResultResponse>(await this.doRPCRequest("GetRenderResult", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetRenderResultResponse({}));
  }

  async getRenderResult(request: GetRenderResultRequest): Promise<GetRenderResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRenderResultWithOptions(request, runtime);
  }

  async getUserBucketConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserBucketConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetUserBucketConfigResponse>(await this.doRPCRequest("GetUserBucketConfig", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserBucketConfigResponse({}));
  }

  async getUserBucketConfig(): Promise<GetUserBucketConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserBucketConfigWithOptions(runtime);
  }

  async highlightGameVideoWithOptions(request: HighlightGameVideoRequest, runtime: $Util.RuntimeOptions): Promise<HighlightGameVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HighlightGameVideoResponse>(await this.doRPCRequest("HighlightGameVideo", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new HighlightGameVideoResponse({}));
  }

  async highlightGameVideo(request: HighlightGameVideoRequest): Promise<HighlightGameVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.highlightGameVideoWithOptions(request, runtime);
  }

  async highlightGameVideoAdvance(request: HighlightGameVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<HighlightGameVideoResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: "openplatform.aliyuncs.com",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ivpd",
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
    let highlightGameVideoReq = new HighlightGameVideoRequest({ });
    OpenApiUtil.convert(request, highlightGameVideoReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoUrlObject,
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
    highlightGameVideoReq.videoUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let highlightGameVideoResp = await this.highlightGameVideoWithOptions(highlightGameVideoReq, runtime);
    return highlightGameVideoResp;
  }

  async intelligentCompositionWithOptions(request: IntelligentCompositionRequest, runtime: $Util.RuntimeOptions): Promise<IntelligentCompositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IntelligentCompositionResponse>(await this.doRPCRequest("IntelligentComposition", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new IntelligentCompositionResponse({}));
  }

  async intelligentComposition(request: IntelligentCompositionRequest): Promise<IntelligentCompositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.intelligentCompositionWithOptions(request, runtime);
  }

  async listPackageDesignModelTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListPackageDesignModelTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListPackageDesignModelTypesResponse>(await this.doRPCRequest("ListPackageDesignModelTypes", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListPackageDesignModelTypesResponse({}));
  }

  async listPackageDesignModelTypes(): Promise<ListPackageDesignModelTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPackageDesignModelTypesWithOptions(runtime);
  }

  async listUserBucketsWithOptions(request: ListUserBucketsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserBucketsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserBucketsResponse>(await this.doRPCRequest("ListUserBuckets", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserBucketsResponse({}));
  }

  async listUserBuckets(request: ListUserBucketsRequest): Promise<ListUserBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserBucketsWithOptions(request, runtime);
  }

  async makeSuperResolutionImageWithOptions(request: MakeSuperResolutionImageRequest, runtime: $Util.RuntimeOptions): Promise<MakeSuperResolutionImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MakeSuperResolutionImageResponse>(await this.doRPCRequest("MakeSuperResolutionImage", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new MakeSuperResolutionImageResponse({}));
  }

  async makeSuperResolutionImage(request: MakeSuperResolutionImageRequest): Promise<MakeSuperResolutionImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeSuperResolutionImageWithOptions(request, runtime);
  }

  async parseFaceWithOptions(request: ParseFaceRequest, runtime: $Util.RuntimeOptions): Promise<ParseFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ParseFaceResponse>(await this.doRPCRequest("ParseFace", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new ParseFaceResponse({}));
  }

  async parseFace(request: ParseFaceRequest): Promise<ParseFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.parseFaceWithOptions(request, runtime);
  }

  async previewModelForPackageDesignWithOptions(request: PreviewModelForPackageDesignRequest, runtime: $Util.RuntimeOptions): Promise<PreviewModelForPackageDesignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreviewModelForPackageDesignResponse>(await this.doRPCRequest("PreviewModelForPackageDesign", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new PreviewModelForPackageDesignResponse({}));
  }

  async previewModelForPackageDesign(request: PreviewModelForPackageDesignRequest): Promise<PreviewModelForPackageDesignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.previewModelForPackageDesignWithOptions(request, runtime);
  }

  async recognizeImageColorWithOptions(request: RecognizeImageColorRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageColorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeImageColorResponse>(await this.doRPCRequest("RecognizeImageColor", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeImageColorResponse({}));
  }

  async recognizeImageColor(request: RecognizeImageColorRequest): Promise<RecognizeImageColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageColorWithOptions(request, runtime);
  }

  async recognizeImageStyleWithOptions(request: RecognizeImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeImageStyleResponse>(await this.doRPCRequest("RecognizeImageStyle", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeImageStyleResponse({}));
  }

  async recognizeImageStyle(request: RecognizeImageStyleRequest): Promise<RecognizeImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageStyleWithOptions(request, runtime);
  }

  async recolorImageWithOptions(request: RecolorImageRequest, runtime: $Util.RuntimeOptions): Promise<RecolorImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecolorImageResponse>(await this.doRPCRequest("RecolorImage", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new RecolorImageResponse({}));
  }

  async recolorImage(request: RecolorImageRequest): Promise<RecolorImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recolorImageWithOptions(request, runtime);
  }

  async renderImageForPackageDesignWithOptions(request: RenderImageForPackageDesignRequest, runtime: $Util.RuntimeOptions): Promise<RenderImageForPackageDesignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenderImageForPackageDesignResponse>(await this.doRPCRequest("RenderImageForPackageDesign", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new RenderImageForPackageDesignResponse({}));
  }

  async renderImageForPackageDesign(request: RenderImageForPackageDesignRequest): Promise<RenderImageForPackageDesignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderImageForPackageDesignWithOptions(request, runtime);
  }

  async segmentAnimalWithOptions(request: SegmentAnimalRequest, runtime: $Util.RuntimeOptions): Promise<SegmentAnimalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentAnimalResponse>(await this.doRPCRequest("SegmentAnimal", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentAnimalResponse({}));
  }

  async segmentAnimal(request: SegmentAnimalRequest): Promise<SegmentAnimalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentAnimalWithOptions(request, runtime);
  }

  async segmentBodyWithOptions(request: SegmentBodyRequest, runtime: $Util.RuntimeOptions): Promise<SegmentBodyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentBodyResponse>(await this.doRPCRequest("SegmentBody", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentBodyResponse({}));
  }

  async segmentBody(request: SegmentBodyRequest): Promise<SegmentBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentBodyWithOptions(request, runtime);
  }

  async segmentClothWithOptions(request: SegmentClothRequest, runtime: $Util.RuntimeOptions): Promise<SegmentClothResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentClothResponse>(await this.doRPCRequest("SegmentCloth", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentClothResponse({}));
  }

  async segmentCloth(request: SegmentClothRequest): Promise<SegmentClothResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentClothWithOptions(request, runtime);
  }

  async segmentCommodityWithOptions(request: SegmentCommodityRequest, runtime: $Util.RuntimeOptions): Promise<SegmentCommodityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentCommodityResponse>(await this.doRPCRequest("SegmentCommodity", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentCommodityResponse({}));
  }

  async segmentCommodity(request: SegmentCommodityRequest): Promise<SegmentCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentCommodityWithOptions(request, runtime);
  }

  async segmentHairWithOptions(request: SegmentHairRequest, runtime: $Util.RuntimeOptions): Promise<SegmentHairResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentHairResponse>(await this.doRPCRequest("SegmentHair", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentHairResponse({}));
  }

  async segmentHair(request: SegmentHairRequest): Promise<SegmentHairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentHairWithOptions(request, runtime);
  }

  async segmentHeadWithOptions(request: SegmentHeadRequest, runtime: $Util.RuntimeOptions): Promise<SegmentHeadResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentHeadResponse>(await this.doRPCRequest("SegmentHead", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentHeadResponse({}));
  }

  async segmentHead(request: SegmentHeadRequest): Promise<SegmentHeadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentHeadWithOptions(request, runtime);
  }

  async segmentImageWithOptions(request: SegmentImageRequest, runtime: $Util.RuntimeOptions): Promise<SegmentImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentImageResponse>(await this.doRPCRequest("SegmentImage", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentImageResponse({}));
  }

  async segmentImage(request: SegmentImageRequest): Promise<SegmentImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentImageWithOptions(request, runtime);
  }

  async segmentSkyWithOptions(request: SegmentSkyRequest, runtime: $Util.RuntimeOptions): Promise<SegmentSkyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentSkyResponse>(await this.doRPCRequest("SegmentSky", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentSkyResponse({}));
  }

  async segmentSky(request: SegmentSkyRequest): Promise<SegmentSkyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentSkyWithOptions(request, runtime);
  }

  async segmentVehicleWithOptions(request: SegmentVehicleRequest, runtime: $Util.RuntimeOptions): Promise<SegmentVehicleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SegmentVehicleResponse>(await this.doRPCRequest("SegmentVehicle", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new SegmentVehicleResponse({}));
  }

  async segmentVehicle(request: SegmentVehicleRequest): Promise<SegmentVehicleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentVehicleWithOptions(request, runtime);
  }

  async updateUserBucketConfigWithOptions(request: UpdateUserBucketConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserBucketConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserBucketConfigResponse>(await this.doRPCRequest("UpdateUserBucketConfig", "2019-06-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserBucketConfigResponse({}));
  }

  async updateUserBucketConfig(request: UpdateUserBucketConfigRequest): Promise<UpdateUserBucketConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserBucketConfigWithOptions(request, runtime);
  }

}
