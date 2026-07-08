// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * The bot ID.
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * The end modification time in ISO 8601 format.
   * 
   * @example
   * 20201212
   */
  endModifyTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results exist.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1168642640022064
   */
  siteId?: string;
  /**
   * @remarks
   * The start modification time in ISO 8601 format.
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

