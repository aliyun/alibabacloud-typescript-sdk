// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceTestCaseRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * This parameter is required.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom_Image_Ecs
   */
  templateName?: string;
  /**
   * @remarks
   * Service Test case name.
   * 
   * This parameter is required.
   * 
   * @example
   * case1
   */
  testCaseName?: string;
  /**
   * @remarks
   * The service test config
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
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
      testCaseName: 'TestCaseName',
      testConfig: 'TestConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
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

