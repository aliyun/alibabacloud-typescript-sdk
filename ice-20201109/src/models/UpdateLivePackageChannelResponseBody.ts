// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLivePackageChannelResponseBodyLivePackageChannel } from "./UpdateLivePackageChannelResponseBodyLivePackageChannel";


export class UpdateLivePackageChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the live package channel.
   */
  livePackageChannel?: UpdateLivePackageChannelResponseBodyLivePackageChannel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 771A1414-27BF-53E6-AB73-EFCB*****ACF
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
      livePackageChannel: UpdateLivePackageChannelResponseBodyLivePackageChannel,
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

