// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentConversationShareScopeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tenant_viewer
   */
  shareScope?: string;
  static names(): { [key: string]: string } {
    return {
      shareScope: 'shareScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

