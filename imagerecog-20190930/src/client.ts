// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class EvaluateCertificateQualityRequest extends $tea.Model {
  imageURL: string;
  type: string;
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

export class EvaluateCertificateQualityResponse extends $tea.Model {
  requestId: string;
  data: EvaluateCertificateQualityResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EvaluateCertificateQualityResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateCertificateQualityAdvanceRequest extends $tea.Model {
  imageURLObject: Readable;
  type: string;
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

export class DetectFruitsRequest extends $tea.Model {
  imageURL: string;
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

export class DetectFruitsResponse extends $tea.Model {
  requestId: string;
  data: DetectFruitsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectFruitsResponseData,
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

export class ClassifyingRubbishRequest extends $tea.Model {
  imageURL: string;
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

export class ClassifyingRubbishResponse extends $tea.Model {
  requestId: string;
  data: ClassifyingRubbishResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ClassifyingRubbishResponseData,
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

export class RecognizeVehicleTypeRequest extends $tea.Model {
  imageURL: string;
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

export class RecognizeVehicleTypeResponse extends $tea.Model {
  requestId: string;
  data: RecognizeVehicleTypeResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeVehicleTypeResponseData,
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

export class RecognizeLogoRequest extends $tea.Model {
  tasks: RecognizeLogoRequestTasks[];
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

export class RecognizeLogoResponse extends $tea.Model {
  requestId: string;
  data: RecognizeLogoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeLogoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageRequest extends $tea.Model {
  imageURL: string;
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

export class TaggingImageResponse extends $tea.Model {
  requestId: string;
  data: TaggingImageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TaggingImageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageAdvanceRequest extends $tea.Model {
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

export class RecognizeSceneRequest extends $tea.Model {
  imageURL: string;
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

export class RecognizeSceneResponse extends $tea.Model {
  requestId: string;
  data: RecognizeSceneResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeSceneResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneAdvanceRequest extends $tea.Model {
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

export class RecognizeImageColorRequest extends $tea.Model {
  url: string;
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

export class RecognizeImageColorResponse extends $tea.Model {
  requestId: string;
  data: RecognizeImageColorResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeImageColorResponseData,
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

export class DetectImageElementsRequest extends $tea.Model {
  url: string;
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

export class DetectImageElementsResponse extends $tea.Model {
  requestId: string;
  data: DetectImageElementsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectImageElementsResponseData,
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

export class RecognizeImageStyleRequest extends $tea.Model {
  url: string;
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

export class RecognizeImageStyleResponse extends $tea.Model {
  requestId: string;
  data: RecognizeImageStyleResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RecognizeImageStyleResponseData,
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

export class EvaluateCertificateQualityResponseDataElements extends $tea.Model {
  value: string;
  pass: string;
  score: string;
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

export class EvaluateCertificateQualityResponseData extends $tea.Model {
  elements: EvaluateCertificateQualityResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': EvaluateCertificateQualityResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponseDataElements extends $tea.Model {
  name: string;
  score: number;
  box: number[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      score: 'Score',
      box: 'Box',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      score: 'number',
      box: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFruitsResponseData extends $tea.Model {
  elements: DetectFruitsResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectFruitsResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyingRubbishResponseDataElements extends $tea.Model {
  category: string;
  categoryScore: number;
  rubbish: string;
  rubbishScore: number;
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

export class ClassifyingRubbishResponseData extends $tea.Model {
  sensitive: boolean;
  elements: ClassifyingRubbishResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      sensitive: 'Sensitive',
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitive: 'boolean',
      elements: { 'type': 'array', 'itemType': ClassifyingRubbishResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVehicleTypeResponseDataElements extends $tea.Model {
  name: string;
  score: number;
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

export class RecognizeVehicleTypeResponseData extends $tea.Model {
  threshold: number;
  elements: RecognizeVehicleTypeResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'number',
      elements: { 'type': 'array', 'itemType': RecognizeVehicleTypeResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoRequestTasks extends $tea.Model {
  imageURL: string;
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

export class RecognizeLogoResponseDataElementsResultsLogosData extends $tea.Model {
  name: string;
  type: string;
  x: number;
  y: number;
  h: number;
  w: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      x: 'X',
      y: 'Y',
      h: 'H',
      w: 'W',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      x: 'number',
      y: 'number',
      h: 'number',
      w: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseDataElementsResults extends $tea.Model {
  label: string;
  suggestion: string;
  rate: number;
  logosData: RecognizeLogoResponseDataElementsResultsLogosData[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      suggestion: 'Suggestion',
      rate: 'Rate',
      logosData: 'LogosData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      suggestion: 'string',
      rate: 'number',
      logosData: { 'type': 'array', 'itemType': RecognizeLogoResponseDataElementsResultsLogosData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseDataElements extends $tea.Model {
  taskId: string;
  imageURL: string;
  results: RecognizeLogoResponseDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      imageURL: 'ImageURL',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': RecognizeLogoResponseDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLogoResponseData extends $tea.Model {
  elements: RecognizeLogoResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeLogoResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaggingImageResponseDataTags extends $tea.Model {
  confidence: number;
  value: string;
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

export class TaggingImageResponseData extends $tea.Model {
  tags: TaggingImageResponseDataTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': TaggingImageResponseDataTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeSceneResponseDataTags extends $tea.Model {
  confidence: number;
  value: string;
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

export class RecognizeSceneResponseData extends $tea.Model {
  tags: RecognizeSceneResponseDataTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': RecognizeSceneResponseDataTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageColorResponseDataColorTemplateList extends $tea.Model {
  color: string;
  label: string;
  percentage: number;
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

export class RecognizeImageColorResponseData extends $tea.Model {
  colorTemplateList: RecognizeImageColorResponseDataColorTemplateList[];
  static names(): { [key: string]: string } {
    return {
      colorTemplateList: 'ColorTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorTemplateList: { 'type': 'array', 'itemType': RecognizeImageColorResponseDataColorTemplateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponseDataElements extends $tea.Model {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  score: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageElementsResponseData extends $tea.Model {
  elements: DetectImageElementsResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectImageElementsResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageStyleResponseData extends $tea.Model {
  styles: string[];
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


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imagerecog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async evaluateCertificateQuality(request: EvaluateCertificateQualityRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateCertificateQualityResponse> {
    Util.validateModel(request);
    return $tea.cast<EvaluateCertificateQualityResponse>(await this.doRequest("EvaluateCertificateQuality", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new EvaluateCertificateQualityResponse({}));
  }

  async evaluateCertificateQualitySimply(request: EvaluateCertificateQualityRequest): Promise<EvaluateCertificateQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateCertificateQuality(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let evaluateCertificateQualityReq = new EvaluateCertificateQualityRequest({ });
    RPCUtil.convert(request, evaluateCertificateQualityReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let evaluateCertificateQualityResp = await this.evaluateCertificateQuality(evaluateCertificateQualityReq, runtime);
    return evaluateCertificateQualityResp;
  }

  async detectFruits(request: DetectFruitsRequest, runtime: $Util.RuntimeOptions): Promise<DetectFruitsResponse> {
    Util.validateModel(request);
    return $tea.cast<DetectFruitsResponse>(await this.doRequest("DetectFruits", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new DetectFruitsResponse({}));
  }

  async detectFruitsSimply(request: DetectFruitsRequest): Promise<DetectFruitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFruits(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let detectFruitsReq = new DetectFruitsRequest({ });
    RPCUtil.convert(request, detectFruitsReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let detectFruitsResp = await this.detectFruits(detectFruitsReq, runtime);
    return detectFruitsResp;
  }

  async classifyingRubbish(request: ClassifyingRubbishRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyingRubbishResponse> {
    Util.validateModel(request);
    return $tea.cast<ClassifyingRubbishResponse>(await this.doRequest("ClassifyingRubbish", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new ClassifyingRubbishResponse({}));
  }

  async classifyingRubbishSimply(request: ClassifyingRubbishRequest): Promise<ClassifyingRubbishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyingRubbish(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let classifyingRubbishReq = new ClassifyingRubbishRequest({ });
    RPCUtil.convert(request, classifyingRubbishReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let classifyingRubbishResp = await this.classifyingRubbish(classifyingRubbishReq, runtime);
    return classifyingRubbishResp;
  }

  async recognizeVehicleType(request: RecognizeVehicleTypeRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeVehicleTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeVehicleTypeResponse>(await this.doRequest("RecognizeVehicleType", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new RecognizeVehicleTypeResponse({}));
  }

  async recognizeVehicleTypeSimply(request: RecognizeVehicleTypeRequest): Promise<RecognizeVehicleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeVehicleType(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let recognizeVehicleTypeReq = new RecognizeVehicleTypeRequest({ });
    RPCUtil.convert(request, recognizeVehicleTypeReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let recognizeVehicleTypeResp = await this.recognizeVehicleType(recognizeVehicleTypeReq, runtime);
    return recognizeVehicleTypeResp;
  }

  async recognizeLogo(request: RecognizeLogoRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeLogoResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeLogoResponse>(await this.doRequest("RecognizeLogo", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new RecognizeLogoResponse({}));
  }

  async recognizeLogoSimply(request: RecognizeLogoRequest): Promise<RecognizeLogoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeLogo(request, runtime);
  }

  async taggingImage(request: TaggingImageRequest, runtime: $Util.RuntimeOptions): Promise<TaggingImageResponse> {
    Util.validateModel(request);
    return $tea.cast<TaggingImageResponse>(await this.doRequest("TaggingImage", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new TaggingImageResponse({}));
  }

  async taggingImageSimply(request: TaggingImageRequest): Promise<TaggingImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taggingImage(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let taggingImageReq = new TaggingImageRequest({ });
    RPCUtil.convert(request, taggingImageReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let taggingImageResp = await this.taggingImage(taggingImageReq, runtime);
    return taggingImageResp;
  }

  async recognizeScene(request: RecognizeSceneRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeSceneResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeSceneResponse>(await this.doRequest("RecognizeScene", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new RecognizeSceneResponse({}));
  }

  async recognizeSceneSimply(request: RecognizeSceneRequest): Promise<RecognizeSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeScene(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let recognizeSceneReq = new RecognizeSceneRequest({ });
    RPCUtil.convert(request, recognizeSceneReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let recognizeSceneResp = await this.recognizeScene(recognizeSceneReq, runtime);
    return recognizeSceneResp;
  }

  async recognizeImageColor(request: RecognizeImageColorRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageColorResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeImageColorResponse>(await this.doRequest("RecognizeImageColor", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new RecognizeImageColorResponse({}));
  }

  async recognizeImageColorSimply(request: RecognizeImageColorRequest): Promise<RecognizeImageColorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageColor(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let recognizeImageColorReq = new RecognizeImageColorRequest({ });
    RPCUtil.convert(request, recognizeImageColorReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let recognizeImageColorResp = await this.recognizeImageColor(recognizeImageColorReq, runtime);
    return recognizeImageColorResp;
  }

  async detectImageElements(request: DetectImageElementsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageElementsResponse> {
    Util.validateModel(request);
    return $tea.cast<DetectImageElementsResponse>(await this.doRequest("DetectImageElements", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new DetectImageElementsResponse({}));
  }

  async detectImageElementsSimply(request: DetectImageElementsRequest): Promise<DetectImageElementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageElements(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let detectImageElementsReq = new DetectImageElementsRequest({ });
    RPCUtil.convert(request, detectImageElementsReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let detectImageElementsResp = await this.detectImageElements(detectImageElementsReq, runtime);
    return detectImageElementsResp;
  }

  async recognizeImageStyle(request: RecognizeImageStyleRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageStyleResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeImageStyleResponse>(await this.doRequest("RecognizeImageStyle", "HTTPS", "POST", "2019-09-30", "AK", null, $tea.toMap(request), runtime), new RecognizeImageStyleResponse({}));
  }

  async recognizeImageStyleSimply(request: RecognizeImageStyleRequest): Promise<RecognizeImageStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageStyle(request, runtime);
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
    RPCUtil.convert(runtime, ossRuntime);
    let recognizeImageStyleReq = new RecognizeImageStyleRequest({ });
    RPCUtil.convert(request, recognizeImageStyleReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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
    let recognizeImageStyleResp = await this.recognizeImageStyle(recognizeImageStyleReq, runtime);
    return recognizeImageStyleResp;
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

}
