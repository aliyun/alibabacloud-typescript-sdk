// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Dedicated SQL feature. For more information, see [Enable Dedicated SQL](https://help.aliyun.com/document_detail/223777.html). Valid values:
   * 
   * *   true
   * *   false (default): enables the Standard SQL feature.
   * 
   * You can use the powerSql or **query** parameter to configure Dedicated SQL.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The standard SQL statement. In this example, the SQL statement queries the number of page views (PVs) from 2022-03-01 10:41:40 to 2022-03-01 10:56:40 in a Logstore whose name is nginx-moni.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT COUNT(*) as pv FROM nginx-moni where __time__ &gt; 1646102500 and __time__ &lt; 1646103400
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      powerSql: 'powerSql',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      powerSql: 'boolean',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

