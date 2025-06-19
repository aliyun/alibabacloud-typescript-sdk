// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableCompaction extends $dara.Model {
  catalogId?: string;
  lastCompactedFileTime?: number;
  maxLevel0FileCount?: string;
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      lastCompactedFileTime: 'lastCompactedFileTime',
      maxLevel0FileCount: 'maxLevel0FileCount',
      tableId: 'tableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      lastCompactedFileTime: 'number',
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

