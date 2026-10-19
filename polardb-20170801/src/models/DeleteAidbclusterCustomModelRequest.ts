// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterCustomModelRequest extends $dara.Model {
  /**
   * @remarks
   * The custom model registration key to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * Qwen3-32B
   */
  modelName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

