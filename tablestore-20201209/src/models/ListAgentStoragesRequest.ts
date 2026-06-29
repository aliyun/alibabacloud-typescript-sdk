// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStoragesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Owner
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Tester
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

export class ListAgentStoragesRequest extends $dara.Model {
  /**
   * @remarks
   * agent storage name
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The list of agent storage names, used to query multiple specified agent storages in a batch.
   */
  agentStorageNameList?: string[];
  /**
   * @remarks
   * The maximum number of tag resources to return in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The resource group ID. You can query this ID in the resource group console.
   * 
   * @example
   * rg-acfmxh4em5jncda
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the agent storage.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListAgentStoragesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      agentStorageNameList: 'AgentStorageNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      agentStorageNameList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListAgentStoragesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.agentStorageNameList)) {
      $dara.Model.validateArray(this.agentStorageNameList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

