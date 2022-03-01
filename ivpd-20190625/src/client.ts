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

export class ChangeImageSizeRequest extends $tea.Model {
  height?: number;
  url?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      url: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBody extends $tea.Model {
  code?: string;
  data?: ChangeImageSizeResponseBodyData;
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
      data: ChangeImageSizeResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  dataList?: CreateSegmentBodyJobRequestDataList[];
  jobId?: string;
  timeToLive?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      jobId: 'JobId',
      timeToLive: 'TimeToLive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': CreateSegmentBodyJobRequestDataList },
      jobId: 'string',
      timeToLive: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSegmentBodyJobResponseBodyData;
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
      data: CreateSegmentBodyJobResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: DetectImageElementsResponseBodyData;
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
      data: DetectImageElementsResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class EraseLogoInVideoRequest extends $tea.Model {
  boxes?: EraseLogoInVideoRequestBoxes[];
  jobId?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      jobId: 'JobId',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': EraseLogoInVideoRequestBoxes },
      jobId: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseLogoInVideoResponseBody extends $tea.Model {
  code?: string;
  data?: EraseLogoInVideoResponseBodyData;
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
      data: EraseLogoInVideoResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  majorUrl?: string;
  styleUrl?: string;
  static names(): { [key: string]: string } {
    return {
      majorUrl: 'MajorUrl',
      styleUrl: 'StyleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorUrl: 'string',
      styleUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendImageStyleResponseBody extends $tea.Model {
  code?: string;
  data?: ExtendImageStyleResponseBodyData;
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
      data: ExtendImageStyleResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: GetAsyncResultResponseBodyData;
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
      data: GetAsyncResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: GetJobResultResponseBodyData;
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
      data: GetJobResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: GetJobStatusResponseBodyData;
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
      data: GetJobStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetUserBucketConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetUserBucketConfigResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetUserBucketConfigResponseBodyData },
      message: 'string',
      requestId: 'string',
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
  async?: boolean;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      videoUrl: 'string',
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
  data?: HighlightGameVideoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: HighlightGameVideoResponseBodyData,
      requestId: 'string',
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

export class ListPackageDesignModelTypesResponseBody extends $tea.Model {
  code?: string;
  data?: ListPackageDesignModelTypesResponseBodyData;
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
      data: ListPackageDesignModelTypesResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: MakeSuperResolutionImageResponseBodyData;
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
      data: MakeSuperResolutionImageResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class RecognizeImageColorRequest extends $tea.Model {
  colorCount?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseBody extends $tea.Model {
  code?: string;
  data?: RecognizeImageColorResponseBodyData;
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
      data: RecognizeImageColorResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: RecognizeImageStyleResponseBodyData;
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
      data: RecognizeImageStyleResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  colorCount?: number;
  colorTemplate?: RecolorImageRequestColorTemplate[];
  mode?: string;
  refUrl?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
      mode: 'Mode',
      refUrl: 'RefUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorImageRequestColorTemplate },
      mode: 'string',
      refUrl: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageResponseBody extends $tea.Model {
  code?: string;
  data?: RecolorImageResponseBodyData;
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
      data: RecolorImageResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: SegmentBodyResponseBodyData;
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
      data: SegmentBodyResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  data?: SegmentCommodityResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SegmentCommodityResponseBodyData,
      requestId: 'string',
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
  code?: string;
  data?: SegmentImageResponseBodyData;
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
      data: SegmentImageResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  data?: UpdateUserBucketConfigResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': UpdateUserBucketConfigResponseBodyData },
      message: 'string',
      requestId: 'string',
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
  dataId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageUrl: 'string',
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
  code?: string;
  dataId?: string;
  message?: string;
  resultData?: CreateSegmentBodyJobResponseBodyDataResultListResultData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataId: 'DataId',
      message: 'Message',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataId: 'string',
      message: 'string',
      resultData: CreateSegmentBodyJobResponseBodyDataResultListResultData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSegmentBodyJobResponseBodyData extends $tea.Model {
  batchSize?: number;
  completed?: boolean;
  jobId?: string;
  progress?: number;
  resultList?: CreateSegmentBodyJobResponseBodyDataResultList[];
  status?: string;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      completed: 'Completed',
      jobId: 'JobId',
      progress: 'Progress',
      resultList: 'ResultList',
      status: 'Status',
      totalUsedTime: 'TotalUsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      completed: 'boolean',
      jobId: 'string',
      progress: 'number',
      resultList: { 'type': 'array', 'itemType': CreateSegmentBodyJobResponseBodyDataResultList },
      status: 'string',
      totalUsedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponseBodyDataElements extends $tea.Model {
  height?: number;
  score?: number;
  type?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      score: 'Score',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      score: 'number',
      type: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
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

export class EraseLogoInVideoRequestBoxes extends $tea.Model {
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
  majorUrl?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      majorUrl: 'MajorUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorUrl: 'string',
      url: 'string',
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

export class GetAsyncResultResponseBodyData extends $tea.Model {
  batchSize?: string;
  code?: string;
  completed?: boolean;
  finish?: boolean;
  message?: string;
  progress?: number;
  result?: { [key: string]: any };
  status?: string;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      code: 'Code',
      completed: 'Completed',
      finish: 'Finish',
      message: 'Message',
      progress: 'Progress',
      result: 'Result',
      status: 'Status',
      totalUsedTime: 'TotalUsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'string',
      code: 'string',
      completed: 'boolean',
      finish: 'boolean',
      message: 'string',
      progress: 'number',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      totalUsedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResultResponseBodyData extends $tea.Model {
  batchSize?: string;
  completed?: boolean;
  finish?: boolean;
  message?: string;
  progress?: number;
  resultList?: { [key: string]: any }[];
  status?: string;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      completed: 'Completed',
      finish: 'Finish',
      message: 'Message',
      progress: 'Progress',
      resultList: 'ResultList',
      status: 'Status',
      totalUsedTime: 'TotalUsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'string',
      completed: 'boolean',
      finish: 'boolean',
      message: 'string',
      progress: 'number',
      resultList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      status: 'string',
      totalUsedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBodyData extends $tea.Model {
  batchSize?: string;
  completed?: boolean;
  finish?: boolean;
  message?: string;
  progress?: number;
  status?: string;
  timeToLive?: number;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      completed: 'Completed',
      finish: 'Finish',
      message: 'Message',
      progress: 'Progress',
      status: 'Status',
      timeToLive: 'TimeToLive',
      totalUsedTime: 'TotalUsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'string',
      completed: 'boolean',
      finish: 'boolean',
      message: 'string',
      progress: 'number',
      status: 'string',
      timeToLive: 'number',
      totalUsedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBucketConfigResponseBodyData extends $tea.Model {
  bucket?: string;
  region?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBodyDataGameList extends $tea.Model {
  end?: number;
  gameInfo?: { [key: string]: any };
  id?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      gameInfo: 'GameInfo',
      id: 'Id',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      gameInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBodyDataHighlightList extends $tea.Model {
  end?: number;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighlightGameVideoResponseBodyData extends $tea.Model {
  gameList?: HighlightGameVideoResponseBodyDataGameList[];
  highlightList?: HighlightGameVideoResponseBodyDataHighlightList[];
  static names(): { [key: string]: string } {
    return {
      gameList: 'GameList',
      highlightList: 'HighlightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gameList: { 'type': 'array', 'itemType': HighlightGameVideoResponseBodyDataGameList },
      highlightList: { 'type': 'array', 'itemType': HighlightGameVideoResponseBodyDataHighlightList },
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

export class RecognizeImageColorResponseBodyDataColorTemplateList extends $tea.Model {
  color?: string;
  label?: string;
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      label: 'Label',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      label: 'string',
      percentage: 'number',
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

export class UpdateUserBucketConfigRequestData extends $tea.Model {
  bucket?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBucketConfigResponseBodyData extends $tea.Model {
  bucket?: string;
  region?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
      regionName: 'string',
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

  async changeImageSizeWithOptions(request: ChangeImageSizeRequest, runtime: $Util.RuntimeOptions): Promise<ChangeImageSizeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    if (!Util.isUnset(request.width)) {
      body["Width"] = request.width;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeImageSize",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeImageSizeResponse>(await this.callApi(params, req, runtime), new ChangeImageSizeResponse({}));
  }

  async changeImageSize(request: ChangeImageSizeRequest): Promise<ChangeImageSizeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeImageSizeWithOptions(request, runtime);
  }

  async createSegmentBodyJobWithOptions(request: CreateSegmentBodyJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateSegmentBodyJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataList)) {
      body["DataList"] = request.dataList;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.timeToLive)) {
      body["TimeToLive"] = request.timeToLive;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSegmentBodyJob",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSegmentBodyJobResponse>(await this.callApi(params, req, runtime), new CreateSegmentBodyJobResponse({}));
  }

  async createSegmentBodyJob(request: CreateSegmentBodyJobRequest): Promise<CreateSegmentBodyJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSegmentBodyJobWithOptions(request, runtime);
  }

  async detectImageElementsWithOptions(request: DetectImageElementsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageElementsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageElements",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageElementsResponse>(await this.callApi(params, req, runtime), new DetectImageElementsResponse({}));
  }

  async detectImageElements(request: DetectImageElementsRequest): Promise<DetectImageElementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageElementsWithOptions(request, runtime);
  }

  async eraseLogoInVideoWithOptions(request: EraseLogoInVideoRequest, runtime: $Util.RuntimeOptions): Promise<EraseLogoInVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.boxes)) {
      body["Boxes"] = request.boxes;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EraseLogoInVideo",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EraseLogoInVideoResponse>(await this.callApi(params, req, runtime), new EraseLogoInVideoResponse({}));
  }

  async eraseLogoInVideo(request: EraseLogoInVideoRequest): Promise<EraseLogoInVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eraseLogoInVideoWithOptions(request, runtime);
  }

  async extendImageStyleWithOptions(request: ExtendImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<ExtendImageStyleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.majorUrl)) {
      body["MajorUrl"] = request.majorUrl;
    }

    if (!Util.isUnset(request.styleUrl)) {
      body["StyleUrl"] = request.styleUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExtendImageStyle",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtendImageStyleResponse>(await this.callApi(params, req, runtime), new ExtendImageStyleResponse({}));
  }

  async extendImageStyle(request: ExtendImageStyleRequest): Promise<ExtendImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extendImageStyleWithOptions(request, runtime);
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
      version: "2019-06-25",
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

  async getAsyncResultWithOptions(request: GetAsyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncResult",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncResultResponse>(await this.callApi(params, req, runtime), new GetAsyncResultResponse({}));
  }

  async getAsyncResult(request: GetAsyncResultRequest): Promise<GetAsyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncResultWithOptions(request, runtime);
  }

  async getJobResultWithOptions(request: GetJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetJobResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobResult",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobResultResponse>(await this.callApi(params, req, runtime), new GetJobResultResponse({}));
  }

  async getJobResult(request: GetJobResultRequest): Promise<GetJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobResultWithOptions(request, runtime);
  }

  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobStatus",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobStatusResponse>(await this.callApi(params, req, runtime), new GetJobStatusResponse({}));
  }

  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  async getUserBucketConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserBucketConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetUserBucketConfig",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserBucketConfigResponse>(await this.callApi(params, req, runtime), new GetUserBucketConfigResponse({}));
  }

  async getUserBucketConfig(): Promise<GetUserBucketConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserBucketConfigWithOptions(runtime);
  }

  async highlightGameVideoWithOptions(request: HighlightGameVideoRequest, runtime: $Util.RuntimeOptions): Promise<HighlightGameVideoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.async)) {
      body["Async"] = request.async;
    }

    if (!Util.isUnset(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HighlightGameVideo",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HighlightGameVideoResponse>(await this.callApi(params, req, runtime), new HighlightGameVideoResponse({}));
  }

  async highlightGameVideo(request: HighlightGameVideoRequest): Promise<HighlightGameVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.highlightGameVideoWithOptions(request, runtime);
  }

  async highlightGameVideoAdvance(request: HighlightGameVideoAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<HighlightGameVideoResponse> {
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

    let authConfig = new $RPC.Config({
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
    if (!Util.isUnset(request.videoUrlObject)) {
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
    }

    let highlightGameVideoResp = await this.highlightGameVideoWithOptions(highlightGameVideoReq, runtime);
    return highlightGameVideoResp;
  }

  async listPackageDesignModelTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListPackageDesignModelTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListPackageDesignModelTypes",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPackageDesignModelTypesResponse>(await this.callApi(params, req, runtime), new ListPackageDesignModelTypesResponse({}));
  }

  async listPackageDesignModelTypes(): Promise<ListPackageDesignModelTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPackageDesignModelTypesWithOptions(runtime);
  }

  async listUserBucketsWithOptions(request: ListUserBucketsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserBucketsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserBuckets",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserBucketsResponse>(await this.callApi(params, req, runtime), new ListUserBucketsResponse({}));
  }

  async listUserBuckets(request: ListUserBucketsRequest): Promise<ListUserBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserBucketsWithOptions(request, runtime);
  }

  async makeSuperResolutionImageWithOptions(request: MakeSuperResolutionImageRequest, runtime: $Util.RuntimeOptions): Promise<MakeSuperResolutionImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MakeSuperResolutionImage",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MakeSuperResolutionImageResponse>(await this.callApi(params, req, runtime), new MakeSuperResolutionImageResponse({}));
  }

  async makeSuperResolutionImage(request: MakeSuperResolutionImageRequest): Promise<MakeSuperResolutionImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeSuperResolutionImageWithOptions(request, runtime);
  }

  async recognizeImageColorWithOptions(request: RecognizeImageColorRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageColorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.colorCount)) {
      body["ColorCount"] = request.colorCount;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeImageColor",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeImageColorResponse>(await this.callApi(params, req, runtime), new RecognizeImageColorResponse({}));
  }

  async recognizeImageColor(request: RecognizeImageColorRequest): Promise<RecognizeImageColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageColorWithOptions(request, runtime);
  }

  async recognizeImageStyleWithOptions(request: RecognizeImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageStyleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeImageStyle",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeImageStyleResponse>(await this.callApi(params, req, runtime), new RecognizeImageStyleResponse({}));
  }

  async recognizeImageStyle(request: RecognizeImageStyleRequest): Promise<RecognizeImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageStyleWithOptions(request, runtime);
  }

  async recolorImageWithOptions(request: RecolorImageRequest, runtime: $Util.RuntimeOptions): Promise<RecolorImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.colorCount)) {
      body["ColorCount"] = request.colorCount;
    }

