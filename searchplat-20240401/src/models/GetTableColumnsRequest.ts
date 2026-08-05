// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters for accessing the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * rds:
   * {
   *     "instanceId": "instance_id",
   *     "dbName": "db_name",
   *     "dbUser": "db_user",
   *     "dbPassword": "passwoed"
   * }
   * odps:
   * {
   *     "accessKeySecret": "sk",
   *     "accessKey": "ak",
   *     "projectName": "test_name"
   * }
   */
  params?: string;
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
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
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

