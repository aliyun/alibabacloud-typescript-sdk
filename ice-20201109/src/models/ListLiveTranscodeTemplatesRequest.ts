// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the template. Valid values:
   * 
   * *   system
   * *   customized
   * 
   * @example
   * customized
   */
  category?: string;
  /**
   * @remarks
   * The search keyword. You can use the template ID or name as the keyword to search for templates. If you search for templates by name, fuzzy match is supported.
   * 
   * @example
   * my_template
   */
  keyWord?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order. Valid values:
   * 
   * *   asc
   * *   desc
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the template. Valid values:
   * 
   * *   normal
   * *   narrow-band
   * *   audio-only
   * *   origin
   * 
   * @example
   * normal
   */
  type?: string;
  /**
   * @remarks
   * The video codec. Valid values:
   * 
   * *   H.264
   * *   H.265
   * 
   * @example
   * H.264
   */
  videoCodec?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyWord: 'KeyWord',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
      videoCodec: 'VideoCodec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keyWord: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
      videoCodec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

