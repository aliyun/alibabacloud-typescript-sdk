// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMachineSpecResponseBodyInstanceMetas } from "./DescribeMachineSpecResponseBodyInstanceMetas";
import { DescribeMachineSpecResponseBodyTypes } from "./DescribeMachineSpecResponseBodyTypes";


export class DescribeMachineSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance types when the resources are specified.
   */
  instanceMetas?: DescribeMachineSpecResponseBodyInstanceMetas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The values that can be supported when the number of CPUs and memory size are specified for deployment.
   */
  types?: DescribeMachineSpecResponseBodyTypes[];
  static names(): { [key: string]: string } {
    return {
      instanceMetas: 'InstanceMetas',
      requestId: 'RequestId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMetas: { 'type': 'array', 'itemType': DescribeMachineSpecResponseBodyInstanceMetas },
      requestId: 'string',
      types: { 'type': 'array', 'itemType': DescribeMachineSpecResponseBodyTypes },
    };
  }

  validate() {
    if(Array.isArray(this.instanceMetas)) {
      $dara.Model.validateArray(this.instanceMetas);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

