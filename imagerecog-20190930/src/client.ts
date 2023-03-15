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

export class ClassifyingRubbishResponseBody extends $tea.Model {
  data?: ClassifyingRubbishResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ClassifyingRubbishResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClassifyingRubbishResponseBody;
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

export class DetectFruitsResponseBody extends $tea.Model {
  data?: DetectFruitsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectFruitsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectFruitsResponseBody;
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
      body: DetectFruitsResponseBody,
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
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'Url',
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
  data?: DetectImageElementsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectImageElementsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageElementsResponseBody;
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
      body: DetectImageElementsResponseBody,
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
  imageURLObject?: Readable;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
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
  data?: EvaluateCertificateQualityResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EvaluateCertificateQualityResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EvaluateCertificateQualityResponseBody;
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
      body: EvaluateCertificateQualityResponseBody,
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

export class RecognizeFoodResponseBody extends $tea.Model {
  data?: RecognizeFoodResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeFoodResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFoodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeFoodResponseBody;
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
      body: RecognizeFoodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorRequest extends $tea.Model {
  colorCount?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorAdvanceRequest extends $tea.Model {
  colorCount?: number;
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      urlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseBody extends $tea.Model {
  data?: RecognizeImageColorResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeImageColorResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeImageColorResponseBody;
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

export class RecognizeImageStyleAdvanceRequest extends $tea.Model {
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'Url',
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
  data?: RecognizeImageStyleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeImageStyleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageStyleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeImageStyleResponseBody;
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
      body: RecognizeImageStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneRequest extends $tea.Model {
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

export class RecognizeSceneAdvanceRequest extends $tea.Model {
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

export class RecognizeSceneResponseBody extends $tea.Model {
  data?: RecognizeSceneResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeSceneResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeSceneResponseBody;
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
      body: RecognizeSceneResponseBody,
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

export class RecognizeVehicleTypeResponseBody extends $tea.Model {
  data?: RecognizeVehicleTypeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVehicleTypeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeVehicleTypeResponseBody;
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
      body: RecognizeVehicleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingAdImageRequest extends $tea.Model {
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

export class TaggingAdImageAdvanceRequest extends $tea.Model {
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

export class TaggingAdImageResponseBody extends $tea.Model {
  data?: TaggingAdImageResponseBodyData;
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
      data: TaggingAdImageResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingAdImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaggingAdImageResponseBody;
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
      body: TaggingAdImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageRequest extends $tea.Model {
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

export class TaggingImageAdvanceRequest extends $tea.Model {
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

export class TaggingImageResponseBody extends $tea.Model {
  data?: TaggingImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TaggingImageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaggingImageResponseBody;
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
      body: TaggingImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponseBodyDataElements extends $tea.Model {
  category?: string;
  categoryScore?: number;
  rubbish?: string;
  rubbishScore?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      categoryScore: 'CategoryScore',
      rubbish: 'Rubbish',
      rubbishScore: 'RubbishScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryScore: 'number',
      rubbish: 'string',
      rubbishScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponseBodyData extends $tea.Model {
  elements?: ClassifyingRubbishResponseBodyDataElements[];
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      sensitive: 'Sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ClassifyingRubbishResponseBodyDataElements },
      sensitive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponseBodyDataElements extends $tea.Model {
  box?: number[];
  name?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      name: 'Name',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      score: 'number',
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

export class EvaluateCertificateQualityResponseBodyDataElements extends $tea.Model {
  pass?: string;
  score?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      pass: 'Pass',
      score: 'Score',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pass: 'string',
      score: 'string',
      value: 'string',
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

export class RecognizeFoodResponseBodyDataTopFives extends $tea.Model {
  calorie?: string;
  category?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      calorie: 'Calorie',
      category: 'Category',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calorie: 'string',
      category: 'string',
      score: 'number',
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

export class RecognizeSceneResponseBodyDataTags extends $tea.Model {
  confidence?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
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

export class RecognizeVehicleTypeResponseBodyDataElements extends $tea.Model {
  name?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      score: 'number',
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

export class TaggingAdImageResponseBodyData extends $tea.Model {
  tagInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponseBodyDataTags extends $tea.Model {
  confidence?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
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

  async classifyingRubbishWithOptions(request: ClassifyingRubbishRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyingRubbishResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ClassifyingRubbish",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClassifyingRubbishResponse>(await this.callApi(params, req, runtime), new ClassifyingRubbishResponse({}));
  }

  async classifyingRubbish(request: ClassifyingRubbishRequest): Promise<ClassifyingRubbishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyingRubbishWithOptions(request, runtime);
  }

  async classifyingRubbishAdvance(request: ClassifyingRubbishAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyingRubbishResponse> {
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
      classifyingRubbishReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let classifyingRubbishResp = await this.classifyingRubbishWithOptions(classifyingRubbishReq, runtime);
    return classifyingRubbishResp;
  }

  async detectFruitsWithOptions(request: DetectFruitsRequest, runtime: $Util.RuntimeOptions): Promise<DetectFruitsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectFruits",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectFruitsResponse>(await this.callApi(params, req, runtime), new DetectFruitsResponse({}));
  }

  async detectFruits(request: DetectFruitsRequest): Promise<DetectFruitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFruitsWithOptions(request, runtime);
  }

  async detectFruitsAdvance(request: DetectFruitsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFruitsResponse> {
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
      detectFruitsReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectFruitsResp = await this.detectFruitsWithOptions(detectFruitsReq, runtime);
    return detectFruitsResp;
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
      version: "2019-09-30",
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

  async detectImageElementsAdvance(request: DetectImageElementsAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageElementsResponse> {
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
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
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
      detectImageElementsReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectImageElementsResp = await this.detectImageElementsWithOptions(detectImageElementsReq, runtime);
    return detectImageElementsResp;
  }

  async evaluateCertificateQualityWithOptions(request: EvaluateCertificateQualityRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateCertificateQualityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EvaluateCertificateQuality",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EvaluateCertificateQualityResponse>(await this.callApi(params, req, runtime), new EvaluateCertificateQualityResponse({}));
  }

  async evaluateCertificateQuality(request: EvaluateCertificateQualityRequest): Promise<EvaluateCertificateQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateCertificateQualityWithOptions(request, runtime);
  }

  async evaluateCertificateQualityAdvance(request: EvaluateCertificateQualityAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateCertificateQualityResponse> {
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
      evaluateCertificateQualityReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let evaluateCertificateQualityResp = await this.evaluateCertificateQualityWithOptions(evaluateCertificateQualityReq, runtime);
    return evaluateCertificateQualityResp;
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncJobResult",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
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

  async recognizeFoodWithOptions(request: RecognizeFoodRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeFood",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeFoodResponse>(await this.callApi(params, req, runtime), new RecognizeFoodResponse({}));
  }

  async recognizeFood(request: RecognizeFoodRequest): Promise<RecognizeFoodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFoodWithOptions(request, runtime);
  }

  async recognizeFoodAdvance(request: RecognizeFoodAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFoodResponse> {
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
      recognizeFoodReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeFoodResp = await this.recognizeFoodWithOptions(recognizeFoodReq, runtime);
    return recognizeFoodResp;
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
      version: "2019-09-30",
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

  async recognizeImageColorAdvance(request: RecognizeImageColorAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageColorResponse> {
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
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
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
      recognizeImageColorReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeImageColorResp = await this.recognizeImageColorWithOptions(recognizeImageColorReq, runtime);
    return recognizeImageColorResp;
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
      version: "2019-09-30",
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

  async recognizeImageStyleAdvance(request: RecognizeImageStyleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageStyleResponse> {
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
    if (!Util.isUnset(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
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
      recognizeImageStyleReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeImageStyleResp = await this.recognizeImageStyleWithOptions(recognizeImageStyleReq, runtime);
    return recognizeImageStyleResp;
  }

  async recognizeSceneWithOptions(request: RecognizeSceneRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeScene",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeSceneResponse>(await this.callApi(params, req, runtime), new RecognizeSceneResponse({}));
  }

  async recognizeScene(request: RecognizeSceneRequest): Promise<RecognizeSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeSceneWithOptions(request, runtime);
  }

  async recognizeSceneAdvance(request: RecognizeSceneAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSceneResponse> {
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
      recognizeSceneReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeSceneResp = await this.recognizeSceneWithOptions(recognizeSceneReq, runtime);
    return recognizeSceneResp;
  }

  async recognizeVehicleTypeWithOptions(request: RecognizeVehicleTypeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeVehicleType",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeVehicleTypeResponse>(await this.callApi(params, req, runtime), new RecognizeVehicleTypeResponse({}));
  }

  async recognizeVehicleType(request: RecognizeVehicleTypeRequest): Promise<RecognizeVehicleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleTypeWithOptions(request, runtime);
  }

  async recognizeVehicleTypeAdvance(request: RecognizeVehicleTypeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleTypeResponse> {
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
      recognizeVehicleTypeReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let recognizeVehicleTypeResp = await this.recognizeVehicleTypeWithOptions(recognizeVehicleTypeReq, runtime);
    return recognizeVehicleTypeResp;
  }

  async taggingAdImageWithOptions(request: TaggingAdImageRequest, runtime: $Util.RuntimeOptions): Promise<TaggingAdImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TaggingAdImage",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaggingAdImageResponse>(await this.callApi(params, req, runtime), new TaggingAdImageResponse({}));
  }

  async taggingAdImage(request: TaggingAdImageRequest): Promise<TaggingAdImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taggingAdImageWithOptions(request, runtime);
  }

  async taggingAdImageAdvance(request: TaggingAdImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TaggingAdImageResponse> {
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
    let taggingAdImageReq = new TaggingAdImageRequest({ });
    OpenApiUtil.convert(request, taggingAdImageReq);
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
      taggingAdImageReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let taggingAdImageResp = await this.taggingAdImageWithOptions(taggingAdImageReq, runtime);
    return taggingAdImageResp;
  }

  async taggingImageWithOptions(request: TaggingImageRequest, runtime: $Util.RuntimeOptions): Promise<TaggingImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageURL)) {
      body["ImageURL"] = request.imageURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TaggingImage",
      version: "2019-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaggingImageResponse>(await this.callApi(params, req, runtime), new TaggingImageResponse({}));
  }

  async taggingImage(request: TaggingImageRequest): Promise<TaggingImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taggingImageWithOptions(request, runtime);
  }

  async taggingImageAdvance(request: TaggingImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TaggingImageResponse> {
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
      taggingImageReq.imageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let taggingImageResp = await this.taggingImageWithOptions(taggingImageReq, runtime);
    return taggingImageResp;
  }

}
