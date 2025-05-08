// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartClusterRequest extends $dara.Model {
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
   * The ID of the instance.
   * 
   * @example
   * mse-cn-78v1l83****
   */
  instanceId?: string;
  /**
   * @remarks
   * The names of pods. You can specify the names of multiple pods at a time. Separate multiple pod names with commas (,). Example: mse-a8aba010-1629719288255-reg-center-0-1,mse-a8aba010-1629719288255-reg-center-0-2.
   * 
   * The specified pods must belong to the current cluster and be associated with the specified instance. Otherwise, a restart exception occurs.
   * 
   * @example
   * mse-a8aba010-1629719288255-reg-center-0-1
   */
  podNameList?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      podNameList: 'PodNameList',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      instanceId: 'string',
      podNameList: 'string',
      requestPars: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

