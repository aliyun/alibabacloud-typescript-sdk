// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClipsBuildInResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * 0 - 音色
   * 1- 背景音
   */
  resourceType?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Model Studio workspace.
   * 
   * @example
   * llm-az2gglkjauwnnhpq
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'number',
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

