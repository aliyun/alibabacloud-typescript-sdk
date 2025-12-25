// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * L2omaCMmQZZkEg4pE****
   */
  sceneId?: string;
  /**
   * @example
   * true
   */
  showLayoutData?: boolean;
  /**
   * @example
   * NAME
   */
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      showLayoutData: 'ShowLayoutData',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      sceneId: 'string',
      showLayoutData: 'boolean',
      sortField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

