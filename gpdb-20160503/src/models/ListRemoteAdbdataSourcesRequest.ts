// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemoteADBDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 119
   */
  dataSourceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceId: 'DataSourceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

