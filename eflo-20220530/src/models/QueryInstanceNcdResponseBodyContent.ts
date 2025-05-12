// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceNcdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Instance 1ID
   * 
   * @example
   * lni-1235****
   */
  instanceId1?: string;
  /**
   * @remarks
   * Instance 2ID
   * 
   * @example
   * lni-1234****
   */
  instanceId2?: string;
  /**
   * @remarks
   * Instance Type
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * network communication distance between instances
   * 
   * @example
   * 1
   */
  ncd?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId1: 'InstanceId1',
      instanceId2: 'InstanceId2',
      instanceType: 'InstanceType',
      ncd: 'Ncd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId1: 'string',
      instanceId2: 'string',
      instanceType: 'string',
      ncd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

