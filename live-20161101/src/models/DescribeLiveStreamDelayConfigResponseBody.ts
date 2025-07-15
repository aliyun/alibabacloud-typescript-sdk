// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamDelayConfigResponseBodyLiveStreamFlvDelayConfig extends $dara.Model {
  /**
   * @remarks
   * The playback latency. Unit: seconds.
   * 
   * @example
   * 5
   */
  delay?: number;
  /**
   * @remarks
   * The latency level. Valid values:
   * 
   * *   **short**: The latency is less than or equal to 4 seconds.
   * *   **medium**: The latency is greater than 4 seconds, and less than or equal to 8 seconds.
   * *   **long**: The latency is greater than 8 seconds.
   * 
   * @example
   * medium
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBodyLiveStreamHlsDelayConfig extends $dara.Model {
  /**
   * @remarks
   * The playback latency. Unit: seconds.
   * 
   * @example
   * 3
   */
  delay?: number;
  /**
   * @remarks
   * The latency level. Valid values:
   * 
   * *   **short**: The latency is less than or equal to 4 seconds.
   * *   **medium**: The latency is greater than 4 seconds, and less than or equal to 8 seconds.
   * *   **long**: The latency is greater than 8 seconds.
   * 
   * @example
   * short
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBodyLiveStreamRtmpDelayConfig extends $dara.Model {
  /**
   * @remarks
   * The playback latency. Unit: seconds.
   * 
   * @example
   * 4
   */
  delay?: number;
  /**
   * @remarks
   * The latency level. Valid values:
   * 
   * *   **short**: The latency is less than or equal to 4 seconds.
   * *   **medium**: The latency is greater than 4 seconds, and less than or equal to 8 seconds.
   * *   **long**: The latency is greater than 8 seconds.
   * 
   * @example
   * short
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamDelayConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The latency of FLV-based playback.
   */
  liveStreamFlvDelayConfig?: DescribeLiveStreamDelayConfigResponseBodyLiveStreamFlvDelayConfig;
  /**
   * @remarks
   * The latency of HLS-based playback.
   */
  liveStreamHlsDelayConfig?: DescribeLiveStreamDelayConfigResponseBodyLiveStreamHlsDelayConfig;
  /**
   * @remarks
   * The latency of RTMP-based playback.
   */
  liveStreamRtmpDelayConfig?: DescribeLiveStreamDelayConfigResponseBodyLiveStreamRtmpDelayConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 785C9CB0-EB8A-4912-BBF2-966BEFD32DC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamFlvDelayConfig: 'LiveStreamFlvDelayConfig',
      liveStreamHlsDelayConfig: 'LiveStreamHlsDelayConfig',
      liveStreamRtmpDelayConfig: 'LiveStreamRtmpDelayConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamFlvDelayConfig: DescribeLiveStreamDelayConfigResponseBodyLiveStreamFlvDelayConfig,
      liveStreamHlsDelayConfig: DescribeLiveStreamDelayConfigResponseBodyLiveStreamHlsDelayConfig,
      liveStreamRtmpDelayConfig: DescribeLiveStreamDelayConfigResponseBodyLiveStreamRtmpDelayConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamFlvDelayConfig && typeof (this.liveStreamFlvDelayConfig as any).validate === 'function') {
      (this.liveStreamFlvDelayConfig as any).validate();
    }
    if(this.liveStreamHlsDelayConfig && typeof (this.liveStreamHlsDelayConfig as any).validate === 'function') {
      (this.liveStreamHlsDelayConfig as any).validate();
    }
    if(this.liveStreamRtmpDelayConfig && typeof (this.liveStreamRtmpDelayConfig as any).validate === 'function') {
      (this.liveStreamRtmpDelayConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

