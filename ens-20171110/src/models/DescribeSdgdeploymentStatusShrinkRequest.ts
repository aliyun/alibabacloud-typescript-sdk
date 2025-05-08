// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGDeploymentStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * shared
   */
  deploymentType?: string;
  /**
   * @remarks
   * IDs of Android in Container (AIC) instances.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the nodes.
   */
  regionIdsShrink?: string;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  /**
   * @remarks
   * The deployment status of the SDG.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentType: 'DeploymentType',
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIdsShrink: 'RegionIds',
      SDGId: 'SDGId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentType: 'string',
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIdsShrink: 'string',
      SDGId: 'string',
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

