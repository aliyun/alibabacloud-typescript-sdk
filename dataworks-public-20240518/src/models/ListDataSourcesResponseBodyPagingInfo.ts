// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourcesResponseBodyPagingInfoDataSources } from "./ListDataSourcesResponseBodyPagingInfoDataSources";


export class ListDataSourcesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data source groups. Each element in the array indicates a data source group. Each data source group contains data sources in the development environment (if any) and the production environment.
   */
  dataSources?: ListDataSourcesResponseBodyPagingInfoDataSources[];
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
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

