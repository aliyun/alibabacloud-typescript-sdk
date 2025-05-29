// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExternalDataSourcesResponseBodyItems } from "./ListExternalDataSourcesResponseBodyItems";


export class ListExternalDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Hadoop external table services.
   */
  items?: ListExternalDataSourcesResponseBodyItems[];
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
   * The request ID.
   * 
   * @example
   * BBE00C04-A3E8-4114-881D-0480A72CB92E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListExternalDataSourcesResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

