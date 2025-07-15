// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCasterSceneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF60DB6A-7FD6-426E-9288-122CC1A52FA7
   */
  requestId?: string;
  /**
   * @remarks
   * The streaming URL of the scene. It is used for playback, but not for stream relay.
   * 
   * @example
   * http://live/caster/example.org
   */
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

