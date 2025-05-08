// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterTypesRequest extends $dara.Model {
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
   * The network type. Valid values:
   * 
   * *   slb
   * *   eni
   * 
   * @example
   * slb
   */
  connectType?: string;
  /**
   * @remarks
   * The edition of the MSE instance that you want to purchase.
   * 
   * *   mse_pro: Professional Edition
   * *   mse_dev: Developer Edition
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. The region is supported by Microservices Engine (MSE).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      connectType: 'ConnectType',
      mseVersion: 'MseVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      connectType: 'string',
      mseVersion: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

