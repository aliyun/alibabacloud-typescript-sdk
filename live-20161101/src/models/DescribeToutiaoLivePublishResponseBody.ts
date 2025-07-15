// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeToutiaoLivePublishResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The bitrate. Unit: bit/s.
   * 
   * @example
   * 261587
   */
  bitrate?: number;
  /**
   * @remarks
   * The bitrate difference.
   * 
   * @example
   * 0
   */
  bwDiff?: number;
  /**
   * @remarks
   * The name of the content delivery network (CDN) service.
   * 
   * @example
   * ali
   */
  cdnName?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of dropped frames.
   * 
   * @example
   * 0
   */
  flr?: number;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 74.4
   */
  fps?: number;
  /**
   * @remarks
   * The name of the ingested stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1624358970
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      bitrate: 'Bitrate',
      bwDiff: 'BwDiff',
      cdnName: 'CdnName',
      domain: 'Domain',
      flr: 'Flr',
      fps: 'Fps',
      streamName: 'StreamName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      bitrate: 'number',
      bwDiff: 'number',
      cdnName: 'string',
      domain: 'string',
      flr: 'number',
      fps: 'number',
      streamName: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeToutiaoLivePublishResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stream ingest details.
   */
  content?: DescribeToutiaoLivePublishResponseBodyContent[];
  /**
   * @remarks
   * The description of the response status.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeToutiaoLivePublishResponseBodyContent },
      description: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

