// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValue } from "./DataInstancesValue";


export class DescribeApplicationNlbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  instances?: { [key: string]: DataInstancesValue };
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'map', 'keyType': 'string', 'valueType': DataInstancesValue },
    };
  }

  validate() {
    if(this.instances) {
      $dara.Model.validateMap(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

