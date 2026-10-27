// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePeripheralDriversResponseBodyDriverInfos extends $dara.Model {
  /**
   * @remarks
   * The brand to which the driver belongs.
   * 
   * @example
   * hp
   */
  brand?: string;
  /**
   * @remarks
   * The time when the driver record was created. The time is in the ISO 8601 (RFC 3339) format with time zone offset. The time zone offset is subject to the returned value. If the time information does not exist, this field may be empty or not returned.
   * 
   * @example
   * 2026-09-01T10:30:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The device type to which the driver applies.
   * 
   * @example
   * printer
   */
  deviceType?: string;
  /**
   * @remarks
   * The URL of the brand icon. If no icon is configured, this field may be empty or not returned. The example is a placeholder address.
   * 
   * @example
   * https://example.com/icons/printer.png
   */
  icon?: string;
  /**
   * @remarks
   * The driver ID, which can be used for subsequent queries.
   * 
   * @example
   * 11111111-2222-4333-8444-555555555555
   */
  id?: string;
  /**
   * @remarks
   * The driver name.
   * 
   * @example
   * HP Universal Printing PCL 6
   */
  name?: string;
  /**
   * @remarks
   * The operating system to which the driver applies, such as Windows. The actual returned value prevails.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The driver ownership. Valid values: WUYING: Wuying official drivers. CUSTOMER: custom drivers of the current account.
   * 
   * @example
   * WUYING
   */
  ownerType?: string;
  /**
   * @remarks
   * The driver source. Valid values: OpsApp: uploaded from the management console. WuyingHelper: uploaded from Wuying Assistant. Wuying: from Wuying. Unrecognized sources may also be classified as Wuying. To distinguish between official and custom drivers, use OwnerType.
   * 
   * @example
   * Wuying
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      createTime: 'CreateTime',
      deviceType: 'DeviceType',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      osType: 'OsType',
      ownerType: 'OwnerType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      createTime: 'string',
      deviceType: 'string',
      icon: 'string',
      id: 'string',
      name: 'string',
      osType: 'string',
      ownerType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeripheralDriversResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of matched drivers, not the length of the list on the current page. If no data exists on the current page, 0 may be returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of driver information on the current page. An empty list is returned if no data exists.
   */
  driverInfos?: DescribePeripheralDriversResponseBodyDriverInfos[];
  /**
   * @remarks
   * The reserved field. This field does not provide a valid return value and may not be returned. This operation uses PageSize and PageNumber for pagination. Do not rely on this field. The sample value 20 is used only to demonstrate the integer type and does not represent the actual return value, default value, or page size of the current query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The reserved field. This field does not provide token-based pagination and may not be returned. Do not rely on this field for subsequent queries. The sample value token-for-format-only is used only to demonstrate the string type and is not an actual return value or a usable pagination token.
   * 
   * @example
   * token-for-format-only
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID. You can provide this value for troubleshooting.
   * 
   * @example
   * 00000000-1111-4222-8333-444444444444
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      driverInfos: 'DriverInfos',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      driverInfos: { 'type': 'array', 'itemType': DescribePeripheralDriversResponseBodyDriverInfos },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.driverInfos)) {
      $dara.Model.validateArray(this.driverInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

