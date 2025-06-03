// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles } from "./ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles";


export class ListDeploymentPackageFilesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The details of the versions of the files to be deployed.
   */
  deploymentPackageFiles?: ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles[];
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentPackageFiles: 'DeploymentPackageFiles',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentPackageFiles: { 'type': 'array', 'itemType': ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentPackageFiles)) {
      $dara.Model.validateArray(this.deploymentPackageFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

