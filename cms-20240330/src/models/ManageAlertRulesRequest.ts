// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageAlertRulesUnifiedActionInput } from "./ManageAlertRulesUnifiedActionInput";


export class ManageAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for managing alert rules. This body is shared by CREATE, UPDATE, PATCH, and BATCH_DELETE operations. Specify fields based on the action.
   */
  body?: ManageAlertRulesUnifiedActionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ManageAlertRulesUnifiedActionInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

