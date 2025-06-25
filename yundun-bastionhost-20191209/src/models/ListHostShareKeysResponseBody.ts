// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHostShareKeysResponseBodyHostShareKeys } from "./ListHostShareKeysResponseBodyHostShareKeys";


export class ListHostShareKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the shared keys.
   */
  hostShareKeys?: ListHostShareKeysResponseBodyHostShareKeys[];
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
   * The total number of the shared keys.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostShareKeys: 'HostShareKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeys: { 'type': 'array', 'itemType': ListHostShareKeysResponseBodyHostShareKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostShareKeys)) {
      $dara.Model.validateArray(this.hostShareKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

