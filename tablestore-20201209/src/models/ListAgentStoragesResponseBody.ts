// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStoragesResponseBodyAgentStorages extends $dara.Model {
  /**
   * @remarks
   * agent storage description
   * 
   * @example
   * description for agent storage
   */
  agentStorageDescription?: string;
  /**
   * @remarks
   * The agent storage name, which is a unique key.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The specifications of the agent storage.
   * 
   * @example
   * SSD
   */
  agentStorageSpecification?: string;
  /**
   * @remarks
   * The status of the agent storage. Valid values:
   * - normal: Normal.
   * - forbidden: Disabled.
   * - deleting: Being released.
   * 
   * @example
   * normal
   */
  agentStorageStatus?: string;
  /**
   * @remarks
   * The alias of the agent storage.
   * 
   * @example
   * btnots
   */
  aliasName?: string;
  /**
   * @remarks
   * The creation time of the agent storage.
   * 
   * @example
   * 2025-04-16T06:02:59Z
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID of the agent storage.
   * 
   * @example
   * cn-shanghai-cloudspe
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 13542356466
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStorageDescription: 'AgentStorageDescription',
      agentStorageName: 'AgentStorageName',
      agentStorageSpecification: 'AgentStorageSpecification',
      agentStorageStatus: 'AgentStorageStatus',
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageDescription: 'string',
      agentStorageName: 'string',
      agentStorageSpecification: 'string',
      agentStorageStatus: 'string',
      aliasName: 'string',
      createTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of agent storage information.
   */
  agentStorages?: ListAgentStoragesResponseBodyAgentStorages[];
  /**
   * @remarks
   * The token used to retrieve the next page of results when the total number of tag resources exceeds the value of MaxResults. This parameter has a value only when not all tag resources are returned.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 39871ED2-62C0-578F-A32E-B88072D5582F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of agent storages returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentStorages: 'AgentStorages',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorages: { 'type': 'array', 'itemType': ListAgentStoragesResponseBodyAgentStorages },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentStorages)) {
      $dara.Model.validateArray(this.agentStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

