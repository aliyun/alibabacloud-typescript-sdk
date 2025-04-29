// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyDeployedInfosDeployedInfo extends $dara.Model {
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
   * The effective version.
   * 
   * @example
   * xxx
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values: RELEASE and TEST.
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

