// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * apigateway-cluster-hz-xxxxxxxxxxxx
   */
  instanceClusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test-cluster
   */
  instanceClusterName?: string;
  /**
   * @remarks
   * The page number of the page to return.
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
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClusterId: 'InstanceClusterId',
      instanceClusterName: 'InstanceClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClusterId: 'string',
      instanceClusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

