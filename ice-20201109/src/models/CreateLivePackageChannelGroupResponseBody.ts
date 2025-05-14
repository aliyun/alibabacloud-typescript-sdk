// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup } from "./CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup";


export class CreateLivePackageChannelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the channel group.
   */
  livePackageChannelGroup?: CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
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
      livePackageChannelGroup: CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup,
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

