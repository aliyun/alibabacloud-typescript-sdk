// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMseSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * mse-af1****-nacos-ans.mse.aliyuncs.com:8848
   */
  address?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * mse_
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * mse_prepaid_public_cn-7pp2eec****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * Nacos
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

