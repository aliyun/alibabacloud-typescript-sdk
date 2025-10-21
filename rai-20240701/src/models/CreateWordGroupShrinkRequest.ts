// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWordGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Request object
   */
  bodyDataShrink?: string;
  /**
   * @remarks
   * Whether to commit.
   * false: Not actually saved, only checked
   * true: Commit and save
   * 
   * @example
   * true
   */
  commit?: boolean;
  /**
   * @remarks
   * Keyword group name
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      commit: 'Commit',
      groupName: 'GroupName',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      commit: 'boolean',
      groupName: 'string',
      regionId: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

