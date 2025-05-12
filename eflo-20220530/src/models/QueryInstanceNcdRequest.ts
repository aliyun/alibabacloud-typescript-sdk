// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceNcdRequest extends $dara.Model {
  /**
   * @remarks
   * Instance 1ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-1235****
   */
  instanceId1?: string;
  /**
   * @remarks
   * Instance 2ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-1234****
   */
  instanceId2?: string;
  /**
   * @remarks
   * The parameter that specifies the instance type.
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * This parameter is required.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId1: 'InstanceId1',
      instanceId2: 'InstanceId2',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId1: 'string',
      instanceId2: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

