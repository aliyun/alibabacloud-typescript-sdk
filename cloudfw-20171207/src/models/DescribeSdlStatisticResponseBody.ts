// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlStatisticResponseBodySdlStatisticRespSdlAssetTopList extends $dara.Model {
  /**
   * @remarks
   * The asset type.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 116.62.66.XXX
   */
  publicIp?: string;
  /**
   * @remarks
   * The amount of traffic in bytes.
   * 
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
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.101.68.XXX
   */
  publicIp?: string;
  /**
   * @remarks
   * The amount of traffic in bytes.
   * 
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
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 9
   */
  count?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * id_card
   */
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
  /**
   * @remarks
   * A ranked list of sensitive data assets.
   */
  sdlAssetTopList?: DescribeSdlStatisticResponseBodySdlStatisticRespSdlAssetTopList[];
  /**
   * @remarks
   * A ranked list of sensitive data destinations.
   */
  sdlDstTopList?: DescribeSdlStatisticResponseBodySdlStatisticRespSdlDstTopList[];
  /**
   * @remarks
   * A list of counts for each sensitive data event type.
   */
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 337A4DBA-8A01-5E9C-99CA-84293E13****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the sensitive data.
   */
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

