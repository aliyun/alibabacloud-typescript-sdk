// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class ListPermissionsResponseBody extends $dara.Model {
  /**
   * @example
   * token!
   */
  nextPageToken?: string;
  permissions?: Permission[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      permissions: { 'type': 'array', 'itemType': Permission },
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

