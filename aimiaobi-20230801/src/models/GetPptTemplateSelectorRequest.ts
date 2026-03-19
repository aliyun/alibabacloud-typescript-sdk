// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptTemplateSelectorRequest extends $dara.Model {
  /**
   * @example
   * lm-xxxx
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

