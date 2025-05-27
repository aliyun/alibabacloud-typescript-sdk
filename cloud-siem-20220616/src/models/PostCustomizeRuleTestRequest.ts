// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostCustomizeRuleTestRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The simulation data for the test. This parameter is available only when TestType is set to simulate.
   * 
   * @example
   * [{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]
   */
  simulatedData?: string;
  /**
   * @remarks
   * The test type. Valid values:
   * 
   * *   simulate: simulation data test
   * *   business: business data test
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

