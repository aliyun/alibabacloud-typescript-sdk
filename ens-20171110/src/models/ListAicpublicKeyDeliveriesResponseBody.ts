// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeyDeliveriesResponseBodyPublicKeyDeliverInfo extends $dara.Model {
  /**
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @example
   * aic-xxxx-0
   */
  instanceId?: string;
  /**
   * @example
   * test-group
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publicKeyDeliverInfo?: ListAICPublicKeyDeliveriesResponseBodyPublicKeyDeliverInfo[];
  /**
   * @example
   * xxxsxxxxx
   */
  requestId?: string;
  /**
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

