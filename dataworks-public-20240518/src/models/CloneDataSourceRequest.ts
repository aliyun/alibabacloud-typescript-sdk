// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the target data source. The name can contain letters, digits, and underscores (_), and cannot start with a digit or an underscore. The name can be up to 60 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_holo_datasource
   */
  cloneDataSourceName?: string;
  /**
   * @remarks
   * The ID of the data source, which is the unique identifier of the data source. You can call the ListDataSources operation to query existing data sources and their unique IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603612
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cloneDataSourceName: 'CloneDataSourceName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneDataSourceName: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

