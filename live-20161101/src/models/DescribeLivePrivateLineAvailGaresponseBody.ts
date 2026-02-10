// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePrivateLineAvailGAResponseBodyLivePrivateLineAvailGAsLivePrivateLineAvailGA extends $dara.Model {
  accelerationArea?: string;
  accelerationType?: string;
  appName?: string;
  bindingStatus?: string;
  domainName?: string;
  IP?: string;
  instanceId?: string;
  status?: string;
  streamName?: string;
  uid?: string;
  videoCenter?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationArea: 'AccelerationArea',
      accelerationType: 'AccelerationType',
      appName: 'AppName',
      bindingStatus: 'BindingStatus',
      domainName: 'DomainName',
      IP: 'IP',
      instanceId: 'InstanceId',
      status: 'Status',
      streamName: 'StreamName',
      uid: 'Uid',
      videoCenter: 'VideoCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationArea: 'string',
      accelerationType: 'string',
      appName: 'string',
      bindingStatus: 'string',
      domainName: 'string',
      IP: 'string',
      instanceId: 'string',
      status: 'string',
      streamName: 'string',
      uid: 'string',
      videoCenter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePrivateLineAvailGAResponseBodyLivePrivateLineAvailGAs extends $dara.Model {
  livePrivateLineAvailGA?: DescribeLivePrivateLineAvailGAResponseBodyLivePrivateLineAvailGAsLivePrivateLineAvailGA[];
  static names(): { [key: string]: string } {
    return {
      livePrivateLineAvailGA: 'LivePrivateLineAvailGA',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePrivateLineAvailGA: { 'type': 'array', 'itemType': DescribeLivePrivateLineAvailGAResponseBodyLivePrivateLineAvailGAsLivePrivateLineAvailGA },
    };
  }

  validate() {
    if(Array.isArray(this.livePrivateLineAvailGA)) {
      $dara.Model.validateArray(this.livePrivateLineAvailGA);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePrivateLineAvailGAResponseBody extends $dara.Model {
  livePrivateLineAvailGAs?: DescribeLivePrivateLineAvailGAResponseBodyLivePrivateLineAvailGAs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4865B85-664B-19D3-BB16-C62FB83C8226
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePrivateLineAvailGAs: 'LivePrivateLineAvailGAs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePrivateLineAvailGAs: DescribeLivePrivateLineAvailGAResponseBodyLivePrivateLineAvailGAs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePrivateLineAvailGAs && typeof (this.livePrivateLineAvailGAs as any).validate === 'function') {
      (this.livePrivateLineAvailGAs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

