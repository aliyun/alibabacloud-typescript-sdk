// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryShrinkRequest extends $dara.Model {
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
   * True
   */
  content?: string;
  /**
   * @example
   * 384dc4786b9d4f5a8cab0d83112cd5a8
   */
  memoryNodeId?: string;
  metaDataShrink?: string;
  /**
   * @example
   * []
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bfaf7e110b6d435997
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
      content: 'Content',
      memoryNodeId: 'MemoryNodeId',
      metaDataShrink: 'MetaData',
      source: 'Source',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      content: 'string',
      memoryNodeId: 'string',
      metaDataShrink: 'string',
      source: 'string',
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

