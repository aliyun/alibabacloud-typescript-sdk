// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateTransitUploadPolicyResponseBodyPolicyInfo extends $dara.Model {
  /**
   * @remarks
   * The `OSSAccessKeyId` field in the PostObject form. Protect this value together with the entire `PolicyInfo`.
   * 
   * @example
   * <REDACTED>
   */
  accessId?: string;
  /**
   * @remarks
   * The object storage key. The value is the same as the top-level `FilePath`.
   * 
   * @example
   * skill-bundle/tenant-demo/user-demo/20260904120000_0123456789abcdef0123456789abcdef.zip
   */
  dir?: string;
  /**
   * @remarks
   * The target URL to which the client sends the PostObject request.
   * 
   * @example
   * https://upload.example.invalid
   */
  host?: string;
  /**
   * @remarks
   * The Base64-encoded PostObject upload policy. Protect this value together with the entire `PolicyInfo`.
   * 
   * @example
   * <REDACTED>
   */
  policy?: string;
  /**
   * @remarks
   * The `x-oss-security-token` field in the PostObject form when STS credentials are used. This field may be empty when STS is not used. This field contains sensitive authorization information.
   * 
   * @example
   * <REDACTED>
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature field in the PostObject form. This field contains sensitive authorization information.
   * 
   * @example
   * <REDACTED>
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      host: 'Host',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      host: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitUploadPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object storage key, which is also the `key` field in the PostObject form.
   * 
   * @example
   * skill-bundle/tenant-demo/user-demo/20260904120000_0123456789abcdef0123456789abcdef.zip
   */
  filePath?: string;
  /**
   * @remarks
   * The upload policy object. For the complete list of subfields, see the following table.
   */
  policyInfo?: CreateTransitUploadPolicyResponseBodyPolicyInfo;
  /**
   * @remarks
   * The request ID, used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the upload policy is generated. A successful response always returns `true`. An error response is returned upon failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the newly created Transit record, used for subsequent queries and storage operations.
   * 
   * @example
   * transit_0123456789abcdef0123456789abcdef
   */
  transitId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      policyInfo: 'PolicyInfo',
      requestId: 'RequestId',
      success: 'Success',
      transitId: 'TransitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      policyInfo: CreateTransitUploadPolicyResponseBodyPolicyInfo,
      requestId: 'string',
      success: 'boolean',
      transitId: 'string',
    };
  }

  validate() {
    if(this.policyInfo && typeof (this.policyInfo as any).validate === 'function') {
      (this.policyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

