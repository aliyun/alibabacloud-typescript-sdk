// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndicesResponseBodyDataIndices } from "./ListIndicesResponseBodyDataIndices";


export class ListIndicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of knowledge bases.
   */
  indices?: ListIndicesResponseBodyDataIndices[];
  /**
   * @remarks
   * The specified page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The specified number of documents on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of knowledge bases returned.
   * 
   * @example
   * 48
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: { 'type': 'array', 'itemType': ListIndicesResponseBodyDataIndices },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

