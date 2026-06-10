// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * Bot ID
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * End modification time (ISO 8601 format)
   * 
   * @example
   * 20201212
   */
  endModifyTime?: string;
  /**
   * @remarks
   * The number of entries to return in each query result.  
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token indicating the start of the next query. It is empty when there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Site ID
   * 
   * @example
   * 1168642640022064
   */
  siteId?: string;
  /**
   * @remarks
   * Start modification time (ISO 8601 format)
   * 
   * @example
   * 20200101
   */
  startModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      endModifyTime: 'EndModifyTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startModifyTime: 'StartModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      endModifyTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      siteId: 'string',
      startModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

