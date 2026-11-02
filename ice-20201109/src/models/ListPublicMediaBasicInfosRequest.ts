// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicMediaBasicInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the media asset. Valid values:
   * 
   * - sticker: sticker
   * 
   * - bgm: background music
   * 
   * - bgi: background image
   * 
   * @example
   * sticker
   */
  businessType?: string;
  /**
   * @remarks
   * Specifies whether to include basic file information in the response.
   * 
   * @example
   * true
   */
  includeFileBasicInfo?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The media asset tag. The system matches media assets based on this mediaTagId and returns all media assets that contain this tag. Valid values:
   * - sticker: stickers
   *   - sticker-atmosphere: atmosphere
   *   - sticker-bubble: bubble
   *   - sticker-cute: cute
   *   - sticker-daily: daily
   *   - sticker-expression: expression
   *   - sticker-gif: GIF
   * - bgm: background music
   *   - bgm-romantic: romantic
   *   - bgm-cuisine: cuisine
   *   - bgm-chinese-style: Chinese style
   *   - bgm-upbeat: upbeat
   *   - bgm-dynamic: dynamic
   *   - bgm-relaxing: relaxing
   *   - bgm-quirky: quirky
   *   - bgm-beauty: fashion and beauty
   * - bgi: background images
   *   - bgi-grad: gradient background
   *   - bgi-solid: solid color background
   *   - bgi-pic: image background
   * 
   * @example
   * sticker-atmosphere
   */
  mediaTagId?: string;
  /**
   * @remarks
   * The token that indicates the position from which the next query starts. An empty value indicates that all data has been read.
   * 
   * @example
   * pSa1SQ0wCe5pzVrQ6mWZEw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
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

