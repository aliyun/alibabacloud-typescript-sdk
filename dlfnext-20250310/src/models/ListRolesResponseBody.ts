// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Role } from "./Role";


export class ListRolesResponseBody extends $dara.Model {
  /**
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  roles?: Role[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      roles: { 'type': 'array', 'itemType': Role },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

