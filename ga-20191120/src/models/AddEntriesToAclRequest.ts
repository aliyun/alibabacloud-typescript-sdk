// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddEntriesToAclRequestAclEntries extends $dara.Model {
  /**
   * @remarks
   * The access control policy group entry to add. An entry can be an IP address or a CIDR block. You can add up to 50 entries at a time.
   * 
   * > This parameter is required.
   * 
   * @example
   * 10.0.XX.XX/24
   */
  entry?: string;
  /**
   * @remarks
   * The description of the access control policy group entry.
   * 
   * You can add descriptions for up to 50 entries at a time.
   * 
   * The description must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
   * 
   * @example
   * test-entry
   */
  entryDescription?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      entryDescription: 'EntryDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
      entryDescription: 'string',
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
   * The access control policy group entries to add. An entry can be an IP address or a CIDR block.
   * 
   * You can add up to 50 entries at a time.
   * 
   * This parameter is required.
   */
  aclEntries?: AddEntriesToAclRequestAclEntries[];
  /**
   * @remarks
   * The ID of the access control policy group.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of a request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request format, and business limitations without actually adding IP entries to the access control policy group. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': AddEntriesToAclRequestAclEntries },
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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

