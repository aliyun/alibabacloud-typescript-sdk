// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConversationsRequest extends $dara.Model {
  /**
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @example
   * 20201212
   */
  endModifyTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1168642640022064
   */
  siteId?: string;
  /**
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

