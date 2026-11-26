// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the ACL. The name must be 2 to 128 characters long. It must start with a letter, a Chinese character, or a digit, and can contain digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * test-acl
   */
  aclName?: string;
  /**
   * @remarks
   * A client-generated token that ensures request idempotence. The token must be unique for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the request\"s `RequestId` as the `ClientToken`.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - **true**: performs a check on the request without modifying the resource. The system checks for required parameters, valid request formats, and service limits. If the check fails, an error is returned. If the check succeeds, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the system performs the operation and returns an HTTP `2xx` status code.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

