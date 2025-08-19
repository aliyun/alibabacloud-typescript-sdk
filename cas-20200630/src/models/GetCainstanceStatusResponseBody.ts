// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCAInstanceStatusResponseBodyInstanceStatusList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the private CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
   * 
   * @example
   * 1792944000000
   */
  afterTime?: number;
  /**
   * @remarks
   * The issuance date of the private CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
   * 
   * @example
   * 1635177600000
   */
  beforeTime?: number;
  /**
   * @remarks
   * The number of certificates that are issued by using the private CA instance.
   * 
   * @example
   * 1
   */
  certIssuedCount?: number;
  /**
   * @remarks
   * The number of certificates that can be issued by using the private CA instance.
   * 
   * For a private root CA instance whose **Type** is **ROOT**, this parameter indicates the number of intermediate CA certificates that can be issued.
   * 
   * For a private intermediate CA instance whose **Type** is **SUB_ROOT**, this parameter indicates the total number of client certificates and server certificates that can be issued
   * 
   * @example
   * 10
   */
  certTotalCount?: number;
  /**
   * @remarks
   * The unique identifier of the private CA certificate.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
   * 
   * @example
   * a7bb2dd212a2112128cd5cc9b753****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the private CA instance.
   * 
   * @example
   * cas-member-0hmi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the private CA instance. Valid values:
   * 
   * *   **BUY**: The private CA instance is purchased but is not enabled.
   * *   **USED**: The private CA instance is enabled.
   * *   **REFUND**: The private CA instance is refunded.
   * *   **REVOKE**: The private CA instance is revoked.
   * 
   * @example
   * USED
   */
  status?: string;
  /**
   * @remarks
   * The type of the private CA instance. Valid values:
   * 
   * *   **ROOT**: root CA instance
   * *   **SUB_ROOT**: intermediate CA instance
   * 
   * @example
   * ROOT
   */
  type?: string;
  /**
   * @remarks
   * The expiration date of the private CA instance. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter corresponds to the duration that you select when you purchase the private CA instance. The duration indicates the subscription period of the Private Certificate Authority (PCA) service.
   * 
   * @example
   * 1637251200000
   */
  useExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      beforeTime: 'BeforeTime',
      certIssuedCount: 'CertIssuedCount',
      certTotalCount: 'CertTotalCount',
      identifier: 'Identifier',
      instanceId: 'InstanceId',
      status: 'Status',
      type: 'Type',
      useExpireTime: 'UseExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      beforeTime: 'number',
      certIssuedCount: 'number',
      certTotalCount: 'number',
      identifier: 'string',
      instanceId: 'string',
      status: 'string',
      type: 'string',
      useExpireTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status information of the private CA instance.
   */
  instanceStatusList?: GetCAInstanceStatusResponseBodyInstanceStatusList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25589516-2A56-5159-AB88-4A1D9824E183
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusList: 'InstanceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusList: { 'type': 'array', 'itemType': GetCAInstanceStatusResponseBodyInstanceStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatusList)) {
      $dara.Model.validateArray(this.instanceStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

