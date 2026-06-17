// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      modelName: 'ModelName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
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

