// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://guide.aliyundoc.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The callback template. The following fields are configured:
   * 
   * *   **{DomainName}**: the streaming domain.
   * *   **{AppName}**: the name of the application to which the live stream belongs.
   * *   **{StreamName}**: the name of the live stream.
   * *   **{Timestamp}**: the time when the callback is returned. The value of this field is a UNIX timestamp. Unit: seconds.
   * *   **{Result}**: the moderation results.
   * 
   * @example
   * {\\"domain\\":{DomainName},\\"app\\":{AppName},\\"stream\\":{StreamName},\\"timestamp\\":{Timestamp},\\"result\\":{Result}}
   */
  callbackTemplate?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      callbackTemplate: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigList extends $dara.Model {
  liveAudioAuditNotifyConfig?: DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig[];
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditNotifyConfig: 'LiveAudioAuditNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditNotifyConfig: { 'type': 'array', 'itemType': DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig },
    };
  }

  validate() {
    if(Array.isArray(this.liveAudioAuditNotifyConfig)) {
      $dara.Model.validateArray(this.liveAudioAuditNotifyConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditNotifyConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of callbacks for audio moderation results.
   */
  liveAudioAuditNotifyConfigList?: DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B908FF89-B03C-4831-B55B-48D2A******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditNotifyConfigList: 'LiveAudioAuditNotifyConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditNotifyConfigList: DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveAudioAuditNotifyConfigList && typeof (this.liveAudioAuditNotifyConfigList as any).validate === 'function') {
      (this.liveAudioAuditNotifyConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

