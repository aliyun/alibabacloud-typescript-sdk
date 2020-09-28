// This file is auto-generated, don't edit it
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import Util, * as $Util from '@alicloud/tea-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class GetOpPvCustomValuesRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpPvCustomValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  data: GetOpPvCustomValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetOpPvCustomValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPidLoopEvaluationRequest extends $tea.Model {
  pidLoopIdList: { [key: string]: any };
  pidProjectId: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopIdList: 'PidLoopIdList',
      pidProjectId: 'PidProjectId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pidProjectId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPidLoopEvaluationResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesRequest extends $tea.Model {
  pidLoopParameterId?: string;
  pidLoopId?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  data: GetDefaultAdjustValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetDefaultAdjustValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  data: GetPvOpAdjustValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetPvOpAdjustValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvCustomSimulationValuesRequest extends $tea.Model {
  pidLoopParameterId?: string;
  pidLoopId?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvCustomSimulationValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  data: GetPvCustomSimulationValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetPvCustomSimulationValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  data: GetIdentificateValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetIdentificateValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvIdentSimulationValuesRequest extends $tea.Model {
  pidLoopId: string;
  pidLoopParameterId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      pidLoopParameterId: 'PidLoopParameterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      pidLoopParameterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvIdentSimulationValuesResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  success: boolean;
  data: GetPvIdentSimulationValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: GetPvIdentSimulationValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomIdentValuesRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomIdentValuesResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  success: boolean;
  data: GetCustomIdentValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: GetCustomIdentValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewRequest extends $tea.Model {
  pidProjectId: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponse extends $tea.Model {
  requestId: string;
  code: string;
  success: boolean;
  message: string;
  data: GetPidProjectReportOverviewResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      message: 'string',
      data: GetPidProjectReportOverviewResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLowModelPerformValuesRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLowModelPerformValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: { [key: string]: any };
  data: GetLowModelPerformValuesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: GetLowModelPerformValuesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidLoopEvaluationsRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  pidProjectId: string;
  order?: string;
  orderByProperty?: string;
  pidLoopName?: string;
  grade?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pidProjectId: 'PidProjectId',
      order: 'Order',
      orderByProperty: 'OrderByProperty',
      pidLoopName: 'PidLoopName',
      grade: 'Grade',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      pidProjectId: 'string',
      order: 'string',
      orderByProperty: 'string',
      pidLoopName: 'string',
      grade: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidLoopEvaluationsResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  success: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  data: ListPidLoopEvaluationsResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      data: { 'type': 'array', 'itemType': ListPidLoopEvaluationsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesRequest extends $tea.Model {
  pidLoopParameterId: string;
  dataStartTime?: string;
  dataEndTime?: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      dataStartTime: 'DataStartTime',
      dataEndTime: 'DataEndTime',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      dataStartTime: 'string',
      dataEndTime: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  tagsValuesRsp: ListLoopParameterTagValuesResponseTagsValuesRsp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      tagsValuesRsp: 'TagsValuesRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      tagsValuesRsp: ListLoopParameterTagValuesResponseTagsValuesRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidLoopParameter: GetPidLoopParameterResponsePidLoopParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidLoopParameter: 'PidLoopParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidLoopParameter: GetPidLoopParameterResponsePidLoopParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportInfoRequest extends $tea.Model {
  pidLoopId: string;
  reportDate?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      reportDate: 'ReportDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      reportDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportInfoResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  dayResultRsp: GetDailyReportInfoResponseDayResultRsp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      dayResultRsp: 'DayResultRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      dayResultRsp: GetDailyReportInfoResponseDayResultRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopRequest extends $tea.Model {
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  loopConfiguration: GetPidLoopResponseLoopConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      loopConfiguration: 'LoopConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      loopConfiguration: GetPidLoopResponseLoopConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidProjectRequest extends $tea.Model {
  pidProjectName: string;
  pidOrganisationId: string;
  pidProjectDesc?: string;
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectName: 'PidProjectName',
      pidOrganisationId: 'PidOrganisationId',
      pidProjectDesc: 'PidProjectDesc',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectName: 'string',
      pidOrganisationId: 'string',
      pidProjectDesc: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidProjectResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidProjectId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidProjectId: 'PidProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentModelsRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentModelsResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidIdentModelList: ListIdentModelsResponsePidIdentModelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidIdentModelList: 'PidIdentModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidIdentModelList: { 'type': 'array', 'itemType': ListIdentModelsResponsePidIdentModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidDataProcessRequest extends $tea.Model {
  pidLoopId: string;
  onlyCompleteStatus: boolean;
  pidDataProcessType: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      onlyCompleteStatus: 'OnlyCompleteStatus',
      pidDataProcessType: 'PidDataProcessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      onlyCompleteStatus: 'boolean',
      pidDataProcessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidDataProcessResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidDataProcessList: ListPidDataProcessResponsePidDataProcessList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidDataProcessList: 'PidDataProcessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidDataProcessList: { 'type': 'array', 'itemType': ListPidDataProcessResponsePidDataProcessList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomIdentModelRequest extends $tea.Model {
  pidLoopParameterId: string;
  key: string;
  value: number;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      key: 'Key',
      value: 'Value',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      key: 'string',
      value: 'number',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomIdentModelResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoopParameterStepRequest extends $tea.Model {
  pidLoopParameterId: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoopParameterStepResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidLoopParamTurningStep: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidLoopParamTurningStep: 'PidLoopParamTurningStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidLoopParamTurningStep: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidLoopsRequest extends $tea.Model {
  pidProjectId: string;
  pidLoopName?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidLoopName: 'PidLoopName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidLoopName: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidLoopsResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  pidLoopList: ListPidLoopsResponsePidLoopList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pidLoopList: 'PidLoopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      pidLoopList: { 'type': 'array', 'itemType': ListPidLoopsResponsePidLoopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MovePidOrganizationRequest extends $tea.Model {
  organizationId: string;
  moveType: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      moveType: 'MoveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      moveType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MovePidOrganizationResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePidLoopRequest extends $tea.Model {
  pidLoopId: string;
  pidLoopName: string;
  crucial: boolean;
  pidLoopDesc?: string;
  pidProjectId: string;
  pidLoopDcsType: string;
  pidLoopType: string;
  pidLoopConfiguration: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      pidLoopName: 'PidLoopName',
      crucial: 'Crucial',
      pidLoopDesc: 'PidLoopDesc',
      pidProjectId: 'PidProjectId',
      pidLoopDcsType: 'PidLoopDcsType',
      pidLoopType: 'PidLoopType',
      pidLoopConfiguration: 'PidLoopConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      pidLoopName: 'string',
      crucial: 'boolean',
      pidLoopDesc: 'string',
      pidProjectId: 'string',
      pidLoopDcsType: 'string',
      pidLoopType: 'string',
      pidLoopConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePidLoopResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPidLoopToScheduleRequest extends $tea.Model {
  pidLoopIdList: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pidLoopIdList: 'PidLoopIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPidLoopToScheduleResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParsingTagTaskRequest extends $tea.Model {
  pidProjectId: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParsingTagTaskResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidTagTaskStatus: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidTagTaskStatus: 'PidTagTaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidTagTaskStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopLatestTaskStatusRequest extends $tea.Model {
  pidLoopParameterId: string;
  type: string;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      type: 'Type',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      type: 'string',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopLatestTaskStatusResponse extends $tea.Model {
  requestId: string;
  code: string;
  success: boolean;
  message: string;
  status: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      message: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidLoopRequest extends $tea.Model {
  pidLoopId?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidLoopResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoRequest extends $tea.Model {
  pidLoopId: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  summaryResultRsp: GetSummaryReportInfoResponseSummaryResultRsp;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      summaryResultRsp: 'SummaryResultRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      summaryResultRsp: GetSummaryReportInfoResponseSummaryResultRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendRequest extends $tea.Model {
  pidLoopId: string;
  startTime: string;
  endTime: string;
  trendType: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      trendType: 'TrendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      startTime: 'string',
      endTime: 'string',
      trendType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  summaryTrendData: GetSummaryReportDataTrendResponseSummaryTrendData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      summaryTrendData: 'SummaryTrendData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      summaryTrendData: GetSummaryReportDataTrendResponseSummaryTrendData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartRequest extends $tea.Model {
  pidLoopId: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  summaryLineChartDataRsp: GetSummaryReportChartResponseSummaryLineChartDataRsp;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      summaryLineChartDataRsp: 'SummaryLineChartDataRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      summaryLineChartDataRsp: GetSummaryReportChartResponseSummaryLineChartDataRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendRequest extends $tea.Model {
  pidLoopId: string;
  reportDate?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      reportDate: 'ReportDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      reportDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  tagsValuesRsp: GetDailyReportDataTrendResponseTagsValuesRsp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      tagsValuesRsp: 'TagsValuesRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      tagsValuesRsp: GetDailyReportDataTrendResponseTagsValuesRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValueTrendRequest extends $tea.Model {
  pidProjectId: string;
  pidTag: ListTagValueTrendRequestPidTag[];
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidTag: 'PidTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidTag: { 'type': 'array', 'itemType': ListTagValueTrendRequestPidTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValueTrendResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidTagTrendList: ListTagValueTrendResponsePidTagTrendList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidTagTrendList: 'PidTagTrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidTagTrendList: { 'type': 'array', 'itemType': ListTagValueTrendResponsePidTagTrendList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartRequest extends $tea.Model {
  pidLoopId: string;
  reportDate?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      reportDate: 'ReportDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      reportDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  dayLineChartDataRsp: GetDailyReportChartResponseDayLineChartDataRsp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      dayLineChartDataRsp: 'DayLineChartDataRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      dayLineChartDataRsp: GetDailyReportChartResponseDayLineChartDataRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidOrganizationsRequest extends $tea.Model {
  parentOrganizationId?: string;
  static names(): { [key: string]: string } {
    return {
      parentOrganizationId: 'ParentOrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentOrganizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidOrganizationsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  message: string;
  organizationList: ListPidOrganizationsResponseOrganizationList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      organizationList: 'OrganizationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      organizationList: { 'type': 'array', 'itemType': ListPidOrganizationsResponseOrganizationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidDataProcessesRequest extends $tea.Model {
  pidProjectId: string;
  pidLoopId: string;
  dataProcessTime: CreatePidDataProcessesRequestDataProcessTime[];
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidLoopId: 'PidLoopId',
      dataProcessTime: 'DataProcessTime',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidLoopId: 'string',
      dataProcessTime: { 'type': 'array', 'itemType': CreatePidDataProcessesRequestDataProcessTime },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidDataProcessesResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidDataProcessIdList: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidDataProcessIdList: 'PidDataProcessIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidDataProcessIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportPidParamRequest extends $tea.Model {
  pidLoopId: string;
  pidReportDate?: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      pidReportDate: 'PidReportDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      pidReportDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportPidParamResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  dayPidParamRsp: GetDailyReportPidParamResponseDayPidParamRsp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      dayPidParamRsp: 'DayPidParamRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      dayPidParamRsp: GetDailyReportPidParamResponseDayPidParamRsp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddParameterToPidLoopRequest extends $tea.Model {
  pidProjectId: string;
  pidLoopId: string;
  pidLoopParameterId: string;
  adjustType: number;
  modelDistinguish?: { [key: string]: any };
  parameterTuning?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidLoopId: 'PidLoopId',
      pidLoopParameterId: 'PidLoopParameterId',
      adjustType: 'AdjustType',
      modelDistinguish: 'ModelDistinguish',
      parameterTuning: 'ParameterTuning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidLoopId: 'string',
      pidLoopParameterId: 'string',
      adjustType: 'number',
      modelDistinguish: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterTuning: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddParameterToPidLoopResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidLoopParameterId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidLoopParameterId: 'PidLoopParameterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidLoopParameterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidProjectsRequest extends $tea.Model {
  pidProjectName?: string;
  pidOrganisationId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      pidProjectName: 'PidProjectName',
      pidOrganisationId: 'PidOrganisationId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectName: 'string',
      pidOrganisationId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidProjectsResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pageSize: number;
  currentPage: number;
  totalCount: number;
  pidProjectList: ListPidProjectsResponsePidProjectList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      totalCount: 'TotalCount',
      pidProjectList: 'PidProjectList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pageSize: 'number',
      currentPage: 'number',
      totalCount: 'number',
      pidProjectList: { 'type': 'array', 'itemType': ListPidProjectsResponsePidProjectList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidOrganizationRequest extends $tea.Model {
  organizationId: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidOrganizationResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPidLoopDefaultParameterRequest extends $tea.Model {
  pidLoopId: string;
  pidLoopParameterId: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      pidLoopParameterId: 'PidLoopParameterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      pidLoopParameterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPidLoopDefaultParameterResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidOrganizationParentIdsRequest extends $tea.Model {
  organizationId: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidOrganizationParentIdsResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  organizationIdList: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      organizationIdList: 'OrganizationIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      organizationIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidOrganizationRequest extends $tea.Model {
  organizationName: string;
  parentOrganizationId?: string;
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      organizationName: 'OrganizationName',
      parentOrganizationId: 'ParentOrganizationId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationName: 'string',
      parentOrganizationId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidOrganizationResponse extends $tea.Model {
  requestId: string;
  organizationId: string;
  code: string;
  success: boolean;
  message: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      organizationId: 'OrganizationId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      organizationId: 'string',
      code: 'string',
      success: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePidOrganizationRequest extends $tea.Model {
  organizationId: string;
  organizationName: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      organizationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePidOrganizationResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidLoopRequest extends $tea.Model {
  pidLoopName: string;
  isCrucialPidLoop: boolean;
  pidLoopDesc?: string;
  pidProjectId: string;
  pidLoopDcsType: string;
  pidLoopType: string;
  pidLoopConfiguration: { [key: string]: any };
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      pidLoopName: 'PidLoopName',
      isCrucialPidLoop: 'IsCrucialPidLoop',
      pidLoopDesc: 'PidLoopDesc',
      pidProjectId: 'PidProjectId',
      pidLoopDcsType: 'PidLoopDcsType',
      pidLoopType: 'PidLoopType',
      pidLoopConfiguration: 'PidLoopConfiguration',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopName: 'string',
      isCrucialPidLoop: 'boolean',
      pidLoopDesc: 'string',
      pidProjectId: 'string',
      pidLoopDcsType: 'string',
      pidLoopType: 'string',
      pidLoopConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidLoopResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidLoopId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidLoopId: 'PidLoopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidLoopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePidProjectRequest extends $tea.Model {
  pidProjectId: string;
  pidProjectName?: string;
  pidProjectDesc?: string;
  pidOrganisationId: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidProjectName: 'PidProjectName',
      pidProjectDesc: 'PidProjectDesc',
      pidOrganisationId: 'PidOrganisationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidProjectName: 'string',
      pidProjectDesc: 'string',
      pidOrganisationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePidProjectResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidTagsRequest extends $tea.Model {
  pidProjectId: string;
  pidTagName?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidTagName: 'PidTagName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidTagName: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidTagsResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  pidTagList: ListPidTagsResponsePidTagList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pidTagList: 'PidTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      pidTagList: { 'type': 'array', 'itemType': ListPidTagsResponsePidTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidDataProcessRequest extends $tea.Model {
  pidDataProcessId: string;
  static names(): { [key: string]: string } {
    return {
      pidDataProcessId: 'PidDataProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidDataProcessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidDataProcessResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  pidData: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      pidData: 'PidData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      pidData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidDataSourceRequest extends $tea.Model {
  pidProjectId: string;
  type: string;
  ossPath: string;
  fileName: string;
  openUpload?: number;
  needCreateTime: number;
  startDate?: string;
  sampleTime?: number;
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      type: 'Type',
      ossPath: 'OssPath',
      fileName: 'FileName',
      openUpload: 'OpenUpload',
      needCreateTime: 'NeedCreateTime',
      startDate: 'StartDate',
      sampleTime: 'SampleTime',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      type: 'string',
      ossPath: 'string',
      fileName: 'string',
      openUpload: 'number',
      needCreateTime: 'number',
      startDate: 'string',
      sampleTime: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidDataSourceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  message: string;
  pidDataSourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      pidDataSourceId: 'PidDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      pidDataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidDataSourceAdvanceRequest extends $tea.Model {
  ossPathObject: Readable;
  pidProjectId: string;
  type: string;
  fileName: string;
  openUpload?: number;
  needCreateTime: number;
  startDate?: string;
  sampleTime?: number;
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      ossPathObject: 'OssPathObject',
      pidProjectId: 'PidProjectId',
      type: 'Type',
      fileName: 'FileName',
      openUpload: 'OpenUpload',
      needCreateTime: 'NeedCreateTime',
      startDate: 'StartDate',
      sampleTime: 'SampleTime',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPathObject: 'Readable',
      pidProjectId: 'string',
      type: 'string',
      fileName: 'string',
      openUpload: 'number',
      needCreateTime: 'number',
      startDate: 'string',
      sampleTime: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidProjectRequest extends $tea.Model {
  pidProjectId: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidProjectResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidTagRequest extends $tea.Model {
  pidProjectId: string;
  pidTagId: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidTagId: 'PidTagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidTagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePidTagResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpPvCustomValuesResponseDataOppvCustomDataInfoOpzdy extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpPvCustomValuesResponseDataOppvCustomDataInfoPvzdy extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpPvCustomValuesResponseDataOppvCustomDataInfo extends $tea.Model {
  opzdy: GetOpPvCustomValuesResponseDataOppvCustomDataInfoOpzdy[];
  pvzdy: GetOpPvCustomValuesResponseDataOppvCustomDataInfoPvzdy[];
  static names(): { [key: string]: string } {
    return {
      opzdy: 'Opzdy',
      pvzdy: 'Pvzdy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opzdy: { 'type': 'array', 'itemType': GetOpPvCustomValuesResponseDataOppvCustomDataInfoOpzdy },
      pvzdy: { 'type': 'array', 'itemType': GetOpPvCustomValuesResponseDataOppvCustomDataInfoPvzdy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpPvCustomValuesResponseData extends $tea.Model {
  status: boolean;
  oppvCustomDataInfo: GetOpPvCustomValuesResponseDataOppvCustomDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      oppvCustomDataInfo: 'OppvCustomDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      oppvCustomDataInfo: GetOpPvCustomValuesResponseDataOppvCustomDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoManualCtrl extends $tea.Model {
  kp: number;
  ti: number;
  td: number;
  static names(): { [key: string]: string } {
    return {
      kp: 'Kp',
      ti: 'Ti',
      td: 'Td',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kp: 'number',
      ti: 'number',
      td: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoPerform extends $tea.Model {
  raiseTime: number;
  finalValue: number;
  overValue: number;
  stableError: number;
  adjustTime: number;
  dynamic: number;
  robust: number;
  static names(): { [key: string]: string } {
    return {
      raiseTime: 'RaiseTime',
      finalValue: 'FinalValue',
      overValue: 'OverValue',
      stableError: 'StableError',
      adjustTime: 'AdjustTime',
      dynamic: 'Dynamic',
      robust: 'Robust',
    };
  }

  static types(): { [key: string]: any } {
    return {
      raiseTime: 'number',
      finalValue: 'number',
      overValue: 'number',
      stableError: 'number',
      adjustTime: 'number',
      dynamic: 'number',
      robust: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoManualPerform extends $tea.Model {
  raiseTime: number;
  finalValue: number;
  overValue: number;
  stableError: number;
  adjustTime: number;
  dynamic: number;
  robust: number;
  static names(): { [key: string]: string } {
    return {
      raiseTime: 'RaiseTime',
      finalValue: 'FinalValue',
      overValue: 'OverValue',
      stableError: 'StableError',
      adjustTime: 'AdjustTime',
      dynamic: 'Dynamic',
      robust: 'Robust',
    };
  }

  static types(): { [key: string]: any } {
    return {
      raiseTime: 'number',
      finalValue: 'number',
      overValue: 'number',
      stableError: 'number',
      adjustTime: 'number',
      dynamic: 'number',
      robust: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfo extends $tea.Model {
  manualCtrl: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoManualCtrl;
  perform: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoPerform;
  manualPerform: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoManualPerform;
  static names(): { [key: string]: string } {
    return {
      manualCtrl: 'ManualCtrl',
      perform: 'Perform',
      manualPerform: 'ManualPerform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualCtrl: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoManualCtrl,
      perform: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoPerform,
      manualPerform: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfoManualPerform,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultAdjustValuesResponseData extends $tea.Model {
  status: boolean;
  defaultAdjustDataInfo: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      defaultAdjustDataInfo: 'DefaultAdjustDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      defaultAdjustDataInfo: GetDefaultAdjustValuesResponseDataDefaultAdjustDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoOp extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoPv extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoSp extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesResponseDataPvopAdjustDataInfo extends $tea.Model {
  op: GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoOp[];
  pv: GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoPv[];
  sp: GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoSp[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      pv: 'Pv',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: { 'type': 'array', 'itemType': GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoOp },
      pv: { 'type': 'array', 'itemType': GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoPv },
      sp: { 'type': 'array', 'itemType': GetPvOpAdjustValuesResponseDataPvopAdjustDataInfoSp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvOpAdjustValuesResponseData extends $tea.Model {
  status: boolean;
  pvopAdjustDataInfo: GetPvOpAdjustValuesResponseDataPvopAdjustDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pvopAdjustDataInfo: 'PvopAdjustDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      pvopAdjustDataInfo: GetPvOpAdjustValuesResponseDataPvopAdjustDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvCustomSimulationValuesResponseDataPvCustomSimulateDataInfoPv extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvCustomSimulationValuesResponseDataPvCustomSimulateDataInfo extends $tea.Model {
  pv: GetPvCustomSimulationValuesResponseDataPvCustomSimulateDataInfoPv[];
  static names(): { [key: string]: string } {
    return {
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pv: { 'type': 'array', 'itemType': GetPvCustomSimulationValuesResponseDataPvCustomSimulateDataInfoPv },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvCustomSimulationValuesResponseData extends $tea.Model {
  status: boolean;
  pvCustomSimulateDataInfo: GetPvCustomSimulationValuesResponseDataPvCustomSimulateDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pvCustomSimulateDataInfo: 'PvCustomSimulateDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      pvCustomSimulateDataInfo: GetPvCustomSimulationValuesResponseDataPvCustomSimulateDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesResponseDataIdentificateDataInfoDj extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesResponseDataIdentificateDataInfoGj extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesResponseDataIdentificateDataInfoBs extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesResponseDataIdentificateDataInfo extends $tea.Model {
  dj: GetIdentificateValuesResponseDataIdentificateDataInfoDj[];
  gj: GetIdentificateValuesResponseDataIdentificateDataInfoGj[];
  bs: GetIdentificateValuesResponseDataIdentificateDataInfoBs[];
  static names(): { [key: string]: string } {
    return {
      dj: 'Dj',
      gj: 'Gj',
      bs: 'Bs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dj: { 'type': 'array', 'itemType': GetIdentificateValuesResponseDataIdentificateDataInfoDj },
      gj: { 'type': 'array', 'itemType': GetIdentificateValuesResponseDataIdentificateDataInfoGj },
      bs: { 'type': 'array', 'itemType': GetIdentificateValuesResponseDataIdentificateDataInfoBs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentificateValuesResponseData extends $tea.Model {
  status: boolean;
  identificateDataInfo: GetIdentificateValuesResponseDataIdentificateDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      identificateDataInfo: 'IdentificateDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      identificateDataInfo: GetIdentificateValuesResponseDataIdentificateDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvIdentSimulationValuesResponseDataPvIdentSimulateDataInfoPv extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvIdentSimulationValuesResponseDataPvIdentSimulateDataInfo extends $tea.Model {
  pv: GetPvIdentSimulationValuesResponseDataPvIdentSimulateDataInfoPv[];
  static names(): { [key: string]: string } {
    return {
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pv: { 'type': 'array', 'itemType': GetPvIdentSimulationValuesResponseDataPvIdentSimulateDataInfoPv },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPvIdentSimulationValuesResponseData extends $tea.Model {
  status: boolean;
  pvIdentSimulateDataInfo: GetPvIdentSimulationValuesResponseDataPvIdentSimulateDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pvIdentSimulateDataInfo: 'PvIdentSimulateDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      pvIdentSimulateDataInfo: GetPvIdentSimulationValuesResponseDataPvIdentSimulateDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomIdentValuesResponseDataCustomIdentDataInfoCustomModelTrend extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomIdentValuesResponseDataCustomIdentDataInfoCustomResidual extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  quality: number;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
      quality: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomIdentValuesResponseDataCustomIdentDataInfo extends $tea.Model {
  customModelTrend: GetCustomIdentValuesResponseDataCustomIdentDataInfoCustomModelTrend[];
  customResidual: GetCustomIdentValuesResponseDataCustomIdentDataInfoCustomResidual[];
  static names(): { [key: string]: string } {
    return {
      customModelTrend: 'CustomModelTrend',
      customResidual: 'CustomResidual',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customModelTrend: { 'type': 'array', 'itemType': GetCustomIdentValuesResponseDataCustomIdentDataInfoCustomModelTrend },
      customResidual: { 'type': 'array', 'itemType': GetCustomIdentValuesResponseDataCustomIdentDataInfoCustomResidual },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomIdentValuesResponseData extends $tea.Model {
  status: boolean;
  customIdentDataInfo: GetCustomIdentValuesResponseDataCustomIdentDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      customIdentDataInfo: 'CustomIdentDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      customIdentDataInfo: GetCustomIdentValuesResponseDataCustomIdentDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataAllPerformMetricsList extends $tea.Model {
  xlabel: string;
  ylabel: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'string',
      ylabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataKeyPerformMetricsList extends $tea.Model {
  xlabel: string;
  ylabel: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'string',
      ylabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataAllOperationRateList extends $tea.Model {
  xlabel: string;
  ylabel: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'string',
      ylabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataKeyOperationRateList extends $tea.Model {
  xlabel: string;
  ylabel: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'string',
      ylabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataLoopScoreList extends $tea.Model {
  xlabel: string;
  ylabel: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'string',
      ylabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataLoopOperationRateList extends $tea.Model {
  xlabel: string;
  ylabel: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'string',
      ylabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataStatusAll extends $tea.Model {
  best: number;
  good: number;
  middle: number;
  bad: number;
  openLoop: number;
  static names(): { [key: string]: string } {
    return {
      best: 'Best',
      good: 'Good',
      middle: 'Middle',
      bad: 'Bad',
      openLoop: 'OpenLoop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      best: 'number',
      good: 'number',
      middle: 'number',
      bad: 'number',
      openLoop: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataStatusKey extends $tea.Model {
  best: number;
  good: number;
  middle: number;
  bad: number;
  openLoop: number;
  static names(): { [key: string]: string } {
    return {
      best: 'Best',
      good: 'Good',
      middle: 'Middle',
      bad: 'Bad',
      openLoop: 'OpenLoop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      best: 'number',
      good: 'number',
      middle: 'number',
      bad: 'number',
      openLoop: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseDataStatus extends $tea.Model {
  all: GetPidProjectReportOverviewResponseDataStatusAll;
  key: GetPidProjectReportOverviewResponseDataStatusKey;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: GetPidProjectReportOverviewResponseDataStatusAll,
      key: GetPidProjectReportOverviewResponseDataStatusKey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidProjectReportOverviewResponseData extends $tea.Model {
  performMetrics: number;
  operationRate: number;
  allPerformMetricsList: GetPidProjectReportOverviewResponseDataAllPerformMetricsList[];
  keyPerformMetricsList: GetPidProjectReportOverviewResponseDataKeyPerformMetricsList[];
  allOperationRateList: GetPidProjectReportOverviewResponseDataAllOperationRateList[];
  keyOperationRateList: GetPidProjectReportOverviewResponseDataKeyOperationRateList[];
  loopScoreList: GetPidProjectReportOverviewResponseDataLoopScoreList[];
  loopOperationRateList: GetPidProjectReportOverviewResponseDataLoopOperationRateList[];
  status: GetPidProjectReportOverviewResponseDataStatus;
  static names(): { [key: string]: string } {
    return {
      performMetrics: 'PerformMetrics',
      operationRate: 'OperationRate',
      allPerformMetricsList: 'AllPerformMetricsList',
      keyPerformMetricsList: 'KeyPerformMetricsList',
      allOperationRateList: 'AllOperationRateList',
      keyOperationRateList: 'KeyOperationRateList',
      loopScoreList: 'LoopScoreList',
      loopOperationRateList: 'LoopOperationRateList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performMetrics: 'number',
      operationRate: 'number',
      allPerformMetricsList: { 'type': 'array', 'itemType': GetPidProjectReportOverviewResponseDataAllPerformMetricsList },
      keyPerformMetricsList: { 'type': 'array', 'itemType': GetPidProjectReportOverviewResponseDataKeyPerformMetricsList },
      allOperationRateList: { 'type': 'array', 'itemType': GetPidProjectReportOverviewResponseDataAllOperationRateList },
      keyOperationRateList: { 'type': 'array', 'itemType': GetPidProjectReportOverviewResponseDataKeyOperationRateList },
      loopScoreList: { 'type': 'array', 'itemType': GetPidProjectReportOverviewResponseDataLoopScoreList },
      loopOperationRateList: { 'type': 'array', 'itemType': GetPidProjectReportOverviewResponseDataLoopOperationRateList },
      status: GetPidProjectReportOverviewResponseDataStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLowModelPerformValuesResponseDataLowModelPerformDataInfoManualModel extends $tea.Model {
  k: number;
  tau: number;
  t1: number;
  t2: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      tau: 'Tau',
      t1: 'T1',
      t2: 'T2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
      tau: 'number',
      t1: 'number',
      t2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLowModelPerformValuesResponseDataLowModelPerformDataInfo extends $tea.Model {
  confidence: number;
  fitDegree: number;
  manualModel: GetLowModelPerformValuesResponseDataLowModelPerformDataInfoManualModel;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      fitDegree: 'FitDegree',
      manualModel: 'ManualModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      fitDegree: 'number',
      manualModel: GetLowModelPerformValuesResponseDataLowModelPerformDataInfoManualModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLowModelPerformValuesResponseData extends $tea.Model {
  status: boolean;
  lowModelPerformDataInfo: GetLowModelPerformValuesResponseDataLowModelPerformDataInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lowModelPerformDataInfo: 'LowModelPerformDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      lowModelPerformDataInfo: GetLowModelPerformValuesResponseDataLowModelPerformDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidLoopEvaluationsResponseData extends $tea.Model {
  afterPidParameters: { [key: string]: any };
  beforePidParameters: { [key: string]: any };
  pidLoopRemark: string;
  assessTime: number;
  robust: number;
  validOperationRate: number;
  operationRate: number;
  performMetrics: number;
  multipleScore: number;
  grade: string;
  pidLoopName: string;
  pidProjectId: string;
  pidLoopId: string;
  pidLoopParameterId: string;
  static names(): { [key: string]: string } {
    return {
      afterPidParameters: 'AfterPidParameters',
      beforePidParameters: 'BeforePidParameters',
      pidLoopRemark: 'PidLoopRemark',
      assessTime: 'AssessTime',
      robust: 'Robust',
      validOperationRate: 'ValidOperationRate',
      operationRate: 'OperationRate',
      performMetrics: 'PerformMetrics',
      multipleScore: 'MultipleScore',
      grade: 'Grade',
      pidLoopName: 'PidLoopName',
      pidProjectId: 'PidProjectId',
      pidLoopId: 'PidLoopId',
      pidLoopParameterId: 'PidLoopParameterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterPidParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      beforePidParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pidLoopRemark: 'string',
      assessTime: 'number',
      robust: 'number',
      validOperationRate: 'number',
      operationRate: 'number',
      performMetrics: 'number',
      multipleScore: 'number',
      grade: 'string',
      pidLoopName: 'string',
      pidProjectId: 'string',
      pidLoopId: 'string',
      pidLoopParameterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRspDataListOp extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRspDataListOp1 extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRspDataListOp2 extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRspDataListSp extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRspDataListPv extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRspDataList extends $tea.Model {
  op: ListLoopParameterTagValuesResponseTagsValuesRspDataListOp[];
  op1: ListLoopParameterTagValuesResponseTagsValuesRspDataListOp1[];
  op2: ListLoopParameterTagValuesResponseTagsValuesRspDataListOp2[];
  sp: ListLoopParameterTagValuesResponseTagsValuesRspDataListSp[];
  pv: ListLoopParameterTagValuesResponseTagsValuesRspDataListPv[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      op1: 'Op1',
      op2: 'Op2',
      sp: 'Sp',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: { 'type': 'array', 'itemType': ListLoopParameterTagValuesResponseTagsValuesRspDataListOp },
      op1: { 'type': 'array', 'itemType': ListLoopParameterTagValuesResponseTagsValuesRspDataListOp1 },
      op2: { 'type': 'array', 'itemType': ListLoopParameterTagValuesResponseTagsValuesRspDataListOp2 },
      sp: { 'type': 'array', 'itemType': ListLoopParameterTagValuesResponseTagsValuesRspDataListSp },
      pv: { 'type': 'array', 'itemType': ListLoopParameterTagValuesResponseTagsValuesRspDataListPv },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoopParameterTagValuesResponseTagsValuesRsp extends $tea.Model {
  status: boolean;
  dataList: ListLoopParameterTagValuesResponseTagsValuesRspDataList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      dataList: ListLoopParameterTagValuesResponseTagsValuesRspDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPidIdentParamLimitMax extends $tea.Model {
  k: number;
  tau: number;
  t1: number;
  t2: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      tau: 'Tau',
      t1: 'T1',
      t2: 'T2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
      tau: 'number',
      t1: 'number',
      t2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPidIdentParamLimitMin extends $tea.Model {
  k: number;
  tau: number;
  t1: number;
  t2: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      tau: 'Tau',
      t1: 'T1',
      t2: 'T2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
      tau: 'number',
      t1: 'number',
      t2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPidIdentParamManualModel extends $tea.Model {
  k: number;
  tau: number;
  t1: number;
  t2: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      tau: 'Tau',
      t1: 'T1',
      t2: 'T2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
      tau: 'number',
      t1: 'number',
      t2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPidIdentParam extends $tea.Model {
  modelType: number;
  integral: boolean;
  trendControl: boolean;
  delay: number;
  smooth: number;
  robust: number;
  limitSw: boolean;
  manualTrend: boolean;
  startTime: string;
  endTime: string;
  pidDataProcessId: number;
  limitMax: GetPidLoopParameterResponsePidLoopParameterPidIdentParamLimitMax;
  limitMin: GetPidLoopParameterResponsePidLoopParameterPidIdentParamLimitMin;
  manualModel: GetPidLoopParameterResponsePidLoopParameterPidIdentParamManualModel;
  static names(): { [key: string]: string } {
    return {
      modelType: 'ModelType',
      integral: 'Integral',
      trendControl: 'TrendControl',
      delay: 'Delay',
      smooth: 'Smooth',
      robust: 'Robust',
      limitSw: 'LimitSw',
      manualTrend: 'ManualTrend',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pidDataProcessId: 'PidDataProcessId',
      limitMax: 'LimitMax',
      limitMin: 'LimitMin',
      manualModel: 'ManualModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'number',
      integral: 'boolean',
      trendControl: 'boolean',
      delay: 'number',
      smooth: 'number',
      robust: 'number',
      limitSw: 'boolean',
      manualTrend: 'boolean',
      startTime: 'string',
      endTime: 'string',
      pidDataProcessId: 'number',
      limitMax: GetPidLoopParameterResponsePidLoopParameterPidIdentParamLimitMax,
      limitMin: GetPidLoopParameterResponsePidLoopParameterPidIdentParamLimitMin,
      manualModel: GetPidLoopParameterResponsePidLoopParameterPidIdentParamManualModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPIdResetParamMeasuredValueRange extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPIdResetParamValvePositionRange extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPIdResetParamManualCtrl extends $tea.Model {
  kp: number;
  ti: number;
  td: number;
  static names(): { [key: string]: string } {
    return {
      kp: 'Kp',
      ti: 'Ti',
      td: 'Td',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kp: 'number',
      ti: 'number',
      td: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameterPIdResetParam extends $tea.Model {
  dcsType: string;
  model: string;
  modelType: number;
  integral: boolean;
  ctrlMode: number;
  ctrlStuc: number;
  robust: number;
  dynamic: number;
  manualTrend: boolean;
  measuredValueRange: GetPidLoopParameterResponsePidLoopParameterPIdResetParamMeasuredValueRange;
  valvePositionRange: GetPidLoopParameterResponsePidLoopParameterPIdResetParamValvePositionRange;
  manualCtrl: GetPidLoopParameterResponsePidLoopParameterPIdResetParamManualCtrl;
  static names(): { [key: string]: string } {
    return {
      dcsType: 'DcsType',
      model: 'Model',
      modelType: 'ModelType',
      integral: 'Integral',
      ctrlMode: 'CtrlMode',
      ctrlStuc: 'CtrlStuc',
      robust: 'Robust',
      dynamic: 'Dynamic',
      manualTrend: 'ManualTrend',
      measuredValueRange: 'MeasuredValueRange',
      valvePositionRange: 'ValvePositionRange',
      manualCtrl: 'ManualCtrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dcsType: 'string',
      model: 'string',
      modelType: 'number',
      integral: 'boolean',
      ctrlMode: 'number',
      ctrlStuc: 'number',
      robust: 'number',
      dynamic: 'number',
      manualTrend: 'boolean',
      measuredValueRange: GetPidLoopParameterResponsePidLoopParameterPIdResetParamMeasuredValueRange,
      valvePositionRange: GetPidLoopParameterResponsePidLoopParameterPIdResetParamValvePositionRange,
      manualCtrl: GetPidLoopParameterResponsePidLoopParameterPIdResetParamManualCtrl,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopParameterResponsePidLoopParameter extends $tea.Model {
  pidLoopParameterId: string;
  pidProjectId: string;
  pidLoopId: string;
  pidIdentTaskDate: string;
  pidResetTaskDate: string;
  pidIdentParam: GetPidLoopParameterResponsePidLoopParameterPidIdentParam;
  PIdResetParam: GetPidLoopParameterResponsePidLoopParameterPIdResetParam;
  static names(): { [key: string]: string } {
    return {
      pidLoopParameterId: 'PidLoopParameterId',
      pidProjectId: 'PidProjectId',
      pidLoopId: 'PidLoopId',
      pidIdentTaskDate: 'PidIdentTaskDate',
      pidResetTaskDate: 'PidResetTaskDate',
      pidIdentParam: 'PidIdentParam',
      PIdResetParam: 'PIdResetParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopParameterId: 'string',
      pidProjectId: 'string',
      pidLoopId: 'string',
      pidIdentTaskDate: 'string',
      pidResetTaskDate: 'string',
      pidIdentParam: GetPidLoopParameterResponsePidLoopParameterPidIdentParam,
      PIdResetParam: GetPidLoopParameterResponsePidLoopParameterPIdResetParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportInfoResponseDayResultRspDayResultData extends $tea.Model {
  loopName: string;
  reportDate: string;
  multipleScore: string;
  performMetrics: string;
  multipleScoreIndex: string;
  operationRate: string;
  validOperationRate: string;
  oscillationIndex: string;
  valveStickIndex: string;
  pvMean: string;
  pvStd: string;
  pvMax: string;
  pvMin: string;
  errMean: string;
  errStd: string;
  errMax: string;
  errMin: string;
  opMean: string;
  opStd: string;
  opMax: string;
  opMin: string;
  loopTrans: string;
  spCross: string;
  opTurn: string;
  opSum: string;
  goodRate: string;
  satuRate: string;
  static names(): { [key: string]: string } {
    return {
      loopName: 'LoopName',
      reportDate: 'ReportDate',
      multipleScore: 'MultipleScore',
      performMetrics: 'PerformMetrics',
      multipleScoreIndex: 'MultipleScoreIndex',
      operationRate: 'OperationRate',
      validOperationRate: 'ValidOperationRate',
      oscillationIndex: 'OscillationIndex',
      valveStickIndex: 'ValveStickIndex',
      pvMean: 'PvMean',
      pvStd: 'PvStd',
      pvMax: 'PvMax',
      pvMin: 'PvMin',
      errMean: 'ErrMean',
      errStd: 'ErrStd',
      errMax: 'ErrMax',
      errMin: 'ErrMin',
      opMean: 'OpMean',
      opStd: 'OpStd',
      opMax: 'OpMax',
      opMin: 'OpMin',
      loopTrans: 'LoopTrans',
      spCross: 'SpCross',
      opTurn: 'OpTurn',
      opSum: 'OpSum',
      goodRate: 'GoodRate',
      satuRate: 'SatuRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loopName: 'string',
      reportDate: 'string',
      multipleScore: 'string',
      performMetrics: 'string',
      multipleScoreIndex: 'string',
      operationRate: 'string',
      validOperationRate: 'string',
      oscillationIndex: 'string',
      valveStickIndex: 'string',
      pvMean: 'string',
      pvStd: 'string',
      pvMax: 'string',
      pvMin: 'string',
      errMean: 'string',
      errStd: 'string',
      errMax: 'string',
      errMin: 'string',
      opMean: 'string',
      opStd: 'string',
      opMax: 'string',
      opMin: 'string',
      loopTrans: 'string',
      spCross: 'string',
      opTurn: 'string',
      opSum: 'string',
      goodRate: 'string',
      satuRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportInfoResponseDayResultRsp extends $tea.Model {
  status: boolean;
  dayResultData: GetDailyReportInfoResponseDayResultRspDayResultData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dayResultData: 'DayResultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      dayResultData: GetDailyReportInfoResponseDayResultRspDayResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamPvRange extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamSpOperate extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOpParamOpScope extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOpParamRange extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOpParamOperate extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOpParamIncrement extends $tea.Model {
  max: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOpParam extends $tea.Model {
  trend: number;
  opScope: GetPidLoopResponseLoopConfigurationBaseParamOpParamOpScope;
  range: GetPidLoopResponseLoopConfigurationBaseParamOpParamRange;
  operate: GetPidLoopResponseLoopConfigurationBaseParamOpParamOperate;
  increment: GetPidLoopResponseLoopConfigurationBaseParamOpParamIncrement;
  static names(): { [key: string]: string } {
    return {
      trend: 'Trend',
      opScope: 'OpScope',
      range: 'Range',
      operate: 'Operate',
      increment: 'Increment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trend: 'number',
      opScope: GetPidLoopResponseLoopConfigurationBaseParamOpParamOpScope,
      range: GetPidLoopResponseLoopConfigurationBaseParamOpParamRange,
      operate: GetPidLoopResponseLoopConfigurationBaseParamOpParamOperate,
      increment: GetPidLoopResponseLoopConfigurationBaseParamOpParamIncrement,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp1ParamOpScope extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp1ParamRange extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp1ParamOperate extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp1ParamIncrement extends $tea.Model {
  max: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp1Param extends $tea.Model {
  trend: number;
  opScope: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamOpScope;
  range: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamRange;
  operate: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamOperate;
  increment: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamIncrement;
  static names(): { [key: string]: string } {
    return {
      trend: 'Trend',
      opScope: 'OpScope',
      range: 'Range',
      operate: 'Operate',
      increment: 'Increment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trend: 'number',
      opScope: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamOpScope,
      range: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamRange,
      operate: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamOperate,
      increment: GetPidLoopResponseLoopConfigurationBaseParamOp1ParamIncrement,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp2ParamOpScope extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp2ParamRange extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp2ParamOperate extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp2ParamIncrement extends $tea.Model {
  max: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamOp2Param extends $tea.Model {
  trend: number;
  opScope: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamOpScope;
  range: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamRange;
  operate: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamOperate;
  increment: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamIncrement;
  static names(): { [key: string]: string } {
    return {
      trend: 'Trend',
      opScope: 'OpScope',
      range: 'Range',
      operate: 'Operate',
      increment: 'Increment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trend: 'number',
      opScope: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamOpScope,
      range: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamRange,
      operate: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamOperate,
      increment: GetPidLoopResponseLoopConfigurationBaseParamOp2ParamIncrement,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamKp extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamTd extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamTi extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParamKd extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationBaseParam extends $tea.Model {
  openLoopTime: number;
  sampleTime: number;
  suitCtrlTime: number;
  pv: string;
  sp: string;
  splitRangeControl: boolean;
  op: string;
  op1: string;
  op2: string;
  controlSwitch: string;
  mv: string;
  forwardController: boolean;
  forwardVariable: string;
  integral: boolean;
  pvRange: GetPidLoopResponseLoopConfigurationBaseParamPvRange;
  spOperate: GetPidLoopResponseLoopConfigurationBaseParamSpOperate;
  opParam: GetPidLoopResponseLoopConfigurationBaseParamOpParam;
  op1Param: GetPidLoopResponseLoopConfigurationBaseParamOp1Param;
  op2Param: GetPidLoopResponseLoopConfigurationBaseParamOp2Param;
  kp: GetPidLoopResponseLoopConfigurationBaseParamKp;
  td: GetPidLoopResponseLoopConfigurationBaseParamTd;
  ti: GetPidLoopResponseLoopConfigurationBaseParamTi;
  kd: GetPidLoopResponseLoopConfigurationBaseParamKd;
  static names(): { [key: string]: string } {
    return {
      openLoopTime: 'OpenLoopTime',
      sampleTime: 'SampleTime',
      suitCtrlTime: 'SuitCtrlTime',
      pv: 'Pv',
      sp: 'Sp',
      splitRangeControl: 'SplitRangeControl',
      op: 'Op',
      op1: 'Op1',
      op2: 'Op2',
      controlSwitch: 'ControlSwitch',
      mv: 'Mv',
      forwardController: 'ForwardController',
      forwardVariable: 'ForwardVariable',
      integral: 'Integral',
      pvRange: 'PvRange',
      spOperate: 'SpOperate',
      opParam: 'OpParam',
      op1Param: 'Op1Param',
      op2Param: 'Op2Param',
      kp: 'Kp',
      td: 'Td',
      ti: 'Ti',
      kd: 'Kd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openLoopTime: 'number',
      sampleTime: 'number',
      suitCtrlTime: 'number',
      pv: 'string',
      sp: 'string',
      splitRangeControl: 'boolean',
      op: 'string',
      op1: 'string',
      op2: 'string',
      controlSwitch: 'string',
      mv: 'string',
      forwardController: 'boolean',
      forwardVariable: 'string',
      integral: 'boolean',
      pvRange: GetPidLoopResponseLoopConfigurationBaseParamPvRange,
      spOperate: GetPidLoopResponseLoopConfigurationBaseParamSpOperate,
      opParam: GetPidLoopResponseLoopConfigurationBaseParamOpParam,
      op1Param: GetPidLoopResponseLoopConfigurationBaseParamOp1Param,
      op2Param: GetPidLoopResponseLoopConfigurationBaseParamOp2Param,
      kp: GetPidLoopResponseLoopConfigurationBaseParamKp,
      td: GetPidLoopResponseLoopConfigurationBaseParamTd,
      ti: GetPidLoopResponseLoopConfigurationBaseParamTi,
      kd: GetPidLoopResponseLoopConfigurationBaseParamKd,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationIdentParam extends $tea.Model {
  modelType: number;
  delay: number;
  static names(): { [key: string]: string } {
    return {
      modelType: 'ModelType',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'number',
      delay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfigurationResetParam extends $tea.Model {
  ctrlMode: number;
  ctrlStuc: number;
  static names(): { [key: string]: string } {
    return {
      ctrlMode: 'CtrlMode',
      ctrlStuc: 'CtrlStuc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ctrlMode: 'number',
      ctrlStuc: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPidLoopResponseLoopConfiguration extends $tea.Model {
  baseParam: GetPidLoopResponseLoopConfigurationBaseParam;
  identParam: GetPidLoopResponseLoopConfigurationIdentParam;
  resetParam: GetPidLoopResponseLoopConfigurationResetParam;
  static names(): { [key: string]: string } {
    return {
      baseParam: 'BaseParam',
      identParam: 'IdentParam',
      resetParam: 'ResetParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseParam: GetPidLoopResponseLoopConfigurationBaseParam,
      identParam: GetPidLoopResponseLoopConfigurationIdentParam,
      resetParam: GetPidLoopResponseLoopConfigurationResetParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentModelsResponsePidIdentModelListModel extends $tea.Model {
  k: number;
  tau: number;
  t1: number;
  t2: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      tau: 'Tau',
      t1: 'T1',
      t2: 'T2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
      tau: 'number',
      t1: 'number',
      t2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentModelsResponsePidIdentModelList extends $tea.Model {
  modelId: number;
  desc: string;
  model: ListIdentModelsResponsePidIdentModelListModel;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      desc: 'Desc',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      desc: 'string',
      model: ListIdentModelsResponsePidIdentModelListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidDataProcessResponsePidDataProcessList extends $tea.Model {
  pidDataProcessId: string;
  startTime: string;
  endTime: string;
  pidDataProcessStatus: string;
  pidDataProcessProgress: string;
  static names(): { [key: string]: string } {
    return {
      pidDataProcessId: 'PidDataProcessId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pidDataProcessStatus: 'PidDataProcessStatus',
      pidDataProcessProgress: 'PidDataProcessProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidDataProcessId: 'string',
      startTime: 'string',
      endTime: 'string',
      pidDataProcessStatus: 'string',
      pidDataProcessProgress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidLoopsResponsePidLoopList extends $tea.Model {
  pidLoopId: string;
  pidLoopName: string;
  crucial: boolean;
  pidPublishStatus: string;
  parameterTunningId: string;
  pidLoopDcsType: string;
  pidLoopType: string;
  pidLoopProgress: string;
  pidLoopReportProgress: string;
  pidLoopDataProgress: string;
  parameterTunningIdList: string[];
  static names(): { [key: string]: string } {
    return {
      pidLoopId: 'PidLoopId',
      pidLoopName: 'PidLoopName',
      crucial: 'Crucial',
      pidPublishStatus: 'PidPublishStatus',
      parameterTunningId: 'ParameterTunningId',
      pidLoopDcsType: 'PidLoopDcsType',
      pidLoopType: 'PidLoopType',
      pidLoopProgress: 'PidLoopProgress',
      pidLoopReportProgress: 'PidLoopReportProgress',
      pidLoopDataProgress: 'PidLoopDataProgress',
      parameterTunningIdList: 'ParameterTunningIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidLoopId: 'string',
      pidLoopName: 'string',
      crucial: 'boolean',
      pidPublishStatus: 'string',
      parameterTunningId: 'string',
      pidLoopDcsType: 'string',
      pidLoopType: 'string',
      pidLoopProgress: 'string',
      pidLoopReportProgress: 'string',
      pidLoopDataProgress: 'string',
      parameterTunningIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataMultipleScoreIndexRsp extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataMultipleScoreRsp extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataOperationRate extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataOscillationIndex extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataPerformMetrics extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataValidOperationRate extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataValveStickIndex extends $tea.Model {
  average: string;
  best: string;
  worst: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      best: 'Best',
      worst: 'Worst',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      best: 'string',
      worst: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRspSummaryResultData extends $tea.Model {
  loopName: string;
  multipleScoreIndexRsp: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataMultipleScoreIndexRsp;
  multipleScoreRsp: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataMultipleScoreRsp;
  operationRate: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataOperationRate;
  oscillationIndex: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataOscillationIndex;
  performMetrics: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataPerformMetrics;
  validOperationRate: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataValidOperationRate;
  valveStickIndex: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataValveStickIndex;
  static names(): { [key: string]: string } {
    return {
      loopName: 'LoopName',
      multipleScoreIndexRsp: 'MultipleScoreIndexRsp',
      multipleScoreRsp: 'MultipleScoreRsp',
      operationRate: 'OperationRate',
      oscillationIndex: 'OscillationIndex',
      performMetrics: 'PerformMetrics',
      validOperationRate: 'ValidOperationRate',
      valveStickIndex: 'ValveStickIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loopName: 'string',
      multipleScoreIndexRsp: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataMultipleScoreIndexRsp,
      multipleScoreRsp: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataMultipleScoreRsp,
      operationRate: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataOperationRate,
      oscillationIndex: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataOscillationIndex,
      performMetrics: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataPerformMetrics,
      validOperationRate: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataValidOperationRate,
      valveStickIndex: GetSummaryReportInfoResponseSummaryResultRspSummaryResultDataValveStickIndex,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportInfoResponseSummaryResultRsp extends $tea.Model {
  status: boolean;
  summaryResultData: GetSummaryReportInfoResponseSummaryResultRspSummaryResultData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      summaryResultData: 'SummaryResultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      summaryResultData: GetSummaryReportInfoResponseSummaryResultRspSummaryResultData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendDataDataOp2 extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendDataDataOp extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendDataDataOp1 extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendDataDataPv extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendDataDataSp extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendDataData extends $tea.Model {
  op2: GetSummaryReportDataTrendResponseSummaryTrendDataDataOp2[];
  op: GetSummaryReportDataTrendResponseSummaryTrendDataDataOp[];
  op1: GetSummaryReportDataTrendResponseSummaryTrendDataDataOp1[];
  pv: GetSummaryReportDataTrendResponseSummaryTrendDataDataPv[];
  sp: GetSummaryReportDataTrendResponseSummaryTrendDataDataSp[];
  static names(): { [key: string]: string } {
    return {
      op2: 'Op2',
      op: 'Op',
      op1: 'Op1',
      pv: 'Pv',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op2: { 'type': 'array', 'itemType': GetSummaryReportDataTrendResponseSummaryTrendDataDataOp2 },
      op: { 'type': 'array', 'itemType': GetSummaryReportDataTrendResponseSummaryTrendDataDataOp },
      op1: { 'type': 'array', 'itemType': GetSummaryReportDataTrendResponseSummaryTrendDataDataOp1 },
      pv: { 'type': 'array', 'itemType': GetSummaryReportDataTrendResponseSummaryTrendDataDataPv },
      sp: { 'type': 'array', 'itemType': GetSummaryReportDataTrendResponseSummaryTrendDataDataSp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportDataTrendResponseSummaryTrendData extends $tea.Model {
  status: boolean;
  data: GetSummaryReportDataTrendResponseSummaryTrendDataData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      data: GetSummaryReportDataTrendResponseSummaryTrendDataData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataMultipleScoreList extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataOperationRateList extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataPerformMetricsList extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataValidOperationRateList extends $tea.Model {
  name: string;
  xlabel: number;
  ylabel: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      xlabel: 'number',
      ylabel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartData extends $tea.Model {
  multipleScoreList: GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataMultipleScoreList[];
  operationRateList: GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataOperationRateList[];
  performMetricsList: GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataPerformMetricsList[];
  validOperationRateList: GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataValidOperationRateList[];
  static names(): { [key: string]: string } {
    return {
      multipleScoreList: 'MultipleScoreList',
      operationRateList: 'OperationRateList',
      performMetricsList: 'PerformMetricsList',
      validOperationRateList: 'ValidOperationRateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipleScoreList: { 'type': 'array', 'itemType': GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataMultipleScoreList },
      operationRateList: { 'type': 'array', 'itemType': GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataOperationRateList },
      performMetricsList: { 'type': 'array', 'itemType': GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataPerformMetricsList },
      validOperationRateList: { 'type': 'array', 'itemType': GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartDataValidOperationRateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryReportChartResponseSummaryLineChartDataRsp extends $tea.Model {
  status: boolean;
  summaryLineChartData: GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      summaryLineChartData: 'SummaryLineChartData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      summaryLineChartData: GetSummaryReportChartResponseSummaryLineChartDataRspSummaryLineChartData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRspDataOp extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRspDataOp1 extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRspDataOp2 extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRspDataSp extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRspDataPv extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRspData extends $tea.Model {
  op: GetDailyReportDataTrendResponseTagsValuesRspDataOp[];
  op1: GetDailyReportDataTrendResponseTagsValuesRspDataOp1[];
  op2: GetDailyReportDataTrendResponseTagsValuesRspDataOp2[];
  sp: GetDailyReportDataTrendResponseTagsValuesRspDataSp[];
  pv: GetDailyReportDataTrendResponseTagsValuesRspDataPv[];
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      op1: 'Op1',
      op2: 'Op2',
      sp: 'Sp',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: { 'type': 'array', 'itemType': GetDailyReportDataTrendResponseTagsValuesRspDataOp },
      op1: { 'type': 'array', 'itemType': GetDailyReportDataTrendResponseTagsValuesRspDataOp1 },
      op2: { 'type': 'array', 'itemType': GetDailyReportDataTrendResponseTagsValuesRspDataOp2 },
      sp: { 'type': 'array', 'itemType': GetDailyReportDataTrendResponseTagsValuesRspDataSp },
      pv: { 'type': 'array', 'itemType': GetDailyReportDataTrendResponseTagsValuesRspDataPv },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportDataTrendResponseTagsValuesRsp extends $tea.Model {
  status: boolean;
  data: GetDailyReportDataTrendResponseTagsValuesRspData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      data: GetDailyReportDataTrendResponseTagsValuesRspData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValueTrendRequestPidTag extends $tea.Model {
  pidTagId: string;
  static names(): { [key: string]: string } {
    return {
      pidTagId: 'PidTagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidTagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValueTrendResponsePidTagTrendListPidTagValueList extends $tea.Model {
  time: number;
  value: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValueTrendResponsePidTagTrendList extends $tea.Model {
  pidTagName: string;
  pidTagValueList: ListTagValueTrendResponsePidTagTrendListPidTagValueList[];
  static names(): { [key: string]: string } {
    return {
      pidTagName: 'PidTagName',
      pidTagValueList: 'PidTagValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidTagName: 'string',
      pidTagValueList: { 'type': 'array', 'itemType': ListTagValueTrendResponsePidTagTrendListPidTagValueList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataHarris extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataCloseLoop extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataBode extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataResidualStage extends $tea.Model {
  xlabel: number;
  ylabel: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      xlabel: 'Xlabel',
      ylabel: 'Ylabel',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xlabel: 'number',
      ylabel: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponseDayLineChartDataRspDayLineChartData extends $tea.Model {
  harris: GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataHarris[];
  closeLoop: GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataCloseLoop[];
  bode: GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataBode[];
  residualStage: GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataResidualStage[];
  static names(): { [key: string]: string } {
    return {
      harris: 'Harris',
      closeLoop: 'CloseLoop',
      bode: 'Bode',
      residualStage: 'ResidualStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      harris: { 'type': 'array', 'itemType': GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataHarris },
      closeLoop: { 'type': 'array', 'itemType': GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataCloseLoop },
      bode: { 'type': 'array', 'itemType': GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataBode },
      residualStage: { 'type': 'array', 'itemType': GetDailyReportChartResponseDayLineChartDataRspDayLineChartDataResidualStage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportChartResponseDayLineChartDataRsp extends $tea.Model {
  status: boolean;
  dayLineChartData: GetDailyReportChartResponseDayLineChartDataRspDayLineChartData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dayLineChartData: 'DayLineChartData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      dayLineChartData: GetDailyReportChartResponseDayLineChartDataRspDayLineChartData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidOrganizationsResponseOrganizationList extends $tea.Model {
  organizationId: string;
  organizationName: string;
  organizationLevel: number;
  parentOrganizationId: string;
  levelName: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      organizationName: 'OrganizationName',
      organizationLevel: 'OrganizationLevel',
      parentOrganizationId: 'ParentOrganizationId',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      organizationName: 'string',
      organizationLevel: 'number',
      parentOrganizationId: 'string',
      levelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePidDataProcessesRequestDataProcessTime extends $tea.Model {
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportPidParamResponseDayPidParamRspDayPidParam extends $tea.Model {
  kp: number;
  ti: number;
  td: number;
  recommendIndex: number;
  static names(): { [key: string]: string } {
    return {
      kp: 'Kp',
      ti: 'Ti',
      td: 'Td',
      recommendIndex: 'RecommendIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kp: 'number',
      ti: 'number',
      td: 'number',
      recommendIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyReportPidParamResponseDayPidParamRsp extends $tea.Model {
  status: boolean;
  dayPidParam: GetDailyReportPidParamResponseDayPidParamRspDayPidParam;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dayPidParam: 'DayPidParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      dayPidParam: GetDailyReportPidParamResponseDayPidParamRspDayPidParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidProjectsResponsePidProjectList extends $tea.Model {
  pidProjectId: string;
  pidProjectName: string;
  pidProjectDesc: string;
  pidOrganisationId: string;
  static names(): { [key: string]: string } {
    return {
      pidProjectId: 'PidProjectId',
      pidProjectName: 'PidProjectName',
      pidProjectDesc: 'PidProjectDesc',
      pidOrganisationId: 'PidOrganisationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidProjectId: 'string',
      pidProjectName: 'string',
      pidProjectDesc: 'string',
      pidOrganisationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPidTagsResponsePidTagList extends $tea.Model {
  pidTagId: string;
  pidProjectId: string;
  pidTagName: string;
  pidTagType: string;
  uploadProjectId: number;
  static names(): { [key: string]: string } {
    return {
      pidTagId: 'PidTagId',
      pidProjectId: 'PidProjectId',
      pidTagName: 'PidTagName',
      pidTagType: 'PidTagType',
      uploadProjectId: 'UploadProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pidTagId: 'string',
      pidProjectId: 'string',
      pidTagName: 'string',
      pidTagType: 'string',
      uploadProjectId: 'number',
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
    this._endpoint = this.getEndpoint("brain-industrial", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getOpPvCustomValues(request: GetOpPvCustomValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetOpPvCustomValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetOpPvCustomValuesResponse>(await this.doRequest("GetOpPvCustomValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetOpPvCustomValuesResponse({}));
  }

  async submitPidLoopEvaluation(request: SubmitPidLoopEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPidLoopEvaluationResponse> {
    Util.validateModel(request);
    return $tea.cast<SubmitPidLoopEvaluationResponse>(await this.doRequest("SubmitPidLoopEvaluation", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new SubmitPidLoopEvaluationResponse({}));
  }

  async getDefaultAdjustValues(request: GetDefaultAdjustValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultAdjustValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDefaultAdjustValuesResponse>(await this.doRequest("GetDefaultAdjustValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetDefaultAdjustValuesResponse({}));
  }

  async getPvOpAdjustValues(request: GetPvOpAdjustValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetPvOpAdjustValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPvOpAdjustValuesResponse>(await this.doRequest("GetPvOpAdjustValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPvOpAdjustValuesResponse({}));
  }

  async getPvCustomSimulationValues(request: GetPvCustomSimulationValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetPvCustomSimulationValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPvCustomSimulationValuesResponse>(await this.doRequest("GetPvCustomSimulationValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPvCustomSimulationValuesResponse({}));
  }

  async getIdentificateValues(request: GetIdentificateValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetIdentificateValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetIdentificateValuesResponse>(await this.doRequest("GetIdentificateValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetIdentificateValuesResponse({}));
  }

  async getPvIdentSimulationValues(request: GetPvIdentSimulationValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetPvIdentSimulationValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPvIdentSimulationValuesResponse>(await this.doRequest("GetPvIdentSimulationValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPvIdentSimulationValuesResponse({}));
  }

  async getCustomIdentValues(request: GetCustomIdentValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomIdentValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetCustomIdentValuesResponse>(await this.doRequest("GetCustomIdentValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetCustomIdentValuesResponse({}));
  }

  async getPidProjectReportOverview(request: GetPidProjectReportOverviewRequest, runtime: $Util.RuntimeOptions): Promise<GetPidProjectReportOverviewResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPidProjectReportOverviewResponse>(await this.doRequest("GetPidProjectReportOverview", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPidProjectReportOverviewResponse({}));
  }

  async getLowModelPerformValues(request: GetLowModelPerformValuesRequest, runtime: $Util.RuntimeOptions): Promise<GetLowModelPerformValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetLowModelPerformValuesResponse>(await this.doRequest("GetLowModelPerformValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetLowModelPerformValuesResponse({}));
  }

  async listPidLoopEvaluations(request: ListPidLoopEvaluationsRequest, runtime: $Util.RuntimeOptions): Promise<ListPidLoopEvaluationsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPidLoopEvaluationsResponse>(await this.doRequest("ListPidLoopEvaluations", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListPidLoopEvaluationsResponse({}));
  }

  async listLoopParameterTagValues(request: ListLoopParameterTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListLoopParameterTagValuesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListLoopParameterTagValuesResponse>(await this.doRequest("ListLoopParameterTagValues", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListLoopParameterTagValuesResponse({}));
  }

  async getPidLoopParameter(request: GetPidLoopParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetPidLoopParameterResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPidLoopParameterResponse>(await this.doRequest("GetPidLoopParameter", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPidLoopParameterResponse({}));
  }

  async getDailyReportInfo(request: GetDailyReportInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDailyReportInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDailyReportInfoResponse>(await this.doRequest("GetDailyReportInfo", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetDailyReportInfoResponse({}));
  }

  async getPidLoop(request: GetPidLoopRequest, runtime: $Util.RuntimeOptions): Promise<GetPidLoopResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPidLoopResponse>(await this.doRequest("GetPidLoop", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPidLoopResponse({}));
  }

  async createPidProject(request: CreatePidProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreatePidProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePidProjectResponse>(await this.doRequest("CreatePidProject", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new CreatePidProjectResponse({}));
  }

  async listIdentModels(request: ListIdentModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListIdentModelsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListIdentModelsResponse>(await this.doRequest("ListIdentModels", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListIdentModelsResponse({}));
  }

  async listPidDataProcess(request: ListPidDataProcessRequest, runtime: $Util.RuntimeOptions): Promise<ListPidDataProcessResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPidDataProcessResponse>(await this.doRequest("ListPidDataProcess", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListPidDataProcessResponse({}));
  }

  async addCustomIdentModel(request: AddCustomIdentModelRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomIdentModelResponse> {
    Util.validateModel(request);
    return $tea.cast<AddCustomIdentModelResponse>(await this.doRequest("AddCustomIdentModel", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new AddCustomIdentModelResponse({}));
  }

  async getLoopParameterStep(request: GetLoopParameterStepRequest, runtime: $Util.RuntimeOptions): Promise<GetLoopParameterStepResponse> {
    Util.validateModel(request);
    return $tea.cast<GetLoopParameterStepResponse>(await this.doRequest("GetLoopParameterStep", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetLoopParameterStepResponse({}));
  }

  async listPidLoops(request: ListPidLoopsRequest, runtime: $Util.RuntimeOptions): Promise<ListPidLoopsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPidLoopsResponse>(await this.doRequest("ListPidLoops", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListPidLoopsResponse({}));
  }

  async movePidOrganization(request: MovePidOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<MovePidOrganizationResponse> {
    Util.validateModel(request);
    return $tea.cast<MovePidOrganizationResponse>(await this.doRequest("MovePidOrganization", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new MovePidOrganizationResponse({}));
  }

  async updatePidLoop(request: UpdatePidLoopRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePidLoopResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdatePidLoopResponse>(await this.doRequest("UpdatePidLoop", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new UpdatePidLoopResponse({}));
  }

  async addPidLoopToSchedule(request: AddPidLoopToScheduleRequest, runtime: $Util.RuntimeOptions): Promise<AddPidLoopToScheduleResponse> {
    Util.validateModel(request);
    return $tea.cast<AddPidLoopToScheduleResponse>(await this.doRequest("AddPidLoopToSchedule", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new AddPidLoopToScheduleResponse({}));
  }

  async getParsingTagTask(request: GetParsingTagTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetParsingTagTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<GetParsingTagTaskResponse>(await this.doRequest("GetParsingTagTask", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetParsingTagTaskResponse({}));
  }

  async getPidLoopLatestTaskStatus(request: GetPidLoopLatestTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPidLoopLatestTaskStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPidLoopLatestTaskStatusResponse>(await this.doRequest("GetPidLoopLatestTaskStatus", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPidLoopLatestTaskStatusResponse({}));
  }

  async deletePidLoop(request: DeletePidLoopRequest, runtime: $Util.RuntimeOptions): Promise<DeletePidLoopResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePidLoopResponse>(await this.doRequest("DeletePidLoop", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new DeletePidLoopResponse({}));
  }

  async getSummaryReportInfo(request: GetSummaryReportInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryReportInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSummaryReportInfoResponse>(await this.doRequest("GetSummaryReportInfo", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetSummaryReportInfoResponse({}));
  }

  async getSummaryReportDataTrend(request: GetSummaryReportDataTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryReportDataTrendResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSummaryReportDataTrendResponse>(await this.doRequest("GetSummaryReportDataTrend", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetSummaryReportDataTrendResponse({}));
  }

  async getSummaryReportChart(request: GetSummaryReportChartRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryReportChartResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSummaryReportChartResponse>(await this.doRequest("GetSummaryReportChart", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetSummaryReportChartResponse({}));
  }

  async getDailyReportDataTrend(request: GetDailyReportDataTrendRequest, runtime: $Util.RuntimeOptions): Promise<GetDailyReportDataTrendResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDailyReportDataTrendResponse>(await this.doRequest("GetDailyReportDataTrend", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetDailyReportDataTrendResponse({}));
  }

  async listTagValueTrend(request: ListTagValueTrendRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValueTrendResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagValueTrendResponse>(await this.doRequest("ListTagValueTrend", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListTagValueTrendResponse({}));
  }

  async getDailyReportChart(request: GetDailyReportChartRequest, runtime: $Util.RuntimeOptions): Promise<GetDailyReportChartResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDailyReportChartResponse>(await this.doRequest("GetDailyReportChart", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetDailyReportChartResponse({}));
  }

  async listPidOrganizations(request: ListPidOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<ListPidOrganizationsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPidOrganizationsResponse>(await this.doRequest("ListPidOrganizations", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListPidOrganizationsResponse({}));
  }

  async createPidDataProcesses(request: CreatePidDataProcessesRequest, runtime: $Util.RuntimeOptions): Promise<CreatePidDataProcessesResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePidDataProcessesResponse>(await this.doRequest("CreatePidDataProcesses", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new CreatePidDataProcessesResponse({}));
  }

  async getDailyReportPidParam(request: GetDailyReportPidParamRequest, runtime: $Util.RuntimeOptions): Promise<GetDailyReportPidParamResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDailyReportPidParamResponse>(await this.doRequest("GetDailyReportPidParam", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetDailyReportPidParamResponse({}));
  }

  async addParameterToPidLoop(request: AddParameterToPidLoopRequest, runtime: $Util.RuntimeOptions): Promise<AddParameterToPidLoopResponse> {
    Util.validateModel(request);
    return $tea.cast<AddParameterToPidLoopResponse>(await this.doRequest("AddParameterToPidLoop", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new AddParameterToPidLoopResponse({}));
  }

  async listPidProjects(request: ListPidProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListPidProjectsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPidProjectsResponse>(await this.doRequest("ListPidProjects", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListPidProjectsResponse({}));
  }

  async deletePidOrganization(request: DeletePidOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<DeletePidOrganizationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePidOrganizationResponse>(await this.doRequest("DeletePidOrganization", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new DeletePidOrganizationResponse({}));
  }

  async setPidLoopDefaultParameter(request: SetPidLoopDefaultParameterRequest, runtime: $Util.RuntimeOptions): Promise<SetPidLoopDefaultParameterResponse> {
    Util.validateModel(request);
    return $tea.cast<SetPidLoopDefaultParameterResponse>(await this.doRequest("SetPidLoopDefaultParameter", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new SetPidLoopDefaultParameterResponse({}));
  }

  async getPidOrganizationParentIds(request: GetPidOrganizationParentIdsRequest, runtime: $Util.RuntimeOptions): Promise<GetPidOrganizationParentIdsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPidOrganizationParentIdsResponse>(await this.doRequest("GetPidOrganizationParentIds", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new GetPidOrganizationParentIdsResponse({}));
  }

  async createPidOrganization(request: CreatePidOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<CreatePidOrganizationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePidOrganizationResponse>(await this.doRequest("CreatePidOrganization", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new CreatePidOrganizationResponse({}));
  }

  async updatePidOrganization(request: UpdatePidOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePidOrganizationResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdatePidOrganizationResponse>(await this.doRequest("UpdatePidOrganization", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new UpdatePidOrganizationResponse({}));
  }

  async createPidLoop(request: CreatePidLoopRequest, runtime: $Util.RuntimeOptions): Promise<CreatePidLoopResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePidLoopResponse>(await this.doRequest("CreatePidLoop", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new CreatePidLoopResponse({}));
  }

  async updatePidProject(request: UpdatePidProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePidProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdatePidProjectResponse>(await this.doRequest("UpdatePidProject", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new UpdatePidProjectResponse({}));
  }

  async listPidTags(request: ListPidTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListPidTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPidTagsResponse>(await this.doRequest("ListPidTags", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new ListPidTagsResponse({}));
  }

  async deletePidDataProcess(request: DeletePidDataProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeletePidDataProcessResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePidDataProcessResponse>(await this.doRequest("DeletePidDataProcess", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new DeletePidDataProcessResponse({}));
  }

  async createPidDataSource(request: CreatePidDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePidDataSourceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePidDataSourceResponse>(await this.doRequest("CreatePidDataSource", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new CreatePidDataSourceResponse({}));
  }

  async createPidDataSourceAdvance(request: CreatePidDataSourceAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePidDataSourceResponse> {
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
      product: "brain-industrial",
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
    let createPidDataSourcereq = new CreatePidDataSourceRequest({ });
    RPCUtil.convert(request, createPidDataSourcereq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.ossPathObject,
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
    createPidDataSourcereq.ossPath = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let createPidDataSourceResp = await this.createPidDataSource(createPidDataSourcereq, runtime);
    return createPidDataSourceResp;
  }

  async deletePidProject(request: DeletePidProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeletePidProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePidProjectResponse>(await this.doRequest("DeletePidProject", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new DeletePidProjectResponse({}));
  }

  async deletePidTag(request: DeletePidTagRequest, runtime: $Util.RuntimeOptions): Promise<DeletePidTagResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePidTagResponse>(await this.doRequest("DeletePidTag", "HTTPS", "POST", "2020-09-20", "AK", null, $tea.toMap(request), runtime), new DeletePidTagResponse({}));
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
