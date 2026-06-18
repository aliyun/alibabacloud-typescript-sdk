// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDoSInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * esa-ddos-b1e0l80ugfeo
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number. Default: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page. Default: 20. Maximum: 500. Valid values: integers from 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Associated site package instance ID.
   * 
   * @example
   * esa-site-a71k7bw1adf
   */
  siteInstanceId?: string;
  /**
   * @remarks
   * Sort field. Default: CreateTime.
   * 
   * - **CreateTime**: Time when the instance was purchased.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order:
   * 
   * - asc: ascending.
   * 
   * - desc: descending.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * Instance status.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteInstanceId: 'SiteInstanceId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteInstanceId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
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

