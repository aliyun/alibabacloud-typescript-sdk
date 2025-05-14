// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLivePackageChannelGroupResponseBodyLivePackageChannelGroup } from "./GetLivePackageChannelGroupResponseBodyLivePackageChannelGroup";


export class GetLivePackageChannelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the channel group.
   */
  livePackageChannelGroup?: GetLivePackageChannelGroupResponseBodyLivePackageChannelGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-abcdefg123456
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
      livePackageChannelGroup: GetLivePackageChannelGroupResponseBodyLivePackageChannelGroup,
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

