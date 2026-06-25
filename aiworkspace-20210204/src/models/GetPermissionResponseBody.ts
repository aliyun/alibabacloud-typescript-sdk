// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionResponseBodyPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can perform the operation.
   * 
   * - PRIVATE: Only the creator can perform the operation.
   * 
   * - ANY: Both the creator and non-creators can perform the operation.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The access type.
   * This parameter is invalid when Accessibility is set to PUBLIC because all users can perform the operation.
   * When Accessibility is set to PRIVATE, EntityAccessType supports the following values:
   * 
   * - CREATOR: Only the creator can perform the operation.
   * 
   * - ANY: Both the creator and non-creators can perform the operation.
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
   * The name of the permission. The name is unique within the same region. For more information about permissions, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html).
   * 
   * @example
   * PaiDLC:ListJobs
   */
  permissionCode?: string;
  /**
   * @remarks
   * The list of permission rules.
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

