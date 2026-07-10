// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Vehicle5ItemQueryResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - **1**: Match found (billable).
   * - **3**: No record found (not billable).
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The vehicle information.
   * 
   * @example
   * {
   *         "engineNo": "F0******",
   *         "useProperty": 0,
   *         "registrationDate": "****-**-** **:**:**",
   *         "engineType": "B******",
   *         "vin": "A********",
   *         "state": "0",
   *         "modelNo": "B********",
   *         "type": "小型轿车",
   *         "brand": "宝马",
   *         "usePropertyDesc": "非营运",
   *         "stateDesc": "正常"
   *     }
   */
  vehicleInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      vehicleInfo: 'VehicleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      vehicleInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Vehicle5ItemQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D******
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  resultObject?: Vehicle5ItemQueryResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: Vehicle5ItemQueryResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

