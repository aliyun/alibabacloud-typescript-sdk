// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEngineNamepaceRequest extends $dara.Model {
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
   * mse-98s****
   */
  clusterId?: string;
  /**
   * @remarks
   * The destination ID.
   * 
   * @example
   * 0e958d79-****-b282-b702d66362b5
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse.cn-hangzhou.aliyuncs.com
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      id: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

