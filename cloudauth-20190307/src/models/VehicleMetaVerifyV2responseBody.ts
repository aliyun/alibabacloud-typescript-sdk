// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleMetaVerifyV2ResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result code. Valid values:
   * - **1**: The verification is consistent.
   * - **2**: The verification is inconsistent.
   * - **3**: No record is found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The detailed vehicle information.
   * 
   * @example
   * {
   * 	"approvedCount": "7",
   * 	"approvedLoad": "0",
   * 	"axleCount": "2",
   * 	"backWheelDistance": "1585",
   * 	"brand": "Lexus",
   * 	"displacement": "4608",
   * 	"engineNum": "1*********",
   * 	"engineType": "1**",
   * 	"frontWheelDistance": "1585",
   * 	"fuelType": "Gasoline",
   * 	"inspectionDate": "****-**-** **:**:**",
   * 	"modelNum": "UR*****-******",
   * 	"power": "228",
   * 	"registrationDate": "****-**-** **:**:**",
   * 	"retirementDate": "****-**-** **:**:**",
   * 	"totalMass": "2940",
   * 	"unladenMass": "2350",
   * 	"useProperty": "Non-commercial",
   * 	"vehicleState": "Normal",
   * 	"vin": "JT***************",
   * 	"wheelBase": "2790"
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

export class VehicleMetaVerifyV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. **200** indicates that the API operation is successful.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * 5A6229C0-E156-48E4-B6EC-0F528B******
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: VehicleMetaVerifyV2ResponseBodyResultObject;
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
      resultObject: VehicleMetaVerifyV2ResponseBodyResultObject,
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

