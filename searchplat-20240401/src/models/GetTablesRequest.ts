// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The data source parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "instanceId": "instance_id",
   *     "dbName": "db_name",
   *     "dbUser": "db_user",
   *     "dbPassword": "passwoed"
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

