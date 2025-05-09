// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties } from "./GetDijobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties";


export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The properties of the data source.
   */
  dataSourceProperties?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties,
    };
  }

  validate() {
    if(this.dataSourceProperties && typeof (this.dataSourceProperties as any).validate === 'function') {
      (this.dataSourceProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

