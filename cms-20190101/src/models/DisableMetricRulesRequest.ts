// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableMetricRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see Ensure idempotence.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits, but does not bind a security group to the instance. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * This parameter is required.
   */
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleId)) {
      $dara.Model.validateArray(this.ruleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

