// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Valid values:
   * 
   * - `AccessPointId`: Filter by access point ID.
   * - `AccessPointName`: Filter by access point name.
   */
  key?: string;
  /**
   * @remarks
   * The filter values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsRequest extends $dara.Model {
  /**
   * @remarks
   * The filters to apply to the query results.
   */
  filter?: DescribeAccessPointsRequestFilter[];
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the access points are located. Call the `DescribeRegions` operation to query the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the access point. Set the value to `ecs`.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeAccessPointsRequestFilter },
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

