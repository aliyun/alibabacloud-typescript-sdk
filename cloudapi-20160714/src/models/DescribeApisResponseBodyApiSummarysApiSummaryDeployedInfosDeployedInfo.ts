// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo extends $dara.Model {
  /**
   * @remarks
   * The deployment status. Valid values: DEPLOYED and NONDEPLOYED.
   * 
   * @example
   * DEPLOYED
   */
  deployedStatus?: string;
  /**
   * @remarks
   * The deployed version.
   * 
   * @example
   * 20220103170737313
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * Stage Name:
   * 
   * *   **RELEASE**: production environment
   * *   **PRE**: staging environment
   * *   **TEST**: test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      deployedStatus: 'DeployedStatus',
      effectiveVersion: 'EffectiveVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedStatus: 'string',
      effectiveVersion: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

