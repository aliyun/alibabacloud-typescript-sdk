// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePeripheralDriversRequest extends $dara.Model {
  /**
   * @remarks
   * The brand identifier. Exact match is used. The value depends on the actual configuration and is not a fixed enumeration. If this parameter is not specified, drivers of all brands are returned. The example value is provided to illustrate the format only.
   * 
   * @example
   * hp
   */
  brand?: string;
  /**
   * @remarks
   * The device type identifier. Exact match is used. The value depends on the actual configuration. For example, printer indicates a printer. If this parameter is not specified, drivers of all device types are returned.
   * 
   * @example
   * printer
   */
  deviceType?: string;
  /**
   * @remarks
   * The list of driver IDs. If this parameter is not specified or an empty array is passed in, no filtering by driver ID is applied. Only drivers that are visible to the current account and match the specified IDs are returned. IDs that do not match any driver do not produce corresponding records.
   */
  driverIds?: string[];
  /**
   * @remarks
   * The search keyword. The keyword is matched against the driver ID, brand identifier, driver name, description, device type, or brand display name. A hit on any field qualifies the driver. The wildcard % matches any number of characters, and _ matches a single character. If this parameter is not specified, no keyword filtering is applied.
   * 
   * @example
   * LaserJet
   */
  filter?: string;
  /**
   * @remarks
   * Reserved parameter. This parameter does not participate in queries or pagination. Do not specify this parameter. Use PageSize to set the number of entries per page. The example value 20 is provided only to illustrate the integer type. It is not the default value of this parameter and does not take effect if specified.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Reserved parameter. Token-based pagination is not supported. Do not specify this parameter. Use PageNumber to specify the page number. The example value token-for-format-only is provided only to illustrate the string type and is not a usable pagination token.
   * 
   * @example
   * token-for-format-only
   */
  nextToken?: string;
  /**
   * @remarks
   * The driver ownership. Valid values:
   * - WUYING: Wuying official driver.
   * - CUSTOMER: Custom driver of the current account.
   * 
   * If this parameter is not specified, both types of drivers are queried.
   * 
   * @example
   * CUSTOMER
   */
  ownerType?: string;
  /**
   * @remarks
   * The page number. Start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      deviceType: 'DeviceType',
      driverIds: 'DriverIds',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerType: 'OwnerType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      deviceType: 'string',
      driverIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.driverIds)) {
      $dara.Model.validateArray(this.driverIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

