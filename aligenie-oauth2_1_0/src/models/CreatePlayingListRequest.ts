// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePlayingListRequestDeviceInfo } from "./CreatePlayingListRequestDeviceInfo";
import { CreatePlayingListRequestOpenCreatePlayingListRequest } from "./CreatePlayingListRequestOpenCreatePlayingListRequest";


export class CreatePlayingListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CreatePlayingListRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  openCreatePlayingListRequest?: CreatePlayingListRequestOpenCreatePlayingListRequest;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      openCreatePlayingListRequest: 'OpenCreatePlayingListRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreatePlayingListRequestDeviceInfo,
      openCreatePlayingListRequest: CreatePlayingListRequestOpenCreatePlayingListRequest,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.openCreatePlayingListRequest && typeof (this.openCreatePlayingListRequest as any).validate === 'function') {
      (this.openCreatePlayingListRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

