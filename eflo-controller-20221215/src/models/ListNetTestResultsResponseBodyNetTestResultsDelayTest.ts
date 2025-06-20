// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts } from "./ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts";


export class ListNetTestResultsResponseBodyNetTestResultsDelayTest extends $dara.Model {
  /**
   * @remarks
   * The hosts.
   */
  hosts?: ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts },
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

