// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult extends $dara.Model {
  /**
   * @remarks
   * The number of SQL statements that must be modified.
   * 
   * @example
   * 1
   */
  mustImprove?: number;
  /**
   * @remarks
   * The number of SQL statements that have potential issues.
   * 
   * @example
   * 0
   */
  potentialIssue?: number;
  /**
   * @remarks
   * The number of SQL statements that can be modified.
   * 
   * @example
   * 3
   */
  suggestImprove?: number;
  /**
   * @remarks
   * The number of SQL statements that can use indexes.
   * 
   * @example
   * 2
   */
  tableIndexSuggest?: number;
  /**
   * @remarks
   * The number of SQL statements that can be used for lock-free data changes.
   * 
   * @example
   * 0
   */
  useDmsDmlUnlock?: number;
  /**
   * @remarks
   * The number of SQL statements that can be used for lock-free schema changes.
   * 
   * @example
   * 0
   */
  useDmsToolkit?: number;
  static names(): { [key: string]: string } {
    return {
      mustImprove: 'MustImprove',
      potentialIssue: 'PotentialIssue',
      suggestImprove: 'SuggestImprove',
      tableIndexSuggest: 'TableIndexSuggest',
      useDmsDmlUnlock: 'UseDmsDmlUnlock',
      useDmsToolkit: 'UseDmsToolkit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mustImprove: 'number',
      potentialIssue: 'number',
      suggestImprove: 'number',
      tableIndexSuggest: 'number',
      useDmsDmlUnlock: 'number',
      useDmsToolkit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

