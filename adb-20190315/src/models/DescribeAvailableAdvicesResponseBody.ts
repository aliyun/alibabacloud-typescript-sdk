// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableAdvicesResponseBodyItems } from "./DescribeAvailableAdvicesResponseBodyItems";


export class DescribeAvailableAdvicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried suggestions.
   */
  items?: DescribeAvailableAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96A55627-28E9-5E47-B8F6-D786BE551349
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the table in the DatabaseName.TableName format.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of entries returned. The value must be an integer that is greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaTableNames: 'SchemaTableNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAvailableAdvicesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      schemaTableNames: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.schemaTableNames)) {
      $dara.Model.validateArray(this.schemaTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

