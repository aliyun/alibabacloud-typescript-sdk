// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-0005**********hhjw
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number for paged queries. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * - **ResourceType=PV**: The persistent volume ID.
   * 
   * @example
   * a9ab843d-****-****-8e46-1d67a82128a7
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid value:
   * 
   * - **PV**: persistent volume (PV).
   * 
   * @example
   * PV
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

