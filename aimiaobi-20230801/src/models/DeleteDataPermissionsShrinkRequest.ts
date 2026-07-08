// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataPermissionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The permission IDs.
   * 
   * This parameter is required.
   */
  idsShrink?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspace ID](https://help.aliyun.com/document_detail/2587495.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
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

