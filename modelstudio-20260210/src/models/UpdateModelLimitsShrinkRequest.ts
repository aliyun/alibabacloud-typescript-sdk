// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelLimitsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-ac3ef438bec22dc5
   */
  workspaceId?: string;
  /**
   * @remarks
   * The throttling values for the workspace.
   */
  workspaceLimitsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
      workspaceLimitsShrink: 'workspaceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      workspaceLimitsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

