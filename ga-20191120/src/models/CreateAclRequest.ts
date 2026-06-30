// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclRequestAclEntries extends $dara.Model {
  /**
   * @remarks
   * The access control policy group entry, which is an IP address entry (192.168.XX.XX) or a CIDR block entry (10.0.XX.XX/24).
   * 
   * You can add up to 50 entries at a time.
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
   * The description must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), underscores (_), and Chinese characters.
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

export class CreateAclRequestTag extends $dara.Model {
  /**
   * @remarks
   * The label key of the access control policy group. Once specified, the label key cannot be an empty string.
   * 
   * The label key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 label keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The label value of the access control policy group. Once specified, the label value can be an empty string.
   * 
   * The label value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 label values.
   * 
   * @example
   * tag-value
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

export class CreateAclRequest extends $dara.Model {
  /**
   * @remarks
   * The access control policy group entries, which are IP address entries or CIDR block entries.
   * 
   * You can add up to 50 entries at a time.
   */
  aclEntries?: CreateAclRequestAclEntries[];
  /**
   * @remarks
   * The name of the access control policy group.
   * 
   * The name must be 1 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test-acl
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version of the access control policy group. Valid values:
   * - **IPv4**
   * - **IPv6**
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating the access control policy group. The system checks the required parameters, request format, and business limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a Normal request, passes the dry run, and returns an HTTP 2xx status code and directly performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwj7wvng3jbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The label information of the access control policy group.
   */
  tag?: CreateAclRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': CreateAclRequestAclEntries },
      aclName: 'string',
      addressIPVersion: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateAclRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
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

