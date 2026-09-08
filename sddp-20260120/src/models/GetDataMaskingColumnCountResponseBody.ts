// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingColumnCountResponseBodyColumnCount extends $dara.Model {
  /**
   * @example
   * 10
   */
  maskedCount?: number;
  /**
   * @example
   * 1
   */
  maskingFailedCount?: number;
  /**
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maskedCount: 'MaskedCount',
      maskingFailedCount: 'MaskingFailedCount',
      sensitiveCount: 'SensitiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maskedCount: 'number',
      maskingFailedCount: 'number',
      sensitiveCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataMaskingColumnCountResponseBody extends $dara.Model {
  columnCount?: GetDataMaskingColumnCountResponseBodyColumnCount;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: GetDataMaskingColumnCountResponseBodyColumnCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.columnCount && typeof (this.columnCount as any).validate === 'function') {
      (this.columnCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

