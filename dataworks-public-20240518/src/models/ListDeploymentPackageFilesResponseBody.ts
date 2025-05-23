// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeploymentPackageFilesResponseBodyPagingInfo } from "./ListDeploymentPackageFilesResponseBodyPagingInfo";


export class ListDeploymentPackageFilesResponseBody extends $dara.Model {
  pagingInfo?: ListDeploymentPackageFilesResponseBodyPagingInfo;
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDeploymentPackageFilesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

