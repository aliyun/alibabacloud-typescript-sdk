// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import Number from '@darabonba/number';
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

export class AnalyzeChestVesselAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: AnalyzeChestVesselAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': AnalyzeChestVesselAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnalyzeChestVesselResponseBody extends $tea.Model {
  data?: AnalyzeChestVesselResponseBodyData;
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
      data: AnalyzeChestVesselResponseBodyData,
      message: 'string',
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

export class CalcBMDRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  sourceType?: string;
  URLList?: CalcBMDRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': CalcBMDRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcBMDAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  sourceType?: string;
  URLList?: CalcBMDAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': CalcBMDAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcBMDResponseBody extends $tea.Model {
  data?: CalcBMDResponseBodyData;
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
      data: CalcBMDResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcBMDResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CalcBMDResponseBody;
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
      body: CalcBMDResponseBody,
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

export class CalcCACSAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: CalcCACSAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': CalcCACSAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponseBody extends $tea.Model {
  data?: CalcCACSResponseBodyData;
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
      data: CalcCACSResponseBodyData,
      message: 'string',
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
  dataFormat?: string;
  imageUrlObject?: Readable;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      imageUrlObject: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      imageUrlObject: 'Readable',
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

export class DetectCovid19CadAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  URLList?: DetectCovid19CadAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectCovid19CadAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadResponseBody extends $tea.Model {
  data?: DetectCovid19CadResponseBodyData;
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
      data: DetectCovid19CadResponseBodyData,
      message: 'string',
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
  dataFormat?: string;
  imageUrlObject?: Readable;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      imageUrlObject: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      imageUrlObject: 'Readable',
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
  dataFormat?: string;
  imageUrlObject?: Readable;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      imageUrlObject: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      imageUrlObject: 'Readable',
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
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      urlObject: 'Readable',
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

export class DetectLiverSteatosisRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  sourceType?: string;
  URLList?: DetectLiverSteatosisRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectLiverSteatosisRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLiverSteatosisAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  sourceType?: string;
  URLList?: DetectLiverSteatosisAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectLiverSteatosisAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLiverSteatosisResponseBody extends $tea.Model {
  data?: DetectLiverSteatosisResponseBodyData;
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
      data: DetectLiverSteatosisResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLiverSteatosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectLiverSteatosisResponseBody;
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
      body: DetectLiverSteatosisResponseBody,
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

export class DetectLungNoduleAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  threshold?: number;
  URLList?: DetectLungNoduleAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectLungNoduleAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBody extends $tea.Model {
  data?: DetectLungNoduleResponseBodyData;
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
      data: DetectLungNoduleResponseBodyData,
      message: 'string',
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

export class DetectLymphAdvanceRequest extends $tea.Model {
  dataSourceType?: string;
  URLList?: DetectLymphAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectLymphAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLymphResponseBody extends $tea.Model {
  data?: DetectLymphResponseBodyData;
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
      data: DetectLymphResponseBodyData,
      message: 'string',
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

export class DetectPancAdvanceRequest extends $tea.Model {
  dataSourceType?: string;
  URLList?: DetectPancAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectPancAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPancResponseBody extends $tea.Model {
  data?: DetectPancResponseBodyData;
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
      data: DetectPancResponseBodyData,
      message: 'string',
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

export class DetectRibFractureAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  sourceType?: string;
  URLList?: DetectRibFractureAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectRibFractureAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponseBody extends $tea.Model {
  data?: DetectRibFractureResponseBodyData;
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
      data: DetectRibFractureResponseBodyData,
      message: 'string',
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
  orgId?: string;
  orgName?: string;
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      urlObject: 'Readable',
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

export class DetectSpineMRIAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  URLList?: DetectSpineMRIAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectSpineMRIAdvanceRequestURLList },
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

export class PredictCVDRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: PredictCVDRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': PredictCVDRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictCVDAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: PredictCVDAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': PredictCVDAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictCVDResponseBody extends $tea.Model {
  data?: PredictCVDResponseBodyData;
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
      data: PredictCVDResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictCVDResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PredictCVDResponseBody;
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
      body: PredictCVDResponseBody,
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

export class RunCTRegistrationAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  floatingList?: RunCTRegistrationAdvanceRequestFloatingList[];
  orgId?: string;
  orgName?: string;
  referenceList?: RunCTRegistrationAdvanceRequestReferenceList[];
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
      floatingList: { 'type': 'array', 'itemType': RunCTRegistrationAdvanceRequestFloatingList },
      orgId: 'string',
      orgName: 'string',
      referenceList: { 'type': 'array', 'itemType': RunCTRegistrationAdvanceRequestReferenceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationResponseBody extends $tea.Model {
  data?: RunCTRegistrationResponseBodyData;
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
      data: RunCTRegistrationResponseBodyData,
      message: 'string',
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

export class RunMedQAAdvanceRequest extends $tea.Model {
  answerImageDataList?: RunMedQAAdvanceRequestAnswerImageDataList[];
  answerImageURLList?: RunMedQAAdvanceRequestAnswerImageURLList[];
  answerTextList?: RunMedQAAdvanceRequestAnswerTextList[];
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
      answerImageDataList: { 'type': 'array', 'itemType': RunMedQAAdvanceRequestAnswerImageDataList },
      answerImageURLList: { 'type': 'array', 'itemType': RunMedQAAdvanceRequestAnswerImageURLList },
      answerTextList: { 'type': 'array', 'itemType': RunMedQAAdvanceRequestAnswerTextList },
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

export class ScreenCRCRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenCRCRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenCRCRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenCRCAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenCRCAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenCRCAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenCRCResponseBody extends $tea.Model {
  data?: ScreenCRCResponseBodyData;
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
      data: ScreenCRCResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenCRCResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScreenCRCResponseBody;
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
      body: ScreenCRCResponseBody,
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

export class ScreenChestCTAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  mask?: number;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenChestCTAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenChestCTAdvanceRequestURLList },
      verbose: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBody extends $tea.Model {
  data?: ScreenChestCTResponseBodyData;
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
      data: ScreenChestCTResponseBodyData,
      message: 'string',
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

export class ScreenECRequest extends $tea.Model {
  dataSourceType?: string;
  URLList?: ScreenECRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenECRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenECAdvanceRequest extends $tea.Model {
  dataSourceType?: string;
  URLList?: ScreenECAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenECAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenECResponseBody extends $tea.Model {
  data?: ScreenECResponseBodyData;
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
      data: ScreenECResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenECResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScreenECResponseBody;
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
      body: ScreenECResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenGCRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenGCRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenGCAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenGCAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCResponseBody extends $tea.Model {
  data?: ScreenGCResponseBodyData;
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
      data: ScreenGCResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScreenGCResponseBody;
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
      body: ScreenGCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenLCRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenLCRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCAdvanceRequest extends $tea.Model {
  dataFormat?: string;
  dataSourceType?: string;
  orgId?: string;
  orgName?: string;
  URLList?: ScreenLCAdvanceRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': ScreenLCAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCResponseBody extends $tea.Model {
  data?: ScreenLCResponseBodyData;
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
      data: ScreenLCResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScreenLCResponseBody;
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
      body: ScreenLCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentLymphNodeRequest extends $tea.Model {
  bodyPart?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  URLList?: SegmentLymphNodeRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': SegmentLymphNodeRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentLymphNodeAdvanceRequest extends $tea.Model {
  bodyPart?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  URLList?: SegmentLymphNodeAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': SegmentLymphNodeAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentLymphNodeResponseBody extends $tea.Model {
  data?: SegmentLymphNodeResponseBodyData;
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
      data: SegmentLymphNodeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentLymphNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SegmentLymphNodeResponseBody;
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
      body: SegmentLymphNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentOARRequest extends $tea.Model {
  bodyPart?: string;
  contrast?: boolean;
  dataFormat?: string;
  maskList?: number[];
  orgId?: string;
  orgName?: string;
  URLList?: SegmentOARRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      contrast: 'Contrast',
      dataFormat: 'DataFormat',
      maskList: 'MaskList',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      contrast: 'boolean',
      dataFormat: 'string',
      maskList: { 'type': 'array', 'itemType': 'number' },
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': SegmentOARRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentOARAdvanceRequest extends $tea.Model {
  bodyPart?: string;
  contrast?: boolean;
  dataFormat?: string;
  maskList?: number[];
  orgId?: string;
  orgName?: string;
  URLList?: SegmentOARAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      contrast: 'Contrast',
      dataFormat: 'DataFormat',
      maskList: 'MaskList',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      contrast: 'boolean',
      dataFormat: 'string',
      maskList: { 'type': 'array', 'itemType': 'number' },
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': SegmentOARAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentOARResponseBody extends $tea.Model {
  data?: SegmentOARResponseBodyData;
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
      data: SegmentOARResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentOARResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SegmentOARResponseBody;
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
      body: SegmentOARResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVolumeSegmentRequest extends $tea.Model {
  cancerType?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  targetVolumeType?: string;
  URLList?: TargetVolumeSegmentRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      cancerType: 'CancerType',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      targetVolumeType: 'TargetVolumeType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancerType: 'string',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      targetVolumeType: 'string',
      URLList: { 'type': 'array', 'itemType': TargetVolumeSegmentRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVolumeSegmentAdvanceRequest extends $tea.Model {
  cancerType?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  targetVolumeType?: string;
  URLList?: TargetVolumeSegmentAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      cancerType: 'CancerType',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      targetVolumeType: 'TargetVolumeType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancerType: 'string',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      targetVolumeType: 'string',
      URLList: { 'type': 'array', 'itemType': TargetVolumeSegmentAdvanceRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVolumeSegmentResponseBody extends $tea.Model {
  data?: TargetVolumeSegmentResponseBodyData;
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
      data: TargetVolumeSegmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVolumeSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TargetVolumeSegmentResponseBody;
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
      body: TargetVolumeSegmentResponseBody,
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

export class AnalyzeChestVesselAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class CalcBMDRequestURLList extends $tea.Model {
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

export class CalcBMDAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcBMDResponseBodyDataDetections extends $tea.Model {
  vertBMD?: number;
  vertCategory?: number;
  vertId?: string;
  vertTScore?: number;
  vertZScore?: number;
  static names(): { [key: string]: string } {
    return {
      vertBMD: 'VertBMD',
      vertCategory: 'VertCategory',
      vertId: 'VertId',
      vertTScore: 'VertTScore',
      vertZScore: 'VertZScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vertBMD: 'number',
      vertCategory: 'number',
      vertId: 'string',
      vertTScore: 'number',
      vertZScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcBMDResponseBodyData extends $tea.Model {
  detections?: CalcBMDResponseBodyDataDetections[];
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
      detections: { 'type': 'array', 'itemType': CalcBMDResponseBodyDataDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
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

export class CalcCACSAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class DetectCovid19CadAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class DetectLiverSteatosisRequestURLList extends $tea.Model {
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

export class DetectLiverSteatosisAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLiverSteatosisResponseBodyDataDetections extends $tea.Model {
  liverHU?: number;
  liverROI1?: number;
  liverROI2?: number;
  liverROI3?: number;
  liverSlice?: number;
  liverSpleenDifference?: number;
  liverSpleenRatio?: number;
  liverVolume?: number;
  prediction?: string;
  probability?: number;
  ROI1Center?: number[];
  ROI2Center?: number[];
  ROI3Center?: number[];
  radius?: number;
  spleenCenter?: number[];
  spleenHU?: number;
  spleenROI?: number;
  spleenSlice?: number;
  spleenVolume?: number;
  static names(): { [key: string]: string } {
    return {
      liverHU: 'LiverHU',
      liverROI1: 'LiverROI1',
      liverROI2: 'LiverROI2',
      liverROI3: 'LiverROI3',
      liverSlice: 'LiverSlice',
      liverSpleenDifference: 'LiverSpleenDifference',
      liverSpleenRatio: 'LiverSpleenRatio',
      liverVolume: 'LiverVolume',
      prediction: 'Prediction',
      probability: 'Probability',
      ROI1Center: 'ROI1Center',
      ROI2Center: 'ROI2Center',
      ROI3Center: 'ROI3Center',
      radius: 'Radius',
      spleenCenter: 'SpleenCenter',
      spleenHU: 'SpleenHU',
      spleenROI: 'SpleenROI',
      spleenSlice: 'SpleenSlice',
      spleenVolume: 'SpleenVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liverHU: 'number',
      liverROI1: 'number',
      liverROI2: 'number',
      liverROI3: 'number',
      liverSlice: 'number',
      liverSpleenDifference: 'number',
      liverSpleenRatio: 'number',
      liverVolume: 'number',
      prediction: 'string',
      probability: 'number',
      ROI1Center: { 'type': 'array', 'itemType': 'number' },
      ROI2Center: { 'type': 'array', 'itemType': 'number' },
      ROI3Center: { 'type': 'array', 'itemType': 'number' },
      radius: 'number',
      spleenCenter: { 'type': 'array', 'itemType': 'number' },
      spleenHU: 'number',
      spleenROI: 'number',
      spleenSlice: 'number',
      spleenVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLiverSteatosisResponseBodyData extends $tea.Model {
  detections?: DetectLiverSteatosisResponseBodyDataDetections[];
  origin?: number[];
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': DetectLiverSteatosisResponseBodyDataDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      spacing: { 'type': 'array', 'itemType': 'number' },
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

export class DetectLungNoduleAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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
  majorAxis?: number[];
  meanValue?: number;
  minorAxis?: number[];
  recistSOPInstanceUID?: string;
  risk?: number;
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
      majorAxis: 'MajorAxis',
      meanValue: 'MeanValue',
      minorAxis: 'MinorAxis',
      recistSOPInstanceUID: 'RecistSOPInstanceUID',
      risk: 'Risk',
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
      majorAxis: { 'type': 'array', 'itemType': 'number' },
      meanValue: 'number',
      minorAxis: { 'type': 'array', 'itemType': 'number' },
      recistSOPInstanceUID: 'string',
      risk: 'number',
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

export class DetectLymphAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class DetectPancAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class DetectRibFractureAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponseBodyDataDetections extends $tea.Model {
  coordinateImage?: number[];
  coordinates?: number[];
  fracSOPInstanceUID?: string;
  fractureCategory?: string;
  fractureConfidence?: number;
  fractureId?: number;
  fractureLocation?: string;
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      coordinateImage: 'CoordinateImage',
      coordinates: 'Coordinates',
      fracSOPInstanceUID: 'FracSOPInstanceUID',
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
      fracSOPInstanceUID: 'string',
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
  bodyPart?: string;
  imageQuality?: number;
  imageType?: string;
  results?: { [key: string]: any };
  resultsEnglish?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      imageQuality: 'ImageQuality',
      imageType: 'ImageType',
      results: 'Results',
      resultsEnglish: 'ResultsEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      imageQuality: 'number',
      imageType: 'string',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultsEnglish: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class DetectSpineMRIAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class PredictCVDRequestURLList extends $tea.Model {
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

export class PredictCVDAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictCVDResponseBodyDataLesionFeatureScore extends $tea.Model {
  aortaCalciumScore?: number[];
  aortaCalciumVolume?: number[];
  ascAoMaxDiam?: number[];
  ascendAortaLength?: number[];
  cardioThoracicRatio?: number[];
  coronaryCalciumScore?: number[];
  coronaryCalciumVol?: number[];
  deepFeature?: number[];
  eatHUMean?: number[];
  eatHUSTD?: number[];
  eatVolume?: number[];
  leftLungLowattRatio?: number[];
  myoEpiRatio?: number[];
  rightLungLowattRatio?: number[];
  static names(): { [key: string]: string } {
    return {
      aortaCalciumScore: 'AortaCalciumScore',
      aortaCalciumVolume: 'AortaCalciumVolume',
      ascAoMaxDiam: 'AscAoMaxDiam',
      ascendAortaLength: 'AscendAortaLength',
      cardioThoracicRatio: 'CardioThoracicRatio',
      coronaryCalciumScore: 'CoronaryCalciumScore',
      coronaryCalciumVol: 'CoronaryCalciumVol',
      deepFeature: 'DeepFeature',
      eatHUMean: 'EatHUMean',
      eatHUSTD: 'EatHUSTD',
      eatVolume: 'EatVolume',
      leftLungLowattRatio: 'LeftLungLowattRatio',
      myoEpiRatio: 'MyoEpiRatio',
      rightLungLowattRatio: 'RightLungLowattRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aortaCalciumScore: { 'type': 'array', 'itemType': 'number' },
      aortaCalciumVolume: { 'type': 'array', 'itemType': 'number' },
      ascAoMaxDiam: { 'type': 'array', 'itemType': 'number' },
      ascendAortaLength: { 'type': 'array', 'itemType': 'number' },
      cardioThoracicRatio: { 'type': 'array', 'itemType': 'number' },
      coronaryCalciumScore: { 'type': 'array', 'itemType': 'number' },
      coronaryCalciumVol: { 'type': 'array', 'itemType': 'number' },
      deepFeature: { 'type': 'array', 'itemType': 'number' },
      eatHUMean: { 'type': 'array', 'itemType': 'number' },
      eatHUSTD: { 'type': 'array', 'itemType': 'number' },
      eatVolume: { 'type': 'array', 'itemType': 'number' },
      leftLungLowattRatio: { 'type': 'array', 'itemType': 'number' },
      myoEpiRatio: { 'type': 'array', 'itemType': 'number' },
      rightLungLowattRatio: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictCVDResponseBodyDataLesion extends $tea.Model {
  CVDProbability?: number;
  featureScore?: PredictCVDResponseBodyDataLesionFeatureScore;
  resultURL?: string[];
  static names(): { [key: string]: string } {
    return {
      CVDProbability: 'CVDProbability',
      featureScore: 'FeatureScore',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CVDProbability: 'number',
      featureScore: PredictCVDResponseBodyDataLesionFeatureScore,
      resultURL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictCVDResponseBodyData extends $tea.Model {
  lesion?: PredictCVDResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: PredictCVDResponseBodyDataLesion,
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

export class RunCTRegistrationAdvanceRequestFloatingList extends $tea.Model {
  floatingURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      floatingURLObject: 'FloatingURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      floatingURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationAdvanceRequestReferenceList extends $tea.Model {
  referenceURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      referenceURLObject: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceURLObject: 'Readable',
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
  answerImageData?: string;
  static names(): { [key: string]: string } {
    return {
      answerImageData: 'AnswerImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageData: 'string',
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

export class RunMedQAAdvanceRequestAnswerImageDataList extends $tea.Model {
  answerImageData?: string;
  static names(): { [key: string]: string } {
    return {
      answerImageData: 'AnswerImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAAdvanceRequestAnswerImageURLList extends $tea.Model {
  answerImageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      answerImageURLObject: 'AnswerImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageURLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAAdvanceRequestAnswerTextList extends $tea.Model {
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

export class ScreenCRCRequestURLList extends $tea.Model {
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

export class ScreenCRCAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenCRCResponseBodyDataLesion extends $tea.Model {
  CRCVolume?: string;
  colorectumVolume?: string;
  mask?: string;
  probabilities?: string;
  static names(): { [key: string]: string } {
    return {
      CRCVolume: 'CRCVolume',
      colorectumVolume: 'ColorectumVolume',
      mask: 'Mask',
      probabilities: 'Probabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CRCVolume: 'string',
      colorectumVolume: 'string',
      mask: 'string',
      probabilities: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenCRCResponseBodyData extends $tea.Model {
  lesion?: ScreenCRCResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenCRCResponseBodyDataLesion,
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

export class ScreenChestCTAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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
  seriesInstanceUID?: string;
  volumeScore?: string;
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      resultUrl: 'ResultUrl',
      score: 'Score',
      seriesInstanceUID: 'SeriesInstanceUID',
      volumeScore: 'VolumeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataCACSDetections },
      resultUrl: 'string',
      score: 'string',
      seriesInstanceUID: 'string',
      volumeScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataCalcBMDDetections extends $tea.Model {
  vertBMD?: number;
  vertCategory?: number;
  vertId?: string;
  vertTScore?: number;
  vertZScore?: number;
  static names(): { [key: string]: string } {
    return {
      vertBMD: 'VertBMD',
      vertCategory: 'VertCategory',
      vertId: 'VertId',
      vertTScore: 'VertTScore',
      vertZScore: 'VertZScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vertBMD: 'number',
      vertCategory: 'number',
      vertId: 'string',
      vertTScore: 'number',
      vertZScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataCalcBMD extends $tea.Model {
  detections?: ScreenChestCTResponseBodyDataCalcBMDDetections[];
  origin?: number[];
  resultURL?: string;
  seriesInstanceUid?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      resultURL: 'ResultURL',
      seriesInstanceUid: 'SeriesInstanceUid',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataCalcBMDDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
      seriesInstanceUid: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
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
  seriesInstanceUID?: string;
  static names(): { [key: string]: string } {
    return {
      lesionRatio: 'LesionRatio',
      mask: 'Mask',
      newProbability: 'NewProbability',
      normalProbability: 'NormalProbability',
      otherProbability: 'OtherProbability',
      seriesInstanceUID: 'SeriesInstanceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionRatio: 'string',
      mask: 'string',
      newProbability: 'string',
      normalProbability: 'string',
      otherProbability: 'string',
      seriesInstanceUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectLiverSteatosisDetections extends $tea.Model {
  liverHU?: number;
  liverROI1?: number;
  liverROI2?: number;
  liverROI3?: number;
  liverSlice?: number;
  liverSpleenDifference?: number;
  liverSpleenRatio?: number;
  liverVolume?: number;
  prediction?: string;
  probability?: number;
  ROI1Center?: number[];
  ROI2Center?: number[];
  ROI3Center?: number[];
  radius?: number;
  spleenCenter?: number[];
  spleenHU?: number;
  spleenROI?: number;
  spleenSlice?: number;
  spleenVolume?: number;
  static names(): { [key: string]: string } {
    return {
      liverHU: 'LiverHU',
      liverROI1: 'LiverROI1',
      liverROI2: 'LiverROI2',
      liverROI3: 'LiverROI3',
      liverSlice: 'LiverSlice',
      liverSpleenDifference: 'LiverSpleenDifference',
      liverSpleenRatio: 'LiverSpleenRatio',
      liverVolume: 'LiverVolume',
      prediction: 'Prediction',
      probability: 'Probability',
      ROI1Center: 'ROI1Center',
      ROI2Center: 'ROI2Center',
      ROI3Center: 'ROI3Center',
      radius: 'Radius',
      spleenCenter: 'SpleenCenter',
      spleenHU: 'SpleenHU',
      spleenROI: 'SpleenROI',
      spleenSlice: 'SpleenSlice',
      spleenVolume: 'SpleenVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liverHU: 'number',
      liverROI1: 'number',
      liverROI2: 'number',
      liverROI3: 'number',
      liverSlice: 'number',
      liverSpleenDifference: 'number',
      liverSpleenRatio: 'number',
      liverVolume: 'number',
      prediction: 'string',
      probability: 'number',
      ROI1Center: { 'type': 'array', 'itemType': 'number' },
      ROI2Center: { 'type': 'array', 'itemType': 'number' },
      ROI3Center: { 'type': 'array', 'itemType': 'number' },
      radius: 'number',
      spleenCenter: { 'type': 'array', 'itemType': 'number' },
      spleenHU: 'number',
      spleenROI: 'number',
      spleenSlice: 'number',
      spleenVolume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectLiverSteatosis extends $tea.Model {
  detections?: ScreenChestCTResponseBodyDataDetectLiverSteatosisDetections[];
  origin?: number[];
  seriesInstanceUid?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      seriesInstanceUid: 'SeriesInstanceUid',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectLiverSteatosisDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      seriesInstanceUid: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
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
  seriesInstanceUID?: string;
  static names(): { [key: string]: string } {
    return {
      lesions: 'Lesions',
      seriesInstanceUID: 'SeriesInstanceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesions: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectLymphLesions },
      seriesInstanceUID: 'string',
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
  seriesInstanceUID?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUID: 'SeriesInstanceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataDetectPdacLesion,
      seriesInstanceUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectRibFractureDetections extends $tea.Model {
  coordinateImage?: number[];
  coordinates?: number[];
  fracSOPInstanceUID?: string;
  fractureCategory?: number;
  fractureConfidence?: number;
  fractureId?: number;
  fractureLocation?: string;
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      coordinateImage: 'CoordinateImage',
      coordinates: 'Coordinates',
      fracSOPInstanceUID: 'FracSOPInstanceUID',
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
      fracSOPInstanceUID: 'string',
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
  seriesInstanceUID?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      fractureMaskURL: 'FractureMaskURL',
      origin: 'Origin',
      resultURL: 'ResultURL',
      ribSegmentMaskURL: 'RibSegmentMaskURL',
      seriesInstanceUID: 'SeriesInstanceUID',
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
      seriesInstanceUID: 'string',
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
  majorAxis?: number[];
  meanValue?: number;
  minorAxis?: number[];
  recistSOPInstanceUID?: string;
  risk?: number;
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
      majorAxis: 'MajorAxis',
      meanValue: 'MeanValue',
      minorAxis: 'MinorAxis',
      recistSOPInstanceUID: 'RecistSOPInstanceUID',
      risk: 'Risk',
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
      majorAxis: { 'type': 'array', 'itemType': 'number' },
      meanValue: 'number',
      minorAxis: { 'type': 'array', 'itemType': 'number' },
      recistSOPInstanceUID: 'string',
      risk: 'number',
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

export class ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore extends $tea.Model {
  aortaCalciumScore?: number[];
  aortaCalciumVolume?: number[];
  ascAoMaxDiam?: number[];
  ascendAortaLength?: number[];
  cardioThoracicRatio?: number[];
  coronaryCalciumVol?: number[];
  deepFeature?: number[];
  eatHUMean?: number[];
  eatHUSTD?: number[];
  eatVolume?: number[];
  leftLungLowattRatio?: number[];
  myoEpiRatio?: number[];
  rightLungLowattRatio?: number[];
  static names(): { [key: string]: string } {
    return {
      aortaCalciumScore: 'AortaCalciumScore',
      aortaCalciumVolume: 'AortaCalciumVolume',
      ascAoMaxDiam: 'AscAoMaxDiam',
      ascendAortaLength: 'AscendAortaLength',
      cardioThoracicRatio: 'CardioThoracicRatio',
      coronaryCalciumVol: 'CoronaryCalciumVol',
      deepFeature: 'DeepFeature',
      eatHUMean: 'EatHUMean',
      eatHUSTD: 'EatHUSTD',
      eatVolume: 'EatVolume',
      leftLungLowattRatio: 'LeftLungLowattRatio',
      myoEpiRatio: 'MyoEpiRatio',
      rightLungLowattRatio: 'RightLungLowattRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aortaCalciumScore: { 'type': 'array', 'itemType': 'number' },
      aortaCalciumVolume: { 'type': 'array', 'itemType': 'number' },
      ascAoMaxDiam: { 'type': 'array', 'itemType': 'number' },
      ascendAortaLength: { 'type': 'array', 'itemType': 'number' },
      cardioThoracicRatio: { 'type': 'array', 'itemType': 'number' },
      coronaryCalciumVol: { 'type': 'array', 'itemType': 'number' },
      deepFeature: { 'type': 'array', 'itemType': 'number' },
      eatHUMean: { 'type': 'array', 'itemType': 'number' },
      eatHUSTD: { 'type': 'array', 'itemType': 'number' },
      eatVolume: { 'type': 'array', 'itemType': 'number' },
      leftLungLowattRatio: { 'type': 'array', 'itemType': 'number' },
      myoEpiRatio: { 'type': 'array', 'itemType': 'number' },
      rightLungLowattRatio: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataPredictCVDLesion extends $tea.Model {
  CVDProbability?: number;
  featureScore?: ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore;
  resultURL?: string[];
  static names(): { [key: string]: string } {
    return {
      CVDProbability: 'CVDProbability',
      featureScore: 'FeatureScore',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CVDProbability: 'number',
      featureScore: ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore,
      resultURL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataPredictCVD extends $tea.Model {
  lesion?: ScreenChestCTResponseBodyDataPredictCVDLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataPredictCVDLesion,
      seriesInstanceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenCRCLesion extends $tea.Model {
  colorectumVolume?: string;
  mask?: string;
  probabilities?: string[];
  static names(): { [key: string]: string } {
    return {
      colorectumVolume: 'ColorectumVolume',
      mask: 'Mask',
      probabilities: 'Probabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorectumVolume: 'string',
      mask: 'string',
      probabilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenCRC extends $tea.Model {
  lesion?: ScreenChestCTResponseBodyDataScreenCRCLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataScreenCRCLesion,
      seriesInstanceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenEcLesion extends $tea.Model {
  benignVolume?: string;
  ecVolume?: string;
  esoVolume?: string;
  mask?: string;
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      benignVolume: 'BenignVolume',
      ecVolume: 'EcVolume',
      esoVolume: 'EsoVolume',
      mask: 'Mask',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignVolume: 'string',
      ecVolume: 'string',
      esoVolume: 'string',
      mask: 'string',
      possibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenEc extends $tea.Model {
  lesion?: ScreenChestCTResponseBodyDataScreenEcLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataScreenEcLesion,
      seriesInstanceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenGCLesion extends $tea.Model {
  GCVolume?: string;
  mask?: string;
  nonGCVolume?: string;
  probabilities?: string[];
  stomachVolume?: string;
  static names(): { [key: string]: string } {
    return {
      GCVolume: 'GCVolume',
      mask: 'Mask',
      nonGCVolume: 'NonGCVolume',
      probabilities: 'Probabilities',
      stomachVolume: 'StomachVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GCVolume: 'string',
      mask: 'string',
      nonGCVolume: 'string',
      probabilities: { 'type': 'array', 'itemType': 'string' },
      stomachVolume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenGC extends $tea.Model {
  lesion?: ScreenChestCTResponseBodyDataScreenGCLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataScreenGCLesion,
      seriesInstanceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenLCLesionLesionList extends $tea.Model {
  diameter?: number[];
  keySlice?: number;
  malignancy?: number;
  recistEndpoints?: number[];
  type?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      diameter: 'Diameter',
      keySlice: 'KeySlice',
      malignancy: 'Malignancy',
      recistEndpoints: 'RecistEndpoints',
      type: 'Type',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diameter: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      malignancy: 'number',
      recistEndpoints: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult extends $tea.Model {
  benignNonCystProb?: string;
  cystProb?: string;
  HCCProb?: string;
  malignantNonHCCProb?: string;
  static names(): { [key: string]: string } {
    return {
      benignNonCystProb: 'BenignNonCystProb',
      cystProb: 'CystProb',
      HCCProb: 'HCCProb',
      malignantNonHCCProb: 'MalignantNonHCCProb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignNonCystProb: 'string',
      cystProb: 'string',
      HCCProb: 'string',
      malignantNonHCCProb: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenLCLesion extends $tea.Model {
  lesionList?: ScreenChestCTResponseBodyDataScreenLCLesionLesionList[];
  liverVolume?: string;
  mask?: string;
  patientLevelResult?: ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult;
  static names(): { [key: string]: string } {
    return {
      lesionList: 'LesionList',
      liverVolume: 'LiverVolume',
      mask: 'Mask',
      patientLevelResult: 'PatientLevelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionList: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataScreenLCLesionLesionList },
      liverVolume: 'string',
      mask: 'string',
      patientLevelResult: ScreenChestCTResponseBodyDataScreenLCLesionPatientLevelResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataScreenLC extends $tea.Model {
  lesion?: ScreenChestCTResponseBodyDataScreenLCLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataScreenLCLesion,
      seriesInstanceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyData extends $tea.Model {
  analyzeChestVessel?: ScreenChestCTResponseBodyDataAnalyzeChestVessel;
  CACS?: ScreenChestCTResponseBodyDataCACS;
  calcBMD?: ScreenChestCTResponseBodyDataCalcBMD;
  covid?: ScreenChestCTResponseBodyDataCovid;
  detectLiverSteatosis?: ScreenChestCTResponseBodyDataDetectLiverSteatosis;
  detectLymph?: ScreenChestCTResponseBodyDataDetectLymph;
  detectPdac?: ScreenChestCTResponseBodyDataDetectPdac;
  detectRibFracture?: ScreenChestCTResponseBodyDataDetectRibFracture;
  errorMessage?: string;
  lungNodule?: ScreenChestCTResponseBodyDataLungNodule;
  nestedUrlList?: { [key: string]: any };
  predictCVD?: ScreenChestCTResponseBodyDataPredictCVD;
  screenCRC?: ScreenChestCTResponseBodyDataScreenCRC;
  screenEc?: ScreenChestCTResponseBodyDataScreenEc;
  screenGC?: ScreenChestCTResponseBodyDataScreenGC;
  screenLC?: ScreenChestCTResponseBodyDataScreenLC;
  URLList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      analyzeChestVessel: 'AnalyzeChestVessel',
      CACS: 'CACS',
      calcBMD: 'CalcBMD',
      covid: 'Covid',
      detectLiverSteatosis: 'DetectLiverSteatosis',
      detectLymph: 'DetectLymph',
      detectPdac: 'DetectPdac',
      detectRibFracture: 'DetectRibFracture',
      errorMessage: 'ErrorMessage',
      lungNodule: 'LungNodule',
      nestedUrlList: 'NestedUrlList',
      predictCVD: 'PredictCVD',
      screenCRC: 'ScreenCRC',
      screenEc: 'ScreenEc',
      screenGC: 'ScreenGC',
      screenLC: 'ScreenLC',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeChestVessel: ScreenChestCTResponseBodyDataAnalyzeChestVessel,
      CACS: ScreenChestCTResponseBodyDataCACS,
      calcBMD: ScreenChestCTResponseBodyDataCalcBMD,
      covid: ScreenChestCTResponseBodyDataCovid,
      detectLiverSteatosis: ScreenChestCTResponseBodyDataDetectLiverSteatosis,
      detectLymph: ScreenChestCTResponseBodyDataDetectLymph,
      detectPdac: ScreenChestCTResponseBodyDataDetectPdac,
      detectRibFracture: ScreenChestCTResponseBodyDataDetectRibFracture,
      errorMessage: 'string',
      lungNodule: ScreenChestCTResponseBodyDataLungNodule,
      nestedUrlList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predictCVD: ScreenChestCTResponseBodyDataPredictCVD,
      screenCRC: ScreenChestCTResponseBodyDataScreenCRC,
      screenEc: ScreenChestCTResponseBodyDataScreenEc,
      screenGC: ScreenChestCTResponseBodyDataScreenGC,
      screenLC: ScreenChestCTResponseBodyDataScreenLC,
      URLList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenECRequestURLList extends $tea.Model {
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

export class ScreenECAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenECResponseBodyDataLesion extends $tea.Model {
  benignVolume?: string;
  ecVolume?: string;
  esoVolume?: string;
  mask?: string;
  possibilities?: string[];
  static names(): { [key: string]: string } {
    return {
      benignVolume: 'BenignVolume',
      ecVolume: 'EcVolume',
      esoVolume: 'EsoVolume',
      mask: 'Mask',
      possibilities: 'Possibilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignVolume: 'string',
      ecVolume: 'string',
      esoVolume: 'string',
      mask: 'string',
      possibilities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenECResponseBodyData extends $tea.Model {
  lesion?: ScreenECResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenECResponseBodyDataLesion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCRequestURLList extends $tea.Model {
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

export class ScreenGCAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCResponseBodyDataLesion extends $tea.Model {
  GCVolume?: string;
  mask?: string;
  nonGCVolume?: string;
  probabilities?: string;
  stomachVolume?: string;
  static names(): { [key: string]: string } {
    return {
      GCVolume: 'GCVolume',
      mask: 'Mask',
      nonGCVolume: 'NonGCVolume',
      probabilities: 'Probabilities',
      stomachVolume: 'StomachVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GCVolume: 'string',
      mask: 'string',
      nonGCVolume: 'string',
      probabilities: 'string',
      stomachVolume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenGCResponseBodyData extends $tea.Model {
  lesion?: ScreenGCResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenGCResponseBodyDataLesion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCRequestURLList extends $tea.Model {
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

export class ScreenLCAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCResponseBodyDataLesionLesionList extends $tea.Model {
  diameter?: number[];
  keySlice?: number;
  malignancy?: number;
  recistEndpoints?: number[];
  type?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      diameter: 'Diameter',
      keySlice: 'KeySlice',
      malignancy: 'Malignancy',
      recistEndpoints: 'RecistEndpoints',
      type: 'Type',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diameter: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      malignancy: 'number',
      recistEndpoints: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCResponseBodyDataLesionPatientLevelResult extends $tea.Model {
  benignNonCystProb?: string;
  cystProb?: number;
  HCCProb?: number;
  malignantNonHCCProb?: number;
  static names(): { [key: string]: string } {
    return {
      benignNonCystProb: 'BenignNonCystProb',
      cystProb: 'CystProb',
      HCCProb: 'HCCProb',
      malignantNonHCCProb: 'MalignantNonHCCProb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benignNonCystProb: 'string',
      cystProb: 'number',
      HCCProb: 'number',
      malignantNonHCCProb: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCResponseBodyDataLesion extends $tea.Model {
  lesionList?: ScreenLCResponseBodyDataLesionLesionList[];
  liverVolume?: number;
  mask?: string;
  patientLevelResult?: ScreenLCResponseBodyDataLesionPatientLevelResult;
  static names(): { [key: string]: string } {
    return {
      lesionList: 'LesionList',
      liverVolume: 'LiverVolume',
      mask: 'Mask',
      patientLevelResult: 'PatientLevelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionList: { 'type': 'array', 'itemType': ScreenLCResponseBodyDataLesionLesionList },
      liverVolume: 'number',
      mask: 'string',
      patientLevelResult: ScreenLCResponseBodyDataLesionPatientLevelResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenLCResponseBodyData extends $tea.Model {
  lesion?: ScreenLCResponseBodyDataLesion;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenLCResponseBodyDataLesion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentLymphNodeRequestURLList extends $tea.Model {
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

export class SegmentLymphNodeAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentLymphNodeResponseBodyData extends $tea.Model {
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentOARRequestURLList extends $tea.Model {
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

export class SegmentOARAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SegmentOARResponseBodyData extends $tea.Model {
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVolumeSegmentRequestURLList extends $tea.Model {
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

export class TargetVolumeSegmentAdvanceRequestURLList extends $tea.Model {
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVolumeSegmentResponseBodyData extends $tea.Model {
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultURL: 'string',
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

  async analyzeChestVesselAdvance(request: AnalyzeChestVesselAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AnalyzeChestVesselResponse> {
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
    let analyzeChestVesselReq = new AnalyzeChestVesselRequest({ });
    OpenApiUtil.convert(request, analyzeChestVesselReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : AnalyzeChestVesselRequestURLList = analyzeChestVesselReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let analyzeChestVesselResp = await this.analyzeChestVesselWithOptions(analyzeChestVesselReq, runtime);
    return analyzeChestVesselResp;
  }

  async calcBMDWithOptions(request: CalcBMDRequest, runtime: $Util.RuntimeOptions): Promise<CalcBMDResponse> {
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
      action: "CalcBMD",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CalcBMDResponse>(await this.callApi(params, req, runtime), new CalcBMDResponse({}));
  }

  async calcBMD(request: CalcBMDRequest): Promise<CalcBMDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.calcBMDWithOptions(request, runtime);
  }

  async calcBMDAdvance(request: CalcBMDAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CalcBMDResponse> {
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
    let calcBMDReq = new CalcBMDRequest({ });
    OpenApiUtil.convert(request, calcBMDReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : CalcBMDRequestURLList = calcBMDReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let calcBMDResp = await this.calcBMDWithOptions(calcBMDReq, runtime);
    return calcBMDResp;
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

  async calcCACSAdvance(request: CalcCACSAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CalcCACSResponse> {
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
    let calcCACSReq = new CalcCACSRequest({ });
    OpenApiUtil.convert(request, calcCACSReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : CalcCACSRequestURLList = calcCACSReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let calcCACSResp = await this.calcCACSWithOptions(calcCACSReq, runtime);
    return calcCACSResp;
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
      classifyFNFReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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

  async detectCovid19CadAdvance(request: DetectCovid19CadAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectCovid19CadResponse> {
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
    let detectCovid19CadReq = new DetectCovid19CadRequest({ });
    OpenApiUtil.convert(request, detectCovid19CadReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectCovid19CadRequestURLList = detectCovid19CadReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectCovid19CadResp = await this.detectCovid19CadWithOptions(detectCovid19CadReq, runtime);
    return detectCovid19CadResp;
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
      detectHipKeypointXRayReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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
      detectKneeKeypointXRayReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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
      detectKneeXRayReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let detectKneeXRayResp = await this.detectKneeXRayWithOptions(detectKneeXRayReq, runtime);
    return detectKneeXRayResp;
  }

  async detectLiverSteatosisWithOptions(request: DetectLiverSteatosisRequest, runtime: $Util.RuntimeOptions): Promise<DetectLiverSteatosisResponse> {
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
      action: "DetectLiverSteatosis",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectLiverSteatosisResponse>(await this.callApi(params, req, runtime), new DetectLiverSteatosisResponse({}));
  }

  async detectLiverSteatosis(request: DetectLiverSteatosisRequest): Promise<DetectLiverSteatosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectLiverSteatosisWithOptions(request, runtime);
  }

  async detectLiverSteatosisAdvance(request: DetectLiverSteatosisAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLiverSteatosisResponse> {
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
    let detectLiverSteatosisReq = new DetectLiverSteatosisRequest({ });
    OpenApiUtil.convert(request, detectLiverSteatosisReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectLiverSteatosisRequestURLList = detectLiverSteatosisReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectLiverSteatosisResp = await this.detectLiverSteatosisWithOptions(detectLiverSteatosisReq, runtime);
    return detectLiverSteatosisResp;
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

  async detectLungNoduleAdvance(request: DetectLungNoduleAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLungNoduleResponse> {
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
    let detectLungNoduleReq = new DetectLungNoduleRequest({ });
    OpenApiUtil.convert(request, detectLungNoduleReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectLungNoduleRequestURLList = detectLungNoduleReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectLungNoduleResp = await this.detectLungNoduleWithOptions(detectLungNoduleReq, runtime);
    return detectLungNoduleResp;
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

  async detectLymphAdvance(request: DetectLymphAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectLymphResponse> {
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
    let detectLymphReq = new DetectLymphRequest({ });
    OpenApiUtil.convert(request, detectLymphReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectLymphRequestURLList = detectLymphReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectLymphResp = await this.detectLymphWithOptions(detectLymphReq, runtime);
    return detectLymphResp;
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

  async detectPancAdvance(request: DetectPancAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectPancResponse> {
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
    let detectPancReq = new DetectPancRequest({ });
    OpenApiUtil.convert(request, detectPancReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectPancRequestURLList = detectPancReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectPancResp = await this.detectPancWithOptions(detectPancReq, runtime);
    return detectPancResp;
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

  async detectRibFractureAdvance(request: DetectRibFractureAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectRibFractureResponse> {
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
    let detectRibFractureReq = new DetectRibFractureRequest({ });
    OpenApiUtil.convert(request, detectRibFractureReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectRibFractureRequestURLList = detectRibFractureReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectRibFractureResp = await this.detectRibFractureWithOptions(detectRibFractureReq, runtime);
    return detectRibFractureResp;
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
      detectSkinDiseaseReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
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

  async detectSpineMRIAdvance(request: DetectSpineMRIAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectSpineMRIResponse> {
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
    let detectSpineMRIReq = new DetectSpineMRIRequest({ });
    OpenApiUtil.convert(request, detectSpineMRIReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : DetectSpineMRIRequestURLList = detectSpineMRIReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let detectSpineMRIResp = await this.detectSpineMRIWithOptions(detectSpineMRIReq, runtime);
    return detectSpineMRIResp;
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

  async predictCVDWithOptions(request: PredictCVDRequest, runtime: $Util.RuntimeOptions): Promise<PredictCVDResponse> {
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
      action: "PredictCVD",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictCVDResponse>(await this.callApi(params, req, runtime), new PredictCVDResponse({}));
  }

  async predictCVD(request: PredictCVDRequest): Promise<PredictCVDResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictCVDWithOptions(request, runtime);
  }

  async predictCVDAdvance(request: PredictCVDAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<PredictCVDResponse> {
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
    let predictCVDReq = new PredictCVDRequest({ });
    OpenApiUtil.convert(request, predictCVDReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : PredictCVDRequestURLList = predictCVDReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let predictCVDResp = await this.predictCVDWithOptions(predictCVDReq, runtime);
    return predictCVDResp;
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

  async runCTRegistrationAdvance(request: RunCTRegistrationAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RunCTRegistrationResponse> {
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
    let runCTRegistrationReq = new RunCTRegistrationRequest({ });
    OpenApiUtil.convert(request, runCTRegistrationReq);
    if (!Util.isUnset(request.floatingList)) {
      let i0 : number = 0;

      for (let item0 of request.floatingList) {
        if (!Util.isUnset(item0.floatingURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.floatingURLObject,
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
          let tmp : RunCTRegistrationRequestFloatingList = runCTRegistrationReq.floatingList[i0];
          tmp.floatingURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    if (!Util.isUnset(request.referenceList)) {
      let i1 : number = 0;

      for (let item0 of request.referenceList) {
        if (!Util.isUnset(item0.referenceURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.referenceURLObject,
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
          let tmp : RunCTRegistrationRequestReferenceList = runCTRegistrationReq.referenceList[i1];
          tmp.referenceURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i1 = Number.ltoi(Number.add(Number.itol(i1), Number.itol(1)));
        }

      }
    }

    let runCTRegistrationResp = await this.runCTRegistrationWithOptions(runCTRegistrationReq, runtime);
    return runCTRegistrationResp;
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

  async runMedQAAdvance(request: RunMedQAAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<RunMedQAResponse> {
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
    let runMedQAReq = new RunMedQARequest({ });
    OpenApiUtil.convert(request, runMedQAReq);
    if (!Util.isUnset(request.answerImageURLList)) {
      let i0 : number = 0;

      for (let item0 of request.answerImageURLList) {
        if (!Util.isUnset(item0.answerImageURLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.answerImageURLObject,
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
          let tmp : RunMedQARequestAnswerImageURLList = runMedQAReq.answerImageURLList[i0];
          tmp.answerImageURL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let runMedQAResp = await this.runMedQAWithOptions(runMedQAReq, runtime);
    return runMedQAResp;
  }

  async screenCRCWithOptions(request: ScreenCRCRequest, runtime: $Util.RuntimeOptions): Promise<ScreenCRCResponse> {
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
      action: "ScreenCRC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScreenCRCResponse>(await this.callApi(params, req, runtime), new ScreenCRCResponse({}));
  }

  async screenCRC(request: ScreenCRCRequest): Promise<ScreenCRCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.screenCRCWithOptions(request, runtime);
  }

  async screenCRCAdvance(request: ScreenCRCAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ScreenCRCResponse> {
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
    let screenCRCReq = new ScreenCRCRequest({ });
    OpenApiUtil.convert(request, screenCRCReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : ScreenCRCRequestURLList = screenCRCReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let screenCRCResp = await this.screenCRCWithOptions(screenCRCReq, runtime);
    return screenCRCResp;
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

  async screenChestCTAdvance(request: ScreenChestCTAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ScreenChestCTResponse> {
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
    let screenChestCTReq = new ScreenChestCTRequest({ });
    OpenApiUtil.convert(request, screenChestCTReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : ScreenChestCTRequestURLList = screenChestCTReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let screenChestCTResp = await this.screenChestCTWithOptions(screenChestCTReq, runtime);
    return screenChestCTResp;
  }

  async screenECWithOptions(request: ScreenECRequest, runtime: $Util.RuntimeOptions): Promise<ScreenECResponse> {
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
      action: "ScreenEC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScreenECResponse>(await this.callApi(params, req, runtime), new ScreenECResponse({}));
  }

  async screenEC(request: ScreenECRequest): Promise<ScreenECResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.screenECWithOptions(request, runtime);
  }

  async screenECAdvance(request: ScreenECAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ScreenECResponse> {
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
    let screenECReq = new ScreenECRequest({ });
    OpenApiUtil.convert(request, screenECReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : ScreenECRequestURLList = screenECReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let screenECResp = await this.screenECWithOptions(screenECReq, runtime);
    return screenECResp;
  }

  async screenGCWithOptions(request: ScreenGCRequest, runtime: $Util.RuntimeOptions): Promise<ScreenGCResponse> {
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
      action: "ScreenGC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScreenGCResponse>(await this.callApi(params, req, runtime), new ScreenGCResponse({}));
  }

  async screenGC(request: ScreenGCRequest): Promise<ScreenGCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.screenGCWithOptions(request, runtime);
  }

  async screenGCAdvance(request: ScreenGCAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ScreenGCResponse> {
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
    let screenGCReq = new ScreenGCRequest({ });
    OpenApiUtil.convert(request, screenGCReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : ScreenGCRequestURLList = screenGCReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let screenGCResp = await this.screenGCWithOptions(screenGCReq, runtime);
    return screenGCResp;
  }

  async screenLCWithOptions(request: ScreenLCRequest, runtime: $Util.RuntimeOptions): Promise<ScreenLCResponse> {
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
      action: "ScreenLC",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScreenLCResponse>(await this.callApi(params, req, runtime), new ScreenLCResponse({}));
  }

  async screenLC(request: ScreenLCRequest): Promise<ScreenLCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.screenLCWithOptions(request, runtime);
  }

  async screenLCAdvance(request: ScreenLCAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ScreenLCResponse> {
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
    let screenLCReq = new ScreenLCRequest({ });
    OpenApiUtil.convert(request, screenLCReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : ScreenLCRequestURLList = screenLCReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let screenLCResp = await this.screenLCWithOptions(screenLCReq, runtime);
    return screenLCResp;
  }

  async segmentLymphNodeWithOptions(request: SegmentLymphNodeRequest, runtime: $Util.RuntimeOptions): Promise<SegmentLymphNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyPart)) {
      body["BodyPart"] = request.bodyPart;
    }

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
      action: "SegmentLymphNode",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SegmentLymphNodeResponse>(await this.callApi(params, req, runtime), new SegmentLymphNodeResponse({}));
  }

  async segmentLymphNode(request: SegmentLymphNodeRequest): Promise<SegmentLymphNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentLymphNodeWithOptions(request, runtime);
  }

  async segmentLymphNodeAdvance(request: SegmentLymphNodeAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SegmentLymphNodeResponse> {
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
    let segmentLymphNodeReq = new SegmentLymphNodeRequest({ });
    OpenApiUtil.convert(request, segmentLymphNodeReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : SegmentLymphNodeRequestURLList = segmentLymphNodeReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let segmentLymphNodeResp = await this.segmentLymphNodeWithOptions(segmentLymphNodeReq, runtime);
    return segmentLymphNodeResp;
  }

  async segmentOARWithOptions(request: SegmentOARRequest, runtime: $Util.RuntimeOptions): Promise<SegmentOARResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyPart)) {
      body["BodyPart"] = request.bodyPart;
    }

    if (!Util.isUnset(request.contrast)) {
      body["Contrast"] = request.contrast;
    }

    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.maskList)) {
      body["MaskList"] = request.maskList;
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
      action: "SegmentOAR",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SegmentOARResponse>(await this.callApi(params, req, runtime), new SegmentOARResponse({}));
  }

  async segmentOAR(request: SegmentOARRequest): Promise<SegmentOARResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.segmentOARWithOptions(request, runtime);
  }

  async segmentOARAdvance(request: SegmentOARAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<SegmentOARResponse> {
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
    let segmentOARReq = new SegmentOARRequest({ });
    OpenApiUtil.convert(request, segmentOARReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : SegmentOARRequestURLList = segmentOARReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let segmentOARResp = await this.segmentOARWithOptions(segmentOARReq, runtime);
    return segmentOARResp;
  }

  async targetVolumeSegmentWithOptions(request: TargetVolumeSegmentRequest, runtime: $Util.RuntimeOptions): Promise<TargetVolumeSegmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cancerType)) {
      body["CancerType"] = request.cancerType;
    }

    if (!Util.isUnset(request.dataFormat)) {
      body["DataFormat"] = request.dataFormat;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!Util.isUnset(request.targetVolumeType)) {
      body["TargetVolumeType"] = request.targetVolumeType;
    }

    if (!Util.isUnset(request.URLList)) {
      body["URLList"] = request.URLList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TargetVolumeSegment",
      version: "2020-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TargetVolumeSegmentResponse>(await this.callApi(params, req, runtime), new TargetVolumeSegmentResponse({}));
  }

  async targetVolumeSegment(request: TargetVolumeSegmentRequest): Promise<TargetVolumeSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.targetVolumeSegmentWithOptions(request, runtime);
  }

  async targetVolumeSegmentAdvance(request: TargetVolumeSegmentAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<TargetVolumeSegmentResponse> {
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
    let targetVolumeSegmentReq = new TargetVolumeSegmentRequest({ });
    OpenApiUtil.convert(request, targetVolumeSegmentReq);
    if (!Util.isUnset(request.URLList)) {
      let i0 : number = 0;

      for (let item0 of request.URLList) {
        if (!Util.isUnset(item0.URLObject)) {
          authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
          ossConfig.accessKeyId = authResponse.body.accessKeyId;
          ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
          ossClient = new OSS(ossConfig);
          fileObj = new $FileForm.FileField({
            filename: authResponse.body.objectKey,
            content: item0.URLObject,
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
          let tmp : TargetVolumeSegmentRequestURLList = targetVolumeSegmentReq.URLList[i0];
          tmp.URL = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
          i0 = Number.ltoi(Number.add(Number.itol(i0), Number.itol(1)));
        }

      }
    }

    let targetVolumeSegmentResp = await this.targetVolumeSegmentWithOptions(targetVolumeSegmentReq, runtime);
    return targetVolumeSegmentResp;
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
