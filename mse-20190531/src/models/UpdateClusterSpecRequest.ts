// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * The destination engine specifications.
   * 
   * @example
   * MSE_SC_2_4_200_c
   */
  clusterSpecification?: string;
  /**
   * @remarks
   * The number of destination nodes.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The MSE version.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  pubNetworkFlow?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      autoPay: 'AutoPay',
      clusterId: 'ClusterId',
      clusterSpecification: 'ClusterSpecification',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      mseVersion: 'MseVersion',
      pubNetworkFlow: 'PubNetworkFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      autoPay: 'boolean',
      clusterId: 'string',
      clusterSpecification: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      mseVersion: 'string',
      pubNetworkFlow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

