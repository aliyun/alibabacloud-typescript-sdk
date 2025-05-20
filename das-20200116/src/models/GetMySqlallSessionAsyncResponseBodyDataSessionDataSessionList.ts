// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 47.100.XX.XX
   */
  client?: string;
  /**
   * @remarks
   * The type of the command executed in the session.
   * 
   * @example
   * Query
   */
  command?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbTest
   */
  dbName?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 14521783
   */
  sessionId?: number;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * >  This parameter is returned only when you use a PolarDB-X 2.0 instance.
   * 
   * @example
   * a7cac1a9
   */
  sqlTemplateId?: string;
  /**
   * @remarks
   * The SQL statement executed in the session.
   * 
   * @example
   * INSERT INTO ...
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * @example
   * starting
   */
  state?: string;
  /**
   * @remarks
   * The execution duration of the session. Unit: seconds.
   * 
   * @example
   * 6
   */
  time?: number;
  /**
   * @remarks
   * The duration of the transaction. Unit: seconds.
   * 
   * @example
   * 6
   */
  trxDuration?: number;
  /**
   * @remarks
   * The ID of the transaction to which the session belongs.
   * 
   * @example
   * 754300775132
   */
  trxId?: string;
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * testUser
   */
  user?: string;
  /**
   * @remarks
   * The alias of the IP address of the client.
   * 
   * @example
   * master-shanghai
   */
  userClientAlias?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
      command: 'Command',
      dbName: 'DbName',
      sessionId: 'SessionId',
      sqlTemplateId: 'SqlTemplateId',
      sqlText: 'SqlText',
      state: 'State',
      time: 'Time',
      trxDuration: 'TrxDuration',
      trxId: 'TrxId',
      user: 'User',
      userClientAlias: 'UserClientAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: 'string',
      command: 'string',
      dbName: 'string',
      sessionId: 'number',
      sqlTemplateId: 'string',
      sqlText: 'string',
      state: 'string',
      time: 'number',
      trxDuration: 'number',
      trxId: 'string',
      user: 'string',
      userClientAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

