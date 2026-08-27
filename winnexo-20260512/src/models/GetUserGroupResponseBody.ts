// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * **The list of direct child user groups.**
   */
  childGroups?: any[];
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
   * **The list of direct members in the current user group.**
   */
  members?: any[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * **The parent user group information. This is empty for the root node.**
   * 
   * @example
   * {"userGroupId":"b07fb0a4-0b7d-44a7-a3d5-a43a5964c8f0","userGroupName":"Sales Center","parentId":null,"level":1,"description":"Sales organization","childGroupCount":1,"directMemberCount":0,"sourceType":"internal","externalSyncStatus":null,"gmtCreate":"2026-08-27T08:00:00Z","gmtModified":"2026-08-27T08:00:00Z"}
   */
  parentGroup?: any;
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
   * **The target user group information.**
   * 
   * @example
   * {"userGroupId":"7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11","userGroupName":"South China Sales","parentId":"b07fb0a4-0b7d-44a7-a3d5-a43a5964c8f0","level":2,"description":"South China Sales organization","childGroupCount":0,"directMemberCount":2,"sourceType":"internal","externalSyncStatus":null,"gmtCreate":"2026-08-27T09:00:00Z","gmtModified":"2026-08-27T10:00:00Z"}
   */
  userGroup?: any;
  static names(): { [key: string]: string } {
    return {
      childGroups: 'childGroups',
      code: 'code',
      members: 'members',
      message: 'message',
      parentGroup: 'parentGroup',
      requestId: 'requestId',
      userGroup: 'userGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childGroups: { 'type': 'array', 'itemType': 'any' },
      code: 'string',
      members: { 'type': 'array', 'itemType': 'any' },
      message: 'string',
      parentGroup: 'any',
      requestId: 'string',
      userGroup: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.childGroups)) {
      $dara.Model.validateArray(this.childGroups);
    }
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

