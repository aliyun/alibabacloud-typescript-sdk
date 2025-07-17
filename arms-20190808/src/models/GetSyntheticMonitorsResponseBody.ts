// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticMonitorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the monitoring point is available. Valid values: true and false.
   * 
   * @example
   * true
   */
  available?: string;
  /**
   * @remarks
   * Indicates whether the monitoring point is selected. Valid values: true and false.
   * 
   * @example
   * true
   */
  canBeSelected?: boolean;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 1100101
   */
  cityCode?: string;
  /**
   * @remarks
   * The client type of the monitoring point. Valid values: 1: data center. 2: Internet. 3: mobile device. 4: ECS instance.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values: 0: IPv6 is not supported. 1: IPv6 is supported.
   * 
   * @example
   * 0
   */
  ipv6?: number;
  /**
   * @remarks
   * The carrier.
   * 
   * @example
   * Alibaba Cloud
   */
  operator?: string;
  /**
   * @remarks
   * The carrier code.
   * 
   * @example
   * 1
   */
  operatorCode?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * Beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      canBeSelected: 'CanBeSelected',
      city: 'City',
      cityCode: 'CityCode',
      clientType: 'ClientType',
      country: 'Country',
      ipv6: 'Ipv6',
      operator: 'Operator',
      operatorCode: 'OperatorCode',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      canBeSelected: 'boolean',
      city: 'string',
      cityCode: 'string',
      clientType: 'number',
      country: 'string',
      ipv6: 'number',
      operator: 'string',
      operatorCode: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticMonitorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The list of monitoring points.
   */
  data?: GetSyntheticMonitorsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FD473FF-5398-5A85-9BF6-7AB45561522F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetSyntheticMonitorsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

