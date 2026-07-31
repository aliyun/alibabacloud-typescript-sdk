// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with the tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count with all the specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * The encoding mode of the CommandContent and Output fields in the response. Valid values:
   * - PlainText: returns the original script content and output.
   * - Base64: returns Base64-encoded script content and output.
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
   * - If the Provider parameter is specified parameter query public commands, fuzzy match is supported by default.
   * 
   * - If the Provider parameter is not specified parameter query private commands, fuzzy match is supported. For example, enter `test*` to search for all commands whose descriptions start with `test`, enter `*test` to search for all commands whose descriptions end with `test`, or enter `*test*` to search for all commands whose descriptions contain `test`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to query only the latest version of public commands when the query results include public commands. This parameter does not affect the query of private commands.
   * 
   * - true: queries only the latest version of public commands.
   * 
   * - false: queries all versions of public commands.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  latest?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page for paging queries.
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
   * - If the Provider parameter is specified parameter query public commands, fuzzy match is supported by default.
   * 
   * - If the Provider parameter is not specified parameter query private commands, fuzzy match is supported. For example, enter `command*` to search for all commands whose names start with `command`, enter `*command` to search for all commands whose names end with `command`, or enter `*command*` to search for all commands whose names contain `command`.
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
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to perform paging queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to perform paging queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider of the public command. Valid values:
   * 
   * - If you do not specify this parameter, all Cloud Assistant commands that you manually created are queried by default.
   * - If you set this parameter to `AlibabaCloud`, all public commands provided by Alibaba Cloud are queried.
   * - If you set this parameter to a specific public command provider, all public commands provided by the provider are queried. Examples:
   *     - If you set Provider to `AlibabaCloud.ECS.GuestOS`, all public commands provided by `AlibabaCloud.ECS.GuestOS` are queried.
   *     - If you set Provider to `AlibabaCloud.ECS.GuestOSDiagnose`, all public commands provided by `AlibabaCloud.ECS.GuestOSDiagnose` are queried.
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
   * - RunShellScript: shell script that runs on Linux instances.
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

