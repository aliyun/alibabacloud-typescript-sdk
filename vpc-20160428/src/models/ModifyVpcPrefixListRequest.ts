// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpcPrefixListRequestAddPrefixListEntry } from "./ModifyVpcPrefixListRequestAddPrefixListEntry";
import { ModifyVpcPrefixListRequestRemovePrefixListEntry } from "./ModifyVpcPrefixListRequestRemovePrefixListEntry";


export class ModifyVpcPrefixListRequest extends $dara.Model {
  /**
   * @remarks
   * The information about CIDR blocks to be added to the prefix list.
   */
  addPrefixListEntry?: ModifyVpcPrefixListRequestAddPrefixListEntry[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The maximum number of CIDR blocks supported by the prefix list after the configuration of the prefix list is modified.
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
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * newdescription
   */
  prefixListDescription?: string;
  /**
   * @remarks
   * The ID of the prefix list.
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
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * newname
   */
  prefixListName?: string;
  /**
   * @remarks
   * The region ID of the prefix list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The information about CIDR blocks to be deleted to the prefix list.
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

