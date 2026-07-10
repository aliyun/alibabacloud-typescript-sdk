// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleQueryResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * 
   * > 
   * > - 1: match found (billable).
   * > - 3: no record found (not billable).
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
   * 	"approvedCount": 7,
   * 	"approvedLoad": 0,
   * 	"axleCount": 2,
   * 	"backWheelDistance": 1585,
   * 	"brand": "雷克萨斯",
   * 	"compulsoryScrapTo": "****-**-** **:**:**",
   * 	"displacement": 4608,
   * 	"engineNo": "1UR0******",
   * 	"engineType": "1**",
   * 	"frontWheelDistance": 1585,
   * 	"fuelType": "汽油",
   * 	"high": 1860,
   * 	"inspectionResultEffectiveTo": "****-**-** **:**:**",
   * 	"modelNo": "UR*****-******",
   * 	"power": 228,
   * 	"registrationDate": "****-**-** **:**:**",
   * 	"releaseDate": "",
   * 	"state": "0",
   * 	"stateDesc": "正常",
   * 	"totalMass": 2940,
   * 	"unladenMass": 2350,
   * 	"useProperty": 0,
   * 	"usePropertyDesc": "非营运",
   * 	"long": 4890,
   * 	"vin": "A***********",
   * 	"wheelBase": 2790,
   * 	"wide": 1910
   * }
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

export class VehicleQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate failure.
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
   * D6163397-15C5-419C-9ACC-B7C83*******
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   */
  resultObject?: VehicleQueryResponseBodyResultObject;
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
      resultObject: VehicleQueryResponseBodyResultObject,
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

