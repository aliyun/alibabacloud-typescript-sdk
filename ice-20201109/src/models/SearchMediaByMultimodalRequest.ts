// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByMultimodalRequest extends $dara.Model {
  /**
   * @remarks
   * Custom filters. A JSON string. Supported backing fields include integer field intField1 and string fields strField1 and strField2. Only one matching condition can be applied per field, and filters across different fields are combined with a logical AND relationship.
   * 
   * - Exact match example: {"intField1":12,"strField1":"abc"}
   * 
   * - Multi-value match example: {"intField1":[12,13],"strField1":["abc","cd"]}
   * 
   * - Range match example: {"intField1":{"gte":12,"lte":13}}
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
  /**
   * @remarks
   * The type of the media assets.
   * 
   * Valid values:
   * 
   * - image
   * 
   * - video (default)
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * Namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
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
   * The number of entries per page. Default value: 10. Maximum value: 50.
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
   * The content that you want to query. You can describe the content in natural language.
   * 
   * @example
   * Two pandas are fighting.
   */
  text?: string;
  /**
   * @remarks
   * Creation time, in milliseconds UNIX timestamp. gte indicates greater than or equal to, and lte indicates less than or equal to.
   * 
   * - Range example: {"gte":1761205662998,"lte":1771205662998}
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

