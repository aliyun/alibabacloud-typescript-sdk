// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of user group member relationships that were actually added.
   * 
   * @example
   * 2
   */
  affectedCount?: number;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of requested members before deduplication.
   * 
   * @example
   * 2
   */
  requestedCount?: number;
  /**
   * @remarks
   * The ID of the target user group.
   * 
   * @example
   * 7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      affectedCount: 'affectedCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      requestedCount: 'requestedCount',
      userGroupId: 'userGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedCount: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
      requestedCount: 'number',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

