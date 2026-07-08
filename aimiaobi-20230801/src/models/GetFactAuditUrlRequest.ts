// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFactAuditUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. Get the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

