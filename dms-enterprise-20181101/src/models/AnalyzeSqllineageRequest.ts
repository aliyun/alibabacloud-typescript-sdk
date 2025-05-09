// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeSQLLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * >  You can call one of the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html), [ListDatabases](https://help.aliyun.com/document_detail/141873.html), and [GetDatabase](https://help.aliyun.com/document_detail/141869.html) operations to obtain the database ID provided in the DatabaseId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  dbId?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * insert into a (id) select id from b;
   */
  sqlContent?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      sqlContent: 'SqlContent',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      sqlContent: 'string',
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

