// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The newly created user group.
   * 
   * @example
   * {"userGroupId":"7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11","userGroupName":"South China Sales","parentId":null,"level":1,"description":"South China sales organization","childGroupCount":0,"directMemberCount":0,"sourceType":"internal","externalSyncStatus":null,"gmtCreate":"2026-08-27T09:00:00Z","gmtModified":"2026-08-27T09:00:00Z"}
   */
  userGroup?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      userGroup: 'userGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      userGroup: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

