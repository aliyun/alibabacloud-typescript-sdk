// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMetricRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run only. Valid values:
   * - **true**: performs a dry run only and does not bind a security group to the instance. The system checks whether all required parameters are specified, the request format is valid, and the service limits are met. If the request fails the check, the corresponding error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
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
   * Valid values of N: 1 to 100.
   * 
   * For more information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ab05733c97b7ce239fb1b53393dc1697c123****
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

