// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcPrefixListRequestAddPrefixListEntry extends $dara.Model {
  /**
   * @remarks
   * The Classless Inter-Domain Routing block to add to the prefix list instance.
   * 
   * > If the Classless Inter-Domain Routing block already exists in the prefix list, only the value of **AddPrefixListEntry.N.Description** is modified, which means only the description of the Classless Inter-Domain Routing block is updated.
   * 
   * @example
   * 172.16.0.0/12
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the Classless Inter-Domain Routing block to add to the prefix list instance.
   * 
   * The description must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * newcidr
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcPrefixListRequestRemovePrefixListEntry extends $dara.Model {
  /**
   * @remarks
   * The Classless Inter-Domain Routing block to delete from the prefix list instance.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the Classless Inter-Domain Routing block to delete from the prefix list.
   * 
   * @example
   * cidr
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcPrefixListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Classless Inter-Domain Routing blocks to add to the prefix list instance.
   */
  addPrefixListEntry?: ModifyVpcPrefixListRequestAddPrefixListEntry[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without modifying the prefix list configuration. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the prefix list configuration is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new maximum number of Classless Inter-Domain Routing block entries in the prefix list instance.
   * 
   * @example
   * 20
   */
  maxEntries?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new description of the prefix list.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * newdescription
   */
  prefixListDescription?: string;
  /**
   * @remarks
   * The instance ID of the prefix list that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-0b7hwu67****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The new name of the prefix list.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * newname
   */
  prefixListName?: string;
  /**
   * @remarks
   * The region ID of the prefix list that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of Classless Inter-Domain Routing blocks to delete from the prefix list instance.
   */
  removePrefixListEntry?: ModifyVpcPrefixListRequestRemovePrefixListEntry[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addPrefixListEntry: 'AddPrefixListEntry',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      maxEntries: 'MaxEntries',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListDescription: 'PrefixListDescription',
      prefixListId: 'PrefixListId',
      prefixListName: 'PrefixListName',
      regionId: 'RegionId',
      removePrefixListEntry: 'RemovePrefixListEntry',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addPrefixListEntry: { 'type': 'array', 'itemType': ModifyVpcPrefixListRequestAddPrefixListEntry },
      clientToken: 'string',
      dryRun: 'boolean',
      maxEntries: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListDescription: 'string',
      prefixListId: 'string',
      prefixListName: 'string',
      regionId: 'string',
      removePrefixListEntry: { 'type': 'array', 'itemType': ModifyVpcPrefixListRequestRemovePrefixListEntry },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addPrefixListEntry)) {
      $dara.Model.validateArray(this.addPrefixListEntry);
    }
    if(Array.isArray(this.removePrefixListEntry)) {
      $dara.Model.validateArray(this.removePrefixListEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

