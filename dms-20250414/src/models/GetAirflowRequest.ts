// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af-b3a7f110a6vmvn7****
   */
  airflowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8630242382****
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

