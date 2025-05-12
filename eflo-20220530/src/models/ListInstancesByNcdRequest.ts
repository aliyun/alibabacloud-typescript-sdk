// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesByNcdRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lni-1234****
   */
  instanceId?: string;
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
   * Maximum network communication distance
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  maxNcd?: number;
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
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      maxNcd: 'MaxNcd',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      maxNcd: 'number',
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

