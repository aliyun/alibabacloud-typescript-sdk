// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOrganizationRolesResponseBodyResult } from "./ListOrganizationRolesResponseBodyResult";


export class ListOrganizationRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of organization roles.
   */
  result?: ListOrganizationRolesResponseBodyResult[];
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

