// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVscMountPointAliasResponseBody extends $dara.Model {
  /**
   * @example
   * sdfe
   */
  mountPointAlias?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPointAlias: 'MountPointAlias',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPointAlias: 'string',
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

