// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLivePackageChannelResponseBodyLivePackageChannel } from "./GetLivePackageChannelResponseBodyLivePackageChannel";


export class GetLivePackageChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the live package channel.
   */
  livePackageChannel?: GetLivePackageChannelResponseBodyLivePackageChannel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * RequestId-12345678
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
      livePackageChannel: GetLivePackageChannelResponseBodyLivePackageChannel,
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

