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

export class GetAsyncJobResultRequest extends $tea.Model {
  jobId?: string;
  async?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      async: 'string',
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

export class DetectImageElementsAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectImageElementsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectImageElementsResponseBodyData,
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

export class RecognizeVehicleTypeRequest extends $tea.Model {
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

export class RecognizeVehicleTypeAdvanceRequest extends $tea.Model {
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

export class RecognizeVehicleTypeResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeVehicleTypeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVehicleTypeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeVehicleTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeVehicleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodRequest extends $tea.Model {
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

export class RecognizeFoodAdvanceRequest extends $tea.Model {
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

export class RecognizeFoodResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeFoodResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeFoodResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFoodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFoodResponseBody,
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

export class RecognizeImageStyleAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageStyleResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeImageStyleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeImageStyleResponseBodyData,
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

export class RecognizeSceneRequest extends $tea.Model {
  imageType?: number;
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageType: 'ImageType',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'number',
      imageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  imageType?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      imageType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeSceneResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeSceneResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishRequest extends $tea.Model {
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

export class ClassifyingRubbishAdvanceRequest extends $tea.Model {
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

export class ClassifyingRubbishResponseBody extends $tea.Model {
  requestId?: string;
  data?: ClassifyingRubbishResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ClassifyingRubbishResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClassifyingRubbishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClassifyingRubbishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsRequest extends $tea.Model {
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

export class DetectFruitsAdvanceRequest extends $tea.Model {
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

export class DetectFruitsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectFruitsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectFruitsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectFruitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectFruitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorRequest extends $tea.Model {
  url?: string;
  colorCount?: number;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      colorCount: 'ColorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      colorCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  colorCount?: number;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      colorCount: 'ColorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      colorCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeImageColorResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeImageColorResponseBodyData,
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

export class RecognizeLogoRequest extends $tea.Model {
  tasks?: RecognizeLogoRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': RecognizeLogoRequestTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseBody extends $tea.Model {
  requestId?: string;
  data?: RecognizeLogoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeLogoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeLogoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeLogoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageRequest extends $tea.Model {
  imageType?: number;
  imageURL?: string;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageType: 'ImageType',
      imageURL: 'ImageURL',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'number',
      imageURL: 'string',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  imageType?: number;
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      imageType: 'ImageType',
      async: 'Async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      imageType: 'number',
      async: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: TaggingImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TaggingImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TaggingImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TaggingImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityRequest extends $tea.Model {
  imageURL?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURLObject',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityResponseBody extends $tea.Model {
  requestId?: string;
  data?: EvaluateCertificateQualityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EvaluateCertificateQualityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EvaluateCertificateQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EvaluateCertificateQualityResponseBody,
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

export class RecognizeVehicleTypeResponseBodyDataElements extends $tea.Model {
  score?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleTypeResponseBodyData extends $tea.Model {
  elements?: RecognizeVehicleTypeResponseBodyDataElements[];
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeVehicleTypeResponseBodyDataElements },
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodResponseBodyDataTopFives extends $tea.Model {
  category?: string;
  score?: number;
  calorie?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      score: 'Score',
      calorie: 'Calorie',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      score: 'number',
      calorie: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodResponseBodyData extends $tea.Model {
  topFives?: RecognizeFoodResponseBodyDataTopFives[];
  static names(): { [key: string]: string } {
    return {
      topFives: 'TopFives',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topFives: { 'type': 'array', 'itemType': RecognizeFoodResponseBodyDataTopFives },
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

export class RecognizeSceneResponseBodyDataTags extends $tea.Model {
  value?: string;
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneResponseBodyData extends $tea.Model {
  tags?: RecognizeSceneResponseBodyDataTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': RecognizeSceneResponseBodyDataTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponseBodyDataElements extends $tea.Model {
  categoryScore?: number;
  rubbish?: string;
  rubbishScore?: number;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      categoryScore: 'CategoryScore',
      rubbish: 'Rubbish',
      rubbishScore: 'RubbishScore',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryScore: 'number',
      rubbish: 'string',
      rubbishScore: 'number',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponseBodyData extends $tea.Model {
  sensitive?: boolean;
  elements?: ClassifyingRubbishResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      sensitive: 'Sensitive',
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitive: 'boolean',
      elements: { 'type': 'array', 'itemType': ClassifyingRubbishResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponseBodyDataElements extends $tea.Model {
  score?: number;
  box?: number[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      box: 'Box',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      box: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponseBodyData extends $tea.Model {
  elements?: DetectFruitsResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectFruitsResponseBodyDataElements },
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

export class RecognizeLogoRequestTasks extends $tea.Model {
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

export class RecognizeLogoResponseBodyDataElementsResultsLogosData extends $tea.Model {
  type?: string;
  w?: number;
  h?: number;
  y?: number;
  name?: string;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      w: 'W',
      h: 'H',
      y: 'Y',
      name: 'Name',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      w: 'number',
      h: 'number',
      y: 'number',
      name: 'string',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseBodyDataElementsResults extends $tea.Model {
  suggestion?: string;
  logosData?: RecognizeLogoResponseBodyDataElementsResultsLogosData[];
  label?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      logosData: 'LogosData',
      label: 'Label',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      logosData: { 'type': 'array', 'itemType': RecognizeLogoResponseBodyDataElementsResultsLogosData },
      label: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseBodyDataElements extends $tea.Model {
  imageURL?: string;
  taskId?: string;
  results?: RecognizeLogoResponseBodyDataElementsResults[];
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
      results: { 'type': 'array', 'itemType': RecognizeLogoResponseBodyDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseBodyData extends $tea.Model {
  elements?: RecognizeLogoResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeLogoResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponseBodyDataTags extends $tea.Model {
  value?: string;
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponseBodyData extends $tea.Model {
  tags?: TaggingImageResponseBodyDataTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': TaggingImageResponseBodyDataTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityResponseBodyDataElements extends $tea.Model {
  value?: string;
  pass?: string;
  score?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      pass: 'Pass',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      pass: 'string',
      score: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityResponseBodyData extends $tea.Model {
  elements?: EvaluateCertificateQualityResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': EvaluateCertificateQualityResponseBodyDataElements },
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
    this._endpoint = this.getEndpoint("imagerecog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2019-09-30", "HTTPS", "GET", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async detectImageElementsWithOptions(request: DetectImageElementsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageElementsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageElementsResponse>(await this.doRPCRequest("DetectImageElements", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageElementsResponse({}));
  }

  async detectImageElements(request: DetectImageElementsRequest): Promise<DetectImageElementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageElementsWithOptions(request, runtime);
  }

  async detectImageElementsAdvance(request: DetectImageElementsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageElementsResponse> {
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
      product: "imagerecog",
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
    let detectImageElementsReq = new DetectImageElementsRequest({ });
    OpenApiUtil.convert(request, detectImageElementsReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
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
    detectImageElementsReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectImageElementsResp = await this.detectImageElementsWithOptions(detectImageElementsReq, runtime);
    return detectImageElementsResp;
  }

  async recognizeVehicleTypeWithOptions(request: RecognizeVehicleTypeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeVehicleTypeResponse>(await this.doRPCRequest("RecognizeVehicleType", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeVehicleTypeResponse({}));
  }

  async recognizeVehicleType(request: RecognizeVehicleTypeRequest): Promise<RecognizeVehicleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleTypeWithOptions(request, runtime);
  }

  async recognizeVehicleTypeAdvance(request: RecognizeVehicleTypeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleTypeResponse> {
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
      product: "imagerecog",
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
    let recognizeVehicleTypeReq = new RecognizeVehicleTypeRequest({ });
    OpenApiUtil.convert(request, recognizeVehicleTypeReq);
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
    recognizeVehicleTypeReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeVehicleTypeResp = await this.recognizeVehicleTypeWithOptions(recognizeVehicleTypeReq, runtime);
    return recognizeVehicleTypeResp;
  }

  async recognizeFoodWithOptions(request: RecognizeFoodRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeFoodResponse>(await this.doRPCRequest("RecognizeFood", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeFoodResponse({}));
  }

  async recognizeFood(request: RecognizeFoodRequest): Promise<RecognizeFoodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodWithOptions(request, runtime);
  }

  async recognizeFoodAdvance(request: RecognizeFoodAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodResponse> {
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
      product: "imagerecog",
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
    let recognizeFoodReq = new RecognizeFoodRequest({ });
    OpenApiUtil.convert(request, recognizeFoodReq);
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
    recognizeFoodReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeFoodResp = await this.recognizeFoodWithOptions(recognizeFoodReq, runtime);
    return recognizeFoodResp;
  }

  async recognizeImageStyleWithOptions(request: RecognizeImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageStyleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeImageStyleResponse>(await this.doRPCRequest("RecognizeImageStyle", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeImageStyleResponse({}));
  }

  async recognizeImageStyle(request: RecognizeImageStyleRequest): Promise<RecognizeImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageStyleWithOptions(request, runtime);
  }

  async recognizeImageStyleAdvance(request: RecognizeImageStyleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageStyleResponse> {
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
      product: "imagerecog",
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
    let recognizeImageStyleReq = new RecognizeImageStyleRequest({ });
    OpenApiUtil.convert(request, recognizeImageStyleReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
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
    recognizeImageStyleReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeImageStyleResp = await this.recognizeImageStyleWithOptions(recognizeImageStyleReq, runtime);
    return recognizeImageStyleResp;
  }

  async recognizeSceneWithOptions(request: RecognizeSceneRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeSceneResponse>(await this.doRPCRequest("RecognizeScene", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeSceneResponse({}));
  }

  async recognizeScene(request: RecognizeSceneRequest): Promise<RecognizeSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeSceneWithOptions(request, runtime);
  }

  async recognizeSceneAdvance(request: RecognizeSceneAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSceneResponse> {
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
      product: "imagerecog",
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
    let recognizeSceneReq = new RecognizeSceneRequest({ });
    OpenApiUtil.convert(request, recognizeSceneReq);
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
    recognizeSceneReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeSceneResp = await this.recognizeSceneWithOptions(recognizeSceneReq, runtime);
    return recognizeSceneResp;
  }

  async classifyingRubbishWithOptions(request: ClassifyingRubbishRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyingRubbishResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClassifyingRubbishResponse>(await this.doRPCRequest("ClassifyingRubbish", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ClassifyingRubbishResponse({}));
  }

  async classifyingRubbish(request: ClassifyingRubbishRequest): Promise<ClassifyingRubbishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyingRubbishWithOptions(request, runtime);
  }

  async classifyingRubbishAdvance(request: ClassifyingRubbishAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyingRubbishResponse> {
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
      product: "imagerecog",
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
    let classifyingRubbishReq = new ClassifyingRubbishRequest({ });
    OpenApiUtil.convert(request, classifyingRubbishReq);
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
    classifyingRubbishReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let classifyingRubbishResp = await this.classifyingRubbishWithOptions(classifyingRubbishReq, runtime);
    return classifyingRubbishResp;
  }

  async detectFruitsWithOptions(request: DetectFruitsRequest, runtime: $Util.RuntimeOptions): Promise<DetectFruitsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectFruitsResponse>(await this.doRPCRequest("DetectFruits", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetectFruitsResponse({}));
  }

  async detectFruits(request: DetectFruitsRequest): Promise<DetectFruitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFruitsWithOptions(request, runtime);
  }

  async detectFruitsAdvance(request: DetectFruitsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFruitsResponse> {
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
      product: "imagerecog",
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
    let detectFruitsReq = new DetectFruitsRequest({ });
    OpenApiUtil.convert(request, detectFruitsReq);
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
    detectFruitsReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let detectFruitsResp = await this.detectFruitsWithOptions(detectFruitsReq, runtime);
    return detectFruitsResp;
  }

  async recognizeImageColorWithOptions(request: RecognizeImageColorRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageColorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeImageColorResponse>(await this.doRPCRequest("RecognizeImageColor", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeImageColorResponse({}));
  }

  async recognizeImageColor(request: RecognizeImageColorRequest): Promise<RecognizeImageColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageColorWithOptions(request, runtime);
  }

  async recognizeImageColorAdvance(request: RecognizeImageColorAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageColorResponse> {
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
      product: "imagerecog",
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
    let recognizeImageColorReq = new RecognizeImageColorRequest({ });
    OpenApiUtil.convert(request, recognizeImageColorReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.urlObject,
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
    recognizeImageColorReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let recognizeImageColorResp = await this.recognizeImageColorWithOptions(recognizeImageColorReq, runtime);
    return recognizeImageColorResp;
  }

  async recognizeLogoWithOptions(request: RecognizeLogoRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLogoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeLogoResponse>(await this.doRPCRequest("RecognizeLogo", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeLogoResponse({}));
  }

  async recognizeLogo(request: RecognizeLogoRequest): Promise<RecognizeLogoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLogoWithOptions(request, runtime);
  }

  async taggingImageWithOptions(request: TaggingImageRequest, runtime: $Util.RuntimeOptions): Promise<TaggingImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TaggingImageResponse>(await this.doRPCRequest("TaggingImage", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new TaggingImageResponse({}));
  }

  async taggingImage(request: TaggingImageRequest): Promise<TaggingImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taggingImageWithOptions(request, runtime);
  }

  async taggingImageAdvance(request: TaggingImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TaggingImageResponse> {
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
      product: "imagerecog",
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
    let taggingImageReq = new TaggingImageRequest({ });
    OpenApiUtil.convert(request, taggingImageReq);
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
    taggingImageReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let taggingImageResp = await this.taggingImageWithOptions(taggingImageReq, runtime);
    return taggingImageResp;
  }

  async evaluateCertificateQualityWithOptions(request: EvaluateCertificateQualityRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateCertificateQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EvaluateCertificateQualityResponse>(await this.doRPCRequest("EvaluateCertificateQuality", "2019-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new EvaluateCertificateQualityResponse({}));
  }

  async evaluateCertificateQuality(request: EvaluateCertificateQualityRequest): Promise<EvaluateCertificateQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateCertificateQualityWithOptions(request, runtime);
  }

  async evaluateCertificateQualityAdvance(request: EvaluateCertificateQualityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateCertificateQualityResponse> {
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
      product: "imagerecog",
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
    let evaluateCertificateQualityReq = new EvaluateCertificateQualityRequest({ });
    OpenApiUtil.convert(request, evaluateCertificateQualityReq);
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
    evaluateCertificateQualityReq.imageURL = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let evaluateCertificateQualityResp = await this.evaluateCertificateQualityWithOptions(evaluateCertificateQualityReq, runtime);
    return evaluateCertificateQualityResp;
  }

}
