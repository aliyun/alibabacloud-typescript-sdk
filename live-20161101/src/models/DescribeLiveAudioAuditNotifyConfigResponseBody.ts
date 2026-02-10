// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAudioAuditNotifyConfigResponseBodyLiveAudioAuditNotifyConfigListLiveAudioAuditNotifyConfig extends $dara.Model {
  callback?: string;
  callbackTemplate?: string;
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

