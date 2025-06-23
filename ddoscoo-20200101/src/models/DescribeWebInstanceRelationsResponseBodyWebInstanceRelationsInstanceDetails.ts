// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of the instance.
   */
  eipList?: string[];
  /**
   * @remarks
   * The function plan of the instance. Valid values:
   * 
   * *   **default**: Standard function plan
   * *   **enhance**: Enhanced function plan
   * 
   * @example
   * enhance
   */
  functionVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-0pp163pd****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': 'string' },
      functionVersion: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipList)) {
      $dara.Model.validateArray(this.eipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

