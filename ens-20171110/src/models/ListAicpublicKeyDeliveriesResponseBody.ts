// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeyDeliveriesResponseBodyPublicKeyDeliverInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * aic-xxxx-0
   */
  instanceId?: string;
  /**
   * @remarks
   * Public Key Grouping
   * 
   * @example
   * test-group
   */
  keyGroup?: string;
  /**
   * @remarks
   * Public Key Name
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * Public key type
   * 
   * @example
   * adb
   */
  keyType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceId: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICPublicKeyDeliveriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number when paging
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Public Key List
   */
  publicKeyDeliverInfo?: ListAICPublicKeyDeliveriesResponseBodyPublicKeyDeliverInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxsxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicKeyDeliverInfo: 'PublicKeyDeliverInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publicKeyDeliverInfo: { 'type': 'array', 'itemType': ListAICPublicKeyDeliveriesResponseBodyPublicKeyDeliverInfo },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicKeyDeliverInfo)) {
      $dara.Model.validateArray(this.publicKeyDeliverInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

