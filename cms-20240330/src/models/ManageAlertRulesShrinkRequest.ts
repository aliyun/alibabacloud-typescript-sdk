// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageAlertRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run only validates the request and returns the validation result in dryRunResult without writing to the database, triggering template synchronization, or causing other side effects. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The aggregated request body for managing alert rules. This body is shared by the CREATE, UPDATE, PATCH, and BATCH_DELETE operations. Specify the fields based on the action.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The call source identifier. It identifies the internal integration channel to which the caller belongs, such as bailian, integrationCenter, or managed_service_for_prometheus, and is used to isolate traffic from different sources. Leave this parameter empty for regular OpenAPI calls.
   * 
   * @example
   * bailian
   */
  callSource?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      bodyShrink: 'body',
      callSource: 'callSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

