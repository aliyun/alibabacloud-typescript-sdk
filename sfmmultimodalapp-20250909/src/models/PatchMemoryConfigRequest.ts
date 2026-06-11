// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchMemoryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  autoUpdate?: boolean;
  expirationTime?: number;
  prompt?: string;
  threshold?: number;
  topK?: number;
  userDefinedId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoUpdate: 'AutoUpdate',
      expirationTime: 'ExpirationTime',
      prompt: 'Prompt',
      threshold: 'Threshold',
      topK: 'TopK',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoUpdate: 'boolean',
      expirationTime: 'number',
      prompt: 'string',
      threshold: 'number',
      topK: 'number',
      userDefinedId: 'string',
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

