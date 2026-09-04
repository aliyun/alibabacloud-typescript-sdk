// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCopilotMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * Used together with the SortingField parameter. A value of **true** specifies ascending order, and a value of **false** specifies descending order.
   * 
   * @example
   * false
   */
  ascending?: boolean;
  /**
   * @remarks
   * The conversation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  conversationId?: string;
  /**
   * @remarks
   * The language of the returned messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return when you use the NextToken-based pagination method. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. Leave this parameter empty to query from the beginning.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the Cloud Threat Detection and Response (CTDR) data management center resides. Specify the management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The trace ID, which is used to query specific call information.
   * 
   * @example
   * 550e8400e29b41d4a71644665544****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      ascending: 'Ascending',
      conversationId: 'ConversationId',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascending: 'boolean',
      conversationId: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

