// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalDatasetEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds-3h6bm*****af60
   */
  datasetId?: string;
  /**
   * @example
   * default
   */
  model?: string;
  /**
   * @example
   * flash
   */
  modelMode?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetId: 'DatasetId',
      model: 'Model',
      modelMode: 'ModelMode',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetId: 'string',
      model: 'string',
      modelMode: 'string',
      sourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

