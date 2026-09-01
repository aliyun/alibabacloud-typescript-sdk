// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ComparePlaybooksResponseBodyCompareResult extends $dara.Model {
  /**
   * @remarks
   * The description of the comparison result.
   * 
   * @example
   * The first version adds one node compared to the second version
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the second version used for comparison is a new version.
   * 
   * - **true**: The version is new.
   * 
   * - **false**: The version is not new.
   * 
   * @example
   * true
   */
  new?: boolean;
  /**
   * @remarks
   * Indicates whether the two versions are identical.
   * 
   * - **true**: Identical.
   * 
   * - **false**: Not identical.
   * 
   * @example
   * false
   */
  same?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      new: 'New',
      same: 'Same',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      new: 'boolean',
      same: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the comparison.
   */
  compareResult?: ComparePlaybooksResponseBodyCompareResult;
  /**
   * @remarks
   * The unique ID of the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 2EC05B06-****-5F3E-****-3B1FAD76087A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compareResult: 'CompareResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareResult: ComparePlaybooksResponseBodyCompareResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compareResult && typeof (this.compareResult as any).validate === 'function') {
      (this.compareResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

