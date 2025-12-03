// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail extends $dara.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 14/14
   */
  process?: string;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 2020-11-05T06:45:45Z
   */
  startTime?: string;
  /**
   * @example
   * SUCCEEDED
   */
  state?: string;
  /**
   * @example
   * default:test1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      endTime: 'EndTime',
      message: 'Message',
      process: 'Process',
      speed: 'Speed',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      endTime: 'string',
      message: 'string',
      process: 'string',
      speed: 'string',
      startTime: 'string',
      state: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails extends $dara.Model {
  restoreFullDetail?: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreFullDetail: 'RestoreFullDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreFullDetail: { 'type': 'array', 'itemType': DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetailsRestoreFullDetail },
    };
  }

  validate() {
    if(Array.isArray(this.restoreFullDetail)) {
      $dara.Model.validateArray(this.restoreFullDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBodyRestoreFull extends $dara.Model {
  /**
   * @example
   * 1.2 kB
   */
  dataSize?: string;
  /**
   * @example
   * 0
   */
  fail?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  restoreFullDetails?: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails;
  /**
   * @example
   * 0.00 MB/s
   */
  speed?: string;
  /**
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreFullDetails: 'RestoreFullDetails',
      speed: 'Speed',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'string',
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreFullDetails: DescribeRestoreFullDetailsResponseBodyRestoreFullRestoreFullDetails,
      speed: 'string',
      succeed: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.restoreFullDetails && typeof (this.restoreFullDetails as any).validate === 'function') {
      (this.restoreFullDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreFullDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * CFE525CF-C691-4140-A981-D004DAA7A840
   */
  requestId?: string;
  restoreFull?: DescribeRestoreFullDetailsResponseBodyRestoreFull;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreFull: 'RestoreFull',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreFull: DescribeRestoreFullDetailsResponseBodyRestoreFull,
    };
  }

  validate() {
    if(this.restoreFull && typeof (this.restoreFull as any).validate === 'function') {
      (this.restoreFull as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

