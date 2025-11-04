// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridRequest extends $dara.Model {
  /**
   * @example
   * {}
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
   * - image
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
   * Two pandas are fighting
   */
  text?: string;
  /**
   * @example
   * {}
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

