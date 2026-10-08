// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs.
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
   * Filters the application list by application name.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * Filters the application list by cluster.
   * 
   * @example
   * c37aec2a-bcca-4ec1-****-************
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Filters the application list by microservices namespace.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * Filters applications by exact match of the microservices namespace.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionIdFilter?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the application list by resource group.
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

