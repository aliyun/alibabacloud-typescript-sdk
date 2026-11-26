// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityPolicyAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The list of supported cipher suites.
   */
  ciphers?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client. Make sure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0F******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * - **true**: performs only a dry run and does not update the security policy attributes. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-n0kn923****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * Policy Name of the security policy.
   * 
   * Policy Name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. It must start with a letter, Chinese character, or digit.
   * 
   * @example
   * test-secrity
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The list of supported TLS protocol versions.
   */
  TLSVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      TLSVersions: 'TLSVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
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

