// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableMetricRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request. Valid values:
   * - **true**: sends a dry run request and does not bind a security group to the instance. Check items include whether required parameters are specified, the request format, and service limits. If the request fails the check, the corresponding error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
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
      dryRun: 'DryRun',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

