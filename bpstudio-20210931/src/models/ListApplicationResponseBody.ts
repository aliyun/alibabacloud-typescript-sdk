// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationResponseBodyData } from "./ListApplicationResponseBodyData";


export class ListApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * App listing information
   */
  data?: ListApplicationResponseBodyData[];
  /**
   * @remarks
   * The interface returns information
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * 2
   */
  nextToken?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListApplicationResponseBodyData },
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

