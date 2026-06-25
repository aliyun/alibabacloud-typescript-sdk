// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValueListenersValue } from "./DataInstancesValueListenersValue";


export class DataInstancesValue extends $dara.Model {
  /**
   * @remarks
   * The DNS name.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  dnsName?: string;
  /**
   * @remarks
   * A collection of listener details.
   */
  listeners?: { [key: string]: DataInstancesValueListenersValue };
  /**
   * @remarks
   * Indicates whether SAE created the instance. Valid values:
   * 
   * - **true**: SAE created the instance.
   * 
   * - **false**: SAE reused an existing instance.
   * 
   * @example
   * true
   */
  createdBySae?: boolean;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      listeners: 'Listeners',
      createdBySae: 'CreatedBySae',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      listeners: { 'type': 'map', 'keyType': 'string', 'valueType': DataInstancesValueListenersValue },
      createdBySae: 'boolean',
    };
  }

  validate() {
    if(this.listeners) {
      $dara.Model.validateMap(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

