// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicMediaBasicInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the media asset. Valid values:
   * 
   * *   sticker
   * *   bgm
   * *   bgi
   * 
   * @example
   * sticker
   */
  businessType?: string;
  /**
   * @remarks
   * Specifies whether to return the basic information of the media asset.
   * 
   * @example
   * true
   */
  includeFileBasicInfo?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The media tag. All media assets that contain the specified media tag are returned. Valid values:
   * 
   * *   Sticker tags:
   * 
   *     *   sticker-atmosphere
   *     *   sticker-bubble
   *     *   sticker-cute
   *     *   sticker-daily
   *     *   sticker-expression
   *     *   sticker-gif
   * 
   * *   Background music (BGM) tags:
   * 
   *     *   bgm-romantic
   *     *   bgm-cuisine
   *     *   bgm-chinese-style
   *     *   bgm-upbeat
   *     *   bgm-dynamic
   *     *   bgm-relaxing
   *     *   bgm-quirky
   *     *   bgm-beauty
   * 
   * *   Background image (BGI) tags:
   * 
   *     *   bgi-grad
   *     *   bgi-solid
   *     *   bgi-pic
   * 
   * @example
   * ticker-atmosphere
   */
  mediaTagId?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * pSa1SQ0wCe5pzVrQ6mWZEw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      maxResults: 'MaxResults',
      mediaTagId: 'MediaTagId',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      includeFileBasicInfo: 'boolean',
      maxResults: 'number',
      mediaTagId: 'string',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

