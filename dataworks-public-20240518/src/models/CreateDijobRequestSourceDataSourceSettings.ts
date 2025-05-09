// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties } from "./CreateDijobRequestSourceDataSourceSettingsDataSourceProperties";


export class CreateDIJobRequestSourceDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * mysql_datasource_1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The properties of the data source.
   */
  dataSourceProperties?: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties,
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

