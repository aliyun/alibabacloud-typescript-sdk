// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. The recommended value is from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this is your first query, leave this parameter empty.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group that contains the instance.
   * 
   * @example
   * rg-aekzu74zjgdu4mq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

