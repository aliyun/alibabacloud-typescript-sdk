// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryDesensStatusListRequest extends $dara.Model {
  /**
   * @remarks
   * Query keyword
   * 
   * @example
   * my
   */
  keyword?: string;
  /**
   * @remarks
   * Page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Primary scene code
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  /**
   * @remarks
   * Scene ID. Only required when querying project workspace switch data.
   * 
   * @example
   * 124
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneCode: 'SceneCode',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sceneCode: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

