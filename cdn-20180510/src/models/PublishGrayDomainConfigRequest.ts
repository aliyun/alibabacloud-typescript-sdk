// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishGrayDomainConfigRequest extends $dara.Model {
  customCountryId?: number;
  /**
   * @example
   * 15
   */
  customPercent?: number;
  customProvinceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * publishByCustom
   */
  publishMode?: string;
  static names(): { [key: string]: string } {
    return {
      customCountryId: 'CustomCountryId',
      customPercent: 'CustomPercent',
      customProvinceId: 'CustomProvinceId',
      domainName: 'DomainName',
      publishMode: 'PublishMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customCountryId: 'number',
      customPercent: 'number',
      customProvinceId: 'number',
      domainName: 'string',
      publishMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

