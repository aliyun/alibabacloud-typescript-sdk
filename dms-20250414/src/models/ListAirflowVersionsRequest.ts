// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAirflowVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DMS workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 8630242382****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

