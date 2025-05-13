// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPermissionResponseBodyPermissionRules } from "./GetPermissionResponseBodyPermissionRules";


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

