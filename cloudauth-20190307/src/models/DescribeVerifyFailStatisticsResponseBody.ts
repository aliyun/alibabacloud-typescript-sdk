// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyFailStatisticsResponseBodyResultObjectColumnItems extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Failure count.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Date: Date
   * 
   * @example
   * 2025-10-16
   */
  rate?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      rate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyFailStatisticsResponseBodyResultObjectColumn extends $dara.Model {
  /**
   * @remarks
   * Column information.
   */
  items?: DescribeVerifyFailStatisticsResponseBodyResultObjectColumnItems[];
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeVerifyFailStatisticsResponseBodyResultObjectColumnItems },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyFailStatisticsResponseBodyResultObjectLineItemsData extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 2025-10-16
   */
  date?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyFailStatisticsResponseBodyResultObjectLineItems extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Returned quantity data.
   */
  data?: DescribeVerifyFailStatisticsResponseBodyResultObjectLineItemsData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeVerifyFailStatisticsResponseBodyResultObjectLineItemsData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyFailStatisticsResponseBodyResultObjectLine extends $dara.Model {
  /**
   * @remarks
   * Column information.
   */
  items?: DescribeVerifyFailStatisticsResponseBodyResultObjectLineItems[];
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeVerifyFailStatisticsResponseBodyResultObjectLineItems },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyFailStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Line chart of failure reasons.
   */
  column?: DescribeVerifyFailStatisticsResponseBodyResultObjectColumn;
  /**
   * @remarks
   * Bar chart of failure reasons.
   */
  line?: DescribeVerifyFailStatisticsResponseBodyResultObjectLine;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: DescribeVerifyFailStatisticsResponseBodyResultObjectColumn,
      line: DescribeVerifyFailStatisticsResponseBodyResultObjectLine,
    };
  }

  validate() {
    if(this.column && typeof (this.column as any).validate === 'function') {
      (this.column as any).validate();
    }
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyFailStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * C2C596D1-B14B-5D79-9672-61D7686912B2
   */
  requestId?: string;
  /**
   * @remarks
   * Authentication result.
   */
  resultObject?: DescribeVerifyFailStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyFailStatisticsResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

