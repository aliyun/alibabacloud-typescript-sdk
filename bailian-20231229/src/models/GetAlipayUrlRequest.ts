// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bailian application.
   * 
   * @example
   * asfasdfxxasdf
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the Bailian workspace.
   * 
   * @example
   * xxxllm-czb8d47ks
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'app_id',
      workspaceId: 'workspace_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

