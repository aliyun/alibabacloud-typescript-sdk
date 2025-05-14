// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLivePackageChannelResponseBodyLivePackageChannel } from "./CreateLivePackageChannelResponseBodyLivePackageChannel";


export class CreateLivePackageChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the live package channel.
   */
  livePackageChannel?: CreateLivePackageChannelResponseBodyLivePackageChannel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePackageChannel: 'LivePackageChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannel: CreateLivePackageChannelResponseBodyLivePackageChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePackageChannel && typeof (this.livePackageChannel as any).validate === 'function') {
      (this.livePackageChannel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

