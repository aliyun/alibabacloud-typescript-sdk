// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStreamURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * 流播放协议
   * 
   * @example
   * rtsp
   */
  outProtocol?: string;
  /**
   * @remarks
   * 流播放端口
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * 该条任务请求ID。
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * 流播放URL
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

