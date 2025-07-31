// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
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
   * The method that is used to modify the IP address whitelist. Valid values:
   * 
   * *   **Cover**: overwrites the original IP address whitelist.
   * *   **Append**: appends data to the IP address whitelist.
   * *   **Delete**: deletes the IP address whitelist.
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
   * The attribute of the IP address whitelist. It can contain a maximum of 120 characters in length and can contain uppercase letters, lowercase letters, and digits.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * test
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist that you want to modify. Default value: **default**.
   * 
   * @example
   * allowserver
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. Separate multiple IP addresses with commas (,). You can add a maximum of 1,000 different IP addresses to the IP address whitelist. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 127.0.0.1.
   * *   CIDR blocks, such as 127.0.0.1/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1/24,127.0.0.1
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
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

