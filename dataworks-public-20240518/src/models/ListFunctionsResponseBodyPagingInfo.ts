// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFunctionsResponseBodyPagingInfoFunctions } from "./ListFunctionsResponseBodyPagingInfoFunctions";


export class ListFunctionsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The UDFs.
   */
  functions?: ListFunctionsResponseBodyPagingInfoFunctions[];
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
   * The total number of entries returned.
   * 
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyPagingInfoFunctions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

