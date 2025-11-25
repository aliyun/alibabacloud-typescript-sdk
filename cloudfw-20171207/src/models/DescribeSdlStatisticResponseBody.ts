// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlStatisticResponseBodySdlStatisticRespSdlAssetTopList extends $dara.Model {
  /**
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @example
   * 116.62.66.XXX
   */
  publicIp?: string;
  /**
   * @example
   * 0
   */
  trafficBytes?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      publicIp: 'PublicIp',
      trafficBytes: 'TrafficBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      publicIp: 'string',
      trafficBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlStatisticResponseBodySdlStatisticRespSdlDstTopList extends $dara.Model {
  /**
   * @example
   * 47.101.68.XXX
   */
  publicIp?: string;
  /**
   * @example
   * 0
   */
  trafficBytes?: number;
  static names(): { [key: string]: string } {
    return {
      publicIp: 'PublicIp',
      trafficBytes: 'TrafficBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIp: 'string',
      trafficBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlStatisticResponseBodySdlStatisticRespSdlEventTypeCountList extends $dara.Model {
  /**
   * @example
   * 9
   */
  count?: string;
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlStatisticResponseBodySdlStatisticResp extends $dara.Model {
  sdlAssetTopList?: DescribeSdlStatisticResponseBodySdlStatisticRespSdlAssetTopList[];
  sdlDstTopList?: DescribeSdlStatisticResponseBodySdlStatisticRespSdlDstTopList[];
  sdlEventTypeCountList?: DescribeSdlStatisticResponseBodySdlStatisticRespSdlEventTypeCountList[];
  static names(): { [key: string]: string } {
    return {
      sdlAssetTopList: 'SdlAssetTopList',
      sdlDstTopList: 'SdlDstTopList',
      sdlEventTypeCountList: 'SdlEventTypeCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdlAssetTopList: { 'type': 'array', 'itemType': DescribeSdlStatisticResponseBodySdlStatisticRespSdlAssetTopList },
      sdlDstTopList: { 'type': 'array', 'itemType': DescribeSdlStatisticResponseBodySdlStatisticRespSdlDstTopList },
      sdlEventTypeCountList: { 'type': 'array', 'itemType': DescribeSdlStatisticResponseBodySdlStatisticRespSdlEventTypeCountList },
    };
  }

  validate() {
    if(Array.isArray(this.sdlAssetTopList)) {
      $dara.Model.validateArray(this.sdlAssetTopList);
    }
    if(Array.isArray(this.sdlDstTopList)) {
      $dara.Model.validateArray(this.sdlDstTopList);
    }
    if(Array.isArray(this.sdlEventTypeCountList)) {
      $dara.Model.validateArray(this.sdlEventTypeCountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlStatisticResponseBody extends $dara.Model {
  /**
   * @example
   * 337A4DBA-8A01-5E9C-99CA-84293E13****
   */
  requestId?: string;
  sdlStatisticResp?: DescribeSdlStatisticResponseBodySdlStatisticResp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdlStatisticResp: 'SdlStatisticResp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdlStatisticResp: DescribeSdlStatisticResponseBodySdlStatisticResp,
    };
  }

  validate() {
    if(this.sdlStatisticResp && typeof (this.sdlStatisticResp as any).validate === 'function') {
      (this.sdlStatisticResp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

