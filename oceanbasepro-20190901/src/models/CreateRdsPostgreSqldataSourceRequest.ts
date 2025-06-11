// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRdsPostgreSQLDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_name
   */
  databaseName?: string;
  /**
   * @example
   * this is a test database
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * g_abcdefj***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * data_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pass_word
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

