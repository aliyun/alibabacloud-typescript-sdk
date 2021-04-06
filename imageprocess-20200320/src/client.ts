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

export class ClassifyFNFRequest extends $tea.Model {
  imageUrl?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
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
  requestId?: string;
  data?: ClassifyFNFResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ClassifyFNFResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyFNFResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClassifyFNFResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClassifyFNFResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  URLList?: DetectLungNoduleRequestURLList[];
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      URLList: 'URLList',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      URLList: { 'type': 'array', 'itemType': DetectLungNoduleRequestURLList },
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectLungNoduleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectLungNoduleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectLungNoduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectLungNoduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  dataSourceType?: string;
  referenceList?: RunCTRegistrationRequestReferenceList[];
  floatingList?: RunCTRegistrationRequestFloatingList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      dataSourceType: 'DataSourceType',
      referenceList: 'ReferenceList',
      floatingList: 'FloatingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      dataSourceType: 'string',
      referenceList: { 'type': 'array', 'itemType': RunCTRegistrationRequestReferenceList },
      floatingList: { 'type': 'array', 'itemType': RunCTRegistrationRequestFloatingList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationResponseBody extends $tea.Model {
  requestId?: string;
  data?: RunCTRegistrationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RunCTRegistrationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCTRegistrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunCTRegistrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunCTRegistrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedRequest extends $tea.Model {
  fromLanguage?: string;
  toLanguage?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      fromLanguage: 'FromLanguage',
      toLanguage: 'ToLanguage',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromLanguage: 'string',
      toLanguage: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedResponseBody extends $tea.Model {
  requestId?: string;
  data?: TranslateMedResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TranslateMedResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateMedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TranslateMedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TranslateMedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  URLList?: DetectSpineMRIRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      URLList: { 'type': 'array', 'itemType': DetectSpineMRIRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectSpineMRIResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectSpineMRIResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectSpineMRIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectSpineMRIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  dataSourceType?: string;
  URLList?: CalcCACSRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': CalcCACSRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponseBody extends $tea.Model {
  requestId?: string;
  data?: CalcCACSResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CalcCACSResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalcCACSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CalcCACSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CalcCACSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayRequest extends $tea.Model {
  imageUrl?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
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
  requestId?: string;
  data?: DetectHipKeypointXRayResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectHipKeypointXRayResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectHipKeypointXRayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectHipKeypointXRayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayRequest extends $tea.Model {
  imageUrl?: string;
  dataFormat?: string;
  orgId?: string;
  orgName?: string;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
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
  requestId?: string;
  data?: DetectKneeKeypointXRayResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectKneeKeypointXRayResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectKneeKeypointXRayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectKneeKeypointXRayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQARequest extends $tea.Model {
  question?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      question: 'Question',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      question: 'string',
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAResponseBody extends $tea.Model {
  requestId?: string;
  data?: RunMedQAResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RunMedQAResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunMedQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunMedQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayRequest extends $tea.Model {
  url?: string;
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayAdvanceRequest extends $tea.Model {
  urlObject: Readable;
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      urlObject: 'UrlObject',
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlObject: 'Readable',
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectKneeXRayResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectKneeXRayResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeXRayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectKneeXRayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectKneeXRayResponseBody,
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

export class DetectRibFractureRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  sourceType?: string;
  URLList?: DetectRibFractureRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      sourceType: 'SourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      sourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectRibFractureRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectRibFractureResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectRibFractureResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectRibFractureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectRibFractureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectRibFractureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  URLList?: DetectCovid19CadRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      URLList: { 'type': 'array', 'itemType': DetectCovid19CadRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectCovid19CadResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectCovid19CadResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCovid19CadResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectCovid19CadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectCovid19CadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTRequest extends $tea.Model {
  dataFormat?: string;
  orgName?: string;
  orgId?: string;
  URLList?: ScreenChestCTRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgName: 'OrgName',
      orgId: 'OrgId',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgName: 'string',
      orgId: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenChestCTRequestURLList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBody extends $tea.Model {
  requestId?: string;
  data?: ScreenChestCTResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ScreenChestCTResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ScreenChestCTResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScreenChestCTResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseRequest extends $tea.Model {
  url?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      orgId: 'string',
      orgName: 'string',
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
  requestId?: string;
  data?: DetectSkinDiseaseResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DetectSkinDiseaseResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSkinDiseaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectSkinDiseaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectSkinDiseaseResponseBody,
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
  value?: number;
  boxes?: number[];
  tag?: ClassifyFNFResponseBodyDataFracturesTag;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      boxes: 'Boxes',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      boxes: { 'type': 'array', 'itemType': 'number' },
      tag: ClassifyFNFResponseBodyDataFracturesTag,
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
  z?: number;
  lobe?: string;
  meanValue?: number;
  imageZ?: number;
  lung?: string;
  confidence?: number;
  SOPInstanceUID?: string;
  imageX?: number;
  y?: number;
  category?: string;
  volume?: number;
  imageY?: number;
  diameter?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      z: 'Z',
      lobe: 'Lobe',
      meanValue: 'MeanValue',
      imageZ: 'ImageZ',
      lung: 'Lung',
      confidence: 'Confidence',
      SOPInstanceUID: 'SOPInstanceUID',
      imageX: 'ImageX',
      y: 'Y',
      category: 'Category',
      volume: 'Volume',
      imageY: 'ImageY',
      diameter: 'Diameter',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      z: 'number',
      lobe: 'string',
      meanValue: 'number',
      imageZ: 'number',
      lung: 'string',
      confidence: 'number',
      SOPInstanceUID: 'string',
      imageX: 'number',
      y: 'number',
      category: 'string',
      volume: 'number',
      imageY: 'number',
      diameter: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectLungNoduleResponseBodyDataSeries extends $tea.Model {
  seriesInstanceUid?: string;
  elements?: DetectLungNoduleResponseBodyDataSeriesElements[];
  origin?: number[];
  report?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      seriesInstanceUid: 'SeriesInstanceUid',
      elements: 'Elements',
      origin: 'Origin',
      report: 'Report',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesInstanceUid: 'string',
      elements: { 'type': 'array', 'itemType': DetectLungNoduleResponseBodyDataSeriesElements },
      origin: { 'type': 'array', 'itemType': 'number' },
      report: 'string',
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

export class TranslateMedResponseBodyData extends $tea.Model {
  words?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'number',
      text: 'string',
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
  identification?: string;
  disease?: string;
  location?: number[];
  static names(): { [key: string]: string } {
    return {
      identification: 'Identification',
      disease: 'Disease',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identification: 'string',
      disease: 'string',
      location: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectSpineMRIResponseBodyDataVertebras extends $tea.Model {
  identification?: string;
  disease?: string;
  location?: number[];
  static names(): { [key: string]: string } {
    return {
      identification: 'Identification',
      disease: 'Disease',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identification: 'string',
      disease: 'string',
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

export class CalcCACSResponseBodyData extends $tea.Model {
  resultUrl?: string;
  score?: string;
  static names(): { [key: string]: string } {
    return {
      resultUrl: 'ResultUrl',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultUrl: 'string',
      score: 'string',
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
  value?: number;
  coordinates?: number[];
  tag?: DetectHipKeypointXRayResponseBodyDataKeyPointsTag;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      coordinates: 'Coordinates',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      coordinates: { 'type': 'array', 'itemType': 'number' },
      tag: DetectHipKeypointXRayResponseBodyDataKeyPointsTag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectHipKeypointXRayResponseBodyData extends $tea.Model {
  keyPoints?: DetectHipKeypointXRayResponseBodyDataKeyPoints[];
  imageUrl?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      imageUrl: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': DetectHipKeypointXRayResponseBodyDataKeyPoints },
      imageUrl: 'string',
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
  value?: number;
  coordinates?: number[];
  tag?: DetectKneeKeypointXRayResponseBodyDataKeyPointsTag;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      coordinates: 'Coordinates',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      coordinates: { 'type': 'array', 'itemType': 'number' },
      tag: DetectKneeKeypointXRayResponseBodyDataKeyPointsTag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKneeKeypointXRayResponseBodyData extends $tea.Model {
  keyPoints?: DetectKneeKeypointXRayResponseBodyDataKeyPoints[];
  imageUrl?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      imageUrl: 'ImageUrl',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': DetectKneeKeypointXRayResponseBodyDataKeyPoints },
      imageUrl: 'string',
      orgId: 'string',
      orgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMedQAResponseBodyData extends $tea.Model {
  answer?: string;
  similarQuestion?: string[];
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      similarQuestion: 'SimilarQuestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      similarQuestion: { 'type': 'array', 'itemType': 'string' },
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
  coordinates?: number[];
  fractureId?: number;
  coordinateImage?: number[];
  fractureConfidence?: number;
  fractureCategory?: string;
  fractureLocation?: string;
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      fractureId: 'FractureId',
      coordinateImage: 'CoordinateImage',
      fractureConfidence: 'FractureConfidence',
      fractureCategory: 'FractureCategory',
      fractureLocation: 'FractureLocation',
      fractureSegment: 'FractureSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': 'number' },
      fractureId: 'number',
      coordinateImage: { 'type': 'array', 'itemType': 'number' },
      fractureConfidence: 'number',
      fractureCategory: 'string',
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
  normalProbability?: string;
  newProbability?: string;
  lesionRatio?: string;
  otherProbability?: string;
  mask?: string;
  static names(): { [key: string]: string } {
    return {
      normalProbability: 'NormalProbability',
      newProbability: 'NewProbability',
      lesionRatio: 'LesionRatio',
      otherProbability: 'OtherProbability',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalProbability: 'string',
      newProbability: 'string',
      lesionRatio: 'string',
      otherProbability: 'string',
      mask: 'string',
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

export class ScreenChestCTResponseBodyDataLungNoduleSeriesElements extends $tea.Model {
  lobe?: string;
  meanValue?: number;
  lung?: string;
  confidence?: number;
  SOPInstanceUID?: string;
  category?: string;
  volume?: number;
  diameter?: number;
  x?: number;
  y?: number;
  z?: number;
  imageX?: number;
  imageY?: number;
  imageZ?: number;
  static names(): { [key: string]: string } {
    return {
      lobe: 'Lobe',
      meanValue: 'MeanValue',
      lung: 'Lung',
      confidence: 'Confidence',
      SOPInstanceUID: 'SOPInstanceUID',
      category: 'Category',
      volume: 'Volume',
      diameter: 'Diameter',
      x: 'X',
      y: 'Y',
      z: 'Z',
      imageX: 'ImageX',
      imageY: 'ImageY',
      imageZ: 'ImageZ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lobe: 'string',
      meanValue: 'number',
      lung: 'string',
      confidence: 'number',
      SOPInstanceUID: 'string',
      category: 'string',
      volume: 'number',
      diameter: 'number',
      x: 'number',
      y: 'number',
      z: 'number',
      imageX: 'number',
      imageY: 'number',
      imageZ: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataLungNoduleSeries extends $tea.Model {
  seriesInstanceUid?: string;
  elements?: ScreenChestCTResponseBodyDataLungNoduleSeriesElements[];
  origin?: number[];
  report?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      seriesInstanceUid: 'SeriesInstanceUid',
      elements: 'Elements',
      origin: 'Origin',
      report: 'Report',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesInstanceUid: 'string',
      elements: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataLungNoduleSeriesElements },
      origin: { 'type': 'array', 'itemType': 'number' },
      report: 'string',
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

export class ScreenChestCTResponseBodyDataCACS extends $tea.Model {
  resultUrl?: string;
  score?: string;
  static names(): { [key: string]: string } {
    return {
      resultUrl: 'ResultUrl',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultUrl: 'string',
      score: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataCovid extends $tea.Model {
  normalProbability?: string;
  newProbability?: string;
  lesionRatio?: string;
  otherProbability?: string;
  mask?: string;
  static names(): { [key: string]: string } {
    return {
      normalProbability: 'NormalProbability',
      newProbability: 'NewProbability',
      lesionRatio: 'LesionRatio',
      otherProbability: 'OtherProbability',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalProbability: 'string',
      newProbability: 'string',
      lesionRatio: 'string',
      otherProbability: 'string',
      mask: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectRibFractureDetections extends $tea.Model {
  fractureId?: number;
  fractureConfidence?: number;
  fractureCategory?: number;
  coordinates?: number[];
  coordinateImage?: number[];
  fractureLocation?: string;
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      fractureId: 'FractureId',
      fractureConfidence: 'FractureConfidence',
      fractureCategory: 'FractureCategory',
      coordinates: 'Coordinates',
      coordinateImage: 'CoordinateImage',
      fractureLocation: 'FractureLocation',
      fractureSegment: 'FractureSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fractureId: 'number',
      fractureConfidence: 'number',
      fractureCategory: 'number',
      coordinates: { 'type': 'array', 'itemType': 'number' },
      coordinateImage: { 'type': 'array', 'itemType': 'number' },
      fractureLocation: 'string',
      fractureSegment: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyDataDetectRibFracture extends $tea.Model {
  resultURL?: string;
  spacing?: number[];
  origin?: number[];
  detections?: ScreenChestCTResponseBodyDataDetectRibFractureDetections[];
  static names(): { [key: string]: string } {
    return {
      resultURL: 'ResultURL',
      spacing: 'Spacing',
      origin: 'Origin',
      detections: 'Detections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultURL: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
      origin: { 'type': 'array', 'itemType': 'number' },
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectRibFractureDetections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScreenChestCTResponseBodyData extends $tea.Model {
  lungNodule?: ScreenChestCTResponseBodyDataLungNodule;
  CACS?: ScreenChestCTResponseBodyDataCACS;
  covid?: ScreenChestCTResponseBodyDataCovid;
  detectRibFracture?: ScreenChestCTResponseBodyDataDetectRibFracture;
  static names(): { [key: string]: string } {
    return {
      lungNodule: 'LungNodule',
      CACS: 'CACS',
      covid: 'Covid',
      detectRibFracture: 'DetectRibFracture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lungNodule: ScreenChestCTResponseBodyDataLungNodule,
      CACS: ScreenChestCTResponseBodyDataCACS,
      covid: ScreenChestCTResponseBodyDataCovid,
      detectRibFracture: ScreenChestCTResponseBodyDataDetectRibFracture,
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

  async classifyFNFWithOptions(request: ClassifyFNFRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyFNFResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClassifyFNFResponse>(await this.doRPCRequest("ClassifyFNF", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ClassifyFNFResponse({}));
  }

  async classifyFNF(request: ClassifyFNFRequest): Promise<ClassifyFNFResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.classifyFNFWithOptions(request, runtime);
  }

  async classifyFNFAdvance(request: ClassifyFNFAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ClassifyFNFResponse> {
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
    let classifyFNFResp = await this.classifyFNFWithOptions(classifyFNFReq, runtime);
    return classifyFNFResp;
  }

  async detectLungNoduleWithOptions(request: DetectLungNoduleRequest, runtime: $Util.RuntimeOptions): Promise<DetectLungNoduleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectLungNoduleResponse>(await this.doRPCRequest("DetectLungNodule", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectLungNoduleResponse({}));
  }

  async detectLungNodule(request: DetectLungNoduleRequest): Promise<DetectLungNoduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectLungNoduleWithOptions(request, runtime);
  }

  async runCTRegistrationWithOptions(request: RunCTRegistrationRequest, runtime: $Util.RuntimeOptions): Promise<RunCTRegistrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunCTRegistrationResponse>(await this.doRPCRequest("RunCTRegistration", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new RunCTRegistrationResponse({}));
  }

  async runCTRegistration(request: RunCTRegistrationRequest): Promise<RunCTRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCTRegistrationWithOptions(request, runtime);
  }

  async translateMedWithOptions(request: TranslateMedRequest, runtime: $Util.RuntimeOptions): Promise<TranslateMedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TranslateMedResponse>(await this.doRPCRequest("TranslateMed", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new TranslateMedResponse({}));
  }

  async translateMed(request: TranslateMedRequest): Promise<TranslateMedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.translateMedWithOptions(request, runtime);
  }

  async detectSpineMRIWithOptions(request: DetectSpineMRIRequest, runtime: $Util.RuntimeOptions): Promise<DetectSpineMRIResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectSpineMRIResponse>(await this.doRPCRequest("DetectSpineMRI", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectSpineMRIResponse({}));
  }

  async detectSpineMRI(request: DetectSpineMRIRequest): Promise<DetectSpineMRIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectSpineMRIWithOptions(request, runtime);
  }

  async calcCACSWithOptions(request: CalcCACSRequest, runtime: $Util.RuntimeOptions): Promise<CalcCACSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CalcCACSResponse>(await this.doRPCRequest("CalcCACS", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CalcCACSResponse({}));
  }

  async calcCACS(request: CalcCACSRequest): Promise<CalcCACSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.calcCACSWithOptions(request, runtime);
  }

  async detectHipKeypointXRayWithOptions(request: DetectHipKeypointXRayRequest, runtime: $Util.RuntimeOptions): Promise<DetectHipKeypointXRayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectHipKeypointXRayResponse>(await this.doRPCRequest("DetectHipKeypointXRay", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectHipKeypointXRayResponse({}));
  }

  async detectHipKeypointXRay(request: DetectHipKeypointXRayRequest): Promise<DetectHipKeypointXRayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectHipKeypointXRayWithOptions(request, runtime);
  }

  async detectHipKeypointXRayAdvance(request: DetectHipKeypointXRayAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectHipKeypointXRayResponse> {
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
    let detectHipKeypointXRayResp = await this.detectHipKeypointXRayWithOptions(detectHipKeypointXRayReq, runtime);
    return detectHipKeypointXRayResp;
  }

  async detectKneeKeypointXRayWithOptions(request: DetectKneeKeypointXRayRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeKeypointXRayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectKneeKeypointXRayResponse>(await this.doRPCRequest("DetectKneeKeypointXRay", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectKneeKeypointXRayResponse({}));
  }

  async detectKneeKeypointXRay(request: DetectKneeKeypointXRayRequest): Promise<DetectKneeKeypointXRayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectKneeKeypointXRayWithOptions(request, runtime);
  }

  async detectKneeKeypointXRayAdvance(request: DetectKneeKeypointXRayAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeKeypointXRayResponse> {
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
    let detectKneeKeypointXRayResp = await this.detectKneeKeypointXRayWithOptions(detectKneeKeypointXRayReq, runtime);
    return detectKneeKeypointXRayResp;
  }

  async runMedQAWithOptions(request: RunMedQARequest, runtime: $Util.RuntimeOptions): Promise<RunMedQAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunMedQAResponse>(await this.doRPCRequest("RunMedQA", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new RunMedQAResponse({}));
  }

  async runMedQA(request: RunMedQARequest): Promise<RunMedQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runMedQAWithOptions(request, runtime);
  }

  async detectKneeXRayWithOptions(request: DetectKneeXRayRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeXRayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectKneeXRayResponse>(await this.doRPCRequest("DetectKneeXRay", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectKneeXRayResponse({}));
  }

  async detectKneeXRay(request: DetectKneeXRayRequest): Promise<DetectKneeXRayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectKneeXRayWithOptions(request, runtime);
  }

  async detectKneeXRayAdvance(request: DetectKneeXRayAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectKneeXRayResponse> {
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
    let detectKneeXRayResp = await this.detectKneeXRayWithOptions(detectKneeXRayReq, runtime);
    return detectKneeXRayResp;
  }

  async getAsyncJobResultWithOptions(request: GetAsyncJobResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAsyncJobResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsyncJobResultResponse>(await this.doRPCRequest("GetAsyncJobResult", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsyncJobResultResponse({}));
  }

  async getAsyncJobResult(request: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsyncJobResultWithOptions(request, runtime);
  }

  async detectRibFractureWithOptions(request: DetectRibFractureRequest, runtime: $Util.RuntimeOptions): Promise<DetectRibFractureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectRibFractureResponse>(await this.doRPCRequest("DetectRibFracture", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectRibFractureResponse({}));
  }

  async detectRibFracture(request: DetectRibFractureRequest): Promise<DetectRibFractureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectRibFractureWithOptions(request, runtime);
  }

  async detectCovid19CadWithOptions(request: DetectCovid19CadRequest, runtime: $Util.RuntimeOptions): Promise<DetectCovid19CadResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectCovid19CadResponse>(await this.doRPCRequest("DetectCovid19Cad", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectCovid19CadResponse({}));
  }

  async detectCovid19Cad(request: DetectCovid19CadRequest): Promise<DetectCovid19CadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectCovid19CadWithOptions(request, runtime);
  }

  async screenChestCTWithOptions(request: ScreenChestCTRequest, runtime: $Util.RuntimeOptions): Promise<ScreenChestCTResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScreenChestCTResponse>(await this.doRPCRequest("ScreenChestCT", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ScreenChestCTResponse({}));
  }

  async screenChestCT(request: ScreenChestCTRequest): Promise<ScreenChestCTResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.screenChestCTWithOptions(request, runtime);
  }

  async detectSkinDiseaseWithOptions(request: DetectSkinDiseaseRequest, runtime: $Util.RuntimeOptions): Promise<DetectSkinDiseaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectSkinDiseaseResponse>(await this.doRPCRequest("DetectSkinDisease", "2020-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectSkinDiseaseResponse({}));
  }

  async detectSkinDisease(request: DetectSkinDiseaseRequest): Promise<DetectSkinDiseaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectSkinDiseaseWithOptions(request, runtime);
  }

  async detectSkinDiseaseAdvance(request: DetectSkinDiseaseAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<DetectSkinDiseaseResponse> {
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
    let detectSkinDiseaseResp = await this.detectSkinDiseaseWithOptions(detectSkinDiseaseReq, runtime);
    return detectSkinDiseaseResp;
  }

}
