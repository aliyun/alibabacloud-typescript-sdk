// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of data sources that are modified. The value 1 indicates that the modification is successful, and a value less than or equal to 0 indicates that the modification failed.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the data source. The ID is an MD5 hash value that is calculated by the threat analysis feature based on specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      dataSourceInstanceId: 'DataSourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      dataSourceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

