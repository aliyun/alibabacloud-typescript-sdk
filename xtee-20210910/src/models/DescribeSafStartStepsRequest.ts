// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafStartStepsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether the server is an Alibaba Cloud server. Valid values: true and false.
   * 
   * @example
   * true
   */
  aliyunServer?: boolean;
  /**
   * @remarks
   * The string of device type collection passed from the frontend that cannot be received by POP.
   *      
   * The device type.
   * 
   * @example
   * ios
   */
  deviceTypesStr?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_ahqido8038
   */
  eventCode?: string;
  /**
   * @remarks
   * The language. Valid values:
   * - zh-CN: Chinese (default)
   * - en-US: English.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The region where the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  serverRegion?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      aliyunServer: 'aliyunServer',
      deviceTypesStr: 'deviceTypesStr',
      eventCode: 'eventCode',
      language: 'language',
      regId: 'regId',
      serverRegion: 'serverRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      aliyunServer: 'boolean',
      deviceTypesStr: 'string',
      eventCode: 'string',
      language: 'string',
      regId: 'string',
      serverRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

