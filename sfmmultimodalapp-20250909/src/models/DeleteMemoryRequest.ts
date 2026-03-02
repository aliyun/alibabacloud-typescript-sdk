// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CD51C0ED-4666-13DA-BC7D-C0D21CBE16C
   */
  memoryNodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5A7C969B-5101-112B-8202-DFAEEA4BFBED
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
      memoryNodeId: 'MemoryNodeId',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      memoryNodeId: 'string',
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

