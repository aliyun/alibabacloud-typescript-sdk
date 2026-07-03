// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostCustomizeRuleTestRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The region where the Data Management center of threat analysis is located. Select the region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member that the administrator wants to impersonate to view data.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The simulated data for the test. This parameter is required only when TestType is set to simulate.
   * 
   * @example
   * [{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]
   */
  simulatedData?: string;
  /**
   * @remarks
   * The test type. Valid values:
   * 
   * - simulate: tests the rule with simulated data
   * 
   * - business: tests the rule with business data
   * 
   * @example
   * simulate
   */
  testType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      simulatedData: 'SimulatedData',
      testType: 'TestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      simulatedData: 'string',
      testType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

