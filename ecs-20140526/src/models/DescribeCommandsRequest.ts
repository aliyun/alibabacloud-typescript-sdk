// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. Valid values of N: 1 to 20. The value cannot be an empty string.
   * 
   * When you use a single tag to filter resources, the resource count for that tag cannot exceed 1,000. When you use multiple tags to filter resources, the resource count for resources attached to all the specified tags cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command. Valid values of N: 1 to 20. The value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * - PlainText: Returns the original script content and output information.
   * - Base64: Returns the Base64-encoded script content and output information.
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
   * - When you specify the Provider parameter parameter query public commands, fuzzy search is supported by default.
   * 
   * - When you do not specify the Provider parameter parameter query private commands, fuzzy search is supported. For example, if you enter test*, the system searches for all commands whose descriptions start with test. If you enter *test, the system searches for all commands whose descriptions end with test. If you enter *test*, the system searches for all commands whose descriptions contain test.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to query only the latest version of public commands if the query result includes public commands. This parameter does not affect the query of private commands. Valid values:
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
   * The maximum number of entries per page for paging.
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
   * - When you specify the Provider parameter parameter query public commands, fuzzy search is supported by default.
   * 
   * - When you do not specify the Provider parameter parameter query private commands, fuzzy search is supported. For example, if you enter command*, the system searches for all commands whose names start with command. If you enter *command, the system searches for all commands whose names end with command. If you enter *command*, the system searches for all commands whose names contain command.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be deprecated soon. Use the NextToken and MaxResults parameters for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be deprecated soon. Use the NextToken and MaxResults parameters for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider of the public command. Valid values:
   * 
   * - If you do not specify this parameter, the system queries all Cloud Assistant commands that you manually created by default.
   * - If you set this parameter to AlibabaCloud, the system queries all public commands provided by Alibaba Cloud.
   * - If you set this parameter to a specific public command provider, the system queries all public commands provided by the provider. Examples:
   *     - If you set this parameter to AlibabaCloud.ECS.GuestOS, the system queries the public commands provided by AlibabaCloud.ECS.GuestOS.
   *     - If you set this parameter to AlibabaCloud.ECS.GuestOSDiagnose, the system queries the public commands provided by AlibabaCloud.ECS.GuestOSDiagnose.
   * 
   * @example
   * AlibabaCloud
   */
  provider?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The list of tags.
   */
  tag?: DescribeCommandsRequestTag[];
  /**
   * @remarks
   * The type of the command. Valid values: 
   * 
   * - RunBatScript: a Bat script that runs on a Windows instance.
   * - RunPowerShellScript: a PowerShell script that runs on a Windows instance.
   * - RunShellScript: a shell script that runs on a Linux instance.
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

