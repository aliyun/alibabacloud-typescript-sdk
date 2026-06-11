// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the Airflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * af-b3a7f110a6vmvn7****
   */
  airflowId?: string;
  /**
   * @remarks
   * The ID of the DMS workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowId: 'AirflowId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airflowId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

