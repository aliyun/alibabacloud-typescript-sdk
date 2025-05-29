// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStreamingDataSourcesResponseBodyDataSourceItems } from "./ListStreamingDataSourcesResponseBodyDataSourceItems";


export class ListStreamingDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried data sources.
   */
  dataSourceItems?: ListStreamingDataSourcesResponseBodyDataSourceItems[];
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
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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
      dataSourceItems: 'DataSourceItems',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceItems: { 'type': 'array', 'itemType': ListStreamingDataSourcesResponseBodyDataSourceItems },
      pageNumber: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceItems)) {
      $dara.Model.validateArray(this.dataSourceItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

