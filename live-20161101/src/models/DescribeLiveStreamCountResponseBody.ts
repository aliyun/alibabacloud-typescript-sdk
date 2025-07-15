// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail extends $dara.Model {
  /**
   * @remarks
   * The number of online streams.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The video codec. Valid values:
   * 
   * *   **h264**
   * *   **h265**
   * 
   * @example
   * h264
   */
  format?: string;
  /**
   * @remarks
   * The video bitrate. This parameter is returned only for transcoded streams.
   * 
   * @example
   * 390
   */
  videoDataRate?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      format: 'Format',
      videoDataRate: 'VideoDataRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      format: 'string',
      videoDataRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetails extends $dara.Model {
  streamCountDetail?: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail[];
  static names(): { [key: string]: string } {
    return {
      streamCountDetail: 'StreamCountDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountDetail: { 'type': 'array', 'itemType': DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetailsStreamCountDetail },
    };
  }

  validate() {
    if(Array.isArray(this.streamCountDetail)) {
      $dara.Model.validateArray(this.streamCountDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfo extends $dara.Model {
  /**
   * @remarks
   * The number of online streams.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The maximum allowed number of concurrently ingested streams. This parameter is available only to users in the whitelist.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The information about the live streams.
   */
  streamCountDetails?: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetails;
  /**
   * @remarks
   * The type of the live stream. Valid values:
   * 
   * *   **raw**: source streams
   * *   **trans**: transcoded streams
   * 
   * @example
   * raw
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      limit: 'Limit',
      streamCountDetails: 'StreamCountDetails',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      limit: 'number',
      streamCountDetails: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfoStreamCountDetails,
      type: 'string',
    };
  }

  validate() {
    if(this.streamCountDetails && typeof (this.streamCountDetails as any).validate === 'function') {
      (this.streamCountDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBodyStreamCountInfos extends $dara.Model {
  streamCountInfo?: DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfo[];
  static names(): { [key: string]: string } {
    return {
      streamCountInfo: 'StreamCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountInfo: { 'type': 'array', 'itemType': DescribeLiveStreamCountResponseBodyStreamCountInfosStreamCountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.streamCountInfo)) {
      $dara.Model.validateArray(this.streamCountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCFFE4A4-F34F-4EEF-B401-36A01689AFBC
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of the live streams.
   */
  streamCountInfos?: DescribeLiveStreamCountResponseBodyStreamCountInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamCountInfos: 'StreamCountInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamCountInfos: DescribeLiveStreamCountResponseBodyStreamCountInfos,
    };
  }

  validate() {
    if(this.streamCountInfos && typeof (this.streamCountInfos as any).validate === 'function') {
      (this.streamCountInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

