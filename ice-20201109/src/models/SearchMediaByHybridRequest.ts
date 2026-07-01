// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridRequest extends $dara.Model {
  /**
   * @remarks
   * Custom filters. A JSON string. Supported backing fields include integer field intField1 and string fields strField1 and strField2. Only one matching condition can be applied per field, and filters across different fields are combined with a logical AND relationship.
   * 
   * - Exact match example: {"intField1":12,"strField1":"abc"}
   * 
   * - Multi-value example: {"intField1":[12,13],"strField1":["abc","cd"]}
   * 
   * - Range example: {"intField1":{"gte":12,"lte":13}}
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
  /**
   * @remarks
   * The ID of the media asset. If provided, the details of the media asset are returned.
   * 
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of media assets. Valid values:
   * 
   * - image
   * 
   * - video
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the search library
   * 
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @remarks
   * The natural language search query.
   * 
   * @example
   * Two pandas are fighting.
   */
  text?: string;
  /**
   * @remarks
   * Creation time, in milliseconds UNIX timestamp. gte means greater than or equal to, and lte means less than or equal to.
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

