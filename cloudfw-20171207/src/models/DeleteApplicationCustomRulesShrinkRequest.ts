// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationCustomRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the custom application rules to delete. You can specify up to 100 IDs in a single request. The IDs cannot be empty and must be unique.
   * 
   * This parameter is required.
   */
  applicationCustomRuleIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCustomRuleIdsShrink: 'ApplicationCustomRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCustomRuleIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

