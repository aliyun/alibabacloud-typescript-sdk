// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPermissionsResponseBodyPermissions } from "./ListPermissionsResponseBodyPermissions";


export class ListPermissionsResponseBody extends $dara.Model {
  /**
   * @example
   * 59886
   */
  duration?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      nextToken: 'nextToken',
      permissions: 'permissions',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      nextToken: 'string',
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

