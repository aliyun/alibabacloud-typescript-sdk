// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestCasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test-1
   */
  templateName?: string;
  /**
   * @remarks
   * The service test case id.
   * 
   * @example
   * stc-83fcee1383354e35b151
   */
  testCaseId?: string;
  /**
   * @remarks
   * The service test case name.
   * 
   * @example
   * case1
   */
  testCaseName?: string;
  /**
   * @remarks
   * The service test config.
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
      templateName: 'TemplateName',
      testCaseId: 'TestCaseId',
      testCaseName: 'TestCaseName',
      testConfig: 'TestConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
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

