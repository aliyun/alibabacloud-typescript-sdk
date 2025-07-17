// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticTaskMonitorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task status.
   * 
   * *   0: active
   * *   1: busy
   * 
   * @example
   * 0
   */
  busy?: number;
  /**
   * @remarks
   * The name of the city to which the monitoring point belongs.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The ID of the city to which the monitoring point belongs.
   * 
   * @example
   * 1100101
   */
  cityCode?: number;
  /**
   * @remarks
   * The client type:
   * 
   * *   1: IDC
   * *   2: Last mile
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The region to which the monitoring point belongs.
   * 
   * @example
   * Beijing
   */
  district?: string;
  /**
   * @remarks
   * The ID of the carrier.
   * 
   * @example
   * 18
   */
  netServiceId?: number;
  /**
   * @remarks
   * The name of the carrier.
   * 
   * @example
   * XXX
   */
  netServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      busy: 'Busy',
      city: 'City',
      cityCode: 'CityCode',
      clientType: 'ClientType',
      district: 'District',
      netServiceId: 'NetServiceId',
      netServiceName: 'NetServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busy: 'number',
      city: 'string',
      cityCode: 'number',
      clientType: 'number',
      district: 'string',
      netServiceId: 'number',
      netServiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticTaskMonitorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * *   1001: The request was successful.
   * *   1002: The request failed.
   * *   1003: Parameter errors occurred.
   * *   1004: Authentication failed.
   * *   1006: The task does not exist.
   * *   1099: Internal errors occurred.
   * 
   * @example
   * 1001
   */
  code?: string;
  /**
   * @remarks
   * The details of the monitoring point.
   */
  data?: GetSyntheticTaskMonitorsResponseBodyData[];
  /**
   * @remarks
   * The message that is returned when the request failed.
   * 
   * @example
   * null
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 21E85B16-75A6-429A-9F65-8AAC9A54****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSyntheticTaskMonitorsResponseBodyData },
      msg: 'string',
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

