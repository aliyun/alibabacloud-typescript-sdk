// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles } from "./ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles";


export class ListDeploymentPackageFilesResponseBodyPagingInfo extends $dara.Model {
  deploymentPackageFiles?: ListDeploymentPackageFilesResponseBodyPagingInfoDeploymentPackageFiles[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

