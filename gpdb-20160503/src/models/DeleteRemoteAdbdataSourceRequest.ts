// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRemoteADBDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The ID of the instance that uses the data provided by another instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-test
   */
  localDBInstanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      localDBInstanceId: 'LocalDBInstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      localDBInstanceId: 'string',
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

