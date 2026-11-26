// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * product
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
   * The list of supported cipher suites.
   * 
   * This parameter is required.
   */
  ciphers?: string[];
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate the value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0F******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * - **true**: performs only a dry run and does not create resources. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
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
   * Policy Name must be 2 to 128 characters in length. It must start with a letter, Chinese character, or digit, and can contain digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * test-secrity
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The list of supported TLS protocol versions.
   * 
   * This parameter is required.
   */
  TLSVersions?: string[];
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateSecurityPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyName: 'SecurityPolicyName',
      TLSVersions: 'TLSVersions',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      resourceGroupId: 'string',
      securityPolicyName: 'string',
      TLSVersions: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateSecurityPolicyRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.ciphers)) {
      $dara.Model.validateArray(this.ciphers);
    }
    if(Array.isArray(this.TLSVersions)) {
      $dara.Model.validateArray(this.TLSVersions);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

