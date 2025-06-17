// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreloadDetailByIdResponseBodyUrlDetails } from "./DescribePreloadDetailByIdResponseBodyUrlDetails";


export class DescribePreloadDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * E9D3257A-1B7C-414C-90C1-8D07AC47BCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the task, including the task ID, start time, end time, domain name, success rate, status, returned error code, and completion details of all URL resources.
   */
  urlDetails?: DescribePreloadDetailByIdResponseBodyUrlDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      urlDetails: 'UrlDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      urlDetails: { 'type': 'array', 'itemType': DescribePreloadDetailByIdResponseBodyUrlDetails },
    };
  }

  validate() {
    if(Array.isArray(this.urlDetails)) {
      $dara.Model.validateArray(this.urlDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

