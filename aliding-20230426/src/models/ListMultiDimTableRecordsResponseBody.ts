// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiDimTableRecordsResponseBodyRecordsCreatedBy extends $dara.Model {
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy extends $dara.Model {
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiDimTableRecordsResponseBodyRecords extends $dara.Model {
  createdBy?: ListMultiDimTableRecordsResponseBodyRecordsCreatedBy;
  /**
   * @example
   * xxx
   */
  createdTime?: number;
  /**
   * @example
   * title,shortTitle
   */
  fields?: { [key: string]: any };
  /**
   * @example
   * 123
   */
  id?: string;
  lastModifiedBy?: ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy;
  /**
   * @example
   * xxx
   */
  lastModifiedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdTime: 'CreatedTime',
      fields: 'Fields',
      id: 'Id',
      lastModifiedBy: 'LastModifiedBy',
      lastModifiedTime: 'LastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: ListMultiDimTableRecordsResponseBodyRecordsCreatedBy,
      createdTime: 'number',
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lastModifiedBy: ListMultiDimTableRecordsResponseBodyRecordsLastModifiedBy,
      lastModifiedTime: 'number',
    };
  }

  validate() {
    if(this.createdBy && typeof (this.createdBy as any).validate === 'function') {
      (this.createdBy as any).validate();
    }
    if(this.fields) {
      $dara.Model.validateMap(this.fields);
    }
    if(this.lastModifiedBy && typeof (this.lastModifiedBy as any).validate === 'function') {
      (this.lastModifiedBy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiDimTableRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 1234567890
   */
  nextToken?: string;
  /**
   * @example
   * []
   */
  records?: ListMultiDimTableRecordsResponseBodyRecords[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      records: 'records',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ListMultiDimTableRecordsResponseBodyRecords },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

