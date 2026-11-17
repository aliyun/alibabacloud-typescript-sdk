// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebFilterRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of web filtering rule IDs to delete. You can specify up to 100 IDs in a single request. The IDs cannot be empty and must be unique.
   * 
   * This parameter is required.
   */
  webFilterRuleIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      webFilterRuleIdsShrink: 'WebFilterRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webFilterRuleIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

