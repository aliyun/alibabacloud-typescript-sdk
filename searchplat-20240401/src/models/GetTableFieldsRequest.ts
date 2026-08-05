// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * The data source parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * "accessKeySecret": "sk",
   * "accessKey": "ak",
   * "projectName": "test_name",
   * "tableName": "test_table",
   * "partition": "20240904"
   * }
   */
  params?: string;
  /**
   * @remarks
   * Specifies whether to return the original field types of the data source.
   * 
   * @example
   * false
   */
  rawType?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      rawType: 'rawType',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      rawType: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

