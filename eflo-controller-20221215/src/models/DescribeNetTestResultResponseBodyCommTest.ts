// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetTestResultResponseBodyCommTestHosts } from "./DescribeNetTestResultResponseBodyCommTestHosts";


export class DescribeNetTestResultResponseBodyCommTest extends $dara.Model {
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 1
   */
  GPUNum?: string;
  /**
   * @remarks
   * Resource ID
   */
  hosts?: DescribeNetTestResultResponseBodyCommTestHosts[];
  /**
   * @remarks
   * Communication library model
   * 
   * @example
   * intention_v4
   */
  model?: string;
  /**
   * @remarks
   * Communication library test category: ACCL or NCCL
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
      GPUNum: 'string',
      hosts: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyCommTestHosts },
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

