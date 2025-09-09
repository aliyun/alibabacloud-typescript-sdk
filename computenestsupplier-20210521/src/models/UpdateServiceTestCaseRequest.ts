// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceTestCaseRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service test case ID
   * 
   * This parameter is required.
   * 
   * @example
   * stc-2deec15c20b24aaf9f16
   */
  testCaseId?: string;
  /**
   * @remarks
   * Test case name
   * 
   * This parameter is required.
   * 
   * @example
   * case1
   */
  testCaseName?: string;
  /**
   * @remarks
   * Test configuration
   * 
   * This parameter is required.
   * 
   * @example
   * ---
   * parameters:
   *   PayType: "PostPaid"
   *   EcsInstanceType: "$[iact3-auto]"
   *   InstancePassword: "$[iact3-auto]"
   */
  testConfig?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      testCaseId: 'TestCaseId',
      testCaseName: 'TestCaseName',
      testConfig: 'TestConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      testCaseId: 'string',
      testCaseName: 'string',
      testConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

