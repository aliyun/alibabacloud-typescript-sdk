// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordNotifyConfigResponseBodyLiveRecordNotifyConfig extends $dara.Model {
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
   * Indicates whether recording status callbacks are enabled. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  needStatusNotify?: boolean;
  notifyAuthKey?: string;
  notifyReqAuth?: boolean;
  /**
   * @remarks
   * The recording callback URL.
   * 
   * @example
   * http://learn.aliyundoc.com/examplecallback.action
   */
  notifyUrl?: string;
  /**
   * @remarks
   * The callback URL for on-demand recording.
   * 
   * @example
   * http://guide.aliyundoc.com/ondemandcallback.action
   */
  onDemandUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      needStatusNotify: 'NeedStatusNotify',
      notifyAuthKey: 'NotifyAuthKey',
      notifyReqAuth: 'NotifyReqAuth',
      notifyUrl: 'NotifyUrl',
      onDemandUrl: 'OnDemandUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      needStatusNotify: 'boolean',
      notifyAuthKey: 'string',
      notifyReqAuth: 'boolean',
      notifyUrl: 'string',
      onDemandUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveRecordNotifyConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of callbacks for live stream recording.
   */
  liveRecordNotifyConfig?: DescribeLiveRecordNotifyConfigResponseBodyLiveRecordNotifyConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5056369B-D337-499E-B8B7-B761BD37B08A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveRecordNotifyConfig: 'LiveRecordNotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordNotifyConfig: DescribeLiveRecordNotifyConfigResponseBodyLiveRecordNotifyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveRecordNotifyConfig && typeof (this.liveRecordNotifyConfig as any).validate === 'function') {
      (this.liveRecordNotifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

