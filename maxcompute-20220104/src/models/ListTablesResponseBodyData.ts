// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTablesResponseBodyDataTables } from "./ListTablesResponseBodyDataTables";


export class ListTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The information about tables.
   */
  tables?: ListTablesResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      tables: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

