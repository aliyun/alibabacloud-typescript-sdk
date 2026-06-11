// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh and en. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

