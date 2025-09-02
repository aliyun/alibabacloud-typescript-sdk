// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgWhiteListQueryListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the sensitive field type.
   * 
   * @example
   * phone
   */
  dataType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the level-2 data masking scenario. You can call the [DsgSceneQuerySceneListByName](https://help.aliyun.com/document_detail/2786322.html) operation to query the list of IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

