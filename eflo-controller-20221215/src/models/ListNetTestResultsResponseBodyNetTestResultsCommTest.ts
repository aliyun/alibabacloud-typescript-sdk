// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResultsCommTestHosts } from "./ListNetTestResultsResponseBodyNetTestResultsCommTestHosts";


export class ListNetTestResultsResponseBodyNetTestResultsCommTest extends $dara.Model {
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  GPUNum?: string;
  /**
   * @remarks
   * The hosts of the test node.
   */
  hosts?: ListNetTestResultsResponseBodyNetTestResultsCommTestHosts[];
  /**
   * @remarks
   * The communication library model.
   * 
   * @example
   * AllToAll
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
      GPUNum: 'string',
      hosts: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsCommTestHosts },
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

