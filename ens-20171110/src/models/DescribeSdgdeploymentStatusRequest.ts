// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGDeploymentStatusRequest extends $dara.Model {
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
  instanceIds?: string[];
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
  regionIds?: string[];
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
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      SDGId: 'SDGId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      SDGId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

