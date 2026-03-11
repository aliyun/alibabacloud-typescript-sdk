// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableCompaction extends $dara.Model {
  /**
   * @example
   * clg-paimon-xxx
   */
  catalogId?: string;
  /**
   * @example
   * 1
   */
  cuUsage?: number;
  /**
   * @example
   * 1759111660075
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  lastCompactedFileTime?: number;
  /**
   * @example
   * 1760321763633
   */
  latencyFileEarliestTime?: number;
  /**
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  maxLevel0FileCount?: string;
  /**
   * @example
   * tbl-xxx
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      cuUsage: 'cuUsage',
      lastCompactedFileTime: 'lastCompactedFileTime',
      latencyFileEarliestTime: 'latencyFileEarliestTime',
      maxLevel0FileCount: 'maxLevel0FileCount',
      tableId: 'tableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      cuUsage: 'number',
      lastCompactedFileTime: 'number',
      latencyFileEarliestTime: 'number',
      maxLevel0FileCount: 'string',
      tableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

