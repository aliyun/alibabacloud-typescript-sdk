// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ScanTextRequest extends $tea.Model {
  tasks: ScanTextRequestTasks[];
  labels: ScanTextRequestLabels[];
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

export class ScanTextResponse extends $tea.Model {
  requestId: string;
  data: ScanTextResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ScanTextResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageRequest extends $tea.Model {
  task: ScanImageRequestTask[];
  scene: string[];
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

export class ScanImageResponse extends $tea.Model {
  requestId: string;
  data: ScanImageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ScanImageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextRequestTasks extends $tea.Model {
  content: string;
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
  label: string;
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

export class ScanTextResponseDataElementsResultsDetailsContexts extends $tea.Model {
  context: string;
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

export class ScanTextResponseDataElementsResultsDetails extends $tea.Model {
  label: string;
  contexts: ScanTextResponseDataElementsResultsDetailsContexts[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      contexts: 'Contexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      contexts: { 'type': 'array', 'itemType': ScanTextResponseDataElementsResultsDetailsContexts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseDataElementsResults extends $tea.Model {
  label: string;
  suggestion: string;
  rate: number;
  details: ScanTextResponseDataElementsResultsDetails[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      suggestion: 'Suggestion',
      rate: 'Rate',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      suggestion: 'string',
      rate: 'number',
      details: { 'type': 'array', 'itemType': ScanTextResponseDataElementsResultsDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseDataElements extends $tea.Model {
  taskId: string;
  results: ScanTextResponseDataElementsResults[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      results: { 'type': 'array', 'itemType': ScanTextResponseDataElementsResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseData extends $tea.Model {
  elements: ScanTextResponseDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ScanTextResponseDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageRequestTask extends $tea.Model {
  dataId?: string;
  imageURL: string;
  imageTimeMillisecond?: number;
  interval?: number;
  maxFrames?: number;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageURL: 'ImageURL',
      imageTimeMillisecond: 'ImageTimeMillisecond',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageURL: 'string',
      imageTimeMillisecond: 'number',
      interval: 'number',
      maxFrames: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResultsSubResultsFrames extends $tea.Model {
  rate: number;
  URL: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'Rate',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResultsSubResultsHintWordsInfoList extends $tea.Model {
  context: string;
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

export class ScanImageResponseDataResultsSubResultsProgramCodeDataList extends $tea.Model {
  x: number;
  y: number;
  width: number;
  height: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResultsSubResultsLogoDataList extends $tea.Model {
  type: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResultsSubResultsSfaceDataListFaces extends $tea.Model {
  name: string;
  rate: number;
  id: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rate: 'Rate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResultsSubResultsSfaceDataList extends $tea.Model {
  x: number;
  y: number;
  width: number;
  height: number;
  faces: ScanImageResponseDataResultsSubResultsSfaceDataListFaces[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      width: 'Width',
      height: 'Height',
      faces: 'Faces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number',
      faces: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResultsSfaceDataListFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResultsSubResults extends $tea.Model {
  label: string;
  suggestion: string;
  rate: number;
  scene: string;
  frames: ScanImageResponseDataResultsSubResultsFrames[];
  hintWordsInfoList: ScanImageResponseDataResultsSubResultsHintWordsInfoList[];
  programCodeDataList: ScanImageResponseDataResultsSubResultsProgramCodeDataList[];
  logoDataList: ScanImageResponseDataResultsSubResultsLogoDataList[];
  sfaceDataList: ScanImageResponseDataResultsSubResultsSfaceDataList[];
  OCRDataList: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      suggestion: 'Suggestion',
      rate: 'Rate',
      scene: 'Scene',
      frames: 'Frames',
      hintWordsInfoList: 'HintWordsInfoList',
      programCodeDataList: 'ProgramCodeDataList',
      logoDataList: 'LogoDataList',
      sfaceDataList: 'SfaceDataList',
      OCRDataList: 'OCRDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      suggestion: 'string',
      rate: 'number',
      scene: 'string',
      frames: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResultsFrames },
      hintWordsInfoList: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResultsHintWordsInfoList },
      programCodeDataList: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResultsProgramCodeDataList },
      logoDataList: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResultsLogoDataList },
      sfaceDataList: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResultsSfaceDataList },
      OCRDataList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseDataResults extends $tea.Model {
  dataId: string;
  taskId: string;
  imageURL: string;
  subResults: ScanImageResponseDataResultsSubResults[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
      imageURL: 'ImageURL',
      subResults: 'SubResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      taskId: 'string',
      imageURL: 'string',
      subResults: { 'type': 'array', 'itemType': ScanImageResponseDataResultsSubResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageResponseData extends $tea.Model {
  results: ScanImageResponseDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': ScanImageResponseDataResults },
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
    this._endpoint = this.getEndpoint("imageaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async scanTextWithOptions(request: ScanTextRequest, runtime: $Util.RuntimeOptions): Promise<ScanTextResponse> {
    Util.validateModel(request);
    return $tea.cast<ScanTextResponse>(await this.doRequest("ScanText", "HTTPS", "POST", "2019-12-30", "AK", null, $tea.toMap(request), runtime), new ScanTextResponse({}));
  }

  async scanText(request: ScanTextRequest): Promise<ScanTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanTextWithOptions(request, runtime);
  }

  async scanImageWithOptions(request: ScanImageRequest, runtime: $Util.RuntimeOptions): Promise<ScanImageResponse> {
    Util.validateModel(request);
    return $tea.cast<ScanImageResponse>(await this.doRequest("ScanImage", "HTTPS", "POST", "2019-12-30", "AK", null, $tea.toMap(request), runtime), new ScanImageResponse({}));
  }

  async scanImage(request: ScanImageRequest): Promise<ScanImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scanImageWithOptions(request, runtime);
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
