// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTLSCipherPolicyAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cipher suites supported by the TLS version.
   * 
   * The specified cipher suites must be supported by at least one TLS protocol version that you specify. For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by this protocol version.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   ECDHE-ECDSA-AES128-SHA
   * *   ECDHE-ECDSA-AES256-SHA
   * *   ECDHE-RSA-AES128-SHA
   * *   ECDHE-RSA-AES256-SHA
   * *   AES128-SHA AES256-SHA
   * *   DES-CBC3-SHA
   * *   ECDHE-ECDSA-AES128-GCM-SHA256
   * *   ECDHE-ECDSA-AES256-GCM-SHA384
   * *   ECDHE-ECDSA-AES128-SHA256
   * *   ECDHE-ECDSA-AES256-SHA384
   * *   ECDHE-RSA-AES128-GCM-SHA256
   * *   ECDHE-RSA-AES256-GCM-SHA384
   * *   ECDHE-RSA-AES128-SHA256
   * *   ECDHE-RSA-AES256-SHA384
   * *   AES128-GCM-SHA256
   * *   AES256-GCM-SHA384
   * *   AES128-SHA256 AES256-SHA256
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   TLS_AES_128_GCM_SHA256
   * *   TLS_AES_256_GCM_SHA384
   * *   TLS_CHACHA20_POLY1305_SHA256
   * *   TLS_AES_128_CCM_SHA256
   * *   TLS_AES_128_CCM_8_SHA256
   * 
   * This parameter is required.
   * 
   * @example
   * DES-CBC3-SHA
   */
  ciphers?: string[];
  /**
   * @remarks
   * The name of the TLS policy. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-policy*****-test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Server Load Balancer (SLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the TLS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-bp1lp2076qx4e******bridp
   */
  TLSCipherPolicyId?: string;
  /**
   * @remarks
   * The version of the TLS protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   * 
   * This parameter is required.
   * 
   * @example
   * TLSv1.0
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TLSCipherPolicyId: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
    }
    if(Array.isArray(this.TLSVersions)) {
      $dara.Model.validateArray(this.TLSVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

