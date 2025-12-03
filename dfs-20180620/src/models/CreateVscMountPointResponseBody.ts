// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscMountPointResponseBody extends $dara.Model {
  /**
   * @example
   * e389e5c7-bcb4-4558-846a-e5afc444****
   */
  mountPointId?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPointId: 'MountPointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPointId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

