// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLogstashRequestNetworkConfig } from "./CreateLogstashRequestNetworkConfig";
import { CreateLogstashRequestNodeSpec } from "./CreateLogstashRequestNodeSpec";
import { CreateLogstashRequestPaymentInfo } from "./CreateLogstashRequestPaymentInfo";


export class CreateLogstashRequest extends $dara.Model {
  /**
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfig?: CreateLogstashRequestNetworkConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeSpec?: CreateLogstashRequestNodeSpec;
  paymentInfo?: CreateLogstashRequestPaymentInfo;
  /**
   * @example
   * prepaid
   */
  paymentType?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  version?: string;
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentInfo: 'paymentInfo',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      version: 'version',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkConfig: CreateLogstashRequestNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: CreateLogstashRequestNodeSpec,
      paymentInfo: CreateLogstashRequestPaymentInfo,
      paymentType: 'string',
      resourceGroupId: 'string',
      version: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(this.paymentInfo && typeof (this.paymentInfo as any).validate === 'function') {
      (this.paymentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

