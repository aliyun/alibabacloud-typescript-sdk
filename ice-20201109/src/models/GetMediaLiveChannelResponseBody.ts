// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaLiveChannelResponseBodyChannel } from "./GetMediaLiveChannelResponseBodyChannel";


export class GetMediaLiveChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel information.
   */
  channel?: GetMediaLiveChannelResponseBodyChannel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: GetMediaLiveChannelResponseBodyChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.channel && typeof (this.channel as any).validate === 'function') {
      (this.channel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

