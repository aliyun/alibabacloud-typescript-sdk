// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataStreamsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of data streams.
   * 
   * @example
   * 100
   */
  xManagedCount?: number;
  /**
   * @remarks
   * The total storage size of indexes. Unit: bytes.
   * 
   * @example
   * 143993923932990
   */
  xManagedStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedCount: 'X-Managed-Count',
      xManagedStorageSize: 'X-Managed-StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedCount: 'number',
      xManagedStorageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResultIndices extends $dara.Model {
  /**
   * @remarks
   * The time when the data stream list was queried.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createTime?: string;
  /**
   * @remarks
   * The index status. Valid values:
   * 
   * - Green: healthy.
   * 
   * - Yellow: warning.
   * 
   * - Red: abnormal.
   * 
   * @example
   * Green
   */
  health?: string;
  /**
   * @remarks
   * This field is deprecated and can be ignored.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @remarks
   * The managed status of the index. Valid values:
   * - following: managed.
   * 
   * - closing: being unmanaged.
   * 
   * - closed: not managed.
   * 
   * @example
   * following
   */
  managedStatus?: string;
  /**
   * @remarks
   * The data stream name.
   * 
   * @example
   * Log1
   */
  name?: string;
  /**
   * @remarks
   * The total storage space occupied by the current index. Unit: bytes.
   * 
   * @example
   * 15393899
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      health: 'health',
      isManaged: 'isManaged',
      managedStatus: 'managedStatus',
      name: 'name',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      health: 'string',
      isManaged: 'boolean',
      managedStatus: 'string',
      name: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The data stream status. Valid values:
   * 
   * - Green: healthy.
   * 
   * - Yellow: warning.
   * 
   * - Red: abnormal.
   * 
   * @example
   * Green
   */
  health?: string;
  /**
   * @remarks
   * The index lifecycle policy name.
   * 
   * @example
   * rollver1
   */
  ilmPolicyName?: string;
  /**
   * @remarks
   * The index template name.
   * 
   * @example
   * template1
   */
  indexTemplateName?: string;
  /**
   * @remarks
   * The index information under the current data stream.
   */
  indices?: ListDataStreamsResponseBodyResultIndices[];
  /**
   * @remarks
   * The total storage space occupied by managed indexes under the current data stream. Unit: bytes.
   * 
   * @example
   * 1788239393298
   */
  managedStorageSize?: number;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * my-index-0001
   */
  name?: string;
  /**
   * @remarks
   * The total storage space occupied by all indexes under the current data stream. Unit: bytes.
   * 
   * @example
   * 1788239393298
   */
  totalStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      health: 'health',
      ilmPolicyName: 'ilmPolicyName',
      indexTemplateName: 'indexTemplateName',
      indices: 'indices',
      managedStorageSize: 'managedStorageSize',
      name: 'name',
      totalStorageSize: 'totalStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      health: 'string',
      ilmPolicyName: 'string',
      indexTemplateName: 'string',
      indices: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResultIndices },
      managedStorageSize: 'number',
      name: 'string',
      totalStorageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListDataStreamsResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the returned data streams.
   */
  result?: ListDataStreamsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDataStreamsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

