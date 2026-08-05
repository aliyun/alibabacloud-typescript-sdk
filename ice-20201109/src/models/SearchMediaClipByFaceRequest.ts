// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaClipByFaceRequest extends $dara.Model {
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 2d3bf1e35a1e42b5ab338d701efa****
   */
  entityId?: string;
  /**
   * @remarks
   * The value must be the same as the FaceSearchToken value in the [coarse search operation](https://help.aliyun.com/document_detail/612893.html). This parameter is used to determine paginated results under the same search condition.
   * 
   * This parameter is required.
   * 
   * @example
   * zxtest-huangxuan-2023-3-7-V1
   */
  faceSearchToken?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
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
   * The name of the search library.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      faceSearchToken: 'FaceSearchToken',
      mediaId: 'MediaId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      faceSearchToken: 'string',
      mediaId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

