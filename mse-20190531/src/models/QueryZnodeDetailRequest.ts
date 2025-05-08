// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryZnodeDetailRequest extends $dara.Model {
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
   * mse-cn-5bffa4e8630
   */
  instanceId?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * /zookeeper
   */
  path?: string;
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
      path: 'Path',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      instanceId: 'string',
      path: 'string',
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

