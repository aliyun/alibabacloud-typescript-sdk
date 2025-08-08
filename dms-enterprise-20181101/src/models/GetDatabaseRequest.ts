// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  schemaName?: string;
  /**
   * @remarks
   * The system identifier (SID) of the database.
   * 
   * >  The SID uniquely identifies an Oracle database. After a database is created, a SID is generated for the database.
   * 
   * @example
   * test_sid
   */
  sid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the ID of the tenant.
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      realLoginUserUid: 'RealLoginUserUid',
      schemaName: 'SchemaName',
      sid: 'Sid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      realLoginUserUid: 'string',
      schemaName: 'string',
      sid: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

