// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VehicleMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - 1: Consistent (billable).
   * - 2: Inconsistent (billable).
   * - 3: No record found (not billable).
   * 
   * @example
   * 1
   */
  bizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. **200** indicates that the request was successful.
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
   * Id of the request
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF4*****
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  resultObject?: VehicleMetaVerifyResponseBodyResultObject;
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
      resultObject: VehicleMetaVerifyResponseBodyResultObject,
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

