// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingGroup } from "./VodPackagingGroup";


export class GetVodPackagingGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the packaging group.
   */
  packagingGroup?: VodPackagingGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****36-3C1E-4417-BDB2-1E034F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packagingGroup: 'PackagingGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packagingGroup: VodPackagingGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packagingGroup && typeof (this.packagingGroup as any).validate === 'function') {
      (this.packagingGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

