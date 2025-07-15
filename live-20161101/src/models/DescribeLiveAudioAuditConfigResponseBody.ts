// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfigScenes extends $dara.Model {
  scene?: string[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The business type. You can specify a model. The default value is the domain name.
   * 
   * @example
   * example.edu
   */
  bizType?: string;
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
   * The moderation scenarios.
   */
  scenes?: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfigScenes;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizType: 'BizType',
      domainName: 'DomainName',
      scenes: 'Scenes',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizType: 'string',
      domainName: 'string',
      scenes: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfigScenes,
      streamName: 'string',
    };
  }

  validate() {
    if(this.scenes && typeof (this.scenes as any).validate === 'function') {
      (this.scenes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigList extends $dara.Model {
  liveAudioAuditConfig?: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfig[];
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditConfig: 'LiveAudioAuditConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditConfig: { 'type': 'array', 'itemType': DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigListLiveAudioAuditConfig },
    };
  }

  validate() {
    if(Array.isArray(this.liveAudioAuditConfig)) {
      $dara.Model.validateArray(this.liveAudioAuditConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAudioAuditConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of audio moderation configurations.
   */
  liveAudioAuditConfigList?: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BF95F2A-3B24-4CDE-9346-7F6FA86697A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAudioAuditConfigList: 'LiveAudioAuditConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAudioAuditConfigList: DescribeLiveAudioAuditConfigResponseBodyLiveAudioAuditConfigList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveAudioAuditConfigList && typeof (this.liveAudioAuditConfigList as any).validate === 'function') {
      (this.liveAudioAuditConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

