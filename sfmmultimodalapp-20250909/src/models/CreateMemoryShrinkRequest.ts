// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  autoUpdate?: boolean;
  content?: string;
  expirationTime?: number;
  messagesJson?: string;
  metaDataShrink?: string;
  projectId?: string;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
      content: 'Content',
      expirationTime: 'ExpirationTime',
      messagesJson: 'MessagesJson',
      metaDataShrink: 'MetaData',
      projectId: 'ProjectId',
      prompt: 'Prompt',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoUpdate: 'boolean',
      content: 'string',
      expirationTime: 'number',
      messagesJson: 'string',
      metaDataShrink: 'string',
      projectId: 'string',
      prompt: 'string',
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

