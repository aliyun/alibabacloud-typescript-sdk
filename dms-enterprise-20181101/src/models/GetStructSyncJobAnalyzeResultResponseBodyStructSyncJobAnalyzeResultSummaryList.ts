// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList extends $dara.Model {
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **CREATE_TABLE**: compares the created tables.
   * *   **ALTER_TABLE**: compares the modified tables.
   * *   **EQUAL_TABLE**: compares the identical tables.
   * *   **PASS_TABLE**: compares the tables that are skipped during schema synchronization.
   * *   **NOT_COMPARE**: does not compare tables.
   * 
   * @example
   * CREATE_TABLE
   */
  compareType?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      compareType: 'CompareType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

