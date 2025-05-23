// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeploymentPackagesResponseBodyDataDeployments } from "./ListDeploymentPackagesResponseBodyDataDeployments";


export class ListDeploymentPackagesResponseBodyData extends $dara.Model {
  deployments?: ListDeploymentPackagesResponseBodyDataDeployments[];
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
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployments: 'Deployments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': ListDeploymentPackagesResponseBodyDataDeployments },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployments)) {
      $dara.Model.validateArray(this.deployments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

