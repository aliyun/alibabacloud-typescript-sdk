// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetTestResultResponseBodyDelayTestHosts } from "./DescribeNetTestResultResponseBodyDelayTestHosts";


export class DescribeNetTestResultResponseBodyDelayTest extends $dara.Model {
  /**
   * @remarks
   * Input the hosts of the test nodes
   */
  hosts?: DescribeNetTestResultResponseBodyDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyDelayTestHosts },
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

