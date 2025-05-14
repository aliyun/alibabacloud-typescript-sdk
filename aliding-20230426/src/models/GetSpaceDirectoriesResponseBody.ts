// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSpaceDirectoriesResponseBodyChildren } from "./GetSpaceDirectoriesResponseBodyChildren";


export class GetSpaceDirectoriesResponseBody extends $dara.Model {
  children?: GetSpaceDirectoriesResponseBodyChildren[];
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 1296
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': GetSpaceDirectoriesResponseBodyChildren },
      hasMore: 'boolean',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

