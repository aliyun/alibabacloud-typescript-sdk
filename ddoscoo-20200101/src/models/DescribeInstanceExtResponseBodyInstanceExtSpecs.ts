// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceExtResponseBodyInstanceExtSpecs extends $dara.Model {
  /**
   * @remarks
   * The function plan. Valid values:
   * 
   * *   **0**: Standard
   * *   **1**: Enhanced
   * 
   * @example
   * 0
   */
  functionVersion?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-i7m25564****
   */
  instanceId?: string;
  /**
   * @remarks
   * The clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  normalBandwidth?: number;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **0**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Insurance mitigation plan
   * *   **1**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Unlimited mitigation plan
   * *   **2**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Chinese Mainland Acceleration (CMA) mitigation plan
   * *   **3**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
   * *   **9**: Anti-DDoS Proxy (Chinese Mainland) instance of the Profession mitigation plan
   * 
   * @example
   * 0
   */
  productPlan?: number;
  /**
   * @remarks
   * The Internet service provider (ISP) line of the Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @example
   * coop-line-001
   */
  servicePartner?: string;
  static names(): { [key: string]: string } {
    return {
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      normalBandwidth: 'NormalBandwidth',
      productPlan: 'ProductPlan',
      servicePartner: 'ServicePartner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionVersion: 'number',
      instanceId: 'string',
      normalBandwidth: 'number',
      productPlan: 'number',
      servicePartner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

