// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafStartStepsRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Whether the server is an Alibaba Cloud server
   * 
   * true or false
   * 
   * @example
   * true
   */
  aliyunServer?: boolean;
  /**
   * @remarks
   * Used to receive a collection of strings from the frontend that POP cannot accept
   *      
   * Device type
   * 
   * @example
   * ios
   */
  deviceTypesStr?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_ahqido8038
   */
  eventCode?: string;
  /**
   * @remarks
   * Language, parameters can be passed
   * - zh-CN: Chinese (default)
   * - en-US: English
   * 
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Server region
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

