// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultimodalSearchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  datasetIds?: string[];
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
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetIds: 'DatasetIds',
      inputField: 'InputField',
      modelMode: 'ModelMode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetIds: { 'type': 'array', 'itemType': 'string' },
      inputField: 'string',
      modelMode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetIds)) {
      $dara.Model.validateArray(this.datasetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

