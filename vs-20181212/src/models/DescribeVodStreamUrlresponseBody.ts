// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStreamURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stream playback protocol.
   * 
   * @example
   * rtsp
   */
  outProtocol?: string;
  /**
   * @remarks
   * The stream playback port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The stream playback URL.
   * 
   * @example
   * rtsp://domain/live/stream?sign=xxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      outProtocol: 'OutProtocol',
      port: 'Port',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outProtocol: 'string',
      port: 'number',
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

