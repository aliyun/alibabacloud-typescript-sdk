// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayTransferStatusRequest extends $dara.Model {
  /**
   * @example
   * xxx-xxxx
   */
  code?: string;
  /**
   * @example
   * llm-cxxxxxxb8d47ks
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      workspaceId: 'workspace_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

