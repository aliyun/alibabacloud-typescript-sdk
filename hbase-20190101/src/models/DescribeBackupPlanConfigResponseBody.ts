// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPlanConfigResponseBodyTables extends $dara.Model {
  table?: string[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPlanConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 7
   */
  fullBackupCycle?: number;
  /**
   * @example
   * 3
   */
  minHFileBackupCount?: number;
  /**
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
  /**
   * @example
   * 33A23201-6038-4A6A-B76A-61047EA04E6A
   */
  requestId?: string;
  tables?: DescribeBackupPlanConfigResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      fullBackupCycle: 'FullBackupCycle',
      minHFileBackupCount: 'MinHFileBackupCount',
      nextFullBackupDate: 'NextFullBackupDate',
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullBackupCycle: 'number',
      minHFileBackupCount: 'number',
      nextFullBackupDate: 'string',
      requestId: 'string',
      tables: DescribeBackupPlanConfigResponseBodyTables,
    };
  }

  validate() {
    if(this.tables && typeof (this.tables as any).validate === 'function') {
      (this.tables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

