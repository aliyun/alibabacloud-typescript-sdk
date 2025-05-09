// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList } from "./GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList";


export class GetTableTopologyResponseBodyTableTopology extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table is a logical table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The GUID of the table in DMS.
   * 
   * @example
   * IDB_L_308302.yuyang_test.test_ch
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_ch
   */
  tableName?: string;
  /**
   * @remarks
   * Information of the topology of the table.
   */
  tableTopologyInfoList?: GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList[];
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tableTopologyInfoList: 'TableTopologyInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      tableGuid: 'string',
      tableName: 'string',
      tableTopologyInfoList: { 'type': 'array', 'itemType': GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.tableTopologyInfoList)) {
      $dara.Model.validateArray(this.tableTopologyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

