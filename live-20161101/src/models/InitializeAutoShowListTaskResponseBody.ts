// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeAutoShowListTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * >This ID can be used as a request parameter for querying production studio stream URLs, starting the production studio, adding video resources to the production studio, adding layouts to the production studio, querying the layout list of the production studio, adding components to the production studio, and adding programs to the production studio.
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
   * The list of output addresses of the production studio.
   * 
   * - videoFormat: the streaming URL format.
   * 
   * - outputStreamUrl: the stream pulling URL.
   * 
   * - transcodeConfig: the transcoding resolution description of the stream pulling URL.
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

