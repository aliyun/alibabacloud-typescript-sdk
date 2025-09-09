// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag configured for the instances you want to query.
   * 
   * @example
   * acs:newretail:domain
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag configured for the instances you want to query.
   * 
   * @example
   * NEW_RETAIL
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instances.
   * 
   * @example
   * drds_test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the instances that you want to query expire.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * Specifies whether hybrid queries are supported.
   * 
   * @example
   * FALSE
   */
  mix?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * V1
   */
  productVersion?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong. The value of this parameter can be NULL.
   * 
   * @example
   * NULL
   */
  resourceGroupId?: string;
  tag?: DescribeDrdsInstancesRequestTag[];
  /**
   * @remarks
   * The type of the instances that you want to query. Valid values:
   * 
   * *   **0**: shared instances
   * *   **1**: dedicated instances
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expired: 'Expired',
      mix: 'Mix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expired: 'boolean',
      mix: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDrdsInstancesRequestTag },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

