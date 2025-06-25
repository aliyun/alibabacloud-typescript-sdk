// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPublicKeysResponseBodyPublicKeys } from "./ListUserPublicKeysResponseBodyPublicKeys";


export class ListUserPublicKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the public keys of the user.
   */
  publicKeys?: ListUserPublicKeysResponseBodyPublicKeys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of public keys.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publicKeys: 'PublicKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicKeys: { 'type': 'array', 'itemType': ListUserPublicKeysResponseBodyPublicKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicKeys)) {
      $dara.Model.validateArray(this.publicKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

