// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults } from "./GetSqlreviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults";


export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult extends $dara.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * syntax error
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether an error occurs. Valid values:
   * 
   * *   **true**: An error occurs.
   * *   **false**: No error occurs.
   * 
   * @example
   * false
   */
  occurError?: boolean;
  /**
   * @remarks
   * The review results based on rules.
   */
  results?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      occurError: 'OccurError',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      occurError: 'boolean',
      results: { 'type': 'array', 'itemType': GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

