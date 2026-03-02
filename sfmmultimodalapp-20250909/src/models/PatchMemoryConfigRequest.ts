// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchMemoryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  /**
   * @example
   * true
   */
  autoUpdate?: boolean;
  /**
   * @example
   * 30
   */
  expirationTime?: number;
  prompt?: string;
  /**
   * @example
   * 0.03
   */
  threshold?: number;
  /**
   * @example
   * 3
   */
  topK?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 110b6d4359977d1
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

