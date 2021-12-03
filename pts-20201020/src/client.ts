// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreatePtsSceneRequest extends $tea.Model {
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  sceneId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      sceneId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePtsSceneBaseLineFromReportRequest extends $tea.Model {
  reportId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePtsSceneBaseLineFromReportResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePtsSceneBaseLineFromReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePtsSceneBaseLineFromReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePtsSceneBaseLineFromReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsSceneBaseLineRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsSceneBaseLineResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsSceneBaseLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePtsSceneBaseLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePtsSceneBaseLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsScenesRequest extends $tea.Model {
  sceneIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      sceneIds: 'SceneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsScenesShrinkRequest extends $tea.Model {
  sceneIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      sceneIdsShrink: 'SceneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsScenesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePtsScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePtsScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePtsScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterLogsRequest extends $tea.Model {
  agentIndex?: number;
  beginTime?: number;
  endTime?: number;
  keyword?: string;
  level?: string;
  pageNumber?: number;
  pageSize?: number;
  reportId?: string;
  thread?: string;
  static names(): { [key: string]: string } {
    return {
      agentIndex: 'AgentIndex',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      keyword: 'Keyword',
      level: 'Level',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportId: 'ReportId',
      thread: 'Thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIndex: 'number',
      beginTime: 'number',
      endTime: 'number',
      keyword: 'string',
      level: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportId: 'string',
      thread: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterLogsResponseBody extends $tea.Model {
  agentCount?: number;
  code?: string;
  logs?: { [key: string]: any }[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      code: 'Code',
      logs: 'Logs',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      code: 'string',
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJMeterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJMeterLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSampleMetricsRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  reportId?: string;
  samplerId?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      reportId: 'ReportId',
      samplerId: 'SamplerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      reportId: 'string',
      samplerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSampleMetricsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  sampleMetricList?: string[];
  samplerMap?: { [key: string]: any };
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      sampleMetricList: 'SampleMetricList',
      samplerMap: 'SamplerMap',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      sampleMetricList: { 'type': 'array', 'itemType': 'string' },
      samplerMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSampleMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJMeterSampleMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJMeterSampleMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSamplingLogsRequest extends $tea.Model {
  agentId?: number;
  beginTime?: number;
  endTime?: number;
  keyword?: string;
  maxRT?: number;
  minRT?: number;
  pageNumber?: number;
  pageSize?: number;
  reportId?: string;
  responseCode?: string;
  samplerId?: number;
  success?: boolean;
  thread?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxRT: 'MaxRT',
      minRT: 'MinRT',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportId: 'ReportId',
      responseCode: 'ResponseCode',
      samplerId: 'SamplerId',
      success: 'Success',
      thread: 'Thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      beginTime: 'number',
      endTime: 'number',
      keyword: 'string',
      maxRT: 'number',
      minRT: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      reportId: 'string',
      responseCode: 'string',
      samplerId: 'number',
      success: 'boolean',
      thread: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSamplingLogsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  sampleResults?: string[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sampleResults: 'SampleResults',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sampleResults: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSamplingLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJMeterSamplingLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJMeterSamplingLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSceneRunningDataRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSceneRunningDataResponseBody extends $tea.Model {
  code?: string;
  documentUrl?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  runningData?: GetJMeterSceneRunningDataResponseBodyRunningData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      documentUrl: 'DocumentUrl',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      runningData: 'RunningData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      documentUrl: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      runningData: GetJMeterSceneRunningDataResponseBodyRunningData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSceneRunningDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJMeterSceneRunningDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJMeterSceneRunningDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scene?: GetOpenJMeterSceneResponseBodyScene;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scene: 'Scene',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scene: GetOpenJMeterSceneResponseBodyScene,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOpenJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOpenJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsRequest extends $tea.Model {
  planId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBody extends $tea.Model {
  apiMetricsList?: GetPtsReportDetailsResponseBodyApiMetricsList[];
  code?: string;
  httpStatusCode?: number;
  message?: string;
  reportOverView?: GetPtsReportDetailsResponseBodyReportOverView;
  requestId?: string;
  sceneMetrics?: GetPtsReportDetailsResponseBodySceneMetrics;
  sceneSnapShot?: GetPtsReportDetailsResponseBodySceneSnapShot;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiMetricsList: 'ApiMetricsList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportOverView: 'ReportOverView',
      requestId: 'RequestId',
      sceneMetrics: 'SceneMetrics',
      sceneSnapShot: 'SceneSnapShot',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiMetricsList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodyApiMetricsList },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportOverView: GetPtsReportDetailsResponseBodyReportOverView,
      requestId: 'string',
      sceneMetrics: GetPtsReportDetailsResponseBodySceneMetrics,
      sceneSnapShot: GetPtsReportDetailsResponseBodySceneSnapShot,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPtsReportDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPtsReportDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportsBySceneIdRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportsBySceneIdResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  reportOverViewList?: GetPtsReportsBySceneIdResponseBodyReportOverViewList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportOverViewList: 'ReportOverViewList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportOverViewList: { 'type': 'array', 'itemType': GetPtsReportsBySceneIdResponseBodyReportOverViewList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportsBySceneIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPtsReportsBySceneIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPtsReportsBySceneIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scene?: GetPtsSceneResponseBodyScene;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scene: 'Scene',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scene: GetPtsSceneResponseBodyScene,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneBaseLineRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneBaseLineResponseBody extends $tea.Model {
  baseline?: GetPtsSceneBaseLineResponseBodyBaseline;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  sceneId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: GetPtsSceneBaseLineResponseBodyBaseline,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      sceneId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneBaseLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPtsSceneBaseLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPtsSceneBaseLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningDataRequest extends $tea.Model {
  planId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningDataResponseBody extends $tea.Model {
  agentLocation?: GetPtsSceneRunningDataResponseBodyAgentLocation[];
  aliveAgents?: number;
  averageRt?: number;
  beginTime?: number;
  chainMonitorDataList?: GetPtsSceneRunningDataResponseBodyChainMonitorDataList[];
  code?: string;
  concurrency?: number;
  concurrencyLimit?: number;
  failedBusinessCount?: number;
  failedRequestCount?: number;
  hasReport?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestBps?: string;
  requestId?: string;
  responseBps?: string;
  seg90Rt?: number;
  status?: number;
  success?: boolean;
  totalAgents?: number;
  totalRequestCount?: number;
  tpsLimit?: number;
  vum?: number;
  static names(): { [key: string]: string } {
    return {
      agentLocation: 'AgentLocation',
      aliveAgents: 'AliveAgents',
      averageRt: 'AverageRt',
      beginTime: 'BeginTime',
      chainMonitorDataList: 'ChainMonitorDataList',
      code: 'Code',
      concurrency: 'Concurrency',
      concurrencyLimit: 'ConcurrencyLimit',
      failedBusinessCount: 'FailedBusinessCount',
      failedRequestCount: 'FailedRequestCount',
      hasReport: 'HasReport',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestBps: 'RequestBps',
      requestId: 'RequestId',
      responseBps: 'ResponseBps',
      seg90Rt: 'Seg90Rt',
      status: 'Status',
      success: 'Success',
      totalAgents: 'TotalAgents',
      totalRequestCount: 'TotalRequestCount',
      tpsLimit: 'TpsLimit',
      vum: 'Vum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentLocation: { 'type': 'array', 'itemType': GetPtsSceneRunningDataResponseBodyAgentLocation },
      aliveAgents: 'number',
      averageRt: 'number',
      beginTime: 'number',
      chainMonitorDataList: { 'type': 'array', 'itemType': GetPtsSceneRunningDataResponseBodyChainMonitorDataList },
      code: 'string',
      concurrency: 'number',
      concurrencyLimit: 'number',
      failedBusinessCount: 'number',
      failedRequestCount: 'number',
      hasReport: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestBps: 'string',
      requestId: 'string',
      responseBps: 'string',
      seg90Rt: 'number',
      status: 'number',
      success: 'boolean',
      totalAgents: 'number',
      totalRequestCount: 'number',
      tpsLimit: 'number',
      vum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPtsSceneRunningDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPtsSceneRunningDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningStatusRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningStatusResponseBody extends $tea.Model {
  code?: string;
  createTime?: string;
  httpStatusCode?: number;
  message?: string;
  modifiedTime?: string;
  requestId?: string;
  sceneName?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      sceneName: 'SceneName',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      httpStatusCode: 'number',
      message: 'string',
      modifiedTime: 'string',
      requestId: 'string',
      sceneName: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPtsSceneRunningStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPtsSceneRunningStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvsRequest extends $tea.Model {
  envId?: string;
  envName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      envName: 'EnvName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      envName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvsResponseBody extends $tea.Model {
  code?: string;
  envs?: ListEnvsResponseBodyEnvs[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      envs: 'Envs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      envs: { 'type': 'array', 'itemType': ListEnvsResponseBodyEnvs },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEnvsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnvsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJMeterReportsRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  reportId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportId: 'ReportId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJMeterReportsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  reports?: ListJMeterReportsResponseBodyReports[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reports: 'Reports',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reports: { 'type': 'array', 'itemType': ListJMeterReportsResponseBodyReports },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJMeterReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJMeterReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJMeterReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenJMeterScenesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sceneId?: string;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'string',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenJMeterScenesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  JMeterScene?: ListOpenJMeterScenesResponseBodyJMeterScene[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      JMeterScene: 'JMeterScene',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      JMeterScene: { 'type': 'array', 'itemType': ListOpenJMeterScenesResponseBodyJMeterScene },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenJMeterScenesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOpenJMeterScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOpenJMeterScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPtsSceneRequest extends $tea.Model {
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  sceneViewList?: ListPtsSceneResponseBodySceneViewList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      sceneViewList: 'SceneViewList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      sceneViewList: { 'type': 'array', 'itemType': ListPtsSceneResponseBodySceneViewList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPtsSceneRequest extends $tea.Model {
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEnvRequest extends $tea.Model {
  envId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEnvResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveOpenJMeterSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveOpenJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveOpenJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveOpenJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveOpenJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvRequest extends $tea.Model {
  env?: SaveEnvRequestEnv;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: SaveEnvRequestEnv,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvShrinkRequest extends $tea.Model {
  envShrink?: string;
  static names(): { [key: string]: string } {
    return {
      envShrink: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvResponseBody extends $tea.Model {
  code?: string;
  envId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      envId: 'EnvId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      envId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveEnvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneRequest extends $tea.Model {
  openJMeterScene?: SaveOpenJMeterSceneRequestOpenJMeterScene;
  static names(): { [key: string]: string } {
    return {
      openJMeterScene: 'OpenJMeterScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openJMeterScene: SaveOpenJMeterSceneRequestOpenJMeterScene,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneShrinkRequest extends $tea.Model {
  openJMeterSceneShrink?: string;
  static names(): { [key: string]: string } {
    return {
      openJMeterSceneShrink: 'OpenJMeterScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openJMeterSceneShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  sceneId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      sceneId: 'SceneId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      sceneId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveOpenJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveOpenJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDebugPtsSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDebugPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  planId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDebugPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDebugPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDebugPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDebuggingJMeterSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDebuggingJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  reportId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportId: 'ReportId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDebuggingJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDebuggingJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDebuggingJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPtsSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  planId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTestingJMeterSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTestingJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  reportId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportId: 'ReportId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTestingJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartTestingJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartTestingJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDebugPtsSceneRequest extends $tea.Model {
  planId?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDebugPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDebugPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDebugPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDebugPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDebuggingJMeterSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDebuggingJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDebuggingJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDebuggingJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDebuggingJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPtsSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPtsSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPtsSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopPtsSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopPtsSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTestingJMeterSceneRequest extends $tea.Model {
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTestingJMeterSceneResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTestingJMeterSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopTestingJMeterSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopTestingJMeterSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePtsSceneBaseLineRequest extends $tea.Model {
  apiBaselines?: { [key: string]: any };
  sceneBaseline?: { [key: string]: any };
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      apiBaselines: 'ApiBaselines',
      sceneBaseline: 'SceneBaseline',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiBaselines: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sceneBaseline: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePtsSceneBaseLineShrinkRequest extends $tea.Model {
  apiBaselinesShrink?: string;
  sceneBaselineShrink?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      apiBaselinesShrink: 'ApiBaselines',
      sceneBaselineShrink: 'SceneBaseline',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiBaselinesShrink: 'string',
      sceneBaselineShrink: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePtsSceneBaseLineResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePtsSceneBaseLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePtsSceneBaseLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePtsSceneBaseLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJMeterSceneRunningDataResponseBodyRunningData extends $tea.Model {
  agentCount?: number;
  agentIdList?: string[];
  allSampleStat?: { [key: string]: any };
  concurrency?: number;
  hasReport?: boolean;
  isDebugging?: boolean;
  sampleStatList?: { [key: string]: any }[];
  sceneId?: string;
  sceneName?: string;
  stageName?: string;
  status?: string;
  vum?: number;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      agentIdList: 'AgentIdList',
      allSampleStat: 'AllSampleStat',
      concurrency: 'Concurrency',
      hasReport: 'HasReport',
      isDebugging: 'IsDebugging',
      sampleStatList: 'SampleStatList',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      stageName: 'StageName',
      status: 'Status',
      vum: 'Vum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      agentIdList: { 'type': 'array', 'itemType': 'string' },
      allSampleStat: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      concurrency: 'number',
      hasReport: 'boolean',
      isDebugging: 'boolean',
      sampleStatList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      sceneId: 'string',
      sceneName: 'string',
      stageName: 'string',
      status: 'string',
      vum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneResponseBodySceneBaseInfo extends $tea.Model {
  createName?: string;
  modifyName?: string;
  operateType?: string;
  principal?: string;
  remark?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      createName: 'CreateName',
      modifyName: 'ModifyName',
      operateType: 'OperateType',
      principal: 'Principal',
      remark: 'Remark',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createName: 'string',
      modifyName: 'string',
      operateType: 'string',
      principal: 'string',
      remark: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneResponseBodySceneDnsCacheConfig extends $tea.Model {
  clearCacheEachIteration?: boolean;
  dnsServers?: string[];
  hostTable?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clearCacheEachIteration: 'ClearCacheEachIteration',
      dnsServers: 'DnsServers',
      hostTable: 'HostTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearCacheEachIteration: 'boolean',
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      hostTable: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneResponseBodySceneFileList extends $tea.Model {
  fileName?: string;
  fileOssAddress?: string;
  fileSize?: number;
  fileType?: string;
  id?: number;
  md5?: string;
  splitCsv?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileOssAddress: 'FileOssAddress',
      fileSize: 'FileSize',
      fileType: 'FileType',
      id: 'Id',
      md5: 'Md5',
      splitCsv: 'SplitCsv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileOssAddress: 'string',
      fileSize: 'number',
      fileType: 'string',
      id: 'number',
      md5: 'string',
      splitCsv: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenJMeterSceneResponseBodyScene extends $tea.Model {
  agentCount?: number;
  baseInfo?: GetOpenJMeterSceneResponseBodySceneBaseInfo;
  concurrency?: number;
  constantThroughputTimerType?: string;
  dnsCacheConfig?: GetOpenJMeterSceneResponseBodySceneDnsCacheConfig;
  duration?: number;
  environmentId?: string;
  fileList?: GetOpenJMeterSceneResponseBodySceneFileList[];
  isVpcTest?: boolean;
  rampUp?: number;
  regionId?: string;
  sceneId?: string;
  sceneName?: string;
  securityGroupId?: string;
  steps?: number;
  syncTimerType?: string;
  testFile?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      baseInfo: 'BaseInfo',
      concurrency: 'Concurrency',
      constantThroughputTimerType: 'ConstantThroughputTimerType',
      dnsCacheConfig: 'DnsCacheConfig',
      duration: 'Duration',
      environmentId: 'EnvironmentId',
      fileList: 'FileList',
      isVpcTest: 'IsVpcTest',
      rampUp: 'RampUp',
      regionId: 'RegionId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      securityGroupId: 'SecurityGroupId',
      steps: 'Steps',
      syncTimerType: 'SyncTimerType',
      testFile: 'TestFile',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      baseInfo: GetOpenJMeterSceneResponseBodySceneBaseInfo,
      concurrency: 'number',
      constantThroughputTimerType: 'string',
      dnsCacheConfig: GetOpenJMeterSceneResponseBodySceneDnsCacheConfig,
      duration: 'number',
      environmentId: 'string',
      fileList: { 'type': 'array', 'itemType': GetOpenJMeterSceneResponseBodySceneFileList },
      isVpcTest: 'boolean',
      rampUp: 'number',
      regionId: 'string',
      sceneId: 'string',
      sceneName: 'string',
      securityGroupId: 'string',
      steps: 'number',
      syncTimerType: 'string',
      testFile: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodyApiMetricsList extends $tea.Model {
  allCount?: number;
  apiName?: string;
  avgRt?: number;
  avgTps?: number;
  failCountBiz?: number;
  failCountReq?: number;
  maxRt?: number;
  minRt?: number;
  seg50Rt?: number;
  seg75Rt?: number;
  seg90Rt?: number;
  seg99Rt?: number;
  successRateBiz?: number;
  successRateReq?: number;
  static names(): { [key: string]: string } {
    return {
      allCount: 'AllCount',
      apiName: 'ApiName',
      avgRt: 'AvgRt',
      avgTps: 'AvgTps',
      failCountBiz: 'FailCountBiz',
      failCountReq: 'FailCountReq',
      maxRt: 'MaxRt',
      minRt: 'MinRt',
      seg50Rt: 'Seg50Rt',
      seg75Rt: 'Seg75Rt',
      seg90Rt: 'Seg90Rt',
      seg99Rt: 'Seg99Rt',
      successRateBiz: 'SuccessRateBiz',
      successRateReq: 'SuccessRateReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCount: 'number',
      apiName: 'string',
      avgRt: 'number',
      avgTps: 'number',
      failCountBiz: 'number',
      failCountReq: 'number',
      maxRt: 'number',
      minRt: 'number',
      seg50Rt: 'number',
      seg75Rt: 'number',
      seg90Rt: 'number',
      seg99Rt: 'number',
      successRateBiz: 'number',
      successRateReq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodyReportOverView extends $tea.Model {
  agentCount?: number;
  endTime?: string;
  reportId?: string;
  reportName?: string;
  startTime?: string;
  vum?: number;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      endTime: 'EndTime',
      reportId: 'ReportId',
      reportName: 'ReportName',
      startTime: 'StartTime',
      vum: 'Vum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      endTime: 'string',
      reportId: 'string',
      reportName: 'string',
      startTime: 'string',
      vum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneMetrics extends $tea.Model {
  allCount?: number;
  avgRt?: number;
  avgTps?: number;
  failCountBiz?: number;
  failCountReq?: number;
  seg90Rt?: number;
  seg99Rt?: number;
  successRateBiz?: number;
  successRateReq?: number;
  static names(): { [key: string]: string } {
    return {
      allCount: 'AllCount',
      avgRt: 'AvgRt',
      avgTps: 'AvgTps',
      failCountBiz: 'FailCountBiz',
      failCountReq: 'FailCountReq',
      seg90Rt: 'Seg90Rt',
      seg99Rt: 'Seg99Rt',
      successRateBiz: 'SuccessRateBiz',
      successRateReq: 'SuccessRateReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCount: 'number',
      avgRt: 'number',
      avgTps: 'number',
      failCountBiz: 'number',
      failCountReq: 'number',
      seg90Rt: 'number',
      seg99Rt: 'number',
      successRateBiz: 'number',
      successRateReq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotAdvanceSettingDomainBindingList extends $tea.Model {
  domain?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotAdvanceSetting extends $tea.Model {
  connectionTimeoutInSecond?: number;
  domainBindingList?: GetPtsReportDetailsResponseBodySceneSnapShotAdvanceSettingDomainBindingList[];
  logRate?: number;
  successCode?: string;
  static names(): { [key: string]: string } {
    return {
      connectionTimeoutInSecond: 'ConnectionTimeoutInSecond',
      domainBindingList: 'DomainBindingList',
      logRate: 'LogRate',
      successCode: 'SuccessCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionTimeoutInSecond: 'number',
      domainBindingList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotAdvanceSettingDomainBindingList },
      logRate: 'number',
      successCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotFileParameterList extends $tea.Model {
  fileName?: string;
  fileOssAddress?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileOssAddress: 'FileOssAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileOssAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotGlobalParameterList extends $tea.Model {
  paramName?: string;
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigApiLoadConfigList extends $tea.Model {
  rpsBegin?: number;
  rpsLimit?: number;
  static names(): { [key: string]: string } {
    return {
      rpsBegin: 'RpsBegin',
      rpsLimit: 'RpsLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rpsBegin: 'number',
      rpsLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigConfiguration extends $tea.Model {
  allConcurrencyBegin?: number;
  allConcurrencyLimit?: number;
  allRpsBegin?: number;
  allRpsLimit?: number;
  static names(): { [key: string]: string } {
    return {
      allConcurrencyBegin: 'AllConcurrencyBegin',
      allConcurrencyLimit: 'AllConcurrencyLimit',
      allRpsBegin: 'AllRpsBegin',
      allRpsLimit: 'AllRpsLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allConcurrencyBegin: 'number',
      allConcurrencyLimit: 'number',
      allRpsBegin: 'number',
      allRpsLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigRelationLoadConfigList extends $tea.Model {
  concurrencyBegin?: number;
  concurrencyLimit?: number;
  static names(): { [key: string]: string } {
    return {
      concurrencyBegin: 'ConcurrencyBegin',
      concurrencyLimit: 'ConcurrencyLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyBegin: 'number',
      concurrencyLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotLoadConfig extends $tea.Model {
  agentCount?: number;
  apiLoadConfigList?: GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigApiLoadConfigList[];
  configuration?: GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigConfiguration;
  maxRunningTime?: number;
  relationLoadConfigList?: GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigRelationLoadConfigList[];
  testMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      apiLoadConfigList: 'ApiLoadConfigList',
      configuration: 'Configuration',
      maxRunningTime: 'MaxRunningTime',
      relationLoadConfigList: 'RelationLoadConfigList',
      testMode: 'TestMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      apiLoadConfigList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigApiLoadConfigList },
      configuration: GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigConfiguration,
      maxRunningTime: 'number',
      relationLoadConfigList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotLoadConfigRelationLoadConfigList },
      testMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListBody extends $tea.Model {
  bodyValue?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      bodyValue: 'BodyValue',
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyValue: 'string',
      contentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListCheckPointList extends $tea.Model {
  checkPoint?: string;
  checkType?: string;
  expectValue?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      checkPoint: 'CheckPoint',
      checkType: 'CheckType',
      expectValue: 'ExpectValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkPoint: 'string',
      checkType: 'string',
      expectValue: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListExportList extends $tea.Model {
  count?: string;
  exportName?: string;
  exportType?: string;
  exportValue?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      exportName: 'ExportName',
      exportType: 'ExportType',
      exportValue: 'ExportValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      exportName: 'string',
      exportType: 'string',
      exportValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListHeaderList extends $tea.Model {
  headerName?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiList extends $tea.Model {
  apiId?: string;
  apiName?: string;
  body?: GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListBody;
  checkPointList?: GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListCheckPointList[];
  exportList?: GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListExportList[];
  headerList?: GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListHeaderList[];
  method?: string;
  redirectCountLimit?: number;
  timeoutInSecond?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      body: 'Body',
      checkPointList: 'CheckPointList',
      exportList: 'ExportList',
      headerList: 'HeaderList',
      method: 'Method',
      redirectCountLimit: 'RedirectCountLimit',
      timeoutInSecond: 'TimeoutInSecond',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      body: GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListBody,
      checkPointList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListCheckPointList },
      exportList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListExportList },
      headerList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiListHeaderList },
      method: 'string',
      redirectCountLimit: 'number',
      timeoutInSecond: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationListFileParameterExplainList extends $tea.Model {
  baseFile?: boolean;
  cycleOnce?: boolean;
  fileName?: string;
  fileParamName?: string;
  static names(): { [key: string]: string } {
    return {
      baseFile: 'BaseFile',
      cycleOnce: 'CycleOnce',
      fileName: 'FileName',
      fileParamName: 'FileParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseFile: 'boolean',
      cycleOnce: 'boolean',
      fileName: 'string',
      fileParamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShotRelationList extends $tea.Model {
  apiList?: GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiList[];
  fileParameterExplainList?: GetPtsReportDetailsResponseBodySceneSnapShotRelationListFileParameterExplainList[];
  relationId?: string;
  relationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      fileParameterExplainList: 'FileParameterExplainList',
      relationId: 'RelationId',
      relationName: 'RelationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotRelationListApiList },
      fileParameterExplainList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotRelationListFileParameterExplainList },
      relationId: 'string',
      relationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportDetailsResponseBodySceneSnapShot extends $tea.Model {
  advanceSetting?: GetPtsReportDetailsResponseBodySceneSnapShotAdvanceSetting;
  createTime?: string;
  fileParameterList?: GetPtsReportDetailsResponseBodySceneSnapShotFileParameterList[];
  globalParameterList?: GetPtsReportDetailsResponseBodySceneSnapShotGlobalParameterList[];
  loadConfig?: GetPtsReportDetailsResponseBodySceneSnapShotLoadConfig;
  modifiedTime?: string;
  relationList?: GetPtsReportDetailsResponseBodySceneSnapShotRelationList[];
  sceneId?: string;
  sceneName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      advanceSetting: 'AdvanceSetting',
      createTime: 'CreateTime',
      fileParameterList: 'FileParameterList',
      globalParameterList: 'GlobalParameterList',
      loadConfig: 'LoadConfig',
      modifiedTime: 'ModifiedTime',
      relationList: 'RelationList',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceSetting: GetPtsReportDetailsResponseBodySceneSnapShotAdvanceSetting,
      createTime: 'string',
      fileParameterList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotFileParameterList },
      globalParameterList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotGlobalParameterList },
      loadConfig: GetPtsReportDetailsResponseBodySceneSnapShotLoadConfig,
      modifiedTime: 'string',
      relationList: { 'type': 'array', 'itemType': GetPtsReportDetailsResponseBodySceneSnapShotRelationList },
      sceneId: 'string',
      sceneName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsReportsBySceneIdResponseBodyReportOverViewList extends $tea.Model {
  agentCount?: number;
  endTime?: string;
  reportId?: string;
  reportName?: string;
  startTime?: string;
  vum?: number;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      endTime: 'EndTime',
      reportId: 'ReportId',
      reportName: 'ReportName',
      startTime: 'StartTime',
      vum: 'Vum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      endTime: 'string',
      reportId: 'string',
      reportName: 'string',
      startTime: 'string',
      vum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneAdvanceSettingDomainBindingList extends $tea.Model {
  domain?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneAdvanceSetting extends $tea.Model {
  connectionTimeoutInSecond?: number;
  domainBindingList?: GetPtsSceneResponseBodySceneAdvanceSettingDomainBindingList[];
  logRate?: number;
  successCode?: string;
  static names(): { [key: string]: string } {
    return {
      connectionTimeoutInSecond: 'ConnectionTimeoutInSecond',
      domainBindingList: 'DomainBindingList',
      logRate: 'LogRate',
      successCode: 'SuccessCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionTimeoutInSecond: 'number',
      domainBindingList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneAdvanceSettingDomainBindingList },
      logRate: 'number',
      successCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneFileParameterList extends $tea.Model {
  fileName?: string;
  fileOssAddress?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileOssAddress: 'FileOssAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileOssAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneGlobalParameterList extends $tea.Model {
  paramName?: string;
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneLoadConfigApiLoadConfigList extends $tea.Model {
  rpsBegin?: number;
  rpsLimit?: number;
  static names(): { [key: string]: string } {
    return {
      rpsBegin: 'RpsBegin',
      rpsLimit: 'RpsLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rpsBegin: 'number',
      rpsLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneLoadConfigConfiguration extends $tea.Model {
  allConcurrencyBegin?: number;
  allConcurrencyLimit?: number;
  allRpsBegin?: number;
  allRpsLimit?: number;
  static names(): { [key: string]: string } {
    return {
      allConcurrencyBegin: 'AllConcurrencyBegin',
      allConcurrencyLimit: 'AllConcurrencyLimit',
      allRpsBegin: 'AllRpsBegin',
      allRpsLimit: 'AllRpsLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allConcurrencyBegin: 'number',
      allConcurrencyLimit: 'number',
      allRpsBegin: 'number',
      allRpsLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneLoadConfigRelationLoadConfigList extends $tea.Model {
  concurrencyBegin?: number;
  concurrencyLimit?: number;
  static names(): { [key: string]: string } {
    return {
      concurrencyBegin: 'ConcurrencyBegin',
      concurrencyLimit: 'ConcurrencyLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrencyBegin: 'number',
      concurrencyLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneLoadConfig extends $tea.Model {
  agentCount?: number;
  apiLoadConfigList?: GetPtsSceneResponseBodySceneLoadConfigApiLoadConfigList[];
  configuration?: GetPtsSceneResponseBodySceneLoadConfigConfiguration;
  maxRunningTime?: number;
  relationLoadConfigList?: GetPtsSceneResponseBodySceneLoadConfigRelationLoadConfigList[];
  testMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      apiLoadConfigList: 'ApiLoadConfigList',
      configuration: 'Configuration',
      maxRunningTime: 'MaxRunningTime',
      relationLoadConfigList: 'RelationLoadConfigList',
      testMode: 'TestMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      apiLoadConfigList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneLoadConfigApiLoadConfigList },
      configuration: GetPtsSceneResponseBodySceneLoadConfigConfiguration,
      maxRunningTime: 'number',
      relationLoadConfigList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneLoadConfigRelationLoadConfigList },
      testMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationListApiListBody extends $tea.Model {
  bodyValue?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      bodyValue: 'BodyValue',
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyValue: 'string',
      contentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationListApiListCheckPointList extends $tea.Model {
  checkPoint?: string;
  checkType?: string;
  expectValue?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      checkPoint: 'CheckPoint',
      checkType: 'CheckType',
      expectValue: 'ExpectValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkPoint: 'string',
      checkType: 'string',
      expectValue: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationListApiListExportList extends $tea.Model {
  count?: string;
  exportName?: string;
  exportType?: string;
  exportValue?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      exportName: 'ExportName',
      exportType: 'ExportType',
      exportValue: 'ExportValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      exportName: 'string',
      exportType: 'string',
      exportValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationListApiListHeaderList extends $tea.Model {
  headerName?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationListApiList extends $tea.Model {
  apiId?: string;
  apiName?: string;
  body?: GetPtsSceneResponseBodySceneRelationListApiListBody;
  checkPointList?: GetPtsSceneResponseBodySceneRelationListApiListCheckPointList[];
  exportList?: GetPtsSceneResponseBodySceneRelationListApiListExportList[];
  headerList?: GetPtsSceneResponseBodySceneRelationListApiListHeaderList[];
  method?: string;
  redirectCountLimit?: number;
  timeoutInSecond?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      body: 'Body',
      checkPointList: 'CheckPointList',
      exportList: 'ExportList',
      headerList: 'HeaderList',
      method: 'Method',
      redirectCountLimit: 'RedirectCountLimit',
      timeoutInSecond: 'TimeoutInSecond',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      body: GetPtsSceneResponseBodySceneRelationListApiListBody,
      checkPointList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneRelationListApiListCheckPointList },
      exportList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneRelationListApiListExportList },
      headerList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneRelationListApiListHeaderList },
      method: 'string',
      redirectCountLimit: 'number',
      timeoutInSecond: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationListFileParameterExplainList extends $tea.Model {
  baseFile?: boolean;
  cycleOnce?: boolean;
  fileName?: string;
  fileParamName?: string;
  static names(): { [key: string]: string } {
    return {
      baseFile: 'BaseFile',
      cycleOnce: 'CycleOnce',
      fileName: 'FileName',
      fileParamName: 'FileParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseFile: 'boolean',
      cycleOnce: 'boolean',
      fileName: 'string',
      fileParamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodySceneRelationList extends $tea.Model {
  apiList?: GetPtsSceneResponseBodySceneRelationListApiList[];
  fileParameterExplainList?: GetPtsSceneResponseBodySceneRelationListFileParameterExplainList[];
  relationId?: string;
  relationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      fileParameterExplainList: 'FileParameterExplainList',
      relationId: 'RelationId',
      relationName: 'RelationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneRelationListApiList },
      fileParameterExplainList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneRelationListFileParameterExplainList },
      relationId: 'string',
      relationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneResponseBodyScene extends $tea.Model {
  advanceSetting?: GetPtsSceneResponseBodySceneAdvanceSetting;
  createTime?: string;
  fileParameterList?: GetPtsSceneResponseBodySceneFileParameterList[];
  globalParameterList?: GetPtsSceneResponseBodySceneGlobalParameterList[];
  loadConfig?: GetPtsSceneResponseBodySceneLoadConfig;
  modifiedTime?: string;
  relationList?: GetPtsSceneResponseBodySceneRelationList[];
  sceneId?: string;
  sceneName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      advanceSetting: 'AdvanceSetting',
      createTime: 'CreateTime',
      fileParameterList: 'FileParameterList',
      globalParameterList: 'GlobalParameterList',
      loadConfig: 'LoadConfig',
      modifiedTime: 'ModifiedTime',
      relationList: 'RelationList',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceSetting: GetPtsSceneResponseBodySceneAdvanceSetting,
      createTime: 'string',
      fileParameterList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneFileParameterList },
      globalParameterList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneGlobalParameterList },
      loadConfig: GetPtsSceneResponseBodySceneLoadConfig,
      modifiedTime: 'string',
      relationList: { 'type': 'array', 'itemType': GetPtsSceneResponseBodySceneRelationList },
      sceneId: 'string',
      sceneName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneBaseLineResponseBodyBaselineApiBaselines extends $tea.Model {
  avgRt?: number;
  avgTps?: number;
  failCountBiz?: number;
  failCountReq?: number;
  id?: number;
  maxRt?: number;
  minRt?: number;
  name?: string;
  seg90Rt?: number;
  seg99Rt?: number;
  successRateBiz?: number;
  successRateReq?: number;
  static names(): { [key: string]: string } {
    return {
      avgRt: 'AvgRt',
      avgTps: 'AvgTps',
      failCountBiz: 'FailCountBiz',
      failCountReq: 'FailCountReq',
      id: 'Id',
      maxRt: 'MaxRt',
      minRt: 'MinRt',
      name: 'Name',
      seg90Rt: 'Seg90Rt',
      seg99Rt: 'Seg99Rt',
      successRateBiz: 'SuccessRateBiz',
      successRateReq: 'SuccessRateReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRt: 'number',
      avgTps: 'number',
      failCountBiz: 'number',
      failCountReq: 'number',
      id: 'number',
      maxRt: 'number',
      minRt: 'number',
      name: 'string',
      seg90Rt: 'number',
      seg99Rt: 'number',
      successRateBiz: 'number',
      successRateReq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneBaseLineResponseBodyBaselineSceneBaseline extends $tea.Model {
  avgRt?: number;
  avgTps?: number;
  failCountBiz?: number;
  failCountReq?: number;
  seg90Rt?: number;
  seg99Rt?: number;
  successRateBiz?: number;
  successRateReq?: number;
  static names(): { [key: string]: string } {
    return {
      avgRt: 'AvgRt',
      avgTps: 'AvgTps',
      failCountBiz: 'FailCountBiz',
      failCountReq: 'FailCountReq',
      seg90Rt: 'Seg90Rt',
      seg99Rt: 'Seg99Rt',
      successRateBiz: 'SuccessRateBiz',
      successRateReq: 'SuccessRateReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRt: 'number',
      avgTps: 'number',
      failCountBiz: 'number',
      failCountReq: 'number',
      seg90Rt: 'number',
      seg99Rt: 'number',
      successRateBiz: 'number',
      successRateReq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneBaseLineResponseBodyBaseline extends $tea.Model {
  apiBaselines?: GetPtsSceneBaseLineResponseBodyBaselineApiBaselines[];
  name?: string;
  sceneBaseline?: GetPtsSceneBaseLineResponseBodyBaselineSceneBaseline;
  static names(): { [key: string]: string } {
    return {
      apiBaselines: 'ApiBaselines',
      name: 'Name',
      sceneBaseline: 'SceneBaseline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiBaselines: { 'type': 'array', 'itemType': GetPtsSceneBaseLineResponseBodyBaselineApiBaselines },
      name: 'string',
      sceneBaseline: GetPtsSceneBaseLineResponseBodyBaselineSceneBaseline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningDataResponseBodyAgentLocation extends $tea.Model {
  count?: number;
  isp?: string;
  province?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      isp: 'Isp',
      province: 'Province',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      isp: 'string',
      province: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningDataResponseBodyChainMonitorDataListCheckPointResult extends $tea.Model {
  failedBusinessCount?: number;
  failedBusinessQps?: number;
  succeedBusinessCount?: number;
  succeedBusinessQps?: number;
  static names(): { [key: string]: string } {
    return {
      failedBusinessCount: 'FailedBusinessCount',
      failedBusinessQps: 'FailedBusinessQps',
      succeedBusinessCount: 'SucceedBusinessCount',
      succeedBusinessQps: 'SucceedBusinessQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedBusinessCount: 'number',
      failedBusinessQps: 'number',
      succeedBusinessCount: 'number',
      succeedBusinessQps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPtsSceneRunningDataResponseBodyChainMonitorDataList extends $tea.Model {
  apiId?: string;
  apiName?: string;
  averageRt?: number;
  checkPointResult?: GetPtsSceneRunningDataResponseBodyChainMonitorDataListCheckPointResult;
  concurrency?: number;
  configQps?: number;
  count2XX?: number;
  failedCount?: number;
  failedQps?: number;
  maxRt?: number;
  minRt?: number;
  nodeId?: number;
  qps2XX?: number;
  realQps?: number;
  timePoint?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      averageRt: 'AverageRt',
      checkPointResult: 'CheckPointResult',
      concurrency: 'Concurrency',
      configQps: 'ConfigQps',
      count2XX: 'Count2XX',
      failedCount: 'FailedCount',
      failedQps: 'FailedQps',
      maxRt: 'MaxRt',
      minRt: 'MinRt',
      nodeId: 'NodeId',
      qps2XX: 'Qps2XX',
      realQps: 'RealQps',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      averageRt: 'number',
      checkPointResult: GetPtsSceneRunningDataResponseBodyChainMonitorDataListCheckPointResult,
      concurrency: 'number',
      configQps: 'number',
      count2XX: 'number',
      failedCount: 'number',
      failedQps: 'number',
      maxRt: 'number',
      minRt: 'number',
      nodeId: 'number',
      qps2XX: 'number',
      realQps: 'number',
      timePoint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvsResponseBodyEnvsFiles extends $tea.Model {
  fileId?: number;
  fileName?: string;
  fileOssAddress?: string;
  fileSize?: number;
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      fileOssAddress: 'FileOssAddress',
      fileSize: 'FileSize',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileName: 'string',
      fileOssAddress: 'string',
      fileSize: 'number',
      md5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvsResponseBodyEnvsProperties extends $tea.Model {
  description?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvsResponseBodyEnvs extends $tea.Model {
  createTime?: number;
  envId?: string;
  envName?: string;
  envVersion?: string;
  files?: ListEnvsResponseBodyEnvsFiles[];
  modifiedTime?: number;
  properties?: ListEnvsResponseBodyEnvsProperties[];
  relatedScenes?: string[];
  runningScenes?: string[];
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      envId: 'EnvId',
      envName: 'EnvName',
      envVersion: 'EnvVersion',
      files: 'Files',
      modifiedTime: 'ModifiedTime',
      properties: 'Properties',
      relatedScenes: 'RelatedScenes',
      runningScenes: 'RunningScenes',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      envId: 'string',
      envName: 'string',
      envVersion: 'string',
      files: { 'type': 'array', 'itemType': ListEnvsResponseBodyEnvsFiles },
      modifiedTime: 'number',
      properties: { 'type': 'array', 'itemType': ListEnvsResponseBodyEnvsProperties },
      relatedScenes: { 'type': 'array', 'itemType': 'string' },
      runningScenes: { 'type': 'array', 'itemType': 'string' },
      usedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJMeterReportsResponseBodyReports extends $tea.Model {
  actualStartTime?: number;
  duration?: string;
  reportId?: string;
  reportName?: string;
  vum?: number;
  static names(): { [key: string]: string } {
    return {
      actualStartTime: 'ActualStartTime',
      duration: 'Duration',
      reportId: 'ReportId',
      reportName: 'ReportName',
      vum: 'Vum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualStartTime: 'number',
      duration: 'string',
      reportId: 'string',
      reportName: 'string',
      vum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenJMeterScenesResponseBodyJMeterScene extends $tea.Model {
  durationStr?: string;
  sceneId?: string;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      durationStr: 'DurationStr',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationStr: 'string',
      sceneId: 'string',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPtsSceneResponseBodySceneViewList extends $tea.Model {
  createTime?: string;
  sceneId?: string;
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sceneId: 'string',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvRequestEnvFiles extends $tea.Model {
  fileName?: string;
  fileOssAddress?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileOssAddress: 'FileOssAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileOssAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvRequestEnvProperties extends $tea.Model {
  description?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEnvRequestEnv extends $tea.Model {
  envId?: string;
  envName?: string;
  files?: SaveEnvRequestEnvFiles[];
  properties?: SaveEnvRequestEnvProperties[];
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      envName: 'EnvName',
      files: 'Files',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      envName: 'string',
      files: { 'type': 'array', 'itemType': SaveEnvRequestEnvFiles },
      properties: { 'type': 'array', 'itemType': SaveEnvRequestEnvProperties },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneRequestOpenJMeterSceneDnsCacheConfig extends $tea.Model {
  clearCacheEachIteration?: boolean;
  dnsServers?: string[];
  hostTable?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      clearCacheEachIteration: 'ClearCacheEachIteration',
      dnsServers: 'DnsServers',
      hostTable: 'HostTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearCacheEachIteration: 'boolean',
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      hostTable: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneRequestOpenJMeterSceneFileList extends $tea.Model {
  fileId?: number;
  fileName?: string;
  fileOssAddress?: string;
  fileSize?: number;
  md5?: string;
  splitCsv?: boolean;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      fileOssAddress: 'FileOssAddress',
      fileSize: 'FileSize',
      md5: 'Md5',
      splitCsv: 'SplitCsv',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileName: 'string',
      fileOssAddress: 'string',
      fileSize: 'number',
      md5: 'string',
      splitCsv: 'boolean',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneRequestOpenJMeterSceneJMeterProperties extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOpenJMeterSceneRequestOpenJMeterScene extends $tea.Model {
  agentCount?: number;
  concurrency?: number;
  constantThroughputTimerType?: string;
  dnsCacheConfig?: SaveOpenJMeterSceneRequestOpenJMeterSceneDnsCacheConfig;
  duration?: number;
  environmentId?: string;
  fileList?: SaveOpenJMeterSceneRequestOpenJMeterSceneFileList[];
  isVpcTest?: boolean;
  JMeterProperties?: SaveOpenJMeterSceneRequestOpenJMeterSceneJMeterProperties[];
  rampUp?: number;
  regionId?: string;
  sceneId?: string;
  sceneName?: string;
  securityGroupId?: string;
  steps?: number;
  syncTimerType?: string;
  testFile?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      concurrency: 'Concurrency',
      constantThroughputTimerType: 'ConstantThroughputTimerType',
      dnsCacheConfig: 'DnsCacheConfig',
      duration: 'Duration',
      environmentId: 'EnvironmentId',
      fileList: 'FileList',
      isVpcTest: 'IsVpcTest',
      JMeterProperties: 'JMeterProperties',
      rampUp: 'RampUp',
      regionId: 'RegionId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      securityGroupId: 'SecurityGroupId',
      steps: 'Steps',
      syncTimerType: 'SyncTimerType',
      testFile: 'TestFile',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      concurrency: 'number',
      constantThroughputTimerType: 'string',
      dnsCacheConfig: SaveOpenJMeterSceneRequestOpenJMeterSceneDnsCacheConfig,
      duration: 'number',
      environmentId: 'string',
      fileList: { 'type': 'array', 'itemType': SaveOpenJMeterSceneRequestOpenJMeterSceneFileList },
      isVpcTest: 'boolean',
      JMeterProperties: { 'type': 'array', 'itemType': SaveOpenJMeterSceneRequestOpenJMeterSceneJMeterProperties },
      rampUp: 'number',
      regionId: 'string',
      sceneId: 'string',
      sceneName: 'string',
      securityGroupId: 'string',
      steps: 'number',
      syncTimerType: 'string',
      testFile: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createPtsSceneWithOptions(request: CreatePtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<CreatePtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePtsSceneResponse>(await this.doRPCRequest("CreatePtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePtsSceneResponse({}));
  }

  async createPtsScene(request: CreatePtsSceneRequest): Promise<CreatePtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPtsSceneWithOptions(request, runtime);
  }

  async createPtsSceneBaseLineFromReportWithOptions(request: CreatePtsSceneBaseLineFromReportRequest, runtime: $Util.RuntimeOptions): Promise<CreatePtsSceneBaseLineFromReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePtsSceneBaseLineFromReportResponse>(await this.doRPCRequest("CreatePtsSceneBaseLineFromReport", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePtsSceneBaseLineFromReportResponse({}));
  }

  async createPtsSceneBaseLineFromReport(request: CreatePtsSceneBaseLineFromReportRequest): Promise<CreatePtsSceneBaseLineFromReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPtsSceneBaseLineFromReportWithOptions(request, runtime);
  }

  async deletePtsSceneWithOptions(request: DeletePtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<DeletePtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePtsSceneResponse>(await this.doRPCRequest("DeletePtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePtsSceneResponse({}));
  }

  async deletePtsScene(request: DeletePtsSceneRequest): Promise<DeletePtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePtsSceneWithOptions(request, runtime);
  }

  async deletePtsSceneBaseLineWithOptions(request: DeletePtsSceneBaseLineRequest, runtime: $Util.RuntimeOptions): Promise<DeletePtsSceneBaseLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePtsSceneBaseLineResponse>(await this.doRPCRequest("DeletePtsSceneBaseLine", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePtsSceneBaseLineResponse({}));
  }

  async deletePtsSceneBaseLine(request: DeletePtsSceneBaseLineRequest): Promise<DeletePtsSceneBaseLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePtsSceneBaseLineWithOptions(request, runtime);
  }

  async deletePtsScenesWithOptions(tmpReq: DeletePtsScenesRequest, runtime: $Util.RuntimeOptions): Promise<DeletePtsScenesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeletePtsScenesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sceneIds)) {
      request.sceneIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneIds, "SceneIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePtsScenesResponse>(await this.doRPCRequest("DeletePtsScenes", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePtsScenesResponse({}));
  }

  async deletePtsScenes(request: DeletePtsScenesRequest): Promise<DeletePtsScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePtsScenesWithOptions(request, runtime);
  }

  async getJMeterLogsWithOptions(request: GetJMeterLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetJMeterLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJMeterLogsResponse>(await this.doRPCRequest("GetJMeterLogs", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetJMeterLogsResponse({}));
  }

  async getJMeterLogs(request: GetJMeterLogsRequest): Promise<GetJMeterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJMeterLogsWithOptions(request, runtime);
  }

  async getJMeterSampleMetricsWithOptions(request: GetJMeterSampleMetricsRequest, runtime: $Util.RuntimeOptions): Promise<GetJMeterSampleMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJMeterSampleMetricsResponse>(await this.doRPCRequest("GetJMeterSampleMetrics", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetJMeterSampleMetricsResponse({}));
  }

  async getJMeterSampleMetrics(request: GetJMeterSampleMetricsRequest): Promise<GetJMeterSampleMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJMeterSampleMetricsWithOptions(request, runtime);
  }

  async getJMeterSamplingLogsWithOptions(request: GetJMeterSamplingLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetJMeterSamplingLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJMeterSamplingLogsResponse>(await this.doRPCRequest("GetJMeterSamplingLogs", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetJMeterSamplingLogsResponse({}));
  }

  async getJMeterSamplingLogs(request: GetJMeterSamplingLogsRequest): Promise<GetJMeterSamplingLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJMeterSamplingLogsWithOptions(request, runtime);
  }

  async getJMeterSceneRunningDataWithOptions(request: GetJMeterSceneRunningDataRequest, runtime: $Util.RuntimeOptions): Promise<GetJMeterSceneRunningDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJMeterSceneRunningDataResponse>(await this.doRPCRequest("GetJMeterSceneRunningData", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetJMeterSceneRunningDataResponse({}));
  }

  async getJMeterSceneRunningData(request: GetJMeterSceneRunningDataRequest): Promise<GetJMeterSceneRunningDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJMeterSceneRunningDataWithOptions(request, runtime);
  }

  async getOpenJMeterSceneWithOptions(request: GetOpenJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<GetOpenJMeterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOpenJMeterSceneResponse>(await this.doRPCRequest("GetOpenJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetOpenJMeterSceneResponse({}));
  }

  async getOpenJMeterScene(request: GetOpenJMeterSceneRequest): Promise<GetOpenJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpenJMeterSceneWithOptions(request, runtime);
  }

  async getPtsReportDetailsWithOptions(request: GetPtsReportDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetPtsReportDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPtsReportDetailsResponse>(await this.doRPCRequest("GetPtsReportDetails", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPtsReportDetailsResponse({}));
  }

  async getPtsReportDetails(request: GetPtsReportDetailsRequest): Promise<GetPtsReportDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPtsReportDetailsWithOptions(request, runtime);
  }

  async getPtsReportsBySceneIdWithOptions(request: GetPtsReportsBySceneIdRequest, runtime: $Util.RuntimeOptions): Promise<GetPtsReportsBySceneIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPtsReportsBySceneIdResponse>(await this.doRPCRequest("GetPtsReportsBySceneId", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPtsReportsBySceneIdResponse({}));
  }

  async getPtsReportsBySceneId(request: GetPtsReportsBySceneIdRequest): Promise<GetPtsReportsBySceneIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPtsReportsBySceneIdWithOptions(request, runtime);
  }

  async getPtsSceneWithOptions(request: GetPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<GetPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPtsSceneResponse>(await this.doRPCRequest("GetPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPtsSceneResponse({}));
  }

  async getPtsScene(request: GetPtsSceneRequest): Promise<GetPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPtsSceneWithOptions(request, runtime);
  }

  async getPtsSceneBaseLineWithOptions(request: GetPtsSceneBaseLineRequest, runtime: $Util.RuntimeOptions): Promise<GetPtsSceneBaseLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPtsSceneBaseLineResponse>(await this.doRPCRequest("GetPtsSceneBaseLine", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPtsSceneBaseLineResponse({}));
  }

  async getPtsSceneBaseLine(request: GetPtsSceneBaseLineRequest): Promise<GetPtsSceneBaseLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPtsSceneBaseLineWithOptions(request, runtime);
  }

  async getPtsSceneRunningDataWithOptions(request: GetPtsSceneRunningDataRequest, runtime: $Util.RuntimeOptions): Promise<GetPtsSceneRunningDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPtsSceneRunningDataResponse>(await this.doRPCRequest("GetPtsSceneRunningData", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPtsSceneRunningDataResponse({}));
  }

  async getPtsSceneRunningData(request: GetPtsSceneRunningDataRequest): Promise<GetPtsSceneRunningDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPtsSceneRunningDataWithOptions(request, runtime);
  }

  async getPtsSceneRunningStatusWithOptions(request: GetPtsSceneRunningStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPtsSceneRunningStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPtsSceneRunningStatusResponse>(await this.doRPCRequest("GetPtsSceneRunningStatus", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPtsSceneRunningStatusResponse({}));
  }

  async getPtsSceneRunningStatus(request: GetPtsSceneRunningStatusRequest): Promise<GetPtsSceneRunningStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPtsSceneRunningStatusWithOptions(request, runtime);
  }

  async listEnvsWithOptions(request: ListEnvsRequest, runtime: $Util.RuntimeOptions): Promise<ListEnvsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEnvsResponse>(await this.doRPCRequest("ListEnvs", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListEnvsResponse({}));
  }

  async listEnvs(request: ListEnvsRequest): Promise<ListEnvsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnvsWithOptions(request, runtime);
  }

  async listJMeterReportsWithOptions(request: ListJMeterReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListJMeterReportsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJMeterReportsResponse>(await this.doRPCRequest("ListJMeterReports", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListJMeterReportsResponse({}));
  }

  async listJMeterReports(request: ListJMeterReportsRequest): Promise<ListJMeterReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJMeterReportsWithOptions(request, runtime);
  }

  async listOpenJMeterScenesWithOptions(request: ListOpenJMeterScenesRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenJMeterScenesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOpenJMeterScenesResponse>(await this.doRPCRequest("ListOpenJMeterScenes", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListOpenJMeterScenesResponse({}));
  }

  async listOpenJMeterScenes(request: ListOpenJMeterScenesRequest): Promise<ListOpenJMeterScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenJMeterScenesWithOptions(request, runtime);
  }

  async listPtsSceneWithOptions(request: ListPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<ListPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPtsSceneResponse>(await this.doRPCRequest("ListPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListPtsSceneResponse({}));
  }

  async listPtsScene(request: ListPtsSceneRequest): Promise<ListPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPtsSceneWithOptions(request, runtime);
  }

  async modifyPtsSceneWithOptions(request: ModifyPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPtsSceneResponse>(await this.doRPCRequest("ModifyPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPtsSceneResponse({}));
  }

  async modifyPtsScene(request: ModifyPtsSceneRequest): Promise<ModifyPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPtsSceneWithOptions(request, runtime);
  }

  async removeEnvWithOptions(request: RemoveEnvRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEnvResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveEnvResponse>(await this.doRPCRequest("RemoveEnv", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveEnvResponse({}));
  }

  async removeEnv(request: RemoveEnvRequest): Promise<RemoveEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEnvWithOptions(request, runtime);
  }

  async removeOpenJMeterSceneWithOptions(request: RemoveOpenJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<RemoveOpenJMeterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveOpenJMeterSceneResponse>(await this.doRPCRequest("RemoveOpenJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveOpenJMeterSceneResponse({}));
  }

  async removeOpenJMeterScene(request: RemoveOpenJMeterSceneRequest): Promise<RemoveOpenJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeOpenJMeterSceneWithOptions(request, runtime);
  }

  async saveEnvWithOptions(tmpReq: SaveEnvRequest, runtime: $Util.RuntimeOptions): Promise<SaveEnvResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveEnvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.env))) {
      request.envShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.env), "Env", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveEnvResponse>(await this.doRPCRequest("SaveEnv", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new SaveEnvResponse({}));
  }

  async saveEnv(request: SaveEnvRequest): Promise<SaveEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveEnvWithOptions(request, runtime);
  }

  async saveOpenJMeterSceneWithOptions(tmpReq: SaveOpenJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<SaveOpenJMeterSceneResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveOpenJMeterSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.openJMeterScene))) {
      request.openJMeterSceneShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.openJMeterScene), "OpenJMeterScene", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveOpenJMeterSceneResponse>(await this.doRPCRequest("SaveOpenJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new SaveOpenJMeterSceneResponse({}));
  }

  async saveOpenJMeterScene(request: SaveOpenJMeterSceneRequest): Promise<SaveOpenJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveOpenJMeterSceneWithOptions(request, runtime);
  }

  async startDebugPtsSceneWithOptions(request: StartDebugPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartDebugPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDebugPtsSceneResponse>(await this.doRPCRequest("StartDebugPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartDebugPtsSceneResponse({}));
  }

  async startDebugPtsScene(request: StartDebugPtsSceneRequest): Promise<StartDebugPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDebugPtsSceneWithOptions(request, runtime);
  }

  async startDebuggingJMeterSceneWithOptions(request: StartDebuggingJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartDebuggingJMeterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDebuggingJMeterSceneResponse>(await this.doRPCRequest("StartDebuggingJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartDebuggingJMeterSceneResponse({}));
  }

  async startDebuggingJMeterScene(request: StartDebuggingJMeterSceneRequest): Promise<StartDebuggingJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDebuggingJMeterSceneWithOptions(request, runtime);
  }

  async startPtsSceneWithOptions(request: StartPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartPtsSceneResponse>(await this.doRPCRequest("StartPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartPtsSceneResponse({}));
  }

  async startPtsScene(request: StartPtsSceneRequest): Promise<StartPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPtsSceneWithOptions(request, runtime);
  }

  async startTestingJMeterSceneWithOptions(request: StartTestingJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StartTestingJMeterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartTestingJMeterSceneResponse>(await this.doRPCRequest("StartTestingJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartTestingJMeterSceneResponse({}));
  }

  async startTestingJMeterScene(request: StartTestingJMeterSceneRequest): Promise<StartTestingJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTestingJMeterSceneWithOptions(request, runtime);
  }

  async stopDebugPtsSceneWithOptions(request: StopDebugPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopDebugPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDebugPtsSceneResponse>(await this.doRPCRequest("StopDebugPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopDebugPtsSceneResponse({}));
  }

  async stopDebugPtsScene(request: StopDebugPtsSceneRequest): Promise<StopDebugPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDebugPtsSceneWithOptions(request, runtime);
  }

  async stopDebuggingJMeterSceneWithOptions(request: StopDebuggingJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopDebuggingJMeterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDebuggingJMeterSceneResponse>(await this.doRPCRequest("StopDebuggingJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopDebuggingJMeterSceneResponse({}));
  }

  async stopDebuggingJMeterScene(request: StopDebuggingJMeterSceneRequest): Promise<StopDebuggingJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDebuggingJMeterSceneWithOptions(request, runtime);
  }

  async stopPtsSceneWithOptions(request: StopPtsSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopPtsSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopPtsSceneResponse>(await this.doRPCRequest("StopPtsScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopPtsSceneResponse({}));
  }

  async stopPtsScene(request: StopPtsSceneRequest): Promise<StopPtsSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopPtsSceneWithOptions(request, runtime);
  }

  async stopTestingJMeterSceneWithOptions(request: StopTestingJMeterSceneRequest, runtime: $Util.RuntimeOptions): Promise<StopTestingJMeterSceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopTestingJMeterSceneResponse>(await this.doRPCRequest("StopTestingJMeterScene", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopTestingJMeterSceneResponse({}));
  }

  async stopTestingJMeterScene(request: StopTestingJMeterSceneRequest): Promise<StopTestingJMeterSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTestingJMeterSceneWithOptions(request, runtime);
  }

  async updatePtsSceneBaseLineWithOptions(tmpReq: UpdatePtsSceneBaseLineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePtsSceneBaseLineResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdatePtsSceneBaseLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.apiBaselines)) {
      request.apiBaselinesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiBaselines, "ApiBaselines", "json");
    }

    if (!Util.isUnset(tmpReq.sceneBaseline)) {
      request.sceneBaselineShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneBaseline, "SceneBaseline", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePtsSceneBaseLineResponse>(await this.doRPCRequest("UpdatePtsSceneBaseLine", "2020-10-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePtsSceneBaseLineResponse({}));
  }

  async updatePtsSceneBaseLine(request: UpdatePtsSceneBaseLineRequest): Promise<UpdatePtsSceneBaseLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePtsSceneBaseLineWithOptions(request, runtime);
  }

}
