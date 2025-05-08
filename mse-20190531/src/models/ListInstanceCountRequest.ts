// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceCountRequest extends $dara.Model {
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
   * The type of the instance. Valid values: ZooKeeper and Nacos-Ans.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The edition type of the instance. Valid values:
   * 
   * *   `mse_dev`: Developer Edition
   * *   `mse_pro`: Professional Edition
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. Examples:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * *   cn-zhangjiakou: China (Zhangjiakou)
   * *   cn-shenzhen: China (Shenzhen)
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
      clusterType: 'ClusterType',
      mseVersion: 'MseVersion',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      mseVersion: 'string',
      regionId: 'string',
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

