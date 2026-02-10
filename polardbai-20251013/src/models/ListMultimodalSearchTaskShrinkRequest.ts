// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultimodalSearchTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  datasetIdsShrink?: string;
  /**
   * @example
   * 红绿灯
   */
  inputField?: string;
  /**
   * @example
   * flash，plus
   */
  modelMode?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetIdsShrink: 'DatasetIds',
      inputField: 'InputField',
      modelMode: 'ModelMode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetIdsShrink: 'string',
      inputField: 'string',
      modelMode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

