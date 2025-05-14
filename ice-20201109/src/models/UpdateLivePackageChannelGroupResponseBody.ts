// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLivePackageChannelGroupResponseBodyLivePackageChannelGroup } from "./UpdateLivePackageChannelGroupResponseBodyLivePackageChannelGroup";


export class UpdateLivePackageChannelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the channel group.
   */
  livePackageChannelGroup?: UpdateLivePackageChannelGroupResponseBodyLivePackageChannelGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePackageChannelGroup: 'LivePackageChannelGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannelGroup: UpdateLivePackageChannelGroupResponseBodyLivePackageChannelGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePackageChannelGroup && typeof (this.livePackageChannelGroup as any).validate === 'function') {
      (this.livePackageChannelGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

