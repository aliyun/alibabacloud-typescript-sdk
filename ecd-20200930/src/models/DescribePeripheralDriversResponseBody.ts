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
   * The time when the driver record was created, in ISO 8601 (RFC 3339) format with a time zone offset. The time zone offset is based on the returned value. This field may be empty or not returned if the time information does not exist.
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
   * The brand icon URL. This field may be empty or not returned if no icon is configured. The example value is for illustration purposes only.
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
   * The driver ownership. Valid values:
   * - WUYING: Wuying official driver.
   * - CUSTOMER: Custom driver of the current account.
   * 
   * @example
   * WUYING
   */
  ownerType?: string;
  /**
   * @remarks
   * The driver source. Valid values:
   * - OpsApp: Uploaded from the management console.
   * - WuyingHelper: Uploaded from Wuying Helper.
   * - Wuying: Wuying source.
   * 
   * Unrecognized sources may also be classified as Wuying. To distinguish between official and custom drivers, use OwnerType.
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
   * The total number of matching drivers, not the length of the current page list. This value may be 0 when the current page contains no data.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of driver information on the current page. An empty list is returned when no data is available.
   */
  driverInfos?: DescribePeripheralDriversResponseBodyDriverInfos[];
  /**
   * @remarks
   * Reserved field. This field does not provide a valid return value and may not be returned. This operation uses PageSize and PageNumber for pagination. Do not rely on this field. The example value 20 is provided only to illustrate the integer type and does not represent the actual return value, default value, or page size of this operation.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Reserved field. Token-based pagination is not supported and this field may not be returned. Do not rely on this field for continued queries. The example value token-for-format-only is provided only to illustrate the string type and is not an actual return value or a usable pagination token.
   * 
   * @example
   * token-for-format-only
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID. Provide this value when troubleshooting issues.
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

