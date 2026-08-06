// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class ListPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token used to retrieve the next page of data. If null is returned, the current page is the last page of results.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The permission list.
   */
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

