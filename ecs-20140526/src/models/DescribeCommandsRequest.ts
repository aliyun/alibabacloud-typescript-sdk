// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tags. The tag key cannot be an empty string.
   * 
   * A query can return a maximum of 1,000 resources that match the specified tags. If more than 1,000 resources match, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query all matching resources.
   * 
   * The key can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tags. The tag value can be an empty string.
   * 
   * The value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * The ID of the command.
   * 
   * @example
   * c-hz01272yr52****
   */
  commandId?: string;
  /**
   * @remarks
   * The encoding format for the `CommandContent` and `Output` values in the response. Valid values:
   * 
   * - PlainText: returns the raw script content and output.
   * 
   * - Base64: returns the Base64-encoded script content and output.
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
   * - If you specify the `Provider` parameter to query public commands, fuzzy search is supported by default.
   * 
   * - If you do not specify the `Provider` parameter to query private commands, fuzzy search is supported. You can use an asterisk (\\*) as a wildcard. For example, `test*` returns all commands whose descriptions start with `test`, `*test` returns all commands whose descriptions end with `test`, and `*test*` returns all commands whose descriptions contain `test`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to return only the latest version of public commands. This parameter does not affect private commands.
   * 
   * - true: returns only the latest version of public commands.
   * 
   * - false: returns all versions of public commands.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  latest?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return per page.
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
   * - If you specify the `Provider` parameter to query public commands, fuzzy search is supported by default.
   * 
   * - If you do not specify the `Provider` parameter to query private commands, fuzzy search is supported. You can use an asterisk (\\*) as a wildcard. For example, `command*` returns all commands whose names start with `command`, `*command` returns all commands whose names end with `command`, and `*command*` returns all commands whose names contain `command`.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token for the next page of results. To retrieve the next page, set this parameter to the `NextToken` value from a previous call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is being deprecated. We recommend using NextToken and MaxResults for pagination instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is being deprecated. We recommend using NextToken and MaxResults for pagination instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider of the public command.
   * 
   * - If you omit this parameter, the operation queries your private commands by default.
   * 
   * - Set this parameter to `AlibabaCloud` to query all public commands from Alibaba Cloud.
   * 
   * - If you set the value to a specific provider, the public commands from that provider are queried. For example:
   * 
   *   - If you set `Provider` to `AlibabaCloud.ECS.GuestOS`, the public commands provided by AlibabaCloud.ECS.GuestOS are queried.
   * 
   *   - If you set `Provider` to `AlibabaCloud.ECS.GuestOSDiagnose`, the public commands provided by AlibabaCloud.ECS.GuestOSDiagnose are queried.
   * 
   * @example
   * AlibabaCloud
   */
  provider?: string;
  /**
   * @remarks
   * The ID of the region. To view the latest list of regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation.
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
   * The tags used to filter commands.
   */
  tag?: DescribeCommandsRequestTag[];
  /**
   * @remarks
   * The type of the command. Valid values:
   * 
   * - RunBatScript: A Bat script for Windows instances.
   * 
   * - RunPowerShellScript: A PowerShell script for Windows instances.
   * 
   * - RunShellScript: A Shell script for Linux instances.
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

