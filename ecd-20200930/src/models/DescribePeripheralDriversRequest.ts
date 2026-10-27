// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePeripheralDriversRequest extends $dara.Model {
  /**
   * @remarks
   * The brand identifier. Exact match. The value is based on the actual configuration and has no fixed enumeration. If this parameter is not specified, the brand is not limited. The example is used only to illustrate the format.
   * 
   * @example
   * hp
   */
  brand?: string;
  /**
   * @remarks
   * The device type identifier. Exact match. The value is based on the actual configuration. For example, printer indicates a printer. If this parameter is not specified, the device type is not limited.
   * 
   * @example
   * printer
   */
  deviceType?: string;
  /**
   * @remarks
   * The list of driver IDs. If this parameter is not specified or an empty array is passed, the driver ID is not limited. Only the drivers that are visible to the current account and match the conditions are returned. Unmatched IDs do not generate corresponding records.
   */
  driverIds?: string[];
  /**
   * @remarks
   * The search keyword. Matches the driver ID, brand identifier, driver name, description, device type, or brand display name. A match in any field is considered a hit. The percent sign (%) matches characters of any length, and the underscore (_) matches a single character. If this parameter is not specified, keyword filtering is not performed.
   * 
   * @example
   * LaserJet
   */
  filter?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not used for querying or pagination. Do not specify this parameter. Use PageSize to set the number of entries to return on each page. The sample value 20 is used only to demonstrate the integer type. It is not the default value of this parameter and does not take effect even if specified.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The reserved parameter. Token-based pagination is not supported. Do not specify this parameter. Use PageNumber to specify the page number. The sample value token-for-format-only is used only to demonstrate the string type and is not a usable pagination token.
   * 
   * @example
   * token-for-format-only
   */
  nextToken?: string;
  /**
   * @remarks
   * The driver ownership. Valid values: WUYING: Wuying official drivers. CUSTOMER: custom drivers of the current account. If this parameter is not specified, both types of drivers are queried.
   * 
   * @example
   * CUSTOMER
   */
  ownerType?: string;
  /**
   * @remarks
   * The page number. Specify a value starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 500. Default value: 20.
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

