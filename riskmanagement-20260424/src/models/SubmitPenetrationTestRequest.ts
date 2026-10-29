// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPenetrationTestRequest extends $dara.Model {
  /**
   * @remarks
   * The asset list.
   * 
   * > The array supports up to 50 IP addresses.
   * 
   * @example
   * [{"AssetType":"SLB","Ip":"47.114.52.93"}]
   */
  assetList?: string;
  /**
   * @remarks
   * Specifies whether the test is performed by a third-party testing service provider. Valid values:
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
   * The test content.
   * 
   * > The content must be up to 500 characters in length. Provide detailed information to facilitate the approval process.
   * 
   * @example
   * security test
   */
  testContent?: string;
  /**
   * @remarks
   * The end time of the test.
   * 
   * @example
   * 2026-10-30
   */
  testEndDate?: string;
  /**
   * @remarks
   * The source IP addresses used for the test.
   * 
   * > Up to 50 IP addresses are supported. Separate multiple IP addresses with line breaks or commas (,). Enter 0.0.0.0 to allow all IP addresses. CIDR blocks such as 140.168.0.0/16 are not supported.
   * 
   * @example
   * 0.0.0.0
   */
  testSourceIps?: string;
  /**
   * @remarks
   * The start date of the test.
   * 
   * @example
   * 2026-09-30
   */
  testStartDate?: string;
  /**
   * @remarks
   * The test steps.
   * 
   * > The steps must be up to 500 characters in length. Provide detailed information to facilitate the approval process.
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
   * 123xxxxx@xx.com
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
   * The name of the third-party tester.
   * 
   * @example
   * zhangsan
   */
  thirdpartyTester?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      isThirdpartyTest: 'IsThirdpartyTest',
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
      assetList: 'string',
      isThirdpartyTest: 'boolean',
      testContent: 'string',
      testEndDate: 'string',
      testSourceIps: 'string',
      testStartDate: 'string',
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

