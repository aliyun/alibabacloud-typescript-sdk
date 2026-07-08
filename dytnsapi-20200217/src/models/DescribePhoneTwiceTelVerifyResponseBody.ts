// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneTwiceTelVerifyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The carrier that provides service for the number. Valid values:
   * 
   * - **CMCC**: China Mobile.
   * 
   * - **CUCC**: China Unicom.
   * 
   * - **CTCC**: China Telecom.
   * 
   * > The carrier that currently provides service for the number. For a ported number, this is the destination carrier.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - **0**: Cannot be determined.
   * 
   * - **1**: The number is a recycled number.
   * 
   * - **2**: The number is not a recycled number.
   * 
   * - **3**: The number has been deactivated.
   * 
   * - **4**: Unknown: The number was transferred to a new owner.
   * 
   * @example
   * 1
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneTwiceTelVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **PortabilityNumberNotSupported**: Queries for this ported number are not supported.
   * 
   * - **RequestNumberNotSupported**: Queries are not supported for numbers from China Broadnet (starting with 192), mobile virtual network operators, and other unsupported carriers.
   * 
   * - **RequestFrequencyLimit**: Carriers limit frequent queries for the same number. If you receive this error code, try again later.
   * 
   * > A charge applies when the value of `Code` is `OK` and the value of `VerifyResult` is not `0`. For more information, see [Phone Number Service pricing](https://help.aliyun.com/document_detail/154751.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A data structure that contains the verification results.
   */
  data?: DescribePhoneTwiceTelVerifyResponseBodyData;
  /**
   * @remarks
   * A description of the returned status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. This common parameter is returned with each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
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
      code: 'string',
      data: DescribePhoneTwiceTelVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

