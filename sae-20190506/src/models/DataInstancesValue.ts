// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValueListenersValue } from "./DataInstancesValueListenersValue";


export class DataInstancesValue extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  dnsName?: string;
  /**
   * @remarks
   * The listeners.
   */
  listeners?: { [key: string]: DataInstancesValueListenersValue };
  /**
   * @remarks
   * Indicates whether the instance is created by SAE.
   * 
   * *   **true**: The instance is created by SAE.
   * *   **false**: The existing instance is reused.
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

