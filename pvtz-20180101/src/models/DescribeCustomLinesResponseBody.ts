// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomLinesResponseBodyCustomLines } from "./DescribeCustomLinesResponseBodyCustomLines";


export class DescribeCustomLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom lines.
   */
  customLines?: DescribeCustomLinesResponseBodyCustomLines;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **10**.
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
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 5
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
      customLines: DescribeCustomLinesResponseBodyCustomLines,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.customLines && typeof (this.customLines as any).validate === 'function') {
      (this.customLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

