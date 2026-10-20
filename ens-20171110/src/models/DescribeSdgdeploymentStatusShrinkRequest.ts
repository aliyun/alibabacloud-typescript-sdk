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
   * The list of disk IDs.
   */
  diskIdsShrink?: string;
  /**
   * @remarks
   * The list of AIC instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number. Pages start from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of region IDs.
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
      diskIdsShrink: 'DiskIds',
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
      diskIdsShrink: 'string',
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

