// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * 
   * - **true**: The system prechecks the request without deleting the ACL. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the system returns an error. If the request passes the precheck, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): The system sends a normal request. If the request passes the precheck, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
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

