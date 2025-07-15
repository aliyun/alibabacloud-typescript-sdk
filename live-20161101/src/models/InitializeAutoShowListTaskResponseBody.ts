// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeAutoShowListTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * >  The value of this parameter can be used as the value of a request parameter to query the streaming URL of the production studio, start the production studio, add video resources to the production studio, add a production studio layout, query production studio layouts, add a production studio component, and add a production studio playlist.
   * 
   * @example
   * b4810848-bcf9-4aef-bd4a-e6bba2d9****
   */
  casterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of output video streams.
   * 
   * *   videoFormat: the format of the streaming URL.
   * *   outputStreamUrl: the source URL.
   * *   transcodeConfig: the output resolution specified for video transcoding of the source URL.
   * 
   * @example
   * [{"videoFormat":"flv","outputStreamUrl":"http://example.aliyundoc.com","transcodeConfig":"original"}]
   */
  streamList?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      requestId: 'RequestId',
      streamList: 'StreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      requestId: 'string',
      streamList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

