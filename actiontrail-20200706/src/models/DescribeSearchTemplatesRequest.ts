// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sc-lpYrjKouRfy3MK-wteJW_Q
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
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

