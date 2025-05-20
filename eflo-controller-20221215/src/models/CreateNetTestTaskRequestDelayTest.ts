// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetTestTaskRequestDelayTestHosts } from "./CreateNetTestTaskRequestDelayTestHosts";


export class CreateNetTestTaskRequestDelayTest extends $dara.Model {
  /**
   * @remarks
   * 输入测试节点的hosts
   */
  hosts?: CreateNetTestTaskRequestDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': CreateNetTestTaskRequestDelayTestHosts },
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

