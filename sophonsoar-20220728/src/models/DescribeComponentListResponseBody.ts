// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the components. The value is a JSON array.
   * 
   * @example
   * [
   *     {
   *         "actions": [
   *             {
   *                 "description": "mysql component",
   *                 "name": "storeIdb",
   *                 "parameters": [
   *                     {
   *                         "description": "update the mysql db",
   *                         "name": "updateSql",
   *                         "required": false
   *                     }
   *                 ]
   *             }
   *         ],
   *         "basic": {
   *             "description": "mysq sql component for 5.6",
   *             "logo": "https://img.alicdn.com/tfs/TB1H89IpH3nBKNjSZFMXXaUSFXa-200-200.svg",
   *             "name": "Mysql"
   *         }
   *     }
   * ]
   */
  components?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0A255B3-495C-56FB-8B6B-DB073F80388A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

