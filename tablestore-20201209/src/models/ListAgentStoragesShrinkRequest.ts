// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStoragesShrinkRequest extends $dara.Model {
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
  agentStorageNameListShrink?: string;
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
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      agentStorageNameListShrink: 'AgentStorageNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      agentStorageNameListShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

