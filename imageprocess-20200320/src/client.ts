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

export class AnalyzeChestVesselRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: AnalyzeChestVesselRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      dataSourceType: 'DataSourceType',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      dataSourceType: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': AnalyzeChestVesselRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselResponseBody extends $tea.Model {
  data?: AnalyzeChestVesselResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AnalyzeChestVesselResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AnalyzeChestVesselResponseBody;
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
      body: AnalyzeChestVesselResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: CalcCACSRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      dataSourceType: 'DataSourceType',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      dataSourceType: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': CalcCACSRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponseBody extends $tea.Model {
  data?: CalcCACSResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CalcCACSResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CalcCACSResponseBody;
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
      body: CalcCACSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFRequest extends $tea.Model {
  dataFormat?: string;
  imageUrl?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      imageUrl: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      imageUrl: 'string',
      orgId: 'string',
      orgName: 'string',
      tracerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      tracerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFResponseBody extends $tea.Model {
  data?: ClassifyFNFResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ClassifyFNFResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClassifyFNFResponseBody;
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
      body: ClassifyFNFResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  URLList?: DetectCovid19CadRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': DetectCovid19CadRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadResponseBody extends $tea.Model {
  data?: DetectCovid19CadResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectCovid19CadResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectCovid19CadResponseBody;
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
      body: DetectCovid19CadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayRequest extends $tea.Model {
  dataFormat?: string;
  imageUrl?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      imageUrl: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      imageUrl: 'string',
      orgId: 'string',
      orgName: 'string',
      tracerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      tracerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponseBody extends $tea.Model {
  data?: DetectHipKeypointXRayResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectHipKeypointXRayResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectHipKeypointXRayResponseBody;
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
      body: DetectHipKeypointXRayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayRequest extends $tea.Model {
  dataFormat?: string;
  imageUrl?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      imageUrl: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      imageUrl: 'string',
      orgId: 'string',
      orgName: 'string',
      tracerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayAdvanceRequest extends $tea.Model {
  imageUrlObject: Readable;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrlObject',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      tracerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponseBody extends $tea.Model {
  data?: DetectKneeKeypointXRayResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectKneeKeypointXRayResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectKneeKeypointXRayResponseBody;
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
      body: DetectKneeKeypointXRayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayResponseBody extends $tea.Model {
  data?: DetectKneeXRayResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectKneeXRayResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectKneeXRayResponseBody;
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
      body: DetectKneeXRayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  threshold?: number;
  URLList?: DetectLungNoduleRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      threshold: 'Threshold',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      threshold: 'number',
      URLList: { 'type': 'array', 'itemType': DetectLungNoduleRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBody extends $tea.Model {
  data?: DetectLungNoduleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectLungNoduleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectLungNoduleResponseBody;
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
      body: DetectLungNoduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphRequest extends $tea.Model {
  dataSourceType?: string;
  URLList?: DetectLymphRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectLymphRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphResponseBody extends $tea.Model {
  data?: DetectLymphResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectLymphResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectLymphResponseBody;
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
      body: DetectLymphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancRequest extends $tea.Model {
  dataSourceType?: string;
  URLList?: DetectPancRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectPancRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancResponseBody extends $tea.Model {
  data?: DetectPancResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectPancResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectPancResponseBody;
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
      body: DetectPancResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  sourceType?: string;
  URLList?: DetectRibFractureRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      sourceType: 'SourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      sourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectRibFractureRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponseBody extends $tea.Model {
  data?: DetectRibFractureResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectRibFractureResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectRibFractureResponseBody;
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
      body: DetectRibFractureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseRequest extends $tea.Model {
  orgId?: string;
  orgName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseResponseBody extends $tea.Model {
  data?: DetectSkinDiseaseResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectSkinDiseaseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectSkinDiseaseResponseBody;
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
      body: DetectSkinDiseaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  URLList?: DetectSpineMRIRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': DetectSpineMRIRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponseBody extends $tea.Model {
  data?: DetectSpineMRIResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectSpineMRIResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectSpineMRIResponseBody;
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
      body: DetectSpineMRIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackSessionRequest extends $tea.Model {
  feedback?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackSessionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FeedbackSessionResponseBody;
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
      body: FeedbackSessionResponseBody,
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

export class RunCTRegistrationRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  floatingList?: RunCTRegistrationRequestFloatingList[];
  orgId?: string;
  orgName?: string;
  referenceList?: RunCTRegistrationRequestReferenceList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      dataSourceType: 'DataSourceType',
      floatingList: 'FloatingList',
      orgId: 'OrgId',
      orgName: 'OrgName',
      referenceList: 'ReferenceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      dataSourceType: 'string',
      floatingList: { 'type': 'array', 'itemType': RunCTRegistrationRequestFloatingList },
      orgId: 'string',
      orgName: 'string',
      referenceList: { 'type': 'array', 'itemType': RunCTRegistrationRequestReferenceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationResponseBody extends $tea.Model {
  data?: RunCTRegistrationResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunCTRegistrationResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunCTRegistrationResponseBody;
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
      body: RunCTRegistrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQARequest extends $tea.Model {
  answerImageDataList?: RunMedQARequestAnswerImageDataList[];
  answerImageURLList?: RunMedQARequestAnswerImageURLList[];
  answerTextList?: RunMedQARequestAnswerTextList[];
  department?: string;
  orgId?: string;
  orgName?: string;
  questionType?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answerImageDataList: 'AnswerImageDataList',
      answerImageURLList: 'AnswerImageURLList',
      answerTextList: 'AnswerTextList',
      department: 'Department',
      orgId: 'OrgId',
      orgName: 'OrgName',
      questionType: 'QuestionType',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageDataList: { 'type': 'array', 'itemType': RunMedQARequestAnswerImageDataList },
      answerImageURLList: { 'type': 'array', 'itemType': RunMedQARequestAnswerImageURLList },
      answerTextList: { 'type': 'array', 'itemType': RunMedQARequestAnswerTextList },
      department: 'string',
      orgId: 'string',
      orgName: 'string',
      questionType: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAResponseBody extends $tea.Model {
  data?: RunMedQAResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunMedQAResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunMedQAResponseBody;
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
      body: RunMedQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTRequest extends $tea.Model {
  dataFormat?: string;
  mask?: number;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenChestCTRequestURLList[];
  verbose?: number;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      mask: 'Mask',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      mask: 'number',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenChestCTRequestURLList },
      verbose: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBody extends $tea.Model {
  data?: ScreenChestCTResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScreenChestCTResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScreenChestCTResponseBody;
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
      body: ScreenChestCTResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedRequest extends $tea.Model {
  fromLanguage?: string;
  text?: string;
  toLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      fromLanguage: 'FromLanguage',
      text: 'Text',
      toLanguage: 'ToLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromLanguage: 'string',
      text: 'string',
      toLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedResponseBody extends $tea.Model {
  data?: TranslateMedResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TranslateMedResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TranslateMedResponseBody;
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
      body: TranslateMedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselResponseBodyDataAortaInfo extends $tea.Model {
  area?: number[];
  coordinates?: number[][];
  labelValue?: number;
  maxArea?: number;
  maxAreaIndex?: number;
  maxDiameter?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      coordinates: 'Coordinates',
      labelValue: 'LabelValue',
      maxArea: 'MaxArea',
      maxAreaIndex: 'MaxAreaIndex',
      maxDiameter: 'MaxDiameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      labelValue: 'number',
      maxArea: 'number',
      maxAreaIndex: 'number',
      maxDiameter: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselResponseBodyDataPulmonaryInfo extends $tea.Model {
  area?: number[];
  coordinates?: number[][];
  labelValue?: number;
  maxArea?: number;
  maxAreaIndex?: number;
  maxDiameter?: number;
  nearestAortaArea?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      coordinates: 'Coordinates',
      labelValue: 'LabelValue',
      maxArea: 'MaxArea',
      maxAreaIndex: 'MaxAreaIndex',
      maxDiameter: 'MaxDiameter',
      nearestAortaArea: 'NearestAortaArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      labelValue: 'number',
      maxArea: 'number',
      maxAreaIndex: 'number',
      maxDiameter: 'number',
      nearestAortaArea: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselResponseBodyData extends $tea.Model {
  aortaInfo?: AnalyzeChestVesselResponseBodyDataAortaInfo;
  pulmonaryInfo?: AnalyzeChestVesselResponseBodyDataPulmonaryInfo;
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      aortaInfo: 'AortaInfo',
      pulmonaryInfo: 'PulmonaryInfo',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aortaInfo: AnalyzeChestVesselResponseBodyDataAortaInfo,
      pulmonaryInfo: AnalyzeChestVesselResponseBodyDataPulmonaryInfo,
      resultURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponseBodyDataDetections extends $tea.Model {
  calciumCenter?: number[];
  calciumId?: number;
  calciumScore?: number;
  calciumVolume?: number;
  static names(): { [key: string]: string } {
    return {
      calciumCenter: 'CalciumCenter',
      calciumId: 'CalciumId',
      calciumScore: 'CalciumScore',
      calciumVolume: 'CalciumVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calciumCenter: { 'type': 'array', 'itemType': 'number' },
      calciumId: 'number',
      calciumScore: 'number',
      calciumVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponseBodyData extends $tea.Model {
  detections?: CalcCACSResponseBodyDataDetections[];
  resultUrl?: string;
  score?: string;
  volumeScore?: string;
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      resultUrl: 'ResultUrl',
      score: 'Score',
      volumeScore: 'VolumeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': CalcCACSResponseBodyDataDetections },
      resultUrl: 'string',
      score: 'string',
      volumeScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFResponseBodyDataFracturesTag extends $tea.Model {
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

export class ClassifyFNFResponseBodyDataFractures extends $tea.Model {
  boxes?: number[];
  tag?: ClassifyFNFResponseBodyDataFracturesTag;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      tag: 'Tag',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      tag: ClassifyFNFResponseBodyDataFracturesTag,
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFResponseBodyData extends $tea.Model {
  fractures?: ClassifyFNFResponseBodyDataFractures[];
  imageUrl?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      fractures: 'Fractures',
      imageUrl: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fractures: { 'type': 'array', 'itemType': ClassifyFNFResponseBodyDataFractures },
      imageUrl: 'string',
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadResponseBodyData extends $tea.Model {
  lesionRatio?: string;
  mask?: string;
  newProbability?: string;
  normalProbability?: string;
  otherProbability?: string;
  static names(): { [key: string]: string } {
    return {
      lesionRatio: 'LesionRatio',
      mask: 'Mask',
      newProbability: 'NewProbability',
      normalProbability: 'NormalProbability',
      otherProbability: 'OtherProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionRatio: 'string',
      mask: 'string',
      newProbability: 'string',
      normalProbability: 'string',
      otherProbability: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponseBodyDataKeyPointsTag extends $tea.Model {
  direction?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponseBodyDataKeyPoints extends $tea.Model {
  coordinates?: number[];
  tag?: DetectHipKeypointXRayResponseBodyDataKeyPointsTag;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      tag: 'Tag',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': 'number' },
      tag: DetectHipKeypointXRayResponseBodyDataKeyPointsTag,
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponseBodyData extends $tea.Model {
  imageUrl?: string;
  keyPoints?: DetectHipKeypointXRayResponseBodyDataKeyPoints[];
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      keyPoints: 'KeyPoints',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      keyPoints: { 'type': 'array', 'itemType': DetectHipKeypointXRayResponseBodyDataKeyPoints },
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponseBodyDataKeyPointsTag extends $tea.Model {
  direction?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponseBodyDataKeyPoints extends $tea.Model {
  coordinates?: number[];
  tag?: DetectKneeKeypointXRayResponseBodyDataKeyPointsTag;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      tag: 'Tag',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': 'number' },
      tag: DetectKneeKeypointXRayResponseBodyDataKeyPointsTag,
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponseBodyData extends $tea.Model {
  imageUrl?: string;
  keyPoints?: DetectKneeKeypointXRayResponseBodyDataKeyPoints[];
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      keyPoints: 'KeyPoints',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      keyPoints: { 'type': 'array', 'itemType': DetectKneeKeypointXRayResponseBodyDataKeyPoints },
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayResponseBodyDataKLDetections extends $tea.Model {
  detections?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayResponseBodyData extends $tea.Model {
  KLDetections?: DetectKneeXRayResponseBodyDataKLDetections[];
  static names(): { [key: string]: string } {
    return {
      KLDetections: 'KLDetections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KLDetections: { 'type': 'array', 'itemType': DetectKneeXRayResponseBodyDataKLDetections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBodyDataSeriesElements extends $tea.Model {
  category?: string;
  confidence?: number;
  diameter?: number;
  imageX?: number;
  imageY?: number;
  imageZ?: number;
  lobe?: string;
  lung?: string;
  meanValue?: number;
  SOPInstanceUID?: string;
  volume?: number;
  x?: number;
  y?: number;
  z?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      confidence: 'Confidence',
      diameter: 'Diameter',
      imageX: 'ImageX',
      imageY: 'ImageY',
      imageZ: 'ImageZ',
      lobe: 'Lobe',
      lung: 'Lung',
      meanValue: 'MeanValue',
      SOPInstanceUID: 'SOPInstanceUID',
      volume: 'Volume',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      confidence: 'number',
      diameter: 'number',
      imageX: 'number',
      imageY: 'number',
      imageZ: 'number',
      lobe: 'string',
      lung: 'string',
      meanValue: 'number',
      SOPInstanceUID: 'string',
      volume: 'number',
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBodyDataSeries extends $tea.Model {
  elements?: DetectLungNoduleResponseBodyDataSeriesElements[];
  origin?: number[];
  report?: string;
  seriesInstanceUid?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      origin: 'Origin',
      report: 'Report',
      seriesInstanceUid: 'SeriesInstanceUid',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectLungNoduleResponseBodyDataSeriesElements },
      origin: { 'type': 'array', 'itemType': 'number' },
      report: 'string',
      seriesInstanceUid: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBodyData extends $tea.Model {
  series?: DetectLungNoduleResponseBodyDataSeries[];
  static names(): { [key: string]: string } {
    return {
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DetectLungNoduleResponseBodyDataSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphResponseBodyDataLesions extends $tea.Model {
  boxes?: number[];
  diametermm?: number[];
  keySlice?: number;
  recist?: number[][];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      diametermm: 'Diametermm',
      keySlice: 'KeySlice',
      recist: 'Recist',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      diametermm: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      recist: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphResponseBodyData extends $tea.Model {
  lesions?: DetectLymphResponseBodyDataLesions[];
  static names(): { [key: string]: string } {
    return {
      lesions: 'Lesions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesions: { 'type': 'array', 'itemType': DetectLymphResponseBodyDataLesions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancResponseBodyDataLesion extends $tea.Model {
  mask?: string;
  nonPdacVol?: string;
  pancVol?: string;
  pdacVol?: string;
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      mask: 'Mask',
      nonPdacVol: 'NonPdacVol',
      pancVol: 'PancVol',
      pdacVol: 'PdacVol',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mask: 'string',
      nonPdacVol: 'string',
      pancVol: 'string',
      pdacVol: 'string',
      possibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancResponseBodyData extends $tea.Model {
  lesion?: DetectPancResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: DetectPancResponseBodyDataLesion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponseBodyDataDetections extends $tea.Model {
  coordinateImage?: number[];
  coordinates?: number[];
  fractureCategory?: string;
  fractureConfidence?: number;
  fractureId?: number;
  fractureLocation?: string;
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      coordinateImage: 'CoordinateImage',
      coordinates: 'Coordinates',
      fractureCategory: 'FractureCategory',
      fractureConfidence: 'FractureConfidence',
      fractureId: 'FractureId',
      fractureLocation: 'FractureLocation',
      fractureSegment: 'FractureSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateImage: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': 'number' },
      fractureCategory: 'string',
      fractureConfidence: 'number',
      fractureId: 'number',
      fractureLocation: 'string',
      fractureSegment: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponseBodyData extends $tea.Model {
  detections?: DetectRibFractureResponseBodyDataDetections[];
  origin?: number[];
  resultURL?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      resultURL: 'ResultURL',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': DetectRibFractureResponseBodyDataDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseResponseBodyData extends $tea.Model {
  results?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponseBodyDataDiscs extends $tea.Model {
  disease?: string;
  identification?: string;
  location?: number[];
  static names(): { [key: string]: string } {
    return {
      disease: 'Disease',
      identification: 'Identification',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disease: 'string',
      identification: 'string',
      location: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponseBodyDataVertebras extends $tea.Model {
  disease?: string;
  identification?: string;
  location?: number[];
  static names(): { [key: string]: string } {
    return {
      disease: 'Disease',
      identification: 'Identification',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disease: 'string',
      identification: 'string',
      location: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponseBodyData extends $tea.Model {
  discs?: DetectSpineMRIResponseBodyDataDiscs[];
  vertebras?: DetectSpineMRIResponseBodyDataVertebras[];
  static names(): { [key: string]: string } {
    return {
      discs: 'Discs',
      vertebras: 'Vertebras',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discs: { 'type': 'array', 'itemType': DetectSpineMRIResponseBodyDataDiscs },
      vertebras: { 'type': 'array', 'itemType': DetectSpineMRIResponseBodyDataVertebras },
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

export class RunCTRegistrationRequestFloatingList extends $tea.Model {
  floatingURL?: string;
  static names(): { [key: string]: string } {
    return {
      floatingURL: 'FloatingURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      floatingURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationRequestReferenceList extends $tea.Model {
  referenceURL?: string;
  static names(): { [key: string]: string } {
    return {
      referenceURL: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationResponseBodyData extends $tea.Model {
  DUrl?: string;
  NUrl?: string;
  static names(): { [key: string]: string } {
    return {
      DUrl: 'DUrl',
      NUrl: 'NUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DUrl: 'string',
      NUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQARequestAnswerImageDataList extends $tea.Model {
  answerImageData?: Buffer;
  static names(): { [key: string]: string } {
    return {
      answerImageData: 'AnswerImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageData: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQARequestAnswerImageURLList extends $tea.Model {
  answerImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      answerImageURL: 'AnswerImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQARequestAnswerTextList extends $tea.Model {
  answerText?: string;
  static names(): { [key: string]: string } {
    return {
      answerText: 'AnswerText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAResponseBodyData extends $tea.Model {
  answerType?: string;
  options?: string[];
  question?: string;
  questionType?: string;
  reports?: { [key: string]: string };
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      options: 'Options',
      question: 'Question',
      questionType: 'QuestionType',
      reports: 'Reports',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
      question: 'string',
      questionType: 'string',
      reports: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTRequestURLList extends $tea.Model {
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo extends $tea.Model {
  area?: number[];
  coordinates?: number[][];
  labelValue?: number;
  maxArea?: number;
  maxAreaIndex?: number;
  maxDiameter?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      coordinates: 'Coordinates',
      labelValue: 'LabelValue',
      maxArea: 'MaxArea',
      maxAreaIndex: 'MaxAreaIndex',
      maxDiameter: 'MaxDiameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      labelValue: 'number',
      maxArea: 'number',
      maxAreaIndex: 'number',
      maxDiameter: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataAnalyzeChestVesselPulmonaryInfo extends $tea.Model {
  area?: number[];
  coordinates?: number[][];
  labelValue?: number;
  maxArea?: number;
  maxAreaIndex?: number;
  maxDiameter?: number;
  nearestAortaArea?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      coordinates: 'Coordinates',
      labelValue: 'LabelValue',
      maxArea: 'MaxArea',
      maxAreaIndex: 'MaxAreaIndex',
      maxDiameter: 'MaxDiameter',
      nearestAortaArea: 'NearestAortaArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      labelValue: 'number',
      maxArea: 'number',
      maxAreaIndex: 'number',
      maxDiameter: 'number',
      nearestAortaArea: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataAnalyzeChestVessel extends $tea.Model {
  aortaInfo?: ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo;
  pulmonaryInfo?: ScreenChestCTResponseBodyDataAnalyzeChestVesselPulmonaryInfo;
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      aortaInfo: 'AortaInfo',
      pulmonaryInfo: 'PulmonaryInfo',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aortaInfo: ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo,
      pulmonaryInfo: ScreenChestCTResponseBodyDataAnalyzeChestVesselPulmonaryInfo,
      resultURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataCACSDetections extends $tea.Model {
  calciumCenter?: number[];
  calciumId?: number;
  calciumScore?: number;
  calciumVolume?: number;
  static names(): { [key: string]: string } {
    return {
      calciumCenter: 'CalciumCenter',
      calciumId: 'CalciumId',
      calciumScore: 'CalciumScore',
      calciumVolume: 'CalciumVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calciumCenter: { 'type': 'array', 'itemType': 'number' },
      calciumId: 'number',
      calciumScore: 'number',
      calciumVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataCACS extends $tea.Model {
  detections?: ScreenChestCTResponseBodyDataCACSDetections[];
  resultUrl?: string;
  score?: string;
  volumeScore?: string;
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      resultUrl: 'ResultUrl',
      score: 'Score',
      volumeScore: 'VolumeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataCACSDetections },
      resultUrl: 'string',
      score: 'string',
      volumeScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataCovid extends $tea.Model {
  lesionRatio?: string;
  mask?: string;
  newProbability?: string;
  normalProbability?: string;
  otherProbability?: string;
  static names(): { [key: string]: string } {
    return {
      lesionRatio: 'LesionRatio',
      mask: 'Mask',
      newProbability: 'NewProbability',
      normalProbability: 'NormalProbability',
      otherProbability: 'OtherProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionRatio: 'string',
      mask: 'string',
      newProbability: 'string',
      normalProbability: 'string',
      otherProbability: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectLymphLesions extends $tea.Model {
  boxes?: number[];
  diametermm?: number[];
  keySlice?: number;
  recist?: number[][];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      diametermm: 'Diametermm',
      keySlice: 'KeySlice',
      recist: 'Recist',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      diametermm: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      recist: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectLymph extends $tea.Model {
  lesions?: ScreenChestCTResponseBodyDataDetectLymphLesions[];
  static names(): { [key: string]: string } {
    return {
      lesions: 'Lesions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesions: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectLymphLesions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectPdacLesion extends $tea.Model {
  mask?: string;
  nonPdacVol?: string;
  pancVol?: string;
  pdacVol?: string;
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      mask: 'Mask',
      nonPdacVol: 'NonPdacVol',
      pancVol: 'PancVol',
      pdacVol: 'PdacVol',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mask: 'string',
      nonPdacVol: 'string',
      pancVol: 'string',
      pdacVol: 'string',
      possibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectPdac extends $tea.Model {
  lesion?: ScreenChestCTResponseBodyDataDetectPdacLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataDetectPdacLesion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectRibFractureDetections extends $tea.Model {
  coordinateImage?: number[];
  coordinates?: number[];
  fractureCategory?: number;
  fractureConfidence?: number;
  fractureId?: number;
  fractureLocation?: string;
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      coordinateImage: 'CoordinateImage',
      coordinates: 'Coordinates',
      fractureCategory: 'FractureCategory',
      fractureConfidence: 'FractureConfidence',
      fractureId: 'FractureId',
      fractureLocation: 'FractureLocation',
      fractureSegment: 'FractureSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateImage: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': 'number' },
      fractureCategory: 'number',
      fractureConfidence: 'number',
      fractureId: 'number',
      fractureLocation: 'string',
      fractureSegment: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectRibFracture extends $tea.Model {
  detections?: ScreenChestCTResponseBodyDataDetectRibFractureDetections[];
  fractureMaskURL?: string;
  origin?: number[];
  resultURL?: string;
  ribSegmentMaskURL?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      fractureMaskURL: 'FractureMaskURL',
      origin: 'Origin',
      resultURL: 'ResultURL',
      ribSegmentMaskURL: 'RibSegmentMaskURL',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectRibFractureDetections },
      fractureMaskURL: 'string',
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
      ribSegmentMaskURL: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataLungNoduleSeriesElements extends $tea.Model {
  category?: string;
  confidence?: number;
  diameter?: number;
  imageX?: number;
  imageY?: number;
  imageZ?: number;
  lobe?: string;
  lung?: string;
  meanValue?: number;
  SOPInstanceUID?: string;
  volume?: number;
  x?: number;
  y?: number;
  z?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      confidence: 'Confidence',
      diameter: 'Diameter',
      imageX: 'ImageX',
      imageY: 'ImageY',
      imageZ: 'ImageZ',
      lobe: 'Lobe',
      lung: 'Lung',
      meanValue: 'MeanValue',
      SOPInstanceUID: 'SOPInstanceUID',
      volume: 'Volume',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      confidence: 'number',
      diameter: 'number',
      imageX: 'number',
      imageY: 'number',
      imageZ: 'number',
      lobe: 'string',
      lung: 'string',
      meanValue: 'number',
      SOPInstanceUID: 'string',
      volume: 'number',
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataLungNoduleSeries extends $tea.Model {
  elements?: ScreenChestCTResponseBodyDataLungNoduleSeriesElements[];
  origin?: number[];
  report?: string;
  seriesInstanceUid?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      origin: 'Origin',
      report: 'Report',
      seriesInstanceUid: 'SeriesInstanceUid',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataLungNoduleSeriesElements },
      origin: { 'type': 'array', 'itemType': 'number' },
      report: 'string',
      seriesInstanceUid: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataLungNodule extends $tea.Model {
  series?: ScreenChestCTResponseBodyDataLungNoduleSeries[];
  static names(): { [key: string]: string } {
    return {
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataLungNoduleSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyData extends $tea.Model {
  analyzeChestVessel?: ScreenChestCTResponseBodyDataAnalyzeChestVessel;
  CACS?: ScreenChestCTResponseBodyDataCACS;
  covid?: ScreenChestCTResponseBodyDataCovid;
  detectLymph?: ScreenChestCTResponseBodyDataDetectLymph;
  detectPdac?: ScreenChestCTResponseBodyDataDetectPdac;
  detectRibFracture?: ScreenChestCTResponseBodyDataDetectRibFracture;
  errorMessage?: string;
  lungNodule?: ScreenChestCTResponseBodyDataLungNodule;
  URLList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      analyzeChestVessel: 'AnalyzeChestVessel',
      CACS: 'CACS',
      covid: 'Covid',
      detectLymph: 'DetectLymph',
      detectPdac: 'DetectPdac',
      detectRibFracture: 'DetectRibFracture',
      errorMessage: 'ErrorMessage',
      lungNodule: 'LungNodule',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeChestVessel: ScreenChestCTResponseBodyDataAnalyzeChestVessel,
      CACS: ScreenChestCTResponseBodyDataCACS,
      covid: ScreenChestCTResponseBodyDataCovid,
      detectLymph: ScreenChestCTResponseBodyDataDetectLymph,
      detectPdac: ScreenChestCTResponseBodyDataDetectPdac,
      detectRibFracture: ScreenChestCTResponseBodyDataDetectRibFracture,
      errorMessage: 'string',
      lungNodule: ScreenChestCTResponseBodyDataLungNodule,
      URLList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedResponseBodyData extends $tea.Model {
  text?: string;
  words?: number;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      words: 'number',
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
    this._endpoint = this.getEndpoint("imageprocess", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async analyzeChestVesselWithOptions(request: AnalyzeChestVesselRequest, runtime: $Util.RuntimeOptions): Promise<AnalyzeChestVesselResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AnalyzeChestVessel",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AnalyzeChestVesselResponse>(await this.callApi(params, req, runtime), new AnalyzeChestVesselResponse({}));
  }

  async analyzeChestVessel(request: AnalyzeChestVesselRequest): Promise<AnalyzeChestVesselResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.analyzeChestVesselWithOptions(request, runtime);
  }

  async calcCACSWithOptions(request: CalcCACSRequest, runtime: $Util.RuntimeOptions): Promise<CalcCACSResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CalcCACS",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CalcCACSResponse>(await this.callApi(params, req, runtime), new CalcCACSResponse({}));
  }

  async calcCACS(request: CalcCACSRequest): Promise<CalcCACSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.calcCACSWithOptions(request, runtime);
  }

  async classifyFNFWithOptions(request: ClassifyFNFRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyFNFResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ClassifyFNF",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClassifyFNFResponse>(await this.callApi(params, req, runtime), new ClassifyFNFResponse({}));
  }

  async classifyFNF(request: ClassifyFNFRequest): Promise<ClassifyFNFResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyFNFWithOptions(request, runtime);
  }

  async classifyFNFAdvance(request: ClassifyFNFAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyFNFResponse> {
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
      product: "imageprocess",
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
    let classifyFNFReq = new ClassifyFNFRequest({ });
    OpenApiUtil.convert(request, classifyFNFReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageUrlObject,
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
      classifyFNFReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let classifyFNFResp = await this.classifyFNFWithOptions(classifyFNFReq, runtime);
    return classifyFNFResp;
  }

  async detectCovid19CadWithOptions(request: DetectCovid19CadRequest, runtime: $Util.RuntimeOptions): Promise<DetectCovid19CadResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectCovid19Cad",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectCovid19CadResponse>(await this.callApi(params, req, runtime), new DetectCovid19CadResponse({}));
  }

  async detectCovid19Cad(request: DetectCovid19CadRequest): Promise<DetectCovid19CadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectCovid19CadWithOptions(request, runtime);
  }

  async detectHipKeypointXRayWithOptions(request: DetectHipKeypointXRayRequest, runtime: $Util.RuntimeOptions): Promise<DetectHipKeypointXRayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectHipKeypointXRay",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectHipKeypointXRayResponse>(await this.callApi(params, req, runtime), new DetectHipKeypointXRayResponse({}));
  }

  async detectHipKeypointXRay(request: DetectHipKeypointXRayRequest): Promise<DetectHipKeypointXRayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectHipKeypointXRayWithOptions(request, runtime);
  }

  async detectHipKeypointXRayAdvance(request: DetectHipKeypointXRayAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectHipKeypointXRayResponse> {
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
      product: "imageprocess",
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
    let detectHipKeypointXRayReq = new DetectHipKeypointXRayRequest({ });
    OpenApiUtil.convert(request, detectHipKeypointXRayReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageUrlObject,
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
      detectHipKeypointXRayReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectHipKeypointXRayResp = await this.detectHipKeypointXRayWithOptions(detectHipKeypointXRayReq, runtime);
    return detectHipKeypointXRayResp;
  }

  async detectKneeKeypointXRayWithOptions(request: DetectKneeKeypointXRayRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeKeypointXRayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectKneeKeypointXRay",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectKneeKeypointXRayResponse>(await this.callApi(params, req, runtime), new DetectKneeKeypointXRayResponse({}));
  }

  async detectKneeKeypointXRay(request: DetectKneeKeypointXRayRequest): Promise<DetectKneeKeypointXRayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectKneeKeypointXRayWithOptions(request, runtime);
  }

  async detectKneeKeypointXRayAdvance(request: DetectKneeKeypointXRayAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeKeypointXRayResponse> {
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
      product: "imageprocess",
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
    let detectKneeKeypointXRayReq = new DetectKneeKeypointXRayRequest({ });
    OpenApiUtil.convert(request, detectKneeKeypointXRayReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.imageUrlObject,
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
      detectKneeKeypointXRayReq.imageUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectKneeKeypointXRayResp = await this.detectKneeKeypointXRayWithOptions(detectKneeKeypointXRayReq, runtime);
    return detectKneeKeypointXRayResp;
  }

  async detectKneeXRayWithOptions(request: DetectKneeXRayRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeXRayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectKneeXRay",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectKneeXRayResponse>(await this.callApi(params, req, runtime), new DetectKneeXRayResponse({}));
  }

  async detectKneeXRay(request: DetectKneeXRayRequest): Promise<DetectKneeXRayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectKneeXRayWithOptions(request, runtime);
  }

  async detectKneeXRayAdvance(request: DetectKneeXRayAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeXRayResponse> {
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
      product: "imageprocess",
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
    let detectKneeXRayReq = new DetectKneeXRayRequest({ });
    OpenApiUtil.convert(request, detectKneeXRayReq);
    if (!Util.isUnset(request.urlObject)) {
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
      detectKneeXRayReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectKneeXRayResp = await this.detectKneeXRayWithOptions(detectKneeXRayReq, runtime);
    return detectKneeXRayResp;
  }

  async detectLungNoduleWithOptions(request: DetectLungNoduleRequest, runtime: $Util.RuntimeOptions): Promise<DetectLungNoduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.threshold)) {
      body["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectLungNodule",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectLungNoduleResponse>(await this.callApi(params, req, runtime), new DetectLungNoduleResponse({}));
  }

  async detectLungNodule(request: DetectLungNoduleRequest): Promise<DetectLungNoduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectLungNoduleWithOptions(request, runtime);
  }

  async detectLymphWithOptions(request: DetectLymphRequest, runtime: $Util.RuntimeOptions): Promise<DetectLymphResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectLymph",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectLymphResponse>(await this.callApi(params, req, runtime), new DetectLymphResponse({}));
  }

  async detectLymph(request: DetectLymphRequest): Promise<DetectLymphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectLymphWithOptions(request, runtime);
  }

  async detectPancWithOptions(request: DetectPancRequest, runtime: $Util.RuntimeOptions): Promise<DetectPancResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectPanc",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectPancResponse>(await this.callApi(params, req, runtime), new DetectPancResponse({}));
  }

  async detectPanc(request: DetectPancRequest): Promise<DetectPancResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectPancWithOptions(request, runtime);
  }

  async detectRibFractureWithOptions(request: DetectRibFractureRequest, runtime: $Util.RuntimeOptions): Promise<DetectRibFractureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectRibFracture",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectRibFractureResponse>(await this.callApi(params, req, runtime), new DetectRibFractureResponse({}));
  }

  async detectRibFracture(request: DetectRibFractureRequest): Promise<DetectRibFractureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectRibFractureWithOptions(request, runtime);
  }

  async detectSkinDiseaseWithOptions(request: DetectSkinDiseaseRequest, runtime: $Util.RuntimeOptions): Promise<DetectSkinDiseaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectSkinDisease",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectSkinDiseaseResponse>(await this.callApi(params, req, runtime), new DetectSkinDiseaseResponse({}));
  }

  async detectSkinDisease(request: DetectSkinDiseaseRequest): Promise<DetectSkinDiseaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectSkinDiseaseWithOptions(request, runtime);
  }

  async detectSkinDiseaseAdvance(request: DetectSkinDiseaseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectSkinDiseaseResponse> {
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
      product: "imageprocess",
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
    let detectSkinDiseaseReq = new DetectSkinDiseaseRequest({ });
    OpenApiUtil.convert(request, detectSkinDiseaseReq);
    if (!Util.isUnset(request.urlObject)) {
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
      detectSkinDiseaseReq.url = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let detectSkinDiseaseResp = await this.detectSkinDiseaseWithOptions(detectSkinDiseaseReq, runtime);
    return detectSkinDiseaseResp;
  }

  async detectSpineMRIWithOptions(request: DetectSpineMRIRequest, runtime: $Util.RuntimeOptions): Promise<DetectSpineMRIResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectSpineMRI",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectSpineMRIResponse>(await this.callApi(params, req, runtime), new DetectSpineMRIResponse({}));
  }

  async detectSpineMRI(request: DetectSpineMRIRequest): Promise<DetectSpineMRIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectSpineMRIWithOptions(request, runtime);
  }

  async feedbackSessionWithOptions(request: FeedbackSessionRequest, runtime: $Util.RuntimeOptions): Promise<FeedbackSessionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.feedback)) {
      body["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FeedbackSession",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FeedbackSessionResponse>(await this.callApi(params, req, runtime), new FeedbackSessionResponse({}));
  }

  async feedbackSession(request: FeedbackSessionRequest): Promise<FeedbackSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.feedbackSessionWithOptions(request, runtime);
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
      version: "2020-03-20",
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

  async runCTRegistrationWithOptions(request: RunCTRegistrationRequest, runtime: $Util.RuntimeOptions): Promise<RunCTRegistrationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.floatingList)) {
      body["FloatingList"] = request.floatingList;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.referenceList)) {
      body["ReferenceList"] = request.referenceList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCTRegistration",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCTRegistrationResponse>(await this.callApi(params, req, runtime), new RunCTRegistrationResponse({}));
  }

  async runCTRegistration(request: RunCTRegistrationRequest): Promise<RunCTRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCTRegistrationWithOptions(request, runtime);
  }

  async runMedQAWithOptions(request: RunMedQARequest, runtime: $Util.RuntimeOptions): Promise<RunMedQAResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.answerImageDataList)) {
      body["AnswerImageDataList"] = request.answerImageDataList;
    }

    if (!Util.isUnset(request.answerImageURLList)) {
      body["AnswerImageURLList"] = request.answerImageURLList;
    }

    if (!Util.isUnset(request.answerTextList)) {
      body["AnswerTextList"] = request.answerTextList;
    }

    if (!Util.isUnset(request.department)) {
      body["Department"] = request.department;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.questionType)) {
      body["QuestionType"] = request.questionType;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunMedQA",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunMedQAResponse>(await this.callApi(params, req, runtime), new RunMedQAResponse({}));
  }

  async runMedQA(request: RunMedQARequest): Promise<RunMedQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runMedQAWithOptions(request, runtime);
  }

  async screenChestCTWithOptions(request: ScreenChestCTRequest, runtime: $Util.RuntimeOptions): Promise<ScreenChestCTResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.mask)) {
      body["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    if (!Util.isUnset(request.verbose)) {
      body["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScreenChestCT",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScreenChestCTResponse>(await this.callApi(params, req, runtime), new ScreenChestCTResponse({}));
  }

  async screenChestCT(request: ScreenChestCTRequest): Promise<ScreenChestCTResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.screenChestCTWithOptions(request, runtime);
  }

  async translateMedWithOptions(request: TranslateMedRequest, runtime: $Util.RuntimeOptions): Promise<TranslateMedResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fromLanguage)) {
      body["FromLanguage"] = request.fromLanguage;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.toLanguage)) {
      body["ToLanguage"] = request.toLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TranslateMed",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TranslateMedResponse>(await this.callApi(params, req, runtime), new TranslateMedResponse({}));
  }

  async translateMed(request: TranslateMedRequest): Promise<TranslateMedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateMedWithOptions(request, runtime);
  }

}
