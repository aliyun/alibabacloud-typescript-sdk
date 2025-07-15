// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDetectNotifyConfigResponseBodyLiveDetectNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://aliyundoc.com
   */
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDetectNotifyConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The callback configuration.
   */
  liveDetectNotifyConfig?: DescribeLiveDetectNotifyConfigResponseBodyLiveDetectNotifyConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveDetectNotifyConfig: 'LiveDetectNotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDetectNotifyConfig: DescribeLiveDetectNotifyConfigResponseBodyLiveDetectNotifyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveDetectNotifyConfig && typeof (this.liveDetectNotifyConfig as any).validate === 'function') {
      (this.liveDetectNotifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

