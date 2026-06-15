// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Supported values:
   * 
   * - `RouterInterfaceId`: The ID of the router interface.
   * 
   * - `RouterId`: The ID of the router that the router interface is attached to.
   * 
   * - `RouterType`: The type of the router. Valid values: `VRouter` and `VBR`.
   * 
   * - `Status`: The status of the router interface.
   * 
   * - `Name`: The name of the router interface.
   * 
   * - `Role`: The role of the router interface. Valid values: `InitiatingSide` and `AcceptingSide`.
   */
  key?: string;
  /**
   * @remarks
   * The values for the filter key. You can specify a maximum of 20 values.
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

export class DescribeRouterInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: DescribeRouterInterfacesRequestFilter[];
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Page numbering starts from 1.
   * 
   * Default: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region. You can call the `DescribeRegions` operation to get the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeRouterInterfacesRequestFilter },
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

