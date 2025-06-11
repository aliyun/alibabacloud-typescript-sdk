// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset. The details of the media asset are returned.
   * 
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  namespace?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * test-1
   */
  searchLibName?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
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
      mediaId: 'string',
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

