// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetTestTaskRequestCommTestHosts } from "./CreateNetTestTaskRequestCommTestHosts";


export class CreateNetTestTaskRequestCommTest extends $dara.Model {
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  GPUNum?: number;
  /**
   * @remarks
   * The host IDs.
   */
  hosts?: CreateNetTestTaskRequestCommTestHosts[];
  /**
   * @remarks
   * The communication library model.
   * 
   * @example
   * intention_v4
   */
  model?: string;
  /**
   * @remarks
   * The CommTest type, which can be ACCL or NCCL.
   * 
   * @example
   * ACCL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      GPUNum: 'GPUNum',
      hosts: 'Hosts',
      model: 'Model',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUNum: 'number',
      hosts: { 'type': 'array', 'itemType': CreateNetTestTaskRequestCommTestHosts },
      model: 'string',
      type: 'string',
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

