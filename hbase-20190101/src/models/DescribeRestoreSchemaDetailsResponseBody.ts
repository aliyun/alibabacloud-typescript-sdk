// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetailsRestoreSchemaDetail extends $dara.Model {
  endTime?: string;
  message?: string;
  startTime?: string;
  state?: string;
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
   * @remarks
   * The number of failed restorations.
   * 
   * @example
   * 0
   */
  fail?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  restoreSchemaDetails?: DescribeRestoreSchemaDetailsResponseBodyRestoreSchemaRestoreSchemaDetails;
  /**
   * @remarks
   * The number of successful restorations.
   * 
   * @example
   * 1
   */
  succeed?: number;
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * BC682A80-7677-4294-975C-CFEA425381DE
   */
  requestId?: string;
  /**
   * @remarks
   * The schema restoration details.
   */
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

