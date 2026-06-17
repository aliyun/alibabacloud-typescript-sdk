// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The model API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mi-xxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      modelApiId: 'ModelApiId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      modelApiId: 'string',
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

