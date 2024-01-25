// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeHuYaRecordByDomainRequest extends $tea.Model {
  businessType?: string;
  domain?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domain: 'Domain',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domain: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaRecordByDomainResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  resultDesc?: DescribeHuYaRecordByDomainResponseBodyResultDesc[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      resultDesc: 'ResultDesc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      resultDesc: { 'type': 'array', 'itemType': DescribeHuYaRecordByDomainResponseBodyResultDesc },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaRecordByDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHuYaRecordByDomainResponseBody;
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
      body: DescribeHuYaRecordByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaScreenshotByDomainRequest extends $tea.Model {
  businessType?: string;
  domain?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domain: 'Domain',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domain: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaScreenshotByDomainResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  resultDesc?: DescribeHuYaScreenshotByDomainResponseBodyResultDesc[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      resultDesc: 'ResultDesc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      resultDesc: { 'type': 'array', 'itemType': DescribeHuYaScreenshotByDomainResponseBodyResultDesc },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaScreenshotByDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHuYaScreenshotByDomainResponseBody;
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
      body: DescribeHuYaScreenshotByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaTranscodeByDomainRequest extends $tea.Model {
  businessType?: string;
  domain?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domain: 'Domain',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domain: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaTranscodeByDomainResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  resultDesc?: DescribeHuYaTranscodeByDomainResponseBodyResultDesc[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      resultDesc: 'ResultDesc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      resultDesc: { 'type': 'array', 'itemType': DescribeHuYaTranscodeByDomainResponseBodyResultDesc },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaTranscodeByDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHuYaTranscodeByDomainResponseBody;
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
      body: DescribeHuYaTranscodeByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterBypassRtUsageByTaskProfileRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterBypassRtUsageByTaskProfileResponseBody extends $tea.Model {
  data?: DescribeMeterBypassRtUsageByTaskProfileResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterBypassRtUsageByTaskProfileResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterBypassRtUsageByTaskProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterBypassRtUsageByTaskProfileResponseBody;
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
      body: DescribeMeterBypassRtUsageByTaskProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterMpuTranscodeRtUsageByTaskProfileRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterMpuTranscodeRtUsageByTaskProfileResponseBody extends $tea.Model {
  data?: DescribeMeterMpuTranscodeRtUsageByTaskProfileResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterMpuTranscodeRtUsageByTaskProfileResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterMpuTranscodeRtUsageByTaskProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterMpuTranscodeRtUsageByTaskProfileResponseBody;
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
      body: DescribeMeterMpuTranscodeRtUsageByTaskProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRecordRtUsageByTaskProfileRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRecordRtUsageByTaskProfileResponseBody extends $tea.Model {
  data?: DescribeMeterRecordRtUsageByTaskProfileResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRecordRtUsageByTaskProfileResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRecordRtUsageByTaskProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRecordRtUsageByTaskProfileResponseBody;
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
      body: DescribeMeterRecordRtUsageByTaskProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcApproxPeakRateRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcApproxPeakRateResponseBody extends $tea.Model {
  approxPeakRate?: number;
  approxPeakTs?: number;
  peakRateVoList?: DescribeMeterRtcApproxPeakRateResponseBodyPeakRateVoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approxPeakRate: 'ApproxPeakRate',
      approxPeakTs: 'ApproxPeakTs',
      peakRateVoList: 'PeakRateVoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approxPeakRate: 'number',
      approxPeakTs: 'number',
      peakRateVoList: { 'type': 'array', 'itemType': DescribeMeterRtcApproxPeakRateResponseBodyPeakRateVoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcApproxPeakRateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcApproxPeakRateResponseBody;
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
      body: DescribeMeterRtcApproxPeakRateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcChannelCntDataRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcChannelCntDataResponseBody extends $tea.Model {
  data?: DescribeMeterRtcChannelCntDataResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcChannelCntDataResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcChannelCntDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcChannelCntDataResponseBody;
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
      body: DescribeMeterRtcChannelCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcDurationRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcDurationResponseBody extends $tea.Model {
  data?: DescribeMeterRtcDurationResponseBodyData[];
  readyTs?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      readyTs: 'ReadyTs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcDurationResponseBodyData },
      readyTs: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcDurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcDurationResponseBody;
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
      body: DescribeMeterRtcDurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakChannelCntDataRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakChannelCntDataResponseBody extends $tea.Model {
  data?: DescribeMeterRtcPeakChannelCntDataResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcPeakChannelCntDataResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakChannelCntDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcPeakChannelCntDataResponseBody;
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
      body: DescribeMeterRtcPeakChannelCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakUserCntDataRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakUserCntDataResponseBody extends $tea.Model {
  data?: DescribeMeterRtcPeakUserCntDataResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcPeakUserCntDataResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakUserCntDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcPeakUserCntDataResponseBody;
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
      body: DescribeMeterRtcPeakUserCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtBandWidthUsageRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtBandWidthUsageResponseBody extends $tea.Model {
  data?: DescribeMeterRtcRtBandWidthUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcRtBandWidthUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtBandWidthUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcRtBandWidthUsageResponseBody;
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
      body: DescribeMeterRtcRtBandWidthUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtFlowUsageRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtFlowUsageResponseBody extends $tea.Model {
  data?: DescribeMeterRtcRtFlowUsageResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcRtFlowUsageResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtFlowUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcRtFlowUsageResponseBody;
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
      body: DescribeMeterRtcRtFlowUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcUserCntDataRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  interval?: number;
  serviceArea?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      interval: 'Interval',
      serviceArea: 'ServiceArea',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      interval: 'number',
      serviceArea: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcUserCntDataResponseBody extends $tea.Model {
  data?: DescribeMeterRtcUserCntDataResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterRtcUserCntDataResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcUserCntDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMeterRtcUserCntDataResponseBody;
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
      body: DescribeMeterRtcUserCntDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionEventDetailRequest extends $tea.Model {
  bizDate?: number;
  inputStatus?: string;
  pageNum?: number;
  pageSize?: number;
  VPS?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      inputStatus: 'InputStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      VPS: 'VPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      inputStatus: 'string',
      pageNum: 'number',
      pageSize: 'number',
      VPS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionEventDetailResponseBody extends $tea.Model {
  data?: DescribeNewPlayVideoPlaySessionEventDetailResponseBodyData[];
  pageNum?: number;
  pageSize?: number;
  readyTs?: number;
  requestId?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      readyTs: 'ReadyTs',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeNewPlayVideoPlaySessionEventDetailResponseBodyData },
      pageNum: 'number',
      pageSize: 'number',
      readyTs: 'number',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionEventDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNewPlayVideoPlaySessionEventDetailResponseBody;
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
      body: DescribeNewPlayVideoPlaySessionEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionListRequest extends $tea.Model {
  endTimeStamp?: string;
  inputStatus?: string;
  order?: string;
  pageNum?: number;
  pageSize?: number;
  startTimeStamp?: string;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      endTimeStamp: 'EndTimeStamp',
      inputStatus: 'InputStatus',
      order: 'Order',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTimeStamp: 'StartTimeStamp',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeStamp: 'string',
      inputStatus: 'string',
      order: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTimeStamp: 'string',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionListResponseBody extends $tea.Model {
  data?: DescribeNewPlayVideoPlaySessionListResponseBodyData[];
  pageNum?: number;
  pageSize?: number;
  readyTs?: number;
  requestId?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      readyTs: 'ReadyTs',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeNewPlayVideoPlaySessionListResponseBodyData },
      pageNum: 'number',
      pageSize: 'number',
      readyTs: 'number',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNewPlayVideoPlaySessionListResponseBody;
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
      body: DescribeNewPlayVideoPlaySessionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessioninfoRequest extends $tea.Model {
  VPS?: string;
  static names(): { [key: string]: string } {
    return {
      VPS: 'VPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VPS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessioninfoResponseBody extends $tea.Model {
  data?: DescribeNewPlayVideoPlaySessioninfoResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeNewPlayVideoPlaySessioninfoResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessioninfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNewPlayVideoPlaySessioninfoResponseBody;
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
      body: DescribeNewPlayVideoPlaySessioninfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaRecordByDomainResponseBodyResultDesc extends $tea.Model {
  businessType?: string;
  domain?: string;
  recordDuration?: number;
  recordNum?: number;
  recordType?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domain: 'Domain',
      recordDuration: 'RecordDuration',
      recordNum: 'RecordNum',
      recordType: 'RecordType',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domain: 'string',
      recordDuration: 'number',
      recordNum: 'number',
      recordType: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaScreenshotByDomainResponseBodyResultDesc extends $tea.Model {
  businessType?: string;
  domain?: string;
  screenshotNum?: number;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domain: 'Domain',
      screenshotNum: 'ScreenshotNum',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domain: 'string',
      screenshotNum: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHuYaTranscodeByDomainResponseBodyResultDesc extends $tea.Model {
  businessType?: string;
  domain?: string;
  time?: string;
  transcodeDuration?: number;
  transcodeNum?: number;
  transcodeType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domain: 'Domain',
      time: 'Time',
      transcodeDuration: 'TranscodeDuration',
      transcodeNum: 'TranscodeNum',
      transcodeType: 'TranscodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domain: 'string',
      time: 'string',
      transcodeDuration: 'number',
      transcodeNum: 'number',
      transcodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterBypassRtUsageByTaskProfileResponseBodyData extends $tea.Model {
  duration?: number;
  ratio?: string;
  serviceArea?: string;
  taskProfile?: string;
  timestamp?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      ratio: 'Ratio',
      serviceArea: 'ServiceArea',
      taskProfile: 'TaskProfile',
      timestamp: 'Timestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      ratio: 'string',
      serviceArea: 'string',
      taskProfile: 'string',
      timestamp: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterMpuTranscodeRtUsageByTaskProfileResponseBodyData extends $tea.Model {
  duration?: number;
  serviceArea?: string;
  taskProfile?: string;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      serviceArea: 'ServiceArea',
      taskProfile: 'TaskProfile',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      serviceArea: 'string',
      taskProfile: 'string',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRecordRtUsageByTaskProfileResponseBodyData extends $tea.Model {
  duration?: number;
  ratio?: string;
  serviceArea?: string;
  taskProfile?: string;
  timestamp?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      ratio: 'Ratio',
      serviceArea: 'ServiceArea',
      taskProfile: 'TaskProfile',
      timestamp: 'Timestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      ratio: 'string',
      serviceArea: 'string',
      taskProfile: 'string',
      timestamp: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcApproxPeakRateResponseBodyPeakRateVoList extends $tea.Model {
  peakRate?: number;
  peakTs?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      peakRate: 'PeakRate',
      peakTs: 'PeakTs',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakRate: 'number',
      peakTs: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcChannelCntDataResponseBodyData extends $tea.Model {
  channelCnt?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      channelCnt: 'ChannelCnt',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCnt: 'number',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcDurationResponseBodyData extends $tea.Model {
  audioDuration?: number;
  contentDuration?: number;
  timestamp?: number;
  totalDuration?: number;
  v1080Duration?: number;
  v480Duration?: number;
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
      contentDuration: 'ContentDuration',
      timestamp: 'Timestamp',
      totalDuration: 'TotalDuration',
      v1080Duration: 'V1080Duration',
      v480Duration: 'V480Duration',
      v720Duration: 'V720Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDuration: 'number',
      contentDuration: 'number',
      timestamp: 'number',
      totalDuration: 'number',
      v1080Duration: 'number',
      v480Duration: 'number',
      v720Duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakChannelCntDataResponseBodyData extends $tea.Model {
  activeChannelPeak?: number;
  activeChannelPeakTime?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      activeChannelPeak: 'ActiveChannelPeak',
      activeChannelPeakTime: 'ActiveChannelPeakTime',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeChannelPeak: 'number',
      activeChannelPeakTime: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcPeakUserCntDataResponseBodyData extends $tea.Model {
  activeUserPeak?: number;
  activeUserPeakTime?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      activeUserPeak: 'ActiveUserPeak',
      activeUserPeakTime: 'ActiveUserPeakTime',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserPeak: 'number',
      activeUserPeakTime: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtBandWidthUsageResponseBodyData extends $tea.Model {
  anchorPeakRate?: number;
  anchorPeakTs?: number;
  audiencePeakRate?: number;
  audiencePeakTs?: number;
  peakRate?: number;
  peakTs?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      anchorPeakRate: 'AnchorPeakRate',
      anchorPeakTs: 'AnchorPeakTs',
      audiencePeakRate: 'AudiencePeakRate',
      audiencePeakTs: 'AudiencePeakTs',
      peakRate: 'PeakRate',
      peakTs: 'PeakTs',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorPeakRate: 'number',
      anchorPeakTs: 'number',
      audiencePeakRate: 'number',
      audiencePeakTs: 'number',
      peakRate: 'number',
      peakTs: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcRtFlowUsageResponseBodyData extends $tea.Model {
  anchorFlowValue?: number;
  audienceFlowValue?: number;
  flowValue?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      anchorFlowValue: 'AnchorFlowValue',
      audienceFlowValue: 'AudienceFlowValue',
      flowValue: 'FlowValue',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorFlowValue: 'number',
      audienceFlowValue: 'number',
      flowValue: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterRtcUserCntDataResponseBodyData extends $tea.Model {
  activeUserCnt?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      activeUserCnt: 'ActiveUserCnt',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCnt: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionEventDetailResponseBodyData extends $tea.Model {
  bizTime?: string;
  cost?: string;
  details?: string;
  eventName?: string;
  IP?: string;
  ISP?: string;
  isNormal?: number;
  networkType?: string;
  region?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      bizTime: 'BizTime',
      cost: 'Cost',
      details: 'Details',
      eventName: 'EventName',
      IP: 'IP',
      ISP: 'ISP',
      isNormal: 'IsNormal',
      networkType: 'NetworkType',
      region: 'Region',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTime: 'string',
      cost: 'string',
      details: 'string',
      eventName: 'string',
      IP: 'string',
      ISP: 'string',
      isNormal: 'number',
      networkType: 'string',
      region: 'string',
      subject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessionListResponseBodyData extends $tea.Model {
  gmtModifiedTime?: string;
  status?: string;
  traceId?: string;
  UUID?: string;
  VPS?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModifiedTime: 'GmtModifiedTime',
      status: 'Status',
      traceId: 'TraceId',
      UUID: 'UUID',
      VPS: 'VPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModifiedTime: 'string',
      status: 'string',
      traceId: 'string',
      UUID: 'string',
      VPS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewPlayVideoPlaySessioninfoResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersion?: string;
  deviceBrand?: string;
  deviceModel?: string;
  OS?: string;
  OV?: string;
  terminalType?: string;
  VPS?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      deviceBrand: 'DeviceBrand',
      deviceModel: 'DeviceModel',
      OS: 'OS',
      OV: 'OV',
      terminalType: 'TerminalType',
      VPS: 'VPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      deviceBrand: 'string',
      deviceModel: 'string',
      OS: 'string',
      OV: 'string',
      terminalType: 'string',
      VPS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vdmeter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeHuYaRecordByDomainWithOptions(request: DescribeHuYaRecordByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHuYaRecordByDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHuYaRecordByDomain",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHuYaRecordByDomainResponse>(await this.callApi(params, req, runtime), new DescribeHuYaRecordByDomainResponse({}));
  }

  async describeHuYaRecordByDomain(request: DescribeHuYaRecordByDomainRequest): Promise<DescribeHuYaRecordByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHuYaRecordByDomainWithOptions(request, runtime);
  }

  async describeHuYaScreenshotByDomainWithOptions(request: DescribeHuYaScreenshotByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHuYaScreenshotByDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHuYaScreenshotByDomain",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHuYaScreenshotByDomainResponse>(await this.callApi(params, req, runtime), new DescribeHuYaScreenshotByDomainResponse({}));
  }

  async describeHuYaScreenshotByDomain(request: DescribeHuYaScreenshotByDomainRequest): Promise<DescribeHuYaScreenshotByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHuYaScreenshotByDomainWithOptions(request, runtime);
  }

  async describeHuYaTranscodeByDomainWithOptions(request: DescribeHuYaTranscodeByDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHuYaTranscodeByDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHuYaTranscodeByDomain",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHuYaTranscodeByDomainResponse>(await this.callApi(params, req, runtime), new DescribeHuYaTranscodeByDomainResponse({}));
  }

  async describeHuYaTranscodeByDomain(request: DescribeHuYaTranscodeByDomainRequest): Promise<DescribeHuYaTranscodeByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHuYaTranscodeByDomainWithOptions(request, runtime);
  }

  async describeMeterBypassRtUsageByTaskProfileWithOptions(request: DescribeMeterBypassRtUsageByTaskProfileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterBypassRtUsageByTaskProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterBypassRtUsageByTaskProfile",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterBypassRtUsageByTaskProfileResponse>(await this.callApi(params, req, runtime), new DescribeMeterBypassRtUsageByTaskProfileResponse({}));
  }

  async describeMeterBypassRtUsageByTaskProfile(request: DescribeMeterBypassRtUsageByTaskProfileRequest): Promise<DescribeMeterBypassRtUsageByTaskProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterBypassRtUsageByTaskProfileWithOptions(request, runtime);
  }

  async describeMeterMpuTranscodeRtUsageByTaskProfileWithOptions(request: DescribeMeterMpuTranscodeRtUsageByTaskProfileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterMpuTranscodeRtUsageByTaskProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterMpuTranscodeRtUsageByTaskProfile",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterMpuTranscodeRtUsageByTaskProfileResponse>(await this.callApi(params, req, runtime), new DescribeMeterMpuTranscodeRtUsageByTaskProfileResponse({}));
  }

  async describeMeterMpuTranscodeRtUsageByTaskProfile(request: DescribeMeterMpuTranscodeRtUsageByTaskProfileRequest): Promise<DescribeMeterMpuTranscodeRtUsageByTaskProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterMpuTranscodeRtUsageByTaskProfileWithOptions(request, runtime);
  }

  async describeMeterRecordRtUsageByTaskProfileWithOptions(request: DescribeMeterRecordRtUsageByTaskProfileRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRecordRtUsageByTaskProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRecordRtUsageByTaskProfile",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRecordRtUsageByTaskProfileResponse>(await this.callApi(params, req, runtime), new DescribeMeterRecordRtUsageByTaskProfileResponse({}));
  }

  async describeMeterRecordRtUsageByTaskProfile(request: DescribeMeterRecordRtUsageByTaskProfileRequest): Promise<DescribeMeterRecordRtUsageByTaskProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRecordRtUsageByTaskProfileWithOptions(request, runtime);
  }

  async describeMeterRtcApproxPeakRateWithOptions(request: DescribeMeterRtcApproxPeakRateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcApproxPeakRateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcApproxPeakRate",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcApproxPeakRateResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcApproxPeakRateResponse({}));
  }

  async describeMeterRtcApproxPeakRate(request: DescribeMeterRtcApproxPeakRateRequest): Promise<DescribeMeterRtcApproxPeakRateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcApproxPeakRateWithOptions(request, runtime);
  }

  async describeMeterRtcChannelCntDataWithOptions(request: DescribeMeterRtcChannelCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcChannelCntDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcChannelCntData",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcChannelCntDataResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcChannelCntDataResponse({}));
  }

  async describeMeterRtcChannelCntData(request: DescribeMeterRtcChannelCntDataRequest): Promise<DescribeMeterRtcChannelCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcChannelCntDataWithOptions(request, runtime);
  }

  async describeMeterRtcDurationWithOptions(request: DescribeMeterRtcDurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcDurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcDuration",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcDurationResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcDurationResponse({}));
  }

  async describeMeterRtcDuration(request: DescribeMeterRtcDurationRequest): Promise<DescribeMeterRtcDurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcDurationWithOptions(request, runtime);
  }

  async describeMeterRtcPeakChannelCntDataWithOptions(request: DescribeMeterRtcPeakChannelCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcPeakChannelCntDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcPeakChannelCntData",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcPeakChannelCntDataResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcPeakChannelCntDataResponse({}));
  }

  async describeMeterRtcPeakChannelCntData(request: DescribeMeterRtcPeakChannelCntDataRequest): Promise<DescribeMeterRtcPeakChannelCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcPeakChannelCntDataWithOptions(request, runtime);
  }

  async describeMeterRtcPeakUserCntDataWithOptions(request: DescribeMeterRtcPeakUserCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcPeakUserCntDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcPeakUserCntData",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcPeakUserCntDataResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcPeakUserCntDataResponse({}));
  }

  async describeMeterRtcPeakUserCntData(request: DescribeMeterRtcPeakUserCntDataRequest): Promise<DescribeMeterRtcPeakUserCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcPeakUserCntDataWithOptions(request, runtime);
  }

  async describeMeterRtcRtBandWidthUsageWithOptions(request: DescribeMeterRtcRtBandWidthUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcRtBandWidthUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcRtBandWidthUsage",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcRtBandWidthUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcRtBandWidthUsageResponse({}));
  }

  async describeMeterRtcRtBandWidthUsage(request: DescribeMeterRtcRtBandWidthUsageRequest): Promise<DescribeMeterRtcRtBandWidthUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcRtBandWidthUsageWithOptions(request, runtime);
  }

  async describeMeterRtcRtFlowUsageWithOptions(request: DescribeMeterRtcRtFlowUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcRtFlowUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcRtFlowUsage",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcRtFlowUsageResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcRtFlowUsageResponse({}));
  }

  async describeMeterRtcRtFlowUsage(request: DescribeMeterRtcRtFlowUsageRequest): Promise<DescribeMeterRtcRtFlowUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcRtFlowUsageWithOptions(request, runtime);
  }

  async describeMeterRtcUserCntDataWithOptions(request: DescribeMeterRtcUserCntDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeterRtcUserCntDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeterRtcUserCntData",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeterRtcUserCntDataResponse>(await this.callApi(params, req, runtime), new DescribeMeterRtcUserCntDataResponse({}));
  }

  async describeMeterRtcUserCntData(request: DescribeMeterRtcUserCntDataRequest): Promise<DescribeMeterRtcUserCntDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeterRtcUserCntDataWithOptions(request, runtime);
  }

  async describeNewPlayVideoPlaySessionEventDetailWithOptions(request: DescribeNewPlayVideoPlaySessionEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNewPlayVideoPlaySessionEventDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizDate)) {
      query["BizDate"] = request.bizDate;
    }

    if (!Util.isUnset(request.inputStatus)) {
      query["InputStatus"] = request.inputStatus;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.VPS)) {
      query["VPS"] = request.VPS;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNewPlayVideoPlaySessionEventDetail",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNewPlayVideoPlaySessionEventDetailResponse>(await this.callApi(params, req, runtime), new DescribeNewPlayVideoPlaySessionEventDetailResponse({}));
  }

  async describeNewPlayVideoPlaySessionEventDetail(request: DescribeNewPlayVideoPlaySessionEventDetailRequest): Promise<DescribeNewPlayVideoPlaySessionEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNewPlayVideoPlaySessionEventDetailWithOptions(request, runtime);
  }

  async describeNewPlayVideoPlaySessionListWithOptions(request: DescribeNewPlayVideoPlaySessionListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNewPlayVideoPlaySessionListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimeStamp)) {
      query["EndTimeStamp"] = request.endTimeStamp;
    }

    if (!Util.isUnset(request.inputStatus)) {
      query["InputStatus"] = request.inputStatus;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTimeStamp)) {
      query["StartTimeStamp"] = request.startTimeStamp;
    }

    if (!Util.isUnset(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNewPlayVideoPlaySessionList",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNewPlayVideoPlaySessionListResponse>(await this.callApi(params, req, runtime), new DescribeNewPlayVideoPlaySessionListResponse({}));
  }

  async describeNewPlayVideoPlaySessionList(request: DescribeNewPlayVideoPlaySessionListRequest): Promise<DescribeNewPlayVideoPlaySessionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNewPlayVideoPlaySessionListWithOptions(request, runtime);
  }

  async describeNewPlayVideoPlaySessioninfoWithOptions(request: DescribeNewPlayVideoPlaySessioninfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNewPlayVideoPlaySessioninfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.VPS)) {
      query["VPS"] = request.VPS;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNewPlayVideoPlaySessioninfo",
      version: "2021-04-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNewPlayVideoPlaySessioninfoResponse>(await this.callApi(params, req, runtime), new DescribeNewPlayVideoPlaySessioninfoResponse({}));
  }

  async describeNewPlayVideoPlaySessioninfo(request: DescribeNewPlayVideoPlaySessioninfoRequest): Promise<DescribeNewPlayVideoPlaySessioninfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNewPlayVideoPlaySessioninfoWithOptions(request, runtime);
  }

}
