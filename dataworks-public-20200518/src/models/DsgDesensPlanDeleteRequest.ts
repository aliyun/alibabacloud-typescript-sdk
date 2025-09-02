// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of data masking rules.
   * 
   * This parameter is required.
   */
  ids?: number[];
  /**
   * @remarks
   * The code of the level-1 data masking scenario to which the rule belongs. Valid values:
   * 
   * *   dataworks_display_desense_code: masking of displayed data in DataStudio and Data Map
   * *   maxcompute_desense_code: data masking at the MaxCompute compute engine layer
   * *   maxcompute_new_desense_code: data masking at the MaxCompute compute engine layer (new)
   * *   hologres_display_desense_code: data masking at the Hologres compute engine layer
   * *   dataworks_data_integration_desense_code: static data masking in Data Integration
   * *   dataworks_analysis_desense_code: masking of displayed data in DataAnalysis
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      sceneCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

