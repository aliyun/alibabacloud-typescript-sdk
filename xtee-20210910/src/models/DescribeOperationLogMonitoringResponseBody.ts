// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOperationLogMonitoringResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Time axis slice.
   * 
   * @example
   * 2025-07-19
   */
  dateGrouped?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dateGrouped: 'dateGrouped',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateGrouped: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOperationLogMonitoringResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeOperationLogMonitoringResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeOperationLogMonitoringResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

