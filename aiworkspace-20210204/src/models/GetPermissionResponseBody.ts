// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionResponseBodyPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PUBLIC: All members can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The access type. If you set Accessibility to PUBLIC, all users can access the workspace. This parameter is invalid. If you set Accessibility to PRIVATE, the value of this parameter can be:
   * 
   * *   PRIVATE: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permission name, which is unique in a region. For more information about permissions, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html).
   * 
   * @example
   * PaiDLC:ListJobs
   */
  permissionCode?: string;
  /**
   * @remarks
   * The permission rules.
   */
  permissionRules?: GetPermissionResponseBodyPermissionRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': GetPermissionResponseBodyPermissionRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissionRules)) {
      $dara.Model.validateArray(this.permissionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

