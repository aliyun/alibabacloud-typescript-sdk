// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStacksResponseBodyStacks } from "./ListStacksResponseBodyStacks";


export class ListStacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBAC80B4-9C27-529D-BC9C-4155FA5CD7A7
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the stacks.
   */
  stacks?: ListStacksResponseBodyStacks[];
  /**
   * @remarks
   * The total number of stacks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stacks: 'Stacks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stacks: { 'type': 'array', 'itemType': ListStacksResponseBodyStacks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stacks)) {
      $dara.Model.validateArray(this.stacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

