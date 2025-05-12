// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopsResponseBodyDesktops } from "./DescribeDesktopsResponseBodyDesktops";


export class DescribeDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud computers.
   */
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
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
   * 484256DA-D816-44D2-9D86-B6EE4D5BA78C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud computers.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktops },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

