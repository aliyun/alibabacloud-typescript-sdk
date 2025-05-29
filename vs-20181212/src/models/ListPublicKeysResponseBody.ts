// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublicKeysResponseBodyPublicKeys } from "./ListPublicKeysResponseBodyPublicKeys";


export class ListPublicKeysResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publicKeys?: ListPublicKeysResponseBodyPublicKeys[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicKeys: 'PublicKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publicKeys: { 'type': 'array', 'itemType': ListPublicKeysResponseBodyPublicKeys },
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

