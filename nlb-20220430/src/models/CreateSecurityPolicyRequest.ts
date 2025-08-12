// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. It must be 1 to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. It can contain letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), minus signs (-), and at signs (@).
   * 
   * You can add up to 20 tags for the security policy in each call.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. It must be 1 to 128 characters in length, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. It can contain letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), minus signs (-), and at signs (@).
   * 
   * You can add up to 20 tags for the security policy in each call.
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
   * The cipher suites supported by the security policy. Valid values of this parameter vary based on the value of TlsVersions. You can specify up to 32 cipher suites.
   * 
   * TLSv1.0 and TLSv1.1 support the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * 
   * TLSv1.2 supports the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * *   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * *   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * *   **ECDHE-ECDSA-AES128-SHA256**
   * *   **ECDHE-ECDSA-AES256-SHA384**
   * *   **ECDHE-RSA-AES128-GCM-SHA256**
   * *   **ECDHE-RSA-AES256-GCM-SHA384**
   * *   **ECDHE-RSA-AES128-SHA256**
   * *   **ECDHE-RSA-AES256-SHA384**
   * *   **AES128-GCM-SHA256**
   * *   **AES256-GCM-SHA384**
   * *   **AES128-SHA256**
   * *   **AES256-SHA256**
   * 
   * TLSv1.3 supports the following cipher suites:
   * 
   * *   **TLS_AES_128_GCM_SHA256**
   * *   **TLS_AES_256_GCM_SHA384**
   * *   **TLS_CHACHA20_POLY1305_SHA256**
   * *   **TLS_AES_128_CCM_SHA256**
   * *   **TLS_AES_128_CCM_8_SHA256**
   * 
   * This parameter is required.
   */
  ciphers?: string[];
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the security policy belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the security policy.
   * 
   * It must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * TLSCipherPolicy
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateSecurityPolicyRequestTag[];
  /**
   * @remarks
   * The Transport Layer Security (TLS) versions supported by the security policy. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
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

