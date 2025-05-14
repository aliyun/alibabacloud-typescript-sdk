// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChannelAssemblyChannel } from "./ChannelAssemblyChannel";


export class CreateChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel information.
   */
  channel?: ChannelAssemblyChannel;
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
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
      channel: ChannelAssemblyChannel,
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

