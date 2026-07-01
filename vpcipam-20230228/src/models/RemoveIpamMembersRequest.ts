// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIpamMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The member ID.
   * 
   * - **Folder ID**: The ID of the folder.
   * 
   * - **Account UID**: The UID of the member account in the resource directory.
   * 
   * @example
   * Folder
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member. Valid values:
   * 
   * - **Folder**: The member is a folder.
   * 
   * - **Account**: The member is a member account in the resource directory.
   * 
   * @example
   * fd-ccccncASqa
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

export class RemoveIpamMembersRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a value from your client to make sure that the value is unique among different requests. The ClientToken parameter can contain only ASCII characters. Note: If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the required parameters, the request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned. The members are not removed.
   * 
   * - **false** (default): Sends a request. If the request passes the check, a 2xx HTTP status code is returned, and the members are removed.
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
  members?: RemoveIpamMembersRequestMembers[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM is hosted. To get the region ID, call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation.
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
      members: { 'type': 'array', 'itemType': RemoveIpamMembersRequestMembers },
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

