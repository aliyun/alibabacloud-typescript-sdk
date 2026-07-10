// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClickHouseDBTimezonesResponseBodyTimeZones extends $dara.Model {
  /**
   * @remarks
   * The enumeration value for the time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClickHouseDBTimezonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  /**
   * @remarks
   * The list of time zones that ClickHouse supports.
   */
  timeZones?: ListClickHouseDBTimezonesResponseBodyTimeZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeZones: 'TimeZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeZones: { 'type': 'array', 'itemType': ListClickHouseDBTimezonesResponseBodyTimeZones },
    };
  }

  validate() {
    if(Array.isArray(this.timeZones)) {
      $dara.Model.validateArray(this.timeZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

