// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27218,34956
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

