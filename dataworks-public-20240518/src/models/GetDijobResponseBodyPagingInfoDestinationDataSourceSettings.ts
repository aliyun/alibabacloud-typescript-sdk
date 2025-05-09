// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

