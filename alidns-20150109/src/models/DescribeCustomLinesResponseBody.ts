// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomLinesResponseBodyCustomLines } from "./DescribeCustomLinesResponseBodyCustomLines";


export class DescribeCustomLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom lines.
   */
  customLines?: DescribeCustomLinesResponseBodyCustomLines[];
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
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of custom lines.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      customLines: 'CustomLines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLines: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLines },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customLines)) {
      $dara.Model.validateArray(this.customLines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

