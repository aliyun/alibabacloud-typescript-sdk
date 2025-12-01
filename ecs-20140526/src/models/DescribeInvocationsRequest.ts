// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The command task ID.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The ID of the resource group. After you set this parameter, command execution results in the specified resource group are queried.
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

export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * $.parameters[15].schema.items.description
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * $.parameters[15].schema.items.example
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * $.parameters[15].schema.items.enumValueTitles
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @example
   * false
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * $.parameters[15].schema.enumValueTitles
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * $.parameters[15].schema.items.properties.Value.enumValueTitles
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * $.parameters[15].schema.example
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * acs:ecs:{#regionId}:{#accountId}:instance/*
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Instance
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * acs:ecs:{#regionId}:{#accountId}:command/*
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Command
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * $.parameters[15].schema.items.properties.Value.description
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * FEATUREecsXZ3H4M
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * $.parameters[15].schema.items.properties.Value.example
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * dubbo
   */
  tag?: DescribeInvocationsRequestTag[];
  /**
   * @remarks
   * $.parameters[15].schema.description
   * 
   * @example
   * true
   */
  timed?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      contentEncoding: 'ContentEncoding',
      includeOutput: 'IncludeOutput',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repeatMode: 'RepeatMode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      timed: 'Timed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      contentEncoding: 'string',
      includeOutput: 'boolean',
      instanceId: 'string',
      invokeId: 'string',
      invokeStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeInvocationsRequestTag },
      timed: 'boolean',
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

