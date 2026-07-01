// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddIpamMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The member ID.
   * 
   * - **Folder ID**: The ID of the folder.
   * 
   * - **Account UID**: The UID of a member account in the resource directory.
   * 
   * @example
   * fd-ccccncASqa
   */
  memberId?: string;
  /**
   * @remarks
   * The member type. Valid values:
   * 
   * - **Folder**: A folder.
   * 
   * - **Account**: A member account in a resource directory.
   * 
   * @example
   * Folder
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpamMembersRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client for each request. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The request is checked for required parameters, request format, and service limits. Members are not added to the IPAM trusted service. If the check passes, the DryRunOperation error code is returned. If the check fails, an error is returned.
   * 
   * - **false** (Default): Sends a request. If the request passes the check, the members are added to the IPAM trusted service and an HTTP 2xx status code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The members managed by the IPAM trusted service.
   * 
   * This parameter is required.
   */
  members?: AddIpamMembersRequestMembers[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the IPAM hosted region.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      members: 'Members',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      members: { 'type': 'array', 'itemType': AddIpamMembersRequestMembers },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

