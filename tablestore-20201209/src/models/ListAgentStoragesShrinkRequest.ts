// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStoragesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent storage.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The list of agent storage names. Use this parameter to query multiple specified agent storages in a batch.
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
   * The pagination token for querying subsequent pages. This parameter has a value only when not all tag resources are returned. If the total number of expected tag resources exceeds the MaxResults value, use this token to retrieve the next page.
   * 
   * @example
   * CAESCG15aC1xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group. You can query the ID in the Resource Group console.
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

