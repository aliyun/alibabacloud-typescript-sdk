// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  content?: string;
  memoryNodeId?: string;
  metaData?: { [key: string]: string };
  source?: string;
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
      content: 'Content',
      memoryNodeId: 'MemoryNodeId',
      metaData: 'MetaData',
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
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      source: 'string',
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

