// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByMultimodalRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the media assets.
   * 
   * Valid values:
   * 
   * *   image
   * *   video (default)
   * 
   * @example
   * video
   */
  mediaType?: string;
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
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      mediaType: 'MediaType',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchLibName: 'SearchLibName',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaType: 'string',
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchLibName: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

