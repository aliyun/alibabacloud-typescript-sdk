// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. Example: qwertyui1234567
   * 
   * @example
   * qwertyui1234567
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * true: performs a dry run without calling the operation. The system checks the request parameters, request format, service limits, and available resources. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * false (default): sends the request. If the check succeeds, the operation is performed.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The modification method. Valid values:
   * - **Cover**: Overwrites the original whitelist.
   * - **Append**: Appends to the whitelist. An error is returned if duplicate IP addresses exist.
   * - **Extend**: Appends to the whitelist. Duplicate IP addresses are merged.
   * - **Delete**: Deletes the whitelist.
   * 
   * 
   * Default value: **Cover**.
   * 
   * @example
   * Append
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The attribute of the whitelist group. The value can contain uppercase letters, lowercase letters, and digits. The maximum length is 120 characters.
   * 
   * Default value: empty string.
   * 
   * @example
   * test
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist group to modify. Default value: **default**.
   * 
   * @example
   * allowserver
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the IP whitelist group. Separate multiple IP addresses with commas (,). IP addresses cannot be duplicated. A maximum of 1000 IP addresses are supported. The following two formats are supported:
   * - IP address format, such as 127.0.0.1.
   * - CIDR format, such as 127.0.0.1/24 (Classless Inter-Domain Routing, where 24 indicates the length of the prefix in the address. The value ranges from 1 to 32).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1/24,127.0.0.1
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      dryRun: 'DryRun',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      dryRun: 'boolean',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpGroupAttribute: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

