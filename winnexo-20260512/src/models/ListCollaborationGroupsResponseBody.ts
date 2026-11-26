// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The collaboration space ID.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The role of the current user in the space.
   * 
   * @example
   * ADMIN
   */
  currentUserRole?: string;
  /**
   * @remarks
   * The name of the space.
   * 
   * @example
   * Workflow To-do Test
   */
  name?: string;
  /**
   * @remarks
   * The space status. Currently, only ACTIVE is returned.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      currentUserRole: 'currentUserRole',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      currentUserRole: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollaborationGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common business status code.
   * 
   * @example
   * ERR.Robject.Auth.TenantAccessDenied
   */
  code?: string;
  /**
   * @remarks
   * The list of items on the current page.
   * 
   * @example
   * [{"collaborationGroupId":"cg_9401","name":"Product Collaboration Space","status":"ACTIVE","currentUserRole":"OWNER"}]
   */
  items?: ListCollaborationGroupsResponseBodyItems[];
  /**
   * @remarks
   * The common error description.
   * 
   * @example
   * Access denied to tenant 2147483647. The user does not belong to this tenant
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * c9cf6cb3-3f5c-4994-a8a1-c93379a6f5cf
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of filtered records.
   * 
   * @example
   * 39
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListCollaborationGroupsResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

