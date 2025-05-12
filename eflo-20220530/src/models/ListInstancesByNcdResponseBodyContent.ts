// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesByNcdResponseBodyContentInstanceInfos } from "./ListInstancesByNcdResponseBodyContentInstanceInfos";


export class ListInstancesByNcdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * A collection of instances whose network communication distance from the source instance ID does not exceed maxNcd
   */
  instanceInfos?: ListInstancesByNcdResponseBodyContentInstanceInfos[];
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
   * Maximum communication distance between nodes
   * 
   * @example
   * 3
   */
  maxNcd?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * lni-1234****
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      instanceType: 'InstanceType',
      maxNcd: 'MaxNcd',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ListInstancesByNcdResponseBodyContentInstanceInfos },
      instanceType: 'string',
      maxNcd: 'number',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfos)) {
      $dara.Model.validateArray(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

