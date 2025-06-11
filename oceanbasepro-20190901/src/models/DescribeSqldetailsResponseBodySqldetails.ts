// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLDetailsResponseBodySQLDetails extends $dara.Model {
  /**
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * {"name":"DescribeSQLDetails","product":"OceanBasePro","version":"2019-09-01","path":"/","deprecated":0,"method":"POST|GET","protocol":"HTTP|HTTPS","hidden":0,"timeout":10000,"parameter_type":"Single","params":"[{\\"name\\":\\"Action\\",\\"position\\":\\"Query\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"description\\":\\"\\",\\"example\\":\\"DescribeSQLDetails\\"},{\\"name\\":\\"TenantId\\",\\"position\\":\\"Body\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"t2mr3oae0****\\"},{\\"name\\":\\"SQLId\\",\\"position\\":\\"Body\\",\\"required\\":true,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"SQLID\\",\\"description\\":\\"SQLID。\\",\\"example\\":\\"8D6E84****0B8FB1823D199E2CA1****\\"}]","response_headers":"[]","response":"{\\"type\\":\\"Object\\",\\"children\\":[{\\"name\\":\\"RequestId\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E\\"},{\\"name\\":\\"SQLDetails\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"Array\\",\\"subType\\":\\"Object\\",\\"description\\":\\"  \\",\\"children\\":[{\\"name\\":\\"SQLText\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC\\"},{\\"name\\":\\"DbName\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"testdb\\"},{\\"name\\":\\"UserName\\",\\"required\\":false,\\"checkBlank\\":false,\\"visibility\\":\\"Public\\",\\"deprecated\\":false,\\"type\\":\\"String\\",\\"title\\":\\"\\",\\"description\\":\\"\\",\\"example\\":\\"tester\\"}],\\"title\\":\\"\\"}],\\"title\\":\\"\\",\\"description\\":\\"\\"}","errors":"{}"}
   * 
   * @example
   * SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC
   */
  SQLText?: string;
  /**
   * @example
   * tester
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      SQLText: 'SQLText',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      SQLText: 'string',
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

