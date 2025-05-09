// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource } from "./ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource";


export class ListDataSourcesResponseBodyPagingInfoDataSources extends $dara.Model {
  /**
   * @remarks
   * The data sources. Each element is the information of a single data source with a unique data source ID.
   */
  dataSource?: ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource[];
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * mysql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSource)) {
      $dara.Model.validateArray(this.dataSource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

