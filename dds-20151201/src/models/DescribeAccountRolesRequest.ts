// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB for MongoDB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf6e9433e955****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database to which the custom role belongs.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

