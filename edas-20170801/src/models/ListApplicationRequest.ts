// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application IDs.
   * 
   * @example
   * [
   *       "5657d271-****-4f03-9bb2-431f942886bb",
   *       "5657d271-****-4f03-9bb2-431f942bbddd"
   * ]
   */
  appIds?: string;
  /**
   * @remarks
   * The name of the application. Specify this parameter if you want to filter applications by application name.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID. Specify this parameter if you want to filter applications by cluster.
   * 
   * @example
   * c37aec2a-bcca-4ec1-****-************
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The namespace ID. Specify this parameter if you want to filter applications by namespace.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The ID of the namespace that you use in the exact search to filter applications.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionIdFilter?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. Specify this parameter if you want to filter applications by resource group.
   * 
   * @example
   * rg-aek24j4s4b*****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      appName: 'AppName',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      logicalRegionId: 'LogicalRegionId',
      logicalRegionIdFilter: 'LogicalRegionIdFilter',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      appName: 'string',
      clusterId: 'string',
      currentPage: 'number',
      logicalRegionId: 'string',
      logicalRegionIdFilter: 'string',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

