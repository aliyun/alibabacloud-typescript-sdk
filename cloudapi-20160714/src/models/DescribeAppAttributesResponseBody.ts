// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppAttributesResponseBodyApps } from "./DescribeAppAttributesResponseBodyApps";


export class DescribeAppAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned app information. It is an array that consists of AppAttribute data.
   */
  apps?: DescribeAppAttributesResponseBodyApps;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8883AC74-259D-4C0B-99FC-0B7F9A588B2F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: DescribeAppAttributesResponseBodyApps,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apps && typeof (this.apps as any).validate === 'function') {
      (this.apps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

