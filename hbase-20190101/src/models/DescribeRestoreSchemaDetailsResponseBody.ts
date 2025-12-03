// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $dara.Model {
  /**
   * @example
   * 2020-11-05T06:45:18Z
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
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
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
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

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails extends $dara.Model {
  restoreSchemaDetail?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreSchemaDetail: 'RestoreSchemaDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreSchemaDetail: { 'type': 'array', 'itemType': DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail },
    };
  }

  validate() {
    if(Array.isArray(this.restoreSchemaDetail)) {
      $dara.Model.validateArray(this.restoreSchemaDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchema extends $dara.Model {
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
  restoreSchemaDetails?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails;
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
      fail: 'Fail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      restoreSchemaDetails: 'RestoreSchemaDetails',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      restoreSchemaDetails: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails,
      succeed: 'number',
      total: 'number',
    };
  }

  validate() {
    if(this.restoreSchemaDetails && typeof (this.restoreSchemaDetails as any).validate === 'function') {
      (this.restoreSchemaDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSchemaDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * BC682A80-7677-4294-975C-CFEA425381DE
   */
  requestId?: string;
  restoreSchema?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchema;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreSchema: 'RestoreSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreSchema: DescribeRestoreSchemaDetailsResponseBodyRestoreSchema,
    };
  }

  validate() {
    if(this.restoreSchema && typeof (this.restoreSchema as any).validate === 'function') {
      (this.restoreSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

