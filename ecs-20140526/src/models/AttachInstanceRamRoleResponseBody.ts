// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults } from "./AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults";


export class AttachInstanceRamRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the results of attaching the instance RAM role.
   */
  attachInstanceRamRoleResults?: AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults;
  /**
   * @remarks
   * The number of instances to which the instance RAM role failed to be attached.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The name of the instance RAM role.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9553E4C-6C3A-4D66-AE79-9835AF705639
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances to which you attempted to attach the instance RAM role.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachInstanceRamRoleResults: 'AttachInstanceRamRoleResults',
      failCount: 'FailCount',
      ramRoleName: 'RamRoleName',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceRamRoleResults: AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults,
      failCount: 'number',
      ramRoleName: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.attachInstanceRamRoleResults && typeof (this.attachInstanceRamRoleResults as any).validate === 'function') {
      (this.attachInstanceRamRoleResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

