// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults } from "./DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults";


export class DetachInstanceRamRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the instance RAM role detachment, which include the names of the instance RAM roles and the IDs of the ECS instances from which you attempted to detach the instance RAM roles.
   */
  detachInstanceRamRoleResults?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults;
  /**
   * @remarks
   * The number of ECS instances from which instance RAM roles failed to be detached.
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
   * RamRoleTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of ECS instances from which you attempted to detach instance RAM roles.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detachInstanceRamRoleResults: 'DetachInstanceRamRoleResults',
      failCount: 'FailCount',
      ramRoleName: 'RamRoleName',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInstanceRamRoleResults: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults,
      failCount: 'number',
      ramRoleName: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.detachInstanceRamRoleResults && typeof (this.detachInstanceRamRoleResults as any).validate === 'function') {
      (this.detachInstanceRamRoleResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

