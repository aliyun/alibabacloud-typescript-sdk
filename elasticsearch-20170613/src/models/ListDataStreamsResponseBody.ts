// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataStreamsResponseBodyHeaders extends $dara.Model {
  /**
   * @example
   * 100
   */
  xManagedCount?: number;
  /**
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
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createTime?: string;
  /**
   * @example
   * Green
   */
  health?: string;
  /**
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @example
   * following
   */
  managedStatus?: string;
  /**
   * @example
   * Log1
   */
  name?: string;
  /**
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
   * @example
   * Green
   */
  health?: string;
  /**
   * @example
   * rollver1
   */
  ilmPolicyName?: string;
  /**
   * @example
   * template1
   */
  indexTemplateName?: string;
  indices?: ListDataStreamsResponseBodyResultIndices[];
  /**
   * @example
   * 1788239393298
   */
  managedStorageSize?: number;
  /**
   * @example
   * my-index-0001
   */
  name?: string;
  /**
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
  headers?: ListDataStreamsResponseBodyHeaders;
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
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

