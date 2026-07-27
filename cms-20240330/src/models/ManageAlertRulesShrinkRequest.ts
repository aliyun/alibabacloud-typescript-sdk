// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageAlertRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for managing alert rules. This body is shared by CREATE, UPDATE, PATCH, and BATCH_DELETE operations. Specify fields based on the action.
   */
  bodyShrink?: string;
  callSource?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      callSource: 'callSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      callSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

