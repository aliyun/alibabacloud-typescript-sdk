// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByMultimodalRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filters. The value is a JSON string. Supported fields include the integer field intField1 and the string fields strField1 and strField2. You can specify at most one match type for a single field. Filters for different fields are combined by using the AND operator. Examples:
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
   * The media asset type. Default value: video. Valid values:
   * - image: Image.
   * - video: Video.
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
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
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
   * The search content. It can be a natural language description.
   * 
   * @example
   * Two pandas are fighting
   */
  text?: string;
  /**
   * @remarks
   * The creation time. The value is a timestamp in milliseconds. gte specifies greater than or equal to, and lte specifies less than or equal to. Example:
   * - Range match, such as {"gte":1761205662998,"lte":1771205662998}.
   * 
   * @example
   * {"gte":1761205662998,"lte":1771205662998}
   */
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
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

