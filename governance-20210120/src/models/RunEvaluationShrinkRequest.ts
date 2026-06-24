// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEvaluationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account. This parameter is applicable only to the multi-account check pattern.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  evaluationDomain?: string;
  /**
   * @remarks
   * The list of check item IDs to check.
   */
  metricIdsShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scope of the governance maturity check. Valid values:
   * 
   * - Account (default): runs a single-account governance maturity check that checks only the current account.
   * - ResourceDirectory: runs a multi-account governance maturity check that checks all member accounts in the resource directory. Before you perform this operation, upgrade to the multi-account governance maturity check.
   * 
   * @example
   * ResourceDirectory
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      evaluationDomain: 'EvaluationDomain',
      metricIdsShrink: 'MetricIds',
      regionId: 'RegionId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      evaluationDomain: 'string',
      metricIdsShrink: 'string',
      regionId: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

