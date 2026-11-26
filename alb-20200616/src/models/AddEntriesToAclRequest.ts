// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddEntriesToAclRequestAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the access control entry. The description must be 2 to 256 characters in length, and can contain letters, digits, Chinese characters, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * You can add up to 20 access control entries in a single call.
   * 
   * @example
   * test-entry
   */
  description?: string;
  /**
   * @remarks
   * The CIDR block of the access control entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.1.0/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclRequest extends $dara.Model {
  /**
   * @remarks
   * The list of access control entries to be added. You can add up to 20 access control entries in a single call.
   * 
   * This parameter is required.
   */
  aclEntries?: AddEntriesToAclRequestAclEntries[];
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
   * You can generate the parameter value from your client and make sure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: The system prechecks the request without adding IP entries to the access control policy group. The system checks whether the required parameters are specified, the request format, and the service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): The system sends a normal request. If the request passes the precheck, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': AddEntriesToAclRequestAclEntries },
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

