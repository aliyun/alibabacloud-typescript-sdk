// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filters. A JSON string. Supports the integer field intField1 and the string fields strField1 and strField2. You can select at most one match type for the same field. Filters for different fields use the AND logical operator.
   * - Exact match, such as {"intField1":12,"strField1":"abc"}.
   * - Multi-value match, such as {"intField1":[12,13],"strField1":["abc","cd"]}.
   * - Range match, such as {"intField1":{"gte":12,"lte":13}}.
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
  /**
   * @remarks
   * The media asset ID. If specified, detailed hit information of the media asset is returned.
   * 
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media asset type.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * - image: Images.
   * - video: Videos.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search library.
   * 
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @remarks
   * The search content.
   * 
   * @example
   * Two pandas are fighting
   */
  text?: string;
  /**
   * @remarks
   * The creation time. A millisecond timestamp. gte indicates greater than or equal to, and lte indicates less than or equal to.
   * - Range match, such as {"gte":1761205662998,"lte":1771205662998}.
   * 
   * @example
   * {"gte":1761205662998,"lte":1771205662998}
   */
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchLibName: 'SearchLibName',
      text: 'Text',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      mediaId: 'string',
      mediaType: 'string',
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchLibName: 'string',
      text: 'string',
      utcCreate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

