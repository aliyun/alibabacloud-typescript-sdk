// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchLawQueryResponseBodyDataSortKeyAndDirection extends $dara.Model {
  /**
   * @example
   * desc
   */
  releaseYearMonthDate?: string;
  /**
   * @example
   * desc
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      releaseYearMonthDate: 'releaseYearMonthDate',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseYearMonthDate: 'string',
      similarity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

