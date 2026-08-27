// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * task/acs-service-role/polardb.aliyuncs.com/AliyunServiceRoleForPolarDB/64c4f9cc-fac2-4692-ae1b-804ae4b9****
   */
  deletionTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B595E5BF-FF5F-4E7F-B95A-B90FE242FEB6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
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

