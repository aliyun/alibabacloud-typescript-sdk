// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The template category. Valid values:
   * - system: system template.
   * - customized: custom template.
   * 
   * @example
   * customized
   */
  category?: string;
  /**
   * @remarks
   * The search keyword. You can search by template ID or name. Name supports fuzzy match.
   * 
   * @example
   * my_template
   */
  keyWord?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * The sorting order. Sorts by CreateTime. Default value: desc. Valid values:
   * 
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - normal: standard.
   * - narrow-band: narrowband HD.
   * - audio-only: audio only.
   * - origin: original quality.
   * 
   * @example
   * normal
   */
  type?: string;
  /**
   * @remarks
   * The video codec. Valid values:
   * 
   * - H.264
   * - H.265
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

