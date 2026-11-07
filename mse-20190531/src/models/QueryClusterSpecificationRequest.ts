// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterSpecificationRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - slb
   * - eni
   * 
   * @example
   * slb
   */
  connectType?: string;
  /**
   * @remarks
   * The Microservices Engine (MSE) cluster version to be activated. Valid values:
   * 
   * - mse_pro: Professional Edition.
   * - mse_dev: Developer Edition.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      connectType: 'ConnectType',
      mseVersion: 'MseVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      connectType: 'string',
      mseVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

