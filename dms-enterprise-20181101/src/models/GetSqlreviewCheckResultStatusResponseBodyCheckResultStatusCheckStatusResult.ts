// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult extends $dara.Model {
  /**
   * @remarks
   * The number of SQL statements that failed to pass the review.
   * 
   * @example
   * 1
   */
  checkNotPass?: number;
  /**
   * @remarks
   * The number of SQL statements that passed the review.
   * 
   * @example
   * 8
   */
  checkPass?: number;
  /**
   * @remarks
   * The number of SQL statements that failed to pass the manual review.
   * 
   * @example
   * 0
   */
  forceNotPass?: number;
  /**
   * @remarks
   * The number of SQL statements that passed the manual review.
   * 
   * @example
   * 1
   */
  forcePass?: number;
  /**
   * @remarks
   * The number of SQL statements to be reviewed.
   * 
   * @example
   * 0
   */
  new?: number;
  /**
   * @remarks
   * The number of abnormal SQL statements.
   * 
   * @example
   * 0
   */
  unknown?: number;
  static names(): { [key: string]: string } {
    return {
      checkNotPass: 'CheckNotPass',
      checkPass: 'CheckPass',
      forceNotPass: 'ForceNotPass',
      forcePass: 'ForcePass',
      new: 'New',
      unknown: 'Unknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNotPass: 'number',
      checkPass: 'number',
      forceNotPass: 'number',
      forcePass: 'number',
      new: 'number',
      unknown: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

