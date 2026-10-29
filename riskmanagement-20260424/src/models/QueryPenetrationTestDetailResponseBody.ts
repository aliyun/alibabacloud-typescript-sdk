// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPenetrationTestDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application time.
   * 
   * @example
   * 1788873796000
   */
  applyTime?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * - **EIP**: public IP address in a VPC.
   * - **SLB**: load balancing.
   * - **ECS**: public IP address in the classic network.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The unique identity of the application record.
   * 
   * > This field is of the Long type. Precision loss may occur during the procedure to serialize or deserialize the numeric sequence. Ensure that the value does not exceed 9007199254740991.
   * 
   * @example
   * 2387
   */
  id?: number;
  /**
   * @remarks
   * IP
   * 
   * @example
   * 47.113.186.91
   */
  ip?: string;
  /**
   * @remarks
   * Indicates whether the test is performed by a third-party service provider. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  isThirdpartyTest?: boolean;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **early_end**: The user applied for early termination.
   * - **expired**: The authorization has expired.
   * - **auditing**: Under review.
   * - **approved**: Approved.
   * - **rejected**: Rejected.
   * 
   * @example
   * early_end
   */
  status?: string;
  /**
   * @remarks
   * The test content.
   * 
   * > - Maximum 500 characters. Provide detailed information to increase the chance of passing the review.
   * 
   * @example
   * security test
   */
  testContent?: string;
  /**
   * @remarks
   * The test end time.
   * 
   * @example
   * 1788873796000
   */
  testEndDate?: number;
  /**
   * @remarks
   * The source IP addresses used for the test.
   * 
   * > A maximum of 50 IP addresses are supported. Separate multiple IP addresses with line breaks or commas (,). Specify 0.0.0.0 to allow all IP addresses. CIDR blocks are not supported, such as 140.168.0.0/16.
   * 
   * @example
   * 1.1.1.1
   */
  testSourceIps?: string;
  /**
   * @remarks
   * The test start date.
   * 
   * @example
   * 1788873796000
   */
  testStartDate?: number;
  /**
   * @remarks
   * The test steps.
   * 
   * > Maximum 500 characters. Provide detailed information to increase the chance of passing the review.
   * 
   * @example
   * none
   */
  testSteps?: string;
  /**
   * @remarks
   * The email address of the third-party tester.
   * 
   * @example
   * 12312@xxx.com
   */
  thirdpartyEmail?: string;
  /**
   * @remarks
   * The mobile phone number of the third-party tester.
   * 
   * @example
   * 177xxxxxx21
   */
  thirdpartyMobile?: string;
  /**
   * @remarks
   * The third-party tester.
   * 
   * @example
   * zhangsan
   */
  thirdpartyTester?: string;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      assetType: 'AssetType',
      id: 'Id',
      ip: 'Ip',
      isThirdpartyTest: 'IsThirdpartyTest',
      status: 'Status',
      testContent: 'TestContent',
      testEndDate: 'TestEndDate',
      testSourceIps: 'TestSourceIps',
      testStartDate: 'TestStartDate',
      testSteps: 'TestSteps',
      thirdpartyEmail: 'ThirdpartyEmail',
      thirdpartyMobile: 'ThirdpartyMobile',
      thirdpartyTester: 'ThirdpartyTester',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      assetType: 'string',
      id: 'number',
      ip: 'string',
      isThirdpartyTest: 'boolean',
      status: 'string',
      testContent: 'string',
      testEndDate: 'number',
      testSourceIps: 'string',
      testStartDate: 'number',
      testSteps: 'string',
      thirdpartyEmail: 'string',
      thirdpartyMobile: 'string',
      thirdpartyTester: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPenetrationTestDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - **200**: Success.
   * - **Other values (400 and 500)**: Failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response content.
   */
  data?: QueryPenetrationTestDetailResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 855FCC89-0B13-5FC0-AAD2-120878081C1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - **true**: The call is successful.                               
   * - **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPenetrationTestDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

