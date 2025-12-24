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
   * Indicates whether the second version provides more information than the first version. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  new?: boolean;
  /**
   * @remarks
   * Indicates whether the configurations of the two versions are the same. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The comparison result.
   */
  compareResult?: ComparePlaybooksResponseBodyCompareResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EC05B06-BF3C-5F3E-8FE8-3B1FAD76087A
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

