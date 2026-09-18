// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestConnectivityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The tracking identifier of the connectivity test. The system generates this value for the first call. For polling calls, this value is the same as the CheckId in the request.
   * 
   * @example
   * conn-a1b2c3d4e5f67890
   */
  checkId?: string;
  /**
   * @remarks
   * The end-to-end latency of the target service response, in milliseconds. This value may be 0 or not returned when VerifyStatus is checking.
   * 
   * @example
   * 1200
   */
  latencyMs?: number;
  /**
   * @remarks
   * The detailed information of the verification result. When VerifyStatus is verified, this value is a snippet of the response returned by the target service. When VerifyStatus is failed, this value describes the error cause, such as authentication failure, timeout, or empty response.
   * 
   * @example
   * Connectivity verification succeeded
   */
  verifyMessage?: string;
  /**
   * @remarks
   * The current status of the connectivity verification.
   * 
   * @example
   * verified
   */
  verifyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      latencyMs: 'LatencyMs',
      verifyMessage: 'VerifyMessage',
      verifyStatus: 'VerifyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      latencyMs: 'number',
      verifyMessage: 'string',
      verifyStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result details of the connectivity test.
   */
  data?: TestConnectivityResponseBodyData;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TestConnectivityResponseBodyData,
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