    if (!Util.isUnset(request.colorTemplate)) {
      body["ColorTemplate"] = request.colorTemplate;
    }

    if (!Util.isUnset(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.refUrl)) {
      body["RefUrl"] = request.refUrl;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecolorImage",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecolorImageResponse>(await this.callApi(params, req, runtime), new RecolorImageResponse({}));
  }

  async recolorImage(request: RecolorImageRequest): Promise<RecolorImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recolorImageWithOptions(request, runtime);
  }

  async segmentBodyWithOptions(request: SegmentBodyRequest, runtime: $Util.RuntimeOptions): Promise<SegmentBodyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SegmentBody",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SegmentBodyResponse>(await this.callApi(params, req, runtime), new SegmentBodyResponse({}));
  }

  async segmentBody(request: SegmentBodyRequest): Promise<SegmentBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentBodyWithOptions(request, runtime);
  }

  async segmentCommodityWithOptions(request: SegmentCommodityRequest, runtime: $Util.RuntimeOptions): Promise<SegmentCommodityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageURL)) {
      query["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SegmentCommodity",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SegmentCommodityResponse>(await this.callApi(params, req, runtime), new SegmentCommodityResponse({}));
  }

  async segmentCommodity(request: SegmentCommodityRequest): Promise<SegmentCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentCommodityWithOptions(request, runtime);
  }

  async segmentImageWithOptions(request: SegmentImageRequest, runtime: $Util.RuntimeOptions): Promise<SegmentImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SegmentImage",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SegmentImageResponse>(await this.callApi(params, req, runtime), new SegmentImageResponse({}));
  }

  async segmentImage(request: SegmentImageRequest): Promise<SegmentImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentImageWithOptions(request, runtime);
  }

  async updateUserBucketConfigWithOptions(request: UpdateUserBucketConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserBucketConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserBucketConfig",
      version: "2019-06-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserBucketConfigResponse>(await this.callApi(params, req, runtime), new UpdateUserBucketConfigResponse({}));
  }

  async updateUserBucketConfig(request: UpdateUserBucketConfigRequest): Promise<UpdateUserBucketConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserBucketConfigWithOptions(request, runtime);
  }

}
