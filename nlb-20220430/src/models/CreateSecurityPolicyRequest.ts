// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. Supported characters include letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. Supported characters include letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
   * 
   * @example
   * ValueTest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The supported cipher suites, which depend on the TLSVersion value. You can add up to 32 cipher suites.
   * 
   * Supported by TLSv1.0 and TLSv1.1:
   * - **ECDHE-ECDSA-AES128-SHA**
   * - **ECDHE-ECDSA-AES256-SHA**
   * - **ECDHE-RSA-AES128-SHA**
   * - **ECDHE-RSA-AES256-SHA**
   * - **AES128-SHA**
   * - **AES256-SHA**
   * - **DES-CBC3-SHA**
   * 
   * Supported by TLSv1.2:
   * -   **ECDHE-ECDSA-AES128-SHA**
   * -   **ECDHE-ECDSA-AES256-SHA**
   * -   **ECDHE-RSA-AES128-SHA**
   * -   **ECDHE-RSA-AES256-SHA**
   * -   **AES128-SHA**
   * -   **AES256-SHA**
   * -   **DES-CBC3-SHA**
   * -   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * -   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * -   **ECDHE-ECDSA-AES128-SHA256**
   * -   **ECDHE-ECDSA-AES256-SHA384**
   * -   **ECDHE-RSA-AES128-GCM-SHA256**
   * -   **ECDHE-RSA-AES256-GCM-SHA384**
   * -   **ECDHE-RSA-AES128-SHA256**
   * -   **ECDHE-RSA-AES256-SHA384**
   * -   **AES128-GCM-SHA256**
   * -   **AES256-GCM-SHA384**
   * -   **AES128-SHA256**
   * -   **AES256-SHA256**
   * -   **ECDHE-ECDSA-CHACHA20-POLY1305**
   * -   **ECDHE-RSA-CHACHA20-POLY1305**
   * 
   * Supported by TLSv1.3:
   * - **TLS_AES_128_GCM_SHA256**
   * - **TLS_AES_256_GCM_SHA384**
   * - **TLS_CHACHA20_POLY1305_SHA256**
   * - **TLS_AES_128_CCM_SHA256**
   * - **TLS_AES_128_CCM_8_SHA256**
   * 
   * This parameter is required.
   */
  ciphers?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without creating the custom security policy. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, an error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) instance. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Policy Name of the security policy.
   * 
   * Policy Name must be 1 to 200 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * TLSCipherPolicy
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateSecurityPolicyRequestTag[];
  /**
   * @remarks
   * The supported TLS versions. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   * 
   * This parameter is required.
   */
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyName: 'SecurityPolicyName',
      tag: 'Tag',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      securityPolicyName: 'string',
      tag: { 'type': 'array', 'itemType': CreateSecurityPolicyRequestTag },
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.tlsVersions)) {
      $dara.Model.validateArray(this.tlsVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

