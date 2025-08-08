// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * >  This parameter is equivalent to the DatabaseId parameter in the SearchDatabase, ListDatabases, and GetDatabase operations. You can call one of these operations to obtain the required database ID. For more information, see [SearchDatabase](https://help.aliyun.com/document_detail/141876.html), [ListDatabases](https://help.aliyun.com/document_detail/141873.html), and [GetDatabase](https://help.aliyun.com/document_detail/141869.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The SQL statements to be executed. Data query language (DQL) statements, data definition language (DDL) statements, and data manipulation language (DML) statements are supported. The control mode of the instance that you want to query determines whether you can execute DDL and DML statements.
   * 
   * This parameter is required.
   * 
   * @example
   * select dt from report_daily
   */
  script?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To obtain the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Tenant information](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 234
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      realLoginUserUid: 'RealLoginUserUid',
      script: 'Script',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      realLoginUserUid: 'string',
      script: 'string',
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

