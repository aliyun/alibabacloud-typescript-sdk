// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCloudDriveServiceMountTokenResponseBodyToken } from "./GetCloudDriveServiceMountTokenResponseBodyToken";


export class GetCloudDriveServiceMountTokenResponseBody extends $dara.Model {
  /**
   * @example
   * DC27288A-F9E1-5092-9B5B-71C27D15****
   */
  requestId?: string;
  token?: GetCloudDriveServiceMountTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: GetCloudDriveServiceMountTokenResponseBodyToken,
    };
  }

  validate() {
    if(this.token && typeof (this.token as any).validate === 'function') {
      (this.token as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

