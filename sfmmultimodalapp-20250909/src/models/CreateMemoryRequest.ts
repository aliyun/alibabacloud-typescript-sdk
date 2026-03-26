// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  autoUpdate?: boolean;
  content?: string;
  expirationTime?: number;
  messagesJson?: string;
  metaData?: { [key: string]: string };
  /**
   * @example
   * profile_project
   */
  projectId?: string;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CD51C0ED-4666-13DA-BC7D-C0D21CBE16C9
   */
  userDefinedId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-jb5sabg80b4ts71g
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoUpdate: 'AutoUpdate',
      content: 'Content',
      expirationTime: 'ExpirationTime',
      messagesJson: 'MessagesJson',
      metaData: 'MetaData',
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
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      projectId: 'string',
      prompt: 'string',
      userDefinedId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

