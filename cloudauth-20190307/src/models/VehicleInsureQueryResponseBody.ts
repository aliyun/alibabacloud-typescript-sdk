// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleInsureQueryResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification result code:
   * 
   * > 
   * > - 1: Found (charged)
   * > - 3: No record found (not charged)
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Insurance date information
   * 
   * @example
   * {
   *     "firstInsuranceDate": "****-**-**",
   *     "lastInsuranceDate": "****-**",
   *     "latestInsuranceDate": "****-**",
   *     "latestInsuranceDateStart": "****-**"
   *   }
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

export class VehicleInsureQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 indicates success, others indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response message for the request information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F52********
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
   */
  resultObject?: VehicleInsureQueryResponseBodyResultObject;
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
      resultObject: VehicleInsureQueryResponseBodyResultObject,
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

