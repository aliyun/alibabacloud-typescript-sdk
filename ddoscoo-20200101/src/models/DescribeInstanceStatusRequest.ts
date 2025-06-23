// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Proxy instance to query.
   * 
   * >  You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all Anti-DDoS Proxy (Chinese Mainland) or Anti-DDoS Proxy (Outside Chinese Mainland) instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-6ja1y6p5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the Anti-DDoS Proxy instance to query. Valid values:
   * 
   * *   **1**: an Anti-DDoS Proxy (Chinese Mainland) instance
   * *   **2**: an Anti-DDoS Proxy (Outside Chinese Mainland) instance
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

