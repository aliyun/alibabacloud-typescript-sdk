// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingGroup } from "./VodPackagingGroup";


export class CreateVodPackagingGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The packaging group information.
   */
  packagingGroup?: VodPackagingGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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

