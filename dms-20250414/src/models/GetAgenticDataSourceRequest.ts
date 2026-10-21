// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the data source to query.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou_a1b2c3d4e5f6
   */
  dataSourceUuid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceUuid: 'DataSourceUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

