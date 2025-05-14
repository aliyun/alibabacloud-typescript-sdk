// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByFaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 2d3bf1e35a1e42b5ab338d701efa****
   */
  entityId?: string;
  /**
   * @remarks
   * The token that is used to identify the query. You can use this parameter in the SearchMediaClipByFace operation to specify the same query conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * zxtest-huangxuan-2023-3-7-V1
   */
  faceSearchToken?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * *   image
   * *   video
   * 
   * @example
   * video
   */
  mediaType?: string;
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
   * The URL of the face image.
   * 
   * This parameter is required.
   * 
   * @example
   * https://****.oss-cn-shanghai.aliyuncs.com/input/huangxuan****.jpg
   */
  personImageUrl?: string;
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
      mediaType: 'MediaType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      personImageUrl: 'PersonImageUrl',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      faceSearchToken: 'string',
      mediaType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      personImageUrl: 'string',
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

