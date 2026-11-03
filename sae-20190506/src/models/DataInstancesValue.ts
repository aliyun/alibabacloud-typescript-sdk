// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataInstancesValueListenersValue } from "./DataInstancesValueListenersValue";


export class DataInstancesValue extends $dara.Model {
  /**
   * @remarks
   * The DNS domain name.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  dnsName?: string;
  /**
   * @remarks
   * The listener information.
   */
  listeners?: { [key: string]: DataInstancesValueListenersValue };
  /**
   * @remarks
   * Specifies whether the instance is purchased by Serverless App Engine (SAE). Valid values:
   * 
   * - **true**: The instance is created by SAE on your behalf.
   * - **false**: An existing instance is reused.
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

