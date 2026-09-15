// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageAlertRulesUnifiedActionInput } from "./ManageAlertRulesUnifiedActionInput";


export class ManageAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for managing alert rules. This body is shared by the CREATE, UPDATE, PATCH, and BATCH_DELETE actions. Specify the fields based on the action.
   */
  body?: ManageAlertRulesUnifiedActionInput;
  /**
   * @remarks
   * The identifier of the call source, which specifies the internal integration channel to which the caller belongs (such as bailian, integrationCenter, or managed_service_for_prometheus). This parameter is used to isolate traffic from different call sources. You do not need to specify this parameter for regular OpenAPI calls.
   * 
   * @example
   * bailian
   */
  callSource?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      callSource: 'callSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ManageAlertRulesUnifiedActionInput,
      callSource: 'string',
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

