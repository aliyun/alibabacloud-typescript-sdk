// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ScanImageRequest extends $tea.Model {
  task?: ScanImageRequestTask[];
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': ScanImageRequestTask },
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBody extends $tea.Model {
  requestId?: string;
  data?: ScanImageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ScanImageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScanImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScanImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequest extends $tea.Model {
  tasks?: ScanTextRequestTasks[];
  labels?: ScanTextRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': ScanTextRequestTasks },
      labels: { 'type': 'array', 'itemType': ScanTextRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBody extends $tea.Model {
  requestId?: string;
  data?: ScanTextResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ScanTextResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScanTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScanTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageRequestTask extends $tea.Model {
  imageTimeMillisecond?: number;
  interval?: number;
  imageURL?: string;
  maxFrames?: number;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      imageTimeMillisecond: 'ImageTimeMillisecond',
      interval: 'Interval',
      imageURL: 'ImageURL',
      maxFrames: 'MaxFrames',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTimeMillisecond: 'number',
      interval: 'number',
      imageURL: 'string',
      maxFrames: 'number',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces extends $tea.Model {
  name?: string;
  id?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsSfaceDataList extends $tea.Model {
  width?: number;
  faces?: ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces[];
  height?: number;
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      faces: 'Faces',
      height: 'Height',
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      faces: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsSfaceDataListFaces },
      height: 'number',
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList extends $tea.Model {
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList extends $tea.Model {
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

export class ScanImageResponseBodyDataResultsSubResultsFrames extends $tea.Model {
  URL?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResultsLogoDataList extends $tea.Model {
  type?: string;
  width?: number;
  height?: number;
  y?: number;
  name?: string;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      width: 'Width',
      height: 'Height',
      y: 'Y',
      name: 'Name',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      width: 'number',
      height: 'number',
      y: 'number',
      name: 'string',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResultsSubResults extends $tea.Model {
  sfaceDataList?: ScanImageResponseBodyDataResultsSubResultsSfaceDataList[];
  hintWordsInfoList?: ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList[];
  suggestion?: string;
  programCodeDataList?: ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList[];
  OCRDataList?: string[];
  frames?: ScanImageResponseBodyDataResultsSubResultsFrames[];
  logoDataList?: ScanImageResponseBodyDataResultsSubResultsLogoDataList[];
  label?: string;
  scene?: string;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      sfaceDataList: 'SfaceDataList',
      hintWordsInfoList: 'HintWordsInfoList',
      suggestion: 'Suggestion',
      programCodeDataList: 'ProgramCodeDataList',
      OCRDataList: 'OCRDataList',
      frames: 'Frames',
      logoDataList: 'LogoDataList',
      label: 'Label',
      scene: 'Scene',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sfaceDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsSfaceDataList },
      hintWordsInfoList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsHintWordsInfoList },
      suggestion: 'string',
      programCodeDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsProgramCodeDataList },
      OCRDataList: { 'type': 'array', 'itemType': 'string' },
      frames: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsFrames },
      logoDataList: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResultsLogoDataList },
      label: 'string',
      scene: 'string',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyDataResults extends $tea.Model {
  imageURL?: string;
  dataId?: string;
  subResults?: ScanImageResponseBodyDataResultsSubResults[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      dataId: 'DataId',
      subResults: 'SubResults',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      dataId: 'string',
      subResults: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResultsSubResults },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseBodyData extends $tea.Model {
  results?: ScanImageResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': ScanImageResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequestTasks extends $tea.Model {
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

export class ScanTextRequestLabels extends $tea.Model {
  label?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResultsDetailsContexts extends $tea.Model {
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResultsDetails extends $tea.Model {
  label?: string;
  contexts?: ScanTextResponseBodyDataElementsResultsDetailsContexts[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      contexts: 'Contexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      contexts: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResultsDetailsContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResults extends $tea.Model {
  suggestion?: string;
  label?: string;
  rate?: number;
  details?: ScanTextResponseBodyDataElementsResultsDetails[];
  static names(): { [key: string]: string } {
    return {
      suggestion: 'Suggestion',
      label: 'Label',
      rate: 'Rate',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestion: 'string',
      label: 'string',
      rate: 'number',
      details: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResultsDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElements extends $tea.Model {
  taskId?: string;
  results?: ScanTextResponseBodyDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      results: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyData extends $tea.Model {
  elements?: ScanTextResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElements },
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
    this._endpoint = this.getEndpoint("imageaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async scanImageWithOptions(request: ScanImageRequest, runtime: $Util.RuntimeOptions): Promise<ScanImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScanImageResponse>(await this.doRPCRequest("ScanImage", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ScanImageResponse({}));
  }

  async scanImage(request: ScanImageRequest): Promise<ScanImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanImageWithOptions(request, runtime);
  }

  async scanTextWithOptions(request: ScanTextRequest, runtime: $Util.RuntimeOptions): Promise<ScanTextResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScanTextResponse>(await this.doRPCRequest("ScanText", "2019-12-30", "HTTPS", "POST", "AK", "json", req, runtime), new ScanTextResponse({}));
  }

  async scanText(request: ScanTextRequest): Promise<ScanTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanTextWithOptions(request, runtime);
  }

}
