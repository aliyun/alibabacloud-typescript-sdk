// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelMpsSchedulerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  type?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  uniqueIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      type: 'Type',
      uniqueIds: 'UniqueIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      type: 'number',
      uniqueIds: 'string',
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

