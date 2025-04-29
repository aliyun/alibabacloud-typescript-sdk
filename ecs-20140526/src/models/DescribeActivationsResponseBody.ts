// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeActivationsResponseBodyActivationList } from "./DescribeActivationsResponseBodyActivationList";


export class DescribeActivationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation codes and their usage information.
   */
  activationList?: DescribeActivationsResponseBodyActivationList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * 4ECEEE12-56F1-4FBC-9AB1-890F74625134
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activationList: 'ActivationList',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationList: { 'type': 'array', 'itemType': DescribeActivationsResponseBodyActivationList },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.activationList)) {
      $dara.Model.validateArray(this.activationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

