// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeToutiaoLivePlayResponseBodyContent extends $dara.Model {
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
   * The bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 0.0801239013671875
   */
  bandwidth?: number;
  /**
   * @remarks
   * The Content Delivery Network (CDN) name.
   * 
   * @example
   * ali
   */
  cdnName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of viewers.
   * 
   * @example
   * 452
   */
  playNum?: number;
  /**
   * @remarks
   * The name of the live stream.
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
   * 1625484600
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      bandwidth: 'Bandwidth',
      cdnName: 'CdnName',
      domain: 'Domain',
      playNum: 'PlayNum',
      streamName: 'StreamName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      bandwidth: 'number',
      cdnName: 'string',
      domain: 'string',
      playNum: 'number',
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

export class DescribeToutiaoLivePlayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the live stream.
   */
  content?: DescribeToutiaoLivePlayResponseBodyContent[];
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
      content: { 'type': 'array', 'itemType': DescribeToutiaoLivePlayResponseBodyContent },
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

