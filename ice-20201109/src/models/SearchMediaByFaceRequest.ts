// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByFaceRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filter. JSON string. Supported fields include integer field intField1 and string fields strField1 and strField2. Each field supports only one matching mode. Filters on different fields are combined with an AND relationship.
   * - Exact match, such as {"intField1":12,"strField1":"abc"}
   * - Multi-value match, such as {"intField1":[12,13],"strField1":["abc","cd"]}
   * - Range match, such as {"intField1":{"gte":12,"lte":13}}
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
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
   * The token used to identify paginated results under the same search condition. Use this parameter together with the FaceSearchToken parameter in the [refined search operation](https://help.aliyun.com/document_detail/612891.html).
   * 
   * This parameter is required.
   * 
   * @example
   * zxtest-huangxuan-2023-3-7-V1
   */
  faceSearchToken?: string;
  /**
   * @remarks
   * The media asset type. Valid values:
   * - image: image
   * - video: video
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
  /**
   * @remarks
   * The creation time, in millisecond-precision timestamp. gte specifies greater than or equal to, and lte specifies less than or equal to.
   * - Range, such as {"gte":1761205662998,"lte":1771205662998}
   * 
   * @example
   * {"gte":1761205662998,"lte":1771205662998}
   */
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      entityId: 'EntityId',
      faceSearchToken: 'FaceSearchToken',
      mediaType: 'MediaType',
      namespace: 'Namespace',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      personImageUrl: 'PersonImageUrl',
      searchLibName: 'SearchLibName',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      entityId: 'string',
      faceSearchToken: 'string',
      mediaType: 'string',
      namespace: 'string',
      pageNo: 'number',
      pageSize: 'number',
      personImageUrl: 'string',
      searchLibName: 'string',
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

