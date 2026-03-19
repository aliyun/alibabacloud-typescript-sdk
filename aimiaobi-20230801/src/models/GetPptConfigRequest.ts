// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptConfigRequest extends $dara.Model {
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @example
   * llm-az2gglkjauwnnhpq
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
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

