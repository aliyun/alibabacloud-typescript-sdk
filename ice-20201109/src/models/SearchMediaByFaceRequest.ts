// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByFaceRequest extends $dara.Model {
  /**
   * @remarks
   * Custom filters. A JSON string. The following backing fields are supported: intField1 (integer type), strField1 and strField2 (string type). For the same field, only one matching mode can be specified. Filters across different fields are combined with a logical AND relationship.
   * 
   * - Exact match, for example: {"intField1":12,"strField1":"abc"}
   * 
   * - Multi-value match, for example: {"intField1":[12,13],"strField1":["abc","cd"]}
   * 
   * - Range match, for example: {"intField1":{"gte":12,"lte":13}}
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
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
   * Creation time, in milliseconds UNIX timestamp. Use gte for greater than or equal to, and lte for less than or equal to.
   * 
   * - Example range: {"gte":1761205662998,"lte":1771205662998}
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

