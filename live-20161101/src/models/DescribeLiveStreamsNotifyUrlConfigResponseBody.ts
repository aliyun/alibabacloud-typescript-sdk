// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The ingest domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Exception event callback URL.
   * 
   * @example
   * https://4a7e5f08.r37.cpolar.top/live/Record/call-back/streamException
   */
  exceptionNotifyUrl?: string;
  /**
   * @remarks
   * The authentication key.
   * 
   * @example
   * 123456
   */
  notifyAuthKey?: string;
  /**
   * @remarks
   * Indicates whether callback authentication is enabled. Valid values:
   * 
   * *   yes
   * *   no
   * 
   * @example
   * yes
   */
  notifyReqAuth?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      exceptionNotifyUrl: 'ExceptionNotifyUrl',
      notifyAuthKey: 'NotifyAuthKey',
      notifyReqAuth: 'NotifyReqAuth',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      exceptionNotifyUrl: 'string',
      notifyAuthKey: 'string',
      notifyReqAuth: 'string',
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

export class DescribeLiveStreamsNotifyUrlConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The callback configuration.
   */
  liveStreamsNotifyConfig?: DescribeLiveStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40A4F36D-A7CC-473A-88E7-154F92242566
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamsNotifyConfig: 'LiveStreamsNotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamsNotifyConfig: DescribeLiveStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamsNotifyConfig && typeof (this.liveStreamsNotifyConfig as any).validate === 'function') {
      (this.liveStreamsNotifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

