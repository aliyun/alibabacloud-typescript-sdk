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
   * The asset type. Valid values:
   * 
   * - **EIP**: public IP address of a VPC
   * - **SLB**: load balancing
   * - **ECS**: public IP address of an ECS instance in the classic network
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The unique ID of the application record.
   * 
   * > This field is of the Long type. Precision loss may occur when you serialize or deserialize the value. Make sure that the value does not exceed 9007199254740991.
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
   * Indicates whether the test is performed by a third-party service provider.
   * 
   * - true: Yes.
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
   * - **early_end**: The user applies for early termination.
   * - **expired**: The authorization has expired.
   * - **auditing**: The application is being reviewed.
   * - **approved**: The application is approved.
   * - **rejected**: The application is rejected.
   * 
   * @example
   * early_end
   */
  status?: string;
  /**
   * @remarks
   * The test content.
   * 
   * > - The content must be within 500 characters. Carefully fill in the content to increase the chance of passing the review.
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
   * > You can specify up to 50 IP addresses. Separate multiple IP addresses with line breaks or commas (,). Specify 0.0.0.0 to allow all IP addresses. CIDR blocks are not supported, such as 140.168.0.0/16.
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
   * > The content must be within 500 characters. Carefully fill in the content to increase the chance of passing the review.
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
   * - **200**: success
   * - **Other values (400, 500)**: failure
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
   * The description.
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
   * Indicates whether the call is successful.
   * 
   * - **true**: The call is successful.                               
   * - **false**: The call failed.
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

