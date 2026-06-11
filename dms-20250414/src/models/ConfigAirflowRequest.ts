// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the Airflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * af-b3a7f110a6vmvn7xxxxxx
   */
  airflowId?: string;
  /**
   * @remarks
   * The list of custom Airflow configurations.
   * 
   * This parameter is required.
   */
  customAirflowCfg?: string[];
  /**
   * @remarks
   * The DMS workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowId: 'AirflowId',
      customAirflowCfg: 'CustomAirflowCfg',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airflowId: 'string',
      customAirflowCfg: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customAirflowCfg)) {
      $dara.Model.validateArray(this.customAirflowCfg);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

