// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableMetricRulesRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run only. Valid values:
   * - **true**: sends a check request and does not bind a security group to the instance. Check items include whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the check passes, an HTTP 2xx status code is returned and the operation is performed.
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

