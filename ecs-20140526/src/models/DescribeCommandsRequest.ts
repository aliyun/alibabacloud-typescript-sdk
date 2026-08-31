// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with this tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count with all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-hz01272yr52****
   */
  commandId?: string;
  /**
   * @remarks
   * The encoding mode of the `CommandContent` and `Output` fields in the response. Valid values:
   * - PlainText: Returns the original script content and output.
   * - Base64: Returns the Base64-encoded script content and output.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The description of the command.
   * 
   * - When the `Provider` parameter is specified parameter query public commands, fuzzy match is supported by default.
   * 
   * - When the `Provider` parameter is not specified parameter query private commands, fuzzy match is supported. For example, enter `test*` to search for all commands whose descriptions start with `test`, enter `*test` to search for all commands whose descriptions end with `test`, or enter `*test*` to search for all commands whose descriptions contain `test`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to query only the latest version of public commands when the query results include public commands. This parameter does not affect the query of private commands.
   * 
   * - true: Queries only the latest version of public commands.
   * 
   * - false: Queries all versions of public commands.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  latest?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the command.
   * 
   * - When the `Provider` parameter is specified parameter query public commands, fuzzy match is supported by default.
   * 
   * - When the `Provider` parameter is not specified parameter query private commands, fuzzy match is supported. For example, enter `command*` to search for all commands whose names start with `command`, enter `*command` to search for all commands whose names end with `command`, or enter `*command*` to search for all commands whose names contain `command`.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to complete paged query operations. For paging, use NextToken and MaxResults instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to complete paged query operations. For paging, use NextToken and MaxResults instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider of the public command. Valid values:
   * 
   * - If this parameter is not specified, all Cloud Assistant commands that you manually created are queried by default.
   * - If this parameter is set to `AlibabaCloud`, all public commands provided by Alibaba Cloud are queried.
   * - If this parameter is set to a specific public command provider, all public commands provided by that provider are queried. Examples:
   *     - If `Provider=AlibabaCloud.ECS.GuestOS`, public commands provided by `AlibabaCloud.ECS.GuestOS` are queried.
   *     - If `Provider=AlibabaCloud.ECS.GuestOSDiagnose`, public commands provided by `AlibabaCloud.ECS.GuestOSDiagnose` are queried.
   * 
   * @example
   * AlibabaCloud
   */
  provider?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the command belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeCommandsRequestTag[];
  /**
   * @remarks
   * The type of the command. Valid values: 
   * 
   * - RunBatScript: Bat script that runs on Windows instances.
   * - RunPowerShellScript: PowerShell script that runs on Windows instances.
   * - RunShellScript: Shell script that runs on Linux instances.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      latest: 'Latest',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      contentEncoding: 'string',
      description: 'string',
      latest: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCommandsRequestTag },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

