// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveUpstreamQosDataResponseBodyDataDetailData extends $dara.Model {
  connectDur?: number;
  connectFailedCount?: number;
  count?: number;
  firstDataDur?: number;
  firstDataFailedCount?: number;
  firstFrameDur?: number;
  firstFrameSuccessCount?: number;
  statusCode2Xx?: number;
  statusCode3Xx?: number;
  statusCode4Xx?: number;
  statusCode5Xx?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      connectDur: 'ConnectDur',
      connectFailedCount: 'ConnectFailedCount',
      count: 'Count',
      firstDataDur: 'FirstDataDur',
      firstDataFailedCount: 'FirstDataFailedCount',
      firstFrameDur: 'FirstFrameDur',
      firstFrameSuccessCount: 'FirstFrameSuccessCount',
      statusCode2Xx: 'StatusCode2Xx',
      statusCode3Xx: 'StatusCode3Xx',
      statusCode4Xx: 'StatusCode4Xx',
      statusCode5Xx: 'StatusCode5Xx',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDur: 'number',
      connectFailedCount: 'number',
      count: 'number',
      firstDataDur: 'number',
      firstDataFailedCount: 'number',
      firstFrameDur: 'number',
      firstFrameSuccessCount: 'number',
      statusCode2Xx: 'number',
      statusCode3Xx: 'number',
      statusCode4Xx: 'number',
      statusCode5Xx: 'number',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveUpstreamQosDataResponseBodyData extends $dara.Model {
  cdnDomain?: string;
  cdnIsp?: string;
  cdnOcid?: string;
  cdnProvince?: string;
  detailData?: LiveUpstreamQosDataResponseBodyDataDetailData[];
  kwaiSidc?: string;
  kwaiTsc?: number;
  upstreamDomain?: string;
  static names(): { [key: string]: string } {
    return {
      cdnDomain: 'CdnDomain',
      cdnIsp: 'CdnIsp',
      cdnOcid: 'CdnOcid',
      cdnProvince: 'CdnProvince',
      detailData: 'DetailData',
      kwaiSidc: 'KwaiSidc',
      kwaiTsc: 'KwaiTsc',
      upstreamDomain: 'UpstreamDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnDomain: 'string',
      cdnIsp: 'string',
      cdnOcid: 'string',
      cdnProvince: 'string',
      detailData: { 'type': 'array', 'itemType': LiveUpstreamQosDataResponseBodyDataDetailData },
      kwaiSidc: 'string',
      kwaiTsc: 'number',
      upstreamDomain: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailData)) {
      $dara.Model.validateArray(this.detailData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveUpstreamQosDataResponseBody extends $dara.Model {
  data?: LiveUpstreamQosDataResponseBodyData[];
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': LiveUpstreamQosDataResponseBodyData },
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

