// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCAInstanceStatusResponseBodyInstanceStatusList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the private CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter is returned only if **Status** is **USED** (the private CA instance is enabled) or **REVOKE** (the private CA instance is revoked).
   * 
   * @example
   * 1792944000000
   */
  afterTime?: number;
  /**
   * @remarks
   * The issuance date of the private CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter is returned only if **Status** is **USED** (the private CA instance is enabled) or **REVOKE** (the private CA instance is revoked).
   * 
   * @example
   * 1635177600000
   */
  beforeTime?: number;
  /**
   * @remarks
   * The number of certificates that the private CA instance has issued.
   * 
   * @example
   * 1
   */
  certIssuedCount?: number;
  /**
   * @remarks
   * The number of certificates that the private CA instance can issue.
   * 
   * If the private CA is a root CA (**Type** is **ROOT**), this parameter indicates the number of intermediate CA certificates that can be issued. If the private CA is an intermediate CA (**Type** is **SUB_ROOT**), this parameter indicates the total number of client certificates and server-side certificates that can be issued.
   * 
   * @example
   * 10
   */
  certTotalCount?: number;
  /**
   * @remarks
   * The unique identifier of the private CA certificate.
   * 
   * > This parameter is returned only if **Status** is **USED** (the private CA instance is enabled) or **REVOKE** (the private CA instance is revoked).
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
   * - **BUY**: The instance is purchased but not enabled.
   * 
   * - **USED**: The instance is enabled.
   * 
   * - **REFUND**: A refund has been issued for the instance.
   * 
   * - **REVOKE**: The instance is revoked.
   * 
   * @example
   * USED
   */
  status?: string;
  /**
   * @remarks
   * The type of the private CA instance. Valid values:
   * 
   * - **ROOT**: Root CA instance.
   * 
   * - **SUB_ROOT**: Intermediate CA instance.
   * 
   * @example
   * ROOT
   */
  type?: string;
  /**
   * @remarks
   * The expiration date of the private CA instance. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > This parameter corresponds to the subscription duration that you selected for the Private Certificate Authority (PCA) service when you purchased the instance.
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
   * The status details of the private CA instance.
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

