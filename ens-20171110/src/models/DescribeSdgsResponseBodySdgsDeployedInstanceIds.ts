// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsResponseBodySDGsDeployedInstanceIds extends $dara.Model {
  /**
   * @remarks
   * The time when the SDG was deployed on the instance.
   * 
   * @example
   * 2023-02-27 16:48:43
   */
  creationTime?: string;
  /**
   * @remarks
   * The deployment type of the SDG. Valid values:
   * 
   * *   common: common deployment.
   * *   overlay: read/write splitting deployment.
   * 
   * @example
   * overlay
   */
  deploymentType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * aic-5x20dyeos****
   */
  instanceId?: string;
  /**
   * @remarks
   * The deployment status. Valid values:
   * 
   * *   **sdg_deploying**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * sdg_deploying
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      deploymentType: 'DeploymentType',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      deploymentType: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

