// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestDestinationDataSourceSettings extends $dara.Model {
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

